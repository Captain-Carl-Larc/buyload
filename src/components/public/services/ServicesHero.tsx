import Link from "next/link";
import { ArrowRight, Zap, ShieldCheck, Lock } from "lucide-react";
import { siteConfig } from "@/core/config/site";

export default function Hero() {
  return (
    <section className="relative bg-white pt-20 pb-32 border-zinc-50 border-b overflow-hidden">
      {/* BACKGROUND DECORATION */}
      <div className="top-0 left-1/2 -z-10 absolute w-full h-full -translate-x-1/2">
        <div className="top-[-10%] left-[-10%] absolute bg-orange-50 opacity-40 blur-[120px] rounded-full w-[40%] h-[40%]" />
      </div>

      <div className="mx-auto px-6 max-w-7xl">
        <div className="flex lg:flex-row flex-col justify-between items-center gap-16">
          
          {/* LEFT: THE HOOK & CTA */}
          <div className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 bg-orange-50 mb-6 px-3 py-1 border border-orange-100 rounded-full">
              <span className="relative flex w-2 h-2">
                <span className="inline-flex absolute bg-orange-400 opacity-75 rounded-full w-full h-full animate-ping"></span>
                <span className="inline-flex relative bg-orange-500 rounded-full w-2 h-2"></span>
              </span>
              <span className="font-black text-[10px] text-orange-600 uppercase tracking-widest">
                Custom Engineering Studio
              </span>
            </div>

            <h1 className="mb-8 font-black text-zinc-900 text-5xl md:text-7xl leading-[0.85] tracking-tighter">
              Digital Products <br /> 
              <span className="text-orange-500 italic">Built to Scale.</span>
            </h1>

            <p className="mb-10 max-w-xl text-zinc-500 text-lg leading-relaxed">
              <span className="font-bold text-zinc-900">{siteConfig.name}</span> engineers high-performance web apps and sites with 
              <span className="font-semibold text-zinc-900"> total ownership, ironclad security,</span> and guaranteed ongoing support.
            </p>

            <div className="flex sm:flex-row flex-col gap-4">
              <a 
                href={siteConfig.links.whatsapp}
                className="group flex justify-center items-center gap-2 bg-zinc-900 hover:bg-orange-500 shadow-xl shadow-zinc-200 px-8 py-4 rounded-2xl font-bold text-white transition-all"
              >
                Launch Your Project
                <ArrowRight size={18} className="text-orange-400 transition-transform group-hover:translate-x-1" />
              </a>
              <Link href="/projects" className="px-8 py-4 font-bold text-zinc-400 hover:text-zinc-900 transition-colors">
                See Our Portfolio
              </Link>
            </div>
          </div>

          {/* RIGHT: THE "TRUST CARD" SVG */}
          <div className="w-full max-w-100 shrink-0">
  <svg
    viewBox="0 0 380 480"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-[0_35px_35px_rgba(0,0,0,0.05)] w-full"
    aria-label="Fyutchalabs Project Guarantee"
  >
    {/* Main Card Shell */}
    <rect width="380" height="480" rx="32" fill="#09090b" />
    
    <text x="32" y="50" fontFamily="monospace" fontSize="10" fill="#f97316" fontWeight="900" letterSpacing="3">
      PROJECT GUARANTEE
    </text>
    <line x1="32" y1="65" x2="348" y2="65" stroke="#27272a" strokeWidth="1" />

    {/* ITEM 1: TOTAL OWNERSHIP */}
    <g transform="translate(32, 90)">
      <rect width="40" height="40" rx="12" fill="#f97316" fillOpacity="0.1" />
      <path d="M15 20l3 3 7-7" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="56" y="16" fontFamily="sans-serif" fontSize="15" fill="#fafafa" fontWeight="800">Total Ownership</text>
      <text x="56" y="32" fontFamily="sans-serif" fontSize="11" fill="#71717a">You own 100% of the code & IP.</text>
    </g>

    {/* ITEM 2: IRONCLAD SECURITY */}
    <g transform="translate(32, 160)">
      <rect width="40" height="40" rx="12" fill="#f97316" fillOpacity="0.1" />
      <path d="M20 12v16m-4-8h8" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round"/>
      <text x="56" y="16" fontFamily="sans-serif" fontSize="15" fill="#fafafa" fontWeight="800">Ironclad Security</text>
      <text x="56" y="32" fontFamily="sans-serif" fontSize="11" fill="#71717a">Enterprise-grade protection.</text>
    </g>

    {/* ITEM 3: SUPPORT GUARANTEE */}
    <g transform="translate(32, 230)">
      <rect width="40" height="40" rx="12" fill="#f97316" fillOpacity="0.1" />
      <circle cx="20" cy="20" r="4" fill="#f97316" />
      <text x="56" y="16" fontFamily="sans-serif" fontSize="15" fill="#fafafa" fontWeight="800">Support Guarantee</text>
      <text x="56" y="32" fontFamily="sans-serif" fontSize="11" fill="#71717a">Refinement until it's perfect.</text>
    </g>

    {/* Inner Branding Box */}
    <rect x="32" y="300" width="316" height="150" rx="20" fill="#18181b" />
    <text x="52" y="335" fontFamily="monospace" fontSize="12" fill="#fafafa" fontWeight="900">FYUTCHALABS.</text>
    <text x="52" y="355" fontFamily="sans-serif" fontSize="10" fill="#52525b">Product Studio | Nairobi, KE</text>
    
    {/* CLICKABLE CTA BUTTON */}
    <a 
      href={siteConfig.links.whatsapp} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="cursor-pointer"
    >
      <rect 
        x="52" 
        y="390" 
        width="276" 
        height="44" 
        rx="12" 
        fill="#f97316" 
        className="hover:fill-orange-600 transition-colors duration-300" 
      />
      <text 
        x="190" 
        y="417" 
        textAnchor="middle" 
        fontFamily="sans-serif" 
        fontSize="12" 
        fill="#ffffff" 
        fontWeight="900" 
        letterSpacing="1"
        className="pointer-events-none"
      >
        PARTNER WITH US TODAY →
      </text>
    </a>
  </svg>
</div>
        </div>
      </div>
    </section>
  );
}