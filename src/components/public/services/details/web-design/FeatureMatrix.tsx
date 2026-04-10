import { Zap, Shield, Search, Smartphone, BarChart3, Globe } from "lucide-react";

export default function FeatureMatrix() {
  const features = [
    {
      title: "Mobile-First Design",
      desc: "Every layout is engineered to be fully responsive, ensuring a seamless experience for your customers on smartphones and tablets.",
      icon: <Smartphone size={24} />,
      keyword: "Responsive Web Design"
    },
    {
      title: "SEO-Baked Architecture",
      desc: "We don't just 'do' SEO later. We build your site's logic to be crawlable and rankable from the very first line of code.",
      icon: <Search size={24} />,
      keyword: "Search Engine Optimization"
    },
    {
      title: "Lightning Performance",
      desc: "Optimized for Core Web Vitals. We aim for 100/100 Lighthouse scores to reduce bounce rates and boost rankings.",
      icon: <Zap size={24} />,
      keyword: "Fast Load Times"
    },
    {
      title: "Ironclad Security",
      desc: "From SSL to secure headers and clean dependencies, your business infrastructure is protected against modern threats.",
      icon: <Shield size={24} />,
      keyword: "Secure Web Solutions"
    },
    {
      title: "Conversion Logic",
      desc: "Strategic placement of CTAs and intuitive user flows designed to turn casual visitors into paying customers.",
      icon: <BarChart3 size={24} />,
      keyword: "Conversion Rate Optimization"
    },
    {
      title: "Global Standards",
      desc: "Nairobi-based team building to international quality benchmarks using modern frameworks like Next.js and Tailwind.",
      icon: <Globe size={24} />,
      keyword: "Professional Development"
    }
  ];

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="gap-x-12 gap-y-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="group">
              <div className="mb-6 text-zinc-400 group-hover:text-orange-500 transition-colors">
                {feature.icon}
              </div>
              <h3 className="mb-4 font-black text-zinc-900 text-xl uppercase tracking-tight">
                {feature.title}
              </h3>
              <p className="mb-4 text-zinc-500 text-sm leading-relaxed">
                {feature.desc}
              </p>
              <span className="font-bold text-[9px] text-orange-500/50 italic uppercase tracking-widest">
                {feature.keyword}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}