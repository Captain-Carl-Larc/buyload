import { Fingerprint, Smartphone, Accessibility, Palette, MousePointerClick, RefreshCcw } from "lucide-react";

export default function AppMatrix() {
  const metrics = [
    {
      title: "Frictionless UX",
      desc: "Removing every unnecessary tap. We design for speed and ease of use to maximize user retention.",
      icon: <Fingerprint size={24} />,
      keyword: "User Experience Design"
    },
    {
      title: "Responsive Systems",
      desc: "Layouts that adapt perfectly from the smallest smartphone to the largest tablet screen.",
      icon: <Smartphone size={24} />,
      keyword: "Mobile UI Design"
    },
    {
      title: "Inclusivity First",
      desc: "Meeting global WCAG standards for accessibility, ensuring your app is usable by everyone.",
      icon: <Accessibility size={24} />,
      keyword: "Accessible Interfaces"
    },
    {
      title: "Brand Consistency",
      desc: "We build custom Design Systems so your app feels like a natural extension of your brand identity.",
      icon: <Palette size={24} />,
      keyword: "Custom UI Kits"
    },
    {
      title: "Micro-Interactions",
      desc: "Subtle animations and feedback loops that make the app feel alive and responsive to every touch.",
      icon: <MousePointerClick size={24} />,
      keyword: "Interactive Prototyping"
    },
    {
      title: "Iterative Refinement",
      desc: "We use data-driven design cycles to test, learn, and improve the interface based on user feedback.",
      icon: <RefreshCcw size={24} />,
      keyword: "Product Optimization"
    }
  ];

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="gap-x-12 gap-y-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.title} className="group">
              <div className="mb-6 text-zinc-300 group-hover:text-orange-500 transition-colors">
                {m.icon}
              </div>
              <h3 className="mb-4 font-black text-zinc-900 text-xl italic uppercase tracking-tight">
                {m.title}
              </h3>
              <p className="mb-4 text-zinc-500 text-sm leading-relaxed">
                {m.desc}
              </p>
              <span className="font-bold text-[9px] text-zinc-900/20 italic uppercase tracking-widest">
                {m.keyword}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}