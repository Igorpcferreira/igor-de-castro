# Brief — Página `/links` de Igor de Castro

Protótipo de uma página de links pessoal, dedicada, para `igordecastro.com.br/links`.
Ela é o **primeiro contato**: é o link da bio do Instagram, do WhatsApp Business e do QR code.
Quem chega aqui decide em poucos segundos se fala comigo ou vai embora.

Você tem **liberdade criativa total** de direção de arte. Não precisa herdar a identidade do
portfólio de dev nem a da página de modelo. O que está fixo é o conteúdo, a hierarquia e as
restrições técnicas deste documento.

---

## 1. Quem sou eu (fonte de verdade — não invente nada além disto)

**Igor de Castro** — Desenvolvedor Full Stack Pleno, Goiânia (GO), atendendo todo o Brasil.

- Mais de 4 anos de experiência profissional. Hoje na **Minsait (Grupo Indra)**, em sistemas
  corporativos de grande porte para saúde pública, trânsito e defesa — incluindo a modernização
  do SINGRA 2 para a **Marinha do Brasil**.
- Bacharelado em Ciência da Computação pela **PUC Goiás** (2021–2026).
- Stack: Java (11/21/25), Spring Boot, Quarkus, Angular, Vue, TypeScript, PostgreSQL, Oracle,
  Next.js/React.
- Sócio da **Kyber Tech**, estúdio de tecnologia em Goiânia: sites profissionais, páginas
  comerciais, presença no Google e automações para negócios locais. Dois desenvolvedores,
  contato direto, sem agência no meio.
- Também trabalha como **modelo** (editorial, streetwear, retrato) em Goiânia e região.

O que a Kyber entrega, nas minhas próprias palavras (use como base do bloco de serviços):

| # | Serviço | Frase |
| --- | --- | --- |
| 01 | Site e catálogo | Um endereço próprio, feito para o celular, onde as pessoas te encontram e falam com você sem depender do Direct. |
| 02 | Automação e integrações | O trabalho repetitivo que hoje é feito na mão: mensagem, agendamento, planilha e sistema que não conversa com outro. |
| 03 | IA aplicada | IA resolvendo um problema real da operação, não como demonstração. Atendimento, classificação e apoio a conteúdo. |

**Proibido inventar:** números de faturamento, quantidade de clientes, depoimentos, prêmios,
nomes de marcas que não estão listadas aqui, preços, prazos, "+50 projetos entregues" e
qualquer métrica que eu não tenha escrito acima. Se um espaço pedir um número que não existe,
prefira deixar o espaço vazio ou usar texto qualitativo.

---

## 2. Objetivo da página, em ordem

1. **Converter cliente em conversa no WhatsApp.** A pessoa precisa entender em 3 segundos que
   eu faço software sob medida — site, sistema, automação — e ter um caminho óbvio para pedir
   orçamento.
2. **Dar credibilidade.** Quem vem do Instagram não sabe se estou vendendo curso ou se sou
   engenheiro de verdade. Minsait, Marinha do Brasil e PUC Goiás resolvem isso numa linha.
3. **Distribuir para as minhas outras frentes** sem competir com o item 1.

O erro clássico de página de links é tratar todos os links como iguais, tipo Linktree.
Não faça isso. Quero **hierarquia**, não lista.

---

## 3. Conteúdo e hierarquia

### 3.1 Abertura

- Monograma **IC** animado (ver seção 5).
- Nome: **Igor de Castro**.
- Uma linha de posicionamento, tom direto, sem jargão de agência. Algo na direção de
  *"Desenvolvedor Full Stack. Sites, sistemas e automações sob medida."* — reescreva se
  achar que consegue melhor, mas mantenha "sob medida" ou equivalente explícito.
- Localização: Goiânia, GO, atendendo todo o Brasil.
- Opcional: selo de disponibilidade ("aberto para orçamentos").

### 3.2 CTA primário — WhatsApp

Elemento **visualmente dominante**, separado da lista de links. Pode ser fixo no rodapé do mobile.

- Rótulo na linha de "Pedir um orçamento" ou "Falar comigo no WhatsApp".
- Link com mensagem pré-preenchida, algo como:
  `Oi, Igor! Vim pela sua página de links e queria um orçamento.`
