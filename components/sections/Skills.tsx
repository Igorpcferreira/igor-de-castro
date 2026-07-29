"use client";

import { useLanguage } from "@/components/LanguageProvider";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Skills() {
  const { copy } = useLanguage();
  const section = copy.skillsSection;

  return (
    <section id="skills" className="section-shell">
      <div className="container-site">
        <SectionHeading overline={section.overline} title={section.title} />

        <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {section.categories.map((category, index) => (
            <Reveal key={category.title} delay={index * 75} className="h-full">
              <article className="corner-card terminal-surface hover:border-neon/45 h-full p-5 transition-[border-color,box-shadow,translate] duration-base hover:-translate-y-1 hover:shadow-[0_0_30px_rgb(82_255_125_/_0.08)] sm:p-7">
                <header className="mb-5 flex items-baseline gap-3">
                  <span className="text-neon text-[11px]">{category.index}</span>
                  <h3 className="font-display text-ink text-lg font-bold">{category.title}</h3>
                </header>
                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="border-neon/20 bg-neon/[0.035] text-body hover:border-neon/55 hover:text-neon border px-2.5 py-1.5 text-[10px] transition-colors sm:text-[11px]"
                    >
                      <span className="text-neon/50">[</span>
                      {skill}
                      <span className="text-neon/50">]</span>
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
