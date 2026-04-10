export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      description: "We get on a quick call to understand your business and goals. No pitch — just listening.",
    },
    {
      number: "02",
      title: "Proposal & Design",
      description: "Clear scope, timeline, and cost. Once approved, design mockups come first.",
    },
    {
      number: "03",
      title: "Build & Review",
      description: "We build in sprints. You review progress and we iterate until it is perfect.",
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "We deploy and stick around for support. You are never handed off and forgotten.",
    },
  ];

  return (
    <section className="bg-zinc-900 mx-4 px-6 py-24 rounded-[3rem] text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <h2 className="font-black text-4xl md:text-6xl uppercase tracking-tighter">
            Our <span className="text-orange-500">Method.</span>
          </h2>
          <p className="mt-4 max-w-md text-zinc-400">
            A predictable, engineering-led process designed to take your project from idea to high-performance reality.
          </p>
        </div>

        <div className="gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="group">
              <div className="mb-4 font-black text-zinc-800 group-hover:text-orange-500 text-5xl transition-colors">
                {step.number}
              </div>
              <h3 className="mb-3 font-bold text-xl italic tracking-tight">
                {step.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}