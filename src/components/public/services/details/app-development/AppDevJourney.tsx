export default function AppDevJourney() {
  const pipeline = [
    {
      stage: "01. Architecture",
      title: "Backend Schema",
      desc: "We design the database and server logic to handle high concurrency. We ensure your data is structured for speed and infinite growth.",
      tags: ["PostgreSQL", "Cloud Architecture"]
    },
    {
      stage: "02. Core Dev",
      title: "Cross-Platform Build",
      desc: "Developing with high-performance frameworks that share a single codebase for iOS and Android without sacrificing native speed.",
      tags: ["React Native", "Flutter"]
    },
    {
      stage: "03. Integration",
      title: "API & Sync",
      desc: "Connecting your app to the real world. We implement real-time data syncing, payment gateways, and third-party integrations.",
      tags: ["REST/GraphQL", "Stripe/Mpesa"]
    },
    {
      stage: "04. Hardening",
      title: "Deployment & QA",
      desc: "Rigorous stress testing and automated builds. We handle the App Store and Play Store submission process from A to Z.",
      tags: ["CI/CD Pipelines", "Store Optimization"]
    }
  ];

  return (
    <section className="bg-zinc-950 mx-4 px-6 py-24 rounded-[3rem] text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20">
          <h2 className="mb-4 font-black text-4xl md:text-6xl uppercase tracking-tighter">
            The <span className="text-orange-500 italic">Production</span> Line.
          </h2>
          <p className="font-bold text-zinc-500 text-sm uppercase tracking-widest">
            Built for 1 Million+ User potential.
          </p>
        </div>

        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {pipeline.map((item) => (
            <div key={item.stage} className="bg-zinc-900 p-8 border border-zinc-800 hover:border-orange-500 rounded-3xl transition-all">
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
