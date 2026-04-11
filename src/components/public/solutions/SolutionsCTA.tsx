import { siteConfig } from "@/core/config/site";
import { Code, MessageCircle } from "lucide-react";

export default function SolutionsCTA() {
  return (
    <section className="px-6 pb-16">
      <div className="relative bg-orange-500 mx-auto px-8 md:px-16 py-12 md:py-14 rounded-3xl max-w-7xl overflow-hidden">

        {/* Decorative Grid Overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="z-10 relative flex flex-col items-center gap-6 text-center">

          {/* Label */}
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full">
            <Code size={12} className="text-white" />
            <span className="font-black text-[10px] text-white uppercase tracking-[0.2em]">
              Next Project Ready
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-black text-white text-4xl md:text-6xl uppercase leading-[0.85] tracking-tighter">
            Let's Engineer <br />
            <span className="text-zinc-900 italic">Your Success.</span>
          </h2>

          {/* Subtext */}
          <p className="opacity-90 max-w-lg font-medium text-white text-base md:text-lg leading-relaxed">
            Have a project in mind or a system that needs a technical rescue? Join the companies
            leveraging Fyutcha Labs for real-world growth.
          </p>

          {/* CTA */}
          <div className="flex sm:flex-row flex-col items-center gap-4 mt-2">
            <a
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-zinc-900 hover:bg-white shadow-xl px-8 py-3.5 rounded-xl font-black text-white hover:text-orange-600 text-xs uppercase tracking-widest transition-all"
            >
              Start The Conversation
              <MessageCircle size={15} />
            </a>
            <span className="font-black text-[10px] text-white/60 uppercase tracking-widest">
              Free Technical Scoping Session
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}