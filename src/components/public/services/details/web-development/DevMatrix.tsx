import { Terminal, Database, ShieldAlert, Zap, Layers, Share2 } from "lucide-react";

export default function DevMatrix() {
  const specs = [
    {
      title: "Clean-Sheet Code",
      desc: "Zero-bloat engineering that allows your site to grow without technical debt slowing you down.",
      icon: <Terminal size={24} />,
      keyword: "Custom Web Development"
    },
    {
      title: "Database Integrity",
      desc: "Secure and optimized data structures that handle complex logic and thousands of requests per second.",
      icon: <Database size={24} />,
      keyword: "Scalable Infrastructure"
    },
    {
      title: "Hardened Security",
      desc: "Built with a security-first mindset. We implement modern protection against CSRF, XSS, and SQL injection.",
      icon: <ShieldAlert size={24} />,
      keyword: "Secure Web Applications"
    },
    {
      title: "Speed Optimization",
      desc: "Every asset is compressed and every route is optimized to ensure a sub-second time-to-interactive.",
      icon: <Zap size={24} />,
      keyword: "High Performance"
    },
    {
      title: "API-First Approach",
      desc: "Seamlessly connect your business with third-party tools, payment gateways, or custom mobile apps.",
      icon: <Share2 size={24} />,
      keyword: "API Integration"
    },
    {
      title: "Modular Logic",
      desc: "Components are built to be reused and extended, making future updates faster and more cost-effective.",
      icon: <Layers size={24} />,
      keyword: "Future-Proof Code"
    }
  ];

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="gap-x-12 gap-y-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {specs.map((spec) => (
            <div key={spec.title} className="group">
              <div className="mb-6 text-zinc-300 group-hover:text-orange-500 transition-colors">
                {spec.icon}
              </div>
              <h3 className="mb-4 font-black text-zinc-900 text-xl uppercase tracking-tight">
                {spec.title}
              </h3>
              <p className="mb-4 text-zinc-500 text-sm leading-relaxed">
                {spec.desc}
              </p>
              <span className="font-mono font-bold text-[9px] text-orange-500/50 italic uppercase tracking-widest">
                {spec.keyword}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}