(() => {
  const tracks = [
    {id:'song-of-solomon',title:'Song of Solomon'},
    {id:'tape',title:'Tape'}
  ];
  const player=document.getElementById('abplayer');
  if(!player)return;
  const raw=document.getElementById('rawaudio'), mix=document.getElementById('mixaudio');
  const play=document.getElementById('compareplay'), progress=document.getElementById('abprogress');
  const status=document.getElementById('abstatus'), current=document.getElementById('abcurrent'), durationLabel=document.getElementById('abduration');
  const buttons=[...player.querySelectorAll('[data-audio-mode]')];
  let trackIndex=0,mode='mix',playing=false,pending=false,timer=null,generation=0;
  const active=()=>mode==='raw'?raw:mix;
  const duration=()=>Math.min(...[raw.duration,mix.duration].map(v=>Number.isFinite(v)?v:15));
  const time=v=>`${Math.floor(v/60)}:${String(Math.floor(v%60)).padStart(2,'0')}`;
  function draw(){const d=duration(),t=Math.min(active().currentTime,d);progress.value=d?t/d*1000:0;current.textContent=time(t);durationLabel.textContent=time(d);}
  function setMode(next){mode=next;raw.muted=mode!=='raw';mix.muted=mode!=='mix';player.dataset.mode=mode;status.textContent=mode==='raw'?'Unmixed active':'Mixed active';buttons.forEach(b=>{const on=b.dataset.audioMode===mode;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});}
  function stop(){generation++;playing=false;pending=false;raw.pause();mix.pause();clearInterval(timer);timer=null;player.classList.remove('playing');play.textContent='▶';play.setAttribute('aria-label','Play comparison');}
  async function start(){if(pending)return;document.dispatchEvent(new CustomEvent('checkmark:playback-request',{detail:player}));document.querySelectorAll('audio,video').forEach(media=>{if(media!==raw&&media!==mix)media.pause();});pending=true;const token=++generation;const position=active().currentTime>=duration()-.05?0:active().currentTime;raw.currentTime=position;mix.currentTime=position;setMode(mode);
    try{await Promise.all([raw.play(),mix.play()]);if(token!==generation)return;pending=false;playing=true;player.classList.add('playing');play.textContent='Ⅱ';play.setAttribute('aria-label','Pause comparison');timer=setInterval(()=>{const lead=active(),other=mode==='raw'?mix:raw;if(Math.abs(lead.currentTime-other.currentTime)>.04)other.currentTime=lead.currentTime;draw();},100);}
    catch(error){if(token!==generation)return;stop();status.textContent='Unable to play audio. Please try again.';}
  }
  buttons.forEach(b=>b.addEventListener('click',()=>setMode(b.dataset.audioMode)));
  play.addEventListener('click',()=>playing||pending?stop():start());
  progress.addEventListener('input',()=>{const t=Number(progress.value)/1000*duration();raw.currentTime=t;mix.currentTime=t;draw();});
  [raw,mix].forEach(audio=>{audio.addEventListener('loadedmetadata',draw);audio.addEventListener('ended',()=>{stop();draw();});audio.addEventListener('error',()=>{stop();status.textContent='Audio could not load. Please try again.';});});
  function changeTrack(direction){
    stop();trackIndex=(trackIndex+direction+tracks.length)%tracks.length;
    const track=tracks[trackIndex];
    raw.src=`MEDIA/AUDIO/mix-comparisons/${track.id}-unmixed.m4a?v=20260923-15s`;
    mix.src=`MEDIA/AUDIO/mix-comparisons/${track.id}-mixed.m4a?v=20260923-15s`;
    raw.load();mix.load();
    document.getElementById('comparison-title').textContent=track.title;
    document.getElementById('comparison-count').textContent=`Track ${String(trackIndex+1).padStart(2,'0')} / ${String(tracks.length).padStart(2,'0')}`;
    setMode(mode);draw();
  }
  document.getElementById('comparison-previous').addEventListener('click',()=>changeTrack(-1));
  document.getElementById('comparison-next').addEventListener('click',()=>changeTrack(1));
  document.addEventListener('checkmark:playback-request',event=>{if(event.detail!==player)stop();});
  document.addEventListener('play',event=>{if(event.target!==raw&&event.target!==mix&&!event.target.paused&&(playing||pending))stop();},true);
  setMode(mode);draw();
})();
