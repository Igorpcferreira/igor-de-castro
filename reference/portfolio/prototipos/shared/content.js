// Conteúdo único das três direções do site principal. Fontes: data/content.ts (trajetória e
// produtos), public/links (projetos) e o conteúdo do site da Kyber Tech (casos, processo, preços
// e perguntas frequentes, em ecossistema-kyber/kyber-tech/components/content.jsx).
// Regras de honestidade: conceitos sempre rotulados como conceito, André Mei é "Site de atleta"
// (não é cliente), Encanto Gourmet saiu do ar e não entra, e o trabalho atual aparece só como
// "Minsait · Grupo Indra", sem citar projeto ou cliente de lá.
export const ASSETS = '../../../../public/links/assets/';
export const IMG = '../../../links/prototipos/shared/img/';
export const VIDEO = 'https://media.somoskyber.com.br/portfolio/';

// WhatsApp confirmado por Igor: sem o 9 adicional.
export const WHATSAPP = '556284196646';
export const MESSAGE = 'Oi, Igor! Vi seu site e quero conversar sobre um projeto.';
export const PAGE_URL = 'https://igordecastro.com.br/';
export const KYBER_PRICES = 'https://somoskyber.com.br/precos';

export const profile = {
  name: 'Igor de Castro',
  first: 'Igor',
  last: 'de Castro',
  role: 'Desenvolvedor Full Stack',
  studio: 'Cofundador da Kyber Tech',
  lead: 'Sites, sistemas e automações sob medida para o seu negócio.',
  // Adaptado da bio do próprio Igor no site da Kyber.
  pitch: 'No dia a dia, desenvolvo sistemas de grande porte na Minsait (Grupo Indra). Na Kyber Tech, o estúdio que cofundei, levo esse cuidado para sites, integrações e automações de negócios como o seu.',
  quote: 'Tecnologia não entra por moda: entra para vender mais ou melhorar a experiência do seu cliente.',
  status: 'Disponível para novos projetos',
  city: 'Goiânia, GO',
  reach: 'Presencial em Goiânia e região, remoto para todo o Brasil',
  note: 'Não precisa chegar com nada pronto. Me conta a ideia.',
  poster: IMG + 'igor-poster.webp',
  body: IMG + 'igor-corpo.webp',
  resume: '../../../../public/Igor_de_Castro_Resume_pt-BR_2026.pdf',
  vcard: ASSETS + 'igor-de-castro.vcf',
  email: 'igorpcferreira@gmail.com',
  languages: 'Português nativo · Inglês avançado (C1)',
};

// Números que já estão publicados no portfólio ou contados a partir do conteúdo acima.
export const proof = [
  { value: '4+', label: 'anos em tecnologia', detail: 'Desde 2022, do suporte técnico ao desenvolvimento.' },
  { value: '11', label: 'projetos no ar', detail: 'Clientes, conceitos e marca própria, todos com vídeo.' },
  { value: '950+', label: 'testes automatizados', detail: 'Somados nos meus produtos Compressify e QR Code Studio.' },
];

const project = (slug, data) => ({
  slug,
  video: `${VIDEO}${slug}/${slug}-v1.mp4`,
  poster: `${ASSETS}projects/${data.image || slug}.webp`,
  ...data,
});

