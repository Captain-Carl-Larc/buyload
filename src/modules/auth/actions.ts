"use server"; // Ensures this function only executes on the server

// 1. Import the 'db' singleton from the core plumbing
import { db } from "@/core/db";
// 2. Import bcrypt to handle the security side of registration
import bcrypt from "bcryptjs";

import { getServerSession } from "next-auth";
import { authOptions } from "@/core/auth";
import { revalidatePath } from "next/cache";


/**
 * Handles the logic for creating a new account in the system.
 * This is used during the initial setup of Buyload.
 */
export async function handleRegister(formData: FormData) {
  // A. Extract the raw strings from the form input fields
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const name = formData.get("name") as string;

  // B. Validation: Prevent empty submissions from hitting the database
  if (!email || !password || !name) {
    throw new Error("All fields are required to create an account.");
  }

  // C. Security: Check if this email is already registered
  const existingUser = await db.user.findUnique({
    where: { email }
  });

  if (existingUser) {
    throw new Error("This email is already linked to an account.");
  }

  // D. Encryption: Scramble the password before it leaves the server memory
  // 10 is the standard 'salt rounds' for a good balance of speed and security
  const hashedPassword = await bcrypt.hash(password, 10);

  // E. Database Entry: Save the new record using the Prisma 'db' assistant
  await db.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
      role: "VIEWER" // Assigning VIEWER status for your initial setup
    }
  });
  

 // F. SUCCESS RESPONSE
// We return this object so the frontend knows it's time to auto-login
return { 
  success: true, 
  user: { email: email },
  message: "Account created successfully" 
};
  
}

/**
 * UPDATE USER
 * Changes name, email, or role.
 */
export async function updateUser(userId: string, data: { name: string; email: string; role: string }) {
  const session = await getServerSession(authOptions);
  
  // 1. Basic Session Check
  if (!session?.user) throw new Error("Not authenticated");

  const isEditingSelf = session.user.id === userId;
  const isAdmin = session.user.role === "ADMIN";

  // 2. SECURITY GATE
  // If you aren't an admin AND you aren't editing yourself -> BLOCKED
  if (!isAdmin && !isEditingSelf) {
    throw new Error("Unauthorized: You can only edit your own profile.");
  }

  // 3. ROLE PROTECTION
  // If editing self, we FORCED the role to stay exactly as it is in the DB
  if (isEditingSelf && data.role !== session.user.role) {
    throw new Error("Security Alert: You cannot change your own administrative rank.");
  }

  // 4. PREVENT NON-ADMINS FROM PROMOTING THEMSELVES
  // (In case an Editor tries to send a "role: ADMIN" request via the console)
  if (!isAdmin && data.role === "ADMIN") {
    throw new Error("You do not have permission to grant Administrative access.");
  }

  // 5. DATABASE UPDATE
  await db.user.update({
    where: { id: userId },
    data: {
      name: data.name,
      email: data.email,
      // Only update role if the person doing the editing is an ADMIN
      ...(isAdmin && !isEditingSelf ? { role: data.role as any } : {}),
    },
  });

  revalidatePath("/admin/users");
  return { success: true };
}


/**
 * DELETE USER
 */
export async function deleteUser(userId: string) {
  const session = await getServerSession(authOptions);

  // 1. Security Check
  if (!session || session.user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }

  // 2. Suicide Prevention: Don't let Michelle delete herself!
  if (userId === session.user.id) {
    return { success: false, message: "You cannot delete your own admin account." };
  }

  // 3. Database Operation
  await db.user.delete({
    where: { id: userId },
  });

  // 4. Refresh the UI
  revalidatePath("/admin/users");
  return { success: true };
}