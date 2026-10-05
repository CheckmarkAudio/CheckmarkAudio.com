(()=>{
  const video=document.getElementById('studio-tour-video');
  const play=document.querySelector('.studio-tour-play');
  if(!video||!play)return;
  play.hidden=false;
  play.addEventListener('click',async()=>{
    try{await video.play();}
    catch(error){play.hidden=false;console.warn('Studio tour playback could not start',error);}
  });
  video.addEventListener('play',()=>{play.hidden=true;});
  video.addEventListener('ended',()=>{play.hidden=false;});
})();
