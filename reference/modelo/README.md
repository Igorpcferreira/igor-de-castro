> Nota de integração. Este pacote foi incorporado ao repositório do portfólio.
> O site público vive em `public/modelo/` e é servido em `igordecastro.com.br/modelo`.
> Esta pasta guarda apenas o material de apoio, que não vai ao ar: `docs/` com o
> design system e as pranchas responsivas, `motion/` com a composição Remotion,
> este guia e o `VALIDACAO.md`. Os caminhos relativos de `docs/` foram
> reapontados para `../../../public/modelo/`, então as pranchas continuam
> carregando o site real. Os trechos abaixo descrevem o pacote original; onde
> eles citam a raiz do ZIP, leia `public/modelo/`.

# Igor de Castro / Portfólio de modelo

## Abrir

Extraia o ZIP inteiro e abra `index.html` no navegador. O site usa HTML, CSS e JavaScript, com fotos e fontes locais. Não depende do Claude Design, do antigo `support.js`, de CDN, instalação de pacotes ou conexão com a internet para exibir o portfólio. Os contatos externos naturalmente precisam de internet.

Os três entregáveis estão disponíveis em:

| Entregável | Arquivo |
| --- | --- |
| Protótipo responsivo completo | `index.html` |
| Design system visual | `docs/design-system.html` |
| Pranchas desktop, tablet, mobile e estados | `docs/pranchas.html` |

Há também atalhos HTML numerados na raiz. Em navegadores que restrinjam iframes de arquivos locais, abra a pasta por um servidor estático. Exemplo, na pasta do projeto: `python -m http.server 8000`. Depois acesse `http://localhost:8000/docs/pranchas.html`.

## O que foi reformulado

- Nova direção de arte em preto, off-white e cobre; tipografia condensada com contraste editorial em itálico.
- Foto de terno na abertura: `IMG_3555.jpg`.
- Galeria com áreas 3:4 iguais. Fotografias exibidas integralmente, sem sequência de fotos gigantes e miniaturas.
- Três colunas em desktop, duas em tablet e uma em mobile, com filtros de estúdio e externa.
- Lightbox com foto inteira, setas, Escape, navegação por teclado, gesto horizontal e retorno de foco.
- Composição 3D com três fotografias, resposta sutil ao ponteiro, controle manual e pausa. Respeita movimento reduzido e interrompe a reprodução fora de tela e durante dialogs.
- Sobre com retrato em luz natural. Contato com foto separada do texto e links legíveis.
- Pranchas com a versão real do site e altura ajustada ao conteúdo, sem usar um viewport artificial de milhares de pixels na apresentação das cenas.
- A interface pública não contém explicações de implementação, preços de fotografia ou um cachê de modelo inventado.

## Correções das fotos

Os números abaixo foram interpretados pelo array de fotos do projeto original:

| Solicitação | Aplicação |
| --- | --- |
| Primeira foto de terno, print 2 | Hero usa `IMG_3555.jpg` |
| Foto 01 deveria ser a 10 | Posição 01 usa `IMG_3932.jpg`; `IMG_2785.jpg` passou à 10 |
| Foto 07 deveria ser a 11 | Posição 07 usa `c71f15af.jpg`; `IMG_3928.jpg` passou à 11 |
| IMG_2772 no print 1, seção de contato | Pendente: o arquivo não veio no ZIP recebido |

O inventário original cita `IMG_2772.WEBP` entre os arquivos não copiados. Não foi possível recuperar a imagem a partir desse pacote. A seção de contato usa provisoriamente `IMG_3927.jpg`, sem fingir que é a foto solicitada.

Para aplicar a IMG_2772 depois de recebê-la, confirme que é a imagem vestida desejada, salve uma versão otimizada em `assets/IMG_2772.webp` e altere `contactPhoto` em `photos.js`:

```js
contactPhoto: {
  src: 'assets/IMG_2772.webp',
  alt: 'Descrição fiel da fotografia confirmada'
}
```

Essa configuração atualiza a foto do contato e sua visualização ampliada. Para deixar o HTML inicial com a mesma foto mesmo antes de executar JavaScript, atualize também o `src` e o `alt` de `#contact-image` em `index.html`.

A legenda original da `IMG_2785` citava óculos, mas a imagem recebida mostra boné sem óculos. A descrição foi corrigida. Os nomes curtos da galeria são títulos editoriais, não nomes de campanhas ou marcas contratantes.

## Arquivos e edição

- `index.html`: conteúdo e estrutura do portfólio.
- `styles.css`: tokens, tipografia, layout, responsividade e perspectiva 3D.
- `photos.js`: ordem, arquivos, legendas, filtros e configuração da foto pendente.
- `app.js`: galeria, filtros, dialogs, interação 3D e integração das pranchas.
- `assets/`: todas as 14 fotos vestidas disponíveis, em versões otimizadas, e fontes locais com licença.
- `docs/`: design system, pranchas e seus scripts.
- `motion/`: fonte de vinheta Remotion de 9 segundos e instruções de integração. Vídeo não renderizado.
- `VALIDACAO.md`: alcance das verificações efetuadas.

O ZIP é completo para executar e editar o site. Não duplica os arquivos fotográficos de dezenas de megabytes, o PDF original com a imagem excluída, capturas do projeto antigo nem o runtime de exportação do Claude. As fotos originais continuam no ZIP que você enviou.

## Dados preservados

Igor de Castro, modelo em Goiânia e região. Instagram: `@igor_cferreira`. Fotografia: `@studiocamargophotos`. Contato comercial informado no mídia kit: `(62) 98132-1992` e `gabicamargophotos@gmail.com`.

Nenhuma foto sem camisa está incluída. O PDF original não está disponível para download. Não há backend, formulário simulado, rastreamento, publicação ou envio automático de mensagens.

## Para continuar no Claude Design

Envie o ZIP completo e peça para preservar o funcionamento em HTML/CSS/JS, a exibição integral das fotos e os três entregáveis sincronizados. Informe que a única imagem pendente é a IMG_2772. Ao enviá-la, peça a atualização da configuração e do HTML inicial, sem reordenar os demais arquivos por nome.
