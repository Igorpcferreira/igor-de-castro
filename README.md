# Igor de Castro — Portfolio

Portfolio bilíngue (EN e pt-BR) de Igor de Castro, Desenvolvedor Full Stack.
O site combina uma interface inspirada em terminal com um background interativo
de rede neural em canvas.

## Stack

- Next.js 16 com App Router e export estático
- React 19 e TypeScript strict
- Tailwind CSS 4
- Space Grotesk + JetBrains Mono
- Canvas 2D, CSS e IntersectionObserver para motion

## Rodar localmente

```bash
npm install
npm run dev
npm run lint
npm run build
```

O build de produção é gerado em `out/`.

## Estrutura

```text
app/                         layout, metadata, estilos e página
components/LanguageProvider  estado de idioma e preferência local
components/NeuralBackground  engine do background interativo
components/sections/         hero, sobre, stack, experiência, projetos,
                             formação e contato
data/content.ts              conteúdo tipado em inglês e português
public/                      fotos e currículos finais
public/modelo/               site do portfólio de modelo, servido em /modelo
public/links/                página comercial da bio, servida em /links
reference/                   protótipos e materiais de referência
```

## Rota /links

Página da bio do Instagram com a identidade **Verde assinatura**, contato direto,
seis projetos com vídeo e site, duas ferramentas gratuitas e portfólio de modelo.
HTML, CSS e JavaScript locais em `public/links/`, copiados pelo export para
`out/links/`. Os vídeos existentes da Kyber são carregados da VPS só após o clique.

Em `next dev`, abra `http://localhost:3000/links/index.html`. No export estático,
abra `/links/`. O guia do Instagram, as pranchas e a documentação de manutenção
ficam em `reference/links/`. Veja `reference/links/README.md` para os detalhes.

## Rota /modelo

`igordecastro.com.br/modelo` é o portfólio de modelo, um site estático próprio
em HTML, CSS e JavaScript, com fotos e fontes locais. Ele não usa Next, React
nem Tailwind: os arquivos ficam em `public/modelo/` e o export estático os copia
verbatim para `out/modelo/`, preservando o endereço `/modelo`.

Todas as referências internas são relativas, então a página funciona igual em
qualquer subpasta. Para editar, mexa direto nos arquivos:

```text
public/modelo/index.html     estrutura e conteúdo
public/modelo/styles.css     tokens, tipografia, layout e cena 3D
public/modelo/photos.js      ordem, arquivos, legendas e filtros das fotos
public/modelo/app.js         galeria, filtros, lightbox e interação 3D
public/modelo/assets/        fotografias e fontes locais
```

Em `next dev` os arquivos de `public/` não recebem índice de diretório: abra
`http://localhost:3000/modelo/index.html`. Na build estática, `/modelo` resolve
sozinho. O design system, as pranchas responsivas e a composição Remotion do
pacote ficam em `reference/modelo/`, fora do que vai ao ar.

Os assets de marca em `public/` incluem favicons, ícones de instalação e a
imagem Open Graph usada nos previews de WhatsApp e redes sociais. Os tokens,
cursores HUD e ícones SVG compartilhados seguem o design system do projeto.

O idioma padrão é inglês. A escolha feita pelas bandeiras do header fica salva
no navegador. Cada idioma baixa o currículo correspondente, e o contato
principal abre uma conversa direta no WhatsApp com mensagem localizada.

## Conteúdo

Os currículos finais em `public/` são a fonte de verdade para experiência,
projetos, formação, cursos e idiomas. O conteúdo completo foi preservado no
site; detalhes mais densos da experiência aparecem em painéis expansíveis para
manter uma leitura inicial objetiva.

## Background neural

O desktop preserva a calibração visual original. No mobile, a engine usa uma
faixa controlada de 62 a 105 nós, distribuição mais uniforme e eventos neurais
um pouco mais frequentes. O componente respeita `prefers-reduced-motion` e
pausa quando a página fica oculta.