// kind: cliente | conceito | atleta | marca. Casos reais trazem problema, solução e resultado
// do site da Kyber; conceitos não têm resultado, porque não existe negócio real para medir.
export const projects = [
  project('manus-barbearia', {
    name: 'Manu’s Barbearia', kind: 'cliente', segment: 'Barbearia', label: 'Cliente Kyber · Barbearia', duration: '0:56', image: 'manusbarbearia',
    site: 'https://manusbarbearia.com.br', domain: 'manusbarbearia.com.br',
    short: 'Serviços, planos de assinatura e agendamento a um toque.',
    problem: 'Vendia plano de assinatura sem ter onde explicar o que cada um inclui e quanto sai o corte, e não era encontrada no Google.',
    solution: 'Site com os nove serviços, os quatro planos lado a lado com a conta feita, galeria do salão e botão que leva direto ao Booksy.',
    result: 'Os quatro planos saíram do WhatsApp explicado um a um: agora ficam lado a lado na página, e o agendamento vai direto ao Booksy.',
    stack: ['Astro', 'React', 'TypeScript', 'Tailwind CSS'],
  }),
  project('construtora-premium', {
    name: 'Construtora Premium', kind: 'cliente', segment: 'Construtora', label: 'Cliente Kyber · Construtora', duration: '0:45',
    site: 'https://premiumconstrutora.com.br', domain: 'premiumconstrutora.com.br',
    short: 'Obras públicas em Goiás e no DF, com foco em credibilidade.',
    problem: 'Sem presença online à altura das obras, faltava credibilidade ao falar com órgãos públicos e parceiros.',
    solution: 'Site institucional com obras, serviços e os órgãos atendidos, como PM-GO, PC-GO, PC-DF e MPGO.',
    result: 'A Premium passou a ter endereço próprio para apresentar obras e serviços em reunião, proposta e conversa com órgão.',
    stack: ['Site institucional', 'Portfólio de obras', 'SEO'],
  }),
  project('gabriela-camargo', {
    name: 'Gabriela Camargo', kind: 'cliente', segment: 'Fotografia', label: 'Cliente Kyber · Fotografia', duration: '0:35',
    site: 'https://gabrielacamargofoto.com.br', domain: 'gabrielacamargofoto.com.br',
    short: 'Um portfólio para ver, sentir e agendar.',
    problem: 'Fotografa desde 2016, mas o trabalho vivia no Instagram: sem portfólio organizado, e o valor do ensaio só saía por mensagem.',
    solution: 'Galeria que amplia foto a foto, os dois formatos de ensaio com o que cada um inclui e o WhatsApp em toda seção.',
    result: 'Quem chega vê as fotos ampliadas, sabe quanto custa o ensaio antes de perguntar e agenda pelo WhatsApp.',
    stack: ['HTML', 'CSS', 'JavaScript puro'],
  }),
  project('infinita-saude', {
    name: 'Infinita Saúde', kind: 'cliente', segment: 'Fisioterapia', label: 'Cliente Kyber · Saúde', duration: '0:47',
    site: 'https://www.infinitafisio.com.br', domain: 'infinitafisio.com.br',
    short: 'Clínica em Goianésia, com agendamento pelo WhatsApp.',
    problem: 'Toda a apresentação da clínica vivia no Instagram e no WhatsApp: sem site, a formação e os serviços ficavam difíceis de encontrar.',
    solution: 'Site que reúne a trajetória da Dra. Stela, os serviços, a localização e o agendamento de consulta pelo WhatsApp.',
    result: 'A paciente passou a achar a clínica no Google, entender cada serviço e agendar pelo WhatsApp sem precisar perguntar o básico.',
    stack: ['Site institucional', 'SEO local', 'Agendamento'],
  }),
  project('jordanna-santos', {
    name: 'Jordanna Santos', kind: 'cliente', segment: 'Técnica capilar', label: 'Cliente Kyber · Beleza', duration: '0:44',
    site: 'https://www.jordannasantostecnica.com.br', domain: 'jordannasantostecnica.com.br',
    short: 'Serviços, cursos e avaliações reais numa página só.',
    problem: 'Dezesseis anos de trabalho e 69 avaliações 5,0 no Google, mas nada disso aparecia junto para quem chegava pelo Instagram.',
    solution: 'Uma página com os serviços um a um, a seção de cursos, as avaliações que já existiam no Google e o WhatsApp em toda seção.',
    result: 'Os serviços, os cursos e as avaliações ficam na mesma página, e o agendamento sai direto no WhatsApp.',
    stack: ['Site estático', 'SEO local', 'WhatsApp'],
  }),
  project('kounting-streetwear', {
    name: 'Kounting Streetwear', kind: 'marca', segment: 'Minha marca', label: 'Minha marca · Streetwear', duration: '0:53', image: 'kountingstreetwear',
    site: 'https://www.kountingstreetwear.com.br', domain: 'kountingstreetwear.com.br',
    short: 'A marca que fundei. A vitrine que construí.',
    problem: 'A marca vendia por encomenda no Direct: sem catálogo, cada dúvida de cor, tamanho e preço voltava como mensagem.',
    solution: 'Vitrine com o catálogo, fotos por cor, guia de medidas e um botão que chega no WhatsApp com a peça, a cor e o tamanho.',
    result: 'A marca saiu do Direct: o cliente monta o pedido na página e o WhatsApp recebe a conversa já com o modelo escolhido.',
    stack: ['Next.js', 'React', 'Exportação estática'],
  }),
  project('andre-mei', {
    name: 'André Mei', kind: 'atleta', segment: 'Site de atleta', label: 'Site de atleta', duration: '1:01',
    site: 'https://www.andremei.com.br', domain: 'andremei.com.br',
    short: 'Surf, ultramaratona e parcerias num site pessoal.',
    problem: 'A trajetória vivia repartida entre Instagram e YouTube, sem um endereço com quem ele é, a prova que encarou e o contato para marcas.',
    solution: 'Página feita primeiro para o celular: água em WebGL que responde ao toque, a ultra de 106 km, galeria de surf e parcerias.',
    result: 'Tudo ficou no mesmo endereço, e a marca que quiser falar de parceria chega direto no WhatsApp dele. O vídeo novo entra sozinho.',
    stack: ['WebGL', 'YouTube automático', 'Feito para o celular'],
  }),
  project('lume', {
    name: 'Lume', kind: 'conceito', segment: 'Beleza', label: 'Conceito Kyber · Beleza', duration: '0:35',
    site: 'https://lume-portfolio.vercel.app', domain: 'lume-portfolio.vercel.app',
    short: 'Cor, luz e identidade numa experiência editorial.',
    problem: 'Explorar como cor, luz e identidade podem formar uma experiência digital de beleza.',
    solution: 'Narrativa visual em seis capítulos, com retratos editoriais e um seletor interativo de quatro tons. Imagens e vídeo produzidos com IA.',
    stack: ['React', 'Vite', 'Direção criativa'],
  }),
  project('aura', {
    name: 'Aura', kind: 'conceito', segment: 'Joalheria', label: 'Conceito Kyber · Joalheria', duration: '0:33',
    site: 'https://aura-joalheria-portfolio.vercel.app/', domain: 'aura-joalheria-portfolio.vercel.app',
    short: 'Joalheria conceitual com um anel interativo em 3D.',
    problem: 'Traduzir o cuidado de uma joalheria numa experiência digital que permita explorar a peça.',
    solution: 'Filme de abertura e um configurador 3D para escolher pedras e metais e girar o anel. Fotografias e filme produzidos com IA.',
    stack: ['React', 'Three.js', 'WebGL'],
  }),
  project('bruma', {
    name: 'BRUMA', kind: 'conceito', segment: 'Bebidas', label: 'Conceito Kyber · 3D em tempo real', duration: '0:52',
    site: 'https://bruma-portfolio.vercel.app', domain: 'bruma-portfolio.vercel.app',
    short: 'Uma marca fictícia de gin numa cena 3D em tempo real.',
    problem: 'Mostrar que 3D em tempo real cabe num site comum, sem vídeo gravado e sem plugin.',
    solution: 'Frasco, líquido e botânicos construídos em código e renderizados no próprio navegador, em oito capítulos guiados pelo scroll.',
    stack: ['Three.js', 'WebGL', 'Direção criativa'],
  }),
  project('casa-umbra', {
    name: 'Casa Umbra', kind: 'conceito', segment: 'Arquitetura', label: 'Conceito Kyber · Arquitetura', duration: '0:48', desktopOnly: true,
    site: 'https://casa-umbra-portfolio.vercel.app', domain: 'casa-umbra-portfolio.vercel.app',
    short: 'Uma residência fictícia numa visita guiada pelo scroll.',
    problem: 'Mostrar direção criativa e desenvolvimento no mesmo lugar, sem depender de um projeto de cliente.',
    solution: 'Motor de scroll próprio em JavaScript puro, com oito cenas e uma linha de luz âmbar que guia a visita. Imagens produzidas com IA.',
    note: 'O site foi feito para computador. No celular, o vídeo mostra a experiência completa.',
    stack: ['HTML', 'CSS', 'JavaScript'],
  }),
];

