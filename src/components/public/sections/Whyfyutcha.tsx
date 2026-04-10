// components/public/sections/WhyFyutcha.tsx

const reasons = [
  {
    title: "Custom-Built Everything",
    description:
      "We don't touch Wix, Squarespace, or drag-and-drop builders. Everything is coded to your exact requirements.",
  },
  {
    title: "Performance-First",
    description:
      "Fast load times, clean code, and SEO baked in from the start — not bolted on at the end.",
  },
  {
    title: "Transparent Pricing",
    description:
      "You get a clear quote before we start. No hidden fees, no surprise invoices, no locked contracts.",
  },
  {
    title: "You Own Everything",
    description:
      "The code, the domain, the hosting — it all belongs to you. You're never locked into our platform.",
  },
  {
    title: "Ongoing Support",
    description:
      "We don't disappear after launch. Need a fix? An update? We're a WhatsApp message away.",
  },
  {
    title: "Nairobi-Based, Global Standards",
    description:
      "We understand the local market while building to international quality benchmarks.",
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
              Plenty of agencies exist. Here's what makes working with us different — and why
              clients come back.
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