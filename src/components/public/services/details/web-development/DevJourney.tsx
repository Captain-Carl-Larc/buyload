export default function DevJourney() {
  const steps = [
    {
      stage: "01. Scoping",
      title: "Technical Logic",
      desc: "We define the data flow and system requirements before a single line of code is written. We build a blueprint that eliminates technical debt.",
      tags: ["System Mapping", "Logic Audit"]
    },
    {
      stage: "02. Build",
      title: "Clean-Sheet Dev",
      desc: "We develop in modular sprints, ensuring the code is lean, readable, and lightning-fast. No bloat, just pure performance.",
      tags: ["Modular Code", "Performance"]
    },
    {
      stage: "03. Testing",
      title: "Stress & Security",
      desc: "Rigorous QA testing to ensure your infrastructure is secure and scales under pressure. We audit every endpoint and header.",
      tags: ["Security Audit", "QA Testing"]
    },
    {
      stage: "04. Deploy",
      title: "Stable Launch",
      desc: "We handle the full deployment cycle, ensuring a smooth transition to live servers with zero downtime and optimized delivery.",
      tags: ["CI/CD", "Server Config"]
    }
  ];

  return (
    <section className="bg-zinc-950 mx-4 px-6 py-24 rounded-[3rem] text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20">
          <h2 className="mb-4 font-black text-4xl md:text-6xl uppercase tracking-tighter">
            The <span className="text-orange-500 decoration-zinc-800 underline underline-offset-8">Pipeline.</span>
          </h2>
          <p className="font-bold text-zinc-500 text-sm uppercase tracking-widest">
            Disciplined Engineering for Robust Results.
          </p>
        </div>

        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <div key={item.stage} className="relative bg-zinc-900 p-8 border border-zinc-800 hover:border-orange-500/30 rounded-3xl transition-all">
              <span className="block mb-4 font-black text-[10px] text-orange-500 uppercase tracking-[0.2em]">
                {item.stage}
              </span>
              <h3 className="mb-3 font-bold text-xl tracking-tight">
                {item.title}
              </h3>
              <p className="mb-6 text-zinc-500 text-sm leading-relaxed">
                {item.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="bg-black px-2 py-1 rounded-md font-bold text-[9px] text-zinc-400 uppercase tracking-wider">
                    {tag}
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