

"use client";

import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { UserCircle, LogOut, ChevronDown, Loader2 } from "lucide-react";

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
    <header className="flex justify-between items-center bg-white px-8 border-zinc-200 border-b h-16 shrink-0">
      {/* LEFT SIDE: Context Label */}
      <div className="font-medium text-zinc-500 text-sm">
        Control Panel
      </div>
      
      {/* RIGHT SIDE: Logged-in User Section */}
      <div className="relative">
        <div 
          onClick={() => setShowDropdown(!showDropdown)}
          className="group flex items-center gap-3 hover:bg-zinc-50 px-3 py-1 border border-zinc-100 rounded-full transition-colors cursor-pointer"
        >
          <div className="text-right">
            <p className="font-bold text-xs leading-none">
              {session?.user?.name || "Loading..."}
            </p>
            <p className="mt-1 text-[10px] text-zinc-400 capitalize">
              {/* @ts-ignore */}
              {session?.user?.role?.toLowerCase() || "user"}
            </p>
          </div>
          <UserCircle className="text-zinc-400 group-hover:text-zinc-600 transition-colors" size={28} />
          <ChevronDown size={12} className={`text-zinc-300 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
        </div>

        {/* LOGOUT DROPDOWN */}
        {showDropdown && (
          <>
            <div className="z-10 fixed inset-0" onClick={() => setShowDropdown(false)} />
            <div className="right-0 z-20 absolute bg-white shadow-xl mt-2 py-1 border border-zinc-200 rounded-xl w-44 overflow-hidden">
              <button 
                onClick={() => { setShowModal(true); setShowDropdown(false); }}
                className="flex items-center gap-2 hover:bg-red-50 px-4 py-2.5 w-full font-bold text-red-600 text-xs transition"
              >
                <LogOut size={14} />
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