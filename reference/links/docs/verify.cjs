const { chromium } = require('playwright');
const { pathToFileURL } = require('url');
const path = require('path');
const fs = require('fs');
const assert = require('assert/strict');
const root = path.resolve(__dirname,'..');
const url = pathToFileURL(path.join(root,'preview.html')).href;
(async () => {
  const browser = await chromium.launch({headless:true});
  const checks = [];
  try {
    for (const theme of ['verde','azul']) {
      for (const [name,width,height] of [['desktop',1440,1000],['tablet',834,1112],['mobile',390,844],['small',320,700]]) {
        const page = await browser.newPage({viewport:{width,height},reducedMotion:'reduce'});
        const errors=[]; page.on('pageerror',e=>errors.push(e.message));
        await page.goto(`${url}?tema=${theme}`); await page.evaluate(()=>document.fonts.ready);
        await page.evaluate(async()=>{await Promise.all([...document.images].map(img=>{img.loading='eager';return img.decode()}))});
        assert.deepEqual(errors,[]);
        assert.equal(await page.locator('h1').count(),1);
        assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,`${theme} ${name}: overflow`);
        assert.equal(await page.evaluate(()=>[...document.images].every(i=>i.complete&&i.naturalWidth>0)),true,'images');
        assert.equal(await page.locator('html').getAttribute('data-theme'),theme);
        assert.equal(await page.locator('.letter-i').evaluate(el=>getComputedStyle(el).animationName),'none');
        for (const href of await page.locator('[data-wa]').evaluateAll(els=>els.map(el=>el.href))) {
          assert.equal(new URL(href).pathname,'/556284196646'); assert.ok(new URL(href).searchParams.get('text').includes('Instagram'));
        }
        const smallTargets = await page.locator('a,button,summary').evaluateAll(els=>els.filter(el=>el.getClientRects().length && getComputedStyle(el).visibility!=='hidden' && !el.classList.contains('skip') && el.getBoundingClientRect().height<43).map(el=>el.textContent.trim()));
        assert.deepEqual(smallTargets,[],`touch targets ${theme} ${name}`);
        if(name!=='small') await page.screenshot({path:path.join(__dirname,`${theme}-${name}.png`),fullPage:true});
        if(name==='mobile') {
          assert.equal(await page.locator('.mobile-dock').isVisible(),false);
          await page.locator('.socials').scrollIntoViewIfNeeded();
          await page.waitForFunction(()=>!document.querySelector('.mobile-dock').hidden);
          assert.equal(await page.locator('.mobile-dock').isVisible(),true);
        }
        checks.push(`${theme} / ${width}: layout, imagens, sem erros JS, CTA, movimento reduzido, alvos >=44px OK`);
        await page.close();
      }
    }
    const page = await browser.newPage({viewport:{width:1440,height:1000},acceptDownloads:true});
    await page.goto(url); await page.evaluate(()=>document.fonts.ready);
    assert.equal(await page.locator('.letter-i').evaluate(el=>getComputedStyle(el).animationIterationCount),'infinite');
    await page.locator('#toggle-motion').click();
    assert.equal(await page.locator('.letter-i').evaluate(el=>getComputedStyle(el).animationName),'none');
    await page.locator('#toggle-motion').click();
    assert.equal(await page.locator('.letter-i').evaluate(el=>getComputedStyle(el).animationIterationCount),'infinite');
    const downloadPromise=page.waitForEvent('download'); await page.locator('#save-contact').click();
    const download=await downloadPromise; const contact=fs.readFileSync(await download.path(),'utf8');
    assert.ok(contact.includes('TEL;TYPE=CELL:+556284196646')); assert.ok(contact.includes('\r\n'));
    await page.evaluate(()=>{Object.defineProperty(navigator,'share',{value:undefined,configurable:true});Object.defineProperty(navigator,'clipboard',{value:{writeText:async value=>{window.copied=value}},configurable:true})});
    await page.locator('#share-page').click(); assert.equal(await page.evaluate(()=>window.copied),'https://igordecastro.com.br/links');
    await page.evaluate(()=>Object.defineProperty(navigator,'clipboard',{value:{writeText:async()=>{throw Error('denied')}},configurable:true}));
    await page.locator('#share-page').click(); assert.equal(await page.locator('#share-dialog').isVisible(),true);
    await page.keyboard.press('Escape'); assert.equal(await page.locator('#share-dialog').isVisible(),false);
    await page.evaluate(()=>Object.defineProperty(navigator,'share',{value:async()=>{throw new DOMException('cancelled','AbortError')},configurable:true}));
    await page.locator('#share-page').click(); assert.equal(await page.locator('#share-dialog').isVisible(),false);
    await page.locator('.primary-cta').hover(); await page.screenshot({path:path.join(__dirname,'estado-hover.png'),fullPage:true});
    await page.locator('.primary-cta').focus(); await page.screenshot({path:path.join(__dirname,'estado-foco.png'),fullPage:true});
    checks.push('Animação contínua/pausa, vCard, compartilhar/copiar/fallback/cancelar, hover/foco OK');
    await page.close();
    const offline = await browser.newContext({javaScriptEnabled:false,offline:true,viewport:{width:390,height:844}});
    const nojs = await offline.newPage(); await nojs.goto(url); await nojs.evaluate(()=>document.fonts.ready);
    await nojs.evaluate(async()=>{await Promise.all([...document.images].map(img=>{img.loading='eager';return img.decode()}))});
    assert.equal(await nojs.locator('h1').innerText(),'Igor de Castro\nDesenvolvedor & empreendedor');
    assert.ok(await nojs.locator('.primary-cta').getAttribute('href'));
    assert.equal(await nojs.evaluate(()=>[...document.images].every(i=>i.complete&&i.naturalWidth>0)),true);
    checks.push('file:// offline e sem JavaScript: nome, links, CTA e imagens disponíveis OK');
    await offline.close();
    const comparison = await browser.newPage({viewport:{width:1440,height:1100},reducedMotion:'reduce'});
    await comparison.goto(pathToFileURL(path.join(root,'index.html')).href); await comparison.evaluate(()=>document.fonts.ready);
    await comparison.screenshot({path:path.join(__dirname,'comparacao.png'),fullPage:true}); await comparison.close();
    fs.writeFileSync(path.join(__dirname,'checks.json'),JSON.stringify(checks,null,2)+'\n');
    console.log(checks.join('\n'));
  } finally { await browser.close(); }
})().catch(error=>{console.error(error);process.exitCode=1});
