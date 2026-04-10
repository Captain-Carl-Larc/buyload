import { siteConfig } from "@/core/config/site";

export default function AboutHero() {
  return (
    <section className="px-6 pt-16 md:pt-24">
      <div className="mx-auto pb-20 border-zinc-100 border-b max-w-7xl">
        <div className="max-w-4xl">
          <h1 className="mb-8 font-black text-zinc-900 text-6xl md:text-8xl leading-[0.85] tracking-tighter">
            Engineering <br /> 
            <span className="text-orange-500 text-5xl md:text-7xl">Digital Velocity.</span>
          </h1>
          <p className="font-medium text-zinc-500 text-xl md:text-2xl leading-relaxed">
            At {siteConfig.name}, we don't build generic websites. We engineer 
            custom digital infrastructure for brands that prioritize 
            performance, ownership, and long-term growth.
          </p>
        </div>
      </div>
    </section>
  );
}