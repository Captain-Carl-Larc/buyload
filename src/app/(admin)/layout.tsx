import { Sidebar } from "@/components/admin/Sidebar";
import { UserCircle } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    // h-screen and overflow-hidden prevent the whole browser from scrolling
    <div className="flex bg-zinc-50 h-screen overflow-hidden text-zinc-900">
      
      {/* 1. FIXED SIDEBAR */}
      <Sidebar />

      {/* 2. RIGHT SIDE CONTAINER */}
      <div className="flex flex-col flex-1 min-w-0">
        
        {/* TOP HEADING / USER BAR */}
        <header className="flex justify-between items-center bg-white px-8 border-zinc-200 border-b h-16 shrink-0">
          <div className="font-medium text-zinc-500 text-sm">
            Control Panel
          </div>
          
          {/* LOGGED IN USER SECTION */}
          <div className="flex items-center gap-3 hover:bg-zinc-50 px-3 py-1 border border-zinc-100 rounded-full transition-colors cursor-pointer">
            <div className="text-right">
              <p className="font-bold text-xs leading-none">Michelle</p>
              <p className="mt-1 text-[10px] text-zinc-400">Administrator</p>
            </div>
            <UserCircle className="text-zinc-400" size={28} />
          </div>
        </header>

        {/* 3. SCROLLABLE CONTENT AREA */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="mx-auto max-w-6xl">
            {children}
          </div>
        </main>
        
      </div>
    </div>
  );
}