- Ver seção 6 para o número — **há uma pendência de confirmação nele**.

### 3.3 Links — nesta ordem

| Ordem | Link | Destino | Observação |
| --- | --- | --- | --- |
| 1 | **Portfólio de desenvolvedor** | `https://igordecastro.com.br` | Pedido explicitamente para ser o primeiro |
| 2 | **Kyber Tech** — estúdio de tecnologia | `https://somoskyber.com.br` | Onde o trabalho comercial acontece |
| 3 | **Portfólio de modelo** | `https://igordecastro.com.br/modelo` | Mesma pessoa, outra frente |
| 4 | **Kounting Streetwear** — minha loja de roupa | `https://www.kountingstreetwear.com.br` | |
| 5 | **LinkedIn** | `https://www.linkedin.com/in/igor-cferreira` | |
| 6 | **Instagram** | `https://www.instagram.com/igor_cferreira` | |
| 7 | **GitHub** | `https://github.com/Igorpcferreira` | Secundário, pode ser um ícone discreto |

Cada link precisa de um rótulo **e** de uma micro-descrição de uma linha. "LinkedIn" sozinho não
diz nada para o dono de uma loja; "LinkedIn — trajetória e recomendações" diz.

Sugestão de agrupamento, mantendo a ordem de prioridade acima dentro do conjunto:
**Trabalho** (1, 2), **Outras frentes** (3, 4), **Redes** (5, 6, 7).

### 3.4 Bloco "o que eu faço" — para converter

Os três serviços da tabela da seção 1, curtos e escaneáveis. Este bloco existe porque a pessoa
que veio do Instagram não sabe o que pedir. Ele transforma "que legal" em "preciso disso".

### 3.5 Prova

Sites reais que eu construí e que estão no ar. Servem de portfólio instantâneo:

- `https://somoskyber.com.br`
- `https://www.kountingstreetwear.com.br`
- `https://manusbarbearia.com.br` — barbearia em Goiânia
- `https://gabrielacamargofoto.com.br` — fotografia

Trate como "sites no ar", não como "cases" com resultado numérico. Eu não tenho esses números.

### 3.6 Rodapé

- Botão **salvar contato** (`.vcf`) e/ou e-mail. Quem vai contratar costuma querer guardar.
- Botão de compartilhar a própria página (Web Share API com fallback de copiar link).
- Sem formulário. Sem newsletter. Sem captação de dados.

---

## 4. Entregáveis

1. **Protótipo responsivo funcional** — a página real, navegável.
2. **Pranchas** nas três larguras de referência: **desktop 1440**, **tablet 834** e **mobile 390**,
   mais os estados relevantes (hover, foco, animação em repouso, versão com movimento reduzido).
3. **Design system** — tokens de cor, tipografia, escala de espaçamento, componentes e regras de
   foco e contraste.

---

## 5. Animação de abertura — monograma IC

Quero uma animação no topo da página, e a ideia que eu tive é o **monograma IC** (Igor de Castro)
animado. Ele já existe hoje no cabeçalho da minha página de modelo e eu gostei do resultado:
as letras "IC" em fonte display condensada, peso alto, `letter-spacing` bem negativo (−0.08em),
com um filete vertical à direita separando a assinatura em caixa alta. Você pode partir dele ou
redesenhar o monograma do zero. A escolha é sua.

Direções possíveis, escolha uma e não empilhe: traço se desenhando em SVG; o **C** fechando em
volta do **I**; as duas letras vindo de eixos opostos e travando no lugar; ou um corte tipográfico
onde o I é o espaço negativo do C.

**Restrições:**

- Duração de até 1,5 s. Nada de splash screen nem de "loading" falso.
- O conteúdo abaixo **não pode ficar bloqueado ou invisível** enquanto ela roda. Nome, CTA e
  links precisam estar no HTML e legíveis desde o primeiro frame, mesmo se o JS falhar.
