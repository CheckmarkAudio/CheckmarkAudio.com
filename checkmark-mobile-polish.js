/* 2026-10-18: Affiliates & recognition marquee track (phone). Desktop and
   reduced-motion layouts are handled in checkmark-mobile-polish.css. */
(()=>{
  const logos=document.querySelector('.affiliate-logos');
  if(!logos||logos.classList.contains('has-track'))return;
  const figures=[...logos.querySelectorAll(':scope > figure')];
  if(!figures.length)return;
  const track=document.createElement('div');
  track.className='affiliate-track';
  figures.forEach(f=>track.appendChild(f));
  figures.forEach(f=>{
    const c=f.cloneNode(true);
    c.setAttribute('data-aff-clone','');c.setAttribute('aria-hidden','true');
    c.querySelectorAll('a,button,[tabindex]').forEach(el=>el.setAttribute('tabindex','-1'));
    track.appendChild(c);
  });
  logos.appendChild(track);
  logos.classList.add('has-track');
  let resume=null;
  const pause=()=>{clearTimeout(resume);logos.classList.add('is-paused')};
  const play=()=>{clearTimeout(resume);resume=setTimeout(()=>logos.classList.remove('is-paused'),900)};
  logos.addEventListener('pointerdown',pause,{passive:true});
  ['pointerup','pointercancel','pointerleave'].forEach(t=>logos.addEventListener(t,play,{passive:true}));
  logos.addEventListener('touchstart',pause,{passive:true});
  logos.addEventListener('touchend',play,{passive:true});
  logos.addEventListener('focusin',pause);
  logos.addEventListener('focusout',play);
})();
