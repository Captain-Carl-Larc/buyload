"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/core/config/site";
import { MoveRight, ChevronDown, MousePointer2, Layers } from "lucide-react";

export default function AppDesignHero() {
  const [isOpen, setIsOpen] = useState(false);

  const otherServices = [
    { name: "Web Design", href: "/services/web-design" },
    { name: "Web Development", href: "/services/web-development" },
    { name: "App Development", href: "/services/app-development" },
    { name: "CMS Development", href: "/services/cms-development" },
    { name: "Dev Support", href: "/services/development-support" },
  ];

  return (
    <section className="relative px-6 pt-16 md:pt-24 pb-20 md:pb-32 overflow-hidden">
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
                App Design <ChevronDown size={12} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
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
              Interfaces <br /> 
              <span className="text-orange-500 italic">Built For People.</span>
            </h1>

            <p className="max-w-xl font-medium text-zinc-500 text-lg md:text-xl leading-relaxed">
              We design digital products that feel as good as they look. From 
              <span className="font-bold text-zinc-900"> user flows</span> to <span className="font-bold text-zinc-900">pixel-perfect UI</span>, we build the experience your users deserve.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <a 
                href={siteConfig.links.whatsapp}
                className="group flex justify-center items-center gap-3 bg-zinc-900 hover:bg-orange-500 shadow-xl px-7 md:px-8 py-3.5 md:py-4 rounded-xl md:rounded-2xl w-full sm:w-auto font-bold text-white text-sm md:text-base transition-all"
              >
                Design Your Product
                <MoveRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* RIGHT: THE UI BLUEPRINT VISUAL */}
          <div className="relative flex-1 mt-12 lg:mt-0 w-full max-w-112.5">
             <div className="relative bg-zinc-50 shadow-2xl p-8 border border-zinc-200 rounded-[2.5rem]">
                {/* Mock UI Elements */}
                <div className="flex justify-between items-center mb-8">
                  <div className="flex justify-center items-center bg-zinc-900 rounded-full w-10 h-10">
                    <Layers size={18} className="text-orange-500" />
                  </div>
                  <div className="bg-zinc-200 rounded-full w-20 h-3" />
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="bg-white shadow-sm p-4 border border-zinc-100 rounded-2xl w-full h-32 overflow-hidden">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-orange-100 rounded-lg w-8 h-8" />
                      <div className="space-y-1">
                        <div className="bg-zinc-900 rounded-full w-24 h-2" />
                        <div className="bg-zinc-200 rounded-full w-12 h-1.5" />
                      </div>
                    </div>
                    <div className="bg-zinc-900 rounded-xl w-full h-10" />
                  </div>
                  <div className="bg-zinc-200 rounded-full w-3/4 h-4" />
                  <div className="bg-zinc-100 rounded-full w-1/2 h-4" />
                </div>

                <div className="gap-3 grid grid-cols-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="flex justify-center items-center bg-white border border-zinc-100 rounded-xl aspect-square">
                      <div className="bg-zinc-50 border border-zinc-100 rounded-md w-4 h-4" />
                    </div>
                  ))}
                </div>

                {/* The "Cursor" Overlay */}
                <div className="top-1/2 right-4 absolute bg-orange-500 shadow-xl p-2 rounded-lg translate-y-[-50%] animate-bounce">
                  <MousePointer2 size={16} className="fill-white text-white" />
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}