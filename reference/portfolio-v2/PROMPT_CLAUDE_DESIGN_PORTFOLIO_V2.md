# Briefing mestre para o Claude Design: Portfólio Igor de Castro V2

## 1. Missão

Crie uma proposta V2 de altíssimo nível para o portfólio profissional de Igor de Castro. O objetivo não é apenas deixar o site mais bonito: é aumentar ao máximo a percepção de valor profissional, tornar as competências fáceis de comprovar e construir uma experiência digital memorável, autoral e comercialmente eficiente.

O resultado deve fazer o visitante pensar:

> “Esse profissional entende sistemas complexos, domina produto e engenharia, cuida dos detalhes e consegue transformar tecnologia em algo claro, confiável e desejável.”

O deslumbramento deve vir da combinação de três coisas:

1. uma ideia visual própria;
2. execução técnica refinada;
3. provas concretas de capacidade.

Não transforme o portfólio em uma demonstração aleatória de bibliotecas ou em uma interface genérica de inteligência artificial. Cada efeito deve ter função narrativa, comercial ou de usabilidade.

### Diretriz visual inegociável

A proposta atual de **rede neural + Matrix + terminal** deve ser preservada. Ela é a identidade do projeto e não está sendo colocada em dúvida. Este briefing pede evolução, refinamento e expansão desse conceito, nunca sua substituição por outra estética.

Portanto:

- mantenha a rede neural viva como elemento visual dominante e recorrente;
- mantenha o universo Matrix/terminal, a atmosfera escura e os sinais verdes/cianos;
- use `components/NeuralBackground.tsx` e os protótipos neurais existentes como fundação criativa;
- melhore profundidade, realismo, luz, legibilidade, composição e integração com o conteúdo;
- faça o 3D nascer da rede neural e pertencer a ela;
- não troque o conceito por minimalismo editorial, gradiente abstrato, glassmorphism, arquitetura corporativa genérica ou outra identidade desconectada.

“Living Architecture” é apenas uma camada narrativa dentro da Neural Matrix existente: mostra os sinais neurais reorganizando sistemas e módulos. Não é uma nova marca visual e não substitui a Matrix.

---

## 2. Contexto fornecido

Você receberá somente:

- este arquivo Markdown;
- o projeto atual do portfólio, que funciona como V1 e fonte de verdade.

Repositório:

`C:\Users\user\Documents\AAA_PROGRAMMING\igor-de-castro`

Antes de desenhar, inspecione obrigatoriamente:

- `app/page.tsx`
- `app/layout.tsx`
- `app/globals.css`
- `components/NeuralBackground.tsx`
- `components/Navbar.tsx`
- `components/Hero.tsx`
- `components/Projects.tsx`
- `components/Experience.tsx`
- `components/Skills.tsx`
- `components/Services.tsx`
- `data/content.ts`
- `public/`
- `reference/`

Use `data/content.ts`, os currículos atuais e os conteúdos existentes como fonte factual. Preserve mudanças já presentes no repositório. Não reescreva informações profissionais por suposição.

### Forma de entrega solicitada

Crie primeiro uma proposta/protótipo V2 isolado em:

`reference/portfolio-v2/claude-design/`

Não substitua os arquivos de produção da V1 nesta etapa. O protótipo deve ser executável, responsivo e detalhado o suficiente para decidir a implementação definitiva.

Observe e replique a lógica de entrega que já existe em `reference/design-system/`:

- `Design System.dc.html`
- `prototypes/Portfolio Prototype.dc.html`
- `prototypes/Portfolio Mobile.dc.html`
- `prototypes/ios-frame.jsx`
- `support.js`
- `assets/`

A V2 precisa obrigatoriamente ter **duas composições completas e separadas**, não apenas uma página desktop que encolhe com media query:

1. `Portfolio V2 Desktop.dc.html`
2. `Portfolio V2 Mobile.dc.html`

Crie também `Design System V2.dc.html` e os componentes/imports auxiliares necessários. O protótipo mobile deve seguir o padrão visualizável já usado no projeto, com frame de aparelho quando útil, mas o conteúdo interno precisa representar uma página mobile real, completa e rolável.

Cada arquivo `.dc.html` deve abrir e funcionar de forma independente dentro da estrutura entregue, com imports relativos válidos e sem depender de arquivos da V1 que não tenham sido copiados ou referenciados corretamente.

---

## 3. Objetivo comercial

O portfólio deve atender públicos diferentes sem diluir a mensagem.

### Prioridade 1: recrutadores e lideranças de engenharia

Eles precisam entender em poucos segundos:

- qual é o posicionamento de Igor;
- qual nível de complexidade ele já enfrentou;
- em quais tecnologias atua;
- quais evidências sustentam as afirmações;
- como acessar currículo, LinkedIn e contato.

### Prioridade 2: profissionais técnicos e tomadores de decisão

Eles devem perceber:

- raciocínio de arquitetura;
- capacidade de modernizar sistemas sem romper regras de negócio;
- domínio full stack;
- preocupação com testes, qualidade, acessibilidade e performance;
- capacidade de comunicar decisões técnicas.

### Prioridade 3: potenciais clientes

Eles podem descobrir a Kyber Tech e os serviços oferecidos, mas essa trilha não deve competir com a proposta principal do portfólio pessoal. Crie uma bifurcação comercial clara:

- trilha principal: carreira, experiência, cases e contratação profissional;
- trilha secundária: projetos, sites e automações por meio da Kyber Tech.

Não misture as duas propostas no primeiro CTA.

### Escada de convencimento

A narrativa precisa responder nesta ordem:

1. Quem é Igor e qual problema profissional ele resolve?
2. Ele já trabalhou com complexidade real?
3. Ele domina backend, frontend, dados e qualidade?
4. Existem provas verificáveis em produtos e projetos?
5. Como posso conhecê-lo ou contratá-lo?

---

## 4. Diagnóstico da V1

A V1 já possui uma assinatura visual forte: fundo neural vivo, atmosfera escura, verde/ciano, Matrix e linguagem de terminal. Ela também possui conteúdo profissional relevante. O objetivo é preservar essa assinatura e fazer com que ela comunique ainda mais valor, sem esconder informações importantes.

### O que deve ser preservado

- a rede neural como DNA visual;
- a referência Matrix como universo estético;
- a linguagem de terminal como assinatura de interface;
- o clima tecnológico e sofisticado;
- a identidade bilíngue;
- os dados reais de experiência, projetos e testes;
- a combinação entre engenharia corporativa e criação de produtos;
- o cuidado já existente com movimento reduzido e densidade mobile.

### Problemas prioritários encontrados

1. **A hierarquia entre efeito e mensagem pode melhorar.** Na primeira tela, o fundo neural chama mais atenção do que o posicionamento profissional. A solução é integrar melhor texto e rede com máscaras locais, luz e composição, não remover ou descaracterizar a rede.
2. **Baixo contraste percebido no hero.** Nome, texto e retrato aparecem escuros demais em relação ao fundo e podem parecer incompletos durante o primeiro carregamento.
3. **Hero mais identitário do que comercial.** O nome é grande, mas a proposta de valor, as provas e a próxima ação não ganham a mesma força.
4. **Header genérico e apertado.** A composição atual segue o padrão logo, links e botão; em viewport mobile estreito há recorte/overflow dos controles.
5. **A hierarquia tipográfica pode amadurecer.** Preserve JetBrains Mono e o terminal como assinatura, mas combine-os com uma fonte de leitura para textos longos e cases.
6. **Scanlines precisam de controle local.** Preserve a textura Matrix, mas module sua intensidade atrás de textos, fotos e áreas densas para não reduzir clareza.
7. **Projetos visualmente uniformes.** Cards majoritariamente textuais não mostram o acabamento real dos produtos nem criam desejo de abrir os cases.
8. **Todos os projetos parecem ter o mesmo peso.** Falta uma curadoria de cases principais versus arquivo de projetos.
9. **Competências são listadas, não demonstradas.** Muitos chips de tecnologia informam repertório, mas não mostram decisões, contexto ou profundidade.
10. **O caminho de recrutamento e o caminho comercial da Kyber competem.** É preciso separar melhor os dois objetivos.
11. **Idioma e metadados não estão plenamente alinhados.** O HTML nasce em inglês, alguns metadados estão em português e a troca de idioma acontece no cliente.
12. **Ativos duplicados.** `igor-hero.png` e `igor-square.png` usam a mesma imagem e praticamente o mesmo peso; a V2 deve gerar derivados adequados em vez de duplicar payload.

