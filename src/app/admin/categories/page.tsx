import { db } from "@/core/db";
import CategoriesClient from "./CategoriesClient";

// This ensures the page always gets fresh data from the DB
export const revalidate = 0; 

export default async function CategoriesPage() {
  const categories = await db.category.findMany({
    orderBy: { name: 'asc' },
  });

  return (
    <div className="p-8">
      {/* We pass the data into the client component */}
      <CategoriesClient initialCategories={categories} />
    </div>
  );
}