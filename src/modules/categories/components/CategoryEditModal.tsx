"use client";

import { useState } from "react";
import { X, Save, Loader2 } from "lucide-react";
import { updateCategory } from "../actions";

export default function CategoryEditModal({ category, onClose }: { category: any; onClose: () => void }) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: category.name,
    description: category.description || "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateCategory(category.id, form);
      onClose();
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-lg overflow-hidden animate-in duration-200 zoom-in-95">
        <div className="flex justify-between items-center px-6 py-4 border-zinc-100 border-b">
          <h2 className="font-bold text-zinc-900">Edit Category</h2>
          <button onClick={onClose} className="hover:bg-zinc-100 p-1 rounded-full transition">
            <X size={18} className="text-zinc-400" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 p-6">
          <div className="space-y-1.5">
            <label className="font-bold text-zinc-500 text-xs uppercase">Category Name</label>
            <input 
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-zinc-50 px-4 py-2 border border-zinc-200 rounded-xl outline-none focus:ring-2 focus:ring-black w-full transition"
              placeholder="e.g. Stock Analysis"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-zinc-500 text-xs uppercase">
              SEO Description (Google's Favorite)
            </label>
            <textarea 
              rows={4}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="bg-zinc-50 px-4 py-2 border border-zinc-200 rounded-xl outline-none focus:ring-2 focus:ring-black w-full transition resize-none"
              placeholder="Describe this category to help search engines understand your content..."
            />
            <p className="text-[10px] text-zinc-400 italic">Recommended: 150-160 characters.</p>
          </div>

          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="flex-1 py-2.5 font-semibold text-zinc-500 text-sm">Cancel</button>
            <button disabled={loading} className="flex flex-1 justify-center items-center gap-2 bg-black py-2.5 rounded-xl font-bold text-white">
              {loading ? <Loader2 className="animate-spin" size={18} /> : <><Save size={18} /> Update Category</>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}