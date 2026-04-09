import Hero from "@/components/public/sections/Hero";

export default function Home() {
  return (
    // Remove the flex-center logic. 
    // Just let the components stack naturally.
    <div className="w-full">
       <Hero />
       {/* Other sections will follow here */}
    </div>
  );
}