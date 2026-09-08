const { chromium } = require('playwright');
const sharp = require('sharp');
const path = require('path');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const results = await Promise.allSettled([
    ['manus','https://manusbarbearia.com.br'],
    ['gabriela','https://gabrielacamargofoto.com.br']
  ].map(async ([name,url]) => {
    const page = await browser.newPage({ viewport: {width:1440,height:900}, reducedMotion:'reduce' });
    await page.goto(url, {waitUntil:'networkidle',timeout:45000});
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({path:path.join(__dirname,`${name}-source.png`)});
    await sharp(path.join(__dirname,`${name}-source.png`)).resize(800,500).jpeg({quality:84}).toFile(path.join(__dirname,`../assets/sites/${name}.jpg`));
    console.log(name,page.url(),await page.title()); await page.close();
  }));
  for (const result of results) if(result.status==='rejected') console.error(result.reason);
  await browser.close();
})();
