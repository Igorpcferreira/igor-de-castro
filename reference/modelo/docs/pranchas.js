'use strict';
(() => {
  let fit=true;
  const frames=[...document.querySelectorAll('iframe[data-width]')];
  function layout(){frames.forEach(frame=>{const width=Number(frame.dataset.width);const height=Number(frame.getAttribute('height'));const available=frame.closest('.board-outer').clientWidth;const scale=fit?Math.min(1,available/width):1;frame.style.width=width+'px';frame.style.height=height+'px';frame.style.transform='scale('+scale+')';frame.parentElement.style.width=width*scale+'px';frame.parentElement.style.height=height*scale+'px';});}
  window.addEventListener('message',event=>{if(!event.data||event.data.type!=='igor-board-height')return;const frame=frames.find(frame=>frame.contentWindow===event.source);if(!frame||!frame.dataset.full)return;const height=Number(event.data.height);if(!Number.isFinite(height)||height<100||height>60000)return;frame.setAttribute('height',String(Math.ceil(height)));layout();});
  document.querySelector('#fit').addEventListener('click',()=>{fit=true;sync();});document.querySelector('#actual').addEventListener('click',()=>{fit=false;sync();});
  function sync(){document.querySelector('#fit').setAttribute('aria-pressed',String(fit));document.querySelector('#actual').setAttribute('aria-pressed',String(!fit));layout();}
  new ResizeObserver(layout).observe(document.querySelector('.boards-main'));frames.forEach(frame=>frame.addEventListener('load',layout));layout();
})();
