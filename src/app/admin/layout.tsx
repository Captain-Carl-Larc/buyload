import { Sidebar } from "@/components/admin/Sidebar";
import DashboardHeader from "@/modules/dashboard/components/DashboardHeader";
// 1. Import the provider
import NextAuthProvider from "@/core/providers/NextAuthProvider";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    // 2. Wrap EVERYTHING in the provider
    <NextAuthProvider>
      <div className="flex bg-zinc-50 h-screen overflow-hidden text-zinc-900">
        
        {/* FIXED SIDEBAR */}
        <Sidebar />

        {/* RIGHT SIDE CONTAINER */}
        <div className="flex flex-col flex-1 min-w-0">
          
          {/* INTERACTIVE HEADER (Now safely wrapped!) */}
          <DashboardHeader />

          {/* SCROLLABLE CONTENT AREA */}
          <main className="flex-1 p-8 overflow-y-auto">
            <div className="mx-auto max-w-6xl">
              {children}
            </div>
          </main>
          
        </div>
      </div>
    </NextAuthProvider>
  );
}