Trate os itens 1 a 5 e o overflow mobile como problemas P0 da proposta, sempre por refinamento do conceito neural/Matrix e nunca pela remoção dele.

---

## 5. Posicionamento recomendado

### Ideia central

Igor não deve ser apresentado apenas como “mais um desenvolvedor full stack”. A combinação mais diferenciada é:

> Engenharia de software para modernizar sistemas complexos e transformar regras de negócio em produtos digitais confiáveis.

### Linha memorável recomendada

Português:

> Modernizo sistemas críticos sem perder o que já funciona.

Inglês:

> I modernize critical systems while preserving what already works.

### Texto de apoio sugerido

Português:

> Desenvolvedor Full Stack Pleno, atuando de Java e Spring a Angular e React, das regras de negócio à experiência final.

Inglês:

> Mid-level Full Stack Developer working across Java, Spring, Angular and React, from business rules to the final experience.

Valide a nomenclatura e a tradução com os dados atuais antes de fechar o texto. Não invente senioridade, disponibilidade, cargo, números ou especialidades.

### Hierarquia da primeira impressão

1. proposta de valor;
2. prova resumida;
3. identidade de Igor;
4. objeto/experiência visual;
5. ações.

O nome continua importante, mas não precisa ser o maior argumento comercial da página.

---

## 6. Conceito criativo: Neural Matrix / Living Architecture

### Definição

Expanda a metáfora atual de **rede neural + Matrix + terminal** com uma camada chamada **Living Architecture**, ou **Arquitetura Viva**.

A Neural Matrix continua sendo o universo principal. Dentro dela, o site representa software como um sistema vivo: sinais neurais atravessam estruturas antigas, regras, fluxos, módulos e interfaces que se reorganizam sem perder sua essência. Isso conecta a estética já existente ao trabalho real de modernização.

Não redesenhe o site como uma apresentação limpa de arquitetura corporativa. A sensação deve continuar imersiva, elétrica, escura e viva, como se o visitante estivesse navegando dentro de uma rede neural em funcionamento.

### Objeto assinatura no hero

Crie um objeto 3D abstrato, sofisticado e reconhecível:

- emerge dos nós e conexões da própria rede neural;
- começa como um monólito denso, com camadas internas e sinais circulando;
- reage levemente ao ponteiro, sem virar brinquedo;
- durante o scroll, abre suas camadas;
- revela módulos, contratos, fluxos de dados e pontos de integração;
- reorganiza-se em uma arquitetura clara e modular;
- depois alimenta visualmente os cases e as seções seguintes.

O objeto não deve parecer um cérebro genérico, cubo de criptomoeda, esfera cromada de template ou animação espacial sem significado. Ele deve comunicar transformação de arquitetura sem deixar de parecer parte da Matrix neural do portfólio.

### Relação com o fundo neural

- preserve a rede neural existente como campo ambiental contínuo e identidade visual principal;
- preserve o fluxo de pulsos, disparos, nós e conexões que já dá vida à V1;
- reduza contraste e densidade onde houver texto;
- faça alguns sinais da rede convergirem para o objeto 3D;
- transforme os mesmos sinais em conectores da narrativa durante o scroll;
- mantenha apenas uma experiência gráfica pesada por viewport.

O 3D complementa a rede; não toma seu lugar. Se houver conflito de performance ou linguagem, preserve primeiro a rede neural e simplifique o objeto.

Não execute simultaneamente, em potência máxima, rede densa, partículas, scanlines, vídeo e objeto 3D.

### Comportamento narrativo do objeto

O objeto pode cumprir uma sequência como esta:

1. **Hero:** sistema denso e vivo;
2. **Provas:** abre três ou quatro camadas com métricas reais;
3. **Modernização:** separa legado, serviços, interface e dados;
4. **Cases:** seus módulos tornam-se molduras dos projetos;
5. **Contato:** recompõe-se em um símbolo simples e estável.

No mobile, o 3D em tempo real pode ser substituído por estados pré-renderizados, SVG/CSS ou vídeo curto otimizado, mas a identidade Neural Matrix deve continuar visível em uma versão leve. A história importa mais do que renderizar toda a geometria em tempo real.

---

## 7. Sistema visual

### Personalidade desejada

- preciso;
- maduro;
- tecnológico;
- neural;
- inspirado em Matrix e terminal;
- humano;
- cinematográfico;
- confiável;
- experimental com contenção.

Evite a estética “dashboard futurista genérico”, excesso de glassmorphism, bordas brilhantes em todos os elementos, grades bento previsíveis e textos que parecem gerados por IA.

### Paleta

Preserve a paleta e o reconhecimento imediato da V1, aumentando a sofisticação:

- **carbono profundo:** base, não preto puro em todas as áreas;
- **grafite:** superfícies e planos de profundidade;
- **verde Matrix:** ação, atividade, pulsos neurais, foco e vida;
- **ciano de dados:** conexões, integrações, detalhes técnicos e foco secundário;
- **osso quente:** seções humanas, tipografia clara e contraste editorial;
- **âmbar muito discreto:** alerta, transição de legado ou detalhe fotográfico, se necessário.

Use verde e ciano como sinais vivos da Matrix. Eles podem continuar muito presentes na atmosfera, desde que a hierarquia de leitura permaneça clara.

### Tipografia

- mantenha Space Grotesk, ou uma display equivalente com personalidade, para títulos;
- adote uma sans altamente legível para corpo de texto;
- mantenha JetBrains Mono em labels, comandos, evidências, números, endpoints, navegação e microdetalhes;
- em textos longos, combine a identidade mono com uma fonte de leitura para aumentar conforto sem perder o terminal;
- trabalhe escala, largura de coluna e entrelinha para leitura confortável;
- evite blocos longos em caixa alta.

### Texturas e superfícies

- preserve scanlines como parte da Matrix, mas varie sua opacidade e aplique máscaras locais para proteger legibilidade;
- permita áreas visualmente silenciosas;
- substitua repetição de cards por composição editorial;
- use bordas e cortes diagonais apenas quando reforçarem a arquitetura;
- introduza profundidade por luz, contraste e movimento, não apenas blur.

### Fotografia

A foto atual humaniza, mas o ambiente quente e floral compete com a linguagem tecnológica. Na proposta:

- teste um recorte editorial mais forte;
- melhore luz e contraste sem alterar a identidade da pessoa;
- use tratamento de cor controlado, preservando pele natural;
- não esconda o rosto atrás de efeitos;
- considere a foto em uma seção humana de alto contraste, em vez de obrigatoriamente prendê-la ao objeto 3D.

Recomendação futura, fora do protótipo: realizar um retrato profissional em ambiente neutro, escuro ou arquitetônico. Não invente uma nova aparência com IA sem autorização expressa.

---

## 8. Novo header: System Rail

O header precisa deixar de parecer uma navbar convencional.

Ele ainda deve parecer um instrumento de navegação da Neural Matrix: tipografia de terminal, coordenadas, pulsos e estados de conexão podem permanecer, desde que sejam funcionais, legíveis e baseados em informações reais.

### Desktop

