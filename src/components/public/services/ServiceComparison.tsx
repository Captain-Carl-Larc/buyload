export default function ServiceComparison() {
  const points = [
    { label: "Architecture", custom: "Custom Engineered", template: "Generic Frameworks" },
    { label: "Performance", custom: "100/100 Lighthouse", template: "Bloated & Slow" },
    { label: "SEO", custom: "Baked-in Logic", template: "Third-party Plugins" },
    { label: "Ownership", custom: "Full IP Rights", template: "Platform Lock-in" },
  ];

  return (
    <section className="bg-zinc-50 mx-4 px-6 py-24 rounded-[3rem]">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-12 font-black text-zinc-900 text-3xl md:text-5xl uppercase tracking-tighter">
          The <span className="text-orange-500">Difference.</span>
        </h2>
        
        <div className="space-y-4">
          {points.map((point) => (
            <div key={point.label} className="items-center grid grid-cols-3 py-4 border-zinc-200 border-b text-sm md:text-base">
              <span className="font-bold text-[10px] text-zinc-400 text-left uppercase tracking-widest">{point.label}</span>
              <span className="font-black text-zinc-900 tracking-tight">{point.custom}</span>
              <span className="opacity-50 text-zinc-400 text-right decoration-zinc-300 line-through">{point.template}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}