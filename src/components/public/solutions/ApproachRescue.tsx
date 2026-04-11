import { Zap, CreditCard, ShieldCheck, Layers } from "lucide-react";

const blocks = [
  {
    side: "right",
    icon: <Zap size={20} className="text-orange-500" />,
    iconBg: "bg-orange-50",
    heading: "Performance",
    subheading: "as a standard.",
    body: (
      <>
        In the Nairobi market, speed is currency. We optimize every digital asset for{" "}
        <strong className="font-bold text-zinc-900">sub-second loading times</strong> — targeting
        Core Web Vitals scores of 90+ across Lighthouse, PageSpeed, and GTmetrix. Lower bounce
        rates, higher conversions, better Google rankings.
      </>
    ),
    visual: (
      <div className="flex flex-col gap-4 bg-zinc-50 px-8 py-7 border border-zinc-100 rounded-2xl w-full">
        <div className="flex justify-between font-mono font-black text-[9px] text-zinc-400 uppercase">
          <span>Load Time</span><span>12ms</span>
        </div>
        <div className="bg-zinc-200 rounded-full w-full h-1.5 overflow-hidden">
          <div className="bg-orange-500 w-[98%] h-full" />
        </div>
        <div className="flex justify-between font-mono font-black text-[9px] text-zinc-400 uppercase">
          <span>Core Vitals</span><span>100 / 100</span>
        </div>
        <div className="bg-zinc-200 rounded-full w-full h-1.5 overflow-hidden">
          <div className="bg-orange-500 w-full h-full" />
        </div>
        <div className="flex justify-between font-mono font-black text-[9px] text-zinc-400 uppercase">
          <span>Lighthouse Score</span><span>98 / 100</span>
        </div>
        <div className="bg-zinc-200 rounded-full w-full h-1.5 overflow-hidden">
          <div className="bg-orange-400 w-[98%] h-full" />
        </div>
      </div>
    ),
  },
  {
    side: "left",
    icon: <CreditCard size={20} className="text-white" />,
    iconBg: "bg-zinc-900",
    heading: "Seamless",
    subheading: "local connectivity.",
    body: (
      <>
        We specialize in deep{" "}
        <strong className="font-bold text-zinc-900">M-Pesa API integrations</strong> — B2C payouts,
        C2B STK Push, and Daraja 2.0 flows. Whether you need a checkout, a subscription billing
        system, or an automated payout engine, we engineer payment flows that work flawlessly for
        your Kenyan customers.
      </>
    ),
    visual: (
      <div className="relative bg-zinc-900 px-8 py-7 border border-zinc-800 rounded-2xl w-full overflow-hidden">
        <div className="z-10 relative space-y-3">
          <div className="bg-orange-500 rounded w-8 h-5" />
          <div className="bg-white/10 rounded-full w-3/4 h-3" />
          <div className="bg-white/10 rounded-full w-1/2 h-3" />
          <div className="flex gap-2 pt-2">
            <div className="bg-white/5 px-2 py-1 border border-white/10 rounded">
              <span className="font-mono text-[9px] text-green-400">STK_PUSH: OK</span>
            </div>
            <div className="bg-white/5 px-2 py-1 border border-white/10 rounded">
              <span className="font-mono text-[9px] text-orange-400">B2C: LIVE</span>
            </div>
          </div>
        </div>
        <div className="top-1/2 right-[-16px] absolute opacity-5 -translate-y-1/2">
          <ShieldCheck size={120} className="text-white" />
        </div>
      </div>
    ),
  },
  {
    side: "right",
    icon: <ShieldCheck size={20} className="text-orange-500" />,
    iconBg: "bg-orange-50",
    heading: "Security",
    subheading: "built in, not bolted on.",
    body: (
      <>
        Every system we ship is audited for{" "}
        <strong className="font-bold text-zinc-900">OWASP Top 10 vulnerabilities</strong>, proper
        authentication flows, and environment variable hygiene. We handle CORS, rate limiting, SQL
        injection prevention, and HTTPS enforcement as defaults — not afterthoughts.
      </>
    ),
    visual: (
      <div className="flex flex-col gap-3 bg-zinc-50 px-8 py-7 border border-zinc-100 rounded-2xl w-full">
        {[
          { label: "SQL Injection", status: "Blocked", color: "text-green-600 bg-green-50 border-green-100" },
          { label: "CORS Policy", status: "Enforced", color: "text-green-600 bg-green-50 border-green-100" },
          { label: "Auth Tokens", status: "Secured", color: "text-green-600 bg-green-50 border-green-100" },
          { label: "Rate Limiting", status: "Active", color: "text-orange-600 bg-orange-50 border-orange-100" },
        ].map((item) => (
          <div key={item.label} className="flex justify-between items-center">
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wide">{item.label}</span>
            <span className={`font-black text-[9px] uppercase tracking-widest px-2 py-0.5 rounded border ${item.color}`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    ),
  },
{
  
  side: "left",
  icon: <Layers size={20} className="text-white" />,
  iconBg: "bg-zinc-900",
  heading: "Scalable",
  subheading: "from day one.",
  body: (
    <>
      We architect systems that grow with your business — not ones you have to rebuild at 10,000
      users. Whether you need a{" "}
      <strong className="font-bold text-zinc-900">custom-built platform, a WordPress site,
      or a headless CMS</strong>, every project is structured for long-term maintainability
      so your team can manage and extend it confidently long after handover.
    </>
  ),
  visual: (
    <div className="flex flex-col gap-3 bg-zinc-50 px-8 py-7 border border-zinc-100 rounded-2xl w-full">
      {[
        { label: "Custom Web Apps",     note: "Built to your exact spec" },
        { label: "WordPress & CMS",     note: "Full control for your team" },
        { label: "Headless Commerce",   note: "Speed + flexibility" },
        { label: "API Integrations",    note: "Any stack, any platform" },
      ].map((item) => (
        <div key={item.label} className="flex items-center gap-3">
          <span className="w-36 font-mono font-black text-[9px] text-orange-500 uppercase shrink-0">
            {item.label}
          </span>
          <div className="flex-1 bg-zinc-200 h-px" />
          <span className="font-mono text-[9px] text-zinc-500">{item.note}</span>
        </div>
      ))}
    </div>
  ),
},
];

export default function ApproachRescue() {
  return (
    <section className="bg-white px-6 py-16 overflow-hidden">
      <div className="space-y-16 mx-auto max-w-7xl">

        {/* Section label */}
        <div>
          <span className="font-bold text-orange-500 text-xs uppercase tracking-[0.2em]">
            Our Approach
          </span>
          <h2 className="mt-2 font-black text-zinc-900 text-4xl tracking-tight">
            How we think about every build
          </h2>
        </div>

        {/* Blocks */}
        {blocks.map((block) => (
          <div
            key={block.heading}
            className={`flex flex-col gap-8 items-center ${
              block.side === "left"
                ? "md:flex-row-reverse"
                : "md:flex-row"
            }`}
          >
            {/* Text — 3 parts */}
            <div className="flex-[3] space-y-4">
              <div className={`flex justify-center items-center rounded-xl w-9 h-9 ${block.iconBg}`}>
                {block.icon}
              </div>
              <h3 className="font-black text-zinc-900 text-3xl md:text-5xl uppercase leading-none tracking-tighter">
                {block.heading} <br />
                <span className="font-serif text-orange-500 text-2xl md:text-4xl italic lowercase tracking-normal">
                  {block.subheading}
                </span>
              </h3>
              <p className="max-w-xl font-medium text-zinc-500 text-base md:text-lg leading-relaxed">
                {block.body}
              </p>
            </div>

            {/* Visual — 2 parts */}
            <div className="md:flex-[2] w-full md:w-auto">
              {block.visual}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}