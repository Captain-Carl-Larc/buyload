import { ExternalLink, Tag } from "lucide-react";

const projects = [
  {
    title: "Eco-Logic Portal",
    category: "Real Estate FinTech",
    desc: "Property management system with automated rent collection and M-Pesa STK push integration.",
    tags: ["Next.js", "Supabase", "M-Pesa API"],
    href: "https://eco-logic.vercel.app", // ← replace with real URL
    status: "Live",
    statusColor: "bg-green-500",
  },
  {
    title: "Nairobi Logistics Engine",
    category: "Enterprise Software",
    desc: "Real-time fleet tracking and dispatch logic for a local logistics firm, reducing delivery latency by 40%.",
    tags: ["React Native", "PostgreSQL", "Google Maps"],
    href: "https://nairobi-logistics.vercel.app", // ← replace with real URL
    status: "Optimization",
    statusColor: "bg-yellow-400",
  },
  {
    title: "Duka-Direct CMS",
    category: "E-Commerce",
    desc: "Headless commerce solution giving a retail brand 100% control over product inventory and content.",
    tags: ["Payload CMS", "Tailwind CSS", "Vercel"],
    href: "https://duka-direct.vercel.app", // ← replace with real URL
    status: "Live",
    statusColor: "bg-green-500",
  },
];

export default function ProjectRegistry() {
  return (
    <section className="bg-zinc-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADER */}
        <div className="flex md:flex-row flex-col justify-between items-start md:items-end gap-4 mb-10">
          <div>
            <h2 className="font-black text-zinc-900 text-4xl md:text-5xl uppercase leading-none tracking-tighter">
              Solution <span className="text-orange-500">Inventory.</span>
            </h2>
            <p className="mt-2 max-w-md font-medium text-zinc-500 text-base">
              Digital products engineered for the Kenyan market — built for performance, audited for security.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 border border-zinc-200 rounded-full shrink-0">
            <div className="bg-green-500 rounded-full w-2 h-2 animate-pulse" />
            <span className="font-black text-[10px] text-zinc-900 uppercase tracking-widest">
              6 Projects Online
            </span>
          </div>
        </div>

        {/* GRID */}
        <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col bg-white hover:shadow-lg hover:shadow-orange-50 border border-zinc-200 hover:border-orange-200 rounded-2xl overflow-hidden transition-all duration-300"
            >
              {/* SLIM COLOR BANNER — replaces the tall image area */}
              <div className="relative bg-zinc-100 h-2">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col flex-1 gap-3 p-6">

                {/* Category + Status */}
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[10px] text-orange-500 italic uppercase tracking-widest">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <div className={`w-1.5 h-1.5 rounded-full ${project.statusColor}`} />
                    <span className="font-black text-[9px] text-zinc-500 uppercase tracking-widest">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-black text-zinc-900 group-hover:text-orange-500 text-xl leading-tight transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="flex-1 text-zinc-500 text-sm leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center gap-1 bg-zinc-50 px-2 py-1 border border-zinc-100 rounded-md"
                    >
                      <Tag size={9} className="text-zinc-400" />
                      <span className="font-bold text-[9px] text-zinc-600 uppercase tracking-tighter">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA — real anchor link */}
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-2 hover:bg-zinc-900 mt-1 py-3 border border-zinc-900 rounded-xl w-full font-black text-[10px] text-zinc-900 hover:text-white uppercase tracking-widest transition-all duration-200"
                >
                  View Project <ExternalLink size={11} />
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}