Crie um sistema de navegação em duas ilhas e um trilho narrativo:

- ilha esquerda: `IGOR / SYSTEMS` ou assinatura tipográfica curta;
- ilha direita: idioma textual `PT | EN`, currículo e LinkedIn/contato;
- trilho vertical discreto em uma lateral com número, nome da seção e progresso;
- indicador de capítulo atual ligado ao scroll;
- o trilho pode reagir ao objeto 3D, como se navegasse pelas camadas do sistema.

Não use uma faixa opaca ocupando toda a largura. Não centralize seis links pequenos como em um template de SaaS.

### Mobile

O cabeçalho deve conter apenas:

- assinatura curta;
- número/nome do capítulo atual;
- botão de menu claramente identificável.

O menu abre um drawer ou painel em tela cheia, com:

- foco aprisionado corretamente;
- botão de fechar explícito;
- targets confortáveis, idealmente 44 a 48 px;
- safe areas respeitadas;
- links de idioma em texto, não bandeiras;
- currículo, LinkedIn e contato acessíveis.

Resolva obrigatoriamente o overflow observado em aproximadamente 390 px de largura.

### O que remover

- bandeiras como seletor principal de idioma;
- falso status `online` se não representar presença em tempo real;
- excesso de links sempre expostos;
- CTA em pílula genérica sem relação com a linguagem visual.

Um status factual como `Goiânia · UTC−3 · PT/EN` é mais confiável do que simular presença online.

---

## 9. Hero

### Conteúdo obrigatório no primeiro viewport

Em desktop e em um mobile de 390 × 844 px, devem aparecer sem rolagem excessiva:

- proposta de valor completa;
- nome e função;
- uma linha curta de contexto;
- ao menos duas provas;
- CTA principal;
- acesso ao currículo ou LinkedIn;
- parte suficiente do objeto assinatura para gerar curiosidade.

A rede neural precisa estar claramente presente desde o primeiro viewport. Crie uma zona de contraste ao redor do texto em vez de apagar o fundo ou trocar a identidade do hero.

### CTAs recomendados

- primário: `Ver cases com evidências`
- secundário: `Baixar currículo`
- terciário: `LinkedIn` ou `Vamos conversar`

O CTA principal rola para o primeiro case, não para uma grade genérica de projetos.

### Provas compactas

Use apenas dados confirmados no conteúdo atual. Exemplos já presentes no repositório:

- `4+ anos em tecnologia`
- `10+ sistemas entregues`
- `950+ testes automatizados`

Se um número puder ser interpretado de mais de uma forma, explique-o no contexto do case. Não transforme soma de testes em “cobertura” e não invente impacto financeiro.

### Typewriter

O `whoami` pode sobreviver como microinteração de boot, mas:

- não pode atrasar o conteúdo principal;
- não pode ser necessário para compreender a página;
- não deve ocupar a função de headline;
- deve ser desativado ou simplificado em movimento reduzido.

Todo o conteúdo essencial deve existir imediatamente no HTML.

---

## 10. Arquitetura de informação recomendada

Limite a experiência a aproximadamente oito capítulos fortes.

### Capítulo 0: Hero / posicionamento

Entregue identidade, proposta, provas e ação.

### Capítulo 1: Proof Strip

Uma faixa editorial curta com métricas reais e contexto. Cada prova pode revelar de onde vem, sem abrir modal obrigatório.

### Capítulo 2: Case principal de modernização

Crie um case sanitizado sobre a atuação em modernização de sistema crítico no contexto da Marinha do Brasil/Minsait, usando somente informações já públicas e existentes no portfólio.

Estruture em:

- contexto;
- restrições;
- papel de Igor;
- o que precisava ser preservado;
- decisões técnicas;
- stack;
- como qualidade e compatibilidade foram tratadas;
- aprendizados.

Não mostre telas internas, código proprietário, nomes de pessoas, credenciais, topologia, dados, endpoints reais, volumes não publicados ou detalhes operacionais confidenciais.

Sem métricas públicas de negócio, use linguagem qualitativa precisa. Nunca invente porcentagens de ganho, economia ou velocidade.

### Capítulo 3: Cases de produto com evidências

Dê destaque a dois produtos que já possuem dados verificáveis.

#### Compressify

Evidências existentes a validar no repositório:

- processamento no navegador e privacidade;
- redução medida de até 86% em lote, apresentada com contexto;
- 389 testes unitários/de integração;
- 115 testes E2E;
- Lighthouse 95 em performance e 100 em acessibilidade, boas práticas e SEO.

Mostre problema, decisão de arquitetura, experiência, validação e resultado.

#### QR Code Studio

Evidências existentes a validar no repositório:

- personalização e exportação;
- 369 testes unitários/de integração;
- 86 testes E2E;
- Lighthouse 100 em acessibilidade, boas práticas e SEO.

Use interface real, gravação real ou poster fiel. Não invente screenshots.

### Capítulo 4: Live Architecture Lab / bastidores

Transforme a seção de bastidores em uma prova prática de engenharia. O visitante poderá executar uma requisição sintética e segura contra uma API real hospedada na VPS. A resposta percorre uma pequena arquitetura demonstrativa e o mesmo objeto visual do hero acende o caminho percorrido.

O laboratório deve explicar, de forma acessível:

- navegador e interface;
- gateway/reverse proxy;
- API Java/Spring Boot;
- cache Redis;
- persistência PostgreSQL;
- resposta e duração observada pelo navegador.

A experiência deve mostrar um trace ID público descartável e tempos realmente medidos para aquela requisição. Uma segunda execução pode demonstrar cache hit, somente se isso estiver de fato implementado. O visitante deve poder alternar entre visão visual e uma tabela textual acessível.

No protótipo do Claude Design, represente claramente os estados `pronto`, `executando`, `sucesso`, `cache hit`, `indisponível`, `rate limit` e `reduced motion`. Enquanto a VPS/API real não estiver conectada, rotule os valores como `dados de demonstração`; nunca apresente números simulados como telemetria ao vivo.

Essa seção deve responder “como este próprio portfólio foi construído?” e pode exibir a arquitetura real da aplicação, decisões de performance e mecanismos de fallback. Ela substitui uma lista genérica de ferramentas por uma demonstração concreta.

Dentro deste capítulo, apresente também a entrada para o minijogo estratégico **Neural Ops: Migration Protocol**. O laboratório comprova a arquitetura real do portfólio; o jogo transforma o raciocínio de modernização em uma experiência interativa. Eles pertencem ao mesmo universo, mas devem ser ações separadas para não sobrecarregar a página.

### Capítulo 5: Arquivo selecionado

Reúna Kyber Tech, Manu’s Barbearia, KOUNTING Streetwear, Gabriela Camargo, FitJourneyAI e demais projetos em um arquivo mais compacto. Um projeto experimental deve ser marcado claramente como conceitual/autoral quando for o caso.

Não dê a todos o mesmo espaço de um case principal. Cada item precisa de:

- categoria;
- papel desempenhado;
- uma imagem/poster;
- stack essencial;
- resultado ou aprendizado factual;
- link, quando público e funcional.

### Capítulo 6: Capacidade e trajetória

Una competências e experiência numa narrativa de crescimento:

- backend e regras de negócio;
- frontend e experiência;
- dados e integrações;
- qualidade e entrega;
- comunicação e produto.

Evite “nuvem de chips”. Mostre cada capacidade ligada a uma prova ou projeto.

### Capítulo 7: Sobre, formação e contato

Feche com uma seção mais humana e silenciosa:

- retrato;
- texto pessoal curto;
- formação relevante;
- localização/idiomas apenas se confirmados;
- CTA profissional;
- caminho secundário para a Kyber Tech.

O footer pode recompor o objeto 3D em um símbolo estável, encerrando a história visual.

---

## 11. Design dos cases

