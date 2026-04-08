export default function ServicesPage() {
  const services = ["web-design", "digital-marketing", "seo-optimization", "branding"];
  
  return (
    <div className="mx-auto px-6 py-20 max-w-6xl text-center">
      <h1 className="mb-4 font-bold text-4xl">Our Services</h1>
      <p className="mb-12 text-zinc-500">Tailored digital solutions for the Kenyan market.</p>
      <div className="gap-4 grid md:grid-cols-2">
        {services.map(s => (
          <a key={s} href={`/services/${s}`} className="hover:bg-zinc-50 p-8 border rounded-2xl text-left">
            <h3 className="font-bold text-xl capitalize">{s.replace(/-/g, ' ')}</h3>
            <p className="mt-2 text-zinc-500">Click to learn more about our {s} process.</p>
          </a>
        ))}
      </div>
    </div>
  )
}