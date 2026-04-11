"use client";

import { Cpu } from "lucide-react";

// Keyword nodes placed at fixed coordinates — no Math.random() to avoid hydration mismatch
const keywords = [
  { x: 80,  y: 80,  text: "Next.js",        size: 11, opacity: 0.18 },
  { x: 220, y: 40,  text: "TypeScript",      size: 10, opacity: 0.14 },
  { x: 420, y: 70,  text: "Web Apps",        size: 13, opacity: 0.22 },
  { x: 600, y: 50,  text: "Nairobi",         size: 12, opacity: 0.20 },
  { x: 780, y: 90,  text: "Kenya",           size: 14, opacity: 0.18 },
  { x: 900, y: 40,  text: "React",           size: 10, opacity: 0.14 },
  { x: 50,  y: 200, text: "Performance",     size: 12, opacity: 0.16 },
  { x: 300, y: 160, text: "Tailwind CSS",    size: 10, opacity: 0.13 },
  { x: 520, y: 180, text: "CMS",             size: 14, opacity: 0.20 },
  { x: 700, y: 150, text: "Scalable",        size: 11, opacity: 0.16 },
  { x: 860, y: 190, text: "Custom-Built",    size: 10, opacity: 0.14 },
  { x: 130, y: 320, text: "M-Pesa",          size: 15, opacity: 0.22 },
  { x: 370, y: 290, text: "FinTech",         size: 13, opacity: 0.18 },
  { x: 580, y: 310, text: "API Integration", size: 10, opacity: 0.14 },
  { x: 760, y: 270, text: "East Africa",     size: 13, opacity: 0.20 },
  { x: 920, y: 300, text: "Node.js",         size: 10, opacity: 0.13 },
  { x: 60,  y: 430, text: "UI/UX Design",    size: 11, opacity: 0.16 },
  { x: 280, y: 410, text: "PostgreSQL",      size: 10, opacity: 0.13 },
  { x: 480, y: 450, text: "Responsive",      size: 12, opacity: 0.18 },
  { x: 680, y: 420, text: "Dashboards",      size: 11, opacity: 0.16 },
  { x: 840, y: 440, text: "SaaS",            size: 14, opacity: 0.20 },
  { x: 150, y: 550, text: "Portals",         size: 12, opacity: 0.16 },
  { x: 400, y: 560, text: "Headless CMS",    size: 10, opacity: 0.13 },
  { x: 620, y: 540, text: "SEO-Ready",       size: 11, opacity: 0.18 },
  { x: 820, y: 580, text: "Secure",          size: 13, opacity: 0.20 },
  { x: 70,  y: 660, text: "Landing Pages",   size: 11, opacity: 0.14 },
  { x: 310, y: 680, text: "E-Commerce",      size: 12, opacity: 0.18 },
  { x: 540, y: 650, text: "Vercel",          size: 10, opacity: 0.13 },
  { x: 730, y: 700, text: "Web Design",      size: 13, opacity: 0.20 },
  { x: 910, y: 660, text: "Booking Systems", size: 9,  opacity: 0.13 },
];

// Fixed accent dot positions — hydration safe
const dots = [
  { cx: 150, cy: 130, delay: "0s"   },
  { cx: 450, cy: 220, delay: "0.8s" },
  { cx: 720, cy: 100, delay: "1.4s" },
  { cx: 880, cy: 350, delay: "0.3s" },
  { cx: 200, cy: 480, delay: "1.9s" },
  { cx: 550, cy: 400, delay: "0.6s" },
  { cx: 330, cy: 580, delay: "1.1s" },
  { cx: 800, cy: 500, delay: "2.2s" },
];

export default function SolutionsHero() {
  return (
    <section
      className="relative bg-white px-6 pt-16 md:pt-24 pb-20 md:pb-32 overflow-hidden text-zinc-900"
      aria-labelledby="solutions-heading"
    >
      {/* FULL-BLEED SVG KEYWORD TAPESTRY */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1000 750"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Subtle flowing curves */}
          <path
            d="M0,375 Q250,100 500,375 T1000,375"
            stroke="#f4f4f5"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M0,200 Q250,0 500,200 T1000,200"
            stroke="#f4f4f5"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          />
          <path
            d="M0,550 Q250,750 500,550 T1000,550"
            stroke="#f4f4f5"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          />

          {/* Keyword text nodes */}
          {keywords.map((kw) => (
            <text
              key={kw.text}
              x={kw.x}
              y={kw.y}
              fontFamily="monospace"
              fontSize={kw.size}
              fill="#09090b"
              fillOpacity={kw.opacity}
              fontWeight="700"
              letterSpacing="0.05em"
            >
              {kw.text}
            </text>
          ))}

          {/* Orange accent dots */}
          {dots.map((dot) => (
            <circle
              key={`${dot.cx}-${dot.cy}`}
              cx={dot.cx}
              cy={dot.cy}
              r="2.5"
              fill="#f97316"
              fillOpacity="0.35"
            />
          ))}

          {/* Corner accent lines */}
          <line x1="0" y1="0" x2="60" y2="0" stroke="#f97316" strokeWidth="2" opacity="0.3" />
          <line x1="0" y1="0" x2="0" y2="60" stroke="#f97316" strokeWidth="2" opacity="0.3" />
          <line x1="1000" y1="750" x2="940" y2="750" stroke="#f97316" strokeWidth="2" opacity="0.3" />
          <line x1="1000" y1="750" x2="1000" y2="690" stroke="#f97316" strokeWidth="2" opacity="0.3" />
        </svg>
      </div>

      {/* MAIN CONTENT */}
      <div className="z-10 relative flex flex-col justify-end mx-auto max-w-7xl min-h-[55svh] md:min-h-[65svh]">
        <div className="flex flex-col gap-6 max-w-5xl">

          {/* Label */}
          <div className="flex items-center gap-3">
            <div
              className="bg-orange-500/10 p-2.5 border border-orange-500/20 rounded-2xl"
              aria-hidden="true"
            >
              <Cpu size={20} className="text-orange-500" strokeWidth={1.5} />
            </div>
            <span className="font-mono font-black text-[11px] text-zinc-400 uppercase tracking-[0.3em]">
              Project Portfolio
            </span>
          </div>

          {/* Heading */}
          <h1
            id="solutions-heading"
            className="font-black text-zinc-950 md:text-[9rem] text-6xl sm:text-7xl italic uppercase leading-[0.85] tracking-tighter"
          >
            Built to <br />
            <span className="text-orange-500">Perform.</span>
          </h1>

          {/* Subtext — no markdown asterisks */}
          <p className="max-w-2xl font-medium text-zinc-600 text-lg md:text-xl leading-relaxed">
            From{" "}
            <strong className="font-bold text-zinc-900">FinTech applications</strong> and{" "}
            <strong className="font-bold text-zinc-900">M-Pesa integrations</strong> to
            high-converting business websites — these are the products we have designed
            and built for clients across Kenya and East Africa.
          </p>

        </div>
      </div>
    </section>
  );
}