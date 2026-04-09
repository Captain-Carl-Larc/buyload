import Link from "next/link";
import { siteConfig } from "@/core/config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-50 mt-auto pt-16 pb-8 border-zinc-100 border-t w-full">
      <div className="mx-auto px-6 max-w-7xl">
        <div className="gap-12 grid grid-cols-1 md:grid-cols-4 mb-16">
          
          {/* COLUMN 1: BRAND IDENTITY */}
          <div className="space-y-4 md:col-span-2 text-left">
            <Link href="/" className="group">
              <span className="font-black text-zinc-900 group-hover:text-orange-500 text-xl uppercase tracking-tighter transition-colors">
                {siteConfig.name}<span className="text-orange-500">.</span>
              </span>
            </Link>
            <p className="max-w-xs text-zinc-500 text-sm leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* COLUMN 2: LINKS (SYCNED FROM CONFIG) */}
          <div className="text-left">
            <h4 className="mb-4 font-bold text-zinc-900 text-xs uppercase tracking-widest">Agency</h4>
            <ul className="space-y-2 font-medium text-zinc-500 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-orange-500 transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: CONNECT & LEGAL */}
          <div className="text-left">
            <h4 className="mb-4 font-bold text-zinc-900 text-xs uppercase tracking-widest">Connect</h4>
            <ul className="space-y-2 font-medium text-zinc-500 text-sm">
              <li>
                <a 
                  href={siteConfig.links.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-orange-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li className="pt-2 font-normal text-zinc-400">
                {siteConfig.contact.address}
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex md:flex-row flex-col justify-between items-center gap-4 pt-8 border-zinc-200 border-t font-bold text-[10px] text-zinc-400 uppercase tracking-widest">
          <p>© {currentYear} {siteConfig.name}</p>
          <div className="flex items-center gap-2">
            <span>Powered by Speed</span>
            <span className="text-zinc-300">|</span>
            <span>Kenya 🇰🇪</span>
          </div>
        </div>
      </div>
    </footer>
  );
}