Os cases são o principal mecanismo de aumento de valor percebido.

### Cartão fechado

Cada case principal deve mostrar:

- imagem, vídeo curto ou composição visual real;
- título e frase-problema;
- papel de Igor;
- duas ou três evidências;
- convite para explorar.

### Transição para case aberto

Use uma transição compartilhada elegante: o poster cresce, os dados se reorganizam e a narrativa aparece. Pode ser um painel em página, rota dedicada ou expansão bem construída, desde que:

- URL e botão voltar funcionem de forma previsível se houver rota;
- teclado, foco e leitura por tecnologia assistiva sejam respeitados;
- o conteúdo não dependa da animação;
- mobile não sofra com uma camada excessivamente pesada.

### Estrutura interna

1. resumo em uma frase;
2. problema;
3. contexto e restrições;
4. contribuição de Igor;
5. decisões técnicas;
6. evidências;
7. resultado;
8. aprendizados;
9. links ou demonstração.

### Regra de honestidade

Não fabricar:

- métricas;
- depoimentos;
- clientes;
- usuários;
- faturamento;
- cobertura de testes;
- dashboards;
- selos;
- código;
- telas de sistemas privados.

Se uma informação ainda não existir, sinalize-a como conteúdo pendente no protótipo.

---

## 12. Uso inteligente da lista mestre

As bibliotecas são ferramentas, não a direção criativa.

| Tecnologia | Papel recomendado | Aplicação concreta | Limite |
|---|---|---|---|
| Three.js | extensão tridimensional da rede neural | núcleo gerado pela Matrix que se transforma em arquitetura modular | uma cena principal, subordinada ao DNA neural, com fallback e orçamento de GPU |
| Motion | sistema de movimento da interface | scroll progress, transformações, expansão de cases, drawer e estados | animações rápidas, coerentes e acessíveis |
| Remotion | produção de mídia do portfólio | reels dos cases, filme de apresentação e versões 16:9/9:16 | usar no pipeline de vídeo, não carregar o editor no site |
| React Bits | matéria-prima para 1 ou 2 microinterações | cursor localizado no objeto, glare ou pixel transition adaptado | não espalhar efeitos nem preservar aparência padrão |
| Kokonut UI | referência de mecânica e acessibilidade | drawer mobile ou transição de navegação | redesenhar completamente para a identidade própria |
| bklit UI | visualização de evidências reais | comparação de suítes de teste e auditorias | sem radar de habilidades ou porcentagens arbitrárias |

### Three.js

Use Three.js apenas se o objeto 3D elevar a narrativa. Requisitos:

- uma única cena persistente ou cuidadosamente descartada;
- geometria otimizada e instancing quando fizer sentido;
- resolução interna controlada e DPR limitado;
- pausa quando a aba estiver oculta ou a cena estiver fora da viewport;
- resposta a perda de contexto;
- carregamento progressivo;
- poster estático imediato;
- modo de baixa potência e fallback mobile;
- ausência de texto essencial dentro do canvas.

Prefira uma implementação estável com WebGL e progressive enhancement. WebGPU pode ser uma melhoria opcional, não uma dependência para acessar o conteúdo.

### Motion

Faça do Motion a camada principal de movimento DOM:

- `useScroll` e `useTransform` para sincronizar capítulos;
- `layout`/`layoutId` para transições entre cards e cases;
- `AnimatePresence` para menu e painéis;
- animações baseadas em transform e opacity;
- variantes reduzidas para `prefers-reduced-motion`.

Evite aplicar animação de entrada a todos os parágrafos. Informação crítica não pode começar invisível.

### Remotion

Use Remotion em um pipeline separado para criar:

- teasers silenciosos de 8 a 12 segundos para cases;
- filme de portfólio de 45 a 60 segundos;
- versão 16:9 para apresentação e LinkedIn;
- versão 9:16 para Reels/Shorts;
- posters derivados do mesmo sistema visual;
- captions e textos legíveis mesmo sem áudio.

No site, entregue vídeos prontos e otimizados em MP4/WebM, com poster. Carregue-os sob demanda. Use o Remotion Player somente se houver uma razão real para composição dinâmica no navegador.

### React Bits

Escolha no máximo duas ideias e reestilize o código para que deixem de parecer componentes de catálogo. Candidatos:

- cursor-alvo limitado aos nós do objeto no hero;
- pixel transition ou glare hover em posters de cases.

Não usar simultaneamente electric border, click spark, partículas, texto fragmentado e cursor customizado global.

### Kokonut UI

Use como base de comportamento, não como linguagem pronta. Bons candidatos:

- drawer acessível para mobile;
- navegação mórfica como referência de transição;
- painel de detalhe de projeto.

Remova estilo de template e alinhe tipografia, ritmo, foco e superfícies ao conceito Neural Matrix / Living Architecture.

### bklit UI

Use somente quando um gráfico tornar uma prova mais compreensível. Exemplo válido:

- barras agrupadas com testes unitários/de integração e E2E de Compressify e QR Code Studio.

Sempre inclua valores escritos e alternativa tabular acessível. Não use:

- radar de habilidades;
- gráfico de pizza de stacks;
- porcentagem de domínio;
- atividade GitHub inventada;
- barras de “confiança”.

---

## 13. Sistema de movimento

### Princípios

- movimento explica relações;
- resposta de interface é rápida;
- movimento narrativo é mais lento e cinematográfico;
- nada disputa com leitura;
- o usuário mantém controle;
- reduced motion é uma direção alternativa completa, não apenas duração zero.

### Linguagem

Use o comportamento de sistemas:

- atrair;
- conectar;
- agrupar;
- separar;
- resolver;
- estabilizar.

Evite bounce excessivo, overshoot infantil, elementos flutuando sem função e parallax agressivo.

### Faixas de tempo sugeridas

- microfeedback: 120 a 180 ms;
- troca de estado: 220 a 360 ms;
- expansão de case: 450 a 700 ms;
- transformação narrativa: vinculada ao scroll, com amortecimento;
- transição de página: curta o suficiente para nunca bloquear navegação.

Não trate esses valores como dogma; valide a sensação na implementação.

### Reduced motion

Quando `prefers-reduced-motion` estiver ativo:

- substitua transformações espaciais por crossfades discretos;
- congele ou simplifique o fundo neural;
- apresente o objeto 3D como poster;
- evite scroll-jacking;
- mantenha todos os estados e informações disponíveis.

---

## 14. Mobile: experiência própria, não desktop comprimido

A versão mobile deve ser mais leve e editorial.

### Requisitos

- hero completo e compreensível em 390 × 844 px;
- nenhum item do header fora da viewport;
- rede neural leve sempre presente como identidade;
- objeto 3D substituível por poster animado ou estados leves;
- cards em fluxo vertical sem carrossel obrigatório;
- vídeos carregados apenas após intenção;
- tamanho de texto confortável;
- targets de toque generosos;
- sem cursor customizado;
- sem hover como única forma de descobrir conteúdo;
- menus e painéis navegáveis por teclado e leitor de tela;
- respeito a safe areas;
- teste também em 320 px de largura.

### Regra de prioridade

Em aparelhos modestos, preserve nesta ordem:

1. conteúdo;
2. clareza;
3. navegação;
4. imagem/poster;
5. movimento;
6. 3D em tempo real.

---

## 15. VPS como parte do produto

Igor possui uma VPS e ela deve ser usada de forma intencional. Não limite a proposta a um site estático hospedado na Vercel. Trate o portfólio como uma pequena plataforma full stack em produção, capaz de comprovar backend, infraestrutura, segurança, observabilidade e entrega contínua.

A VPS não deve existir apenas para dizer que há um servidor. Ela precisa habilitar funções que aumentem o valor profissional percebido.

### Experiência assinatura: Live Architecture Lab

A aplicação mais importante da VPS será o laboratório descrito no Capítulo 4.

