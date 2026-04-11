export default function PrivacyPage() {
  const lastUpdated = "April 11, 2026";

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 font-black text-zinc-900 text-5xl md:text-7xl uppercase tracking-tighter">
          Privacy <br /> <span className="text-orange-500 italic">Policy.</span>
        </h1>
        <p className="mb-12 font-bold text-zinc-500 text-sm uppercase tracking-widest">
          Last Updated: {lastUpdated}
        </p>

        <div className="space-y-12 max-w-none font-medium text-zinc-600 leading-relaxed prose prose-zinc">
          
          <section>
            <h2 className="mb-4 font-black text-zinc-900 text-2xl uppercase tracking-tight">01. Data Collection</h2>
            <p>
              At Fyutchalabs, we collect information you provide directly to us through our contact forms and WhatsApp links. This includes your name, email address, phone number, and project details. We also automatically collect technical data via cookies to improve site performance and user experience.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-black text-zinc-900 text-2xl uppercase tracking-tight">02. Use of Information</h2>
            <p>
              We use the collected data to:
            </p>
            <ul className="space-y-2 pl-6 list-disc">
              <li>Respond to technical inquiries within our 60-minute service window.</li>
              <li>Analyze website traffic to optimize our "Technical House" experience.</li>
              <li>Provide updates regarding your project status or maintenance alerts.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-black text-zinc-900 text-2xl uppercase tracking-tight">03. Kenya Data Protection Act</h2>
            <p>
              In accordance with the <strong>Kenya Data Protection Act (2019)</strong>, we respect your right to privacy. You have the right to request access to, correction of, or deletion of your personal data held by Fyutchalabs.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-black text-zinc-900 text-2xl uppercase tracking-tight">04. Third-Party Sharing</h2>
            <p>
              We do not sell your data. We only share information with essential service providers like <strong>Resend</strong> (for email delivery) and <strong>WhatsApp</strong> (for communication), as required to fulfill your requests.
            </p>
          </section>

          <div className="bg-zinc-50 mt-12 p-8 border border-zinc-100 rounded-[2rem]">
            <h3 className="mb-2 font-black text-zinc-900 text-sm uppercase">Security Note</h3>
            <p className="text-sm">
              While we implement "Bank-Grade Security" protocols on our developed products, no transmission over the internet is 100% secure. We strive to protect your data using modern encryption standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}