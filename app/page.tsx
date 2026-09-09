import BackgroundVeil from "@/components/BackgroundVeil";
import Footer from "@/components/Footer";
import LanguageProvider from "@/components/LanguageProvider";
import Navbar from "@/components/Navbar";
import NeuralBackground from "@/components/NeuralBackground";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import StartProject from "@/components/sections/StartProject";

export default function Home() {
  return (
    <LanguageProvider>
      <NeuralBackground />
      <BackgroundVeil />
      <div aria-hidden="true" className="scanlines" />
      <Navbar />
      <main id="content" className="relative z-[2] overflow-clip">
        <Hero />
        <About />
        <Skills />
        <ExperienceSection />
        <Projects />
        <StartProject />
        <Services />
        <EducationSection />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
