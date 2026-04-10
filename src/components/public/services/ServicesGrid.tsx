import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServicesGrid() {
  const services = [
    {
      icon: "◻",
      title: "Web Design",
      description: "Custom website design crafted around your brand and goals. Every layout, colour, and detail is intentional — no templates, no shortcuts.",
      href: "/services/web-design",
    },
    {
      icon: "⬡",
      title: "Web Development",
      description: "Clean, performant code that brings your designs to life. From marketing sites to complex multi-page platforms, built to last.",
      href: "/services/web-development",
    },
    {
      icon: "◈",
      title: "App Design",
      description: "UI/UX design for web and mobile applications. Intuitive flows, polished interfaces, and design systems built for scale.",
      href: "/services/app-design",
    },
    {
      icon: "⬕",
      title: "App Development",
      description: "Full-stack web application development — dashboards, portals, booking systems, SaaS tools, and custom internal tools.",
      href: "/services/app-development",
    },
    {
      icon: "⬕",
      title: "CMS Development",
      description: "Headless or traditional CMS setups so your team can manage content independently — without touching a line of code.",
      href: "/services/cms-development",
    },
    {
      icon: "◧",
      title: "Development Support",
      description: "Existing site with bugs, performance issues, or outdated code? We step in, diagnose, and fix — fast.",
      href: "/services/development-support",
    },
  ];

  return (
    <section className="px-6">
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-7xl">
        {services.map((service) => (
          <Link 
            key={service.href} 
            href={service.href}
            aria-label={`Learn more about ${service.title}`}
            className="group relative flex flex-col justify-between bg-white hover:shadow-2xl hover:shadow-orange-100/30 p-10 border border-zinc-100 hover:border-orange-600/20 rounded-[2.5rem] min-h-85 transition-all duration-500"
          >
            <div>
              <div className="grayscale group-hover:grayscale-0 mb-6 text-3xl group-hover:scale-110 origin-left transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="mb-4 font-black text-zinc-900 text-2xl uppercase tracking-tighter">
                {service.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="flex items-center gap-2 mt-8 font-bold text-[10px] text-zinc-400 group-hover:text-orange-600 uppercase tracking-[0.2em] transition-colors">
              Explore service
              <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}