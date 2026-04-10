import ServiceHeroDetail from "@/components/public/services/details/web-design/ServiceHeroDetail";
import JourneyMap from "@/components/public/services/details/web-design/JourneyMap";
import FeatureMatrix from "@/components/public/services/details/web-design/FeatureMatrix";
import ServiceCTA from "@/components/public/services/details/web-design/ServiceCTA";

export const metadata = {
  title: "Custom Web Design Nairobi | Fyutchalabs",
  description: "High-performance website design engineered for business growth. No templates, just custom UX/UI that converts.",
};

export default function WebDesignPage() {
  return (
    <div className="flex flex-col gap-12">
      <ServiceHeroDetail />
      <JourneyMap />
      <FeatureMatrix />
      <ServiceCTA />
    </div>
  );
}