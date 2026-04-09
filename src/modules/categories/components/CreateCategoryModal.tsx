"use client";

import { useState } from "react";
import { X, Plus, Loader2 } from "lucide-react";
import { createCategory } from "../actions";

export default function CreateCategoryModal({ onClose }: { onClose: () => void }) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", description: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createCategory(form);
      onClose();
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-lg overflow-hidden">
        <div className="flex justify-between items-center px-6 py-4 border-zinc-100 border-b">
          <h2 className="font-bold text-zinc-900">New Category</h2>
          <button onClick={onClose} className="hover:bg-zinc-100 p-1 rounded-full transition"><X size={18}/></button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 p-6">
          <div className="space-y-1.5">
            <label className="font-bold text-zinc-500 text-xs uppercase">Name</label>
            <input 
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-zinc-50 px-4 py-2 border border-zinc-200 rounded-xl outline-none focus:ring-2 focus:ring-black w-full"
              placeholder="e.g. Artificial Intelligence"
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-zinc-500 text-xs uppercase">Description (SEO)</label>
            <textarea 
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="bg-zinc-50 px-4 py-2 border border-zinc-200 rounded-xl outline-none focus:ring-2 focus:ring-black w-full resize-none"
              rows={3}
              placeholder="What is this category about?"
            />
          </div>

          <button disabled={loading} className="flex justify-center items-center gap-2 bg-black py-3 rounded-xl w-full font-bold text-white">
            {loading ? <Loader2 className="animate-spin" size={18}/> : <><Plus size={18}/> Create Category</>}
          </button>
        </form>
      </div>
    </div>
  );
}