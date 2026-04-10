"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/core/config/site";
import { MoveRight, ChevronDown, CheckCircle2, MessageCircle } from "lucide-react";

export default function ServiceHeroDetail() {
  const [isOpen, setIsOpen] = useState(false);

  const otherServices = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "App Design", href: "/services/app-design" },
    { name: "App Development", href: "/services/app-development" },
    { name: "CMS Development", href: "/services/cms-development" },
    { name: "Dev Support", href: "/services/development-support" },
  ];

  return (
    <section className="relative px-6 pt-20 pb-24 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="flex lg:flex-row flex-col items-center gap-16">
          
          {/* LEFT: CONTENT AREA */}
          <div className="flex flex-col flex-1 gap-6">
            
            {/* DYNAMIC BREADCRUMB WITH DROPDOWN */}
            <nav className="relative flex items-center gap-2 font-black text-[10px] uppercase tracking-[0.3em]">
              <Link href="/services" className="text-zinc-400 hover:text-orange-500 transition-colors">
                Services
              </Link>
              <span className="text-zinc-300">/</span>
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 text-zinc-900 hover:text-orange-500 transition-colors"
              >
                Web Design <ChevronDown size={12} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* DROPDOWN MENU */}
              {isOpen && (
                <div className="top-6 left-16 z-50 absolute bg-white slide-in-from-top-2 shadow-2xl p-2 border border-zinc-100 rounded-xl min-w-45 animate-in fade-in">
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

            <h1 className="mb-4 font-black text-zinc-900 text-5xl md:text-8xl leading-[0.85] tracking-tighter">
              Custom Web Design <br /> 
              <span className="text-orange-500 italic">For Nairobi's Best.</span>
            </h1>

            <p className="max-w-xl font-medium text-zinc-500 text-xl leading-relaxed">
              We don't just "make websites." We engineer high-performance 
              digital experiences that align with your <span className="font-bold text-zinc-900 decoration-orange-200 underline">business goals.</span>
            </p>

            <div className="flex items-center gap-6 pt-4">
              <a 
                href={siteConfig.links.whatsapp}
                className="group flex justify-center items-center gap-3 bg-orange-500 hover:bg-zinc-900 shadow-orange-100 shadow-xl px-8 py-4 rounded-2xl font-bold text-white transition-all"
              >
                Start Your Design
                <MoveRight size={20} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* RIGHT: THE UNIQUE PREMIUM VISUAL (SVG Blueprint) */}
          <div className="relative flex-1 w-full max-w-125">
            <svg viewBox="0 0 400 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-3xl w-full">
              {/* Main Blueprint Box */}
              <rect width="400" height="400" rx="40" fill="#fafafa" />
              <rect x="2" y="2" width="396" height="396" rx="38" stroke="#f1f1f1" strokeWidth="4" strokeDasharray="10 10" />
              
              {/* Header: The Performance Stack */}
              <text x="30" y="50" fontFamily="monospace" fontSize="10" fill="#f97316" fontWeight="900" letterSpacing="2">PREMIUM ARCHITECTURE</text>
              
              {/* Visual Breakdown of "Why we are unique" */}
              <g transform="translate(30, 80)">
                <circle cx="12" cy="12" r="12" fill="#f97316" fillOpacity="0.1" />
                <path d="M7 12l3 3 7-7" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <text x="35" y="12" fontFamily="sans-serif" fontSize="14" fill="#18181b" fontWeight="800">100/100 Speed Score</text>
                <text x="35" y="28" fontFamily="sans-serif" fontSize="11" fill="#71717a">Zero bloat, instant loading.</text>
              </g>

              <g transform="translate(30, 150)">
                <circle cx="12" cy="12" r="12" fill="#f97316" fillOpacity="0.1" />
                <path d="M7 12l3 3 7-7" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <text x="35" y="12" fontFamily="sans-serif" fontSize="14" fill="#18181b" fontWeight="800">Conversion Psychology</text>
                <text x="35" y="28" fontFamily="sans-serif" fontSize="11" fill="#71717a">Built to turn visitors into leads.</text>
              </g>

              {/* THE "CLICKABLE" BLUEPRINT BUTTON */}
              <a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
                <rect x="30" y="240" width="340" height="130" rx="24" fill="#18181b" className="group-hover:fill-zinc-800 transition-colors" />
                <text x="55" y="285" fontFamily="monospace" fontSize="12" fill="#f97316" fontWeight="900">FYUTCHA LABS STANDARDS</text>
                <text x="55" y="315" fontFamily="sans-serif" fontSize="18" fill="white" fontWeight="900">GET THIS PREMIUM FEEL →</text>
                <text x="55" y="340" fontFamily="sans-serif" fontSize="11" fill="#52525b">Click to discuss your unique project blueprint</text>
              </a>
              
              {/* Corner Accent */}
              <circle cx="370" cy="30" r="10" fill="#f97316" fillOpacity="0.2" />
            </svg>
            
            {/* Floating Trust Badge */}
            <div className="top-2.5 right-2.5 absolute bg-white shadow-xl px-4 py-2 border border-zinc-100 rounded-2xl animate-bounce">
                <span className="font-black text-[10px] text-zinc-900 tracking-tighter">99.9% ACCURACY</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}