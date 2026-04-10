import { siteConfig } from "@/core/config/site";
import { PlayCircle, ArrowUpRight } from "lucide-react";

export default function AppCTA() {
  return (
    <section className="px-6 pb-24">
      <div className="relative bg-zinc-900 mx-auto p-12 md:p-20 rounded-[3rem] max-w-7xl overflow-hidden">
        {/* DESIGN GRID BACKGROUND */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#f97316 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        
        <div className="z-10 relative flex lg:flex-row flex-col items-center gap-12">
          <div className="flex-1 text-left">
            <h2 className="mb-8 font-black text-white text-4xl md:text-7xl italic uppercase leading-[0.9] tracking-tighter">
              See Your App <br /> 
              <span className="text-orange-500">Before It's Built.</span>
            </h2>
            <p className="mb-10 max-w-md font-medium text-zinc-400 text-lg">
              We turn your vision into a high-fidelity, clickable prototype. 
              Feel the experience, test the logic, and validate your product before investing in development.
            </p>
            <a 
              href={siteConfig.links.whatsapp}
              className="group inline-flex items-center gap-3 bg-white hover:bg-orange-500 shadow-2xl px-8 py-4 rounded-2xl font-black text-zinc-900 hover:text-white transition-all"
            >
              <PlayCircle size={20} />
              Start Your Prototype
              <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="hidden lg:block w-full max-w-85">
            <div className="bg-zinc-800/50 shadow-3xl backdrop-blur-xl p-8 border border-zinc-700 rounded-[2.5rem]">
              <div className="space-y-6">
                <div className="bg-orange-500 rounded-full w-12 h-2" />
                <div className="space-y-2">
                  <div className="bg-zinc-700 rounded-lg w-full h-4" />
                  <div className="bg-zinc-700 rounded-lg w-3/4 h-4" />
                </div>
                <div className="flex gap-2">
                  <div className="bg-orange-500/20 border border-orange-500/30 rounded-full w-10 h-10" />
                  <div className="bg-orange-500 rounded-xl w-full h-10" />
                </div>
              </div>
            </div>
            <p className="mt-6 font-black text-[10px] text-zinc-500 text-center uppercase tracking-widest">
              Prototyping Standard v.1.0
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}