import SupportHeroDetail from "@/components/public/services/details/development-support/SupportHeroDetail";
import SupportJourney from "@/components/public/services/details/development-support/SupportJourney";
import SupportMatrix from "@/components/public/services/details/development-support/SupportMatrix";
import DevCTA from "@/components/public/services/details/development-support/SupportCTA";

export const metadata = {
  title: "Website Maintenance & M-Pesa Integration Kenya | Fyutchalabs",
  description: "Fixing broken websites, optimizing speed, and integrating M-Pesa API. Professional website maintenance and technical support in Nairobi.",
};

export default function SupportPage() {
  return (
    <div className="flex flex-col gap-12 animate-in duration-700 fade-in">
      {/* 1. The Diagnostic Hook: Fix, Secure, Optimize */}
      <SupportHeroDetail />

      {/* 2. The Rescue Plan: Step-by-step stabilization */}
      <SupportJourney />

      {/* 3. The Technical Matrix: Specific Kenya-focused fixes */}
      <SupportMatrix />

      {/* 4. The Rescue CTA: Request a Technical Audit */}
      <DevCTA />
    </div>
  );
}