"use server"; // Ensures this function only executes on the server

// 1. Import the 'db' singleton from the core plumbing
import { db } from "@/core/db";
// 2. Import bcrypt to handle the security side of registration
import bcrypt from "bcryptjs";

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