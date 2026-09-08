const {chromium}=require('playwright');
const fs=require('fs');
const path=require('path');
const {pathToFileURL}=require('url');
const assert=require('assert/strict');
function luminance(hex){const c=hex.match(/\w\w/g).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return c[0]*.2126+c[1]*.7152+c[2]*.0722}
function contrast(a,b){const x=luminance(a),y=luminance(b);return(Math.max(x,y)+.05)/(Math.min(x,y)+.05)}
(async()=>{
  const browser=await chromium.launch({headless:true});
  const results=[];
  try{
    for(const theme of ['verde','azul']){
      const page=await browser.newPage({viewport:{width:1200,height:630},reducedMotion:'reduce'});
      await page.goto(pathToFileURL(path.join(__dirname,'og.html')).href+`?tema=${theme}`);
      await page.evaluate(()=>document.fonts.ready);
      await page.screenshot({path:path.join(__dirname,`../assets/og-${theme}.png`)});
      const tokens=await page.evaluate(()=>{const s=getComputedStyle(document.documentElement);return Object.fromEntries(['bg','surface','surface-hover','ink','muted','accent','accent-ink','accent-soft'].map(k=>[k,s.getPropertyValue('--'+k).trim()]))});
      for(const [fg,bg] of [['ink','bg'],['muted','bg'],['muted','surface'],['muted','surface-hover'],['accent','bg'],['accent','accent-soft'],['accent-ink','accent']]){
        const ratio=contrast(tokens[fg],tokens[bg]);assert.ok(ratio>=4.5,`${theme} ${fg}/${bg}: ${ratio}`);results.push({theme,foreground:fg,background:bg,ratio:Number(ratio.toFixed(2))});
      }
      await page.close();
    }
  }finally{await browser.close()}
  fs.writeFileSync(path.join(__dirname,'checks-contrast.json'),JSON.stringify(results,null,2)+'\n');
  const guide=fs.readFileSync(path.join(__dirname,'../INSTAGRAM.md'),'utf8');
  const bios=[...guide.matchAll(/```text\n([\s\S]*?)\n```/g)].map(m=>m[1]).filter(t=>t.includes('Fundador'));
  assert.equal(bios.length,2);const counts=bios.map(text=>({text,characters:[...text].length}));counts.forEach(x=>assert.ok(x.characters<=150));
  fs.writeFileSync(path.join(__dirname,'bio-counts.json'),JSON.stringify(counts,null,2)+'\n');
  console.log('OG 1200x630: ambas as opções. Contraste AA: todos os pares. Bios:',counts.map(x=>x.characters));
})().catch(e=>{console.error(e);process.exitCode=1});
