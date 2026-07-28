import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NeuralBackground from "@/components/NeuralBackground";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <NeuralBackground />
      <Navbar />
      <main id="conteudo" className="relative z-[2]">
        <Hero />
        <About />
        <Skills />
        <ExperienceSection />
        <Projects />
        <EducationSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
