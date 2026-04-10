"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/core/config/site";
import { MoveRight, ChevronDown, LayoutPanelLeft, FileText, Settings } from "lucide-react";

export default function CMSHeroDetail() {
  const [isOpen, setIsOpen] = useState(false);

  const otherServices = [
    { name: "Web Design", href: "/services/web-design" },
    { name: "Web Development", href: "/services/web-development" },
    { name: "App Design", href: "/services/app-design" },
    { name: "App Development", href: "/services/app-development" },
    { name: "Dev Support", href: "/services/development-support" },
  ];

  return (
    <section className="relative px-6 pt-16 md:pt-24 pb-20 md:pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="flex lg:flex-row flex-col items-center gap-12 md:gap-20">
          
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
                CMS Development <ChevronDown size={12} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              {isOpen && (
                <div className="top-6 left-0 md:left-16 z-50 absolute bg-white slide-in-from-top-2 shadow-2xl p-2 border border-zinc-100 rounded-xl min-w-[200px] animate-in fade-in">
                  {otherServices.map((s) => (
                    <Link key={s.href} href={s.href} className="block hover:bg-zinc-50 px-4 py-2 rounded-lg font-bold text-[10px] text-zinc-500 hover:text-orange-600 transition-colors">
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </nav>

            <h1 className="mb-4 font-black text-zinc-900 text-4xl sm:text-5xl md:text-8xl uppercase leading-[0.9] md:leading-[0.85] tracking-tighter">
              Content <br /> 
              <span className="text-orange-500 italic">Independence.</span>
            </h1>

            <p className="max-w-xl font-medium text-zinc-500 text-lg md:text-xl leading-relaxed">
              Stop calling developers for every minor change. We build 
              <span className="font-bold text-zinc-900"> intuitive admin panels</span> that allow your team to update text, images, and products in real-time.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <a 
                href={siteConfig.links.whatsapp}
                className="group flex justify-center items-center gap-3 bg-zinc-900 hover:bg-orange-500 shadow-xl px-7 md:px-8 py-3.5 md:py-4 rounded-xl md:rounded-2xl w-full sm:w-auto font-bold text-white text-sm md:text-base transition-all"
              >
                Claim Your Freedom
                <MoveRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* RIGHT: THE DASHBOARD VISUAL */}
          <div className="relative flex-1 mt-12 lg:mt-0 w-full max-w-[480px]">
             <div className="relative bg-white shadow-2xl p-6 border border-zinc-200 rounded-[2.5rem] overflow-hidden">
                <div className="flex items-start gap-4">
                   {/* Sidebar Mock */}
                   <div className="flex flex-col items-center gap-6 bg-zinc-50 py-6 rounded-2xl w-12 h-64">
                      <LayoutPanelLeft size={18} className="text-orange-500" />
                      <FileText size={18} className="text-zinc-300" />
                      <Settings size={18} className="text-zinc-300" />
                   </div>
                   
                   {/* Content Area Mock */}
                   <div className="flex-1 space-y-6">
                      <div className="bg-zinc-100 rounded-full w-32 h-4" />
                      <div className="gap-4 grid grid-cols-2">
                         <div className="flex flex-col justify-center items-center gap-2 bg-zinc-50 border border-zinc-200 border-dashed rounded-2xl h-24">
                            <div className="flex justify-center items-center bg-white shadow-sm rounded-full w-8 h-8 font-black text-[10px]">+</div>
                            <span className="font-black text-[8px] text-zinc-400 uppercase tracking-widest">Add Section</span>
                         </div>
                         <div className="bg-orange-500/5 p-4 border border-orange-500/20 rounded-2xl h-24">
                            <div className="bg-orange-500 mb-2 rounded-full w-12 h-2" />
                            <div className="bg-orange-200 mb-1 rounded-full w-full h-1.5" />
                            <div className="bg-orange-200 rounded-full w-3/4 h-1.5" />
                         </div>
                      </div>
                      <div className="relative bg-zinc-900 p-4 rounded-2xl h-32 overflow-hidden">
                         <div className="flex justify-between items-center mb-2 text-white">
                            <span className="font-black text-[10px] uppercase tracking-widest">Live Editor</span>
                            <div className="bg-green-500 rounded-full w-2 h-2 animate-pulse" />
                         </div>
                         <div className="space-y-2 opacity-20">
                            <div className="bg-white rounded-full w-full h-1" />
                            <div className="bg-white rounded-full w-full h-1" />
                            <div className="bg-white rounded-full w-3/4 h-1" />
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}