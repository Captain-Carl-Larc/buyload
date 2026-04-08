"use client"; // Required for handling the form's 'error' state in the UI

// Import the logic from your clean modules directory
import { handleRegister } from "@/modules/auth/actions";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [error, setError] = useState("");
  const router = useRouter();

  // This function handles the transition from the form to the backend
  async function onSubmit(formData: FormData) {
    setError(""); // Reset UI state
    try {
      const result = await handleRegister(formData);
      if (result.success) {
        // If successful, send the user to the login checkpoint
        router.push("/api/auth/signin");
      }
    } catch (e: any) {
      // Capture and display the error message from the Server Action
      setError(e.message);
    }
  }

  return (
    <div className="mx-auto px-6 py-20 max-w-md">
      <div className="bg-white shadow-sm p-10 border border-zinc-200 rounded-3xl">
        <h1 className="mb-2 font-black text-2xl text-center">Get Started</h1>
        <p className="mb-8 text-zinc-500 text-sm text-center">Create your Buyload administrator account.</p>
        
        {error && (
          <div className="bg-red-50 mb-6 p-3 rounded-xl font-medium text-red-600 text-xs">
            {error}
          </div>
        )}

        <form action={onSubmit} className="space-y-4">
          <input name="name" type="text" placeholder="Full Name" required 
                 className="bg-zinc-50 p-4 border border-zinc-100 rounded-xl focus:outline-zinc-300 w-full transition-all" />
          
          <input name="email" type="email" placeholder="Email" required 
                 className="bg-zinc-50 p-4 border border-zinc-100 rounded-xl focus:outline-zinc-300 w-full transition-all" />
          
          <input name="password" type="password" placeholder="Password" required 
                 className="bg-zinc-50 p-4 border border-zinc-100 rounded-xl focus:outline-zinc-300 w-full transition-all" />
          
          <button type="submit" className="bg-black hover:bg-zinc-800 p-4 rounded-xl w-full font-bold text-white active:scale-95 transition-transform">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}