Fluxo recomendado:

```text
Visitante
  ↓
CDN / proteção de borda
  ↓
Reverse proxy com HTTPS
  ├─→ Frontend do portfólio
  └─→ API pública de demonstração
          ├─→ serviço Java + Spring Boot
          ├─→ Redis para cache e rate limit
          └─→ PostgreSQL com dados sintéticos
```

Ao clicar em `Executar trace`, o visitante inicia uma operação determinística e sem dados pessoais. A resposta retorna somente informações seguras para visualização, por exemplo:

- identificador efêmero;
- etapas públicas do fluxo;
- cache hit/miss real;
- duração de cada etapa;
- timestamp;
- versão pública da API.

O frontend traduz a resposta em pulsos percorrendo a Neural Matrix e sua Living Architecture. O mesmo resultado deve aparecer em texto/tabela para não depender de WebGL, cor ou animação.

Se a infraestrutura suportar, os passos podem chegar progressivamente por Server-Sent Events, criando um trace realmente vivo. WebSocket só deve ser adotado se houver comunicação bidirecional que o justifique. Sempre forneça fallback para uma resposta JSON convencional.

### Outros usos valiosos da VPS

1. **Contato seguro:** endpoint próprio com validação, honeypot, rate limit, proteção contra abuso e encaminhamento de mensagem. Não exponha segredo no cliente.
2. **Analytics com privacidade:** solução self-hosted, com eventos mínimos e sem fingerprinting, somente após a política de consentimento adequada.
3. **Observabilidade real:** métricas, logs estruturados, health checks e alertas privados para Igor. O público vê no máximo um estado simplificado e seguro.
4. **Mídia do portfólio:** entrega de vídeos gerados em Remotion, posters e assets pesados com cache, compressão e suporte a range requests. Use CDN na frente quando fizer sentido.
5. **Automação de deploy:** pipeline que testa, gera artefatos, cria imagens versionadas e publica com rollback seguro.
6. **Conteúdo versionado:** cases e traduções podem vir de uma fonte administrável, desde que o HTML essencial continue pré-renderizado ou tenha fallback estático.
7. **Preview controlado:** ambiente de staging protegido para revisar cases, vídeos e versões antes de publicar.

### Stack de referência, não obrigação cega

Uma arquitetura coerente com o perfil profissional pode usar:

- Docker Compose;
- Caddy ou Nginx como reverse proxy;
- TLS automatizado;
- frontend Next.js;
- API Java/Spring Boot;
- PostgreSQL;
- Redis;
- storage local bem gerenciado ou object storage compatível com S3;
- Uptime Kuma para disponibilidade;
- Prometheus/Grafana ou alternativa mais leve para observabilidade;
- Umami ou ferramenta equivalente para analytics self-hosted;
- GitHub Actions ou pipeline equivalente para CI/CD.

Não instale todos os serviços apenas para aumentar a stack. A implementação final deve escolher o menor conjunto que entrega o laboratório, segurança operacional, mídia e observabilidade com clareza.

Não presuma quantidade de CPU, RAM, disco ou presença de GPU. Registre esses dados como pendência para a implementação. O 3D continua renderizado no dispositivo do visitante; a VPS sustenta API, mídia, automação e operação.

### Resiliência

O portfólio precisa continuar útil se a VPS estiver indisponível:

- conteúdo, cases, currículo e contatos principais continuam acessíveis;
- Live Architecture Lab entra em estado `temporariamente indisponível`;
- poster e visual 3D local continuam funcionando;
- nenhuma seção fica eternamente carregando;
- timeouts, retry manual e circuit breaker visual devem ser previstos;
- nunca degrade a página inteira porque uma API secundária falhou.

### Segurança e privacidade

- não exponha IP, dashboards administrativos, portas internas ou versões sensíveis;
- não retorne logs internos ou stack traces ao navegador;
- use CORS restrito, headers de segurança e secrets fora do repositório;
- aplique rate limiting no laboratório e no contato;
- aceite apenas payloads estritamente validados;
- não permita query SQL, comando, URL arbitrária ou texto executável enviado pelo visitante;
- mantenha dados do laboratório totalmente sintéticos;
- retenha o mínimo possível de dados pessoais;
- mantenha painéis de observabilidade autenticados e privados;
- documente backup, atualização e rollback.

### O que o Claude Design deve prototipar

O Claude Design não precisa provisionar a VPS nesta etapa. Ele deve:

- desenhar a experiência completa do laboratório em desktop e mobile;
- representar todos os estados operacionais;
- propor o contrato visual dos dados;
- indicar onde a resposta real substitui o mock;
- criar a tela/painel de bastidores;
- mostrar como a cena 3D e a tabela textual recebem o mesmo trace;
- incluir no handoff uma sugestão de endpoints e payloads, sem implementar segredos;
- diferenciar inequivocamente `demo` de `live`.

### Contrato conceitual sugerido

```json
POST /api/lab/trace

{
  "scenario": "read-profile"
}

{
  "traceId": "public-ephemeral-id",
  "timestamp": "ISO-8601",
  "apiVersion": "public-version",
  "cache": "HIT | MISS",
  "totalMs": 42,
  "steps": [
    { "id": "gateway", "label": "Gateway", "durationMs": 3 },
    { "id": "service", "label": "Spring API", "durationMs": 12 },
    { "id": "data", "label": "PostgreSQL", "durationMs": 21 }
  ]
}
```

Esse payload é apenas uma referência de design. A implementação deve calcular valores reais, validar o cenário por allowlist e nunca aceitar nomes de serviços ou operações arbitrárias do navegador.

### Status público sem teatro

Se houver um indicador no site, mostre somente fatos reais como:

- API conectada/desconectada;
- versão pública;
- último deploy bem-sucedido;
- latência observada nesta sessão.

Não use `online`, uptime, número de usuários ou atividade em tempo real se isso não vier de uma fonte verdadeira e segura.

---

## 16. Minijogo 2D: Neural Ops — Migration Protocol

Inclua no protótipo um minijogo estratégico 2D integrado à Neural Matrix. Ele não é um easter egg sem propósito: deve apresentar, de forma memorável, como Igor pensa sobre modernização, testes, compatibilidade, performance, segurança e estabilidade.

### Premissa

O visitante recebe um sistema legado que continua atendendo usuários. Sua missão é modernizá-lo sem interromper serviços essenciais, perder regras de negócio ou introduzir regressões.

Mensagem central:

> Modernizar não é destruir e reconstruir. É evoluir com estratégia, evidência e controle de risco.

O jogo deve reforçar o posicionamento profissional “Modernizo sistemas críticos sem perder o que já funciona”.

### Nome e chamada

Nome recomendado:

`NEURAL OPS // MIGRATION PROTOCOL`

CTA de entrada:

> Você modernizaria um sistema crítico sem interromper a operação?

Botão:

`INICIAR PROTOCOLO`

O Claude Design pode propor um nome melhor, desde que mantenha a ligação com Neural Matrix, estratégia e modernização.

### Posição na jornada

- não colocar o jogo no hero;
- apresentá-lo depois dos cases principais e junto ao capítulo de bastidores/Live Architecture Lab;
- torná-lo claramente opcional;
- permitir que recrutadores continuem para experiência, currículo e contato sem jogar;
- carregar o código e os assets somente depois da intenção do visitante.

### Transição visual

O jogo deve parecer parte orgânica do portfólio:

1. o visitante seleciona um agrupamento de nós da rede neural;
2. a câmera ou composição aproxima-se desse agrupamento;
3. nós e conexões tornam-se o tabuleiro estratégico 2D;
4. pulsos da Matrix passam a representar requisições e dependências;
5. ao finalizar ou sair, o tabuleiro dissolve-se novamente no fundo neural.

