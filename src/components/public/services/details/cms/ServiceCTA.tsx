import { siteConfig } from "@/core/config/site";
import { Unlock, MousePointer2, Sparkles } from "lucide-react";

export default function CMSCTA() {
  return (
    <section className="px-6 pb-24">
      <div className="group relative bg-zinc-50 mx-auto p-12 md:p-20 border border-zinc-200 rounded-[3rem] max-w-7xl overflow-hidden">
        
        {/* SUBTLE FLOATING ELEMENTS */}
        <div className="top-10 right-10 absolute opacity-20 text-orange-500 group-hover:rotate-12 transition-transform duration-700">
            <Unlock size={120} strokeWidth={1} />
        </div>
        
        <div className="z-10 relative flex lg:flex-row flex-col items-center gap-16">
          <div className="flex-1 text-left">
            
            {/* THE PAIN: DEPENDENCY */}
            <div className="inline-flex items-center gap-2 bg-orange-100 mb-6 px-3 py-1 rounded-full">
              <Sparkles size={12} className="text-orange-600" />
              <span className="font-black text-[10px] text-orange-600 uppercase tracking-widest">
                End Developer Dependency
              </span>
            </div>

            {/* THE PROMISE: AUTONOMY */}
            <h2 className="mb-8 font-black text-zinc-900 text-4xl md:text-7xl uppercase leading-[0.9] tracking-tighter">
              The Keys to your <br /> 
              <span className="text-orange-500 italic">Digital Kingdom.</span>
            </h2>

            <p className="mb-10 max-w-xl font-medium text-zinc-500 text-lg md:text-xl leading-relaxed">
              Stop waiting weeks for a simple text change or price update. We build 
              <span className="font-bold text-zinc-900 italic"> user-friendly environments</span> where your team can create, edit, and publish content in seconds. No code, no stress, just total autonomy.
            </p>

            {/* THE ACTION */}
            <div className="flex sm:flex-row flex-col items-start sm:items-center gap-6">
              <a 
                href={siteConfig.links.whatsapp}
                className="group flex justify-center items-center gap-3 bg-zinc-900 hover:bg-orange-500 shadow-2xl px-8 py-5 rounded-2xl w-full sm:w-auto font-black text-white transition-all"
              >
                <span>Give Me Autonomy</span>
                <Unlock size={18} className="group-hover:rotate-12 transition-transform" />
              </a>
              
              <div className="flex items-center gap-2 font-bold text-[10px] text-zinc-400 uppercase tracking-widest">
                <MousePointer2 size={14} />
                <span>Zero Coding Required</span>
              </div>
            </div>
          </div>

          {/* THE "FREEDOM" VISUAL */}
          <div className="hidden lg:block w-full max-w-85">
            <div className="relative bg-white shadow-xl p-8 border border-zinc-100 rounded-[2.5rem]">
                <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="flex justify-center items-center bg-orange-500 rounded-lg w-8 h-8 font-black text-white text-xs">A</div>
                        <div className="space-y-1">
                            <p className="font-black text-[10px] text-zinc-900 uppercase">ADMIN_PORTAL</p>
                            <p className="font-bold text-[8px] text-zinc-400">LOGGED_IN: YOU</p>
                        </div>
                    </div>
                    
                    <div className="bg-zinc-50 rounded-full w-full h-2 overflow-hidden">
                        <div className="bg-orange-500/20 w-3/4 h-full" />
                    </div>
                    <div className="bg-zinc-50 rounded-full w-1/2 h-2" />
                    
                    <div className="pt-4">
                        <div className="flex justify-center items-center bg-zinc-900 py-3 rounded-xl w-full">
                            <span className="font-black text-[9px] text-white uppercase tracking-[0.2em]">Publish Live</span>
                        </div>
                    </div>
                </div>
                
                {/* Floating "Key" Badge */}
                <div className="-top-4 -right-4 absolute flex justify-center items-center bg-orange-500 shadow-lg border-4 border-white rounded-full w-12 h-12 text-white rotate-12">
                    <Unlock size={20} />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}