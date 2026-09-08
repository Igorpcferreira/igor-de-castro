const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const source = 'C:/Users/user/Downloads/lixo';
const destination = path.resolve(__dirname, '../../..', 'public/links/assets/projects');
const files = ['andre-mei.webp','bruma.webp','casa-umbra.webp','compressify.webp','gabriela-camargo.webp','igor-de-castro-modelo.png','kountingstreetwear.png','manusbarbearia.webp','qr-code-studio.webp'];
(async () => {
  const results = [];
  for (const file of files) {
    const target = file.replace(/\.[^.]+$/, '.webp');
    const result = await sharp(path.join(source, file)).rotate().resize({width:800,withoutEnlargement:true}).webp({quality:84}).toFile(path.join(destination,target));
    results.push({source:file,output:target,bytes:result.size,width:result.width,height:result.height});
  }
  fs.writeFileSync(path.join(__dirname,'final-assets.json'),JSON.stringify(results,null,2)+'\n');
  console.log(results);
})().catch(error=>{console.error(error);process.exitCode=1});