Não criar uma estética paralela de pixel art, cartoon ou jogo mobile genérico. Preserve preto, verde Matrix, ciano, terminal, scanlines controladas e o comportamento orgânico dos pulsos.

### Tabuleiro

O mapa representa uma arquitetura simplificada e totalmente fictícia, formada por módulos conectados:

- interface legada;
- autenticação;
- regras de negócio;
- API/gateway;
- serviço principal;
- banco de dados;
- cache;
- integrações externas;
- observabilidade.

Use dados e nomes sintéticos. O mapa nunca deve reproduzir arquitetura, regras ou topologia de sistemas reais dos empregadores ou clientes de Igor.

### Objetivo da partida

Migrar os módulos obrigatórios antes do fim do ciclo, mantendo simultaneamente:

- estabilidade;
- compatibilidade;
- segurança;
- capacidade de entrega;
- confiança dos testes.

A partida deve durar aproximadamente:

- desktop: 2 a 4 minutos;
- mobile: 60 a 120 segundos.

O jogo precisa ser compreensível em menos de 20 segundos. Inclua tutorial contextual curto e opção `PULAR TUTORIAL`.

### Recursos estratégicos

O jogador recebe uma quantidade limitada de recursos por ciclo, por exemplo:

- tempo de engenharia;
- capacidade operacional;
- janela de mudança;
- orçamento de risco.

Esses valores são mecânicas fictícias e devem ser apresentados como tal. Não use números que possam ser confundidos com métricas profissionais reais.

### Ações do jogador

Ofereça um conjunto pequeno de decisões com tradeoffs claros:

- mapear dependências;
- criar testes de caracterização;
- adicionar contrato/API compatível;
- migrar um módulo;
- criar cache;
- corrigir vulnerabilidade;
- adicionar observabilidade;
- executar canary release;
- realizar rollback;
- pagar dívida técnica.

Cada ação deve explicar sua consequência antes da confirmação. Evite dezenas de botões ou regras difíceis de aprender.

### Incidentes e eventos

Durante os ciclos, introduza eventos como:

- regressão detectada;
- aumento de latência;
- dependência quebrada;
- integração instável;
- vulnerabilidade encontrada;
- dívida técnica acumulada;
- pico de tráfego;
- falha após deploy.

Os eventos devem ser determinísticos ou claramente comunicados. Não faça o jogador perder apenas por aleatoriedade invisível.

### Princípio de vitória

A melhor estratégia não é migrar tudo rapidamente. O jogador vence quando moderniza a parte necessária mantendo o sistema operando e controlando risco.

Possíveis dimensões do resultado:

- continuidade;
- qualidade;
- segurança;
- evolução arquitetural;
- uso responsável de recursos.

Não transforme essas dimensões em alegações sobre a habilidade do visitante. Elas avaliam somente a partida.

### Resultado conectado ao portfólio

Ao final, traduza as decisões do jogador em caminhos reais do portfólio:

- priorizou testes → Compressify e QR Code Studio;
- preservou contratos/compatibilidade → case de modernização;
- adotou cache e observabilidade → Live Architecture Lab e VPS;
- priorizou experiência → projetos frontend;
- usou canary ou rollback → bastidores de deploy.

Exemplo de encerramento:

> Você estabilizou o sistema antes de acelerar a migração. Veja como aplico esse princípio em projetos reais.

Os links finais devem levar diretamente aos cases relacionados, transformando o jogo em navegação contextual.

### Desktop

Prototipe:

- tabuleiro amplo com dependências visíveis;
- painel lateral de ações;
- indicadores de estabilidade e ciclos;
- atalhos de teclado opcionais;
- hover apenas como reforço, nunca como único acesso à informação;
- animação dos pulsos integrada à rede neural;
- botão permanente de sair/voltar ao portfólio;
- resultado com links para cases.

### Mobile

Crie uma versão genuinamente adaptada:

- menos módulos simultâneos;
- mapa legível sem pinça obrigatória;
- ações em bottom sheet ou drawer;
- controles grandes por toque;
- painel de situação resumido;
- eventos apresentados sem cobrir todo o tabuleiro;
- partida mais curta;
- orientação vertical como padrão;
- nenhuma interação dependente de hover;
- botão de sair sempre alcançável.

A versão mobile precisa aparecer dentro de `Portfolio V2 Mobile.dc.html`, não apenas numa prancha separada.

### Acessibilidade do jogo

- permitir jogar por teclado;
- foco visível e ordem previsível;
- nomes acessíveis para nós e ações;
- não depender apenas de verde/vermelho;
- disponibilizar uma visão estratégica em lista ou grade textual;
- anunciar eventos importantes sem interromper toda a leitura;
- oferecer pausa;
- eliminar tremores, zoom e flashes em reduced motion;
- oferecer modo sem limite de tempo, se o tempo fizer parte da mecânica;
- não iniciar música ou efeitos sonoros automaticamente.

### Áudio

Áudio é opcional e começa desligado. Se utilizado:

- pulsos sintéticos discretos;
- feedback curto de ação;
- alerta sem susto;
- volume e mute persistentes;
- nenhuma informação transmitida apenas por som.

### VPS e modo diário

A primeira versão pode funcionar totalmente no cliente. A VPS pode expandi-la depois com:

- desafio diário gerado por seed;
- distribuição de cenários novos;
- validação segura do resultado;
- compartilhamento por ID público;
- estatísticas anônimas sobre decisões;
- ranking anônimo opcional;
- eventos especiais.

Não exigir login para jogar. Não implementar ranking na primeira versão se ele não tiver moderação, proteção contra abuso e validação server-side. O jogo básico deve continuar funcionando quando a VPS estiver indisponível.

### Tecnologia sugerida

Comece pela opção de menor peso que entregue a experiência:

- Canvas 2D, aproveitando o conhecimento e a linguagem do `NeuralBackground.tsx`;
- React para HUD, tutorial, ações e conteúdo acessível;
- Motion para painéis e transições DOM;
- Web Audio apenas sob consentimento;
- Phaser ou PixiJS somente se as necessidades reais do jogo justificarem o bundle adicional.

Three.js não é necessário para o tabuleiro. O jogo é 2D e deve carregar separadamente da cena 3D do hero.

### Estados obrigatórios no protótipo

- convite fechado;
- tutorial;
- início de partida;
- seleção de nó;
- escolha e confirmação de ação;
- incidente;
- estado crítico;
- pausa;
- vitória;
- falha recuperável;
- resultado e recomendação de case;
- versão reduced motion;
- versão textual acessível;
- offline/VPS indisponível.

### Regras de contenção

- não bloquear conteúdo profissional atrás do jogo;
- não obrigar cadastro;
- não pedir informações pessoais;
- não criar mecânica viciante ou monetização;
- não usar arquitetura de cliente real;
- não carregar engine e áudio no primeiro acesso à página;
- não fazer o jogo competir visualmente com o hero;
- não deixar a partida longa demais para um recrutador;
- não premiar decisões tecnicamente irresponsáveis apenas por velocidade.

---

## 17. Performance e engenharia de frontend

A sofisticação só conta se o site continuar rápido e estável.

### Estratégia

- renderize conteúdo principal no servidor/HTML;
- hidrate apenas ilhas interativas;
- carregue Three.js e cases audiovisuais sob demanda;
- adie experiências abaixo da dobra;
- use `IntersectionObserver` para pausar ou iniciar mídia;
- respeite `prefers-reduced-motion` e, quando possível, `Save-Data`;
- não bloqueie LCP com shader, fonte ou vídeo;
- evite layout shift reservando dimensões;
- não inicialize animações invisíveis em background tabs.

### Imagens

- elimine a duplicação entre `igor-hero.png` e `igor-square.png`;
- gere tamanhos responsivos reais;
- produza AVIF/WebP com fallback quando necessário;
- mantenha um original de qualidade como fonte;
- defina width/height ou aspect-ratio;
- crie posters específicos para cada vídeo.

