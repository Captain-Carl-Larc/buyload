import { Edit3, Zap, ShieldCheck, Share2, Search, Smartphone } from "lucide-react";

export default function CMSMatrix() {
  const features = [
    {
      title: "Intuitive Admin UI",
      desc: "Custom-tailored dashboards designed for your specific team workflow. If you can use a smartphone, you can manage your site.",
      icon: <Edit3 size={24} />,
      keyword: "User-Friendly CMS"
    },
    {
      title: "Headless Performance",
      desc: "We decouple the content from the code, resulting in lightning-fast load speeds and superior security compared to traditional setups.",
      icon: <Zap size={24} />,
      keyword: "Modern Architecture"
    },
    {
      title: "Role-Based Access",
      desc: "Define exactly who can edit what. Perfect for teams with multiple contributors, editors, and administrators.",
      icon: <ShieldCheck size={24} />,
      keyword: "Secure Permissions"
    },
    {
      title: "Omnichannel Delivery",
      desc: "Update your content once and have it sync across your website, mobile app, and social displays simultaneously.",
      icon: <Share2 size={24} />,
      keyword: "Content API"
    },
    {
      title: "SEO Autopilot",
      desc: "Built-in tools that ensure every page you publish is perfectly optimized for Google without needing a technical degree.",
      icon: <Search size={24} />,
      keyword: "Search Optimization"
    },
    {
      title: "Mobile Management",
      desc: "Update your business details, blog posts, or product prices directly from your phone while on the move.",
      icon: <Smartphone size={24} />,
      keyword: "Mobile Admin"
    }
  ];

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="gap-x-12 gap-y-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group">
              <div className="mb-6 text-zinc-300 group-hover:text-orange-500 transition-colors">
                {f.icon}
              </div>
              <h3 className="mb-4 font-black text-zinc-900 text-xl italic uppercase tracking-tight">
                {f.title}
              </h3>
              <p className="mb-4 text-zinc-500 text-sm leading-relaxed">
                {f.desc}
              </p>
              <span className="font-mono font-bold text-[9px] text-orange-500/30 italic uppercase tracking-[0.2em]">
                {f.keyword}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}