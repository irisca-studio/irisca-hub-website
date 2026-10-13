import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Process from "./components/Process";
import ProcessShowcase from "./components/ProcessShowcase";
import CoupleGallery from "./components/CoupleGallery";
import HowItWorks from "./components/HowItWorks";
import ChibiArt from "./components/ChibiArt";
import CommissionPolicy from "./components/CommissionPolicy";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";
import CustomCursor from "./components/CustomCursor";
import WallpaperShowcase from "./components/WallpaperShowcase";
export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* About */}
      <About />

      {/* Gallery */}
      <Gallery />

      {/* Services */}
      <Services />

      {/* Process */}
      <Process />

      {/* Process Showcase */}
      <ProcessShowcase />

      {/* Couple Gallery */}
      <CoupleGallery />

     <WallpaperShowcase />

      {/* How It Works */}
      <HowItWorks />

      {/* Chibi Art */}
      <ChibiArt />

      {/* Commission Policy */}
      <CommissionPolicy />

      {/* Contact */}
      <Contact />

      {/* Social Links */}
      <SocialLinks />

      {/* Custom Cursor */}
      <CustomCursor />
    </main>
  );
}