### Metas

Busque no percentil 75:

- LCP até 2,5 s;
- INP até 200 ms;
- CLS até 0,1.

Além disso:

- evite long tasks causadas pela cena;
- mantenha scroll fluido em notebooks integrados;
- estabeleça budget para JavaScript, texturas e vídeo;
- registre no handoff o peso medido, não estimado.

### Progressão de qualidade

Crie pelo menos três níveis:

- **full:** desktop capaz, 3D e interação completa;
- **lite:** menos geometria, DPR menor e rede reduzida;
- **static:** poster e transições DOM simples.

O nível escolhido nunca deve alterar o conteúdo.

---

## 18. Acessibilidade

Objetivo mínimo: WCAG 2.2 AA.

### Checklist obrigatório

- contraste suficiente em texto, controles e estados de foco;
- foco visível e nunca oculto pelo header;
- ordem semântica coerente;
- um `h1` claro e headings hierárquicos;
- canvas decorativo com `aria-hidden="true"`;
- toda informação representada em HTML;
- alternativa a drag e hover;
- teclado completo em menu, cases e seletor de idioma;
- escape fecha painéis;
- foco retorna ao acionador;
- mensagens de estado não dependem somente de cor;
- vídeos com captions quando houver fala;
- texto alternativo contextual em imagens reais;
- targets com pelo menos 24 × 24 CSS px e preferência prática por 44 a 48 px;
- nenhuma animação essencial ou impossível de interromper;
- sem conteúdo importante começando invisível por causa de reveal.

Evite cursor em forma de mira global. Se houver cursor especial, limite-o a uma área opcional do hero e mantenha o cursor nativo em controles e texto.

---

## 19. Internacionalização, SEO e descoberta

A V2 deve ter idioma correto desde o HTML inicial, não somente após hidratação.

### Rotas sugeridas

- `/` ou `/pt-br` para português;
- `/en` para inglês.

Para o público atual, recomendo português como raiz e `/en` como alternativa. Se a estratégia mudar para recrutamento internacional, documente a inversão.

### Requisitos técnicos

- conteúdo estático por locale;
- `lang` correto em cada documento;
- título, descrição e Open Graph localizados;
- canonical por idioma;
- `hreflang`/alternates;
- sitemap;
- robots;
- imagem social coerente com a nova identidade;
- URLs compartilháveis de cases;
- metadata alinhada ao texto visível;
- funcionamento compatível com static export, se essa arquitetura for mantida.

### Dados estruturados

Inclua `Person`/`ProfilePage` com dados verdadeiros:

- nome;
- função;
- imagem;
- URLs oficiais;
- LinkedIn e GitHub em `sameAs`;
- localização somente se confirmada.

Não marque como organização o que é perfil pessoal. Não adicione avaliações, prêmio ou vínculo não comprovado.

### Presença profissional

Sugira no handoff, sem comprar ou publicar automaticamente:

- domínio pessoal próprio;
- e-mail profissional nesse domínio;
- favicon e assinatura visual próprios;
- currículo consistente com a linguagem do site;
- preview social específico para português e inglês.

---

## 20. Conteúdo e tom de voz

### Voz

- direta;
- precisa;
- confiante sem arrogância;
- técnica sem jargão vazio;
- humana sem autobiografia longa.

### Regras de escrita

- comece por impacto e contexto;
- prefira verbos e decisões a adjetivos;
- explique siglas quando necessário;
- evite “apaixonado por tecnologia”, “soluções inovadoras”, “experiências incríveis” e outros clichês;
- não declare excelência; demonstre-a;
- mantenha textos equivalentes, não literais, entre PT e EN.

### Exemplo de transformação

Fraco:

> Desenvolvedor apaixonado por criar soluções inovadoras.

Forte:

> Modernizo sistemas críticos e construo produtos digitais do backend à interface, com testes e decisões documentadas.

Use o segundo princípio, validando cada afirmação.

---

## 21. Conversão e contato

### Ação principal

Ao terminar os cases, o visitante deve encontrar um CTA contextual:

> Quer discutir um sistema, uma vaga ou um produto?

Ofereça:

- LinkedIn;
- e-mail;
- currículo;
- WhatsApp somente se Igor quiser manter esse canal público.

### Trilha Kyber Tech

Inclua uma chamada separada e visualmente distinta:

> Precisa de um site, automação ou experiência digital para sua empresa? Conheça a Kyber Tech.

Ela pode aparecer depois dos cases ou no fechamento, nunca como concorrente do CTA profissional no hero.

### Medição futura

Sugira eventos de analytics, mas não configure serviço externo sem autorização:

- clique em currículo;
- abertura de case;
- conclusão de case;
- clique em LinkedIn;
- clique em contato;
- encaminhamento para Kyber;
- troca de idioma.
- abertura e início do jogo;
- conclusão ou saída do jogo;
- case acessado a partir do resultado do jogo.

Não use métricas de vaidade nem rastreamento invasivo.

---

## 22. O que não fazer

- Não criar um template de IA com bento grid, gradientes roxos e frases genéricas.
- Não remover, substituir, esconder ou descaracterizar a rede neural/Matrix/terminal.
- Não transformar a V2 em uma identidade visual completamente diferente da V1.
- Não substituir a rede neural por um fundo minimalista, gradiente genérico ou somente pelo objeto 3D.
- Não usar todos os componentes da lista mestre.
- Não colocar efeito em todos os elementos.
- Não esconder conteúdo atrás de animações longas.
- Não usar scroll-jacking.
- Não criar terminal interativo como navegação principal.
- Não inventar comandos, logs ou status que sugiram dados reais.
- Não usar gráfico de habilidade.
- Não atribuir porcentagens a linguagens e frameworks.
- Não fabricar métricas, depoimentos ou resultados.
- Não expor informação de sistemas governamentais ou corporativos.
- Não transformar todo projeto em case principal.
- Não deixar 3D ou vídeo comprometer mobile.
- Não usar bandeiras como única indicação de idioma.
- Não deixar texto abaixo de contraste aceitável por estética.
- Não copiar a aparência padrão de React Bits, Kokonut UI ou qualquer catálogo.
- Não usar a VPS somente para exibir um badge ou status decorativo.
- Não fazer o funcionamento básico do portfólio depender da VPS.
- Não apresentar telemetria simulada como dado real.
- Não criar um jogo desconectado da trajetória e dos cases.
- Não obrigar ninguém a jogar para entender ou navegar pelo portfólio.
- Não alterar a V1 de produção nesta etapa.

---

## 23. Entregáveis do Claude Design

Entregue dentro de `reference/portfolio-v2/claude-design/`:

1. `Design System V2.dc.html`;
2. `Portfolio V2 Desktop.dc.html` com a experiência completa em desktop;
3. `Portfolio V2 Mobile.dc.html` com composição mobile própria e completa;
4. `Neural Ops Game.dc.html` com fluxo jogável ou protótipo interativo completo;
5. `Architecture Lab.dc.html`, caso o laboratório precise de uma prancha isolada;
6. componentes `.jsx`, runtime e imports necessários para abrir os protótipos;
7. pasta `assets/` organizada, sem duplicações desnecessárias;
8. desktop completo em pelo menos 1440 × 900;
9. mobile completo em 390 × 844;
10. estado mobile em 320 px para provar ausência de overflow;
11. header desktop, header mobile fechado e menu aberto;
12. hero em modo full, lite e fallback estático;
13. um case principal aberto;
14. arquivo/grade de projetos;
15. entrada do jogo integrada ao fluxo completo de desktop;
16. entrada e partida adaptada dentro do fluxo mobile;
17. tutorial, partida, incidente, pausa, vitória, falha e resultado do jogo;
18. modo reduced motion e visão textual acessível do jogo;
19. Live Architecture Lab nos estados pronto, executando, sucesso, cache hit, erro, rate limit e offline;
20. visualização textual acessível do trace;
21. contato e trilha Kyber;
22. reduced motion geral;
23. loading, erro e fallback da experiência 3D;
24. tokens visuais documentados;
25. inventário de componentes;
26. mapa de movimento;
27. lista de assets necessários;
28. lista explícita de conteúdo pendente;
29. notas de implementação para Next.js, jogo e integração com a VPS;
30. contrato conceitual da API do laboratório e da expansão diária do jogo;
31. diagrama sugerido de deploy;
32. relatório breve com decisões, riscos e tradeoffs.

