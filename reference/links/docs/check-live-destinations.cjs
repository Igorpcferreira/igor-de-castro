const {chromium}=require('playwright');
const fs=require('fs');
const path=require('path');
const {pathToFileURL}=require('url');
const assert=require('assert/strict');
(async()=>{
  const browser=await chromium.launch({headless:true});
  try{
    const page=await browser.newPage();
    await page.goto(pathToFileURL(path.resolve(__dirname,'../../../public/links/index.html')).href);
    const urls=await page.locator('.project-actions a,.tool-card,.model-card,.work-links a').evaluateAll(els=>els.map(a=>({name:a.getAttribute('aria-label')||a.innerText.trim(),url:a.href,video:a.classList.contains('video-link')})));
    const results=await Promise.allSettled(urls.map(async entry=>{
      const response=await fetch(entry.url,{headers:entry.video?{Range:'bytes=0-1023'}:{},signal:AbortSignal.timeout(30000)});
      const result={...entry,status:response.status,finalUrl:response.url,contentType:response.headers.get('content-type'),range:response.headers.get('content-range')};
      if(entry.video){assert.equal(response.status,206,entry.url);assert.ok(result.contentType.includes('video/mp4'));assert.match(result.range,/bytes 0-1023\//)}
      else if(entry.url==='https://igordecastro.com.br/modelo'&&response.status===404){
        assert.ok(fs.existsSync(path.resolve(__dirname,'../../../public/modelo/index.html')));
        result.note='Portfólio de modelo existe localmente; rota pública ainda aguarda publicação do export.';
      }else assert.ok(response.ok,`${entry.url} -> ${response.status}`);
      await response.body?.cancel();return result;
    }));
    fs.writeFileSync(path.join(__dirname,'live-destinations.json'),JSON.stringify(results,null,2)+'\n');
    for(const result of results){if(result.status==='fulfilled')console.log(result.value.status,result.value.url,result.value.range||'');else{console.error(result.reason);process.exitCode=1}}
  }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
