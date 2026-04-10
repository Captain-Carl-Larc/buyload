import { siteConfig } from "@/core/config/site";
import { Rocket, Server } from "lucide-react";

export default function AppDevCTA() {
  return (
    <section className="px-6 pb-24">
      <div className="group relative bg-zinc-900 mx-auto p-12 md:p-20 rounded-[3rem] max-w-7xl overflow-hidden">
        <div className="top-0 right-0 z-0 absolute bg-orange-500/10 group-hover:bg-orange-500/20 blur-[100px] w-1/3 h-full transition-all duration-700" />
        
        <div className="z-10 relative flex lg:flex-row flex-col items-center gap-16">
          <div className="flex-1 text-left">
            <h2 className="mb-8 font-black text-white text-4xl md:text-7xl uppercase leading-[0.9] tracking-tighter">
              Build for the <br /> 
              <span className="text-orange-500 italic">Next Million.</span>
            </h2>
            <p className="mb-10 max-w-md font-medium text-zinc-400 text-lg">
              We specialize in building robust, production-ready mobile applications 
              that don't just work—they dominate. Let's engineer your growth engine.
            </p>
            <a 
              href={siteConfig.links.whatsapp}
              className="inline-flex items-center gap-3 bg-orange-500 hover:bg-white shadow-2xl px-8 py-4 rounded-2xl font-black text-white hover:text-zinc-900 transition-all"
            >
              <Rocket size={20} />
              Launch Your Product
            </a>
          </div>

          <div className="hidden md:block w-full max-w-85">
            <div className="bg-zinc-950/80 backdrop-blur-sm p-8 border border-zinc-800 rounded-3xl">
                <div className="flex items-center gap-2 mb-6">
                    <Server size={14} className="text-orange-500" />
                    <span className="font-black text-[10px] text-white uppercase tracking-widest">Infrastucture Audit</span>
                </div>
                <ul className="space-y-4 font-bold text-zinc-500 text-xs">
                  <li className="flex justify-between items-center">
                    <span>SCALABILITY</span>
                    <span className="font-mono text-orange-500">READY</span>
                  </li>
                  <li className="flex justify-between items-center pt-4 border-zinc-800 border-t">
                    <span>SECURITY</span>
                    <span className="font-mono text-orange-500">HARDENED</span>
                  </li>
                  <li className="flex justify-between items-center pt-4 border-zinc-800 border-t">
                    <span>UPTIME</span>
                    <span className="font-mono text-orange-500">99.9%</span>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}