export const kinds = [
  { id: 'todos', label: 'Todos' },
  { id: 'cliente', label: 'Clientes' },
  { id: 'conceito', label: 'Conceitos' },
  { id: 'outros', label: 'Marca e atleta' },
];
export const kindOf = item => (item.kind === 'marca' || item.kind === 'atleta' ? 'outros' : item.kind);

export const services = [
  { id: 'site', icon: 'globe', title: 'Site ou catálogo', short: 'um site ou catálogo', desc: 'Um endereço próprio, feito para o celular, onde as pessoas te acham no Google e falam com você sem depender do Direct.', items: ['Site institucional', 'Catálogo de produtos', 'Portfólio e galeria', 'Domínio no seu nome'], example: 'manus-barbearia' },
  { id: 'sistema', icon: 'layers', title: 'Sistema sob medida', short: 'um sistema sob medida', desc: 'Painéis e ferramentas internas para a sua operação, com o mesmo cuidado que aplico em sistemas de grande porte.', items: ['Painéis internos', 'Ferramentas para a equipe', 'Integração com o que você já usa', 'Relatórios e dados'] },
  { id: 'automacao', icon: 'bolt', title: 'Automação', short: 'automação', desc: 'O trabalho repetitivo que hoje é feito na mão: registrar o contato, confirmar, atualizar a planilha, encaminhar o pedido.', items: ['Fluxos de WhatsApp', 'Agendamento e formulários', 'Integração com APIs', 'Planilhas que se atualizam'], example: 'kounting-streetwear' },
  { id: 'ia', icon: 'sparkles', title: 'IA no atendimento', short: 'IA no atendimento', desc: 'Um agente que responde no WhatsApp ou no site com as respostas que você aprovou, e chama uma pessoa quando a pergunta foge do combinado.', items: ['IA no WhatsApp', 'IA dentro do site', 'Triagem de contatos', 'Respostas aprovadas por você'] },
];

