import Link from "next/link";
import { ArrowRight, Zap, ShieldCheck, Layers } from "lucide-react";
import { siteConfig } from "@/core/config/site";

export default function Hero() {
  return (
    <section className="relative bg-white pt-20 pb-24 overflow-hidden">
      {/* BACKGROUND DECORATION */}
      <div className="top-0 left-1/2 -z-10 absolute w-full h-full -translate-x-1/2">
        <div className="top-[-10%] left-[-10%] absolute bg-orange-50 opacity-50 blur-[120px] rounded-full w-[40%] h-[40%]" />
        <div className="right-[-10%] bottom-[-10%] absolute bg-zinc-100 opacity-80 blur-[100px] rounded-full w-[30%] h-[30%]" />
      </div>

      <div className="mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center mx-auto max-w-4xl text-center">

          {/* TRUST BADGE */}
          <div className="inline-flex slide-in-from-bottom-3 items-center gap-2 bg-zinc-50 mb-8 px-4 py-2 border border-zinc-100 rounded-full animate-in duration-700 fade-in">
  <span className="relative flex w-2 h-2 shrink-0">
    <span className="inline-flex absolute bg-orange-400 opacity-75 rounded-full w-full h-full animate-ping"></span>
    <span className="inline-flex relative bg-orange-500 rounded-full w-2 h-2"></span>
  </span>
  <span className="flex flex-wrap justify-center gap-x-2 font-bold text-[10px] text-zinc-500 uppercase tracking-widest">
    <span className="whitespace-nowrap">Custom-Built</span>
    <span className="text-zinc-300">·</span>
    <span className="whitespace-nowrap">Fast Delivery</span>
    <span className="text-zinc-300">·</span>
    <span className="whitespace-nowrap">Ongoing Support</span>
  </span>
</div>

          {/* MAIN HEADLINE */}
          <h1 className="slide-in-from-bottom-4 mb-6 font-black text-zinc-900 text-5xl md:text-7xl leading-[0.9] tracking-tighter animate-in duration-1000 fade-in">
            We Design &amp; Build <span className="text-orange-500">Digital Products</span> That Work.
          </h1>

          {/* SUB-HEADLINE */}
        <p className="slide-in-from-bottom-5 mb-10 max-w-2xl text-zinc-500 text-lg md:text-xl leading-relaxed animate-in duration-1000 fade-in">
  <span className="font-semibold text-zinc-900">{siteConfig.name}</span> is a
  Nairobi-based design and development studio building websites, web apps, and
  digital products for businesses across Kenya and beyond — engineered for
  performance from day one.
</p>

          {/* PRIMARY CTA */}
          <div className="slide-in-from-bottom-6 flex sm:flex-row flex-col items-center gap-4 w-full sm:w-auto animate-in duration-1000 fade-in">
            <a
              href={siteConfig.links.whatsapp}
              className="flex justify-center items-center gap-2 bg-black hover:bg-zinc-800 shadow-xl shadow-zinc-200 px-8 py-4 rounded-2xl w-full sm:w-auto font-bold text-white transition-all"
            >
              Start Your Project
              <ArrowRight size={20} className="text-orange-500" />
            </a>

            <Link
              href="/projects"
              className="hover:bg-zinc-50 px-8 py-4 border border-transparent hover:border-zinc-200 rounded-2xl w-full sm:w-auto font-bold text-zinc-600 transition-colors"
            >
              View Our Work
            </Link>
          </div>

          {/* TRUST PILLARS */}
          <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mt-20 pt-10 border-zinc-100 border-t w-full animate-in duration-1000 delay-300 fade-in zoom-in">
            <div className="flex justify-center md:justify-start items-center gap-3">
              <div className="bg-orange-50 p-2 rounded-lg text-orange-600">
                <Zap size={20} />
              </div>
              <span className="font-bold text-zinc-700 text-sm uppercase tracking-tight">
                Speed Optimized
              </span>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="bg-zinc-50 p-2 rounded-lg text-zinc-600">
                <Layers size={20} />
              </div>
              <span className="font-bold text-zinc-700 text-sm uppercase tracking-tight">
                Custom Built
              </span>
            </div>
            <div className="flex justify-center md:justify-end items-center gap-3">
              <div className="bg-zinc-50 p-2 rounded-lg text-zinc-600">
                <ShieldCheck size={20} />
              </div>
              <span className="font-bold text-zinc-700 text-sm uppercase tracking-tight">
                Secure &amp; Scalable
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}