- `prefers-reduced-motion: reduce` mostra o monograma no estado final, sem movimento.
- Sem biblioteca de animação. CSS e/ou SVG nativo (sem SMIL: use CSS ou Web Animations API).
- Roda uma vez na entrada. Nada de laço infinito consumindo bateria no celular.
- O monograma também vira favicon e imagem de compartilhamento, então precisa continuar legível
  em 32 px.

Movimento no resto da página é bem-vindo, desde que sutil, com propósito e igualmente sujeito ao
`prefers-reduced-motion`.

---

## 6. Dados de contato

- **WhatsApp profissional:** o número que tenho anotado é **(62) 8419-6646**.
  ⚠️ **Confirmar antes de publicar.** Celular brasileiro tem 9 dígitos e esse tem 8, então o link
  correto quase certamente é `https://wa.me/5562984196646`, com o 9 na frente. Enquanto isso não
  é confirmado, deixe o número em **uma única constante no topo do JS**, comentada como pendente,
  para trocar em uma linha.
- ❗ Não use o número que aparece no meu portfólio de dev (`5562986430079`). Aquele é o antigo.
  Este `/links` usa o número **profissional novo**.
- Instagram: `@igor_cferreira`.
- Não invente e-mail. Se precisar de um campo de e-mail, deixe marcado como pendente.

---

## 7. Restrições técnicas — importante

Esta página vai ser publicada dentro do meu site, que é **Next.js com export estático**. Ela vai
ficar em `public/links/` e ser servida em `igordecastro.com.br/links`, exatamente como eu já fiz
com a página de modelo em `public/modelo/`. Então:

- **HTML, CSS e JavaScript puros.** Sem React, sem Next, sem Tailwind, sem build step, sem
  framework.
- **Todos os caminhos relativos** (`assets/...`, `styles.css`). Nenhum caminho começando com `/`,
  porque a página vive dentro de uma subpasta.
- **Sem CDN e sem rede.** Fontes locais em `assets/fonts/`, com a licença junto. A página precisa
  abrir e funcionar offline, por `file://` ou por um servidor estático simples. Só os links
  externos dependem de internet.
- Estrutura de arquivos esperada, espelhando o que já funciona no `/modelo`:

  ```text
  index.html
  styles.css
  app.js
  assets/           imagens, ícones e fontes locais
  docs/             design system e pranchas
  ```

- Um único `index.html`. Página curta, de uma tela e pouco de rolagem. Não é um site de várias
  seções.

### Qualidade

- Semântica de verdade: um `<h1>`, links são `<a>`, botões são `<button>`.
- Contraste mínimo AA (4,5:1 para texto). Foco visível em tudo que é focável.
- Alvos de toque de no mínimo 44 px.
- Peso total enxuto. Sem imagem pesada só de enfeite.
- Links externos com `rel="noopener"`. `target="_blank"` só onde fizer sentido.
- Sem rastreamento de terceiros, sem cookie, sem pixel.
- Deixe os `href` externos preparados para eu adicionar parâmetros UTM depois, um por link, para
  eu conseguir medir de onde vem a conversa. Se ficar elegante, já pode marcar cada link com um
  atributo `data-` identificando o destino.
- `<title>`, `<meta name="description">` e Open Graph (`og:title`, `og:description`, `og:image`)
  preenchidos. Este link é colado no WhatsApp o tempo todo e o preview precisa ficar bom. Gere a
  imagem OG como asset local do pacote.
- Idioma da página: **português do Brasil**. O público aqui é cliente brasileiro.

---

## 8. Tom

Direto, confiante, sem enrolação de agência. Nada de "transformamos sua visão em realidade
digital", "soluções inovadoras" ou "parceiro estratégico". Eu sou um engenheiro que constrói
coisa que funciona, e a página tem que soar assim.

Ela também precisa aguentar duas leituras ao mesmo tempo: o dono de comércio de Goiânia que quer
um site, e o recrutador ou a agência que caiu ali pelo Instagram. Não escolha um público e
abandone o outro. Resolva com hierarquia.

---

## 9. Ao entregar, me diga

- Que decisões de direção de arte você tomou e por quê.
- O que você **não** conseguiu validar (por exemplo, se não testou em navegador real).
- Qualquer coisa que ficou como placeholder ou pendência, listada explicitamente. Não preencha
  buraco com informação inventada.