// Fluxo real da oferta da Kyber: a cobrança acontece depois da aprovação, nunca antes.
export const process = [
  { id: 'conversa', title: 'Conversa', text: 'Você me conta o que precisa pelo WhatsApp. Eu faço as perguntas certas e indico o que faz sentido.' },
  { id: 'proposta', title: 'Proposta', text: 'Escopo, prazo e investimento por escrito, antes de qualquer pagamento.' },
  { id: 'previa', title: 'Prévia', text: 'No site padrão, a primeira versão fica pronta em até 3 dias úteis depois do briefing e dos materiais. Você vê antes de pagar.' },
  { id: 'publicacao', title: 'No ar', text: 'Depois da aprovação e do pagamento, publico no seu domínio e acompanho os primeiros 30 dias.' },
];

// Valores da página de preços da Kyber Tech (25/10/2026). A parcela sempre acompanha o total.
export const offer = {
  name: 'Site Completo',
  badge: 'Pagamento único',
  price: 'R$ 569',
  installments: 'ou até 12x de aproximadamente R$ 47,42 no cartão',
  includes: ['Domínio .com.br no seu nome', 'Publicação, SSL e 12 meses de hospedagem', 'SEO local e integração com o seu WhatsApp', '30 dias de suporte depois de publicar'],
  guarantee: 'Você só paga depois de ver a primeira versão e aprovar.',
  others: 'Sistemas, automações e IA recebem orçamento depois que eu entendo o seu caso.',
  href: KYBER_PRICES,
};

export const faq = [
  { q: 'Preciso chegar com tudo pronto?', a: 'Não. Me conta a ideia e o que você quer resolver. Para o site, eu te passo um briefing simples e te ajudo com os textos.' },
  { q: 'Quanto custa um site?', a: 'O Site Completo da Kyber Tech custa R$ 569 em pagamento único, ou até 12x de aproximadamente R$ 47,42 no cartão, com domínio, hospedagem e SSL por 12 meses. Sistemas, automações e IA recebem orçamento depois que eu entendo o seu caso.' },
  { q: 'Quanto tempo leva?', a: 'No site padrão, a primeira versão fica pronta em até 3 dias úteis depois do briefing e dos materiais completos. Projetos maiores recebem prazo próprio na proposta.' },
  { q: 'Quando eu pago?', a: 'Depois de ver a primeira versão e aprovar. Antes disso, você pede os ajustes que precisar dentro do escopo.' },
  { q: 'O domínio fica no meu nome?', a: 'Sempre. Ele é registrado no seu CPF ou CNPJ e continua seu mesmo se a gente parar de trabalhar junto.' },
  { q: 'Vou falar com quem?', a: 'Comigo, direto, do primeiro contato à publicação. Sem vendedor no meio.' },
];

