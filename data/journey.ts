// Conteúdo da página principal (direção C · Jornada, escolhida em 25/10/2026).
// Fontes: currículo e produtos do próprio Igor; projetos, casos (desafio, solução, resultado),
// processo, preço e dúvidas do site da Kyber Tech (ecossistema-kyber/kyber-tech/components/content.jsx).
// Travas de honestidade: conceitos sempre rotulados como conceito e sem resultado de negócio;
// André Mei é "Site de atleta" (feito para um familiar); Encanto Gourmet saiu do ar e não entra;
// o trabalho atual aparece só como "Minsait · Grupo Indra", sem projeto nem cliente de lá.
import type { IconName } from "@/components/journey/icons";

// Domínio principal na Vercel: o endereço sem www redireciona (308) para este.
export const SITE_URL = "https://www.igordecastro.com.br";
const ASSETS = "/links/assets/";
const VIDEO = "https://media.somoskyber.com.br/portfolio/";

// WhatsApp confirmado por Igor: sem o 9 adicional. É o mesmo da /links e do vCard.
export const WHATSAPP = "556284196646";
export const waLink = (text: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
export const MESSAGE = "Oi, Igor! Vi seu site e quero conversar sobre um projeto.";
export const projectMessage = (name: string) => `Oi, Igor! Vi o projeto ${name} no seu site e quero algo nessa linha.`;

export type ProjectKind = "cliente" | "conceito" | "atleta" | "marca";

export interface Project {
  slug: string;
  name: string;
  kind: ProjectKind;
  label: string;
  duration: string;
  site: string;
  short: string;
  problem: string;
  solution: string;
  result?: string;
  note?: string;
  desktopOnly?: boolean;
  stack: string[];
  poster: string;
  video: string;
}

const project = (slug: string, data: Omit<Project, "slug" | "poster" | "video"> & { image?: string }): Project => {
  const { image, ...rest } = data;
  return { slug, poster: `${ASSETS}projects/${image ?? slug}.webp`, video: `${VIDEO}${slug}/${slug}-v1.mp4`, ...rest };
};

export const profile = {
  name: "Igor de Castro",
  role: "Desenvolvedor Full Stack",
  studio: "Cofundador da Kyber Tech",
  journey: "De suporte técnico a cofundador de um estúdio em quatro anos. Siga a trilha: no fim, o próximo nível é o seu projeto.",
  note: "Não precisa chegar com nada pronto. Me conta a ideia.",
  reach: "Presencial em Goiânia e região, remoto para todo o Brasil",
  poster: `${ASSETS}igor-poster.webp`,
  resume: "/Igor_de_Castro_Resume_pt-BR_2026.pdf",
  vcard: `${ASSETS}igor-de-castro.vcf`,
  email: "igorpcferreira@gmail.com",
};

// Números já publicados no portfólio ou contados a partir do próprio conteúdo.
export const proof = [
  { value: "4+", label: "anos em tecnologia" },
  { value: "11", label: "projetos no ar" },
  { value: "950+", label: "testes automatizados" },
];

export const projects: Project[] = [
  project("manus-barbearia", {
    name: "Manu’s Barbearia", kind: "cliente", label: "Cliente Kyber · Barbearia", duration: "0:56", image: "manusbarbearia",
    site: "https://manusbarbearia.com.br",
    short: "Serviços, planos de assinatura e agendamento a um toque.",
    problem: "Vendia plano de assinatura sem ter onde explicar o que cada um inclui e quanto sai o corte, e não era encontrada no Google.",
    solution: "Site com os nove serviços, os quatro planos lado a lado com a conta feita, galeria do salão e botão que leva direto ao Booksy.",
    result: "Os quatro planos saíram do WhatsApp explicado um a um: agora ficam lado a lado na página, e o agendamento vai direto ao Booksy.",
    stack: ["Astro", "React", "TypeScript", "Tailwind CSS"],
  }),
  project("construtora-premium", {
    name: "Construtora Premium", kind: "cliente", label: "Cliente Kyber · Construtora", duration: "0:45",
    site: "https://premiumconstrutora.com.br",
    short: "Obras públicas em Goiás e no DF, com foco em credibilidade.",
    problem: "Sem presença online à altura das obras, faltava credibilidade ao falar com órgãos públicos e parceiros.",
    solution: "Site institucional com obras, serviços e os órgãos atendidos, como PM-GO, PC-GO, PC-DF e MPGO.",
    result: "A Premium passou a ter endereço próprio para apresentar obras e serviços em reunião, proposta e conversa com órgão.",
    stack: ["Site institucional", "Portfólio de obras", "SEO"],
  }),
  project("gabriela-camargo", {
    name: "Gabriela Camargo", kind: "cliente", label: "Cliente Kyber · Fotografia", duration: "0:35",
    site: "https://gabrielacamargofoto.com.br",
    short: "Um portfólio para ver, sentir e agendar.",
    problem: "Fotografa desde 2016, mas o trabalho vivia no Instagram: sem portfólio organizado, e o valor do ensaio só saía por mensagem.",
    solution: "Galeria que amplia foto a foto, os dois formatos de ensaio com o que cada um inclui e o WhatsApp em toda seção.",
    result: "Quem chega vê as fotos ampliadas, sabe quanto custa o ensaio antes de perguntar e agenda pelo WhatsApp.",
    stack: ["HTML", "CSS", "JavaScript puro"],
  }),
  project("infinita-saude", {
    name: "Infinita Saúde", kind: "cliente", label: "Cliente Kyber · Saúde", duration: "0:47",
    site: "https://www.infinitafisio.com.br",
    short: "Clínica em Goianésia, com agendamento pelo WhatsApp.",
    problem: "Toda a apresentação da clínica vivia no Instagram e no WhatsApp: sem site, a formação e os serviços ficavam difíceis de encontrar.",
    solution: "Site que reúne a trajetória da Dra. Stela, os serviços, a localização e o agendamento de consulta pelo WhatsApp.",
    result: "A paciente passou a achar a clínica no Google, entender cada serviço e agendar pelo WhatsApp sem precisar perguntar o básico.",
    stack: ["Site institucional", "SEO local", "Agendamento"],
  }),
  project("jordanna-santos", {
    name: "Jordanna Santos", kind: "cliente", label: "Cliente Kyber · Beleza", duration: "0:44",
    site: "https://www.jordannasantostecnica.com.br",
    short: "Serviços, cursos e avaliações reais numa página só.",
    problem: "Dezesseis anos de trabalho e 69 avaliações 5,0 no Google, mas nada disso aparecia junto para quem chegava pelo Instagram.",
    solution: "Uma página com os serviços um a um, a seção de cursos, as avaliações que já existiam no Google e o WhatsApp em toda seção.",
    result: "Os serviços, os cursos e as avaliações ficam na mesma página, e o agendamento sai direto no WhatsApp.",
    stack: ["Site estático", "SEO local", "WhatsApp"],
  }),
  project("kounting-streetwear", {
    name: "Kounting Streetwear", kind: "marca", label: "Minha marca · Streetwear", duration: "0:53", image: "kountingstreetwear",
    site: "https://www.kountingstreetwear.com.br",
    short: "A marca que fundei. A vitrine que construí.",
    problem: "A marca vendia por encomenda no Direct: sem catálogo, cada dúvida de cor, tamanho e preço voltava como mensagem.",
    solution: "Vitrine com o catálogo, fotos por cor, guia de medidas e um botão que chega no WhatsApp com a peça, a cor e o tamanho.",
    result: "A marca saiu do Direct: o cliente monta o pedido na página e o WhatsApp recebe a conversa já com o modelo escolhido.",
    stack: ["Next.js", "React", "Exportação estática"],
  }),
  project("andre-mei", {
    name: "André Mei", kind: "atleta", label: "Site de atleta", duration: "1:01",
    site: "https://www.andremei.com.br",
    short: "Surf, ultramaratona e parcerias num site pessoal.",
    problem: "A trajetória vivia repartida entre Instagram e YouTube, sem um endereço com quem ele é, a prova que encarou e o contato para marcas.",
    solution: "Página feita primeiro para o celular: água em WebGL que responde ao toque, a ultra de 106 km, galeria de surf e parcerias.",
    result: "Tudo ficou no mesmo endereço, e a marca que quiser falar de parceria chega direto no WhatsApp dele. O vídeo novo entra sozinho.",
    stack: ["WebGL", "YouTube automático", "Feito para o celular"],
  }),
  project("lume", {
    name: "Lume", kind: "conceito", label: "Conceito Kyber · Beleza", duration: "0:35",
    site: "https://lume-portfolio.vercel.app",
    short: "Cor, luz e identidade numa experiência editorial.",
    problem: "Explorar como cor, luz e identidade podem formar uma experiência digital de beleza.",
    solution: "Narrativa visual em seis capítulos, com retratos editoriais e um seletor interativo de quatro tons. Imagens e vídeo produzidos com IA.",
    stack: ["React", "Vite", "Direção criativa"],
  }),
  project("aura", {
    name: "Aura", kind: "conceito", label: "Conceito Kyber · Joalheria", duration: "0:33",
    site: "https://aura-joalheria-portfolio.vercel.app/",
    short: "Joalheria conceitual com um anel interativo em 3D.",
    problem: "Traduzir o cuidado de uma joalheria numa experiência digital que permita explorar a peça.",
    solution: "Filme de abertura e um configurador 3D para escolher pedras e metais e girar o anel. Fotografias e filme produzidos com IA.",
    stack: ["React", "Three.js", "WebGL"],
  }),
  project("bruma", {
    name: "BRUMA", kind: "conceito", label: "Conceito Kyber · 3D em tempo real", duration: "0:52",
    site: "https://bruma-portfolio.vercel.app",
    short: "Uma marca fictícia de gin numa cena 3D em tempo real.",
    problem: "Mostrar que 3D em tempo real cabe num site comum, sem vídeo gravado e sem plugin.",
    solution: "Frasco, líquido e botânicos construídos em código e renderizados no próprio navegador, em oito capítulos guiados pelo scroll.",
    stack: ["Three.js", "WebGL", "Direção criativa"],
  }),
  project("casa-umbra", {
    name: "Casa Umbra", kind: "conceito", label: "Conceito Kyber · Arquitetura", duration: "0:48", desktopOnly: true,
    site: "https://casa-umbra-portfolio.vercel.app",
    short: "Uma residência fictícia numa visita guiada pelo scroll.",
    problem: "Mostrar direção criativa e desenvolvimento no mesmo lugar, sem depender de um projeto de cliente.",
    solution: "Motor de scroll próprio em JavaScript puro, com oito cenas e uma linha de luz âmbar que guia a visita. Imagens produzidas com IA.",
    note: "O site foi feito para computador. No celular, o vídeo mostra a experiência completa.",
    stack: ["HTML", "CSS", "JavaScript"],
  }),
];

export const projectGroups = [
  { title: "Clientes", items: projects.filter((item) => item.kind === "cliente") },
  { title: "Marca e atleta", items: projects.filter((item) => item.kind === "marca" || item.kind === "atleta") },
  { title: "Conceitos", items: projects.filter((item) => item.kind === "conceito"), note: "Marcas fictícias criadas pela Kyber. Não são clientes." },
];

export const services: { icon: IconName; title: string; desc: string }[] = [
  { icon: "globe", title: "Site ou catálogo", desc: "Um endereço próprio, feito para o celular, onde as pessoas te acham no Google e falam com você sem depender do Direct." },
  { icon: "layers", title: "Sistema sob medida", desc: "Painéis e ferramentas internas para a sua operação, com o mesmo cuidado que aplico em sistemas de grande porte." },
  { icon: "bolt", title: "Automação", desc: "O trabalho repetitivo que hoje é feito na mão: registrar o contato, confirmar, atualizar a planilha, encaminhar o pedido." },
  { icon: "sparkles", title: "IA no atendimento", desc: "Um agente que responde no WhatsApp ou no site com as respostas que você aprovou, e chama uma pessoa quando a pergunta foge do combinado." },
];

// Fluxo real da oferta da Kyber: a cobrança acontece depois da aprovação, nunca antes.
export const processSteps = [
  { title: "Conversa", text: "Você me conta o que precisa pelo WhatsApp. Eu faço as perguntas certas e indico o que faz sentido." },
  { title: "Proposta", text: "Escopo, prazo e investimento por escrito, antes de qualquer pagamento." },
  { title: "Prévia", text: "No site padrão, a primeira versão fica pronta em até 3 dias úteis depois do briefing e dos materiais. Você vê antes de pagar." },
  { title: "No ar", text: "Depois da aprovação e do pagamento, publico no seu domínio e acompanho os primeiros 30 dias." },
];

// Valores da página de preços da Kyber Tech (25/10/2026). A parcela sempre acompanha o total.
export const offer = {
  name: "Site Completo",
  badge: "Pagamento único",
  price: "R$ 569",
  installments: "ou até 12x de aproximadamente R$ 47,42 no cartão",
  guarantee: "Você só paga depois de ver a primeira versão e aprovar.",
  others: "Sistemas, automações e IA recebem orçamento depois que eu entendo o seu caso.",
  href: "https://somoskyber.com.br/precos",
};

export const faq = [
  { q: "Preciso chegar com tudo pronto?", a: "Não. Me conta a ideia e o que você quer resolver. Para o site, eu te passo um briefing simples e te ajudo com os textos." },
  { q: "Quanto custa um site?", a: "O Site Completo da Kyber Tech custa R$ 569 em pagamento único, ou até 12x de aproximadamente R$ 47,42 no cartão, com domínio, hospedagem e SSL por 12 meses. Sistemas, automações e IA recebem orçamento depois que eu entendo o seu caso." },
  { q: "Quanto tempo leva?", a: "No site padrão, a primeira versão fica pronta em até 3 dias úteis depois do briefing e dos materiais completos. Projetos maiores recebem prazo próprio na proposta." },
  { q: "Quando eu pago?", a: "Depois de ver a primeira versão e aprovar. Antes disso, você pede os ajustes que precisar dentro do escopo." },
  { q: "O domínio fica no meu nome?", a: "Sempre. Ele é registrado no seu CPF ou CNPJ e continua seu mesmo se a gente parar de trabalhar junto." },
  { q: "Vou falar com quem?", a: "Comigo, direto, do primeiro contato à publicação. Sem vendedor no meio." },
];

// Datas do currículo publicado (public/Igor_de_Castro_Resume_pt-BR_2026.pdf).
export const timeline: { year: string; place: string; title: string; text: string; icon: IconName }[] = [
  { year: "2021", place: "PUC Goiás", title: "Ciência da Computação", text: "Começo a graduação e viro tutor acadêmico de programação no segundo semestre.", icon: "education" },
  { year: "2022", place: "Fundação Jaime Câmara", title: "Suporte técnico", text: "Diagnóstico de hardware e software e atendimento aos usuários internos. A base de tudo.", icon: "cog" },
  { year: "2022", place: "DocNix", title: "De estagiário a júnior", text: "Duas promoções em quase três anos, numa plataforma de gestão da qualidade usada por clientes reais.", icon: "rocket" },
  { year: "2025", place: "Minsait · Grupo Indra", title: "Desenvolvedor Full Stack Pleno", text: "Sistemas corporativos de grande porte para o setor público, entre stacks legadas e modernas.", icon: "building" },
  { year: "2026", place: "Kyber Tech", title: "Cofundador", text: "Entro como cofundador do estúdio, ao lado de Pedro Lourençoni Lima: sites, automações e IA para negócios.", icon: "handshake" },
];

export const socials: { id: "linkedin" | "instagram" | "github"; name: string; href: string }[] = [
  { id: "linkedin", name: "LinkedIn", href: "https://www.linkedin.com/in/igor-cferreira" },
  { id: "instagram", name: "Instagram", href: "https://www.instagram.com/igor_cferreira" },
  { id: "github", name: "GitHub", href: "https://github.com/Igorpcferreira" },
];

export const extras: { icon: IconName | "kyber"; name: string; href: string; download?: boolean }[] = [
  { icon: "kyber", name: "Kyber Tech", href: "https://somoskyber.com.br" },
  { icon: "file", name: "Currículo", href: profile.resume, download: true },
  { icon: "camera", name: "Modelo", href: "/modelo/" },
  { icon: "qr", name: "QR Code Studio", href: "https://qr-code-studio-free.vercel.app" },
  { icon: "image", name: "Compressify", href: "https://compressify-free.vercel.app" },
];
export const kyberMark = `${ASSETS}kyber-mark.webp`;

// Monte seu projeto (fase final): o tipo de negócio muda a prévia; cada módulo entra na mensagem.
export const businesses = [
  { id: "barbearia", label: "Barbearia", article: "uma barbearia", name: "Sua Barbearia", slug: "suabarbearia", tint: "#ffc46b", items: ["Corte", "Barba", "Combo"] },
  { id: "clinica", label: "Clínica", article: "uma clínica", name: "Sua Clínica", slug: "suaclinica", tint: "#35c8ff", items: ["Consulta", "Retorno", "Avaliação"] },
  { id: "loja", label: "Loja", article: "uma loja", name: "Sua Loja", slug: "sualoja", tint: "#ff8ab3", items: ["Camiseta", "Boné", "Moletom"] },
  { id: "restaurante", label: "Restaurante", article: "um restaurante", name: "Seu Restaurante", slug: "seurestaurante", tint: "#ff9f5a", items: ["Prato do dia", "Combo", "Sobremesa"] },
  { id: "servicos", label: "Serviços", article: "uma empresa de serviços", name: "Seu Negócio", slug: "seunegocio", tint: "#52ff7d", items: ["Básico", "Completo", "Sob medida"] },
];

export type ModuleId = "dominio" | "catalogo" | "galeria" | "agenda" | "whats" | "planilha" | "ia" | "painel";
export const modules: { id: ModuleId; label: string; short: string; icon: IconName }[] = [
  { id: "dominio", label: "Domínio próprio", short: "domínio próprio", icon: "globe" },
  { id: "catalogo", label: "Catálogo", short: "catálogo", icon: "store" },
  { id: "galeria", label: "Galeria", short: "galeria de fotos", icon: "image" },
  { id: "agenda", label: "Agendamento", short: "agendamento", icon: "calendar" },
  { id: "whats", label: "Pedido no WhatsApp", short: "pedido no WhatsApp", icon: "whatsapp" },
  { id: "planilha", label: "Planilha automática", short: "planilha automática", icon: "bolt" },
  { id: "ia", label: "IA no atendimento", short: "IA no atendimento", icon: "sparkles" },
  { id: "painel", label: "Painel da equipe", short: "painel da equipe", icon: "layers" },
];

export const deadlines = [
  { id: "ja", label: "Este mês", text: "para este mês" },
  { id: "breve", label: "Nos próximos meses", text: "para os próximos meses" },
  { id: "pesquisa", label: "Só pesquisando", text: "e ainda estou pesquisando" },
];
