import { LayoutDashboard, FileText, Tags, Users } from 'lucide-react';
import Link from 'next/link';

const menuItems = [
  { label: "Dashboard", href: "/dashboard", icon: <LayoutDashboard size={18} /> },
  { label: "Posts", href: "/posts", icon: <FileText size={18} /> },
  { label: "Categories", href: "/categories", icon: <Tags size={18} /> },
  { label: "Users", href: "/users", icon: <Users size={18} /> },
];

export function Sidebar() {
  return (
    <aside className="flex flex-col bg-white border-zinc-200 border-r w-64 h-full shrink-0">
      <div className="p-8">
        <h1 className="font-bold text-zinc-900 text-xl tracking-tighter">BUYLOAD</h1>
      </div>

      <nav className="flex-1 space-y-1 px-4">
        {menuItems.map((item) => (
          <Link 
            key={item.label} 
            href={item.href} 
            className="flex items-center gap-3 hover:bg-zinc-100 px-4 py-2.5 rounded-lg font-medium text-zinc-600 hover:text-zinc-900 text-sm transition-colors"
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}