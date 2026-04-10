import AppDevHero from "@/components/public/services/details/app-development/AppDevHero";
import AppDevJourney from "@/components/public/services/details/app-development/AppDevJourney";
import AppDevMatrix from "@/components/public/services/details/app-development/AppDevMatrix";
import AppDevCTA from "@/components/public/services/details/app-development/AppDevCTA";

export const metadata = {
  title: "Scalable App Development Nairobi | Fyutchalabs",
  description: "Cross-platform mobile and web application engineering. We build robust, secure, and scalable backends with high-performance front-ends for iOS and Android.",
};

export default function AppDevPage() {
  return (
    <div className="flex flex-col gap-12 animate-in duration-700 fade-in">
      {/* 1. The Engine Room: System Architecture Visual */}
      <AppDevHero />

      {/* 2. The Production Line: Engineering Rigor Pipeline */}
      <AppDevJourney />

      {/* 3. The Power Grid: Technical Specs & Stack Matrix */}
      <AppDevMatrix />

      {/* 4. The Closer: Scalability & Growth Engine CTA */}
      <AppDevCTA />
    </div>
  );
}