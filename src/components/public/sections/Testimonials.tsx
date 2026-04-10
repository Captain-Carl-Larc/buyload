// components/public/sections/Testimonials.tsx

// Replace with real client testimonials
const testimonials = [
  {
    quote:
      "Fyutcha Labs built our website from scratch in under 3 weeks. The result was clean, fast, and our leads doubled in the first month.",
    name: "James Kariuki",
    role: "CEO, Baraka Real Estate",
    initials: "JK",
  },
  {
    quote:
      "They fixed a critical bug that had been breaking our checkout for weeks. Responsive, professional, and actually explains what they're doing.",
    name: "Amina Ochieng",
    role: "Founder, SwiftPay Logistics",
    initials: "AO",
  },
  {
    quote:
      "Our Google rankings went from page 4 to page 1 in about two months. The SEO work they did was worth every shilling.",
    name: "Peter Mwangi",
    role: "Director, Aroha Wellness",
    initials: "PM",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24 w-full">
      <div className="mx-auto px-6 max-w-6xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="font-bold text-orange-500 text-xs uppercase tracking-[0.2em]">
            Client Stories
          </span>
          <h2 className="mt-3 font-bold text-gray-900 text-4xl tracking-tight">
            Don't take our word for it
          </h2>
        </div>

        {/* Cards */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-6 bg-gray-50 p-8 border border-gray-200 rounded-xl"
            >
              {/* Quote mark */}
              <span className="font-serif text-orange-300 text-5xl leading-none">"</span>

              <p className="-mt-4 text-[15px] text-gray-700 leading-relaxed">{t.quote}</p>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto pt-4 border-gray-200 border-t">
                <div className="flex justify-center items-center bg-orange-500 rounded-full w-10 h-10 font-bold text-white text-sm shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}