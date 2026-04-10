import CMSHeroDetail from "@/components/public/services/details/cms/CMSHeroDetail";
import CMSJourney from "@/components/public/services/details/cms/CMSJourney";
import CMSMatrix from "@/components/public/services/details/cms/CMSMatrix";
import ServiceCTA from "@/components/public/services/details/cms/ServiceCTA";

export const metadata = {
  title: "Custom CMS Development Nairobi | Payload & Headless CMS | Fyutchalabs",
  description: "Take full control of your website. We build custom, user-friendly admin panels and headless CMS solutions that empower your team to manage content without code.",
};

export default function CMSPage() {
  return (
    <div className="flex flex-col gap-12 animate-in duration-700 fade-in">
      {/* 1. The Hook: Content Independence */}
      <CMSHeroDetail />

      {/* 2. The Narrative: Path to Autonomy */}
      <CMSJourney />

      {/* 3. The Specs: Flexibility and Power */}
      <CMSMatrix />

      {/* 4. The Closer: Standard Brand CTA */}
      <ServiceCTA />
    </div>
  );
}