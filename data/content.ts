export type Locale = "en" | "pt-BR";

export interface SocialLinks {
  email: string;
  phone: string;
  whatsapp: string;
  linkedin: string;
  github: string;
  portfolio: string;
  kyber: string;
  kyberPricing: string;
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
  image?: string;
  video?: string;
  desktopOnly?: boolean;
  name: string;
  url: string;
  tagline: string;
  description: string[];
  stack: string[];
  badge?: string;
}

export interface Service {
  index: string;
  title: string;
  description: string;
  items: string[];
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
  servicesSection: {
    overline: string;
    title: string;
    lead: string;
    services: Service[];
    studioLabel: string;
    studioName: string;
    studioBody: string;
    primaryCta: string;
    secondaryCta: string;
    note: string;
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
    businessPrefix: string;
    businessCta: string;
  };
  languages: Language[];
  footer: {
    builtWith: string;
    backToTop: string;
  };
}

const links: SocialLinks = {
  email: "igorpcferreira@gmail.com",
  phone: "+55 (62) 8419-6646",
  whatsapp: "https://wa.me/556284196646",
  linkedin: "https://www.linkedin.com/in/igor-cferreira",
  github: "https://github.com/Igorpcferreira",
  portfolio: "https://igor-de-castro.vercel.app",
  kyber: "https://somoskyber.com.br",
  kyberPricing: "https://somoskyber.com.br/precos",
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
    { id: "services", label: "Services", shortLabel: "services" },
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
      "I bring solid experience across Java 11, 21 and 25, Spring Boot, Quarkus, Angular, Vue, TypeScript, PostgreSQL, and Oracle. I currently contribute to the modernization of SINGRA 2 for the Brazilian Navy, migrating a legacy frontend architecture to Angular 21 and REST/JSON APIs with JWT Bearer authentication, and upgrading the backend to Spring Boot 4 with Java 25.",
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
          "Static code analysis with SonarQube on the Brazilian Navy project, supporting continuous improvement of code quality and maintainability.",
          "Daily collaboration with analysts, QA, architects, DBAs, and technical managers in dailies, planning, reviews, and retrospectives.",
        ],
        projects: [
          {
            name: "SINGRA 2 / SINGRA21 Modernization",
            period: "Apr 2026 — Present",
            client: "Brazilian Navy",
            description:
              "Migration of a legacy frontend architecture to Angular 21 and REST/JSON APIs with JWT Bearer authentication; backend upgrade to Java 25 and Spring Boot 4 while preserving the service, business, and persistence layers. Oracle.",
          },
          {
            name: "Legacy SINGRA 2",
            period: "Sep 2025 — Apr 2026",
            client: "Brazilian Navy",
            description:
              "Enhancement and support of enterprise modules on a legacy Java, Spring Boot, and Angular stack with Oracle, including caching and session-handling layers.",
          },
          {
            name: "SIDOAR",
            period: "Apr 2025 — Sep 2025",
            client: "Goiás State Department of Health",
            description:
              "Integrated Organ Donation and Recipient Evaluation System. Java 11, Spring Boot, AngularJS, and PostgreSQL.",
          },
          {
            name: "SRIE",
            period: "Dec 2025 — Feb 2026",
            client: "Goiás State Department of Health",
            description:
              "Immunobiological Products System for People with Special Conditions. Java 21, Spring Boot, AngularJS, and PostgreSQL.",
          },
          {
            name: "BATEU — Citizen / Police Officer",
            period: "May 2025 — Jun 2025",
            client: "CELEPAR",
            description:
              "State Traffic Accident Registry for the Paraná Military Police. Java 21, Quarkus, Vue, and PostgreSQL.",
          },
          {
            name: "SISESG",
            period: "Mar 2025 — Apr 2025",
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
  "name": "Aura",
  "url": "https://aura-joalheria-portfolio.vercel.app/",
  "image": "/links/assets/projects/aura.webp",
  "video": "https://media.somoskyber.com.br/portfolio/aura/aura-v1.mp4",
  "tagline": "Concept jewelry experience with a 3D configurator",
  "badge": "Kyber concept project",
  "description": [
    "An original study for a fictional jewelry brand, with editorial art direction and an interactive ring to explore gemstones, metals, and the structure of the piece.",
    "Photography and opening film created with AI. Includes alternatives for reduced motion and unavailable WebGL."
  ],
  "stack": [
    "React",
    "Three.js",
    "WebGL",
    "Vite"
  ]
},
{
  "name": "BRUMA",
  "url": "https://bruma-portfolio.vercel.app",
  "image": "/links/assets/projects/bruma.webp",
  "video": "https://media.somoskyber.com.br/portfolio/bruma/bruma-v1.mp4",
  "tagline": "Interactive experience for a fictional gin brand",
  "badge": "Kyber concept project",
  "description": [
    "A concept study featuring a real-time 3D bottle and floating botanicals, exploring visual direction and interaction to present a fictional product."
  ],
  "stack": [
    "3D",
    "WebGL"
  ]
},
{
  "name": "Casa Umbra",
  "url": "https://casa-umbra-portfolio.vercel.app",
  "image": "/links/assets/projects/casa-umbra.webp",
  "video": "https://media.somoskyber.com.br/portfolio/casa-umbra/casa-umbra-v1.mp4",
  "desktopOnly": true,
  "tagline": "Concept architecture in a scroll-driven tour",
  "badge": "Kyber concept project",
  "description": [
    "A fictional desert residence presented in eight scenes, with transitions and an amber light guiding the tour. Images created with AI."
  ],
  "stack": [
    "HTML",
    "CSS",
    "JavaScript"
  ]
},
{
  "name": "André Mei",
  "url": "https://www.andremei.com.br",
  "image": "/links/assets/projects/andre-mei.webp",
  "video": "https://media.somoskyber.com.br/portfolio/andre-mei/andre-mei-v1.mp4",
  "tagline": "Surfing, ultramarathons, and partnerships in a personal website",
  "description": [
    "An athlete website bringing together his story, surf gallery, destinations, and partnership contact. The opening features interactive WebGL water and automatically updated channel videos."
  ],
  "stack": [
    "WebGL",
    "Responsive design"
  ]
},
{
  "name": "Igor de Castro · Model",
  "url": "https://igordecastro.com.br/modelo/",
  "image": "/links/assets/projects/igor-de-castro-modelo.webp",
  "tagline": "Editorial, streetwear, and portrait portfolio",
  "badge": "Personal project",
  "description": [
    "A modeling portfolio with selected photography, gallery navigation, and a personal presentation in a responsive editorial interface."
  ],
  "stack": [
    "HTML",
    "CSS",
    "JavaScript"
  ]
},
      {
        name: "Kyber Tech",
        image: "/links/assets/projects/kyber.webp",
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
        name: "Manu's Barbearia",
        image: "/links/assets/projects/manusbarbearia.webp",
        video: "https://media.somoskyber.com.br/portfolio/manus-barbearia/manus-barbearia-v1.mp4",
        url: "https://manusbarbearia.com.br",
        tagline: "Barbershop site with subscription plans and booking",
        badge: "Kyber Tech client",
        description: [
          "Single-page site for a barbershop in Goiânia: nine services, four subscription plans compared side by side, salon gallery, and booking that goes straight to Booksy.",
          "Astro islands architecture: React only where interaction is needed, such as the open/closed badge, the gallery lightbox, and the animated counters. The rest ships as static HTML.",
        ],
        stack: ["Astro 7", "React 19", "TypeScript", "Tailwind CSS 4", "shadcn/ui", "Vercel"],
      },
      {
        name: "KOUNTING Streetwear",
        image: "/links/assets/projects/kountingstreetwear.webp",
        video: "https://media.somoskyber.com.br/portfolio/kounting-streetwear/kounting-streetwear-v1.mp4",
        url: "https://www.kountingstreetwear.com.br",
        tagline: "Streetwear catalog with orders closed on WhatsApp",
        badge: "My own brand",
        description: [
          "Storefront for KOUNTING, my own streetwear label of oversized tees in limited drops. Catalog with category filter, photos per color, sizing guide, and a button that reaches WhatsApp already carrying the piece, color, and size.",
          "Statically exported Next.js, no transactional checkout by design. Hand-written CSS, no UI framework, and self-hosted fonts.",
        ],
        stack: ["Next.js 14", "React 18", "Static export", "anime.js", "Vercel"],
      },
      {
        name: "Gabriela Camargo",
        image: "/links/assets/projects/gabriela-camargo.webp",
        video: "https://media.somoskyber.com.br/portfolio/gabriela-camargo/gabriela-camargo-v1.mp4",
        url: "https://gabrielacamargofoto.com.br",
        tagline: "Photographer portfolio with lightbox gallery",
        badge: "Zero dependencies",
        description: [
          "Site for a photographer working in Goiânia since 2016: a gallery that enlarges photo by photo, the two session formats and what each one includes, weddings by quote, and WhatsApp in every section.",
          "Pure static HTML and CSS, no build step and no dependencies. The only JavaScript is the gallery lightbox, written by hand. Self-hosted fonts and images served as WebP.",
        ],
        stack: ["HTML", "CSS", "Vanilla JavaScript", "WebP", "Vercel"],
      },
      {
        name: "Compressify",
        image: "/links/assets/projects/compressify.webp",
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
        image: "/links/assets/projects/qr-code-studio.webp",
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
  servicesSection: {
    overline: "05 — FOR YOUR BUSINESS",
    title: "Need a website or automation?",
    lead: "Beyond my day job, I run a technology studio with another developer. If your business needs a site, an automation, or applied AI, this is where that work happens.",
    services: [
      {
        index: "01",
        title: "Website and catalog",
        description:
          "An address of your own, built for the phone, where people find you and reach you without going through Instagram DMs.",
        items: ["Institutional site", "Product catalog", "Portfolio and gallery", "Own domain"],
      },
      {
        index: "02",
        title: "Automation and integrations",
        description:
          "Repetitive work that today runs by hand: messages, scheduling, spreadsheets, and systems that do not talk to each other.",
        items: ["WhatsApp flows", "Booking and forms", "API integrations", "Internal panels"],
      },
      {
        index: "03",
        title: "Applied AI",
        description:
          "AI put to work on a real problem in your operation, not as a demo. Chat assistants, classification, and content support.",
        items: ["Service assistants", "Content generation", "Data processing", "Custom chatbots"],
      },
    ],
    studioLabel: "studio",
    studioName: "Kyber Tech",
    studioBody:
      "Websites and automation for small businesses, on a monthly subscription. Two developers, direct contact, no agency in between.",
    primaryCta: "open_kyber_tech",
    secondaryCta: "see_pricing",
    note: "Talking to Kyber reaches me or my partner. Either way you talk to the developer who builds it.",
  },
  educationSection: {
    overline: "06 — EDUCATION",
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
    overline: "07 — CONTACT",
    title: "Let’s build something that matters.",
    body:
      "Modernizing a critical system, shaping a new product, or solving a technical challenge that needs an end-to-end view? Message me on WhatsApp and tell me what you are building. You will talk directly to me.",
    whatsappCta: "start_on_whatsapp",
    emailCta: "send_email",
    whatsappMessage:
      "Hi Igor! I found your portfolio and would like to talk about a project or professional opportunity.",
    resumePrefix: "Prefer the full version?",
    businessPrefix: "Looking for a website or an automation for your business?",
    businessCta: "talk_to_kyber_tech",
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
    resumePdf: "/Igor_de_Castro_Resume_pt-BR_2026.pdf",
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
    { id: "services", label: "Serviços", shortLabel: "serviços" },
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
      "Tenho experiência sólida com Java 11, 21 e 25, Spring Boot, Quarkus, Angular, Vue, TypeScript, PostgreSQL e Oracle. Atualmente participo da modernização do SINGRA 2 para a Marinha do Brasil, migrando uma arquitetura frontend legada para Angular 21 e APIs REST/JSON com JWT Bearer, e atualizando o backend para Spring Boot 4 com Java 25.",
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
          "Análise estática de código com SonarQube no projeto da Marinha, apoiando a evolução contínua da qualidade e da manutenibilidade.",
          "Colaboração diária com analistas, QA, arquitetos, DBA e gestão técnica em dailies, plannings, reviews e retrospectivas.",
        ],
        projects: [
          {
            name: "Modernização do SINGRA 2 / SINGRA21",
            period: "abr 2026 — atual",
            client: "Marinha do Brasil",
            description:
              "Migração de uma arquitetura frontend legada para Angular 21 e APIs REST/JSON com JWT Bearer; atualização do backend para Java 25 e Spring Boot 4, preservando as camadas de serviço, negócio e persistência. Oracle.",
          },
          {
            name: "SINGRA 2 legado",
            period: "set 2025 — abr 2026",
            client: "Marinha do Brasil",
            description:
              "Evolução e sustentação de módulos corporativos em stack legada Java, Spring Boot e Angular com Oracle, incluindo camadas de cache e de sessão.",
          },
          {
            name: "SIDOAR",
            period: "abr 2025 — set 2025",
            client: "Secretaria de Estado da Saúde de Goiás",
            description:
              "Sistema Integrado de Doação de Órgãos e Avaliação de Receptores. Java 11, Spring Boot, AngularJS e PostgreSQL.",
          },
          {
            name: "SRIE",
            period: "dez 2025 — fev 2026",
            client: "Secretaria de Estado da Saúde de Goiás",
            description:
              "Sistema de Imunológicos para Pessoas com Situações Especiais. Java 21, Spring Boot, AngularJS e PostgreSQL.",
          },
          {
            name: "BATEU — Cidadão / Policial",
            period: "mai 2025 — jun 2025",
            client: "CELEPAR",
            description:
              "Registro Estadual de Sinistros de Trânsito para a Polícia Militar do Paraná. Java 21, Quarkus, Vue e PostgreSQL.",
          },
          {
            name: "SISESG",
            period: "mar 2025 — abr 2025",
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
  "name": "Aura",
  "url": "https://aura-joalheria-portfolio.vercel.app/",
  "image": "/links/assets/projects/aura.webp",
  "video": "https://media.somoskyber.com.br/portfolio/aura/aura-v1.mp4",
  "tagline": "Joalheria conceitual com configurador 3D",
  "badge": "Projeto conceitual Kyber",
  "description": [
    "Estudo autoral para uma joalheria fictícia, com direção de arte editorial e um anel interativo para explorar pedras, metais e a estrutura da peça.",
    "Fotografias e filme de abertura produzidos com IA. Inclui alternativas para movimento reduzido e ausência de WebGL."
  ],
  "stack": [
    "React",
    "Three.js",
    "WebGL",
    "Vite"
  ]
},
{
  "name": "BRUMA",
  "url": "https://bruma-portfolio.vercel.app",
  "image": "/links/assets/projects/bruma.webp",
  "video": "https://media.somoskyber.com.br/portfolio/bruma/bruma-v1.mp4",
  "tagline": "Experiência interativa para uma marca fictícia de gin",
  "badge": "Projeto conceitual Kyber",
  "description": [
    "Estudo conceitual com frasco em 3D em tempo real e botânicos flutuantes. Explora direção visual e interação para apresentar um produto fictício."
  ],
  "stack": [
    "3D",
    "WebGL"
  ]
},
{
  "name": "Casa Umbra",
  "url": "https://casa-umbra-portfolio.vercel.app",
  "image": "/links/assets/projects/casa-umbra.webp",
  "video": "https://media.somoskyber.com.br/portfolio/casa-umbra/casa-umbra-v1.mp4",
  "desktopOnly": true,
  "tagline": "Arquitetura conceitual em uma visita guiada pelo scroll",
  "badge": "Projeto conceitual Kyber",
  "description": [
    "Residência fictícia no deserto apresentada em oito cenas, com transições e uma linha de luz âmbar que acompanha a visita. Imagens produzidas com IA."
  ],
  "stack": [
    "HTML",
    "CSS",
    "JavaScript"
  ]
},
{
  "name": "André Mei",
  "url": "https://www.andremei.com.br",
  "image": "/links/assets/projects/andre-mei.webp",
  "video": "https://media.somoskyber.com.br/portfolio/andre-mei/andre-mei-v1.mp4",
  "tagline": "Surf, ultramaratona e parcerias em um site pessoal",
  "description": [
    "Site de atleta que reúne trajetória, galeria de surf, destinos e contato para parcerias. A abertura traz água em WebGL interativa e os vídeos do canal são atualizados automaticamente."
  ],
  "stack": [
    "WebGL",
    "Design responsivo"
  ]
},
{
  "name": "Igor de Castro · Modelo",
  "url": "https://igordecastro.com.br/modelo/",
  "image": "/links/assets/projects/igor-de-castro-modelo.webp",
  "tagline": "Portfólio editorial, streetwear e retrato",
  "badge": "Projeto pessoal",
  "description": [
    "Portfólio de modelo com seleção de fotografias, navegação por galerias e apresentação pessoal em uma interface editorial responsiva."
  ],
  "stack": [
    "HTML",
    "CSS",
    "JavaScript"
  ]
},
      {
        name: "Kyber Tech",
        image: "/links/assets/projects/kyber.webp",
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
        name: "Manu's Barbearia",
        image: "/links/assets/projects/manusbarbearia.webp",
        video: "https://media.somoskyber.com.br/portfolio/manus-barbearia/manus-barbearia-v1.mp4",
        url: "https://manusbarbearia.com.br",
        tagline: "Site de barbearia com planos de assinatura e agendamento",
        badge: "Cliente Kyber Tech",
        description: [
          "Site de uma barbearia em Goiânia: os nove serviços, os quatro planos de assinatura comparados lado a lado, galeria do salão e agendamento direto no Booksy.",
          "Arquitetura de ilhas com Astro: React só onde precisa de interação, como o selo de aberto/fechado, o lightbox da galeria e os contadores animados. O resto vai como HTML estático.",
        ],
        stack: ["Astro 7", "React 19", "TypeScript", "Tailwind CSS 4", "shadcn/ui", "Vercel"],
      },
      {
        name: "KOUNTING Streetwear",
        image: "/links/assets/projects/kountingstreetwear.webp",
        video: "https://media.somoskyber.com.br/portfolio/kounting-streetwear/kounting-streetwear-v1.mp4",
        url: "https://www.kountingstreetwear.com.br",
        tagline: "Vitrine de streetwear com pedido fechado no WhatsApp",
        badge: "Marca própria",
        description: [
          "Vitrine da KOUNTING, minha marca de streetwear com camisetas oversized autorais em drops limitados. Catálogo com filtro por categoria, fotos por cor, guia de medidas e um botão que chega no WhatsApp já com a peça, a cor e o tamanho.",
          "Next.js com exportação estática, sem checkout transacional por decisão de projeto. CSS escrito à mão, sem framework de UI, e fontes self-hospedadas.",
        ],
        stack: ["Next.js 14", "React 18", "Exportação estática", "anime.js", "Vercel"],
      },
      {
        name: "Gabriela Camargo",
        image: "/links/assets/projects/gabriela-camargo.webp",
        video: "https://media.somoskyber.com.br/portfolio/gabriela-camargo/gabriela-camargo-v1.mp4",
        url: "https://gabrielacamargofoto.com.br",
        tagline: "Portfólio de fotografia com galeria em lightbox",
        badge: "Zero dependências",
        description: [
          "Site de uma fotógrafa que trabalha em Goiânia desde 2016: galeria que amplia foto a foto, os dois formatos de ensaio com o que cada um inclui, casamento sob orçamento e WhatsApp em toda seção.",
          "HTML e CSS estáticos puros, sem build e sem dependências. O único JavaScript é o lightbox da galeria, escrito à mão. Fontes self-hospedadas e imagens em WebP.",
        ],
        stack: ["HTML", "CSS", "JavaScript puro", "WebP", "Vercel"],
      },
      {
        name: "Compressify",
        image: "/links/assets/projects/compressify.webp",
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
        image: "/links/assets/projects/qr-code-studio.webp",
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
  servicesSection: {
    overline: "05 — PARA A SUA EMPRESA",
    title: "Precisa de um site ou de uma automação?",
    lead: "Além do meu trabalho como desenvolvedor, toco um estúdio de tecnologia com outro dev. Se o seu negócio precisa de site, automação ou IA aplicada, é ali que esse trabalho acontece.",
    services: [
      {
        index: "01",
        title: "Site e catálogo",
        description:
          "Um endereço próprio, feito para o celular, onde as pessoas te encontram e falam com você sem depender do Direct.",
        items: ["Site institucional", "Catálogo de produtos", "Portfólio e galeria", "Domínio próprio"],
      },
      {
        index: "02",
        title: "Automação e integrações",
        description:
          "O trabalho repetitivo que hoje é feito na mão: mensagem, agendamento, planilha e sistema que não conversa com outro.",
        items: ["Fluxos de WhatsApp", "Agendamento e formulários", "Integração com APIs", "Painéis internos"],
      },
      {
        index: "03",
        title: "IA aplicada",
        description:
          "IA resolvendo um problema real da operação, não como demonstração. Assistentes de atendimento, classificação e apoio a conteúdo.",
        items: ["Assistentes de atendimento", "Geração de conteúdo", "Processamento de dados", "Chatbots sob medida"],
      },
    ],
    studioLabel: "estúdio",
    studioName: "Kyber Tech",
    studioBody:
      "Site e automação para pequenos negócios, por assinatura mensal. Dois desenvolvedores, contato direto, sem agência no meio.",
    primaryCta: "conhecer_a_kyber",
    secondaryCta: "ver_os_planos",
    note: "Falar com a Kyber cai comigo ou com meu sócio. De um jeito ou de outro, você fala com quem desenvolve.",
  },
  educationSection: {
    overline: "06 — FORMAÇÃO",
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
    overline: "07 — CONTATO",
    title: "Vamos construir algo que importa.",
    body:
      "Tem um sistema crítico para modernizar, um produto para tirar do papel ou um desafio técnico que pede visão de ponta a ponta? Me chame no WhatsApp e conte o que você está construindo. A conversa é direto comigo.",
    whatsappCta: "conversar_no_whatsapp",
    emailCta: "enviar_email",
    whatsappMessage:
      "Olá, Igor! Encontrei seu portfólio e gostaria de conversar sobre um projeto ou oportunidade profissional.",
    resumePrefix: "Prefere a versão completa?",
    businessPrefix: "Procurando um site ou uma automação para o seu negócio?",
    businessCta: "falar_com_a_kyber_tech",
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
