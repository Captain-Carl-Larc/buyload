import AppDesignHero from "@/components/public/services/details/app-design/AppDesignHero";
import AppJourney from "@/components/public/services/details/app-design/AppJourney";
import AppMatrix from "@/components/public/services/details/app-design/AppMatrix";
import AppCTA from "@/components/public/services/details/app-design/AppCTA";

export const metadata = {
  title: "Premium App UI/UX Design Nairobi | Fyutchalabs",
  description: "User-centric mobile and web application design. We create high-fidelity prototypes and pixel-perfect interfaces that drive user engagement and business growth.",
};

export default function AppDesignPage() {
  return (
    <div className="flex flex-col gap-12 animate-in duration-700 fade-in">
      {/* 1. The Hero: Visual Blueprint + Service Switcher */}
      <AppDesignHero />

      {/* 2. The Narrative: Logic & Psychology Step-by-Step */}
      <AppJourney />

      {/* 3. The Details: Technical SEO & Design Features Grid */}
      <AppMatrix />

      {/* 4. The Closer: Prototype-focused CTA */}
      <AppCTA />
    </div>
  );
}