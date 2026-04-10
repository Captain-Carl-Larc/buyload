import ServicesHero from "@/components/public/services/ServicesHero";
import ServicesGrid from "@/components/public/services/ServicesGrid";
import ServiceComparison from "@/components/public/services/ServiceComparison";
import KnowledgeBase from "@/components/public/about/KnowledgeBase"; // Reuse the About page CTA

export const metadata = {
  title: "Our Services | Fyutchalabs Digital Product Studio",
  description: "Explore our range of custom web design, application development, and CMS solutions engineered for performance and growth.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-24 py-12 animate-in duration-700 fade-in">
      <ServicesHero />
      <ServicesGrid />
      <ServiceComparison />
      {/* Reusing KnowledgeBase because it bridges to WhatsApp perfectly */}
      <KnowledgeBase />
    </div>
  );
}