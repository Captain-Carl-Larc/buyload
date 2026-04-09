"use server";

import { db } from "@/core/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/core/auth";
import { revalidatePath } from "next/cache";

/**
 * UPDATE USER
 * Changes name, email, or role.
 */
export async function updateUser(userId: string, data: { name: string; email: string; role: string }) {
  const session = await getServerSession(authOptions);

  // 1. Security Check: Only Admins can edit users
  if (!session || session.user.role !== "ADMIN") {
    throw new Error("Unauthorized: Only administrators can modify users.");
  }

  // 2. Database Operation
  await db.user.update({
    where: { id: userId },
    data: {
      name: data.name,
      email: data.email,
      role: data.role as any, // Cast to any to match Prisma Enum
    },
  });

  // 3. Refresh the UI
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