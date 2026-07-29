"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const { copy } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-neon/10 bg-night/65 relative z-[4] border-t py-7">
      <div className="container-site flex flex-col items-center justify-between gap-4 text-center text-[9px] sm:flex-row sm:text-left sm:text-[10px]">
        <p className="text-muted">
          © {year} {copy.profile.name} <span className="text-neon/50">{"//"}</span>{" "}
          {copy.footer.builtWith}
        </p>
        <a
          href="#top"
          className="text-muted hover:text-neon border-b border-dashed border-current pb-0.5 transition-colors"
        >
          {copy.footer.backToTop} ↑
        </a>
      </div>
    </footer>
  );
}
