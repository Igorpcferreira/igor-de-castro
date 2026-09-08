# Entrega — `/links`

Pacote publicável em `public/links/`, servido em `igordecastro.com.br/links`.
HTML, CSS e JS puros, caminhos relativos, fontes locais, sem rede e sem build.

```text
index.html
styles.css
app.js
assets/           fontes, favicons, imagem OG e miniaturas dos sites
docs/             este arquivo
```

As pranchas (desktop 1440, tablet 834, mobile 390), os estados e o design system
estão em `Links Igor de Castro — Pranchas.dc.html`, fora do pacote.

## Direção de arte

- **Grafite, papel e um acento âmbar.** Não herda o verde neon do portfólio de dev nem o
  terracota da página de modelo: essa é uma terceira coisa, o "cartão de visita técnico".
  O âmbar (#ffd23f) marca só o que converte — CTA, rótulo de grupo e anel de foco.
- **Duas colunas até 1080 px.** A identidade (monograma, nome, credenciais, CTA) fica fixa
  à esquerda; os links rolam à direita. O CTA nunca sai da tela no desktop, e no mobile
  reaparece como dock fixo no rodapé.
- **Hierarquia em vez de lista.** Os links vêm agrupados em Trabalho, Outras frentes e Redes,
  com três pesos visuais: cards grandes (portfólio de dev e Kyber), cards médios (modelo e
  Kounting) e chips compactos (LinkedIn, Instagram, GitHub). A ordem do brief é preservada.
- **Credibilidade em quatro linhas.** Minsait, Marinha do Brasil, PUC Goiás e a base em
  Goiânia ficam numa tabela de filetes logo abaixo do posicionamento — resolve o recrutador
  sem tirar espaço do dono de comércio, que segue direto para o CTA âmbar.
- **Tipografia condensada nas duas fontes locais do `/modelo`** (URW base35, licença
  incluída em `assets/fonts/LICENSE.txt`), então nada de CDN e nada de peso extra.

## Monograma IC

Direção escolhida: **as duas letras vindo de eixos opostos e travando no lugar** — é a que
mantém o monograma que você já usa hoje (IC condensado, `letter-spacing` −0,08em, filete
vertical e assinatura em caixa alta) em vez de redesenhá-lo.

- 0 → 0,62 s: o **I** desce, o **C** entra pela direita com 0,1 s de atraso.
- 0,62 → 0,72 s: as letras travam na tração negativa, o I dá um pulso âmbar.
- 0,72 → 1,24 s: o filete cresce em `scaleY` e a assinatura aparece.
- CSS puro, roda uma vez, sem laço, sem biblioteca, sem SMIL. Só o monograma se move.
- `prefers-reduced-motion: reduce` entrega o estado final no primeiro frame.
- O mesmo lockup é o favicon (`favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`) e a
  base da imagem OG.

## Contato

Constante única no topo do `app.js`:

```js
const WHATSAPP = '556284196646';
```

O `app.js` reescreve todos os `a[data-wa]` a partir dela; os `href` no HTML são fallback
para o caso de o JS não carregar. Mensagem pré-preenchida:
"Oi, Igor! Vim pela sua página de links e queria um orçamento."

## Pendências

1. **Número com 8 dígitos.** Usei o que você confirmou. Se não abrir a conversa, troque a
   constante por `5562984196646`.
2. **Miniaturas dos sites** em `assets/sites/*.png` são placeholders gerados e marcados como
   tal. Prints em 1200 × 750 substituem os arquivos sem tocar no CSS.
3. **Imagem OG** é tipográfica, sem foto.
4. **UTM** vazio de propósito no `app.js`; cada link já tem `data-link` para virar
   `utm_content`.
5. **Sem teste em navegador real** — `.vcf`, Web Share API e `backdrop-filter` do dock não
   foram validados em iOS ou Android.
