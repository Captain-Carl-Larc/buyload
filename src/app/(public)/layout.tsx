import Link from 'next/link';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      {/* PUBLIC NAVBAR */}
      <header className="top-0 sticky flex justify-between items-center bg-white/80 backdrop-blur-md px-10 py-6 border-b">
        <Link href="/" className="font-black text-2xl">BUYLOAD</Link>
        <nav className="flex gap-8 font-medium text-zinc-600 text-sm">
          <Link href="/about" className="hover:text-black">About</Link>
          <Link href="/services" className="hover:text-black">Services</Link>
          <Link href="/projects" className="hover:text-black">Projects</Link>
          <Link href="/contact" className="hover:text-black">Contact</Link>
        </nav>
      </header>

      {/* PAGE CONTENT */}
      <main className="flex-1">
        {children}
      </main>

      {/* PUBLIC FOOTER */}
      <footer className="p-10 border-t text-zinc-400 text-sm text-center">
        © 2026 Buyload. <Link href="/privacy" className="underline">Privacy Policy</Link>
      </footer>
    </div>
  );
}