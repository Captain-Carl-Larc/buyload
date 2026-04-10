export default function Pillars() {
  const reasons = [
    { title: "Custom-Built Everything", desc: "No Wix, no templates. Everything is coded to your specific business requirements." },
    { title: "Performance-First", desc: "Fast load times and clean code are baked in from the start, not bolted on later." },
    { title: "You Own Everything", desc: "The code, domain, and hosting belong to you. Zero vendor lock-in, ever." },
    { title: "Transparent Pricing", desc: "Clear quotes with no hidden fees or surprise monthly maintenance costs." },
  ];

  return (
    <section className="px-6">
      <div className="gap-x-12 gap-y-16 grid grid-cols-1 md:grid-cols-2 mx-auto max-w-7xl">
        {reasons.map((item) => (
          <div key={item.title} className="space-y-3">
            <h3 className="font-black text-zinc-900 text-2xl tracking-tight">
              {item.title}
            </h3>
            <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}