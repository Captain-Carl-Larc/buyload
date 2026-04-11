export default function TermsPage() {
  const lastUpdated = "April 11, 2026";

  const terms = [
    {
      title: "01. Project Scoping",
      content: "All projects begin with a Technical Scoping session. Any features or requirements not explicitly captured in the initial Scope of Work (SOW) will be considered 'Scope Creep' and will be billed as additional work at our standard hourly rate."
    },
    {
      title: "02. Payment Milestones",
      content: "We operate on a 50% upfront commitment fee to secure your slot in our production sprint. The remaining 50% is due upon project completion but prior to final deployment or handover of credentials. Late payments exceeding 14 days will result in a temporary suspension of technical support."
    },
    {
      title: "03. Intellectual Property",
      content: "Upon final payment, the full copyright and ownership of the developed solution (frontend code, custom logic, and assets) are transferred to the Client. Fyutchalabs retains the right to showcase the project in our Solutions Gallery unless a Non-Disclosure Agreement (NDA) is in place."
    },
    {
      title: "04. Third-Party Services",
      content: "Fyutchalabs is not liable for service outages caused by third-party providers (e.g., M-Pesa API downtime, AWS/Vercel hosting issues, or Domain Registry failures). We will, however, act as your technical liaison to resolve these issues during active maintenance periods."
    },
    {
      title: "05. Response Guarantees",
      content: "Our 5-minute WhatsApp and 1-hour email response times are 'Best Effort' targets during operating hours (6 AM - 8 PM EAT). These are intended for communication clarity and do not equate to a guarantee of immediate technical fix for complex issues."
    }
  ];

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 font-black text-zinc-900 text-5xl md:text-7xl uppercase tracking-tighter">
          Terms of <br /> <span className="text-orange-500 italic">Service.</span>
        </h1>
        <p className="mb-16 font-bold text-zinc-500 text-sm uppercase tracking-widest">
          Rules of Engagement — {lastUpdated}
        </p>

        <div className="space-y-16">
          {terms.map((item) => (
            <div key={item.title} className="group">
              <h2 className="mb-4 font-black text-zinc-900 group-hover:text-orange-500 text-2xl uppercase tracking-tight transition-colors">
                {item.title}
              </h2>
              <p className="max-w-3xl font-medium text-zinc-600 leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 mt-20 p-8 rounded-[2.5rem] text-white">
          <p className="mb-4 font-bold text-orange-500 text-xs uppercase tracking-[0.2em]">Jurisdiction</p>
          <p className="opacity-70 text-sm leading-relaxed">
            These terms are governed by the laws of the Republic of Kenya. Any disputes arising from these terms will be settled through amicable mediation before proceeding to the courts of Nairobi.
          </p>
        </div>
      </div>
    </section>
  );
}