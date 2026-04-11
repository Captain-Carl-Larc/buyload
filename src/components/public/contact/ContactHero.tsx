"use client";

import { siteConfig } from "@/core/config/site";
import { MessageCircle, PhoneCall, Clock } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative px-6 pt-16 md:pt-20 pb-8 overflow-hidden">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10">
          <h1 className="font-black text-zinc-900 text-5xl md:text-8xl uppercase leading-[0.85] tracking-tighter">
            Let's <br />
            <span className="text-orange-500 italic">Sync.</span>
          </h1>
          <p className="mt-4 max-w-md font-medium text-zinc-500 text-base leading-relaxed">
            Reach out however suits you best. We typically respond within minutes,
            not days.
          </p>
        </div>

        {/* Contact cards */}
        <div className="gap-4 grid grid-cols-1 md:grid-cols-3">

          {/* WhatsApp */}
          <a
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between bg-zinc-900 hover:bg-orange-500 p-6 rounded-2xl transition-all duration-300"
          >
            <div className="flex justify-between items-start">
              <div className="bg-white/10 p-2.5 rounded-xl">
                <MessageCircle className="text-white" size={20} />
              </div>
              <div className="flex items-center gap-1.5 bg-green-500/20 px-2.5 py-1 rounded-full">
                <div className="bg-green-400 rounded-full w-1.5 h-1.5 animate-pulse" />
                <span className="font-black text-[9px] text-green-400 uppercase tracking-widest">
                  Active Now
                </span>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="font-black text-white text-xl uppercase tracking-tight">
                WhatsApp
              </h3>
              <p className="mt-1 font-medium text-white/60 text-xs">
                Typical response:{" "}
                <span className="font-bold text-white">Under 5 Minutes</span>
              </p>
            </div>
          </a>

          {/* Direct Call */}
          <a
            href="tel:+254790070100"
            className="group flex flex-col justify-between bg-white p-6 border border-zinc-200 hover:border-orange-400 rounded-2xl transition-all duration-300"
          >
            <div className="flex justify-between items-start">
              <div className="bg-zinc-50 p-2.5 border border-zinc-100 rounded-xl">
                <PhoneCall className="text-zinc-900" size={20} />
              </div>
              <div className="bg-zinc-100 px-2.5 py-1 rounded-full">
                <span className="font-black text-[9px] text-zinc-600 uppercase tracking-widest">
                  7 AM — 7 PM
                </span>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="font-black text-zinc-900 text-xl uppercase tracking-tight">
                Direct Call
              </h3>
              <p className="mt-1 font-medium text-zinc-400 text-xs italic">
                Available 7 days a week for urgent scoping.
              </p>
            </div>
          </a>

          {/* Operating Hours */}
          <div className="flex flex-col justify-between bg-zinc-50 p-6 border border-zinc-100 rounded-2xl">
            <div className="flex items-center gap-2">
              <Clock className="text-orange-500" size={16} />
              <span className="font-black text-[9px] text-zinc-700 uppercase tracking-[0.2em]">
                Operating Hours
              </span>
            </div>
            <div className="space-y-3 mt-8">
              <div className="flex justify-between pb-2 border-zinc-200 border-b">
                <span className="font-bold text-zinc-400 text-xs uppercase">Mon — Sun</span>
                <span className="font-black text-zinc-900 text-xs uppercase tracking-tight">
                  Always Open
                </span>
              </div>
              <p className="text-[11px] text-zinc-500 leading-relaxed">
                Emails between 6 AM and 8 PM are answered within the hour.
                Night-time requests are handled before 7 AM next day.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}