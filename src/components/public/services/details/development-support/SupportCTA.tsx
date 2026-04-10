import { siteConfig } from "@/core/config/site";
import { AlertCircle, Zap, ShieldAlert, ArrowRight } from "lucide-react";

export default function SupportCTA() {
  return (
    <section className="px-6 pb-24">
      <div className="relative bg-zinc-950 mx-auto p-12 md:p-20 border border-zinc-900 rounded-[3rem] max-w-7xl overflow-hidden">
        
        {/* AGGRESSIVE BACKGROUND ELEMENTS */}
        <div className="top-0 right-0 absolute opacity-5 w-full h-full pointer-events-none select-none">
            <div className="top-10 right-10 absolute rotate-12"><ShieldAlert size={300} /></div>
        </div>
        
        <div className="z-10 relative flex lg:flex-row flex-col items-center gap-16">
          <div className="flex-1 text-left">
            
            {/* THE PAIN POINT */}
            <div className="inline-flex items-center gap-2 bg-red-500/10 mb-8 px-4 py-2 border border-red-500/20 rounded-full">
              <AlertCircle size={14} className="text-red-500" />
              <span className="font-black text-[10px] text-red-500 uppercase tracking-[0.2em]">
                Losing Customers Every Minute?
              </span>
            </div>

            {/* THE AGITATION */}
            <h2 className="mb-8 font-black text-white text-4xl md:text-7xl uppercase leading-[0.9] tracking-tighter">
              Is your tech <br /> 
              <span className="text-red-500 italic">Bleeding Revenue?</span>
            </h2>

            <p className="mb-10 max-w-xl font-medium text-zinc-400 text-lg md:text-xl leading-relaxed">
              Broken forms, <span className="font-bold text-white decoration-red-500/50 underline">lethargic loading speeds</span>, or a payment gateway that fails right at the finish line—these aren't just "bugs." They are leaks in your profit. You've worked too hard to let <span className="font-bold text-white italic">bad code</span> kill your growth.
            </p>

            {/* THE SOLUTION */}
            <div className="flex sm:flex-row flex-col items-start sm:items-center gap-6 pt-4">
              <a 
                href={siteConfig.links.whatsapp}
                className="group flex justify-center items-center gap-3 bg-white hover:bg-orange-500 shadow-2xl px-8 py-5 rounded-2xl w-full sm:w-auto font-black text-zinc-900 hover:text-white transition-all"
              >
                <span>Fix My System Now</span>
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </a>
              
              <div className="flex items-center gap-3 font-bold text-zinc-500 text-xs uppercase tracking-widest">
                <Zap size={16} className="text-orange-500" />
                <span>M-Pesa API & Speed Specialist</span>
              </div>
            </div>
          </div>

          {/* THE "EMERGENCY" VISUAL */}
          <div className="hidden lg:block w-full max-w-[340px]">
            <div className="relative bg-zinc-900 p-8 border-2 border-red-500/20 rounded-[2.5rem] overflow-hidden">
                <div className="top-0 right-0 absolute p-4">
                    <div className="bg-red-500 rounded-full w-3 h-3 animate-ping" />
                </div>
                
                <p className="mb-6 font-black text-white text-xs decoration-red-500 underline uppercase tracking-widest">Diagnostic Report</p>
                
                <div className="space-y-6">
                    <div className="flex justify-between items-center opacity-50">
                        <span className="font-mono text-[10px] text-zinc-400">FORM_STATUS</span>
                        <span className="font-mono text-[10px] text-red-500">FAIL</span>
                    </div>
                    <div className="flex justify-between items-center py-4 border-y border-zinc-800">
                        <span className="font-mono text-[10px] text-zinc-400">MPESA_SYNC</span>
                        <span className="font-mono font-black text-[10px] text-red-500 italic animate-pulse">CONNECTION_LOST</span>
                    </div>
                    <div className="flex justify-between items-center opacity-50">
                        <span className="font-mono text-[10px] text-zinc-400">LATENCY</span>
                        <span className="font-mono font-black text-[10px] text-red-500">9,420ms</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}