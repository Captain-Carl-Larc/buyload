export default function SupportJourney() {
  const steps = [
    {
      stage: "01. Audit",
      title: "Technical Diagnostic",
      desc: "We scan your existing codebase for security holes, slow scripts, and API bottlenecks. We find the 'why' behind the 'broken'.",
      tags: ["Security Scan", "Performance Audit"]
    },
    {
      stage: "02. Fix",
      title: "Immediate Recovery",
      desc: "We stabilize your infrastructure first. Bug fixes, database optimization, and cleaning up legacy code to stop the bleeding.",
      tags: ["Bug Squashing", "Database Cleanup"]
    },
    {
      stage: "03. Integrate",
      title: "Custom Connectivity",
      desc: "Deploying production-ready M-Pesa integrations, payment gateways, and third-party APIs to make your site functional.",
      tags: ["M-Pesa API", "Payment Logic"]
    },
    {
      stage: "04. Maintain",
      title: "24/7 Hardening",
      desc: "Continuous monitoring and periodic updates to ensure your site remains secure, fast, and ahead of the competition.",
      tags: ["Uptime Monitor", "SLA Support"]
    }
  ];

  return (
    <section className="bg-zinc-900 mx-4 px-6 py-24 rounded-[3rem] text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20">
          <h2 className="mb-4 font-black text-4xl md:text-6xl uppercase tracking-tighter">
            The <span className="text-orange-500 decoration-zinc-800 underline underline-offset-8 italic">Rescue</span> Plan.
          </h2>
          <p className="font-bold text-zinc-500 text-sm uppercase tracking-widest">
            Technical Stability for Growing Businesses.
          </p>
        </div>
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <div key={item.stage} className="bg-zinc-800/50 p-8 border border-zinc-800 hover:border-orange-500 rounded-3xl transition-all">
              <span className="block mb-4 font-black text-[10px] text-orange-500 uppercase tracking-[0.2em]">
                {item.stage}
              </span>
              <h3 className="mb-3 font-bold text-xl tracking-tight">{item.title}</h3>
              <p className="mb-6 text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="bg-zinc-900 px-2 py-1 rounded-md font-bold text-[9px] text-zinc-300 uppercase tracking-wider">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}