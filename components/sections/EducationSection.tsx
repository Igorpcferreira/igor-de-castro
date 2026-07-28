import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { certifications, education } from "@/data/content";

export default function EducationSection() {
  return (
    <section id="formacao" className="py-24">
      <div className="container-site">
        <SectionHeading overline="05 · Formação" title="Formação e certificações" />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <Reveal className="h-full">
            <article className="card-surface h-full p-6">
              <h3 className="text-ink text-lg font-semibold">{education.degree}</h3>
              <p className="text-cyan-soft mt-1 text-sm">
                {education.institution} <span className="text-muted">· {education.period}</span>
              </p>
              <ul className="text-body mt-4 space-y-2.5 text-[15px] leading-relaxed">
                {education.details.map((detail) => (
                  <li key={detail} className="flex gap-2.5">
                    <span aria-hidden="true" className="text-cyan mt-0.5 shrink-0">
                      ▹
                    </span>
                    <span className="text-pretty">{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <h3 className="text-cyan-soft mb-3 text-[12px] font-medium uppercase tracking-[0.18em]">
              Cursos e certificações selecionados
            </h3>
            <ul className="space-y-2">
              {certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="card-surface hover:border-cyan/30 flex items-baseline justify-between gap-4 px-4 py-3 transition-colors duration-fast ease-glide"
                >
                  <div>
                    <p className="text-body text-sm font-medium">{cert.name}</p>
                    {cert.certificateUrl && (
                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan hover:text-cyan-bright text-[13px] transition-colors duration-fast ease-glide"
                      >
                        Ver certificado <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                  <span className="text-muted shrink-0 text-[13px]">{cert.year}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
