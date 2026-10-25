// Gera public/og-image.jpg a partir de docs/og.html (1200x630). JPEG porque a prévia do WhatsApp prefere arquivos leves.
// Uso: NODE_PATH=<pasta com playwright> node reference/portfolio/docs/render-og.cjs
const { chromium } = require('playwright');
const path = require('path');
const { pathToFileURL } = require('url');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await page.goto(pathToFileURL(path.join(__dirname, 'og.html')).href, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  // A rede neural precisa de alguns quadros para espalhar os nós e acender as conexões.
  await page.waitForTimeout(2500);
  const target = path.resolve(__dirname, '../../../public/og-image.jpg');
  await page.screenshot({ path: target, type: 'jpeg', quality: 86 });
  await browser.close();
  console.log('OG salvo em', target);
})();
