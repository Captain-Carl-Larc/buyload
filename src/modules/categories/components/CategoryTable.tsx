"use client";

import { useState } from "react";
import { Edit2, Trash2, Folder, Globe } from "lucide-react";
import { deleteCategory } from "../actions";
import CategoryEditModal from "./CategoryEditModal";

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  _count?: { posts: number };
}

export default function CategoryTable({ initialCategories }: { initialCategories: Category[] }) {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleDelete = async (id: string) => {
    if (confirm("Delete this category? This cannot be undone.")) {
      try {
        await deleteCategory(id);
      } catch (err: any) {
        alert(err.message);
      }
    }
  };

  return (
    <div className="bg-white shadow-sm border border-zinc-200 rounded-2xl overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-zinc-50 border-zinc-200 border-b">
          <tr>
            <th className="px-6 py-4 font-bold text-zinc-500 text-xs uppercase">Category Info</th>
            <th className="px-6 py-4 font-bold text-zinc-500 text-xs text-right uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-100">
          {initialCategories.map((cat) => (
            <tr key={cat.id} className="hover:bg-zinc-50/50 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex justify-center items-center bg-zinc-100 rounded-lg w-9 h-9 text-zinc-500">
                    <Folder size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-zinc-900 text-sm">{cat.name}</p>
                    <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-400">
                      <Globe size={10} /> /{cat.slug}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex justify-end gap-2">
                  <button onClick={() => setSelectedCategory(cat)} className="hover:bg-zinc-100 p-2 rounded-lg text-zinc-400 hover:text-zinc-900 transition">
                    <Edit2 size={16} />
                  </button>
                  <button onClick={() => handleDelete(cat.id)} className="hover:bg-red-50 p-2 rounded-lg text-zinc-400 hover:text-red-600 transition">
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedCategory && (
        <CategoryEditModal 
          category={selectedCategory} 
          onClose={() => setSelectedCategory(null)} 
        />
      )}
    </div>
  );
}