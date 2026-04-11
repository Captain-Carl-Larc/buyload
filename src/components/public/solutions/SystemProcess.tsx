import { Search, Code2, ShieldCheck, Rocket } from "lucide-react";

const processes = [
  {
    id: "01",
    title: "Technical Scoping",
    desc: "We don't start with code — we start with logic. Your business requirements, data schemas, user flows, and API contracts are mapped before a single file is created. This phase prevents the expensive mistakes most projects make in week three.",
    icon: <Search className="text-orange-500" size={20} />,
    keyword: "System Architecture & Planning",
    imageSide: "left",
    svg: (
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Grid nodes */}
        {[40, 80, 120].map((x) =>
          [40, 80, 120].map((y) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill="#e4e4e7" />
          ))
        )}
        {/* Connecting lines */}
        <line x1="40" y1="40" x2="80" y2="80" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4 2" />
        <line x1="80" y1="80" x2="120" y2="40" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4 2" />
        <line x1="80" y1="80" x2="80" y2="120" stroke="#d4d4d8" strokeWidth="1" strokeDasharray="4 2" />
        <line x1="40" y1="120" x2="120" y2="120" stroke="#d4d4d8" strokeWidth="1" />
        {/* Central node highlight */}
        <circle cx="80" cy="80" r="8" fill="#fff7ed" stroke="#f97316" strokeWidth="1.5" />
        <circle cx="80" cy="80" r="3" fill="#f97316" />
        {/* Corner labels */}
        <rect x="30" y="30" width="20" height="8" rx="2" fill="#f4f4f5" />
        <rect x="110" y="30" width="20" height="8" rx="2" fill="#f4f4f5" />
        <rect x="110" y="112" width="20" height="8" rx="2" fill="#f4f4f5" />
        <rect x="30" y="112" width="20" height="8" rx="2" fill="#f4f4f5" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Agile Development",
    desc: "Built in rapid, transparent sprints using Next.js, TypeScript, and Payload CMS. You get a front-row seat — staging previews after every sprint so you see real progress, not promises. No black-box development.",
    icon: <Code2 className="text-orange-500" size={20} />,
    keyword: "Full-Stack Engineering",
    imageSide: "right",
    svg: (
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Sprint bars */}
        <rect x="20" y="110" width="16" height="30" rx="3" fill="#f4f4f5" />
        <rect x="44" y="90"  width="16" height="50" rx="3" fill="#f4f4f5" />
        <rect x="68" y="70"  width="16" height="70" rx="3" fill="#fed7aa" />
        <rect x="92" y="50"  width="16" height="90" rx="3" fill="#fb923c" />
        <rect x="116" y="30" width="16" height="110" rx="3" fill="#f97316" />
        {/* Trend line */}
        <polyline points="28,108 52,88 76,68 100,48 124,28" stroke="#f97316" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
        {/* Dots on line */}
        {[[28,108],[52,88],[76,68],[100,48],[124,28]].map(([x,y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="2.5" fill="#f97316" />
        ))}
        {/* Base line */}
        <line x1="15" y1="140" x2="148" y2="140" stroke="#e4e4e7" strokeWidth="1" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Quality Assurance",
    desc: "Every form, endpoint, and M-Pesa integration hook is stress-tested before it ships. We audit for Core Web Vitals, security vulnerabilities, cross-browser compatibility, and mobile responsiveness. Nothing reaches production broken.",
    icon: <ShieldCheck className="text-orange-500" size={20} />,
    keyword: "Performance & Security Audits",
    imageSide: "left",
    svg: (
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Shield shape */}
        <path d="M80 20 L130 42 L130 88 Q130 128 80 148 Q30 128 30 88 L30 42 Z" fill="#fff7ed" stroke="#fed7aa" strokeWidth="1.5" />
        {/* Checkmark */}
        <polyline points="55,82 72,99 105,66" stroke="#f97316" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Scan lines */}
        <line x1="44" y1="55" x2="116" y2="55" stroke="#f4f4f5" strokeWidth="1" strokeDasharray="3 2" />
        <line x1="38" y1="70" x2="122" y2="70" stroke="#f4f4f5" strokeWidth="1" strokeDasharray="3 2" />
        <line x1="34" y1="115" x2="126" y2="115" stroke="#f4f4f5" strokeWidth="1" strokeDasharray="3 2" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Production Launch",
    desc: "Smooth CI/CD deployment to Vercel or your preferred cloud. Zero downtime during transitions, environment variables handled securely, and your team gets proper documentation so you're never dependent on us to make a simple change.",
    icon: <Rocket className="text-orange-500" size={20} />,
    keyword: "Scalable Cloud Deployment",
    imageSide: "right",
    svg: (
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Cloud shape */}
        <ellipse cx="80" cy="90" rx="50" ry="28" fill="#f4f4f5" />
        <circle cx="58" cy="84" r="20" fill="#f4f4f5" />
        <circle cx="100" cy="80" r="24" fill="#f4f4f5" />
        <ellipse cx="80" cy="72" rx="30" ry="20" fill="#f4f4f5" />
        {/* Rocket */}
        <path d="M80 30 L90 60 L80 70 L70 60 Z" fill="#f97316" />
        <circle cx="80" cy="55" r="6" fill="white" />
        {/* Exhaust */}
        <path d="M74 70 Q80 80 86 70" stroke="#fed7aa" strokeWidth="2" fill="none" />
        <path d="M76 74 Q80 86 84 74" stroke="#f97316" strokeWidth="1.5" fill="none" />
        {/* Orbit dots */}
        <circle cx="52" cy="48" r="2" fill="#f97316" fillOpacity="0.4" />
        <circle cx="112" cy="44" r="2" fill="#f97316" fillOpacity="0.4" />
        <circle cx="36" cy="72" r="1.5" fill="#f97316" fillOpacity="0.3" />
        <circle cx="126" cy="68" r="1.5" fill="#f97316" fillOpacity="0.3" />
      </svg>
    ),
  },
];

