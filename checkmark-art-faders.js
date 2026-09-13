// Interactive illustration only; these controls do not alter recorded audio.
document.querySelectorAll('.mix-faders[data-adjustable]').forEach(original=>{
  const rack=document.createElement('div');
  rack.className='mix-faders adjustable-rack';
  rack.setAttribute('role','group');
  rack.setAttribute('aria-label','Interactive mixing illustration');
  const panel=document.createElement('img');
  panel.src='MEDIA/ARTWORK/mixing-fader-rack-panel.png';
  panel.width=1344;panel.height=492;panel.alt='';panel.draggable=false;
  rack.append(panel);
  [395,478,560,643,726,809,892].forEach((x,i)=>{
    const control=document.createElement('span');control.className='art-fader';
    control.style.setProperty('--x',`${x/1344*100}%`);
    const input=document.createElement('input');input.type='range';input.min='0';input.max='100';input.value='50';input.step='1';
    input.setAttribute('aria-label',`Illustration fader ${i+1}`);
    input.setAttribute('aria-orientation','vertical');
    const thumb=document.createElement('img');thumb.src=`MEDIA/ARTWORK/mixing-fader-handle-${i+1}.png`;thumb.alt='';thumb.draggable=false;
    function paint(){control.style.setProperty('--value',input.value)}
    input.addEventListener('input',paint);
    // Capture the whole narrow channel for reliable mouse and touch dragging.
    function move(event){const bounds=control.getBoundingClientRect();input.value=String(Math.round(Math.max(0,Math.min(100,100*(1-(event.clientY-bounds.top)/bounds.height)))));paint()}
    input.addEventListener('pointerdown',event=>{event.preventDefault();input.focus({preventScroll:true});input.setPointerCapture(event.pointerId);move(event)});
    input.addEventListener('pointermove',event=>{if(input.hasPointerCapture(event.pointerId))move(event)});
    input.addEventListener('pointerup',event=>{if(input.hasPointerCapture(event.pointerId))input.releasePointerCapture(event.pointerId)});
    control.append(input,thumb);rack.append(control);
  });
  original.replaceWith(rack);
});
