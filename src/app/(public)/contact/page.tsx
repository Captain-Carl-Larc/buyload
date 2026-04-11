import ContactHero from "@/components/public/contact/ContactHero";
import ContactForm from "@/components/public/contact/ContactForm";

export const metadata = {
  title: "Sync with Fyutchalabs | Rapid Technical Response Nairobi",
  description: "Get in touch with Nairobi's premier engineering studio. 5-minute WhatsApp responses and 1-hour email turnarounds for technical scoping.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-0 animate-in duration-700 fade-in">
      {/* The Hero: WhatsApp and Call Priorities */}
      <ContactHero />
      
      {/* The Form: Clean UI for Detailed Scopes */}
      <ContactForm />
    </div>
  );
}