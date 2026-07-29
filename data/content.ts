export type Locale = "en" | "pt-BR";

export interface SocialLinks {
  email: string;
  phone: string;
  whatsapp: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

export interface Profile {
  name: string;
  command: string;
  headlineTag: string;
  title: string;
  tagline: string;
  location: string;
  timezone: string;
  resumePdf: string;
  resumeDownloadLabel: string;
  links: SocialLinks;
}

export interface Metric {
  value: string;
  label: string;
}

export interface SkillCategory {
  index: string;
  title: string;
  skills: string[];
}

export interface CompanyProject {
  name: string;
  period: string;
  client: string;
  description: string;
}

export interface Role {
  title: string;
  period: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  summaryTags: string[];
  highlights: string[];
  roles?: Role[];
  projects?: CompanyProject[];
}

export interface Project {
  name: string;
  url: string;
  tagline: string;
  description: string[];
  stack: string[];
  badge?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  details: string[];
}

export interface Certification {
  name: string;
  year: string;
  url?: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface SectionLink {
  id: string;
  label: string;
  shortLabel: string;
}

export interface PortfolioContent {
  localeName: string;
  navigationLabel: string;
  skipLabel: string;
  menuOpenLabel: string;
  menuCloseLabel: string;
  profile: Profile;
  metrics: Metric[];
  sections: SectionLink[];
  hero: {
    projectsCta: string;
    contactCta: string;
    scrollLabel: string;
    photoCaption: string;
  };
  aboutSection: {
    overline: string;
    title: string;
    terminalTitle: string;
    paragraphs: string[];
    statusLabel: string;
    statusValue: string;
    locationLabel: string;
    emailLabel: string;
    languagesLabel: string;
  };
  skillsSection: {
    overline: string;
    title: string;
    categories: SkillCategory[];
  };
  experienceSection: {
    overline: string;
    title: string;
    detailsLabel: string;
    projectsLabel: string;
    experiences: Experience[];
  };
  projectsSection: {
    overline: string;
    title: string;
    visitLabel: string;
    projects: Project[];
  };
  educationSection: {
    overline: string;
    title: string;
    certificationsLabel: string;
    certificationLinkLabel: string;
    education: Education;
    certifications: Certification[];
  };
  contactSection: {
    overline: string;
    title: string;
    body: string;
    whatsappCta: string;
    emailCta: string;
    whatsappMessage: string;
    resumePrefix: string;
  };
  languages: Language[];
  footer: {
    builtWith: string;
    backToTop: string;
  };
}

const links: SocialLinks = {
  email: "igorpcferreira@gmail.com",
  phone: "+55 (62) 98643-0079",
  whatsapp: "https://wa.me/5562986430079",
  linkedin: "https://www.linkedin.com/in/igor-cferreira",
  github: "https://github.com/Igorpcferreira",
  portfolio: "https://igordecastro.com.br",
};

const sharedSkills = {
  backend: [
    "Java",
    "Spring Boot",
    "Quarkus",
    "REST APIs",
    "JPA/Hibernate",
    "Maven",
    "MapStruct",
    "Node.js",
    "NestJS",
  ],
  frontend: [
    "AngularJS",
    "Angular",
    "React",
    "Next.js",
    "Vue",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
  ],
  data: [
    "PostgreSQL",
    "Oracle",
    "Microsoft SQL Server",
    "Redis",
    "Docker",
    "Flyway",
    "Git",
    "Bitbucket/GitLab",
    "Jenkins",
    "Bamboo",
  ],
  quality: [
    "SonarQube",
    "JUnit",
    "Vitest",
    "Playwright",
    "Unit / Integration / E2E",
    "Clean Architecture",
    "DDD",
    "Strategy",
    "Agile / Scrum",
  ],
};

const en: PortfolioContent = {
  localeName: "English",
  navigationLabel: "Main navigation",
  skipLabel: "Skip to content",
  menuOpenLabel: "Open menu",
  menuCloseLabel: "Close menu",
  profile: {
    name: "Igor de Castro",
    command: "whoami",
    headlineTag: "Full Stack Developer // Mid-Level",
    title: "Mid-Level Full Stack Developer",
    tagline:
      "I modernize large-scale systems and build fast, accessible web products with measurable quality.",
    location: "Goiânia, GO, Brazil",
    timezone: "UTC−3",
    resumePdf: "/Igor_de_Castro_Resume_EN_2026.pdf",
    resumeDownloadLabel: "download_resume.pdf",
    links,
  },
  metrics: [
    { value: "4+", label: "years in tech" },
    { value: "10+", label: "systems delivered" },
    { value: "950+", label: "automated tests" },
  ],
  sections: [
    { id: "about", label: "About", shortLabel: "about" },
    { id: "skills", label: "Stack", shortLabel: "stack" },
    { id: "experience", label: "Experience", shortLabel: "exp" },
    { id: "projects", label: "Projects", shortLabel: "projects" },
    { id: "education", label: "Education", shortLabel: "education" },
    { id: "contact", label: "Contact", shortLabel: "contact" },
  ],
  hero: {
    projectsCta: "view_projects",
    contactCta: "contact",
    scrollLabel: "scroll",
    photoCaption: "igor_de_castro.png",
  },
  aboutSection: {
    overline: "01 — ABOUT",
    title: "The developer behind the code",
    terminalTitle: "cat about.txt",
    paragraphs: [
      "Mid-Level Full Stack Developer with over four years of professional experience in technology, working continuously in software development since 2022. At Minsait, an Indra Group company from Spain, I contribute to large-scale enterprise systems for public healthcare, traffic, and defense.",
      "I bring solid experience across Java 11, 21 and 25, Spring Boot, Quarkus, Angular, Vue, TypeScript, PostgreSQL, and Oracle. I currently contribute to the modernization of SINGRA 2 for the Brazilian Navy, migrating a legacy Angular 6 and DWR architecture to Angular 21, REST/JSON APIs with JWT Bearer authentication, and Spring Boot 4 with Java 25.",
      "My work spans technical analysis, business rules, integrations, relational databases, SonarQube, automated testing, and agile delivery. In my own products, I turn the same engineering discipline toward privacy, performance, accessibility, and measurable quality.",
    ],
    statusLabel: "current_status",
    statusValue: "Mid-Level Full Stack Developer · Minsait - Indra Group (Spain)",
    locationLabel: "location",
    emailLabel: "email",
    languagesLabel: "languages",
  },
  skillsSection: {
    overline: "02 — STACK",
    title: "Technologies I use to deliver",
    categories: [
      { index: "01", title: "Backend", skills: sharedSkills.backend },
      { index: "02", title: "Frontend", skills: sharedSkills.frontend },
      { index: "03", title: "Data & infrastructure", skills: sharedSkills.data },
      { index: "04", title: "Quality & architecture", skills: sharedSkills.quality },
    ],
  },
  experienceSection: {
    overline: "03 — EXPERIENCE",
    title: "Enterprise scale. Product mindset.",
    detailsLabel: "View full scope",
    projectsLabel: "Selected enterprise systems",
    experiences: [
      {
        company: "Minsait - Indra Group (Spain)",
        role: "Mid-Level Full Stack Developer",
        period: "Mar 2025 — Present",
        location: "Goiânia, GO · Hybrid · Software Factory",
        summary:
          "Building and modernizing large-scale systems across public healthcare, traffic, and defense, moving confidently between legacy constraints and modern architectures.",
        summaryTags: ["Java", "Spring Boot", "Quarkus", "Angular", "Vue", "PostgreSQL", "Oracle"],
        highlights: [
          "Development and maintenance of large-scale enterprise solutions, covering technical analysis, estimation, implementation, testing, validation, and support.",
          "Implementation of APIs, business rules, validations, integrations, and data access with Java, Spring Boot, and Quarkus, plus interfaces in Angular, Vue, and TypeScript.",
          "Creation, analysis, and optimization of SQL queries in PostgreSQL and Oracle, with a focus on consistency, traceability, and performance.",
          "Simultaneous work across legacy and modern stacks, contributing to incremental improvements and technology migrations without compromising existing business rules.",
          "Responsible for running and monitoring SonarQube in the Brazilian Navy project, supporting the identification of vulnerabilities, code smells, duplication, and technical debt.",
          "Daily collaboration with analysts, QA, architects, DBAs, and technical managers in dailies, planning, reviews, and retrospectives.",
        ],
        projects: [
          {
            name: "SINGRA 2 / SINGRA21 Modernization",
            period: "Apr 13, 2026 — Present",
            client: "MAR-DAbM / Brazilian Navy",
            description:
              "Migration of the Angular 6/DWR frontend to Angular 21 and REST/JSON APIs with JWT Bearer authentication; backend upgrade to Java 25 and Spring Boot 4 while preserving service, business, and persistence layers. Node.js 20.19.0 and Oracle.",
          },
          {
            name: "Legacy SINGRA 2",
            period: "Sep 10, 2025 — Apr 10, 2026",
            client: "MAR-DAbM / Brazilian Navy",
            description:
              "Enhancement and support of enterprise modules with Java 21, Spring Boot 2.x, Angular 6.1.0, Node.js 10.16.0, and Oracle, plus DWR, Redis, Caffeine, and Guava.",
          },
          {
            name: "SIDOAR",
            period: "Apr 12, 2025 — Sep 10, 2025",
            client: "Goiás State Department of Health",
            description:
              "Integrated Organ Donation and Recipient Evaluation System. Java 11, Spring Boot, AngularJS, and PostgreSQL.",
          },
          {
            name: "SRIE",
            period: "Dec 10, 2025 — Feb 4, 2026",
            client: "Goiás State Department of Health",
            description:
              "Immunobiological Products System for People with Special Conditions. Java 21, Spring Boot, AngularJS, and PostgreSQL.",
          },
          {
            name: "BATEU — Citizen / Police Officer",
            period: "May 2, 2025 — Jun 3, 2025",
            client: "CELEPAR",
            description:
              "State Traffic Accident Registry for the Paraná Military Police. Java 21, Quarkus, Vue, and PostgreSQL.",
          },
          {
            name: "SISESG",
            period: "Mar 25, 2025 — Apr 12, 2025",
            client: "Goiás State Department of Health",
            description: "Health School System. Java 11, Spring Boot, AngularJS, and PostgreSQL.",
          },
        ],
      },
      {
        company: "DocNix",
        role: "Full Stack Developer",
        period: "Aug 2022 — Mar 2025",
        location: "Goiânia, GO · Hybrid · Internal promotion",
        summary:
          "Grew from Intern to Trainee and Junior Developer while evolving a quality-management platform used in real customer environments.",
        summaryTags: ["Java", "Spring Boot", "AngularJS", "Angular 17", "PostgreSQL", "Docker"],
        roles: [
          { title: "Junior Full Stack Developer", period: "Apr 2024 — Mar 2025" },
          { title: "Full Stack Developer Trainee", period: "Jun 2023 — Apr 2024" },
          { title: "Full Stack Developer Intern", period: "Aug 2022 — Jun 2023" },
        ],
        highlights: [
          "Promoted internally from Intern to Trainee and Junior Full Stack Developer, taking on greater autonomy and responsibility for more complex tasks.",
          "Development and enhancement of DocNix, an integrated quality management, organizational excellence, and business process platform, using Java, Spring Boot, AngularJS, and Angular 17.",
          "Implementation and maintenance of APIs, business rules, data processing, inter-module communication, reusable components, directives, and UX improvements.",
          "Creation and optimization of SQL queries in PostgreSQL, Oracle, and MySQL, as well as analysis and resolution of real customer incidents in staging and production.",
          "Contributed to software architecture, Docker environments, Git version control, and agile ceremonies, collaborating with cross-functional teams on product delivery and support.",
        ],
      },
      {
        company: "Fundação Jaime Câmara",
        role: "Technical Support",
        period: "Apr 2022 — Jul 2022",
        location: "Goiânia, GO · On-site",
        summary:
          "Built the operational foundation of my career by diagnosing incidents and keeping internal users productive.",
        summaryTags: ["Hardware", "Software", "Support"],
        highlights: [
          "On-site technical support, system installation and configuration, preventive maintenance, and hardware and software diagnostics.",
          "Remote support and incident resolution, reducing downtime for internal users.",
        ],
      },
    ],
  },
  projectsSection: {
    overline: "04 — PROJECTS",
    title: "Products with evidence, not promises",
    visitLabel: "Open project",
    projects: [
      {
        name: "Kyber Tech",
        url: "https://somoskyber.com.br",
        tagline: "Technology studio — websites, automation, and AI",
        badge: "Co-founder · 2026 — Present",
        description: [
          "Technology studio focused on websites, automation, artificial intelligence, and digital products.",
          "Direct involvement from needs discovery and solution definition through development, deployment, and consultative client relationship management.",
        ],
        stack: ["Web development", "Automation", "Applied AI", "Product"],
      },
      {
        name: "Compressify",
        url: "https://compressify-free.vercel.app",
        tagline: "Private in-browser image compression and conversion",
        badge: "−86% in a measured batch",
        description: [
          "Static, offline application for batch compression and conversion of JPG, PNG, WebP, and AVIF images. All processing runs client-side using Web Workers and WebAssembly; files never leave the browser.",
          "389 unit and integration tests, 115 E2E tests across Chromium, Firefox, and WebKit. Lighthouse: 95 performance and 100 accessibility, best practices, and SEO.",
        ],
        stack: ["Next.js 16", "React 19", "TypeScript 6", "WebAssembly", "Vitest", "Playwright"],
      },
      {
        name: "QR Code Studio",
        url: "https://qr-code-studio-free.vercel.app",
        tagline: "Static vector QR generator with automatic verification",
        badge: "Lighthouse 100 · a11y / best practices / SEO",
        description: [
          "Client-side product supporting nine content types, including Pix BR Code, SVG/PDF/PNG export, print-ready frames, customization, local history, and batch generation from CSV files.",
          "Every QR code is rasterized and decoded before export. Includes 369 unit and integration tests and 86 E2E tests.",
        ],
        stack: ["Next.js 16", "React 19", "TypeScript strict", "pdf-lib", "jsQR", "Vitest", "Playwright"],
      },
      {
        name: "FitJourneyAI",
        url: "https://github.com/Igorpcferreira/fitjourneyai",
        tagline: "AI-powered fitness tracking assistant on Telegram",
        badge: "Bachelor's thesis",
        description: [
          "Chatbot featuring onboarding, weight and body measurement tracking, workout completion logging, progress charts, summaries, and AI-generated workouts, including audio processing with Whisper.",
          "Architecture based on Clean Architecture and the Strategy Pattern.",
        ],
        stack: ["Java", "Spring Boot", "PostgreSQL", "Redis", "n8n", "OpenAI / Whisper", "Docker", "Telegram API"],
      },
    ],
  },
  educationSection: {
    overline: "05 — EDUCATION",
    title: "Foundations and continuous learning",
    certificationsLabel: "Selected courses and certifications",
    certificationLinkLabel: "Open certificate",
    education: {
      institution: "PUC Goiás · Pontifical Catholic University of Goiás",
      degree: "Bachelor of Science in Computer Science",
      period: "2021 — 2026",
      details: [
        "Bachelor's Thesis: FitJourneyAI, an AI-powered fitness tracking assistant on Telegram.",
        "Academic tutor during the 2021/2 semester, supporting students in programming and computational logic.",
        "Participated in problem-solving activities, including the Brazilian Informatics Olympiad and the SBC Programming Marathon.",
      ],
    },
    certifications: [
      {
        name: "RESTful APIs from Zero to AWS: Spring Boot 3, Java, and Docker",
        year: "2024",
        url: "https://drive.google.com/file/d/1I_0qBAw5l7c1iUxFI66WY0ezewstw4gl/view?usp=sharing",
      },
      {
        name: "Domain-Driven Design: Tactical Modeling and Patterns",
        year: "2023",
        url: "https://1drv.ms/b/c/c0cf5f24fce34ea4/EQ3_J5NVuxhLpqf-S-mfyKIB2BAqMgAre4-F3436KU49tA?e=0MC8fE",
      },
      {
        name: "Authentication and Keycloak",
        year: "2023",
        url: "https://drive.google.com/file/d/15TgJ-Iv17fVt9fufHfzXiDEOB14wjK0i/view?usp=sharing",
      },
      {
        name: "Docker for Developers: Docker Swarm and Kubernetes",
        year: "2023",
        url: "https://www.udemy.com/certificate/UC-4ce4af9f-70ba-4d63-9256-2e4befbf8ba7/",
      },
      {
        name: "TDD and Java: Automated Testing with JUnit",
        year: "2022",
        url: "https://cursos.alura.com.br/certificate/c7f7c285-6f34-4c4d-80cb-5a1d5b59e858",
      },
      { name: "Brazilian Data Protection Law (LGPD) Applied to Management and Quality", year: "2024" },
      { name: "ISO 9001 Quality Management Systems", year: "2024" },
    ],
  },
  contactSection: {
    overline: "06 — CONTACT",
    title: "Let’s build something that matters.",
    body:
      "Modernizing a critical system, shaping a new product, or solving a technical challenge that needs an end-to-end view? Message me on WhatsApp and tell me what you are building. You will talk directly to me.",
    whatsappCta: "start_on_whatsapp",
    emailCta: "send_email",
    whatsappMessage:
      "Hi Igor! I found your portfolio and would like to talk about a project or professional opportunity.",
    resumePrefix: "Prefer the full version?",
  },
  languages: [
    { name: "Portuguese", level: "Native" },
    { name: "English", level: "Advanced (C1)" },
  ],
  footer: {
    builtWith: "Built with Next.js, TypeScript, and a living neural network.",
    backToTop: "back_to_top",
  },
};

const pt: PortfolioContent = {
  localeName: "Português do Brasil",
  navigationLabel: "Navegação principal",
  skipLabel: "Pular para o conteúdo",
  menuOpenLabel: "Abrir menu",
  menuCloseLabel: "Fechar menu",
  profile: {
    name: "Igor de Castro",
    command: "whoami",
    headlineTag: "Full Stack Developer // Pleno",
    title: "Desenvolvedor Full Stack Pleno",
    tagline:
      "Modernizo sistemas de grande porte e construo produtos web rápidos, acessíveis e com qualidade mensurável.",
    location: "Goiânia, GO, Brasil",
    timezone: "UTC−3",
    resumePdf: "/Igor_de_Castro_Curr%C3%ADculo_pt-BR_2026.pdf",
    resumeDownloadLabel: "baixar_curriculo.pdf",
    links,
  },
  metrics: [
    { value: "4+", label: "anos em tecnologia" },
    { value: "10+", label: "sistemas entregues" },
    { value: "950+", label: "testes automatizados" },
  ],
  sections: [
    { id: "about", label: "Sobre", shortLabel: "sobre" },
    { id: "skills", label: "Competências", shortLabel: "stack" },
    { id: "experience", label: "Experiência", shortLabel: "exp" },
    { id: "projects", label: "Projetos", shortLabel: "projetos" },
    { id: "education", label: "Formação", shortLabel: "formação" },
    { id: "contact", label: "Contato", shortLabel: "contato" },
  ],
  hero: {
    projectsCta: "ver_projetos",
    contactCta: "contato",
    scrollLabel: "scroll",
    photoCaption: "igor_de_castro.png",
  },
  aboutSection: {
    overline: "01 — SOBRE",
    title: "O desenvolvedor por trás do código",
    terminalTitle: "cat sobre.txt",
    paragraphs: [
      "Desenvolvedor Full Stack Pleno com mais de quatro anos de experiência profissional em tecnologia e trajetória contínua em desenvolvimento de software desde 2022. Na Minsait, empresa do Grupo Indra, atuo em sistemas corporativos de grande porte para saúde pública, trânsito e defesa.",
      "Tenho experiência sólida com Java 11, 21 e 25, Spring Boot, Quarkus, Angular, Vue, TypeScript, PostgreSQL e Oracle. Atualmente participo da modernização do SINGRA 2 para a Marinha do Brasil, migrando uma arquitetura legada Angular 6 e DWR para Angular 21, APIs REST/JSON com JWT Bearer e Spring Boot 4 com Java 25.",
      "Minha atuação envolve análise técnica, regras de negócio, integrações, bancos relacionais, SonarQube, testes automatizados e entregas ágeis. Em produtos próprios, aplico a mesma disciplina de engenharia a privacidade, performance, acessibilidade e qualidade mensurável.",
    ],
    statusLabel: "status_atual",
    statusValue: "Desenvolvedor Full Stack Pleno · Minsait - Grupo Indra (Espanha)",
    locationLabel: "local",
    emailLabel: "e-mail",
    languagesLabel: "idiomas",
  },
  skillsSection: {
    overline: "02 — STACK",
    title: "Tecnologias que uso para entregar",
    categories: [
      { index: "01", title: "Backend", skills: sharedSkills.backend },
      { index: "02", title: "Frontend", skills: sharedSkills.frontend },
      { index: "03", title: "Dados e infraestrutura", skills: sharedSkills.data },
      {
        index: "04",
        title: "Qualidade e arquitetura",
        skills: [
          "SonarQube",
          "JUnit",
          "Vitest",
          "Playwright",
          "Testes unitários / integrados / E2E",
          "Clean Architecture",
          "DDD",
          "Strategy",
          "Agile / Scrum",
        ],
      },
    ],
  },
  experienceSection: {
    overline: "03 — EXPERIÊNCIA",
    title: "Escala corporativa. Visão de produto.",
    detailsLabel: "Ver escopo completo",
    projectsLabel: "Sistemas corporativos selecionados",
    experiences: [
      {
        company: "Minsait - Grupo Indra (Espanha)",
        role: "Desenvolvedor Full Stack Pleno",
        period: "mar 2025 — atual",
        location: "Goiânia, GO · Híbrido · Fábrica de software",
        summary:
          "Desenvolvimento e modernização de sistemas de grande porte para saúde pública, trânsito e defesa, transitando com segurança entre restrições legadas e arquiteturas modernas.",
        summaryTags: ["Java", "Spring Boot", "Quarkus", "Angular", "Vue", "PostgreSQL", "Oracle"],
        highlights: [
          "Desenvolvimento e manutenção de soluções corporativas de grande porte, atuando em análise técnica, estimativas, implementação, testes, homologação e sustentação.",
          "Implementação de APIs, regras de negócio, validações, integrações e acesso a dados com Java, Spring Boot e Quarkus, além de interfaces com Angular, Vue e TypeScript.",
          "Criação, análise e otimização de consultas SQL em PostgreSQL e Oracle, com foco em consistência, rastreabilidade e desempenho.",
          "Atuação simultânea em stacks legadas e modernas, contribuindo para evoluções incrementais e migrações tecnológicas sem perda das regras de negócio existentes.",
          "Responsável pela execução e acompanhamento do SonarQube no projeto da Marinha, apoiando a identificação de vulnerabilidades, code smells, duplicações e débito técnico.",
          "Colaboração diária com analistas, QA, arquitetos, DBA e gestão técnica em dailies, plannings, reviews e retrospectivas.",
        ],
        projects: [
          {
            name: "Modernização do SINGRA 2 / SINGRA21",
            period: "13/04/2026 — atual",
            client: "MAR-DAbM / Marinha do Brasil",
            description:
              "Migração do frontend Angular 6 com DWR para Angular 21 e APIs REST/JSON com JWT Bearer; atualização do backend para Java 25 e Spring Boot 4, preservando as camadas de serviço, negócio e persistência. Node.js 20.19.0 e Oracle.",
          },
          {
            name: "SINGRA 2 legado",
            period: "10/09/2025 — 10/04/2026",
            client: "MAR-DAbM / Marinha do Brasil",
            description:
              "Evolução e sustentação de módulos corporativos em Java 21, Spring Boot 2.x, Angular 6.1.0, Node.js 10.16.0 e Oracle, com DWR, Redis, Caffeine e Guava.",
          },
          {
            name: "SIDOAR",
            period: "12/04/2025 — 10/09/2025",
            client: "Secretaria de Estado da Saúde de Goiás",
            description:
              "Sistema Integrado de Doação de Órgãos e Avaliação de Receptores. Java 11, Spring Boot, AngularJS e PostgreSQL.",
          },
          {
            name: "SRIE",
            period: "10/12/2025 — 04/02/2026",
            client: "Secretaria de Estado da Saúde de Goiás",
            description:
              "Sistema de Imunológicos para Pessoas com Situações Especiais. Java 21, Spring Boot, AngularJS e PostgreSQL.",
          },
          {
            name: "BATEU — Cidadão / Policial",
            period: "02/05/2025 — 03/06/2025",
            client: "CELEPAR",
            description:
              "Registro Estadual de Sinistros de Trânsito para a Polícia Militar do Paraná. Java 21, Quarkus, Vue e PostgreSQL.",
          },
          {
            name: "SISESG",
            period: "25/03/2025 — 12/04/2025",
            client: "Secretaria de Estado da Saúde de Goiás",
            description: "Sistema da Escola de Saúde. Java 11, Spring Boot, AngularJS e PostgreSQL.",
          },
        ],
      },
      {
        company: "DocNix",
        role: "Desenvolvedor Full Stack",
        period: "ago 2022 — mar 2025",
        location: "Goiânia, GO · Híbrido · Progressão interna",
        summary:
          "Evolução de Estagiário a Trainee e Desenvolvedor Júnior enquanto contribuía para uma plataforma de gestão da qualidade usada em ambientes reais de clientes.",
        summaryTags: ["Java", "Spring Boot", "AngularJS", "Angular 17", "PostgreSQL", "Docker"],
        roles: [
          { title: "Desenvolvedor Full Stack Júnior", period: "abr 2024 — mar 2025" },
          { title: "Desenvolvedor Full Stack Trainee", period: "jun 2023 — abr 2024" },
          { title: "Desenvolvedor Full Stack Estagiário", period: "ago 2022 — jun 2023" },
        ],
        highlights: [
          "Progressão interna de Estagiário para Trainee e Desenvolvedor Full Stack Júnior, ampliando autonomia e responsabilidade em demandas de maior complexidade.",
          "Desenvolvimento e evolução do DocNix, plataforma de gestão integrada da qualidade, excelência organizacional e processos corporativos, com Java, Spring Boot, AngularJS e Angular 17.",
          "Implementação e manutenção de APIs, regras de negócio, processamento de dados, comunicação entre módulos, componentes reutilizáveis, diretivas e melhorias de UX.",
          "Criação e otimização de consultas SQL em PostgreSQL, Oracle e MySQL, além da análise e correção de incidentes reais de clientes em homologação e produção.",
          "Participação em arquitetura de software, ambientes Docker, versionamento Git e cerimônias ágeis, colaborando com equipes multidisciplinares na entrega e sustentação do produto.",
        ],
      },
      {
        company: "Fundação Jaime Câmara",
        role: "Suporte Técnico",
        period: "abr 2022 — jul 2022",
        location: "Goiânia, GO · Presencial",
        summary:
          "A base operacional da minha trajetória: diagnóstico de incidentes e continuidade do trabalho dos usuários internos.",
        summaryTags: ["Hardware", "Software", "Atendimento"],
        highlights: [
          "Suporte técnico presencial, instalação e configuração de sistemas, manutenção preventiva e diagnóstico de hardware e software.",
          "Atendimento remoto e resolução de incidentes, reduzindo indisponibilidades para os usuários internos.",
        ],
      },
    ],
  },
  projectsSection: {
    overline: "04 — PROJETOS",
    title: "Produtos com evidências, não promessas",
    visitLabel: "Abrir projeto",
    projects: [
      {
        name: "Kyber Tech",
        url: "https://somoskyber.com.br",
        tagline: "Estúdio de tecnologia — sites, automações e IA",
        badge: "Co-fundador · 2026 — atual",
        description: [
          "Estúdio de tecnologia com foco em sites, automações, inteligência artificial e produtos digitais.",
          "Atuação direta desde a descoberta da necessidade e definição da solução até desenvolvimento, publicação e relacionamento consultivo com o cliente.",
        ],
        stack: ["Desenvolvimento web", "Automação", "IA aplicada", "Produto"],
      },
      {
        name: "Compressify",
        url: "https://compressify-free.vercel.app",
        tagline: "Compressão e conversão privada de imagens no navegador",
        badge: "−86% em lote medido",
        description: [
          "Aplicação estática e offline para compressão e conversão em lote de JPG, PNG, WebP e AVIF. Todo o processamento ocorre no cliente com Web Workers e WebAssembly; os arquivos nunca saem do navegador.",
          "389 testes unitários e de integração, 115 testes E2E em Chromium, Firefox e WebKit. Lighthouse: 95 em performance e 100 em acessibilidade, boas práticas e SEO.",
        ],
        stack: ["Next.js 16", "React 19", "TypeScript 6", "WebAssembly", "Vitest", "Playwright"],
      },
      {
        name: "QR Code Studio",
        url: "https://qr-code-studio-free.vercel.app",
        tagline: "Gerador vetorial de QR Code com verificação automática",
        badge: "Lighthouse 100 · a11y / boas práticas / SEO",
        description: [
          "Produto client-side com nove tipos de conteúdo, incluindo Pix BR Code, exportação SVG/PDF/PNG, molduras para impressão, personalização, histórico local e geração em lote por CSV.",
          "Cada QR é rasterizado e decodificado antes da exportação. Possui 369 testes unitários e de integração e 86 testes E2E.",
        ],
        stack: ["Next.js 16", "React 19", "TypeScript strict", "pdf-lib", "jsQR", "Vitest", "Playwright"],
      },
      {
        name: "FitJourneyAI",
        url: "https://github.com/Igorpcferreira/fitjourneyai",
        tagline: "Assistente de acompanhamento físico com IA no Telegram",
        badge: "TCC",
        description: [
          "Chatbot com onboarding, registro de peso e medidas, confirmação de treinos, gráficos de progresso, resumos e geração de treinos com IA, incluindo processamento de áudio com Whisper.",
          "Arquitetura baseada em Clean Architecture e Strategy Pattern.",
        ],
        stack: ["Java", "Spring Boot", "PostgreSQL", "Redis", "n8n", "OpenAI / Whisper", "Docker", "Telegram API"],
      },
    ],
  },
  educationSection: {
    overline: "05 — FORMAÇÃO",
    title: "Fundamentos e evolução contínua",
    certificationsLabel: "Cursos e certificações selecionados",
    certificationLinkLabel: "Abrir certificado",
    education: {
      institution: "PUC Goiás · Pontifícia Universidade Católica de Goiás",
      degree: "Bacharelado em Ciência da Computação",
      period: "2021 — 2026",
      details: [
        "TCC: FitJourneyAI, assistente de acompanhamento físico com IA no Telegram.",
        "Tutor acadêmico no semestre 2021/2, apoiando estudantes em programação e lógica computacional.",
        "Participação em atividades de resolução de problemas, incluindo Olimpíada Brasileira de Informática e Maratona SBC de Programação.",
      ],
    },
    certifications: [
      {
        name: "REST APIs RESTful do 0 à AWS: Spring Boot 3, Java e Docker",
        year: "2024",
        url: "https://drive.google.com/file/d/1I_0qBAw5l7c1iUxFI66WY0ezewstw4gl/view?usp=sharing",
      },
      {
        name: "Domain Driven Design: Modelagem Tática e Patterns",
        year: "2023",
        url: "https://1drv.ms/b/c/c0cf5f24fce34ea4/EQ3_J5NVuxhLpqf-S-mfyKIB2BAqMgAre4-F3436KU49tA?e=0MC8fE",
      },
      {
        name: "Autenticação e Keycloak",
        year: "2023",
        url: "https://drive.google.com/file/d/15TgJ-Iv17fVt9fufHfzXiDEOB14wjK0i/view?usp=sharing",
      },
      {
        name: "Docker for Developers: Docker Swarm e Kubernetes",
        year: "2023",
        url: "https://www.udemy.com/certificate/UC-4ce4af9f-70ba-4d63-9256-2e4befbf8ba7/",
      },
      {
        name: "TDD e Java: testes automatizados com JUnit",
        year: "2022",
        url: "https://cursos.alura.com.br/certificate/c7f7c285-6f34-4c4d-80cb-5a1d5b59e858",
      },
      { name: "LGPD aplicada à gestão e qualidade", year: "2024" },
      { name: "Sistemas de Gestão da Qualidade ISO 9001", year: "2024" },
    ],
  },
  contactSection: {
    overline: "06 — CONTATO",
    title: "Vamos construir algo que importa.",
    body:
      "Tem um sistema crítico para modernizar, um produto para tirar do papel ou um desafio técnico que pede visão de ponta a ponta? Me chame no WhatsApp e conte o que você está construindo. A conversa é direto comigo.",
    whatsappCta: "conversar_no_whatsapp",
    emailCta: "enviar_email",
    whatsappMessage:
      "Olá, Igor! Encontrei seu portfólio e gostaria de conversar sobre um projeto ou oportunidade profissional.",
    resumePrefix: "Prefere a versão completa?",
  },
  languages: [
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "Avançado (C1)" },
  ],
  footer: {
    builtWith: "Feito com Next.js, TypeScript e uma rede neural viva.",
    backToTop: "voltar_ao_topo",
  },
};

export const content: Record<Locale, PortfolioContent> = {
  en,
  "pt-BR": pt,
};
