import SolutionsHero from "@/components/public/solutions/SolutionsHero";
import SystemProcess from "@/components/public/solutions/SystemProcess";
import ProjectRegistry from "@/components/public/solutions/ProjectRegistry";
import ApproachRescue from "@/components/public/solutions/ApproachRescue";
import SolutionsCTA from "@/components/public/solutions/SolutionsCTA";

export const metadata = {
  title: "Our Solutions | Digital Products & M-Pesa Integrations | Fyutchalabs",
  description: "A showcase of high-performance digital solutions, e-commerce engines, and custom software systems engineered by Fyutchalabs in Nairobi.",
};

export default function SolutionsPage() {
  return (
    <div className="flex flex-col gap-0 animate-in duration-1000 fade-in">
      <SolutionsHero />
      <SystemProcess />
      <ProjectRegistry />
      <ApproachRescue />
      <SolutionsCTA />
    </div>
  );
}