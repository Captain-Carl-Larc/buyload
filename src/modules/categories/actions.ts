"use server";

import { db } from "@/core/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/core/auth";
import { revalidatePath } from "next/cache";

/**
 * HELPER: Turn "Web Dev" into "web-dev"
 */
const slugify = (text: string) => 
  text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

export async function updateCategory(id: string, data: { name: string; description?: string }) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "ADMIN") throw new Error("Unauthorized");

  // Basic Validation
  if (data.name.trim().length < 6) throw new Error("Category name is too short");

  await db.category.update({
    where: { id },
    data: {
      name: data.name,
      slug: slugify(data.name), // Keep URL in sync with name
      description: data.description,
    },
  });

  revalidatePath("/admin/categories");
  return { success: true };
}

export async function deleteCategory(id: string) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "ADMIN") throw new Error("Unauthorized");

  // Check if category has posts before deleting (to prevent broken links)
  const category = await db.category.findUnique({
    where: { id },
    include: { _count: { select: { posts: true } } }
  });

  if (category?._count.posts && category._count.posts > 0) {
    throw new Error(`Cannot delete: This category contains ${category._count.posts} posts.`);
  }

  await db.category.delete({ where: { id } });

  revalidatePath("/admin/categories");
  return { success: true };
}

export async function createCategory(data: { name: string; description?: string }) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "ADMIN") throw new Error("Unauthorized");

  // 1. Validation
  const name = data.name.trim();
  if (name.length < 2) throw new Error("Category name is too short");

  // 2. Slug Generation
  const slug = slugify(name);

  // 3. Check for duplicates
  const existing = await db.category.findUnique({ where: { slug } });
  if (existing) throw new Error("A category with this name already exists.");

  // 4. Create in DB
  await db.category.create({
    data: {
      name,
      slug,
      description: data.description,
    },
  });

  revalidatePath("/admin/categories");
  return { success: true };
}