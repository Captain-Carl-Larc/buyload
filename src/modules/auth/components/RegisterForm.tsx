"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { handleRegister } from "@/modules/auth/actions";
import { Loader2, User, Mail, LockKeyhole } from "lucide-react";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    
    // 1. Database Creation (Server Action)
    const result = await handleRegister(formData);

    if (!result.success) {
      setError(result.message || "Registration failed");
      setLoading(false);
      return;
    }

    // 2. THE LOGIC: Auto-Login immediately upon success
    // We use the same credentials the user just typed in
    await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      callbackUrl: "/admin/dashboard", // Direct teleportation
      redirect: true,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="bg-red-50 p-3 rounded-lg text-red-600 text-sm">{error}</div>}

      <div className="space-y-2">
        <label className="font-medium text-zinc-700 text-sm">Full Name</label>
        <div className="relative">
          <User className="top-3 left-3 absolute text-zinc-400" size={18} />
          <input 
            name="name" type="text" required placeholder="Michelle Doe"
            className="bg-zinc-50 py-2.5 pr-4 pl-10 border border-zinc-200 rounded-xl outline-none focus:ring-2 focus:ring-black w-full transition"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="font-medium text-zinc-700 text-sm">Email Address</label>
        <div className="relative">
          <Mail className="top-3 left-3 absolute text-zinc-400" size={18} />
          <input 
            name="email" type="email" required placeholder="michelle@buyload.co.ke"
            className="bg-zinc-50 py-2.5 pr-4 pl-10 border border-zinc-200 rounded-xl outline-none focus:ring-2 focus:ring-black w-full transition"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="font-medium text-zinc-700 text-sm">Create Password</label>
        <div className="relative">
          <LockKeyhole className="top-3 left-3 absolute text-zinc-400" size={18} />
          <input 
            name="password" type="password" required placeholder="Minimum 8 characters"
            className="bg-zinc-50 py-2.5 pr-4 pl-10 border border-zinc-200 rounded-xl outline-none focus:ring-2 focus:ring-black w-full transition"
          />
        </div>
      </div>

      <button 
        disabled={loading}
        className="flex justify-center items-center gap-2 bg-zinc-900 hover:bg-black disabled:opacity-50 py-3 rounded-xl w-full font-bold text-white"
      >
        {loading ? <Loader2 className="animate-spin" size={20} /> : "Create Account & Login"}
      </button>
    </form>
  );
}