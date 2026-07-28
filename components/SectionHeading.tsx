import Reveal from "@/components/Reveal";

interface SectionHeadingProps {
  overline: string;
  title: string;
}

export default function SectionHeading({ overline, title }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12">
      <p className="text-cyan-soft flex items-center gap-3 text-[13px] font-medium uppercase tracking-[0.2em]">
        <span aria-hidden="true" className="bg-cyan/30 h-px w-8" />
        {overline}
      </p>
      <h2 className="text-cyan-bright mt-3 text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
    </Reveal>
  );
}
