// components/public/sections/Portfolio.tsx
import Link from "next/link";

// Replace with real project data — ideally fetched from MDX or a data file
const projects = [
  {
    title: "Baraka Real Estate",
    type: "Website Design",
    outcome: "3× increase in inquiry form submissions",
    tag: "Real Estate",
    href: "/projects/baraka-real-estate",
    // image: "/images/projects/baraka.jpg", // Uncomment when you have screenshots
  },
  {
    title: "SwiftPay Logistics",
    type: "Web Application",
    outcome: "Reduced manual order tracking by 80%",
    tag: "Logistics",
    href: "/projects/swiftpay-logistics",
  },
  {
    title: "Aroha Wellness",
    type: "SEO + Website Redesign",
    outcome: "Page 1 ranking for 12 target keywords",
    tag: "Health & Wellness",
    href: "/projects/aroha-wellness",
  },
];

export default function Portfolio() {
  return (
    <section className="bg-gray-50 py-24 w-full">
      <div className="mx-auto px-6 max-w-6xl">
        {/* Heading */}
        <div className="flex sm:flex-row flex-col justify-between sm:items-end gap-6 mb-14">
          <div>
            <span className="font-bold text-orange-500 text-xs uppercase tracking-[0.2em]">
              Our Work
            </span>
            <h2 className="mt-3 font-bold text-gray-900 text-4xl tracking-tight">
              Projects we're proud of
            </h2>
          </div>
          <Link
            href="/projects"
            className="font-semibold text-orange-500 hover:text-orange-600 text-sm hover:underline underline-offset-4 whitespace-nowrap transition-colors"
          >
            View all projects →
          </Link>
        </div>

        {/* Project cards */}
        <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group flex flex-col bg-white hover:shadow-orange-50 hover:shadow-xl border border-gray-200 hover:border-orange-300 rounded-xl overflow-hidden transition-all duration-300"
            >
              {/* Placeholder image area — swap for <Image /> when ready */}
              <div className="flex justify-center items-center bg-gray-100 w-full aspect-video">
                <span className="font-medium text-gray-400 text-xs uppercase tracking-widest">
                  Screenshot coming soon
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-6">
                <div className="flex justify-between items-center">
                  <span className="bg-orange-50 px-2 py-1 rounded-full font-bold text-[11px] text-orange-500 uppercase tracking-widest">
                    {project.tag}
                  </span>
                  <span className="text-gray-400 text-xs">{project.type}</span>
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-orange-500 text-lg transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">📈 {project.outcome}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}