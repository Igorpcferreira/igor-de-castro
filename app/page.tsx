import Navbar from "@/components/Navbar";
import NeuralBackground from "@/components/NeuralBackground";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <NeuralBackground />
      <Navbar />
      <main id="conteudo" className="relative z-[2]">
        <Hero />
      </main>
    </>
  );
}
