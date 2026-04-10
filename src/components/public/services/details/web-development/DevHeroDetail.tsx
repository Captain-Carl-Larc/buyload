"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/core/config/site";
import { MoveRight, ChevronDown, Cpu, Activity, ShieldCheck } from "lucide-react";

export default function DevHeroDetail() {
  const [isOpen, setIsOpen] = useState(false);

  const otherServices = [
    { name: "Web Design", href: "/services/web-design" },
    { name: "App Design", href: "/services/app-design" },
    { name: "App Development", href: "/services/app-development" },
    { name: "CMS Development", href: "/services/cms-development" },
    { name: "Dev Support", href: "/services/development-support" },
  ];

  return (
    <section className="relative px-6 pt-16 md:pt-24 pb-20 md:pb-32 overflow-hidden">
  <div className="mx-auto max-w-7xl">
    <div className="flex lg:flex-row flex-col items-center gap-12 md:gap-20">
      
      {/* LEFT: CONTENT AREA */}
      <div className="flex flex-col flex-1 gap-6 w-full">
        
        {/* DYNAMIC BREADCRUMB - Adjusted for mobile scale */}
        <nav className="relative flex items-center gap-1.5 md:gap-2 font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em]">
          <Link href="/services" className="text-zinc-400 hover:text-orange-500 transition-colors">
            Services
          </Link>
          <span className="text-zinc-300">/</span>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1 text-zinc-900 hover:text-orange-500 whitespace-nowrap transition-colors"
          >
            Web Development <ChevronDown size={12} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          {isOpen && (
            <div className="top-6 left-0 md:left-16 z-50 absolute bg-white slide-in-from-top-2 shadow-2xl p-2 border border-zinc-100 rounded-xl min-w-[200px] animate-in fade-in">
              {otherServices.map((s) => (
                <Link 
                  key={s.href} 
                  href={s.href}
                  className="block hover:bg-zinc-50 px-4 py-2 rounded-lg font-bold text-[10px] text-zinc-500 hover:text-orange-600 transition-colors"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          )}
        </nav>

        {/* MAIN HEADLINE - Fluid sizing: text-4xl on mobile, text-8xl on PC */}
        <h1 className="mb-4 font-black text-zinc-900 text-4xl sm:text-5xl md:text-8xl uppercase leading-[0.9] md:leading-[0.85] tracking-tighter">
          Engineering <br /> 
          <span className="text-orange-500 italic">Technical Vitality.</span>
        </h1>

        {/* SUB-HEADLINE - Balanced text size */}
        <p className="max-w-xl font-medium text-zinc-500 text-lg md:text-xl leading-relaxed">
          We build robust digital infrastructure designed for <span className="font-bold text-zinc-900">speed, security, and scale.</span> High-performance code that works as hard as your business does.
        </p>

        {/* CTA BUTTON - Full width on mobile for better UX */}
        <div className="flex items-center gap-6 pt-4">
          <a 
            href={siteConfig.links.whatsapp}
            className="group flex justify-center items-center gap-3 bg-zinc-900 hover:bg-orange-500 shadow-xl px-7 md:px-8 py-3.5 md:py-4 rounded-xl md:rounded-2xl w-full sm:w-auto font-bold text-white text-sm md:text-base transition-all"
          >
            Launch Your Project
            <MoveRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* RIGHT: THE TECHNICAL VITALITY VISUAL - Hidden on small mobile or scaled down */}
      <div className="lg:block relative flex-1 mt-8 lg:mt-0 w-full max-w-112.5">
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl w-full">
          <rect width="400" height="400" rx="40" fill="#09090b" />
          
          {/* Grid Lines */}
          <path d="M40 0V400M80 0V400M120 0V400M160 0V400M200 0V400M240 0V400M280 0V400M320 0V400M360 0V400" stroke="#18181b" strokeWidth="1" />
          <path d="M0 40H400M0 80H400M0 120H400M0 160H400M0 200H400M0 240H400M0 280H400M0 320H400M0 360H400" stroke="#18181b" strokeWidth="1" />

          {/* Vitality Line (The "Heartbeat" of the code) */}
          <path d="M40 200H140L160 120L180 280L200 200H360" stroke="#f97316" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse" />
          
          <g transform="translate(40, 40)">
            <Cpu size={24} className="opacity-50 text-orange-500" strokeWidth={1.5} />
            <text x="35" y="18" fontFamily="monospace" fontSize="12" fill="#52525b" fontWeight="bold">CORE_ENGINE</text>
          </g>

          <g transform="translate(40, 320)">
            <ShieldCheck size={24} className="text-orange-500" strokeWidth={1.5} />
            <text x="35" y="18" fontFamily="monospace" fontSize="12" fill="#fafafa" fontWeight="bold">ENCRYPTED_DATA</text>
          </g>

          {/* Performance Indicator */}
          <rect x="260" y="40" width="100" height="40" rx="10" fill="#f97316" />
          <text x="310" y="65" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fill="white" fontWeight="900">100ms</text>
          <text x="310" y="90" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#52525b">RESPONSE</text>
        </svg>
      </div>

    </div>
  </div>
</section>
  );
}