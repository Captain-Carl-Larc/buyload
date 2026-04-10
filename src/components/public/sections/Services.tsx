// components/public/sections/Services.tsx
import Link from "next/link";

const services = [
  {
    icon: "◻",
    title: "Website Design",
    description:
      "Custom, conversion-focused websites built from scratch. No templates — every pixel designed for your brand and goals.",
    href: "/services/website-design",
  },
  {
    icon: "⬡",
    title: "Web Applications",
    description:
      "Full-stack web apps with real functionality — dashboards, portals, booking systems, and more.",
    href: "/services/web-apps",
  },
  {
    icon: "◈",
    title: "SEO Optimization",
    description:
      "Technical and on-page SEO that gets your business found on Google. We audit, fix, and rank.",
    href: "/services/seo",
  },
  {
    icon: "⬕",
    title: "CMS Design",
    description:
      "Headless or traditional CMS setups so your team can update content without touching code.",
    href: "/services/cms",
  },
  {
    icon: "◉",
    title: "Website Fixes",
    description:
      "Broken layout? Slow load? Security issue? We diagnose and fix existing sites quickly.",
    href: "/services/fixes",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-24 w-full">
      <div className="mx-auto px-6 max-w-6xl">
        {/* Heading */}
        <div className="mb-14">
          <span className="font-bold text-orange-500 text-xs uppercase tracking-[0.2em]">
            What We Do
          </span>
          <h2 className="mt-3 font-bold text-gray-900 text-4xl tracking-tight">
            Services built for results
          </h2>
          <p className="mt-4 max-w-xl text-gray-500 text-lg leading-relaxed">
            Every service we offer is designed to move your business forward — more traffic, more
            leads, more revenue.
          </p>
        </div>

        {/* Grid */}
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative flex flex-col gap-4 bg-white hover:shadow-lg hover:shadow-orange-50 p-7 border border-gray-200 hover:border-orange-400 rounded-xl transition-all duration-300"
            >
              <span className="text-orange-500 text-2xl">{service.icon}</span>
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-orange-500 text-lg transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              <span className="opacity-0 group-hover:opacity-100 mt-auto font-semibold text-orange-500 text-xs uppercase tracking-widest transition-opacity">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}