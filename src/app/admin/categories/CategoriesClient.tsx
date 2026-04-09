"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import CategoryTable from "@/modules/categories/components/CategoryTable";
import CreateCategoryModal from "@/modules/categories/components/CreateCategoryModal";

export default function CategoriesClient({ initialCategories }: { initialCategories: any[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="font-bold text-zinc-900 text-2xl tracking-tight">Categories</h1>
          <p className="text-zinc-500 text-sm">Organize your content for better SEO.</p>
        </div>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-black hover:bg-zinc-800 px-4 py-2 rounded-xl font-bold text-white text-sm transition"
        >
          <Plus size={18} /> Add Category
        </button>
      </div>

      {/* The table gets the data passed down from the server */}
      <CategoryTable initialCategories={initialCategories} />

      {isModalOpen && (
        <CreateCategoryModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}