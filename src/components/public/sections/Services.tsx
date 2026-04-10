// components/public/sections/Services.tsx
import Link from "next/link";

const services = [
  {
    icon: "◻",
    title: "Web Design",
    description:
      "Custom website design crafted around your brand and goals. Every layout, colour, and detail is intentional — no templates, no shortcuts.",
    href: "/services/web-design",
  },
  {
    icon: "⬡",
    title: "Web Development",
    description:
      "Clean, performant code that brings your designs to life. From marketing sites to complex multi-page platforms, built to last.",
    href: "/services/web-development",
  },
  {
    icon: "◈",
    title: "App Design",
    description:
      "UI/UX design for web and mobile applications. Intuitive flows, polished interfaces, and design systems built for scale.",
    href: "/services/app-design",
  },
  {
    icon: "⬕",
    title: "App Development",
    description:
      "Full-stack web application development — dashboards, portals, booking systems, SaaS tools, and custom internal tools.",
    href: "/services/app-development",
  },
  {
    icon: "◉",
    title: "CMS Development",
    description:
      "Headless or traditional CMS setups so your team can manage content independently — without touching a line of code.",
    href: "/services/cms-development",
  },
  {
    icon: "◧",
    title: "Development Support",
    description:
      "Existing site with bugs, performance issues, or outdated code? We step in, diagnose, and fix — fast.",
    href: "/services/development-support",
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
            Design and development, done properly
          </h2>
          <p className="mt-4 max-w-xl text-gray-500 text-lg leading-relaxed">
            We are a design and development studio. We build websites, web apps, and digital
            products — nothing else. That focus is what makes us good at it.
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