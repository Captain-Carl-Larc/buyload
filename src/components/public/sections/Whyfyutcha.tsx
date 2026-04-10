// components/public/sections/WhyFyutcha.tsx

const reasons = [
  {
    title: "We Only Do Design & Development",
    description:
      "No marketing packages, no SEO retainers, no social media add-ons. We build things — and we're very good at it because that's all we do.",
  },
  {
    title: "Custom-Built, Always",
    description:
      "Zero templates. Every site and app is engineered from scratch to fit your exact requirements, brand, and technical needs.",
  },
  {
    title: "Performance Baked In",
    description:
      "Fast load times, semantic HTML, and clean architecture are defaults — not upgrades. Your product is built right the first time.",
  },
  {
    title: "You Own Everything",
    description:
      "The code, the repo, the domain, the hosting account — it all belongs to you. You are never locked into us.",
  },
  {
    title: "Transparent from Day One",
    description:
      "Clear scope, clear pricing, clear timelines. You know exactly what you're getting before we write a single line of code.",
  },
  {
    title: "Local Presence, Global Standards",
    description:
      "Based in Nairobi. We understand the Kenyan business context while building to the same standards as the best studios globally.",
  },
];

export default function WhyFyutcha() {
  return (
    <section className="bg-white py-24 w-full">
      <div className="mx-auto px-6 max-w-6xl">
        <div className="items-start gap-16 grid lg:grid-cols-[1fr_2fr]">
          {/* Left: Heading */}
          <div className="lg:top-32 lg:sticky">
            <span className="font-bold text-orange-500 text-xs uppercase tracking-[0.2em]">
              Why Us
            </span>
            <h2 className="mt-3 font-bold text-gray-900 text-4xl leading-tight tracking-tight">
              Why businesses choose Fyutcha Labs
            </h2>
            <p className="mt-5 text-gray-500 leading-relaxed">
              There are plenty of generalist agencies. We are not one of them. Here is what you
              get when you work with a studio that only builds.
            </p>
          </div>

          {/* Right: Grid of reasons */}
          <div className="gap-8 grid sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason.title} className="flex flex-col gap-2">
                <div className="bg-orange-500 rounded-full w-8 h-1" />
                <h3 className="font-semibold text-gray-900 text-base">{reason.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}