import { ShieldCheck, Cpu, Cloud, Smartphone, Repeat, Boxes } from "lucide-react";

export default function AppDevMatrix() {
  const specs = [
    {
      title: "Cross-Platform Native",
      desc: "One codebase, two stores. We reduce development costs while maintaining 60fps native performance.",
      icon: <Smartphone size={24} />,
      keyword: "Hybrid App Development"
    },
    {
      title: "Real-time Backends",
      desc: "Push notifications and live data sync that keep your users engaged in real-time.",
      icon: <Cloud size={24} />,
      keyword: "Scalable Cloud Apps"
    },
    {
      title: "Bank-Grade Security",
      desc: "End-to-end encryption and secure authentication protocols to protect sensitive user data.",
      icon: <ShieldCheck size={24} />,
      keyword: "Secure Mobile Logic"
    },
    {
      title: "Optimized Performance",
      desc: "Advanced caching and memory management to ensure the app runs smoothly on older devices.",
      icon: <Cpu size={24} />,
      keyword: "Native Speed"
    },
    {
      title: "API-Driven Architecture",
      desc: "Decoupled logic that allows your app to talk to any external system or future hardware.",
      icon: <Boxes size={24} />,
      keyword: "Modern Infrastructure"
    },
    {
      title: "Continuous Updates",
      desc: "Modular code that allows for seamless feature updates without breaking the existing experience.",
      icon: <Repeat size={24} />,
      keyword: "Agile Growth"
    }
  ];

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="gap-x-12 gap-y-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {specs.map((s) => (
            <div key={s.title} className="group">
              <div className="mb-6 text-zinc-300 group-hover:text-orange-500 transition-colors">
                {s.icon}
              </div>
              <h3 className="mb-4 font-black text-zinc-900 text-xl italic uppercase tracking-tight">
                {s.title}
              </h3>
              <p className="mb-4 text-zinc-500 text-sm leading-relaxed">
                {s.desc}
              </p>
              <span className="font-mono font-bold text-[9px] text-orange-500/40 italic uppercase tracking-widest">
                {s.keyword}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}