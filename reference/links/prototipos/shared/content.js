// Conteúdo único das três direções. É o mesmo texto da /links atual (public/links/index.html).
export const ASSETS = '../../../../public/links/assets/';
export const IMG = '../shared/img/';
export const VIDEO = 'https://media.somoskyber.com.br/portfolio/';

// WhatsApp confirmado por Igor: sem o 9 adicional.
export const WHATSAPP = '556284196646';
export const MESSAGE = 'Oi, Igor! Vim do Instagram e quero conversar sobre um projeto.';
export const PAGE_URL = 'https://igordecastro.com.br/links/';

export const profile = {
  name: 'Igor de Castro',
  first: 'Igor',
  last: 'de Castro',
  role: 'Desenvolvedor Full Stack',
  studio: 'Cofundador da Kyber Tech',
  lead: 'Sites, sistemas e automações sob medida para o seu negócio.',
  proof: '4+ anos em sistemas de grande porte. Hoje na Minsait (Grupo Indra).',
  status: 'Disponível para projetos',
  city: 'Goiânia, GO',
  note: 'Não precisa chegar com nada pronto. Me conta a ideia.',
  portrait: ASSETS + 'igor.webp',
  poster: IMG + 'igor-poster.webp',
  body: IMG + 'igor-corpo.webp',
  resume: 'https://igordecastro.com.br/Igor_de_Castro_Resume_pt-BR_2026.pdf',
  vcard: ASSETS + 'igor-de-castro.vcf',
};

export const work = [
  { id: 'portfolio', title: 'Portfólio de desenvolvedor', short: 'Portfólio', desc: 'Experiência, stack e projetos em detalhe.', domain: 'igordecastro.com.br', href: 'https://igordecastro.com.br' },
  { id: 'kyber', title: 'Kyber Tech', short: 'Kyber', badge: 'Cofundador', desc: 'O estúdio de tecnologia que cofundei: sites, automações e IA.', domain: 'somoskyber.com.br', href: 'https://somoskyber.com.br', mark: ASSETS + 'kyber-mark.webp' },
];

const project = (slug, data) => ({
  slug,
  video: `${VIDEO}${slug}/${slug}-v1.mp4`,
  poster: `${ASSETS}projects/${data.image || slug}.webp`,
  ...data,
});

