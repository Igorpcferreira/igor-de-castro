import { profile } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-cyan/10 relative z-[2] border-t py-8">
      <div className="container-site flex flex-col items-center justify-between gap-3 text-[13px] sm:flex-row">
        <p className="text-muted">
          © {year} {profile.name}. Feito com Next.js, TypeScript e uma rede neural viva.
        </p>
        <ul className="flex items-center gap-5">
          <li>
            <a
              href={`mailto:${profile.links.email}`}
              className="text-muted hover:text-cyan-bright transition-colors duration-fast ease-glide"
            >
              E-mail
            </a>
          </li>
          <li>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-cyan-bright transition-colors duration-fast ease-glide"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-cyan-bright transition-colors duration-fast ease-glide"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
