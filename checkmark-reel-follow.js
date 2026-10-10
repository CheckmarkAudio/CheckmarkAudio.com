// Checkmark Audio — the Sound demo follows the visitor from page to page.
//
// Light version: no page-swapping router. While the demo is in use, its spot
// (song, time, whether it was playing) is kept in sessionStorage for this tab.
// On the next page the mini player (checkmark-reel-dock.js) shows up paused at
// that spot; one tap on play picks it back up. Browsers block autoplay with
// sound, and we never start audio on our own anyway. Close (or Escape) on the
// mini player ends the session, so it stops following.
//
// Loaded on the home page after checkmark-home-visualizer.js, and on inner
// pages only when a session exists (two-line check in inner-pages.js), so pages
// cost nothing extra for visitors who never press play.
// To drop the feature: remove the <script> in index.html and the check in
// inner-pages.js. The home-page dock keeps working without this file.
(() => {
  'use strict';
  const KEY = 'checkmark-reel';
  const MAX_AGE = 3 * 60 * 60 * 1000;
  // Same cache strings as index.html, so inner pages reuse the cached files.
  const DOCK_CSS = 'checkmark-reel-dock.css?v=20261009-follow';
  const DOCK_JS = 'checkmark-reel-dock.js?v=20261009-follow';
  const PLAYLIST_JS = 'checkmark-demo-playlist.js?v=20261005-neh-credit';
  const HOME_PLAYER = 'index.html#demoVideoConsole';

  const store = {
    read() {
      try {
        const s = JSON.parse(sessionStorage.getItem(KEY));
        return s && s.on && Date.now() - (s.ts || 0) < MAX_AGE ? s : null;
      } catch (e) { return null; }
    },
    write(s) { try { sessionStorage.setItem(KEY, JSON.stringify(Object.assign({}, s, { on: 1, ts: Date.now() }))); } catch (e) {} },
    clear() { try { sessionStorage.removeItem(KEY); } catch (e) {} }
  };
  const clock = t => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;

  // Park the reel at the saved spot without loading any audio. When the
  // visitor presses play, the clip is fetched and we jump to the saved time as
  // soon as the browser can seek there. Until the jump has really landed, the
  // saved spot (not 0:00) is what gets remembered, so a slow or failed seek can
  // never wipe the visitor's place.
  function parkAt(reel, saved) {
    const { audio } = reel;
    const t = Number(saved.t) || 0, d = Number(saved.d) || 0;
    reel.pendingTime = t > 0.25 ? t : null;
    reel.restingDuration = d;
    reel.restingProgress = d > 0 ? Math.min(1, t / d) : 0;
    if (reel.pendingTime == null) return;
    const events = ['loadedmetadata', 'loadeddata', 'canplay', 'progress', 'playing', 'seeked', 'timeupdate'];
    const done = () => {
      reel.pendingTime = null; reel.restingProgress = 0; reel.restingDuration = 0;
      events.forEach(type => audio.removeEventListener(type, trySeek));
      document.removeEventListener('checkmark:demo-track', forget);
    };
    // A different song was picked: the old spot no longer applies.
    const forget = () => done();
    function trySeek() {
      const at = reel.pendingTime;
      if (at == null || audio.readyState < 1) return;
      const dur = audio.duration;
      if (Number.isFinite(dur) && at >= dur - 0.5) return done(); // spot is past the end
      if (Math.abs(audio.currentTime - at) < 0.75) return done(); // landed
      const s = audio.seekable;
      for (let k = 0; k < s.length; k++) {
        if (s.start(k) <= at && at <= s.end(k)) { audio.currentTime = at; return; }
      }
      // A server that can't seek (no byte ranges) plays from the top; once it
      // has clearly started there, track the real time instead of a stale spot.
      if (!s.length && audio.currentTime > 2) done();
    }
    events.forEach(type => audio.addEventListener(type, trySeek));
    document.addEventListener('checkmark:demo-track', forget, { once: true });
  }

  // Keep the saved spot current while this page has the reel.
  function remember(reel) {
    const { audio } = reel;
    let active = !!store.read();
    let lastWrite = 0;
    const save = force => {
      if (!active) return;
      const now = Date.now();
      if (!force && now - lastWrite < 1000) return;
      lastWrite = now;
      const parked = reel.pendingTime != null;
      const d = Number.isFinite(audio.duration) && audio.duration > 0 ? audio.duration : reel.restingDuration || 0;
      store.write({ i: reel.index, t: parked ? reel.pendingTime : audio.currentTime || 0, d, playing: !audio.paused });
    };
    audio.addEventListener('play', () => { active = true; save(true); });
    audio.addEventListener('pause', () => save(true));
    audio.addEventListener('timeupdate', () => save(false));
    document.addEventListener('checkmark:demo-track', () => save(true));
    document.addEventListener('checkmark:reel-dock-close', () => { active = false; store.clear(); });
    window.addEventListener('pagehide', () => save(true));
    document.addEventListener('visibilitychange', () => { if (document.hidden) save(true); });
  }

  // ---- Home page: the real console is the reel ---------------------------
  const home = window.CheckmarkDemoReel;
  if (home && document.getElementById('demoVideoConsole')) {
    const saved = store.read();
    if (saved) {
      const i = Math.max(0, Math.min(home.tracks.length - 1, saved.i | 0));
      if (home.park) home.park(i); else home.load(i, false);
      parkAt(home, saved);
      home.resumed = true; // the dock may show once the console scrolls away
    }
    remember(home);
    return;
  }
  if (document.getElementById('demoVideoConsole')) return;

  // ---- Inner pages: a small stand-in reel with its own <audio> ------------
  const saved = store.read();
  if (!saved) return;

  const loadScript = src => new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src; s.onload = resolve; s.onerror = reject;
    document.body.appendChild(s);
  });
  const loadStyle = href => new Promise(resolve => {
    const l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = href; l.onload = l.onerror = resolve;
    document.head.appendChild(l);
  });

  function standInReel(tracks) {
    const audio = new Audio();
    audio.preload = 'none';
    const savedVolume = Number.parseFloat(localStorage.getItem('checkmark-demo-reel-volume'));
    audio.volume = Number.isFinite(savedVolume) ? Math.max(0, Math.min(1, savedVolume)) : 0.75;
    let index = 0, generation = 0;
    const label = i => { const t = tracks[i == null ? index : i]; return t.artist ? `${t.title} — ${t.artist}` : t.title; };
    const pause = () => { generation++; audio.pause(); };
    const play = async () => {
      // The clip is only fetched here, on the visitor's tap, never on page load.
      if (audio.getAttribute('src') !== tracks[index].src) audio.src = tracks[index].src;
      // One sound at a time: stop anything audible on the page first.
      document.dispatchEvent(new CustomEvent('checkmark:playback-request', { detail: audio }));
      document.querySelectorAll('audio,video').forEach(m => { if (m !== audio && !m.muted) m.pause(); });
      const token = ++generation;
      try { await audio.play(); }
      catch (e) {
        if (token !== generation) return;
        audio.addEventListener('canplay', () => { if (token === generation) audio.play().catch(() => {}); }, { once: true });
      }
    };
    const load = (i, andPlay) => {
      pause();
      index = ((i % tracks.length) + tracks.length) % tracks.length;
      if (audio.hasAttribute('src')) { audio.removeAttribute('src'); audio.load(); }
      document.dispatchEvent(new CustomEvent('checkmark:demo-track', { detail: { index, track: tracks[index], label: label(index) } }));
      if (andPlay) play();
    };
    document.addEventListener('checkmark:playback-request', e => { if (e.detail !== audio) pause(); });
    // Another player with sound starts (or gets unmuted): the demo steps back.
    const yieldTo = e => { const m = e.target; if (m !== audio && m instanceof HTMLMediaElement && !m.paused && !m.muted) pause(); };
    document.addEventListener('play', yieldTo, true);
    document.addEventListener('volumechange', yieldTo, true);
    audio.addEventListener('ended', () => load(index + 1, true));
    return {
      audio, tracks, stage: null, playButton: null, resumed: true,
      get index() { return index; },
      label, play, pause,
      toggle: () => (audio.paused ? play() : pause()),
      load,
      step: delta => load(index + delta, !audio.paused),
      expand: () => { location.href = HOME_PLAYER; }
    };
  }

  const ready = window.CHECKMARK_DEMO_TRACKS ? Promise.resolve() : loadScript(PLAYLIST_JS);
  Promise.all([ready, loadStyle(DOCK_CSS)]).then(() => {
    const tracks = window.CHECKMARK_DEMO_TRACKS || [];
    if (!tracks.length) return;
    const reel = standInReel(tracks);
    reel.load(Math.max(0, Math.min(tracks.length - 1, saved.i | 0)), false);
    parkAt(reel, saved);
    remember(reel);
    window.CheckmarkDemoReel = reel;
    return loadScript(DOCK_JS).then(() => {
      const hint = document.querySelector('#reelDock [data-reel-dock="hint"]');
      if (!hint) return;
      if (reel.pendingTime != null) hint.textContent = `Tap play to pick up at ${clock(reel.pendingTime)}`;
      const clear = () => { hint.textContent = ''; };
      reel.audio.addEventListener('play', clear, { once: true });
      document.addEventListener('checkmark:demo-track', clear, { once: true });
    });
  }).catch(() => {});

  // Back/forward cache: if the mini player was closed on another page, honor it.
  window.addEventListener('pageshow', e => {
    if (!e.persisted || store.read()) return;
    const close = document.querySelector('#reelDock [data-reel-dock="close"]');
    if (close && document.getElementById('reelDock').classList.contains('is-visible')) close.click();
  });
})();
