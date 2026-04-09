"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Loader2, LockKeyhole, Mail } from "lucide-react";

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false, // We handle redirect manually for a smoother feel
    });

    if (result?.error) {
      setError("Invalid email or password. Please try again.");
      setLoading(false);
    } else {
      // Success! Teleport to the dashboard
      router.push("/admin/dashboard");
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="bg-red-50 p-3 rounded-lg text-red-600 text-sm">{error}</div>}
      
      <div className="space-y-2">
        <label className="font-medium text-zinc-700 text-sm">Email Address</label>
        <div className="relative">
          <Mail className="top-3 left-3 absolute text-zinc-400" size={18} />
          <input 
            name="email" type="email" required placeholder="name@company.com"
            className="bg-zinc-50 py-2.5 pr-4 pl-10 border border-zinc-200 rounded-xl outline-none focus:ring-2 focus:ring-black w-full transition"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="font-medium text-zinc-700 text-sm">Password</label>
        <div className="relative">
          <LockKeyhole className="top-3 left-3 absolute text-zinc-400" size={18} />
          <input 
            name="password" type="password" required placeholder="••••••••"
            className="bg-zinc-50 py-2.5 pr-4 pl-10 border border-zinc-200 rounded-xl outline-none focus:ring-2 focus:ring-black w-full transition"
          />
        </div>
      </div>

      <button 
        disabled={loading}
        className="flex justify-center items-center gap-2 bg-black hover:bg-zinc-800 disabled:opacity-50 py-3 rounded-xl w-full font-bold text-white"
      >
        {loading ? <Loader2 className="animate-spin" size={20} /> : "Sign In to Dashboard"}
      </button>
    </form>
  );
}