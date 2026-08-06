import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import LogoWall from "./components/LogoWall";
import ParticlesBackground from "./ParticlesBackground";
import Process from "./components/Process";
import HowItWorks from "./components/HowItWorks";
import ChibiArt from "./components/ChibiArt";
import CustomCursor from "./components/CustomCursor";
export default function Home() {
  return (
    <main>
      <ParticlesBackground />
      <Navbar />

      <Hero />

<LogoWall />

      <About />

      <Services />

      <Gallery />

      <Process />

      <HowItWorks />

      <ChibiArt />

      <CustomCursor />
      
      <Contact />

      
      
    </main>
  );
}