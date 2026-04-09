"use client";

import { useState } from "react";
import { X, Loader2, Save, AlertCircle } from "lucide-react";
import { updateUser } from "@/modules/auth/actions";
import { useRouter } from "next/navigation";
// ... (User interface stays the same)
interface User {
  id: string;
  name: string | null;
  email: string | null;
  role: string;
}

export default function UserEditModal({ user, onClose }: { user: User; onClose: () => void }) {
  const router = useRouter();
const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(""); // For "Email already taken"
  
  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
    role: user.role,
  });


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setServerError("");

  try {
    await updateUser(user.id, formData);
    onClose();
  } catch (error: any) {
    setServerError(error.message);
    
    // If the error is "Unauthorized", kick them out of the modal 
    // and refresh the page to show their new (limited) reality
    if (error.message.includes("Unauthorized")) {
      alert("Permission Denied: Your access level has changed.");
      onClose();
      router.push("/admin/users"); // Redirect back to list
      router.refresh();
    }
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center p-4">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      
      <div className="z-10 relative bg-white shadow-2xl rounded-2xl w-full max-w-md overflow-hidden">
        <div className="flex justify-between items-center bg-zinc-50/50 px-6 py-4 border-zinc-100 border-b">
          <h2 className="font-bold text-zinc-900">Edit Permissions</h2>
          <button onClick={onClose} className="hover:bg-zinc-200 p-1 rounded-full transition">
            <X size={18} className="text-zinc-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 p-6">
          
          {/* GLOBAL ERROR ALERT */}
          {serverError && (
            <div className="flex items-center gap-2 bg-red-50 slide-in-from-top-1 p-3 border border-red-100 rounded-xl font-semibold text-red-600 text-xs animate-in fade-in">
              <AlertCircle size={14} />
              {serverError}
            </div>
          )}

          {/* Name Field */}
          <div className="space-y-1.5">
            <label className="font-bold text-zinc-500 text-xs uppercase">Full Name</label>
            <input 
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full px-4 py-2 bg-zinc-50 border rounded-xl outline-none transition ${
                serverError.toLowerCase().includes("name") ? "border-red-500 ring-1 ring-red-500" : "border-zinc-200 focus:ring-2 focus:ring-black"
              }`}
            />
          </div>

          {/* Email Field */}
          <div className="space-y-1.5">
            <label className="font-bold text-zinc-500 text-xs uppercase">Email Address</label>
            <input 
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full px-4 py-2 bg-zinc-50 border rounded-xl outline-none transition ${
                serverError.toLowerCase().includes("email") ? "border-red-500 ring-1 ring-red-500" : "border-zinc-200 focus:ring-2 focus:ring-black"
              }`}
            />
          </div>

          {/* Role Dropdown */}
          <div className="space-y-1.5">
            <label className="font-bold text-zinc-500 text-xs uppercase">System Role</label>
            <select 
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="bg-zinc-50 px-4 py-2 border border-zinc-200 rounded-xl outline-none focus:ring-2 focus:ring-black w-full appearance-none cursor-pointer"
            >
              <option value="VIEWER">Viewer</option>
              <option value="EDITOR">Editor</option>
              <option value="ADMIN">Administrator</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button type="button" onClick={onClose} className="flex-1 hover:bg-zinc-100 py-2.5 rounded-xl font-semibold text-zinc-600 text-sm transition">
              Cancel
            </button>
            <button 
              type="submit"
              disabled={loading}
              className="flex flex-1 justify-center items-center gap-2 bg-black hover:bg-zinc-800 disabled:opacity-50 py-2.5 rounded-xl font-bold text-white transition"
            >
              {loading ? <Loader2 className="animate-spin" size={18} /> : <><Save size={18} /> Save Changes</>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}        
     