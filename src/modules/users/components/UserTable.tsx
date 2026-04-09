"use client";

import { useState } from "react";
import { Edit2, Trash2, ShieldCheck, User as UserIcon } from "lucide-react";
import { deleteUser } from "@/modules/auth/actions";
 import UserEditModal from "./UserEditModal";

interface User {
  id: string;
  name: string | null;
  email: string | null;
  role: string;
}

export default function UserTable({ initialUsers }: { initialUsers: User[] }) {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this user?")) {
      const res = await deleteUser(id);
      if (!res.success) alert(res.message);
    }
  };

  return (
    <div className="bg-white shadow-sm border border-zinc-200 rounded-2xl overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead className="bg-zinc-50 border-zinc-200 border-b">
          <tr>
            <th className="px-6 py-4 font-bold text-zinc-500 text-xs uppercase">User</th>
            <th className="px-6 py-4 font-bold text-zinc-500 text-xs uppercase">Role</th>
            <th className="px-6 py-4 font-bold text-zinc-500 text-xs text-right uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-100">
          {initialUsers.map((user) => (
            <tr key={user.id} className="hover:bg-zinc-50/50 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex justify-center items-center bg-zinc-100 rounded-full w-9 h-9 text-zinc-500">
                    <UserIcon size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-zinc-900 text-sm">{user.name || "No Name"}</p>
                    <p className="text-zinc-500 text-xs">{user.email}</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                  user.role === 'ADMIN' ? 'bg-black text-white' : 'bg-zinc-100 text-zinc-600'
                }`}>
                  {user.role === 'ADMIN' && <ShieldCheck size={12} />}
                  {user.role}
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex justify-end gap-2">
                  <button 
                    onClick={() => setSelectedUser(user)}
                    className="hover:bg-zinc-100 p-2 rounded-lg text-zinc-400 hover:text-zinc-900 transition"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button 
                    onClick={() => handleDelete(user.id)}
                    className="hover:bg-red-50 p-2 rounded-lg text-zinc-400 hover:text-red-600 transition"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Logic for the Edit Modal - We'll build the component next */}
      {selectedUser && (
        <UserEditModal 
          user={selectedUser} 
          onClose={() => setSelectedUser(null)} 
        />
      )}
    </div>
  );
}

// Placeholder for the Modal we're about to build
// function UserEditModal({ user, onClose }: { user: User; onClose: () => void }) {
//     return (
//         <div className="z-50 fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm p-4">
//             <div className="bg-white shadow-2xl p-8 rounded-2xl w-full max-w-md">
//                 <h2 className="mb-4 font-bold text-xl">Edit {user.name}</h2>
//                 {/* Form goes here */}
//                 <button onClick={onClose} className="mt-4 text-zinc-500 text-sm underline">Cancel</button>
//             </div>
//         </div>
//     )
// }