// kind: conceito | cliente | atleta | marca. André Mei não é cliente (site feito de graça para um familiar).
export const projects = [
  project('lume', { name: 'Lume', kind: 'conceito', segment: 'Beleza', label: 'Conceito Kyber · Beleza', duration: '0:35', site: 'https://lume-portfolio.vercel.app', domain: 'lume-portfolio.vercel.app', short: 'Cor, luz e identidade numa experiência editorial.', more: 'Estudo autoral para uma marca fictícia de lentes de contato: direção de arte editorial e um seletor interativo de quatro tons. Imagens e vídeo produzidos com IA; os produtos não estão à venda.', stack: ['React', 'Vite', 'Direção criativa'] }),
  project('aura', { name: 'Aura', kind: 'conceito', segment: 'Joias', label: 'Conceito Kyber · Joalheria', duration: '0:33', site: 'https://aura-joalheria-portfolio.vercel.app/', domain: 'aura-joalheria-portfolio.vercel.app', short: 'Joalheria conceitual com um anel interativo em 3D.', more: 'Estudo autoral para uma joalheria fictícia: filme de abertura e um anel em 3D para escolher pedras e metais, girar a peça e ver a estrutura. Fotografias e filme produzidos com IA.', stack: ['React', 'Three.js', 'WebGL'] }),
  project('bruma', { name: 'BRUMA', kind: 'conceito', segment: 'Bebidas', label: 'Conceito Kyber · 3D em tempo real', duration: '0:52', site: 'https://bruma-portfolio.vercel.app', domain: 'bruma-portfolio.vercel.app', short: 'Uma marca fictícia de gin numa cena 3D em tempo real.', more: 'Marca fictícia de gin do cerrado em oito capítulos guiados pelo scroll. Frasco, líquido e botânicos modelados em código e renderizados em 3D no próprio navegador.', stack: ['Three.js', 'WebGL', 'Direção criativa'] }),
  project('construtora-premium', { name: 'Construtora Premium', kind: 'cliente', segment: 'Construtora', label: 'Cliente Kyber · Construtora', duration: '0:45', site: 'https://premiumconstrutora.com.br', domain: 'premiumconstrutora.com.br', short: 'Obras públicas em Goiás e no DF, com foco em credibilidade.', more: 'Site institucional de uma construtora de obras públicas em Goiânia, Goiás e DF: obras, serviços e os órgãos atendidos, como PM-GO, PC-GO, PC-DF e MPGO.', stack: ['Site institucional', 'Portfólio de obras', 'SEO'] }),
  project('andre-mei', { name: 'André Mei', kind: 'atleta', segment: 'Site de atleta', label: 'Site de atleta', duration: '1:01', site: 'https://www.andremei.com.br', domain: 'andremei.com.br', short: 'Surf, ultramaratona e parcerias num site pessoal.', more: 'Site de um surfista e ultramaratonista do litoral norte de São Paulo: água em WebGL que responde ao toque, a ultra de 106 km, galeria de surf e contato para parcerias. Os vídeos do canal entram sozinhos.', stack: ['WebGL', 'YouTube automático', 'Feito para o celular'] }),
  project('manus-barbearia', { name: 'Manu’s Barbearia', kind: 'cliente', segment: 'Barbearia', label: 'Cliente Kyber · Barbearia', duration: '0:56', image: 'manusbarbearia', site: 'https://manusbarbearia.com.br', domain: 'manusbarbearia.com.br', short: 'Serviços, planos de assinatura e agendamento a um toque.', more: 'Barbearia com mais de nove anos em Goiânia: os nove serviços, os quatro planos de assinatura lado a lado, galeria do salão e agendamento direto no Booksy.', stack: ['Astro', 'React', 'TypeScript', 'Tailwind CSS'] }),
  project('gabriela-camargo', { name: 'Gabriela Camargo', kind: 'cliente', segment: 'Fotografia', label: 'Cliente Kyber · Fotografia', duration: '0:35', site: 'https://gabrielacamargofoto.com.br', domain: 'gabrielacamargofoto.com.br', short: 'Um portfólio para ver, sentir e agendar.', more: 'Fotógrafa em Goiânia desde 2016: galeria que amplia foto a foto, os dois formatos de ensaio com valor na página e WhatsApp em toda seção. HTML e CSS puros, sem dependências.', stack: ['HTML', 'CSS', 'JavaScript puro'] }),
  project('infinita-saude', { name: 'Infinita Saúde', kind: 'cliente', segment: 'Fisioterapia', label: 'Cliente Kyber · Saúde', duration: '0:47', site: 'https://www.infinitafisio.com.br', domain: 'infinitafisio.com.br', short: 'Clínica em Goianésia, com agendamento pelo WhatsApp.', more: 'Site da Dra. Stela Steckelberg, fisioterapia pélvica, obstétrica e acupuntura em Goianésia: a profissional, os serviços, a localização e o agendamento pelo WhatsApp.', stack: ['Site institucional', 'SEO local', 'Agendamento'] }),
  project('jordanna-santos', { name: 'Jordanna Santos', kind: 'cliente', segment: 'Técnica capilar', label: 'Cliente Kyber · Beleza', duration: '0:44', site: 'https://www.jordannasantostecnica.com.br', domain: 'jordannasantostecnica.com.br', short: 'Serviços, cursos e avaliações reais numa página só.', more: 'Técnica capilar em Senador Canedo: os oito serviços de cabelo natural, os cursos que ela dá, avaliações reais do Google e agendamento pelo WhatsApp em cada bloco.', stack: ['Site estático', 'SEO local', 'WhatsApp'] }),
  project('kounting-streetwear', { name: 'Kounting Streetwear', kind: 'marca', segment: 'Minha marca', label: 'Minha marca · Streetwear', duration: '0:53', image: 'kountingstreetwear', site: 'https://www.kountingstreetwear.com.br', domain: 'kountingstreetwear.com.br', short: 'A marca que fundei. A vitrine que construí.', more: 'Vitrine da minha marca de camisetas oversized em drops limitados: catálogo com filtro, fotos por cor, guia de medidas e pedido que chega no WhatsApp com peça, cor e tamanho.', stack: ['Next.js', 'React', 'Exportação estática'] }),
  project('casa-umbra', { name: 'Casa Umbra', kind: 'conceito', segment: 'Imóveis', label: 'Conceito Kyber · Arquitetura', duration: '0:48', desktopOnly: true, site: 'https://casa-umbra-portfolio.vercel.app', domain: 'casa-umbra-portfolio.vercel.app', short: 'Uma residência fictícia numa visita guiada pelo scroll.', more: 'Residência fictícia no deserto em oito cenas, com uma linha de luz âmbar que guia a visita e marca o progresso. Motor de scroll em JavaScript puro; imagens produzidas com IA.', note: 'O site foi feito para computador. No celular, a demonstração mostra a experiência completa.', stack: ['HTML', 'CSS', 'JavaScript'] }),
];

