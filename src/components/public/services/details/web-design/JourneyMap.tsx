export default function JourneyMap() {
  const journey = [
    {
      stage: "01. Immersion",
      title: "Business Discovery",
      desc: "We dive deep into your revenue goals, customer pain points, and market position. No code starts until we know your business strategy.",
      keywords: ["Market Analysis", "User Research"]
    },
    {
      stage: "02. Blueprinting",
      title: "UX & Architecture",
      desc: "We map out user flows and technical requirements. Every pixel is placed with intent to drive a specific customer action.",
      keywords: ["User Flows", "Information Architecture"]
    },
    {
      stage: "03. Engineering",
      title: "Performance Build",
      desc: "Your design is brought to life with clean, fast, and SEO-ready code. We prioritize load speed and mobile-first responsiveness.",
      keywords: ["Next.js", "Core Web Vitals"]
    },
    {
      stage: "04. Optimization",
      title: "Launch & Growth",
      desc: "After the project goes live, we stay around. We audit performance and ensure your site continues to deliver business value.",
      keywords: ["Post-launch Support", "SEO Audits"]
    }
  ];

  return (
    <section className="bg-zinc-50 mx-4 px-6 py-24 rounded-[3rem]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20">
          <h2 className="mb-4 font-black text-zinc-900 text-4xl md:text-6xl uppercase tracking-tighter">
            The <span className="text-orange-500 decoration-zinc-200 underline underline-offset-8">Journey.</span>
          </h2>
          <p className="font-bold text-zinc-500 text-sm uppercase tracking-widest">
            A systematic approach to unique business needs.
          </p>
        </div>

        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {journey.map((item) => (
            <div key={item.stage} className="relative bg-white shadow-sm hover:shadow-md p-8 border border-zinc-100 rounded-3xl transition-shadow">
              <span className="block mb-4 font-black text-[10px] text-orange-500 uppercase tracking-[0.2em]">
                {item.stage}
              </span>
              <h3 className="mb-3 font-bold text-zinc-900 text-xl tracking-tight">
                {item.title}
              </h3>
              <p className="mb-6 text-zinc-500 text-sm leading-relaxed">
                {item.desc}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {item.keywords.map(kw => (
                  <span key={kw} className="bg-zinc-50 px-2 py-1 rounded-md font-bold text-[9px] text-zinc-400 uppercase tracking-wider">
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}