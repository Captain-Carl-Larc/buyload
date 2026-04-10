// app/(public)/page.tsx
import Hero from "@/components/public/sections/Hero";
import SocialProofBar from "@/components/public/sections/Socialproofbar";
import Services from "@/components/public/sections/Services";
import HowItWorks from "@/components/public/sections/Howitworks";
import WhyFyutcha from "@/components/public/sections/Whyfyutcha";
import Portfolio from "@/components/public/sections/Portifolio";
import Testimonials from "@/components/public/sections/Testimonials";
import SuccessStoryBanner from "@/components/public/sections/SuccessStoryBanner";
import BlogPosts from "@/components/public/sections/Blogposts";
import CTABanner from "@/components/public/sections/Ctabanner";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <SocialProofBar />
      <Services />
      <HowItWorks />
      <WhyFyutcha />
      <Portfolio />
      <Testimonials />
      <SuccessStoryBanner />
      <BlogPosts />
      <CTABanner />
    </div>
  );
}