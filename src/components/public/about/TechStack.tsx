export default function TechStack() {
  const stack = [
    { name: "Next.js", role: "Framework" },
    { name: "PostgreSQL", role: "Database" },
    { name: "Tailwind", role: "Design" },
    { name: "Prisma", role: "ORM" },
    { name: "TypeScript", role: "Safety" },
  ];

  return (
    <section className="px-6">
      <div className="flex flex-wrap gap-4 md:gap-8 opacity-60 grayscale hover:grayscale-0 mx-auto max-w-7xl transition-all">
        {stack.map((item) => (
          <div key={item.name} className="flex flex-col">
            <span className="font-black text-zinc-900 text-lg tracking-tight">
              {item.name}
            </span>
            <span className="font-bold text-[10px] text-zinc-400 uppercase tracking-widest">
              {item.role}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}