export default function AppJourney() {
  const phases = [
    {
      stage: "01. Discovery",
      title: "User Personas",
      desc: "We define exactly who is using the app and what their primary goals are. We design for real human behavior, not assumptions.",
      tags: ["Empathy Mapping", "User Stories"]
    },
    {
      stage: "02. Wireframing",
      title: "Skeleton & Logic",
      desc: "Before the colors, we build the bones. We map out every tap and swipe to ensure the navigation is intuitive and fast.",
      tags: ["Low-Fi Blueprints", "User Flows"]
    },
    {
      stage: "03. Hi-Fi UI",
      title: "Visual Identity",
      desc: "We apply your brand to a modern, custom design system. Pixel-perfect interfaces that look stunning on every device.",
      tags: ["Design Systems", "Brand Integration"]
    },
    {
      stage: "04. Prototyping",
      title: "Interactive Test",
      desc: "You get a clickable prototype to feel the app's flow before we write a single line of code. Seeing is believing.",
      tags: ["Clickable Demos", "UX Validation"]
    }
  ];

  return (
    <section className="bg-zinc-50 mx-4 px-6 py-24 rounded-[3rem]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 md:text-left text-center">
          <h2 className="mb-4 font-black text-zinc-900 text-4xl md:text-6xl uppercase tracking-tighter">
            The <span className="text-orange-500 decoration-zinc-200 underline underline-offset-8 italic">Blueprint.</span>
          </h2>
          <p className="font-bold text-zinc-500 text-sm italic uppercase tracking-widest">
            From raw concept to interactive reality.
          </p>
        </div>

        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {phases.map((item) => (
            <div key={item.stage} className="group bg-white shadow-sm hover:shadow-xl p-8 border border-zinc-100 rounded-3xl transition-all">
              <span className="block mb-4 font-black text-[10px] text-orange-500 uppercase tracking-[0.2em] transition-transform group-hover:translate-x-1">
                {item.stage}
              </span>
              <h3 className="mb-3 font-bold text-zinc-900 text-xl tracking-tight">
                {item.title}
              </h3>
              <p className="mb-6 text-zinc-500 text-sm leading-relaxed">
                {item.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="bg-zinc-50 px-2 py-1 rounded-md font-bold text-[9px] text-zinc-400 uppercase tracking-wider">
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