export default function SystemProcess() {
  return (
    <section className="bg-white px-6 py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-16">
          <span className="font-bold text-orange-500 text-xs uppercase tracking-[0.2em]">
            How We Work
          </span>
          <h2 className="mt-3 font-black text-zinc-900 text-4xl tracking-tight">
            The process behind every build
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-16 md:gap-24">
          {processes.map((step) => (
            <div
              key={step.id}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-14 ${
                step.imageSide === "right" ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* TEXT — takes more space */}
              <div className="flex-[3] space-y-5">
                <div className="flex items-center gap-4">
                  <span className="font-mono font-black text-zinc-100 text-5xl leading-none select-none">
                    {step.id}
                  </span>
                  <div className="flex-1 bg-zinc-100 h-px" />
                </div>

                <h3 className="font-black text-zinc-900 text-2xl md:text-4xl uppercase tracking-tighter">
                  {step.title}
                </h3>

                <p className="font-medium text-zinc-500 text-base md:text-lg leading-relaxed">
                  {step.desc}
                </p>

                <div className="flex items-center gap-3 pt-2">
                  <div className="flex justify-center items-center bg-orange-50 rounded-lg w-8 h-8 shrink-0">
                    {step.icon}
                  </div>
                  <span className="font-mono font-black text-[10px] text-orange-500 italic uppercase tracking-widest">
                    {step.keyword}
                  </span>
                </div>
              </div>

              {/* VISUAL — constrained, not flex-1 */}
              <div className="w-full md:w-48 lg:w-56 shrink-0">
                <div className="group relative flex justify-center items-center bg-zinc-50 hover:bg-orange-50/30 p-8 border border-zinc-100 hover:border-orange-200 rounded-3xl aspect-square overflow-hidden transition-colors duration-500">
                  {step.svg}
                  {/* Floating badge */}
                  <div className="right-3 bottom-3 absolute bg-white shadow-md px-2.5 py-1 border border-zinc-100 rounded-lg">
                    <span className="font-black text-[8px] text-zinc-700 uppercase tracking-tight whitespace-nowrap">
                      Step {step.id}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}