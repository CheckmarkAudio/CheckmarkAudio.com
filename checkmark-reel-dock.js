// Checkmark Audio — floating "Sound demo" mini player.
//
// The homepage sound demo (the gold logo in the "Inside the work" console,
// driven by checkmark-home-visualizer.js) keeps playing when the visitor
// scrolls on. Once they have started it and the console leaves the screen,
// a small player docks bottom-left with play/pause, previous/next, a button
// back to the full console, and close. It never starts audio on its own.
(() => {
  'use strict';
  const LOGO = 'MEDIA/IMAGES/checkmark-audio-logo-official-gold-gradient-transparent-384.png';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const icon = (name, path) => `<svg class="icon-${name}" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="${path}"/></svg>`;
  const ICONS = {
    play: icon('play', 'M8 5.5v13a1 1 0 0 0 1.5.86l10.4-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z'),
    pause: icon('pause', 'M7 5h3.2v14H7zM13.8 5H17v14h-3.2z'),
    prev: icon('prev', 'M6 5h2v14H6zM19 6.2v11.6a.8.8 0 0 1-1.24.67L9.6 13.1a1.3 1.3 0 0 1 0-2.2l8.16-5.37A.8.8 0 0 1 19 6.2z'),
    next: icon('next', 'M16 5h2v14h-2zM5 6.2v11.6a.8.8 0 0 0 1.24.67l8.16-5.37a1.3 1.3 0 0 0 0-2.2L6.24 5.53A.8.8 0 0 0 5 6.2z'),
    expand: icon('expand', 'M5 5h6v2H8.4l4.3 4.3-1.4 1.4L7 8.4V11H5zm14 14h-6v-2h2.6l-4.3-4.3 1.4-1.4 4.3 4.3V13h2z'),
    close: icon('close', 'M6.4 5 12 10.6 17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19 5 17.6l5.6-5.6L5 6.4z')
  };

  function buildDock() {
    const dock = document.createElement('section');
    dock.className = 'reel-dock';
    dock.id = 'reelDock';
    dock.setAttribute('aria-label', 'Sound demo mini player');
    dock.innerHTML = `
      <button type="button" class="reel-dock__play" data-reel-dock="toggle" aria-label="Play the sound demo">
        <img src="${LOGO}" alt="" width="34" height="34">
        <span class="reel-dock__glyph">${ICONS.play}${ICONS.pause}</span>
      </button>
      <div class="reel-dock__meta">
        <span class="reel-dock__kicker">Sound demo · <span data-reel-dock="count"></span></span>
        <span class="reel-dock__title" data-reel-dock="title" aria-live="polite"></span>
        <span class="reel-dock__hint" data-reel-dock="hint"></span>
      </div>
      <div class="reel-dock__controls">
        <button type="button" data-reel-dock="prev" aria-label="Previous song">${ICONS.prev}</button>
        <button type="button" data-reel-dock="next" aria-label="Next song">${ICONS.next}</button>
        <button type="button" data-reel-dock="expand" aria-label="Back to the full sound demo player">${ICONS.expand}</button>
        <button type="button" class="reel-dock__close" data-reel-dock="close" aria-label="Close the mini player and stop the sound demo">${ICONS.close}</button>
      </div>
      <span class="reel-dock__progress" aria-hidden="true"><i></i></span>`;
    document.body.appendChild(dock);
    const part = name => dock.querySelector(`[data-reel-dock="${name}"]`);
    return { dock, part };
  }

  // Keep clear of anything fixed along the bottom edge that the dock would
  // overlap horizontally: the Netlify badge, the mobile booking bar, or any
  // fixed element marked data-reel-dock-avoid. offsetLeft/offsetWidth ignore
  // the slide-in transform, so this measures where the dock will settle.
  const FIXED_OBSTACLES = '#nl-badge-frame, .mobile-cta, [data-reel-dock-avoid]';
  function placeAboveObstacles(dock) {
    let bottom = 0;
    const left = dock.offsetLeft;
    const right = left + dock.offsetWidth;
    document.querySelectorAll(FIXED_OBSTACLES).forEach(el => {
      if (el === dock || dock.contains(el)) return;
      const style = getComputedStyle(el);
      if (style.position !== 'fixed' || style.display === 'none' || style.visibility === 'hidden') return;
      const r = el.getBoundingClientRect();
      if (!r.width || !r.height) return;
      const overlapsX = r.left < right + 8 && r.right > left - 8;
      const nearBottom = r.bottom > window.innerHeight - 160;
      if (overlapsX && nearBottom) bottom = Math.max(bottom, Math.ceil(window.innerHeight - r.top + 10));
    });
    // Measured from the real viewport edge, so the safe-area inset is already
    // included; .is-raised drops the extra env() padding.
    dock.classList.toggle('is-raised', bottom > 0);
    if (bottom > 0) dock.style.setProperty('--reel-dock-bottom', `${bottom}px`);
    else dock.style.removeProperty('--reel-dock-bottom');
  }

  // In-page booking links the dock must never sit on top of (e.g. the hero's
  // "Book a free consultation" button on a phone, the footer's link). While one of
  // them passes under the dock, the dock steps aside and comes back once it
  // has scrolled clear.
  const INFLOW_KEEP_CLEAR = 'a[href$="#book"], #inquiryForm [type="submit"], [data-reel-dock-keep-clear]';
  function coversCallToAction(dock) {
    const left = dock.offsetLeft, top = dock.offsetTop;
    const right = left + dock.offsetWidth, bottom = top + dock.offsetHeight;
    const pad = 8;
    for (const el of document.querySelectorAll(INFLOW_KEEP_CLEAR)) {
      if (dock.contains(el) || getComputedStyle(el).position === 'fixed') continue;
      const r = el.getBoundingClientRect();
      if (!r.width || !r.height) continue;
      if (r.left < right + pad && r.right > left - pad && r.top < bottom + pad && r.bottom > top - pad) return true;
    }
    return false;
  }

  // While the dock is in use, pad the bottom of the footer so the last lines
  // of the page can always scroll clear of it.
  function reserveFooterSpace(dock, active) {
    const root = document.documentElement;
    const footer = document.querySelector('.footer');
    root.classList.toggle('has-reel-dock', active && !!footer);
    if (!active || !footer) return;
    const dockTop = window.innerHeight - dock.offsetTop;
    const ownPad = parseFloat(getComputedStyle(footer).paddingBottom) || 0;
    root.style.setProperty('--reel-dock-clearance', `${Math.max(0, Math.ceil(dockTop + 12 - ownPad))}px`);
  }

  function init(reel) {
    const { audio, tracks } = reel;
    const consoleEl = document.getElementById('demoVideoConsole') || reel.stage;
    const { dock, part } = buildDock();
    const playBtn = part('toggle');
    let started = false;
    let dismissed = false;
    let consoleOnScreen = true;
    let yielding = false;

    const showTrack = index => {
      part('count').textContent = `${String(index + 1).padStart(2, '0')} / ${String(tracks.length).padStart(2, '0')}`;
      part('title').textContent = reel.label(index);
    };
    const paintPlayState = () => {
      const playing = !audio.paused;
      dock.classList.toggle('is-playing', playing);
      playBtn.setAttribute('aria-label', playing ? 'Pause the sound demo' : 'Play the sound demo');
    };
    const paintProgress = () => {
      const d = audio.duration;
      const p = Number.isFinite(d) && d > 0 ? Math.min(1, audio.currentTime / d) : 0;
      dock.style.setProperty('--reel-progress', p.toFixed(4));
    };
    const wanted = () => started && !dismissed && !consoleOnScreen;
    const update = () => {
      const want = wanted();
      if (want) placeAboveObstacles(dock);
      reserveFooterSpace(dock, started && !dismissed);
      if (want) yielding = coversCallToAction(dock);
      const show = want && !yielding;
      if (!show && dock.contains(document.activeElement)) {
        // Don't strand keyboard focus inside a dock that is going inert.
        if (consoleOnScreen) reel.playButton.focus({ preventScroll: true });
        else document.activeElement.blur();
      }
      dock.classList.toggle('is-visible', show);
      dock.toggleAttribute('inert', !show);
    };

    showTrack(reel.index);
    paintPlayState();
    update();

    document.addEventListener('checkmark:demo-track', event => showTrack(event.detail.index));
    audio.addEventListener('play', () => { started = true; dismissed = false; paintPlayState(); update(); });
    audio.addEventListener('pause', paintPlayState);
    audio.addEventListener('timeupdate', paintProgress);
    audio.addEventListener('emptied', paintProgress);

    // "On screen" = at least 15% of the console visible below the fixed header.
    // isIntersecting alone is true from the first pixel, so check the ratio.
    if ('IntersectionObserver' in window && consoleEl) {
      const header = document.querySelector('.header');
      const headerH = header && getComputedStyle(header).position === 'fixed' ? Math.round(header.getBoundingClientRect().height) : 0;
      new IntersectionObserver(entries => {
        const entry = entries[entries.length - 1];
        consoleOnScreen = entry.isIntersecting && entry.intersectionRatio >= 0.15;
        update();
      }, { threshold: [0, 0.15, 0.5, 1], rootMargin: `-${headerH}px 0px 0px 0px` }).observe(consoleEl);
    } else {
      consoleOnScreen = false;
    }

    playBtn.addEventListener('click', () => reel.toggle());
    part('prev').addEventListener('click', () => reel.step(-1));
    part('next').addEventListener('click', () => reel.step(1));
    part('expand').addEventListener('click', () => {
      consoleEl.scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth', block: 'center' });
      reel.playButton.focus({ preventScroll: true });
    });
    const close = () => {
      reel.pause();
      dismissed = true;
      update();
    };
    part('close').addEventListener('click', close);
    dock.addEventListener('keydown', event => {
      if (event.key === 'Escape') { event.preventDefault(); close(); }
    });

    // Re-check placement while scrolling (booking buttons passing under the
    // dock), on resize, and when the Netlify badge mounts, resizes or leaves.
    let queued = false;
    const recheck = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        if (wanted()) update();
      });
    };
    window.addEventListener('scroll', recheck, { passive: true });
    window.addEventListener('resize', recheck);
    let watchedBadge = null;
    const badgeWatch = new MutationObserver(recheck);
    const watchBadge = () => {
      const badge = document.getElementById('nl-badge-frame');
      if (badge === watchedBadge) return;
      badgeWatch.disconnect();
      watchedBadge = badge;
      if (badge) badgeWatch.observe(badge, { attributes: true, attributeFilter: ['style', 'hidden', 'class'] });
    };
    watchBadge();
    new MutationObserver(() => { watchBadge(); recheck(); }).observe(document.body, { childList: true });
  }

  if (window.CheckmarkDemoReel) init(window.CheckmarkDemoReel);
  else document.addEventListener('checkmark:demo-reel-ready', () => init(window.CheckmarkDemoReel), { once: true });
})();
