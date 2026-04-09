import Header from "@/components/public/layout/Header";
import Footer from "@/components/public/layout/Footer";
import { siteConfig } from "@/core/config/site";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col bg-white selection:bg-orange-100 min-h-screen selection:text-orange-900">
      {/* The Header and Footer now look inside siteConfig internally, 
         making this layout very easy to read. 
      */}
      <Header />

      <main className="flex-1 pt-20"> {/* pt-20 is roughly 80px, matching your header height */}
  {children}
</main>

      <Footer />
    </div>
  );
}