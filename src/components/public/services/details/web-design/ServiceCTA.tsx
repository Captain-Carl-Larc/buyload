import { siteConfig } from "@/core/config/site";
import { MessageCircle } from "lucide-react";

export default function ServiceCTA() {
  return (
    <section className="px-6 pb-24">
      <div className="relative bg-zinc-900 mx-auto p-12 md:p-20 rounded-[3rem] max-w-7xl overflow-hidden">
        {/* DECORATIVE BACKGROUND */}
        <div className="top-0 right-0 z-0 absolute bg-orange-500/5 blur-[120px] w-1/2 h-full" />
        
        <div className="z-10 relative flex lg:flex-row flex-col items-center gap-16">
          <div className="flex-1 text-left">
  {/* Smaller mobile heading (text-3xl) that scales up (md:text-6xl) */}
  <h2 className="mb-6 font-black text-white text-3xl md:text-6xl uppercase leading-[0.9] tracking-tighter">
    Ready to <br /> 
    <span className="text-orange-500 italic">Engineer Growth?</span>
  </h2>
  
  <p className="mb-8 max-w-md text-zinc-400 text-base md:text-lg leading-relaxed">
    Don't settle for a generic template. Let's build a custom digital product 
    that suits your unique business needs and dominates your market.
  </p>

  {/* Slimmer mobile button (py-3, text-sm) scaling to desktop (md:py-4, md:text-base) */}
  <a 
    href={siteConfig.links.whatsapp}
    className="inline-flex justify-center items-center gap-3 bg-white hover:bg-orange-500 shadow-2xl px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl w-full sm:w-auto font-black text-zinc-900 hover:text-white text-sm md:text-base transition-all"
  >
    <MessageCircle size={18} className="md:w-5 md:h-5" />
    <span>Book Your Technical Scoping</span>
  </a>
</div>

          {/* THE SVG GUARANTEE (Simplified for this CTA block) */}
          <div className="hidden md:block w-full max-w-85">
             {/* [SVG Guarantee Code would be injected here or called as a sub-component] */}
             <div className="bg-zinc-950/50 backdrop-blur-sm p-8 border border-zinc-800 rounded-3xl">
                <p className="mb-4 font-black text-[10px] text-orange-500 uppercase tracking-widest">The Promise</p>
                <ul className="space-y-4 font-bold text-white text-sm">
                  <li className="flex items-center gap-3 italic">✓ Total Code Ownership</li>
                  <li className="flex items-center gap-3 italic">✓ Secure & Scalable Logic</li>
                  <li className="flex items-center gap-3 italic">✓ Permanent Support</li>
                </ul>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}