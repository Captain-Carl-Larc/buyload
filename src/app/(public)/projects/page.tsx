export default function ProjectsPage() {
  const dummyProjects = ["tyuta-tutoring", "nairobi-investors", "kenya-safaris"];
  
  return (
    <div className="mx-auto px-6 py-20 max-w-6xl">
      <h1 className="mb-10 font-bold text-4xl">Our Projects</h1>
      <div className="gap-8 grid md:grid-cols-3">
        {dummyProjects.map((project) => (
          <a key={project} href={`/projects/${project}`} className="group">
            <div className="bg-zinc-100 mb-4 border border-zinc-200 group-hover:border-black rounded-xl aspect-video transition-colors" />
            <h3 className="font-bold capitalize">{project.replace(/-/g, ' ')}</h3>
          </a>
        ))}
      </div>
    </div>
  )
}