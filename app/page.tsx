import NeuralBackground from "@/components/NeuralBackground";

export default function Home() {
  return (
    <>
      <NeuralBackground />
      <main className="relative z-[2] flex min-h-screen flex-col justify-center px-[clamp(24px,7vw,120px)]">
        <h1 className="text-ink max-w-3xl text-5xl font-bold">Igor de Castro</h1>
      </main>
    </>
  );
}
