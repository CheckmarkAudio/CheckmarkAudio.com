(() => {
  const video = document.getElementById('demoReelVideo');
  const fader = document.getElementById('demoReelVolume');
  const output = document.getElementById('demoReelVolumeOutput');
  const cueStatus = document.getElementById('demoCueStatus');
  const cueButtons = document.querySelectorAll('[data-demo-cue]');
  const cuePoints = [0, 11.8, 21.5, 30.3, 38.8, 47.3, 56.2, 63.7, 73.2, 84.7, 91.7, 104.2, 115.5, 123.2];

  if (!video || !fader || !output) return;

  const paintVolume = value => {
    const safeValue = Math.max(0, Math.min(1, Number(value)));
    fader.style.setProperty('--fader-level', `${safeValue * 100}%`);
    output.value = String(Math.round(safeValue * 100));
    output.textContent = String(Math.round(safeValue * 100));
  };

  const savedVolume = Number.parseFloat(localStorage.getItem('checkmark-demo-reel-volume'));
  const initialVolume = Number.isFinite(savedVolume) ? savedVolume : Number(fader.value);
  video.volume = Math.max(0, Math.min(1, initialVolume));
  fader.value = String(video.volume);
  paintVolume(video.volume);

  fader.addEventListener('input', () => {
    video.muted = false;
    video.volume = Number(fader.value);
    paintVolume(video.volume);
    localStorage.setItem('checkmark-demo-reel-volume', String(video.volume));
  });

  video.addEventListener('volumechange', () => {
    const displayedVolume = video.muted ? 0 : video.volume;
    fader.value = String(displayedVolume);
    paintVolume(displayedVolume);
  });

  const formatTime = seconds => `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`;
  let activeCueIndex = 0;
  let pendingCueIndex = null;

  const showCue = index => {
    const cueIndex = Math.max(0, Math.min(cuePoints.length - 1, index));
    cueStatus.querySelector('b').textContent = `Track ${String(cueIndex + 1).padStart(2, '0')}`;
    cueStatus.querySelector('small').textContent = formatTime(cuePoints[cueIndex]);
  };

  cueButtons.forEach(button => button.addEventListener('click', () => {
    try {
    const current = pendingCueIndex === null && Number.isFinite(video.currentTime)
      ? video.currentTime
      : cuePoints[activeCueIndex];
    let nextIndex;
    if (button.dataset.demoCue === 'previous') {
      nextIndex = cuePoints.findLastIndex(point => point < current - 1.25);
      if (nextIndex < 0) nextIndex = 0;
    } else {
      nextIndex = cuePoints.findIndex(point => point > current + 0.35);
      if (nextIndex < 0) nextIndex = cuePoints.length - 1;
    }
    activeCueIndex = nextIndex;
    pendingCueIndex = nextIndex;
    showCue(activeCueIndex);
    const seekToCue = () => {
      video.currentTime = cuePoints[activeCueIndex];
      pendingCueIndex = null;
    };
    if (video.readyState >= 1) seekToCue();
    else video.addEventListener('loadedmetadata', seekToCue, { once: true });
    button.classList.remove('cue-pulse');
    requestAnimationFrame(() => button.classList.add('cue-pulse'));
    } catch (error) {
      cueStatus.querySelector('small').textContent = 'Cue unavailable';
      console.error('Demo reel cue failed', error);
    }
  }));

  video.addEventListener('timeupdate', () => {
    if (pendingCueIndex !== null) return;
    const activeIndex = Math.max(0, cuePoints.findLastIndex(point => point <= video.currentTime + 0.15));
    activeCueIndex = activeIndex;
    showCue(activeIndex);
  });
})();
