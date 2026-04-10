"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/core/config/site";
// Change CloudZap to Cloud and Zap
import { MoveRight, ChevronDown, Database, Cloud, Zap } from "lucide-react";
export default function AppDevHero() {
  const [isOpen, setIsOpen] = useState(false);

  const otherServices = [
    { name: "Web Design", href: "/services/web-design" },
    { name: "Web Development", href: "/services/web-development" },
    { name: "App Design", href: "/services/app-design" },
    { name: "CMS Development", href: "/services/cms-development" },
    { name: "Dev Support", href: "/services/development-support" },
  ];

  return (
    <section className="relative bg-white px-6 pt-16 md:pt-24 pb-20 md:pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="flex lg:flex-row flex-col items-center gap-12 md:gap-20">
          
          {/* LEFT: CONTENT */}
          <div className="flex flex-col flex-1 gap-6 w-full">
            <nav className="relative flex items-center gap-1.5 md:gap-2 font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em]">
              <Link href="/services" className="text-zinc-400 hover:text-orange-500 transition-colors">
                Services
              </Link>
              <span className="text-zinc-300">/</span>
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 text-zinc-900 hover:text-orange-500 whitespace-nowrap transition-colors"
              >
                App Development <ChevronDown size={12} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              {isOpen && (
                <div className="top-6 left-0 md:left-16 z-50 absolute bg-white slide-in-from-top-2 shadow-2xl p-2 border border-zinc-100 rounded-xl min-w-50 animate-in fade-in">
                  {otherServices.map((s) => (
                    <Link key={s.href} href={s.href} className="block hover:bg-zinc-50 px-4 py-2 rounded-lg font-bold text-[10px] text-zinc-500 hover:text-orange-600 transition-colors">
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </nav>

            <h1 className="mb-4 font-black text-zinc-900 text-4xl sm:text-5xl md:text-8xl uppercase leading-[0.9] md:leading-[0.85] tracking-tighter">
              Build Once. <br /> 
              <span className="font-serif text-orange-500 italic">Scale Everywhere.</span>
            </h1>

            <p className="max-w-xl font-medium text-zinc-500 text-lg md:text-xl leading-relaxed">
              We engineer powerful, cross-platform mobile applications that combine 
              <span className="font-bold text-zinc-900 italic uppercase"> native performance</span> with <span className="font-bold text-zinc-900 italic uppercase">cloud-ready backends.</span>
            </p>

            <div className="flex items-center gap-6 pt-4">
              <a 
                href={siteConfig.links.whatsapp}
                className="group flex justify-center items-center gap-3 bg-zinc-900 hover:bg-orange-500 shadow-xl px-7 md:px-8 py-3.5 md:py-4 rounded-xl md:rounded-2xl w-full sm:w-auto font-bold text-white text-sm md:text-base transition-all"
              >
                Deploy Your Vision
                <MoveRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* RIGHT: THE ARCHITECTURE VISUAL */}
          <div className="relative flex-1 mt-12 lg:mt-0 w-full max-w-125">
            <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                {/* Background Nodes */}
                <circle cx="200" cy="200" r="180" stroke="#f1f1f1" strokeWidth="1" strokeDasharray="10 10" />
                <circle cx="200" cy="200" r="120" stroke="#f1f1f1" strokeWidth="1" strokeDasharray="5 5" />
                
                {/* Connecting Lines */}
                <line x1="200" y1="100" x2="100" y2="250" stroke="#e4e4e7" strokeWidth="2" />
                <line x1="200" y1="100" x2="300" y2="250" stroke="#e4e4e7" strokeWidth="2" />
                <line x1="100" y1="250" x2="300" y2="250" stroke="#e4e4e7" strokeWidth="2" />

                {/* Central Data Node */}
               {/* Central Data Node */}
<g className="animate-bounce" style={{ animationDuration: '3s' }}>
    <rect x="160" y="60" width="80" height="80" rx="20" fill="#18181b" />
    {/* Using Zap and Cloud separately for a cool layered effect */}
    <Cloud size={32} x="184" y="80" className="text-zinc-700" strokeWidth={1} />
    <Zap size={24} x="188" y="88" className="text-orange-500" strokeWidth={2} />
</g>

                {/* Satellite Nodes */}
                <circle cx="100" cy="250" r="30" fill="#f4f4f5" stroke="#e4e4e7" />
                <Database size={20} x="90" y="240" className="text-zinc-400" />
                
                <circle cx="300" cy="250" r="30" fill="#f4f4f5" stroke="#e4e4e7" />
                <MoveRight size={20} x="290" y="240" className="text-orange-500 rotate-45" />

                {/* Pulse Effect */}
                <circle cx="200" cy="100" r="50" stroke="#f97316" strokeWidth="2" opacity="0.2" className="animate-ping" />
            </svg>
            
            <div className="bottom-4 left-1/2 absolute flex items-center gap-3 bg-white shadow-2xl px-6 py-3 border border-zinc-100 rounded-2xl -translate-x-1/2">
                <div className="bg-green-500 rounded-full w-2 h-2 animate-pulse" />
                <span className="font-black text-[10px] text-zinc-900 tracking-widest">SYSTEMS_ACTIVE</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}