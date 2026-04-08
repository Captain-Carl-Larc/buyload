// src/app/(public)/services/[slug]/page.tsx

export default function ServicePage({ params }: { params: { slug: string } }) {
  // In the future, we will do: const service = await db.service.findUnique(...)
  
  // Clean up the slug for display (e.g., "web-design" -> "Web Design")
  const displayTitle = params.slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="mx-auto px-6 py-20 max-w-4xl">
      <div className="space-y-6">
        <span className="font-bold text-blue-600 text-sm uppercase tracking-widest">
          Our Services
        </span>
        <h1 className="font-black text-zinc-900 text-5xl tracking-tight">
          {displayTitle}
        </h1>
        <p className="text-zinc-600 text-xl leading-relaxed">
          Detailed information about our {displayTitle} solutions will be pulled 
          from the Buyload CMS database here.
        </p>
        
        <div className="pt-10 border-zinc-100 border-t">
          <a href="/contact" className="bg-black px-8 py-4 rounded-full font-bold text-white">
            Enquire about {displayTitle}
          </a>
        </div>
      </div>
    </div>
  );
}