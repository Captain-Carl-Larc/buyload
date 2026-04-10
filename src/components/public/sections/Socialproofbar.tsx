// components/public/sections/SocialProofBar.tsx

const stats = [
  { value: "20+", label: "Projects Launched" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "5★", label: "Rated on Google" },
  { value: "48hr", label: "Avg. Response Time" },
];

export default function SocialProofBar() {
  return (
    <section className="bg-gray-50 py-6 border-gray-200 border-y w-full">
      <div className="mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center px-6 py-4 text-center">
              <span className="font-bold text-gray-900 text-3xl tracking-tight">
                {stat.value}
              </span>
              <span className="mt-1 font-medium text-gray-500 text-sm uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}