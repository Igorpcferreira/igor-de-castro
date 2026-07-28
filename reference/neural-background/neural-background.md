# Neural Background — guia de funcionamento

Background interativo e animado (rede neural / plexo de pontos conectados) pro hero
do portfólio pessoal. Criado e iterado dentro do **Claude Design** em três rodadas:
base (drift orgânico, pulso de respiração, atração de cursor) → pacotes de dados
viajando pelas conexões → disparos neurais em cascata.

## O que é isso, exatamente

Um único componente que desenha tudo em `<canvas>` 2D, sem dependências externas
além da fonte. Fica fixo atrás do conteúdo da página (`z-index: 0`), com um overlay
de gradiente escuro por cima pra manter o texto legível.

## Formato do arquivo (leia antes de mexer no código)

`Neural Background.dc.html` **não é um componente React puro** — é um artifact no
formato interno do Claude Design (`dc-runtime`, ver `support.js`). Ele usa:

- `<x-dc>...</x-dc>` como wrapper do template
- `<script data-dc-script data-props="...">` com uma classe
  `class Component extends DCLogic` (o "React" ali dentro, com `renderVals()` e
  ciclo de vida `componentDidMount` / `componentDidUpdate` / `componentWillUnmount`)
- `<sc-if value="{{ showDemo }}">` — controle de fluxo tipo template, equivalente a
  `{showDemo && <div>...}` em JSX
- `data-props="{...}"` — um JSON Schema que gera automaticamente o painel
  **Tweaks** no Claude Design (é dali que vêm os sliders de `density`,
  `greenAmount` etc.)

`support.js` é só o runtime que interpreta esse formato dentro do Claude Design —
**não precisa ir pro portfólio real**. Não dá pra simplesmente copiar o
`.dc.html` pra dentro do projeto de código; ele precisa ser portado (ver seção
"Portar pro portfólio real" abaixo).

## O que ele desenha, em ordem (todo frame, via Canvas 2D)

1. **Fundo** — preenche a tela com `#020409` sólido.
2. **Bokeh** — 11 blobs desfocados (gradiente radial) verdes/azuis, flutuando
   devagar ao fundo.
3. **Nós** — cada um com posição, profundidade `z` (0 = longe, 1 = perto),
   velocidade própria + "wobble" senoidal (drift orgânico), e cor verde ou azul
   dependendo da posição (mais verde à esquerda/topo — ver `greenP` em `setup()`).
4. **Atração magnética do cursor** — nós dentro do raio de interação são puxados
   na direção do mouse, com força proporcional à proximidade e à profundidade `z`.
5. **Malha de conexões** — calculada por um grid espacial (bucket por célula) em
   vez de comparar todos os pares (`O(n)` em vez de `O(n²)`); conecta nós
   próximos com linha cuja opacidade depende da distância e da profundidade.
6. **Triângulos de preenchimento** — entre trios de nós próximos e "na frente"
   (profundidade alta), com opacidade bem baixa, só pra dar sensação de superfície.
7. **Disparos neurais em cascata** (`updateFirings`) — de vez em quando um nó
   dispara sozinho e contagia os vizinhos em cadeia (2 a 4 saltos), perdendo força
   a cada salto; as conexões entre nós disparando ganham uma linha mais brilhante
   por cima (efeito de pulso elétrico).
8. **Pacotes de dados** (`updatePackets` + `drawPackets`) — pontos de luz que
   nascem num nó e viajam pela malha real (não em linha reta) por 2 a 4 saltos,
   deixando um rastro que dissipa; com o cursor ativo, o pacote tem mais chance de
   ser "puxado" na direção do nó mais próximo do mouse (`pickNext`).
9. **Cursor como nó temporário** — enquanto o mouse está ativo, desenha linhas do
   cursor até os nós próximos e um glow no ponto do cursor.
10. **Nós (glow final)** — redesenhados por cima de tudo, com respiração (pulso
    senoidal por nó, cada um com fase/velocidade própria) e brilho extra quando
    estão "disparando".

## Parâmetros ajustáveis (props)

São exatamente os controles que aparecem no painel **Tweaks** do Claude Design:

| Prop | Seção no painel | Padrão | Min | Max | O que controla |
|---|---|---|---|---|---|
| `density` | Rede | 1.3 | 0.4 | 1.8 | Quantidade de nós na malha (multiplica a contagem calculada a partir da área da tela) |
| `greenAmount` | Rede | 1.9 | 0 | 2 | Proporção de nós verdes vs. azuis (multiplica a probabilidade `greenP`, concentrada à esquerda/topo) |
| `interaction` | Interação | 2 | 0 | 2 | Força e raio da atração magnética do cursor |
| `packets` | Pacotes | 1 | 0 | 3 | Frequência de novos pacotes de dados nascendo na malha (`0` desliga) |
| `firingRate` | Disparos | 1 | 0 | 3 | Frequência dos disparos neurais espontâneos (`0` desliga) |
| `showDemo` | Demo | `true` | — | — | Liga/desliga o bloco de texto de exemplo (tag, título, parágrafo), usado só pra pré-visualizar o contraste sobre o background |

