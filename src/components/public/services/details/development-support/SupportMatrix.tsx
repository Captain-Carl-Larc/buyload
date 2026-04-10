import { Zap, ShieldCheck, CreditCard, RefreshCw, SearchCode, Lock } from "lucide-react";

export default function SupportMatrix() {
  const fixes = [
    {
      title: "M-Pesa API Integration",
      desc: "Native integration of C2B, B2C, and STK Push. We ensure your payment flows are secure and reconcile perfectly.",
      icon: <CreditCard size={24} />,
      keyword: "Payment Gateway Kenya"
    },
    {
      title: "Speed & Core Web Vitals",
      desc: "Optimizing images, minifying scripts, and fixing server response times to hit that 90+ Lighthouse score.",
      icon: <Zap size={24} />,
      keyword: "Speed Optimization"
    },
    {
      title: "Security Hardening",
      desc: "Removing malware, patching vulnerabilities, and setting up firewalls to prevent future attacks.",
      icon: <ShieldCheck size={24} />,
      keyword: "Website Security"
    },
    {
      title: "Legacy Code Refactoring",
      desc: "Cleaning up messy code left behind by others. We make your existing system stable and maintainable.",
      icon: <SearchCode size={24} />,
      keyword: "Code Audits"
    },
    {
      title: "Managed Updates",
      desc: "Regular updates for CMS cores, plugins, and dependencies without breaking your site's functionality.",
      icon: <RefreshCw size={24} />,
      keyword: "Maintenance Packages"
    },
    {
      title: "SSL & Data Encryption",
      desc: "Ensuring all user data is encrypted and your site maintains a trusted 'Secure' connection status.",
      icon: <Lock size={24} />,
      keyword: "SSL Integration"
    }
  ];

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="gap-x-12 gap-y-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {fixes.map((f) => (
            <div key={f.title} className="group">
              <div className="mb-6 text-zinc-300 group-hover:text-orange-500 transition-colors">
                {f.icon}
              </div>
              <h3 className="mb-4 font-black text-zinc-900 text-xl uppercase tracking-tight">
                {f.title}
              </h3>
              <p className="mb-4 text-zinc-500 text-sm leading-relaxed">
                {f.desc}
              </p>
              <span className="font-black text-[9px] text-orange-500/40 italic uppercase tracking-[0.2em]">
                {f.keyword}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}