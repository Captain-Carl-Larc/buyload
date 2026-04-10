import { siteConfig } from "@/core/config/site";
import { Terminal, ArrowRight, Zap } from "lucide-react";

export default function DevCTA() {
  return (
    <section className="px-6 pb-24">
      <div className="relative bg-orange-500 mx-auto p-12 md:p-20 rounded-[3rem] max-w-7xl overflow-hidden">
        {/* DECORATIVE TERMINAL BACKGROUND */}
        <div className="hidden lg:block top-0 right-0 absolute opacity-10 p-12 w-full lg:w-1/2 h-full overflow-hidden font-mono text-[10px] pointer-events-none select-none">
          <p>GET /api/system/health HTTP/1.1</p>
          <p>Host: fyutchalabs.com</p>
          <p className="text-white">{"{ status: 'OPTIMIZING', core_vitals: 100 }"}</p>
          <p>Running: Security_Audit.exe...</p>
          <p>Scanning dependencies...</p>
          <p className="text-white">Success: Infrastructure stabilized.</p>
          {/* Repeat some lines to fill space */}
          <p>GET /api/system/health HTTP/1.1</p>
          <p className="text-white">{"{ status: 'READY_TO_SCALE' }"}</p>
        </div>
        
        <div className="z-10 relative flex lg:flex-row flex-col items-center gap-12">
          <div className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm mb-6 px-3 py-1 rounded-full">
              <Zap size={12} className="fill-white text-white" />
              <span className="font-black text-[10px] text-white uppercase tracking-widest">
                Technical Rescue Service
              </span>
            </div>

            <h2 className="mb-8 font-black text-white text-4xl md:text-6xl uppercase leading-[0.9] tracking-tighter">
              Stop Fighting <br /> 
              <span className="text-zinc-900">Your Code.</span>
            </h2>

            <p className="mb-10 max-w-md font-medium text-white/90 text-lg leading-relaxed">
              Whether you're building from scratch or need to stabilize a messy legacy platform, 
              we provide the engineering rigor to make it run flawlessly.
            </p>

            <a 
              href={siteConfig.links.whatsapp}
              className="group inline-flex items-center gap-3 bg-zinc-900 hover:bg-white shadow-2xl px-8 py-4 rounded-2xl font-black text-white hover:text-orange-600 transition-all"
            >
              <Terminal size={20} />
              Request a Technical Audit
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* THE "RESCUE" VISUAL */}
          <div className="hidden lg:block bg-zinc-900 shadow-3xl p-8 border border-white/10 rounded-3xl w-full max-w-[320px]">
            <div className="space-y-6">
              <div>
                <p className="mb-1 font-black text-[10px] text-orange-500 uppercase tracking-widest">System Status</p>
                <div className="bg-zinc-800 rounded-full w-full h-1.5 overflow-hidden">
                  <div className="bg-orange-500 w-full h-full animate-pulse"></div>
                </div>
              </div>
              <ul className="space-y-3 font-bold text-zinc-400 text-xs">
                <li className="flex items-center gap-2">
                  <span className="bg-orange-500 rounded-full w-1.5 h-1.5"></span>
                  STABILIZE INFRASTRUCTURE
                </li>
                <li className="flex items-center gap-2 text-white">
                  <span className="bg-orange-500 rounded-full w-1.5 h-1.5"></span>
                  OPTIMIZE PERFORMANCE
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-orange-500 rounded-full w-1.5 h-1.5"></span>
                  SECURE ENDPOINTS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}