import DevHeroDetail from "@/components/public/services/details/web-development/DevHeroDetail";
import DevJourney from "@/components/public/services/details/web-development/DevJourney";
import DevMatrix from "@/components/public/services/details/web-development/DevMatrix";
import ServiceCTA from "@/components/public/services/details/web-development/DevCTA";

export const metadata = {
  title: "High-Performance Web Development Nairobi | Fyutchalabs",
  description: "Robust digital infrastructure designed for speed, security, and scale. We build clean, high-performance code that drives business growth.",
};

export default function WebDevPage() {
  return (
    <div className="flex flex-col gap-12 animate-in duration-700 fade-in">
      <DevHeroDetail />
      <DevJourney /> 
      <DevMatrix />
      <ServiceCTA />
    </div>
  );
}