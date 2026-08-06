import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Process from "./components/Process";
import HowItWorks from "./components/HowItWorks";
import ChibiArt from "./components/ChibiArt";
import CustomCursor from "./components/CustomCursor";
import CommissionPolicy from "./components/CommissionPolicy";
import SocialLinks from "./components/SocialLinks";
import ProcessShowcase from "./components/ProcessShowcase";
import CoupleGallery from "./components/CoupleGallery";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">

      <Hero />

      <About />

      <Services />

      <Process />

      <ProcessShowcase />

      {/* Couple Animation Column */}
      <CoupleGallery />

      <HowItWorks />

      <ChibiArt />

      <CustomCursor />

      <CommissionPolicy />

      <Contact />

      <SocialLinks />

    </main>
  );
}