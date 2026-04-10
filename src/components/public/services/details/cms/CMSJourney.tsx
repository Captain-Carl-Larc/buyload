export default function CMSJourney() {
  const workflow = [
    {
      stage: "01. Mapping",
      title: "Content Modeling",
      desc: "We define every field and asset type your business needs. No messy templates—just a clean structure for your data.",
      tags: ["Custom Fields", "Data Schemas"]
    },
    {
      stage: "02. Integration",
      title: "Headless Architecture",
      desc: "Connecting your backend to a high-performance frontend. Your content stays separate from your code for maximum speed.",
      tags: ["Payload CMS", "Strapi/Sanity"]
    },
    {
      stage: "03. UX Design",
      title: "Admin Customization",
      desc: "We design the admin panel specifically for your team. It’s so intuitive that you won’t even need a manual.",
      tags: ["White Label", "Custom UI"]
    },
    {
      stage: "04. Handover",
      title: "Empowerment",
      desc: "We train your team and hand over the keys. You are now free to grow your brand without waiting on us.",
      tags: ["Staff Training", "Full Access"]
    }
  ];

  return (
    <section className="bg-zinc-50 mx-4 px-6 py-24 rounded-[3rem]">
      <div className="mx-auto max-w-7xl md:text-left text-center">
        <h2 className="mb-20 font-black text-zinc-900 text-4xl md:text-6xl uppercase leading-none tracking-tighter">
          The Path to <span className="text-orange-500 italic">Autonomy.</span>
        </h2>
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {workflow.map((item) => (
            <div key={item.stage} className="bg-white shadow-sm hover:shadow-xl p-8 border border-zinc-100 rounded-3xl transition-all">
              <span className="block mb-4 font-black text-[10px] text-orange-500 uppercase tracking-widest">{item.stage}</span>
              <h3 className="mb-3 font-bold text-zinc-900 text-xl tracking-tight">{item.title}</h3>
              <p className="mb-6 text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="bg-zinc-50 px-2 py-1 rounded-md font-black text-[9px] text-zinc-400 uppercase tracking-wider">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}