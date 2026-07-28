/**
 * Conteúdo central do portfólio, separado da UI.
 * Todo texto visível no site sai daqui — pra editar conteúdo, mexa só neste arquivo.
 * Fonte: Currículo Igor de Castro 2026.
 */

export interface SocialLinks {
  email: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

export interface Profile {
  name: string;
  headlineTag: string;
  title: string;
  tagline: string;
  location: string;
  resumePdf: string;
  links: SocialLinks;
}

export interface SkillCategory {
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
  summaryTags: string[];
  highlights: string[];
  /** Progressão interna de cargos (ex.: estagiário → júnior). */
  roles?: Role[];
  /** Projetos selecionados dentro da empresa. */
  projects?: CompanyProject[];
}

export interface Project {
  name: string;
  url: string;
  tagline: string;
  description: string[];
  stack: string[];
  /** Destaque curto exibido no card (ex.: papel ou métrica). */
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
  certificateUrl?: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface SectionLink {
  id: string;
  label: string;
}

export const profile: Profile = {
  name: "Igor de Castro",
  headlineTag: "Full Stack Developer",
  title: "Desenvolvedor Full Stack Pleno",
  tagline:
    "Modernizo sistemas de grande porte e construo produtos web rápidos, acessíveis e com qualidade mensurável.",
  location: "Goiânia, GO, Brasil",
  resumePdf: "/curriculo-igor-de-castro.pdf",
  links: {
    email: "igorpcferreira@gmail.com",
    linkedin: "https://www.linkedin.com/in/igor-cferreira",
    github: "https://github.com/Igorpcferreira",
    portfolio: "https://igor-ferreira-portfolio.vercel.app",
  },
};

export const about: string[] = [
  "Desenvolvedor Full Stack Pleno com mais de quatro anos de experiência profissional em tecnologia e trajetória contínua em desenvolvimento de software desde 2022. Atualmente atuo na Minsait, empresa do Grupo Indra, em sistemas corporativos de grande porte para saúde pública, trânsito e defesa.",
  "Experiência sólida no ecossistema Java (11, 21 e 25), Spring Boot, Quarkus, Angular (AngularJS, 6 e 21), Vue, TypeScript, PostgreSQL e Oracle. Participo da modernização do SINGRA 2, migrando uma arquitetura legada baseada em Angular 6 e DWR para Angular 21, APIs REST/JSON com JWT Bearer e Spring Boot 4 com Java 25.",
  "Atuação com SonarQube, testes automatizados, análise técnica, regras de negócio, integrações, bancos relacionais e metodologias ágeis. Em projetos próprios, desenvolvo produtos web orientados a privacidade, performance, acessibilidade e qualidade mensurável.",
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    skills: [
      "Java 11/21/25",
      "Spring Boot 2/3/4",
      "Quarkus",
      "APIs REST",
      "JPA/Hibernate",
      "Maven",
      "MapStruct",
      "Node.js",
      "NestJS",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "AngularJS",
      "Angular 6/21",
      "React 19",
      "Next.js 16",
      "Vue 2",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Dados e infraestrutura",
    skills: [
      "PostgreSQL",
      "Oracle",
      "SQL Server",
      "Redis",
      "Docker",
      "Flyway",
      "Git",
      "Bitbucket/GitLab",
      "Jenkins",
      "Bamboo",
    ],
  },
  {
    title: "Qualidade e arquitetura",
    skills: [
      "SonarQube",
      "JUnit",
      "Vitest",
      "Playwright",
      "Testes unitários/integrados/E2E",
      "Clean Architecture",
      "DDD",
      "Strategy",
      "Agile/Scrum",
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "Minsait (Grupo Indra)",
    role: "Desenvolvedor Full Stack Pleno",
    period: "mar 2025 — atual",
    location: "Goiânia, GO · Híbrido",
    summaryTags: ["Java", "Spring Boot", "Quarkus", "Angular", "Vue", "PostgreSQL", "Oracle"],
    highlights: [
      "Desenvolvimento e manutenção de soluções corporativas de grande porte em fábrica de software: análise técnica, estimativas, implementação, testes, homologação e sustentação.",
      "APIs, regras de negócio, validações, integrações e acesso a dados com Java, Spring Boot e Quarkus, além de interfaces com Angular, Vue e TypeScript.",
      "Criação, análise e otimização de consultas SQL em PostgreSQL e Oracle, com foco em consistência, rastreabilidade e desempenho.",
      "Atuação simultânea em stacks legadas e modernas, contribuindo para migrações tecnológicas sem perda das regras de negócio existentes.",
      "Responsável pela execução e acompanhamento do SonarQube no projeto da Marinha: vulnerabilidades, code smells, duplicações e débito técnico.",
      "Colaboração diária com analistas, QA, arquitetos, DBA e gestão técnica em cerimônias ágeis.",
    ],
    projects: [
      {
        name: "Modernização do SINGRA 2 / SINGRA21",
        period: "abr 2026 — atual",
        client: "MAR-DAbM / Marinha do Brasil",
        description:
          "Migração do frontend Angular 6 com DWR para Angular 21 e APIs REST/JSON com JWT Bearer; backend atualizado para Java 25 e Spring Boot 4, preservando as camadas de serviço, negócio e persistência. Node.js 20 e Oracle.",
      },
      {
        name: "SINGRA 2 legado",
        period: "set 2025 — abr 2026",
        client: "MAR-DAbM / Marinha do Brasil",
        description:
          "Evolução e sustentação de módulos corporativos em Java 21, Spring Boot 2.x, Angular 6 e Oracle, com comunicação DWR, Redis, Caffeine e Guava.",
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
        name: "BATEU — Cidadão/Policial",
        period: "mai 2025 — jun 2025",
        client: "CELEPAR",
        description:
          "Registro Estadual de Sinistros de Trânsito. Java 21, Quarkus, Vue e PostgreSQL.",
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
    location: "Goiânia, GO · Híbrido",
    summaryTags: ["Java", "Spring Boot", "AngularJS", "Angular 17", "PostgreSQL", "Docker"],
    roles: [
      { title: "Desenvolvedor Full Stack Júnior", period: "abr 2024 — mar 2025" },
      { title: "Desenvolvedor Full Stack Trainee", period: "jun 2023 — abr 2024" },
      { title: "Desenvolvedor Full Stack Estagiário", period: "ago 2022 — jun 2023" },
    ],
    highlights: [
      "Progressão interna de Estagiário para Trainee e Júnior, ampliando autonomia e responsabilidade em demandas de maior complexidade.",
      "Desenvolvimento e evolução do DocNix, plataforma de gestão integrada da qualidade e processos corporativos, com Java, Spring Boot, AngularJS e Angular 17.",
      "Implementação e manutenção de APIs, regras de negócio, processamento de dados, componentes reutilizáveis, diretivas e melhorias de UX.",
      "Criação e otimização de consultas SQL em PostgreSQL, Oracle e MySQL, além da análise e correção de incidentes reais de clientes em homologação e produção.",
      "Participação em arquitetura de software, ambientes Docker, versionamento Git e cerimônias ágeis com equipes multidisciplinares.",
    ],
  },
  {
    company: "Fundação Jaime Câmara",
    role: "Suporte Técnico",
    period: "abr 2022 — jul 2022",
    location: "Goiânia, GO · Presencial",
    summaryTags: ["Hardware", "Software", "Atendimento"],
    highlights: [
      "Suporte técnico presencial, instalação e configuração de sistemas, manutenção preventiva e diagnóstico de hardware e software.",
      "Atendimento remoto e resolução de incidentes, reduzindo indisponibilidades para os usuários internos.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Kyber Tech",
    url: "https://somoskyber.com.br",
    tagline: "Estúdio de tecnologia — sites, automações e IA",
    badge: "Co-fundador",
    description: [
      "Estúdio de tecnologia criado com foco em sites, automações, inteligência artificial e produtos digitais.",
      "Atuação direta desde a descoberta da necessidade e definição da solução até desenvolvimento, publicação e relacionamento com o cliente.",
    ],
    stack: ["Desenvolvimento web", "Automação", "IA aplicada", "Produto"],
  },
  {
    name: "Compressify",
    url: "https://compressify-free.vercel.app",
    tagline: "Compressão e conversão de imagens no navegador",
    badge: "-86% em lote medido",
    description: [
      "Aplicação estática e offline para compressão e conversão em lote de JPG, PNG, WebP e AVIF. Todo o processamento ocorre no cliente com Web Workers e WebAssembly, sem envio de arquivos para servidores.",
      "389 testes unitários e de integração, 115 testes E2E em Chromium, Firefox e WebKit; Lighthouse com 95 em performance e 100 em acessibilidade, boas práticas e SEO.",
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Zustand",
      "WebAssembly",
      "Vitest",
      "Playwright",
    ],
  },
  {
    name: "QR Code Studio",
    url: "https://qr-code-studio-free.vercel.app",
    tagline: "Gerador vetorial de QR Code com verificação automática",
    badge: "Lighthouse 100 em a11y/SEO",
    description: [
      "Produto client-side com nove tipos de conteúdo, incluindo Pix BR Code, exportação SVG/PDF/PNG, molduras para impressão, personalização, histórico local e geração em lote por CSV.",
      "Cada QR é rasterizado e decodificado antes da exportação. 369 testes unitários e de integração e 86 testes E2E.",
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript strict",
      "Tailwind CSS 4",
      "pdf-lib",
      "jsQR",
      "Vitest",
      "Playwright",
    ],
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
    stack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "n8n",
      "OpenAI/Whisper",
      "Docker",
      "Telegram API",
    ],
  },
];

export const education: Education = {
  institution: "PUC Goiás — Pontifícia Universidade Católica de Goiás",
  degree: "Bacharelado em Ciência da Computação",
  period: "2021 — 2026",
  details: [
    "TCC: FitJourneyAI, assistente de acompanhamento físico com IA no Telegram.",
    "Tutor acadêmico no semestre 2021/2, apoiando estudantes em programação e lógica computacional.",
    "Participação em atividades de resolução de problemas, incluindo Olimpíada Brasileira de Informática e Maratona SBC de Programação.",
  ],
};

export const certifications: Certification[] = [
  { name: "REST APIs RESTful do 0 à AWS: Spring Boot 3, Java e Docker", year: "2024" },
  { name: "Domain Driven Design: Modelagem Tática e Patterns", year: "2023" },
  { name: "Autenticação e Keycloak", year: "2023" },
  { name: "Docker for Developers: Docker Swarm e Kubernetes", year: "2023" },
  { name: "TDD e Java: testes automatizados com JUnit", year: "2022" },
  { name: "LGPD aplicada à gestão e qualidade", year: "2024" },
  { name: "Sistemas de Gestão da Qualidade ISO 9001", year: "2024" },
];

export const languages: Language[] = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Avançado (C1)" },
];

export const sections: SectionLink[] = [
  { id: "sobre", label: "Sobre" },
  { id: "competencias", label: "Competências" },
  { id: "experiencia", label: "Experiência" },
  { id: "projetos", label: "Projetos" },
  { id: "formacao", label: "Formação" },
  { id: "contato", label: "Contato" },
];
