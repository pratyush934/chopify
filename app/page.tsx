import Contact from "@/components/Contacts";
import Demo from "@/components/Demo";
import FAQs from "@/components/FAQs";
import HeroSection from "@/components/HeroSection";
import TestiMonies from "@/components/TestiMonies";
import Unique from "@/components/Unique";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Demo />
      <Unique />
      <FAQs />
      <TestiMonies />
      <Contact />
    </div>
  );
}
