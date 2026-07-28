import Navbar from "@/components/Navbar";
import NeuralBackground from "@/components/NeuralBackground";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
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
      </main>
    </>
  );
}
