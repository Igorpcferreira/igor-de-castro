/* Apenas a comparação usa este seletor. A identidade final será fixada após a escolha. */
(() => {
  const theme = new URLSearchParams(location.search).get('tema') === 'azul' ? 'azul' : 'verde';
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === 'azul' ? '#080e1d' : '#090e0c';
  document.querySelector('meta[property="og:image"]').content = `assets/og-${theme}.png`;
})();