// Datas do currículo publicado no portfólio (data/content.ts).
export const timeline = [
  { id: 'puc', year: '2021', place: 'PUC Goiás', title: 'Ciência da Computação', text: 'Começo a graduação e viro tutor acadêmico de programação no segundo semestre.', icon: 'education' },
  { id: 'suporte', year: '2022', place: 'Fundação Jaime Câmara', title: 'Suporte técnico', text: 'Diagnóstico de hardware e software e atendimento aos usuários internos. A base de tudo.', icon: 'cog' },
  { id: 'docnix', year: '2022', place: 'DocNix', title: 'De estagiário a júnior', text: 'Duas promoções em quase três anos, numa plataforma de gestão da qualidade usada por clientes reais.', icon: 'rocket' },
  { id: 'minsait', year: '2025', place: 'Minsait · Grupo Indra', title: 'Desenvolvedor Full Stack Pleno', text: 'Sistemas corporativos de grande porte para o setor público, entre stacks legadas e modernas.', icon: 'building' },
  { id: 'kyber', year: '2026', place: 'Kyber Tech', title: 'Cofundador', text: 'Entro como cofundador do estúdio, ao lado de Pedro Lourençoni Lima: sites, automações e IA para negócios.', icon: 'handshake' },
];

export const stack = [
  { title: 'Backend', items: ['Java', 'Spring Boot', 'Quarkus', 'Node.js'] },
  { title: 'Frontend', items: ['Angular', 'React', 'Next.js', 'Vue', 'TypeScript'] },
  { title: 'Dados', items: ['PostgreSQL', 'Oracle', 'Redis', 'Docker'] },
  { title: 'Qualidade', items: ['SonarQube', 'JUnit', 'Vitest', 'Playwright'] },
];

export const about = {
  rows: [
    ['Função', 'Desenvolvedor Full Stack Pleno'],
    ['Hoje', 'Minsait · Grupo Indra'],
    ['Estúdio', 'Kyber Tech · cofundador'],
    ['Marca', 'Kounting Streetwear · fundador'],
    ['Formação', 'Ciência da Computação · PUC Goiás'],
    ['Idiomas', 'Português e inglês (C1)'],
    ['Base', 'Goiânia, GO · todo o Brasil'],
  ],
  story: 'Comecei em 2022 no suporte técnico, aprendi a construir produto na DocNix e hoje desenvolvo sistemas de grande porte na Minsait. Em 2026 cofundei a Kyber Tech para levar esse padrão a negócios como barbearias, clínicas, fotógrafas e marcas.',
};

export const tools = [
  { id: 'qr', name: 'QR Code Studio', desc: 'Nove tipos de QR Code, incluindo Pix, com exportação em SVG, PDF e PNG. 369 testes unitários e 86 de ponta a ponta.', href: 'https://qr-code-studio-free.vercel.app', image: ASSETS + 'projects/qr-code-studio.webp' },
  { id: 'compressify', name: 'Compressify', desc: 'Comprime e converte imagens em lote sem tirar os arquivos do navegador. 389 testes unitários e 115 de ponta a ponta.', href: 'https://compressify-free.vercel.app', image: ASSETS + 'projects/compressify.webp' },
];

export const model = {
  href: 'https://igordecastro.com.br/modelo',
  title: 'Na frente da câmera',
  desc: 'Editorial, streetwear e retrato. Meu portfólio de modelo.',
  photos: [ASSETS + 'model/estudio.webp', ASSETS + 'model/rua.webp', ASSETS + 'model/textura.webp'],
};

export const socials = [
  { id: 'linkedin', name: 'LinkedIn', handle: 'igor-cferreira', href: 'https://www.linkedin.com/in/igor-cferreira' },
  { id: 'instagram', name: 'Instagram', handle: '@igor_cferreira', href: 'https://www.instagram.com/igor_cferreira' },
  { id: 'github', name: 'GitHub', handle: 'Igorpcferreira', href: 'https://github.com/Igorpcferreira' },
];

export const kyber = { name: 'Kyber Tech', href: 'https://somoskyber.com.br', mark: ASSETS + 'kyber-mark.webp' };
