"use client";
import { useState } from "react";
// Import your existing components
import LoginForm from "@/modules/auth/components/LoginForm";
import RegisterForm from "@/modules/auth/components/RegisterForm";

export default function AuthChoicePage() {
  // Use state to track which "Card" to show
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="bg-white shadow-xl p-8 rounded-2xl w-full max-w-md">
        {/* The Toggle Buttons */}
        <div className="flex bg-zinc-100 mb-8 p-1 rounded-lg">
          <button
            onClick={() => setMode("login")}
            className={`flex-1 py-2 rounded-md transition ${mode === "login" ? "bg-white shadow" : ""}`}
          >
            I have an account
          </button>
          <button
            onClick={() => setMode("register")}
            className={`flex-1 py-2 rounded-md transition ${mode === "register" ? "bg-white shadow" : ""}`}
          >
            I need an account
          </button>
        </div>

        {/* Conditional Rendering of the Logic */}
        {mode === "login" ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
}
