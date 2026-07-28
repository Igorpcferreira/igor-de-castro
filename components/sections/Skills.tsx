import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { skillCategories } from "@/data/content";

export default function Skills() {
  return (
    <section id="competencias" className="py-24">
      <div className="container-site">
        <SectionHeading overline="02 · Competências" title="Com o que eu trabalho" />

        <div className="grid gap-5 sm:grid-cols-2">
          {skillCategories.map((category, i) => (
            <Reveal key={category.title} delay={i * 90} className="h-full">
              <article className="card-surface hover:border-cyan/30 h-full p-6 transition-[border-color,translate] duration-base ease-glide hover:-translate-y-1">
                <h3 className="text-ink mb-4 text-lg font-semibold">{category.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="border-cyan/15 bg-cyan/5 text-body hover:border-cyan/40 hover:text-cyan-bright rounded-full border px-3 py-1 text-[13px] transition-colors duration-fast ease-glide"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
