// components/public/sections/SuccessStoryBanner.tsx
import Link from "next/link";
import { siteConfig } from "@/core/config/site";

export default function SuccessStoryBanner() {
  return (
    <section className="bg-orange-500 py-10 w-full">
      <div className="flex sm:flex-row flex-col justify-between items-center gap-6 mx-auto px-6 max-w-6xl">
        {/* Text */}
        <div className="sm:text-left text-center">
          <p className="mb-1 font-bold text-orange-100 text-xs uppercase tracking-[0.2em]">
            You're next
          </p>
          <h3 className="font-black text-white text-2xl tracking-tight">
            Become part of the success story.
          </h3>
        </div>

        {/* CTA */}
        <Link
          href={siteConfig.links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white hover:bg-orange-50 px-7 py-3.5 rounded-lg font-bold text-orange-500 text-sm transition-colors shrink-0"
        >
          Start your project →
        </Link>
      </div>
    </section>
  );
}