export const services = [
  { id: 'site', index: '01', title: 'Site e catálogo', desc: 'Um endereço próprio, feito para o celular, onde as pessoas te encontram e falam com você sem depender do Direct.', items: ['Site institucional', 'Catálogo de produtos', 'Portfólio e galeria', 'Domínio próprio'], cta: 'Quero um site', topic: 'um site para o meu negócio', short: 'um site ou catálogo' },
  { id: 'automacao', index: '02', title: 'Automação e integrações', desc: 'O trabalho repetitivo que hoje é feito na mão: mensagem, agendamento, planilha e sistema que não conversa com outro.', items: ['Fluxos de WhatsApp', 'Agendamento e formulários', 'Integração com APIs', 'Painéis internos'], cta: 'Quero automatizar', topic: 'automatizar uma parte do meu negócio', short: 'automação' },
  { id: 'ia', index: '03', title: 'IA aplicada', desc: 'IA resolvendo um problema real da operação, não como demonstração. Atendimento, classificação e apoio a conteúdo.', items: ['Assistentes de atendimento', 'Geração de conteúdo', 'Processamento de dados', 'Chatbots sob medida'], cta: 'Quero aplicar IA', topic: 'IA aplicada ao meu negócio', short: 'IA aplicada' },
];

export const about = {
  rows: [
    ['Função', 'Dev Full Stack Pleno'],
    ['Empresa', 'Minsait · Grupo Indra'],
    ['Formação', 'Ciência da Computação · PUC Goiás'],
    ['Estúdio', 'Kyber Tech · cofundador'],
    ['Marca', 'Kounting Streetwear · fundador'],
    ['Stack', 'Java · Spring Boot · Angular · React · Next.js · PostgreSQL'],
    ['Base', 'Goiânia, GO · todo o Brasil'],
    ['Uptime', '4+ anos em tecnologia'],
  ],
  story: 'Sou cofundador da Kyber Tech, ao lado de Pedro Lourençoni Lima, e fundador da Kounting Streetwear. Formação em Ciência da Computação pela PUC Goiás. Trabalho com desenvolvimento de software desde 2022 e hoje estou na Minsait (Grupo Indra), em sistemas corporativos de grande porte.',
  // Datas do currículo publicado no portfólio (data/content.ts).
  timeline: [
    { when: '2022', title: 'DocNix', text: 'De estagiário a desenvolvedor júnior numa plataforma de gestão da qualidade.' },
    { when: '2025', title: 'Minsait · Grupo Indra', text: 'Sistemas de grande porte para saúde pública, trânsito e defesa.' },
    { when: '2026', title: 'Kyber Tech', text: 'Cofundador do estúdio: sites, automações e IA para negócios.' },
  ],
};

export const tools = [
  { id: 'qr', name: 'QR Code Studio', desc: 'Nove tipos de QR Code, incluindo Pix, com exportação em SVG, PDF e PNG.', href: 'https://qr-code-studio-free.vercel.app', image: ASSETS + 'projects/qr-code-studio.webp' },
  { id: 'compressify', name: 'Compressify', desc: 'Comprima e converta imagens em lote. Os arquivos não saem do navegador.', href: 'https://compressify-free.vercel.app', image: ASSETS + 'projects/compressify.webp' },
];

export const model = {
  href: 'https://igordecastro.com.br/modelo',
  label: 'Modelo · Goiânia e região',
  title: 'Na frente da câmera',
  desc: 'Editorial, streetwear e retrato. Meu portfólio de modelo.',
  photos: [ASSETS + 'model/estudio.webp', ASSETS + 'model/rua.webp', ASSETS + 'model/textura.webp'],
};

export const socials = [
  { id: 'linkedin', name: 'LinkedIn', sub: 'Trajetória', handle: 'igor-cferreira', href: 'https://www.linkedin.com/in/igor-cferreira' },
  { id: 'instagram', name: 'Instagram', sub: 'Bastidores', handle: '@igor_cferreira', href: 'https://www.instagram.com/igor_cferreira' },
  { id: 'github', name: 'GitHub', sub: 'Código', handle: 'Igorpcferreira', href: 'https://github.com/Igorpcferreira' },
];
