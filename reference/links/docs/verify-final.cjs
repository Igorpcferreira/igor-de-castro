const { chromium }=require('playwright');
const fs=require('fs');
const path=require('path');
const {pathToFileURL}=require('url');
const assert=require('assert/strict');
const root=path.resolve(__dirname,'../../..');
const url=process.env.LINKS_TEST_URL||pathToFileURL(path.join(root,'public/links/index.html')).href;
const output=path.join(__dirname,'final');
fs.mkdirSync(output,{recursive:true});
const checks=[];
(async()=>{
  const browser=await chromium.launch({headless:true});
  try{
    for(const [name,width,height] of [['desktop',1440,1000],['tablet',834,1112],['mobile',390,844],['small',320,700]]){
      const page=await browser.newPage({viewport:{width,height},reducedMotion:'reduce'});
      const errors=[],mediaRequests=[];page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>{if(r.url().includes('.mp4'))mediaRequests.push(r.url())});
      await page.goto(url);await page.evaluate(()=>document.fonts.ready);
      await page.evaluate(()=>Promise.all([...document.images].map(img=>{img.loading='eager';return img.decode()})));
      assert.deepEqual(errors,[]);assert.deepEqual(mediaRequests,[],'Não carregar MP4 antes de interação');
      assert.equal(await page.locator('h1').count(),1);
      assert.equal(await page.locator('.project').count(),7);assert.equal(await page.locator('.video-link').count(),7);assert.equal(await page.locator('.tool-card').count(),2);
      assert.equal(await page.locator('.tool-card .video-link').count(),0);
      assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,`overflow ${width}`);
      assert.equal(await page.locator('.tool-card>img').evaluateAll(imgs=>imgs.every(img=>{const r=img.getBoundingClientRect();return r.height<r.width})),true,'Capas das ferramentas em formato horizontal');
      assert.equal(await page.locator('.letter-i').evaluate(el=>getComputedStyle(el).animationName),'none');
      const small=await page.locator('a,button,summary').evaluateAll(els=>els.filter(el=>el.getClientRects().length&&getComputedStyle(el).visibility!=='hidden'&&!el.classList.contains('skip')&&el.getBoundingClientRect().height<43).map(el=>el.textContent.trim()));assert.deepEqual(small,[],`alvos 44px ${width}`);
      if(width<=760){
        await page.locator('#project-gallery').scrollIntoViewIfNeeded();
        for(let i=1;i<7;i++){
          await page.locator('#gallery-next').click();await page.waitForFunction(expected=>document.querySelector('#gallery-position').textContent===expected,`${i+1} / 7`);
          const rect=await page.locator('.project').nth(i).boundingBox();assert.ok(rect.x>=0&&rect.x<width);
        }
        assert.equal(await page.locator('#gallery-next').isDisabled(),true);
        await page.locator('#gallery-prev').click();await page.waitForFunction(()=>document.querySelector('#gallery-position').textContent==='6 / 7');
        await page.locator('#project-gallery').focus();await page.keyboard.press('ArrowLeft');await page.waitForFunction(()=>document.querySelector('#gallery-position').textContent==='5 / 7');
        await page.locator('#project-gallery').evaluate(el=>el.scrollLeft=0);await page.waitForFunction(()=>document.querySelector('#gallery-position').textContent==='1 / 7');
        await page.locator('.socials').scrollIntoViewIfNeeded();await page.waitForFunction(()=>!document.querySelector('.mobile-dock').hidden);
        await page.screenshot({path:path.join(output,`${name}-dock.png`)});
      }else{
        await page.locator('.footer').scrollIntoViewIfNeeded();assert.equal(await page.locator('.mobile-dock').isVisible(),false);
      }
      await page.evaluate(()=>{document.activeElement.blur();window.scrollTo(0,0)});
      await page.screenshot({path:path.join(output,`${name}.png`),fullPage:true});
      checks.push(`${width}px: layout, assets, alvos, galeria, CTA, movimento reduzido, zero MP4 inicial OK`);
      await page.close();
    }
    const page=await browser.newPage({viewport:{width:1440,height:1000},acceptDownloads:true});
    await page.goto(url);
    for(let i=0;i<7;i++){
      const trigger=page.locator('.video-link').nth(i);
      await trigger.click();assert.equal(await page.locator('#video-dialog').isVisible(),true);
      await page.waitForFunction(()=>{const v=document.querySelector('#video-stage video');return v&&v.readyState>=2&&v.currentTime>0},{},{timeout:35000});
      const actual=await page.locator('#video-stage video').evaluate(async video=>{const duration=video.duration;video.currentTime=duration*.5;await new Promise((resolve,reject)=>{video.addEventListener('seeked',resolve,{once:true});setTimeout(()=>reject(Error('seek timeout')),12000)});return{duration,time:video.currentTime,paused:video.paused}});
      assert.ok(actual.time>actual.duration*.45);checks.push(`Vídeo ${i+1}: reprodução real e seek OK (${actual.duration.toFixed(1)}s)`);
      if(i===0){await page.screenshot({path:path.join(output,'video-desktop.png')});await page.keyboard.press('Tab');assert.equal(await page.evaluate(()=>document.querySelector('#video-dialog').contains(document.activeElement)),true)}
      await page.keyboard.press('Escape');await page.waitForFunction(()=>!document.querySelector('#video-stage video'));
      assert.equal(await trigger.evaluate(el=>el===document.activeElement),true);assert.equal(await page.evaluate(()=>document.body.style.overflow),'');
    }
    await page.route('**/*.mp4',route=>route.abort());
    await page.locator('.video-link').first().click();await page.locator('#video-error').waitFor({state:'visible'});
    assert.equal(await page.locator('#video-site').getAttribute('href'),'https://manusbarbearia.com.br/');
    await page.screenshot({path:path.join(output,'video-error.png')});
    await page.unroute('**/*.mp4');await page.locator('#retry-video').click();await page.waitForFunction(()=>document.querySelector('#video-stage video')?.currentTime>0,{},{timeout:35000});
    await page.locator('#close-video').click();
    checks.push('Falha de mídia, tentar novamente, Escape, foco restaurado, travamento de rolagem e limpeza de src OK');
    await page.locator('#toggle-motion').click();assert.equal(await page.locator('.letter-i').evaluate(el=>getComputedStyle(el).animationName),'none');
    await page.locator('#toggle-motion').click();assert.equal(await page.locator('.letter-i').evaluate(el=>getComputedStyle(el).animationIterationCount),'infinite');
    const downloaded=page.waitForEvent('download');await page.locator('#save-contact').click();const download=await downloaded;assert.ok(fs.readFileSync(await download.path(),'utf8').includes('TEL;TYPE=CELL:+556284196646'));
    await page.evaluate(()=>{Object.defineProperty(navigator,'share',{value:undefined,configurable:true});Object.defineProperty(navigator,'clipboard',{value:{writeText:async text=>window.copied=text},configurable:true})});
    await page.locator('#share-page').click();assert.equal(await page.evaluate(()=>window.copied),'https://igordecastro.com.br/links');
    await page.evaluate(()=>Object.defineProperty(navigator,'clipboard',{value:{writeText:async()=>{throw Error('denied')}},configurable:true}));await page.locator('#share-page').click();assert.equal(await page.locator('#share-dialog').isVisible(),true);await page.keyboard.press('Escape');
    await page.locator('.primary-cta').focus();await page.screenshot({path:path.join(output,'focus.png'),fullPage:true});
    await page.close();
    const mobile=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});await mobile.goto(url);await mobile.locator('.video-link').first().click();await mobile.waitForFunction(()=>document.querySelector('#video-stage video')?.currentTime>0,{},{timeout:35000});await mobile.screenshot({path:path.join(output,'video-mobile.png')});await mobile.locator('#close-video').click();await mobile.close();
    const context=await browser.newContext({javaScriptEnabled:false,offline:true,viewport:{width:390,height:844}});const nojs=await context.newPage();
    await nojs.goto(pathToFileURL(path.join(root,'public/links/index.html')).href);await nojs.evaluate(()=>Promise.all([...document.images].map(img=>{img.loading='eager';return img.decode()})));
    assert.equal(await nojs.locator('.project').count(),7);assert.ok((await nojs.locator('.video-link').first().getAttribute('href')).endsWith('.mp4'));assert.ok((await nojs.locator('.primary-cta').getAttribute('href')).includes('556284196646'));await context.close();
    checks.push('Player mobile, contato, compartilhamento, pausa IC e HTML offline/sem JS OK');
    fs.writeFileSync(path.join(output,'checks.json'),JSON.stringify(checks,null,2)+'\n');console.log(checks.join('\n'));
  }finally{await browser.close()}
})().catch(error=>{console.error(error);process.exitCode=1});
