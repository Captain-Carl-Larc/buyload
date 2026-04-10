import Link from "next/link";
import { MessageCircle, HelpCircle, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/core/config/site";

export default function KnowledgeBase() {
  return (
    <section className="px-6 pb-24">
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 mx-auto max-w-7xl">
        
        {/* LEFT: SELF-SERVICE (FAQ) */}
        <div className="group flex flex-col justify-between bg-zinc-50 p-10 border border-zinc-100 rounded-[2.5rem]">
          <div>
            <div className="flex justify-center items-center bg-white shadow-sm mb-6 rounded-2xl w-12 h-12">
              <HelpCircle className="text-zinc-400" size={24} />
            </div>
            <h3 className="mb-4 font-black text-zinc-900 text-3xl tracking-tighter">
              Everything You Need to Know.
            </h3>
            <p className="max-w-xs text-zinc-500 text-sm leading-relaxed">
              We have documented our standards on performance, ownership, and scaling so you can get clarity before we start.
            </p>
          </div>
          <Link 
            href="/faqs" 
            className="group flex items-center gap-2 mt-12 font-bold text-zinc-900 hover:text-orange-500 transition-colors"
          >
            Explore Common Questions
            <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* RIGHT: DIRECT ACCESS (WHATSAPP) */}
        <div className="flex flex-col justify-between bg-orange-500 shadow-orange-100 shadow-xl p-10 rounded-[2.5rem] text-white">
          <div>
            <div className="flex justify-center items-center bg-orange-400/30 mb-6 rounded-2xl w-12 h-12">
              <MessageCircle className="text-white" size={24} />
            </div>
            <h3 className="mb-4 font-black text-3xl tracking-tighter">
              Still Curious?
            </h3>
            <p className="max-w-xs text-orange-100 text-sm leading-relaxed">
              Every project has unique hurdles. If your question isn’t covered, we are active on WhatsApp for a technical breakdown.
            </p>
          </div>
          <a 
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-zinc-900 shadow-lg mt-12 px-6 py-4 rounded-2xl font-black text-orange-600 hover:text-white text-center transition-all"
          >
            Ask Us Anything
          </a>
        </div>

      </div>
    </section>
  );
}