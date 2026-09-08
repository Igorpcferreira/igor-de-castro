# Vinheta editorial / Remotion

Composição fonte complementar: 9 segundos, 30 fps, três fotografias vestidas. Formatos 1920 × 1080 e 1080 × 1920. A imagem de terno aparece primeiro. Fotografias completas, com entrada em perspectiva e nome do modelo fora da imagem.

O arquivo `IgorEditorial.tsx` contém o componente e o registro das duas composições. Foi entregue como fonte, sem renderização de vídeo ou instalação de dependências neste projeto. O site já funciona por conta própria; sua cena 3D é feita em CSS e JavaScript.

## Usar em um projeto Remotion

1. Em um projeto Remotion configurado, copie `IgorEditorial.tsx` para `src/IgorEditorial.tsx`.
2. Copie `IMG_3555.jpg`, `IMG_3932.jpg` e `c71f15af.jpg`, da pasta `assets` deste pacote, para `public/assets` do projeto Remotion.
3. Abra a composição com `npx remotion studio src/IgorEditorial.tsx`.
4. Para exportar o formato vertical, execute:

```bash
npx remotion render src/IgorEditorial.tsx IgorEditorialReels out/igor-editorial-reels.mp4
```

Para o formato horizontal, use a composição `IgorEditorialDesktop`.

As dependências `react`, `react-dom`, `remotion` e `@remotion/cli` pertencem ao projeto Remotion de destino; mantenha os pacotes Remotion na mesma versão. A fonte usa Arial como alternativa portátil; para um filme final, as fontes locais do site podem ser carregadas no projeto de vídeo.

Referências oficiais consultadas: [fundamentos](https://www.remotion.dev/docs/the-fundamentals), [composições](https://www.remotion.dev/docs/composition) e [renderização pela CLI](https://www.remotion.dev/docs/cli/render).
