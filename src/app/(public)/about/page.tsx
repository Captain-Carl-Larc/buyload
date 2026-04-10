import AboutHero from "@/components/public/about/AboutHero";
import TechStack from "@/components/public/about/TechStack";
import Approach from "@/components/public/about/Approach";
import Pillars from "@/components/public/about/Pillars";
import Process from "@/components/public/about/Process";
import KnowledgeBase from "@/components/public/about/KnowledgeBase";

export const metadata = {
  title: "About Fyutchalabs | Technical Growth & Performance Engineering",
  description: "Learn how Fyutchalabs engineers high-performance digital infrastructure for brands that prioritize speed, ownership, and growth.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-24 py-12 animate-in duration-700 fade-in">
      
      {/* 01. The Hook - Establishing Authority */}
      <AboutHero />

      {/* 02. The Proof - Showcasing the Stack */}
      <TechStack />
    {/* 02.5 The Approach - Explaining how we work differently */}
      <Approach />

      {/* 03. The Ethics - Why Ownership & Performance Matter */}
      <Pillars />

      {/* 04. The Safety - How we deliver result without friction */}
      <Process />

      {/* 05. The Bridge - Self-service FAQs or Direct WhatsApp access */}
      <KnowledgeBase />

    </div>
  );
}