'use strict';
(() => {
  const photos = window.portfolioPhotos;
  const extras = window.portfolioExtras;
  const allPhotos = [...photos, ...extras];
  const gallery = document.querySelector('#gallery');
  const source = photo => photo.src || 'assets/' + photo.file;
  const params = new URLSearchParams(location.search);
  const boardMode = params.has('board');
  if (boardMode) document.body.classList.add('board-mode');

  // Construção por DOM: títulos e descrições nunca são interpretados como HTML.
  for (const photo of photos) {
    const figure = document.createElement('figure');
    figure.className = 'photo-card'; figure.dataset.group = photo.group;
    const button = document.createElement('button');
    button.className = 'photo-frame'; button.type = 'button'; button.dataset.photo = photo.id;
    button.setAttribute('aria-label', 'Ampliar: ' + photo.alt);
    const img = document.createElement('img');
    img.src = source(photo); img.alt = photo.alt; img.loading = boardMode ? 'eager' : 'lazy'; img.decoding = 'async'; img.width = 1350; img.height = 1800;
    const expand = document.createElement('span'); expand.className = 'photo-expand'; expand.setAttribute('aria-hidden', 'true'); expand.textContent = '↗';
    button.append(img, expand);
    const caption = document.createElement('figcaption'); caption.className = 'photo-caption';
    const description = document.createElement('div');
    const title = document.createElement('h3'); title.textContent = photo.title;
    const detail = document.createElement('p'); detail.textContent = photo.detail;
    const number = document.createElement('span'); number.className = 'photo-number'; number.textContent = photo.code;
    description.append(title, detail); caption.append(description, number); figure.append(button, caption); gallery.append(figure);
  }

  let currentFilter = 'all';
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    currentFilter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(item => {const active = item === button; item.classList.toggle('active',active); item.setAttribute('aria-pressed',String(active));});
    document.querySelectorAll('.photo-card').forEach(card => card.hidden = currentFilter !== 'all' && card.dataset.group !== currentFilter);
    const count = photos.filter(photo => currentFilter === 'all' || photo.group === currentFilter).length;
    document.querySelector('.gallery-count').textContent = count + ' fotografias';
  }));

  const menu = document.querySelector('#menu');
  const lightbox = document.querySelector('#lightbox');
  const image = document.querySelector('#lightbox-image');
  let lastTrigger = null;
  let viewing = [];
  let position = 0;
  function openDialog(dialog, trigger) {lastTrigger = trigger || document.activeElement; dialog.showModal(); document.body.classList.add('modal-open');}
  function closeDialog(dialog) {dialog.close();}
  [menu,lightbox].forEach(dialog => dialog.addEventListener('close', () => {document.body.classList.remove('modal-open'); if (lastTrigger instanceof HTMLElement) lastTrigger.focus({preventScroll:true});}));
  document.querySelector('.menu-toggle').addEventListener('click', event => openDialog(menu,event.currentTarget));
  document.querySelector('.close-menu').addEventListener('click', () => closeDialog(menu));
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeDialog(menu)));
  document.querySelector('.close-lightbox').addEventListener('click', () => closeDialog(lightbox));

  function updateLightbox() {
    const photo = viewing[position];
    image.src = source(photo); image.alt = photo.alt;
    document.querySelector('#lightbox-caption').textContent = photo.title + ' · ' + photo.detail;
    document.querySelector('#lightbox-index').textContent = String(position+1).padStart(2,'0') + ' / ' + String(viewing.length).padStart(2,'0');
    document.querySelector('#lightbox-original').href = source(photo);
  }
  function openPhoto(id, trigger) {
    const chosen = allPhotos.find(photo => photo.id === id);
    if (!chosen) return;
    viewing = trigger && trigger.closest('.gallery') ? photos.filter(photo => currentFilter === 'all' || photo.group === currentFilter) : allPhotos;
    position = viewing.findIndex(photo => photo.id === id); updateLightbox(); openDialog(lightbox,trigger);
  }
  function stepPhoto(step) {position = (position + step + viewing.length) % viewing.length; updateLightbox();}
  document.addEventListener('click', event => {const button = event.target.closest('[data-photo]'); if(button) openPhoto(button.dataset.photo,button);});
  document.querySelector('.lightbox-prev').addEventListener('click', () => stepPhoto(-1));
  document.querySelector('.lightbox-next').addEventListener('click', () => stepPhoto(1));
  lightbox.addEventListener('keydown',event => {if(event.key === 'ArrowLeft'){event.preventDefault();stepPhoto(-1);}if(event.key === 'ArrowRight'){event.preventDefault();stepPhoto(1);}});
  let touchStart = null;
  image.addEventListener('touchstart',event => {if(event.touches.length===1)touchStart={x:event.touches[0].clientX,y:event.touches[0].clientY};},{passive:true});
  image.addEventListener('touchend',event => {if(!touchStart)return;const dx=event.changedTouches[0].clientX-touchStart.x;const dy=event.changedTouches[0].clientY-touchStart.y;if(Math.abs(dx)>65&&Math.abs(dx)>Math.abs(dy)*1.5)stepPhoto(dx<0?1:-1);touchStart=null;},{passive:true});

  // Correção futura explícita, sem tentar carregar um arquivo ausente.
  const contact = window.portfolioConfig.contactPhoto;
  if(contact && contact.src && contact.alt){const entry={id:'2772',src:contact.src,alt:contact.alt,title:'Retrato',detail:'Igor de Castro'};allPhotos.push(entry);document.querySelector('#contact-image').src=contact.src;document.querySelector('#contact-image').alt=contact.alt;document.querySelector('#contact-photo-button').dataset.photo='2772';document.querySelector('#contact-photo-button').setAttribute('aria-label','Ampliar: '+contact.alt);}

  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const scene = document.querySelector('.scene');
  const orbit = document.querySelector('.scene-orbit');
  const cards = [...document.querySelectorAll('.scene-card')];
  const motionToggle = document.querySelector('.motion-toggle');
  let sceneIndex = Number(params.get('frame')||0)%3;
  let paused = reduced.matches || boardMode;
  let sceneVisible = false;
  let timer = null;
  const roles = ['front','right','left'];
  function updateScene(){cards.forEach((card,i)=>{card.dataset.position=roles[(i-sceneIndex+3)%3];});document.querySelector('#scene-count').textContent=String(sceneIndex+1).padStart(2,'0')+' / 03';}
  function syncTimer(){clearInterval(timer);timer=null;if(!paused&&sceneVisible&&!document.hidden&&!lightbox.open&&!menu.open)timer=setInterval(()=>{sceneIndex=(sceneIndex+1)%3;updateScene();},4400);}
  function syncMotion(){document.body.classList.toggle('motion-reduced',reduced.matches);motionToggle.setAttribute('aria-pressed',String(paused));motionToggle.textContent=paused?'Ativar movimento ↻':'Pausar movimento Ⅱ';syncTimer();}
  updateScene();syncMotion();
  motionToggle.addEventListener('click',()=>{paused=!paused;syncMotion();});
  document.querySelectorAll('[data-scene-step]').forEach(button=>button.addEventListener('click',()=>{sceneIndex=(sceneIndex+Number(button.dataset.sceneStep)+3)%3;paused=true;updateScene();syncMotion();}));
  new IntersectionObserver(entries=>{sceneVisible=entries[0].isIntersecting;syncTimer();},{threshold:.15}).observe(scene);
  document.addEventListener('visibilitychange',syncTimer);
  new MutationObserver(syncTimer).observe(lightbox,{attributes:true,attributeFilter:['open']});
  new MutationObserver(syncTimer).observe(menu,{attributes:true,attributeFilter:['open']});
  reduced.addEventListener('change',()=>{paused=reduced.matches||boardMode;syncMotion();});
  scene.addEventListener('pointermove',event=>{if(paused||reduced.matches||event.pointerType!=='mouse')return;const r=scene.getBoundingClientRect();orbit.style.setProperty('--ry',((event.clientX-r.left)/r.width-.5)*9+'deg');orbit.style.setProperty('--rx',-((event.clientY-r.top)/r.height-.5)*5+'deg');});
  scene.addEventListener('pointerleave',()=>{orbit.style.setProperty('--rx','0deg');orbit.style.setProperty('--ry','0deg');});
  window.addEventListener('pagehide',()=>clearInterval(timer));

  // Estados reais usados pelas pranchas. A tela permanece em seu viewport original.
  if(params.get('state')==='menu')openDialog(menu);
  if(params.get('state')==='lightbox')openPhoto('3932');
  if(params.get('state')==='scene')requestAnimationFrame(()=>document.querySelector('#perspectivas').scrollIntoView());
  if(params.get('board')==='full'){
    const main=document.querySelector('main');
    const sendHeight=()=>{const height=Math.ceil(main.offsetTop+main.offsetHeight);parent.postMessage({type:'igor-board-height',height},'*');};
    new ResizeObserver(sendHeight).observe(main);
    window.addEventListener('load',sendHeight);
    document.fonts.ready.then(sendHeight);
    sendHeight();
  }
})();
