"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/core/config/site";
import { MoveRight, ChevronDown, Wrench, ShieldAlert, BadgeCheck } from "lucide-react";

export default function SupportHeroDetail() {
  const [isOpen, setIsOpen] = useState(false);

  const otherServices = [
    { name: "Web Design", href: "/services/web-design" },
    { name: "Web Development", href: "/services/web-development" },
    { name: "App Design", href: "/services/app-design" },
    { name: "App Development", href: "/services/app-development" },
    { name: "CMS Development", href: "/services/cms-development" },
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
                Development Support <ChevronDown size={12} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
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
              Fix. Secure. <br /> 
              <span className="text-orange-500 italic">Optimize.</span>
            </h1>

            <p className="max-w-xl font-medium text-zinc-500 text-lg md:text-xl leading-relaxed">
              Tired of slow loading times or broken checkouts? We specialize in 
              <span className="font-bold text-zinc-900"> M-Pesa API integration</span>, performance audits, and technical rescue for existing platforms.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <a 
                href={siteConfig.links.whatsapp}
                className="group flex justify-center items-center gap-3 bg-zinc-900 hover:bg-orange-500 shadow-xl px-7 md:px-8 py-3.5 md:py-4 rounded-xl md:rounded-2xl w-full sm:w-auto font-bold text-white text-sm md:text-base transition-all"
              >
                Fix My Website
                <MoveRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* RIGHT: THE "DIAGNOSTICS" VISUAL */}
          <div className="relative flex-1 mt-12 lg:mt-0 w-full max-w-[450px]">
             <div className="relative bg-zinc-50 shadow-2xl p-8 border-4 border-zinc-900 rounded-[2.5rem] overflow-hidden">
                <div className="flex justify-between items-center mb-10">
                   <Wrench size={24} className="text-zinc-900" />
                   <div className="flex gap-2">
                      <div className="bg-red-500 rounded-full w-3 h-3" />
                      <div className="bg-orange-500 rounded-full w-3 h-3" />
                      <div className="bg-green-500 rounded-full w-3 h-3" />
                   </div>
                </div>

                <div className="space-y-6">
                   <div className="flex justify-between items-center pb-4 border-zinc-200 border-b">
                      <span className="font-black text-[10px] text-zinc-400">PAYMENT_GATEWAY</span>
                      <span className="font-black text-[10px] text-green-600">M-PESA ACTIVE</span>
                   </div>
                   <div className="flex justify-between items-center pb-4 border-zinc-200 border-b">
                      <span className="font-black text-[10px] text-zinc-400">LOAD_TIME</span>
                      <span className="font-black text-[10px] text-orange-500">OPTIMIZING...</span>
                   </div>
                   <div className="flex justify-between items-center">
                      <span className="font-black text-[10px] text-zinc-400">SECURITY_SHELL</span>
                      <span className="font-black text-[10px] text-zinc-900">HARDENED</span>
                   </div>
                </div>

                {/* Floating Alert Icon */}
                <div className="top-1/2 left-1/2 absolute opacity-5 -translate-x-1/2 -translate-y-1/2">
                   <ShieldAlert size={200} />
                </div>
             </div>
             
             <div className="-right-6 -bottom-6 absolute bg-orange-500 shadow-2xl p-6 rounded-3xl text-white rotate-3">
                <BadgeCheck size={32} />
                <p className="mt-2 font-black text-[10px] tracking-tighter">SLA GUARANTEED</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}