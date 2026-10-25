# Igor de Castro — /links

**Versão atual: IgorOS (25/10/2026).** Escolhida por Igor entre as três direções de `prototipos/` (A · IgorOS, B · Console, C · Stories), que continuam aqui para consulta, com o painel de comparação em `prototipos/index.html`. Substitui a versão de setembro. A página final está em `public/links/`; esta pasta guarda referências e documentação, como acontece com `/modelo`. O histórico das versões anteriores continua em `docs/`.

## Abrir

- Arquivo final: `../../public/links/index.html`.
- Em `next dev`, abra `/links/index.html`; no export estático ou num servidor estático simples, `/links/`. O `.claude/launch.json` do worktree serve a raiz do repositório: `/public/links/` e `/reference/links/prototipos/`.
- Imagem de compartilhamento: `docs/og.html` é a fonte e `docs/render-og.cjs` gera `public/links/assets/og-image.jpg` (JPEG, cerca de 85 KB, para a prévia do WhatsApp).
- Guia do Instagram: `INSTAGRAM.md`.

## Direção

A página é a tela inicial de um sistema, o "IgorOS", com a identidade do portfólio (Space Grotesk e JetBrains Mono, neon `#52ff7d`, ciano `#35c8ff`) e o mesmo fundo em rede neural, portado sem mudar a matemática para `public/links/neural.js`.

- **Pôster de contato:** o retrato grande, com o selo "Cofundador da Kyber Tech" numa pílula escura (legível sobre a foto) e **deslize para conversar**. Arrastar até o fim abre o WhatsApp; um toque simples também abre.
- **Barra de status:** hora de Goiânia e a ilha dinâmica, que mostra a seção atual ("11 projetos no ar", "Monte seu pedido").
- **Widgets:** experiência (4+ anos), onde trabalha hoje (Minsait · Grupo Indra, sem citar projeto ou cliente, por pedido de Igor), portfólio de desenvolvedor e Kyber Tech.
- **Projetos:** carrossel com o cartão do centro em destaque, filtro Todos/Reais/Conceitos e player em folha que sobe do rodapé (arrastar para baixo ou "voltar" fecha).
- **Do que você precisa?:** marque um ou mais serviços e a mensagem do WhatsApp já sai pronta.
- **Atalhos:** redes, currículo, ferramentas grátis, portfólio de modelo e salvar contato como ícones de app.
- **IgorOS:** a ficha técnica no estilo da tela de Ajustes, com "Mais informações".
- **Dock:** o WhatsApp sempre a um toque, mais Projetos e Enviar.

Ícones: Boxicons (MIT), só onde ajudam a reconhecer algo; sprite no topo do `index.html`, licença em `assets/boxicons-LICENSE.txt`. Movimento: entrada curta dos widgets, brilho do "deslize" quatro vezes, troca de fotos só enquanto o widget aparece. `prefers-reduced-motion` mostra tudo pronto e deixa o fundo neural parado. Sem JavaScript, todo o conteúdo e todos os links continuam no HTML: os cartões levam direto ao site do projeto.

## Arquivos de implementação

| Arquivo | Responsabilidade |
| --- | --- |
| `public/links/index.html` | Conteúdo, links, metadados, sprite de ícones e o player |
| `public/links/styles.css` | Tokens, layout mobile-first, componentes, estados e movimento |
| `public/links/app.js` | WhatsApp, deslize, ilha, carrossel e filtro, serviços, fotos, player, compartilhar e hora |
| `public/links/neural.js` | Fundo neural do portfólio em script clássico (`window.mountNeural`) |
| `public/links/assets/fonts/` | JetBrains Mono e Space Grotesk (subconjunto latino, OFL em `OFL.txt`) |
| `public/links/assets/projects/` | Capas dos projetos. **O portfólio principal também usa essas imagens**: não renomeie nem apague |
| `public/links/assets/igor-poster.webp` | Retrato vertical do pôster (720×960) |
| `public/links/assets/model/` | Três recortes 3:4 das fotos do portfólio de modelo |
| `public/links/assets/igor-de-castro.vcf` | Contato para salvar, servido como arquivo estático |

HTML, CSS e JavaScript puros, sem build próprio; scripts clássicos, então a página também abre direto do arquivo. Caminhos relativos e nada de CDN.

## Projetos e vídeos

Todos os vídeos vêm de `https://media.somoskyber.com.br/portfolio/<slug>/<slug>-v1.mp4`, a mesma VPS do site da Kyber. Nenhum MP4 é pedido antes do toque. Com economia de dados ligada, o vídeo não começa sozinho.

| Projeto | Etiqueta | Vídeo | Site |
| --- | --- | --- | --- |
| Lume | Conceito Kyber · Beleza | 35 s | lume-portfolio.vercel.app |
| Aura | Conceito Kyber · Joalheria | 33 s | aura-joalheria-portfolio.vercel.app |
| BRUMA | Conceito Kyber · 3D | 52 s | bruma-portfolio.vercel.app |
| Construtora Premium | Cliente Kyber · Construtora | 45 s | premiumconstrutora.com.br |
| André Mei | Site de atleta (não é cliente: feito de graça para um familiar, regra do site da Kyber) | 61 s | www.andremei.com.br |
| Manu’s Barbearia | Cliente Kyber · Barbearia | 56 s | manusbarbearia.com.br |
| Gabriela Camargo | Cliente Kyber · Fotografia | 35 s | gabrielacamargofoto.com.br |
| Infinita Saúde | Cliente Kyber · Saúde | 47 s | www.infinitafisio.com.br |
| Jordanna Santos | Cliente Kyber · Beleza | 44 s | www.jordannasantostecnica.com.br |
| Kounting Streetwear | Minha marca · Streetwear | 53 s | www.kountingstreetwear.com.br |
| Casa Umbra | Conceito Kyber · Arquitetura (site só para computador) | 48 s | casa-umbra-portfolio.vercel.app |

Encanto Gourmet ficou de fora: saiu do ar (contrato encerrado, registrado em `kyber-tech/components/content.jsx`). Didata não entrou por ser produto construído pelo Pedro.

Para incluir um projeto, copie um `<a class="card">` do carrossel e troque o `href` (site), a capa, `data-kind` (`conceito`, `cliente`, `atleta` ou `marca`), `data-name`, `data-label`, `data-video`, `data-more`, `data-stack` (itens separados por `|`) e, se precisar, `data-note` e `data-desktop-only`. O contador do widget e as bolinhas se ajustam sozinhos.

## Contatos e metadados

WhatsApp confirmado por Igor: **556284196646**, sem o 9 adicional. A constante está em `app.js`; os `href` estáticos e o `.vcf` repetem o número para funcionar sem JavaScript. Se ele mudar, troque nos três lugares.

O status "Disponível" é texto fixo na ilha do `index.html`: troque ou apague quando a agenda fechar. Canonical e Open Graph apontam para `https://igordecastro.com.br/links/`. Sem pixel, cookies, formulário ou analytics; `data-link` marca os destinos e o objeto `UTM` do `app.js` acrescenta parâmetros se um dia for preciso.
