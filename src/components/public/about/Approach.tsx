export default function Approach() {
  const philosophies = [
    {
      title: "Problem-First Engineering",
      desc: "We don't start with code. We start by understanding your bottlenecks. Whether it's a slow checkout or a complex data portal, the architecture is built to solve that specific hurdle."
    },
    {
      title: "Right Tool, Right Job",
      desc: "While we love our core stack, we aren't dogmatic. We adapt our integration strategy—choosing the right APIs, databases, and third-party tools that align with your long-term scaling needs."
    }
  ];

  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="items-center gap-12 grid grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="mb-6 font-black text-zinc-900 text-3xl md:text-5xl uppercase tracking-tighter">
              No Two Blueprints <br /> 
              <span className="text-orange-500 decoration-zinc-200 underline underline-offset-8">Are Alike.</span>
            </h2>
          </div>
          <div className="space-y-8">
            {philosophies.map((item) => (
              <div key={item.title} className="pl-6 border-orange-500 border-l-2">
                <h4 className="mb-2 font-bold text-zinc-900 text-lg">{item.title}</h4>
                <p className="max-w-md text-zinc-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}