"use client";

import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { User, LogOut, ChevronDown, Loader2 } from "lucide-react";

export default function DashboardHeader() {
  const { data: session } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleSignOut = async () => {
    setIsLoggingOut(true);
    // This clears the cookie and redirects to /auth-choice
    await signOut({ callbackUrl: "/auth-choice" });
  };

  return (
    <header className="top-0 z-40 sticky flex justify-between items-center bg-white px-6 border-zinc-200 border-b h-16">
      <div className="font-bold text-lg tracking-tight">Buyload Admin</div>

      <div className="relative">
        {/* Profile Trigger */}
        <button 
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center gap-3 hover:bg-zinc-50 p-1.5 border border-transparent hover:border-zinc-100 rounded-full transition"
        >
          <div className="flex justify-center items-center bg-zinc-900 rounded-full w-8 h-8 text-white">
            <User size={18} />
          </div>
          <span className="hidden md:block font-medium text-zinc-700 text-sm">
            {session?.user?.name || "Admin User"}
          </span>
          <ChevronDown size={14} className={`text-zinc-400 transition ${showDropdown ? 'rotate-180' : ''}`} />
        </button>

        {/* Small Dropdown Area */}
        {showDropdown && (
          <>
            <div 
              className="z-10 fixed inset-0" 
              onClick={() => setShowDropdown(false)} 
            />
            <div className="right-0 z-20 absolute bg-white shadow-lg mt-2 py-1 border border-zinc-200 rounded-xl w-48 overflow-hidden">
              <button 
                onClick={() => { setShowModal(true); setShowDropdown(false); }}
                className="flex items-center gap-2 hover:bg-red-50 px-4 py-2.5 w-full text-red-600 text-sm transition"
              >
                <LogOut size={16} />
                Sign Out
              </button>
            </div>
          </>
        )}
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="z-50 fixed inset-0 flex justify-center items-center p-4">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => !isLoggingOut && setShowModal(false)} />
          <div className="z-10 relative bg-white shadow-2xl p-6 border border-zinc-200 rounded-2xl w-full max-w-sm">
            <h3 className="font-bold text-zinc-900 text-lg">Sign Out?</h3>
            <p className="mt-2 text-zinc-500 text-sm">
              Are you sure you want to end your session? You'll need to log back in to access the dashboard.
            </p>
            
            <div className="flex gap-3 mt-6">
              <button 
                disabled={isLoggingOut}
                onClick={() => setShowModal(false)}
                className="flex-1 hover:bg-zinc-100 disabled:opacity-50 py-2.5 rounded-xl font-semibold text-zinc-600 text-sm transition"
              >
                Cancel
              </button>
              <button 
                disabled={isLoggingOut}
                onClick={handleSignOut}
                className="flex flex-1 justify-center items-center gap-2 bg-red-600 hover:bg-red-700 disabled:opacity-50 py-2.5 rounded-xl font-bold text-white text-sm transition"
              >
                {isLoggingOut ? <Loader2 className="animate-spin" size={16} /> : "Yes, Sign Out"}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}