Não considere a versão mobile entregue apenas porque o desktop usa CSS responsivo. Os dois arquivos precisam estar visíveis na pasta, abrir separadamente e demonstrar as decisões específicas de cada plataforma, como já acontece nos protótipos existentes.

### Protótipo de mídia

Se possível, inclua também:

- storyboard de 8 a 12 segundos para um teaser de case;
- storyboard de 45 a 60 segundos para o vídeo geral do portfólio;
- keyframes 16:9 e 9:16;
- indicação do que será gerado em Remotion e do que será capturado do site.

Não é obrigatório renderizar os vídeos finais nesta etapa, mas a linguagem deve estar prevista no sistema.

---

## 24. Critérios de aprovação

A proposta só está pronta quando todas as respostas abaixo forem “sim”.

### Clareza comercial

- É possível entender em cinco segundos o que Igor faz?
- A proposta de valor aparece antes da decoração?
- Os três públicos têm caminhos claros?
- O CTA principal é inequívoco?

### Autoridade

- Os principais argumentos estão ligados a evidências?
- Cases mostram problema, papel, decisão e resultado?
- A senioridade percebida vem da profundidade, não de adjetivos?
- Nenhum dado foi inventado?

### Originalidade

- A identidade Neural Matrix da V1 continua reconhecível imediatamente?
- A Living Architecture funciona como evolução da rede, e não como substituição?
- O header foge de um template comum sem abandonar a linguagem de terminal?
- A rede neural ganhou ainda mais profundidade e significado narrativo?
- Os componentes externos parecem parte de um sistema autoral?

### Experiência

- O primeiro viewport funciona em 390 × 844?
- O header não recorta em 320 px?
- O conteúdo continua completo sem WebGL?
- Reduced motion é uma experiência boa?
- Teclado e foco funcionam?

### Performance

- O conteúdo aparece antes do 3D?
- Há poster e fallback?
- A cena pausa fora de contexto?
- Imagens e vídeos são responsivos e medidos?
- Não há movimento pesado concorrente em uma mesma viewport?

### VPS e full stack

- A VPS habilita uma prova real, em vez de funcionar apenas como hospedagem?
- O laboratório mostra claramente quando os dados são demo ou live?
- Existem estados offline, timeout, rate limit e retry?
- O site continua completo quando a API falha?
- O trace tem alternativa textual acessível?
- O desenho evita expor infraestrutura ou dados sensíveis?
- A proposta de backend combina com as competências que Igor quer demonstrar?

### Neural Ops

- O jogo comunica o raciocínio profissional de Igor?
- É possível entender a regra principal em menos de 20 segundos?
- A partida cabe em 2 a 4 minutos no desktop e é mais curta no mobile?
- O jogo parece nascer da Neural Matrix em vez de parecer um produto colado ao site?
- Há uma versão mobile realmente adaptada?
- É possível sair, pausar e continuar navegando sem jogar?
- O resultado encaminha para cases relevantes?
- O jogo funciona localmente se a VPS falhar?
- Existe alternativa acessível aos elementos visuais e temporizados?
- Todos os módulos, incidentes e dados são fictícios e seguros?

### Consistência

- Tipografia, cor, superfícies e movimento seguem uma ideia comum?
- PT e EN têm o mesmo nível de cuidado?
- Metadata e idioma do documento estão corretos?
- O caminho Kyber não confunde o posicionamento pessoal?

---

## 25. Prioridades de implementação

### P0: valor imediato

- corrigir header mobile;
- tornar hero legível no primeiro frame;
- colocar posicionamento e CTAs acima da dobra;
- separar carreira e Kyber;
- transformar projetos em cases visuais;
- substituir lista de skills por capacidades comprovadas;
- garantir conteúdo sem depender de animação.

### P1: assinatura

- implementar System Rail;
- evoluir a rede neural/Matrix existente sem descaracterizá-la;
- criar o objeto Living Architecture como extensão da rede;
- sincronizar narrativa com scroll;
- construir transição compartilhada dos cases;
- criar sistema visual editorial;
- estruturar locales no servidor/build.
- prototipar e integrar o Live Architecture Lab com a VPS;
- implementar contato protegido, health checks e observabilidade privada.
- prototipar o Neural Ops completo em desktop e mobile;
- implementar a primeira versão do jogo no cliente, com carregamento sob demanda e integração com os cases.

### P2: expansão

- pipeline Remotion;
- teasers por case;
- rotas completas de cases;
- analytics consentido;
- novo retrato;
- domínio e e-mail profissionais;
- experimentos WebGPU opcionais.
- analytics self-hosted e pipeline de mídia na VPS.
- adicionar desafios diários, seeds e validação de resultados do jogo pela VPS;
- avaliar ranking anônimo somente após segurança, privacidade e moderação.

Se tempo ou performance ficarem limitados, preserve P0, reduza o 3D e entregue a ideia com movimento DOM e posters. A força profissional não pode depender da GPU.

---

## 26. Referências técnicas verificadas

Use documentação oficial como base de implementação:

- [Motion: layout animations](https://motion.dev/docs/react-layout-animations)
- [Motion: scroll animations](https://motion.dev/docs/react-scroll-animations)
- [Three.js: responsive design](https://threejs.org/manual/en/responsive.html)
- [Three.js: WebGPURenderer](https://threejs.org/manual/en/webgpurenderer)
- [Remotion: documentação](https://www.remotion.dev/docs/)
- [Remotion Player](https://www.remotion.dev/docs/player)
- [React Bits: documentação](https://reactbits.dev/get-started/index)
- [Kokonut UI: documentação](https://kokonut-labs-kokonutui.mintlify.app/)
- [bklit UI: componentes](https://bklit.com/docs/components)
- [bklit UI: bar chart](https://bklit.com/docs/components/bar-chart)
- [Next.js: static exports](https://nextjs.org/docs/app/guides/static-exports)
- [Next.js: internationalization](https://nextjs.org/docs/app/guides/internationalization)
- [Next.js: metadata e Open Graph](https://nextjs.org/docs/app/getting-started/metadata-and-og-images)
- [W3C: WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [W3C: novidades da WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)
- [Google Search: ProfilePage structured data](https://developers.google.com/search/docs/appearance/structured-data/profile-page)
- [web.dev: Core Web Vitals thresholds](https://web.dev/articles/defining-core-web-vitals-thresholds)

---

## 27. Instrução final ao Claude Design

Não trate este briefing como pedido para simplesmente “deixar mais futurista”. Comece pelo posicionamento, organize as provas, desenhe a jornada e só então use movimento e 3D para materializar a ideia.

Você tem liberdade criativa para propor uma solução melhor do que os exemplos descritos, desde que preserve obrigatoriamente:

- a proposta visual de rede neural, Matrix e terminal;
- o componente neural como assinatura central;
- clareza comercial;
- honestidade factual;
- sigilo profissional;
- acessibilidade;
- performance;
- autoria visual;
- funcionamento mobile;
- separação entre marca pessoal e Kyber Tech.

O resultado final deve parecer uma experiência concebida especificamente para a trajetória de Igor de Castro, e não um portfólio que poderia receber qualquer nome.
