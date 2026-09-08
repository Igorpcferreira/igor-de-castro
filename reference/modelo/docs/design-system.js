'use strict';
const pairs=[['Paper / Ink','#eeece7','#111210','Texto principal'],['Muted / Ink','#aaa9a2','#111210','Texto secundário'],['Copper / Ink','#df7354','#111210','Links e detalhes'],['Ink / Copper','#111210','#df7354','Seção de contato']];
function luminance(hex){const rgb=hex.slice(1).match(/../g).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return rgb[0]*.2126+rgb[1]*.7152+rgb[2]*.0722;}
for(const [name,a,b,use] of pairs){const x=luminance(a),y=luminance(b);const ratio=(Math.max(x,y)+.05)/(Math.min(x,y)+.05);const row=document.createElement('tr');for(const value of [name,use,ratio.toFixed(2)+':1']){const cell=document.createElement('td');cell.textContent=value;row.append(cell);}document.querySelector('#contrast-results').append(row);}
