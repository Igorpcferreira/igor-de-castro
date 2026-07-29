import Reveal from "@/components/Reveal";

interface SectionHeadingProps {
  overline: string;
  title: string;
  centered?: boolean;
}

export default function SectionHeading({
  overline,
  title,
  centered = false,
}: SectionHeadingProps) {
  return (
    <Reveal className={`mb-10 md:mb-12 ${centered ? "text-center" : ""}`}>
      <p className="text-neon text-[11px] font-medium uppercase tracking-[0.2em] md:text-[13px]">
        {"// "}
        {overline}
      </p>
      <h2 className="font-display text-ink mt-2 text-[clamp(1.8rem,4vw,3rem)] font-bold leading-tight tracking-[-0.025em]">
        {title}
      </h2>
    </Reveal>
  );
}
