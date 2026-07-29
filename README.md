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
reference/                   protótipos e materiais de referência
```

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
