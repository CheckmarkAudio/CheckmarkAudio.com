const frame = document.getElementById('page');
const frameWrap = document.getElementById('frameWrap');
const size = document.getElementById('size');
const descriptions = {
  signal: '01 · A connected recording-to-release strip, waveform accents, and small icon labels on the studio and inquiry frames.',
  schematic: '02 · Microphone diagrams, measurement lines, and subtle drawing grids. More studio detail with generous open space.',
  windows: '03 · Layered audio windows, waveform tracks, and title bars that turn studio photos and the inquiry into a session workspace.',
  patchbay: '04 · Outlined patch points and curved cables tie sections together, with jack labels on photos and a connection panel above the inquiry.'
};
const requestedDirection = new URLSearchParams(location.search).get('direction');
let direction = Object.hasOwn(descriptions, requestedDirection) ? requestedDirection : 'signal';
let currentSection = 'homeHero';
const microphone = '<svg viewBox="0 0 160 160"><rect x="59" y="16" width="42" height="77" rx="21"/><path d="M49 68v9a31 31 0 0 0 62 0V68M80 109v27m-26 8h52M65 36h30M65 46h30M65 56h30M65 66h30"/><path class="mt-dimension" d="M25 16v128m-5-128h10m-10 128h10M120 16h18m-9 0v77m-9 0h18"/></svg>';
const waveform = '<svg viewBox="0 0 260 100"><path d="M5 50h15l8-10 8 20 8-40 8 60 8-35 8 10 8-30 8 45 8-62 8 78 8-40 8 10 8-30 8 52 8-60 8 45 8-20 8 32 8-46 8 32 8-16 8 10h29"/></svg>';
const patch = '<svg viewBox="0 0 240 160"><rect x="8" y="8" width="224" height="144" rx="16"/><g><circle cx="48" cy="42" r="12"/><circle cx="96" cy="42" r="12"/><circle cx="144" cy="42" r="12"/><circle cx="192" cy="42" r="12"/><circle cx="48" cy="115" r="12"/><circle cx="96" cy="115" r="12"/><circle cx="144" cy="115" r="12"/><circle cx="192" cy="115" r="12"/></g><path d="M48 42v26c0 28 96-9 96 24v23M192 42v24c0 35-96 4-96 29v20"/><path class="mt-cable" d="M96 42c0 40 96 27 96 73"/></svg>';
function icon(name) { return MUSIC_TECH_ICONS[name] || waveform; }
function element(doc, className, html) {
  const node = doc.createElement('div'); node.className = `mt-study ${className}`;
  node.setAttribute('aria-hidden', 'true'); node.innerHTML = html; return node;
}
function art() {
  if (direction === 'schematic') return `<span class="mt-art-label">Vocal capture</span>${microphone}<span class="mt-art-caption">A place for your sound.</span>`;
  if (direction === 'windows') return `<div class="mt-window-bar"><span>Session / Checkmark</span><i>•••</i></div><div class="mt-tracks">${waveform}${waveform}${waveform}</div><div class="mt-transport"><i></i><b>▶</b><span>REC · MIX · MASTER</span></div>`;
  if (direction === 'patchbay') return `<span class="mt-art-label">Make the connection</span>${patch}<span class="mt-art-caption">Your idea → your sound</span>`;
  return `<span class="mt-art-label">Made for your sound</span>${icon('idea')}<div class="mt-mini-chain"><i></i><span>Record</span><em>→</em><span>Release</span></div>`;
}
function ribbon() {
  if (direction === 'schematic') return `<div class="mt-diagram">${microphone}<div><small>01 / Capture</small><b>Start with your sound.</b></div></div><div class="mt-diagram">${icon('mix')}<div><small>02 / Shape</small><b>Find every detail.</b></div></div><div class="mt-diagram">${icon('release')}<div><small>03 / Share</small><b>Bring it to the world.</b></div></div>`;
  if (direction === 'windows') return ['record','produce','master'].map((name,i)=>`<div class="mt-session-card"><div class="mt-window-bar"><span>${['Recording','Production','Mixing + mastering'][i]}</span><i>•••</i></div><div class="mt-session-body">${icon(name)}<span>${['Capture the idea.','Build the record.','Finish with intention.'][i]}</span></div></div>`).join('');
  if (direction === 'patchbay') return `<div class="mt-port-row">${['Idea','Record','Produce','Mix','Master','Release'].map((name,i)=>`<div><span class="mt-jack">${i%2?'●':''}</span><b>${name}</b></div>`).join('')}</div><svg class="mt-cords" viewBox="0 0 1000 100" preserveAspectRatio="none"><path d="M83 2C83 120 416 120 416 2M583 2C583 98 916 98 916 2M250 2C250 60 750 60 750 2"/></svg>`;
  return ['idea','record','produce','mix','master','release'].map(name=>`<div class="mt-flow-step">${icon(name)}<b>${name}</b></div>`).join('');
}
function apply() {
  const doc = frame.contentDocument;
  if (!doc || !doc.querySelector('#homeHero')) return;
  doc.querySelectorAll('.mt-study').forEach(node => node.remove());
  doc.body.dataset.musicTech = direction;
  if (!doc.getElementById('musicTechStyles')) {
    const css = doc.createElement('link'); css.id='musicTechStyles'; css.rel='stylesheet';
    css.href = new URL('drafts.css?v=2', location.href).href; css.addEventListener('load',jump); doc.head.appendChild(css);
  }
  doc.querySelector('#homeHero').append(element(doc,'mt-hero-art',art()));
  doc.querySelector('#homeHero').after(element(doc,'mt-ribbon',ribbon()));
  const reviewHeading = doc.querySelector('#reviews h2');
  reviewHeading?.before(element(doc,'mt-section-mark',direction==='schematic' ? microphone : direction==='patchbay' ? patch : waveform));
  doc.querySelectorAll('.studio-shot').forEach((photo,i)=>{
    const studio = i===0 ? 'Studio A' : 'Studio B';
    photo.append(element(doc,'mt-photo-header',`${direction==='patchbay'?'<span class="mt-jack">●</span>':icon(i===0?'mix':'record')}<span>${studio}</span><i>${direction==='windows'?'•••':direction==='schematic'?'ROOM VIEW':'↗'}</i>`));
  });
  const heading = doc.querySelector('#studios h2');
  heading?.before(element(doc,'mt-section-mark',direction==='schematic'?icon('produce'):direction==='patchbay'?patch:icon('record')));
  const form = doc.querySelector('#inquiryForm');
  form?.prepend(element(doc,'mt-form-header',`${direction==='patchbay'?'<span class="mt-jack">●</span>':direction==='schematic'?microphone:icon('idea')}<span>${direction==='windows'?'New session / Your project':direction==='patchbay'?'Let’s connect':direction==='schematic'?'Start the conversation':'Your idea starts here'}</span><i>${direction==='windows'?'•••':'↗'}</i>`));
  document.getElementById('note').textContent = descriptions[direction];
  document.querySelectorAll('[data-direction]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.direction===direction)));
}
function jump() {
  const doc=frame.contentDocument;
  if (!doc) return;
  if (currentSection==='homeHero') frame.contentWindow.scrollTo({top:0,behavior:'instant'});
  else if(currentSection==='artwork') doc.querySelector('.mt-ribbon')?.scrollIntoView({block:'start',behavior:'instant'});
  else doc.getElementById(currentSection)?.scrollIntoView({block:'start',behavior:'instant'});
}
function fit() {
  const width=Number(size.value),height=width===390?844:1000;
  const scale=Math.min(1,(document.querySelector('.stage').clientWidth-32)/width);
  frame.style.width=`${width}px`;frame.style.height=`${height}px`;frame.style.transform=`scale(${scale})`;
  frameWrap.style.width=`${width*scale}px`;frameWrap.style.height=`${height*scale}px`;
}
document.querySelectorAll('[data-direction]').forEach(button=>button.addEventListener('click',()=>{direction=button.dataset.direction;history.replaceState(null,'',`?direction=${direction}`);apply();jump();}));
document.querySelectorAll('[data-section]').forEach(button=>button.addEventListener('click',()=>{currentSection=button.dataset.section;jump();}));
size.addEventListener('change',()=>{fit();jump();});addEventListener('resize',fit);
frame.addEventListener('load',()=>{
  apply();jump();
  // The real root homepage is the preview source. Block transaction submission in the study.
  const doc=frame.contentDocument;
  doc?.querySelector('#inquiryForm')?.addEventListener('submit',event=>{event.preventDefault();event.stopImmediatePropagation();},true);
});
if(matchMedia('(max-width:650px)').matches)size.value='390';fit();
