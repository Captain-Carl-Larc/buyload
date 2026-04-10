// components/public/sections/HowItWorks.tsx

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We get on a quick call to understand your business, goals, and what you need built. No pitch — just listening.",
  },
  {
    number: "02",
    title: "Proposal & Design",
    description:
      "We send a clear proposal with scope, timeline, and cost. Once approved, design mockups come first.",
  },
  {
    number: "03",
    title: "Build & Review",
    description:
      "We build in sprints and share progress with you. You review, give feedback, we iterate until it's right.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We deploy your project and stick around for post-launch support. You're never handed off and forgotten.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-950 py-24 w-full">
      <div className="mx-auto px-6 max-w-6xl">
        {/* Heading */}
        <div className="mb-16">
          <span className="font-bold text-orange-500 text-xs uppercase tracking-[0.2em]">
            The Process
          </span>
          <h2 className="mt-3 font-bold text-white text-4xl tracking-tight">
            How working with us feels
          </h2>
          <p className="mt-4 max-w-xl text-gray-400 text-lg leading-relaxed">
            Clear, calm, and collaborative. No surprises, no ghosting, no scope creep without your
            approval.
          </p>
        </div>

        {/* Steps */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col gap-5">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block top-5 left-[calc(100%-1rem)] absolute bg-gray-800 w-[calc(100%-2rem)] h-px" />
              )}

              {/* Number */}
              <div className="flex items-center gap-3">
                <span className="font-black text-orange-500 text-4xl leading-none">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-semibold text-white text-lg">{step.title}</h3>
                <p className="mt-2 text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}