Todos os numéricos têm `step: 0.1`. `interaction` e `greenAmount` vão até 2 porque
representam "reforçado" — em `0` a interação/verde fica desligada.

## Como ajustar pelo painel Tweaks (Claude Design)

Dentro do Claude Design, o painel Tweaks (o mesmo do print, com os grupos "Rede",
"Interação", "Pacotes", "Disparos" e "Demo") edita ao vivo o valor de cada prop —
é o mesmo JSON que está no atributo `data-props` do `<script>`. Serve pra calibrar
visualmente antes de fixar os valores padrão (por exemplo, testar `density` mais
baixa, ou `firingRate` mais alto pra ver os disparos com mais frequência).

**Importante:** esse painel só existe dentro do Claude Design. Depois que o
componente for portado pro código real, os "sliders" desaparecem — os valores
viram props fixas do componente React (ou continuam ajustáveis, se você optar por
manter como props expostas).

## Como ajustar direto no código

Cada prop é lida com fallback, por exemplo:

```js
const density = this.props.density ?? 1;
```

Pra mudar o padrão sem depender do painel:

1. Editar o valor `"default"` dentro do JSON em `data-props` (no `.dc.html`), ou
2. Trocar o `?? 1` / `?? 1.3` etc. direto no corpo do método (`setup()`,
   `frame()`, `updateFirings()`, `updatePackets()`) pelo valor fixo desejado.

Outros pontos de ajuste fino que **não** viraram prop (estão fixos no código —
editar direto se quiser mexer):

- Contagem de nós, em `setup()`:
  ```js
  const count = Math.round(Math.min(190, (w * h) / (isMobile ? 12000 : 9000)) * density);
  ```
  teto de 190 nós; divisor de densidade por área (12000 no mobile, 9000 no desktop).
- Distância máxima de conexão entre dois nós:
  ```js
  this.linkDist = Math.min(210, Math.max(140, Math.sqrt(w * h) / 6));
  ```
- `updateFirings`: `0.006 * rate` é a chance de disparo espontâneo por frame;
  `maxGen` (2 a 4) é quantos saltos o disparo se propaga.
- `updatePackets`: `0.008 * rate` é a chance de nascer um pacote novo por frame;
  `hops` (1 a 3) são os saltos extras depois do primeiro.

## Portar pro portfólio real (Next.js/React)

Assumindo Next.js/React (como os outros projetos) — se o stack real for outro, o
princípio é o mesmo, só muda a sintaxe do componente:

1. Criar um client component, ex. `components/NeuralBackground.tsx`, com
   `'use client'` no topo (usa `window`, `canvas` e listeners de mouse — não roda
   no server).
2. Trocar a classe `DCLogic` por um componente funcional: `useRef` pro canvas,
   `useEffect` no lugar de `componentDidMount`/`componentWillUnmount` (retornando
   a função de cleanup), e props normais do React no lugar de `this.props`.
3. Copiar **sem alterar a matemática** os métodos `setup`, `loop`, `frame`,
   `updateFirings`, `updatePackets`, `pickNext`, `drawPackets`, `mulberry` — é aí
   que mora a identidade visual toda.
4. Remover o wrapper específico do Claude Design: `<x-dc>`, `<sc-if>`,
   `data-dc-script`, `renderVals()` — vira JSX normal
   (`{showDemo && (...)}`).
5. Manter: o `<canvas>` com `position: fixed; inset: 0; z-index: 0`, o overlay com
   gradiente escuro por cima (legibilidade do texto) e o listener de
   `prefers-reduced-motion`.
6. Expor `density`, `greenAmount`, `interaction`, `packets` e `firingRate` como
   props do componente React, com os mesmos defaults da tabela acima.
7. Importar a fonte Space Grotesk pelo `next/font/google` (ou o `<link>` do
   Google Fonts que já está no `<helmet>` do `.dc.html`).

## Detalhes técnicos que valem a pena preservar ao portar

- **Performance:** grid espacial pra achar vizinhos (`O(n)` em vez de `O(n²)`),
  `devicePixelRatio` limitado a 2, teto de 190 nós.
- **Composição assimétrica:** mais nós e mais verde à esquerda, dissipando pra
  direita (`Math.pow(rnd(), 1.45)` na posição X, e `greenP` decrescente com X e
  Y) — é proposital, cuidado pra não perder isso ao portar.
- **Acessibilidade:** com `prefers-reduced-motion: reduce`, o loop para de chamar
  `requestAnimationFrame`, pacotes e disparos param de nascer — mas o último frame
  continua desenhado (não quebra, só congela).
- **Mobile:** densidade de nós calculada com divisor diferente (12000 em vez de
  9000) pra não pesar em tela pequena; toque no celular ativa o cursor igual ao
  mouse (`pointerdown`/`touchmove`).

## Arquivos do pacote

- `Neural Background.dc.html` — o componente (formato Claude Design, ver acima).
- `support.js` — runtime do Claude Design que interpreta o `.dc.html` (não precisa
  ir pro projeto real).
- `uploads/ChatGPT Image ....png` — imagem de referência original que inspirou o
  visual (rede de pontos ciano/verde sobre preto).
