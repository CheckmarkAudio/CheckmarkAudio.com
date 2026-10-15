// Checkmark Audio — stop site audio when the visitor leaves.
//
// Pauses every playing <audio>/<video> (the Sound demo, the dock, the mix
// comparison, any page audio) when the tab is hidden (tab or app switch,
// minimised window), when the window loses focus to something outside the
// site, or when the page is left (pagehide). Position is kept; nothing
// resumes on its own when the visitor comes back.
//
// Not triggered by the mouse merely leaving the viewport while the window
// keeps focus (moving to a scrollbar, the toolbar, another monitor).
//
// Internal page switches keep playing: checkmark-reel-continue.js shows the
// next page in a same-origin frame, and moving focus into that frame fires
// a blur on this window. So a blur only counts if, a moment later, focus is
// not still inside this page or one of its own frames.
(() => {
  'use strict';
  if (window.top !== window) {
    // Inside the site's own frame: the top page owns the pause logic, which
    // also reaches this frame's media. Only a frame opened on its own (not
    // same-origin with a parent) would land here and has nothing to own.
    try { if (window.top.document) return; } catch (e) { /* cross-origin parent */ }
  }

  const BLUR_DELAY = 200;

  function docs() {
    const list = [document];
    document.querySelectorAll('iframe').forEach(frame => {
      try { if (frame.contentDocument) list.push(frame.contentDocument); } catch (e) { /* other origin */ }
    });
    return list;
  }

  function pauseAll() {
    const reel = window.CheckmarkDemoReel;
    if (reel && reel.audio && !reel.audio.paused && reel.pause) reel.pause();
    docs().forEach(doc => doc.querySelectorAll('audio, video').forEach(media => {
      if (!media.paused) media.pause();
    }));
  }

  // Focus still with us: this document or one of the site's own frames.
  function focusStillHere() {
    if (document.hasFocus()) return true;
    const active = document.activeElement;
    if (active && active.tagName === 'IFRAME') {
      try { return !!active.contentDocument && active.contentDocument.hasFocus(); } catch (e) { return false; }
    }
    return false;
  }

  let blurTimer = 0;
  window.addEventListener('blur', () => {
    clearTimeout(blurTimer);
    blurTimer = setTimeout(() => {
      if (!focusStillHere()) pauseAll();
    }, BLUR_DELAY);
  });
  window.addEventListener('focus', () => clearTimeout(blurTimer));
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') pauseAll();
  });
  window.addEventListener('pagehide', pauseAll);

  window.CheckmarkLeavePause = { pauseAll };
})();
