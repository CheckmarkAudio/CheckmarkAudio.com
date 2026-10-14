// Checkmark Audio — the Sound demo keeps playing while the visitor changes pages.
//
// A normal page change unloads the page, and the browser stops its audio. So
// while the demo is actually PLAYING, a click on one of our own page links
// does not unload this page: the new page opens in a full-screen frame on top
// of it, the address bar and tab title switch to that page, and the demo's
// audio (which lives on this page) never stops. Back/Forward work, and coming
// back to the page that started the demo just removes the frame.
//
// Everything else is a normal page change, exactly as before:
//   - nothing is playing (never pressed play, paused, Space, or closed);
//   - links to other sites, new-tab / modifier clicks, downloads, files;
//   - reloads and typed addresses.
// In those cases checkmark-reel-follow.js still remembers the song and spot.
//
// Pages shown in the frame run their own scripts untouched (no re-running page
// code), so nothing on them behaves differently. Interruptions still apply on
// every page: another player with sound starting, Space, the mini player's
// pause or close.
//
// Loaded by checkmark-reel-follow.js once the demo exists on the page.
// To drop the feature: remove the loadScript(CONTINUE_JS) line there.
(() => {
  'use strict';
  if (window.top !== window || window.CheckmarkReelContinue) return;
  const reel = window.CheckmarkDemoReel;
  if (!reel || !reel.audio || !window.history || !history.pushState) return;
  const { audio } = reel;
  const DOCK_CSS = 'checkmark-reel-dock.css?v=20261013-square';
  const pagePath = p => p.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
  const home = { href: location.href, path: pagePath(location.pathname), search: location.search, title: document.title };

  const style = document.createElement('style');
  style.textContent = `
    .reel-stage{position:fixed;inset:0;width:100%;height:100%;border:0;margin:0;padding:0;display:block;z-index:2147482000;background:#080909;color-scheme:dark}
    .reel-stage.is-loading{visibility:hidden;pointer-events:none}
    html.reel-staged,html.reel-staged body{overflow:hidden!important}
    html.reel-staged body>[data-reel-stage-hidden]{visibility:hidden!important}
    html.reel-staged .reel-dock{z-index:2147483000}`;
  document.head.appendChild(style);

  let frame = null;         // the frame currently on screen
  let pending = null;       // a frame still loading
  let savedScroll = 0;

  const playing = () => !audio.paused && !audio.ended;
  const dispatchView = () => {
    const win = frame && frame.contentWindow;
    document.dispatchEvent(new CustomEvent('checkmark:reel-stage', { detail: win ? { doc: win.document, win } : null }));
  };

  // Which clicks are ordinary moves between our own pages.
  function pageLink(event, doc) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return null;
    const link = event.target.closest && event.target.closest('a[href]');
    if (!link || link.hasAttribute('download')) return null;
    const target = (link.getAttribute('target') || '').toLowerCase();
    if (target && target !== '_self' && target !== '_top') return null;
    let url;
    try { url = new URL(link.href, doc.baseURI); } catch (e) { return null; }
    if (!/^https?:$/.test(url.protocol)) return null;
    return { link, url };
  }
  const isOurPage = url => url.origin === location.origin && /(^|\/)([^/.]*|[^/]*\.html?)$/.test(url.pathname);
  const sameDocument = (url, loc) => pagePath(url.pathname) === pagePath(loc.pathname) && url.search === loc.search && url.hash && url.hash !== '#';
  const isHome = url => pagePath(url.pathname) === home.path && url.search === home.search;

  // Back to the page underneath: drop the frame, put scroll and focus back.
  function unstage(hash) {
    if (pending) { pending.remove(); pending = null; }
    if (!frame) return;
    frame.remove(); frame = null;
    document.documentElement.classList.remove('reel-staged');
    document.querySelectorAll('[data-reel-stage-hidden]').forEach(el => { el.removeAttribute('data-reel-stage-hidden'); el.removeAttribute('inert'); });
    document.title = home.title;
    window.scrollTo({ top: savedScroll, behavior: 'instant' });
    dispatchView();
    const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
    if (target) (window.checkmarkScrollToSection || (t => t.scrollIntoView()))(target);
  }

  function hideHome() {
    savedScroll = window.scrollY;
    for (const el of document.body.children) {
      if (el.classList.contains('reel-stage') || el.id === 'reelDock' || el.id === 'nl-badge-frame' || /^(SCRIPT|STYLE|LINK)$/.test(el.tagName)) continue;
      if (el.hasAttribute('inert')) continue; // already inert for its own reasons
      el.setAttribute('data-reel-stage-hidden', '');
      el.setAttribute('inert', '');
    }
    document.documentElement.classList.add('reel-staged');
  }

  // Open a page in a fresh frame; swap it in once it has something to show,
  // so the visitor never sees a blank screen between pages.
  function stage(url, { push = true } = {}) {
    if (pending) pending.remove();
    const next = document.createElement('iframe');
    next.className = 'reel-stage is-loading';
    next.title = 'Checkmark Audio';
    next.setAttribute('allow', 'autoplay; fullscreen; clipboard-write');
    next.setAttribute('allowfullscreen', '');
    pending = next;
    if (push) history.pushState({ reelStage: url.href }, '', url.href);
    let shown = false, timer = 0;
    const show = () => {
      if (shown || pending !== next) return;
      shown = true; clearInterval(timer); pending = null;
      if (!frame) hideHome(); else frame.remove();
      frame = next;
      next.classList.remove('is-loading');
      adopt(next);
      dispatchView();
      try { next.contentWindow.focus(); } catch (e) {}
    };
    // Show at DOMContentLoaded plus a beat for injected styles, or at load.
    let readyAt = 0;
    timer = setInterval(() => {
      let d; try { d = next.contentDocument; } catch (e) { return show(); }
      if (!d || d.URL === 'about:blank' || d.readyState === 'loading') return;
      adopt(next);
      readyAt = readyAt || Date.now();
      if (Date.now() - readyAt > 250) show();
    }, 40);
    // load also fires when the frame moves on by itself (a form, a script).
    next.addEventListener('load', () => { adopt(next); show(); });
    next.src = url.href;
    document.body.appendChild(next);
  }

  // Wire up each page as it lands in the frame.
  const adopted = new WeakSet();
  function adopt(f) {
    let win, doc;
    try { win = f.contentWindow; doc = win.document; } catch (e) { return; }
    if (!doc || doc.URL === 'about:blank' || adopted.has(doc)) return;
    adopted.add(doc);
    if (f === frame || f === pending) {
      document.title = doc.title || home.title;
      f.title = doc.title || 'Checkmark Audio';
      // The frame navigated on its own (a script, a form): keep the address bar honest.
      if (doc.URL !== location.href && pagePath(new URL(doc.URL).pathname) !== pagePath(location.pathname)) history.replaceState({ reelStage: doc.URL }, '', doc.URL);
    }
    const link = doc.createElement('link');
    link.rel = 'stylesheet'; link.href = DOCK_CSS; // footer clearance rule
    doc.head.appendChild(link);
    doc.addEventListener('click', event => {
      const hit = pageLink(event, doc);
      if (!hit) return;
      if (sameDocument(hit.url, win.location)) return; // in-page jump: the page handles it
      event.preventDefault();
      go(hit.url);
    });
    // One sound at a time across the frame: another player with sound wins.
    const yieldTo = event => {
      const m = event.target;
      if (m && m !== audio && typeof m.paused === 'boolean' && !m.paused && !m.muted && playing()) reel.pause();
    };
    doc.addEventListener('play', yieldTo, true);
    doc.addEventListener('volumechange', yieldTo, true);
    doc.addEventListener('keydown', onKey, true);
    if (f === frame) dispatchView();
  }

  // Where a click should go.
  function go(url) {
    if (isHome(url) && frame) {
      history.pushState(null, '', url.href);
      unstage(url.hash);
      return;
    }
    if (isOurPage(url) && playing()) { stage(url); return; }
    location.href = url.href; // nothing playing, or another site: a normal page change
  }

  // Links on the page underneath (before any frame is up).
  document.addEventListener('click', event => {
    if (frame) return;
    const hit = pageLink(event, document);
    if (!hit || !playing() || !isOurPage(hit.url) || isHome(hit.url) || sameDocument(hit.url, location)) return;
    event.preventDefault();
    stage(hit.url);
  });

  window.addEventListener('popstate', event => {
    const st = event.state;
    if (st && st.reelStage) {
      if (frame || playing()) stage(new URL(st.reelStage), { push: false });
      else location.reload();
    } else if (frame && isHome(new URL(location.href))) {
      unstage(location.hash);
    } else if (frame) {
      location.reload();
    }
  });

  // Space pauses the demo while it plays (when typing or on a control, Space
  // keeps its usual job). When nothing is playing, Space scrolls as usual.
  function onKey(event) {
    if (event.key !== ' ' && event.key !== 'Spacebar') return;
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || !playing()) return;
    const t = event.target;
    if (t && t.closest && t.closest('input, textarea, select, button, a[href], summary, audio, video, [contenteditable=""], [contenteditable="true"], [role="button"], [role="slider"], [role="option"], [role="menuitem"], [role="tab"]')) return;
    event.preventDefault();
    reel.pause();
  }
  document.addEventListener('keydown', onKey, true);

  // The demo starts: everything with sound in the frame steps back.
  audio.addEventListener('play', () => {
    let doc; try { doc = frame && frame.contentDocument; } catch (e) { return; }
    if (doc) doc.querySelectorAll('audio,video').forEach(m => { if (!m.muted && !m.paused) m.pause(); });
  });

  // "Back to the full player" from a framed page returns to the console here.
  document.addEventListener('checkmark:reel-dock-expand', () => {
    if (frame && reel.stage) { history.pushState(null, '', home.href.split('#')[0]); unstage(); }
  });

  window.CheckmarkReelContinue = { stage: url => stage(new URL(url, location.href)), unstage, get staged() { return !!frame; } };
})();
