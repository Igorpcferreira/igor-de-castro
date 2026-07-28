import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { experiences } from "@/data/content";

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="py-24">
      <div className="container-site">
        <SectionHeading overline="03 · Experiência" title="Por onde passei" />

        <ol className="border-cyan/15 relative ml-1.5 space-y-14 border-l pl-8 sm:ml-3 sm:pl-10">
          {experiences.map((exp, i) => {
            const isCurrent = i === 0;
            return (
              <Reveal key={exp.company} as="li" delay={i * 90} className="relative">
                {/* Marcador na linha do tempo; verde só no cargo atual (status) */}
                <span
                  aria-hidden="true"
                  className={`absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full sm:-left-[45px] ${
                    isCurrent
                      ? "bg-neon shadow-[0_0_10px] shadow-neon/70"
                      : "border-cyan/50 bg-night border-2"
                  }`}
                />

                <header className="mb-4">
                  <h3 className="text-ink text-xl font-semibold">
                    {exp.company}
                    <span className="text-cyan"> · </span>
                    <span className="text-cyan-bright font-medium">{exp.role}</span>
                  </h3>
                  <p className="text-cyan-soft mt-1 text-sm">
                    {exp.period} <span className="text-muted">· {exp.location}</span>
                  </p>
                </header>

                {exp.roles && (
                  <ol className="mb-4 space-y-1 text-sm">
                    {exp.roles.map((role) => (
                      <li key={role.title} className="flex flex-wrap items-baseline gap-x-2">
                        <span aria-hidden="true" className="text-cyan/60">
                          ↳
                        </span>
                        <span className="text-body font-medium">{role.title}</span>
                        <span className="text-muted text-[13px]">{role.period}</span>
                      </li>
                    ))}
                  </ol>
                )}

                <ul className="text-body max-w-[75ch] space-y-2.5 text-[15px] leading-relaxed">
                  {exp.highlights.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <span aria-hidden="true" className="text-cyan mt-0.5 shrink-0">
                        ▹
                      </span>
                      <span className="text-pretty">{item}</span>
                    </li>
                  ))}
                </ul>

                {exp.summaryTags.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {exp.summaryTags.map((tag) => (
                      <li
                        key={tag}
                        className="border-cyan/15 bg-cyan/5 text-cyan-soft rounded-full border px-2.5 py-0.5 text-[12px]"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}

                {exp.projects && (
                  <div className="mt-6">
                    <h4 className="text-cyan-soft mb-3 text-[12px] font-medium uppercase tracking-[0.18em]">
                      Projetos selecionados
                    </h4>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {exp.projects.map((project, j) => (
                        <Reveal key={project.name} delay={j * 60} className="h-full">
                          <article className="card-surface hover:border-cyan/30 h-full p-4 transition-[border-color,translate] duration-base ease-glide hover:-translate-y-0.5">
                            <h5 className="text-ink text-sm font-semibold">{project.name}</h5>
                            <p className="text-cyan-soft mt-0.5 text-[12px]">
                              {project.period} · {project.client}
                            </p>
                            <p className="text-body mt-2 text-pretty text-[13px] leading-relaxed">
                              {project.description}
                            </p>
                          </article>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                )}
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
