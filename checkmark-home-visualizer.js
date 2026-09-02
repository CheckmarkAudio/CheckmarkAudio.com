// Checkmark Audio — homepage sound demo visualizer.
// Locked visual baseline: DRAFTS/active/logo-audio-visualizer-2026-09-01/APPROVED-LOCKED-2026-09-01.html
// Plays the tracks from checkmark-demo-playlist.js inside the gear console,
// with the official gold logo pulsing inside an ambient reactive halo.
(() => {
  const stage = document.getElementById('demoVizStage');
  const canvas = document.getElementById('demoVizCanvas');
  const logoBtn = document.getElementById('demoVizLogo');
  const glow = document.getElementById('demoVizGlow');
  const audio = document.getElementById('demoVizAudio');
  const fader = document.getElementById('demoReelVolume');
  const output = document.getElementById('demoReelVolumeOutput');
  const cueStatus = document.getElementById('demoCueStatus');
  const cueButtons = document.querySelectorAll('[data-demo-cue]');
  const tracks = window.CHECKMARK_DEMO_TRACKS || [];
  if (!stage || !canvas || !logoBtn || !audio || !tracks.length) return;

  const ctx = canvas.getContext('2d');
  const supportsFilter = typeof ctx.filter === 'string';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- Track handling -------------------------------------------------
  let trackIndex = 0;
  const showTrack = () => {
    const b = cueStatus && cueStatus.querySelector('b');
    const small = cueStatus && cueStatus.querySelector('small');
    if (b) b.textContent = `Track ${String(trackIndex + 1).padStart(2, '0')}`;
    if (small) small.textContent = tracks[trackIndex].title;
  };
  const loadTrack = (index, andPlay) => {
    trackIndex = ((index % tracks.length) + tracks.length) % tracks.length;
    audio.src = tracks[trackIndex].src;
    audio.load();
    showTrack();
    if (andPlay) startPlayback();
  };
  showTrack();

  // ---- Audio graph ----------------------------------------------------
  let audioCtx = null, analyser = null, gainNode = null, freqData = null;
  function ensureAudio() {
    if (audioCtx) return;
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const src = audioCtx.createMediaElementSource(audio);
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 4096;
    analyser.smoothingTimeConstant = 0.68;
    gainNode = audioCtx.createGain();
    gainNode.gain.value = Number(fader ? fader.value : 1);
    src.connect(analyser);
    analyser.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    freqData = new Uint8Array(analyser.frequencyBinCount);
  }

  async function startPlayback() {
    ensureAudio();
    if (audioCtx.state === 'suspended') await audioCtx.resume();
    if (!audio.src) audio.src = tracks[trackIndex].src;
    try {
      await audio.play();
    } catch (e) {
      // A src change can abort an in-flight play(); retry once the new track is ready.
      audio.addEventListener('canplay', () => { audio.play().catch(() => {}); }, { once: true });
    }
  }
  function togglePlay() {
    if (audio.paused) startPlayback();
    else audio.pause();
  }
  logoBtn.addEventListener('click', togglePlay);
  audio.addEventListener('play', () => stage.classList.remove('is-paused'));
  audio.addEventListener('pause', () => stage.classList.add('is-paused'));
  audio.addEventListener('ended', () => loadTrack(trackIndex + 1, true));
  stage.classList.add('is-paused');

  cueButtons.forEach(button => button.addEventListener('click', () => {
    const step = button.dataset.demoCue === 'previous' ? -1 : 1;
    loadTrack(trackIndex + step, !audio.paused);
    button.classList.remove('cue-pulse');
    requestAnimationFrame(() => button.classList.add('cue-pulse'));
  }));

  // ---- Gain fader (same look/persistence as the old video console) ----
  const paintVolume = value => {
    const safeValue = Math.max(0, Math.min(1, Number(value)));
    if (fader) fader.style.setProperty('--fader-level', `${safeValue * 100}%`);
    if (output) {
      output.value = String(Math.round(safeValue * 100));
      output.textContent = String(Math.round(safeValue * 100));
    }
  };
  if (fader) {
    const savedVolume = Number.parseFloat(localStorage.getItem('checkmark-demo-reel-volume'));
    const initialVolume = Number.isFinite(savedVolume) ? Math.max(0, Math.min(1, savedVolume)) : Number(fader.value);
    fader.value = String(initialVolume);
    paintVolume(initialVolume);
    fader.addEventListener('input', () => {
      const v = Number(fader.value);
      if (gainNode) gainNode.gain.value = v;
      paintVolume(v);
      localStorage.setItem('checkmark-demo-reel-volume', String(v));
    });
  }

  // ---- Sizing ---------------------------------------------------------
  let W = 0, H = 0, dpr = 1, minDim = 0;
  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = stage.clientWidth; H = stage.clientHeight;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    minDim = Math.min(W, H);
    stage.style.setProperty('--viz-logo', Math.round(minDim * 0.31) + 'px');
  }
  window.addEventListener('resize', resize);
  resize();

  // ---- Visibility: draw only when the console is on screen -----------
  let onScreen = true;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      onScreen = entries[0].isIntersecting;
    }).observe(stage);
  }

  // ---- Spectrum model (locked baseline values) ------------------------
  // ---- TV static -------------------------------------------------------
  // Lifts the screen off the console's black bezel so the panel reads lit
  // rather than sunk in. Pre-rendered tiles cycled as a repeat pattern: one
  // fillRect per frame instead of per-pixel work every frame.
  const NOISE_TILE = 128, NOISE_FRAMES = 8;
  const noisePatterns = [];
  (function buildNoise() {
    for (let f = 0; f < NOISE_FRAMES; f++) {
      const c = document.createElement('canvas');
      c.width = c.height = NOISE_TILE;
      const nctx = c.getContext('2d');
      const img = nctx.createImageData(NOISE_TILE, NOISE_TILE);
      const d = img.data;
      for (let i = 0; i < d.length; i += 4) {
        // Narrow value and alpha spreads keep the grain soft: a wide spread
        // reads as harsh on/off speckle rather than a haze.
        const v = 208 + Math.random() * 34;
        d[i] = d[i + 1] = d[i + 2] = v;
        d[i + 3] = 80 + Math.random() * 100;
      }
      nctx.putImageData(img, 0, 0);
      noisePatterns.push(ctx.createPattern(c, 'repeat'));
    }
  })();
  // Each noise frame is held for NOISE_HOLD render frames, so the static
  // settles at roughly 10fps instead of churning at the display's 60. The
  // tile and its offset both change only on that beat — re-randomising the
  // offset every frame is what made it read as frantic.
  const NOISE_HOLD = 6;
  let noiseTick = 0, noiseStep = -1, noiseIndex = 0, noiseOffX = 0, noiseOffY = 0;

  function drawStatic() {
    const step = (noiseTick++ / NOISE_HOLD) | 0;
    if (step !== noiseStep) {
      noiseStep = step;
      noiseIndex = (noiseIndex + 1) % NOISE_FRAMES;
      noiseOffX = -Math.floor(Math.random() * NOISE_TILE);
      noiseOffY = -Math.floor(Math.random() * NOISE_TILE);
    }
    const pattern = noisePatterns[noiseIndex];
    if (!pattern) return;
    ctx.save();
    ctx.globalAlpha = 0.2 + energyLevel * 0.1;
    ctx.fillStyle = pattern;
    // Offset keeps the tile seams from settling into a visible grid.
    ctx.translate(noiseOffX, noiseOffY);
    ctx.fillRect(0, 0, W + NOISE_TILE, H + NOISE_TILE);
    ctx.restore();
  }

  const BAR_COUNT = 32;
  const ANGLE_ORDER = new Array(BAR_COUNT);
  for (let i = 0; i < BAR_COUNT; i++) ANGLE_ORDER[i] = (i * 13) % BAR_COUNT;
  const smoothBars = new Float32Array(BAR_COUNT);
  const drawn = new Float32Array(BAR_COUNT);
  let bassLevel = 0, energyLevel = 0;

  function barValue(i) {
    const nyquist = audioCtx.sampleRate / 2;
    const fMin = 40, fMax = 15000;
    const f0 = fMin * Math.pow(fMax / fMin, i / BAR_COUNT);
    const f1 = fMin * Math.pow(fMax / fMin, (i + 1) / BAR_COUNT);
    let b0 = Math.floor(f0 / nyquist * freqData.length);
    let b1 = Math.max(b0 + 1, Math.ceil(f1 / nyquist * freqData.length));
    let sum = 0;
    for (let b = b0; b < b1 && b < freqData.length; b++) sum += freqData[b];
    return (sum / (b1 - b0)) / 255;
  }

  function draw() {
    requestAnimationFrame(draw);
    if (!onScreen || document.hidden) return;
    ctx.clearRect(0, 0, W, H);
    // Static goes down first so the halo's feathered punch-out carves it back
    // out behind the logo, leaving the clean dark disc the logo reads against.
    drawStatic();
    if (!analyser) return;

    analyser.getByteFrequencyData(freqData);

    const nyquist = audioCtx.sampleRate / 2;
    const bassBins = Math.max(4, Math.round(150 / nyquist * freqData.length));
    let bass = 0;
    for (let i = 0; i < bassBins; i++) bass += freqData[i];
    bass = bass / bassBins / 255;
    bassLevel += (bass - bassLevel) * (bass > bassLevel ? 0.6 : 0.16);

    let energy = 0;
    for (let i = 0; i < BAR_COUNT; i++) {
      const v = barValue(i);
      smoothBars[i] += (v - smoothBars[i]) * (v > smoothBars[i] ? 0.65 : 0.22);
      energy += smoothBars[i];
    }
    energy /= BAR_COUNT;
    energyLevel += (energy - energyLevel) * 0.15;

    const cx = W / 2, cy = H / 2;
    const logoR = minDim * 0.16;
    const innerR = logoR * 1.42 * (1 + bassLevel * 0.05);
    const maxLen = minDim * 0.20;

    // Steep curve: averages sit low near the logo, real peaks throw far.
    for (let i = 0; i < BAR_COUNT; i++) drawn[i] = Math.pow(smoothBars[ANGLE_ORDER[i]], 2.6);
    const rOff = new Float32Array(BAR_COUNT);
    for (let i = 0; i < BAR_COUNT; i++) {
      const m1 = drawn[(i + BAR_COUNT - 1) % BAR_COUNT];
      const p1 = drawn[(i + 1) % BAR_COUNT];
      rOff[i] = 4 + ((m1 + 2 * drawn[i] + p1) / 4) * maxLen;
    }
    function haloPath(scale, rot = 0, rippleFreq = 0, ripplePhase = 0, rippleAmp = 0) {
      const px = new Float32Array(BAR_COUNT), py = new Float32Array(BAR_COUNT);
      for (let i = 0; i < BAR_COUNT; i++) {
        const frac = (i + 0.5) / BAR_COUNT;
        let r = innerR + rOff[i] * scale;
        if (rippleAmp) r += Math.sin(frac * Math.PI * 2 * rippleFreq + ripplePhase) * rippleAmp;
        const ang = -Math.PI / 2 + frac * Math.PI * 2 + rot;
        px[i] = cx + Math.cos(ang) * r;
        py[i] = cy + Math.sin(ang) * r;
      }
      ctx.beginPath();
      ctx.moveTo((px[BAR_COUNT - 1] + px[0]) / 2, (py[BAR_COUNT - 1] + py[0]) / 2);
      for (let i = 0; i < BAR_COUNT; i++) {
        const j = (i + 1) % BAR_COUNT;
        ctx.quadraticCurveTo(px[i], py[i], (px[i] + px[j]) / 2, (py[i] + py[j]) / 2);
      }
      ctx.closePath();
    }
    function haloFill(alphaMul) {
      const fill = ctx.createRadialGradient(cx, cy, innerR * 0.9, cx, cy, innerR + maxLen * 1.3);
      fill.addColorStop(0, 'rgba(169, 108, 34, ' + ((0.10 + energyLevel * 0.14) * alphaMul).toFixed(3) + ')');
      fill.addColorStop(0.55, 'rgba(229, 189, 109, ' + ((0.13 + energyLevel * 0.20) * alphaMul).toFixed(3) + ')');
      fill.addColorStop(1, 'rgba(245, 220, 155, ' + ((0.05 + energyLevel * 0.10) * alphaMul).toFixed(3) + ')');
      return fill;
    }
    ctx.save();
    if (supportsFilter) {
      ctx.filter = 'blur(26px)';
      haloPath(1.45);
      ctx.fillStyle = haloFill(0.7);
      ctx.fill();
      ctx.filter = 'blur(10px)';
      haloPath(1.12);
      ctx.fillStyle = haloFill(0.85);
      ctx.fill();
      ctx.filter = 'blur(3px)';
    } else {
      // Older Safari: no canvas blur — soften with shadow glow instead.
      ctx.shadowColor = 'rgba(229, 189, 109, 0.55)';
      ctx.shadowBlur = 22;
      haloPath(1.30);
      ctx.fillStyle = haloFill(0.5);
      ctx.fill();
    }
    haloPath(0.82);
    ctx.fillStyle = haloFill(1);
    ctx.fill();
    // Twin dissonant lines weaving around the halo.
    const t = performance.now() / 1000;
    if (supportsFilter) ctx.filter = 'none';
    ctx.shadowBlur = 0;
    ctx.lineJoin = 'round';
    ctx.lineWidth = 1;
    haloPath(0.90, Math.sin(t * 0.31) * 0.10, 5, t * 1.2, 2.5 + energyLevel * 5);
    ctx.strokeStyle = 'rgba(245, 220, 155, ' + (0.30 + energyLevel * 0.30).toFixed(3) + ')';
    ctx.stroke();
    haloPath(0.97, -Math.sin(t * 0.23 + 1.1) * 0.10, 3, -t * 1.7, 2.5 + energyLevel * 5);
    ctx.strokeStyle = 'rgba(214, 168, 94, ' + (0.28 + energyLevel * 0.28).toFixed(3) + ')';
    ctx.stroke();
    ctx.restore();

    // Feathered punch-out of the logo disc so the halo fades in around it.
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    const punch = ctx.createRadialGradient(cx, cy, innerR * 0.8, cx, cy, innerR + 14);
    punch.addColorStop(0, 'rgba(0,0,0,1)');
    punch.addColorStop(0.75, 'rgba(0,0,0,1)');
    punch.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = punch;
    ctx.beginPath();
    ctx.arc(cx, cy, innerR + 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Faint breathing ring on the inner edge of the halo.
    ctx.beginPath();
    ctx.arc(cx, cy, innerR, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(214, 168, 94,' + (0.14 + bassLevel * 0.30).toFixed(3) + ')';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Logo pulse + glow.
    const scale = 1 + bassLevel * 0.085;
    logoBtn.style.transform = 'translate(-50%, -50%) scale(' + scale.toFixed(4) + ')';
    if (glow) glow.style.opacity = (0.25 + bassLevel * 0.75).toFixed(3);
  }
  if (!reducedMotion) {
    requestAnimationFrame(draw);
  } else {
    // Reduced motion: one still noise frame and a soft glow, audio still plays.
    drawStatic();
    if (glow) glow.style.opacity = '0.3';
  }
})();
