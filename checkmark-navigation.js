(() => {
  const header = document.querySelector('.header');
  const menu = header?.querySelector('.menu');
  const navigation = header?.querySelector('.navlinks');
  const consultation = header?.querySelector('.header-cta');
  const mobileQuery = window.matchMedia('(max-width: 1120px)');

  if (!header || !menu || !navigation || header.dataset.navigationReady === 'true') return;
  header.dataset.navigationReady = 'true';

  const calendarStyles = document.createElement('link');
  calendarStyles.rel = 'stylesheet';
  calendarStyles.href = 'checkmark-calendar-shortcut.css?v=20260920-1';
  document.head.appendChild(calendarStyles);
  const calendarShortcut = document.createElement('a');
  calendarShortcut.className = 'calendar-shortcut';
  calendarShortcut.href = 'index.html#consultation-calendar';
  calendarShortcut.setAttribute('aria-label', 'Open consultation calendar');
  calendarShortcut.title = 'Consultation calendar';
  calendarShortcut.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="5" width="18" height="16" rx="1.5"/><path d="M7 3v4m10-4v4M3 10h18M7 14h2m3 0h2m3 0h1M7 17h2m3 0h2"/></svg>';
  menu.after(calendarShortcut);


  navigation.setAttribute('aria-label', 'Primary navigation');
  menu.setAttribute('aria-label', 'Open navigation');
  menu.innerHTML = '<span class="menu-icon" aria-hidden="true"><i></i><i></i></span><span class="menu-label">Menu</span>';

  if (consultation && !navigation.querySelector('.nav-mobile-cta')) {
    const mobileConsultation = consultation.cloneNode(true);
    mobileConsultation.classList.remove('header-cta');
    mobileConsultation.classList.add('nav-mobile-cta');
    navigation.appendChild(mobileConsultation);
  }

  const setNavigation = (open, { restoreFocus = false } = {}) => {
    navigation.classList.toggle('open', open);
    document.body.classList.toggle('nav-open', open && mobileQuery.matches);
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', `${open ? 'Close' : 'Open'} navigation`);
    menu.querySelector('.menu-label').textContent = open ? 'Close' : 'Menu';
    if (mobileQuery.matches) navigation.setAttribute('aria-hidden', String(!open));
    else navigation.removeAttribute('aria-hidden');
    if (restoreFocus) menu.focus({ preventScroll: true });
  };

  calendarShortcut.addEventListener('click', () => setNavigation(false));

  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    setNavigation(open);
    if (open) navigation.querySelector('a')?.focus({ preventScroll: true });
  });

  navigation.addEventListener('click', event => {
    if (event.target.closest('a') && mobileQuery.matches) setNavigation(false);
  });

  document.addEventListener('click', event => {
    if (!header.contains(event.target)) {
      if (mobileQuery.matches) setNavigation(false);
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      if (navigation.classList.contains('open')) setNavigation(false, { restoreFocus: true });
      return;
    }

    if (event.key !== 'Tab' || !mobileQuery.matches || !navigation.classList.contains('open')) return;
    const focusable = [...header.querySelectorAll('a[href], button:not([disabled])')]
      .filter(element => element.offsetParent !== null);
    const first = focusable[0];
    const last = focusable.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus({ preventScroll: true });
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus({ preventScroll: true });
    }
  });

  const syncBreakpoint = () => {
    setNavigation(false);
    if (!mobileQuery.matches) navigation.removeAttribute('aria-hidden');
  };
  mobileQuery.addEventListener?.('change', syncBreakpoint);
  syncBreakpoint();

  const setStickyHeaderState = () => header.classList.toggle('is-scrolled', window.scrollY > 18);
  window.addEventListener('scroll', setStickyHeaderState, { passive: true });
  setStickyHeaderState();
})();

// Shared short arrival for section links and development-editor navigation.
(() => {
  let animation = 0, followedLink = false;
  const initialHash = location.hash;
  const root = document.documentElement;
  const originalScrollBehavior = root.style.scrollBehavior;
  if (initialHash) root.style.scrollBehavior = 'auto';
  const cancelScroll = () => { cancelAnimationFrame(animation); animation = 0; };
  const userScroll = () => { followedLink = true; cancelScroll(); };
  window.addEventListener('wheel', userScroll, { passive: true });
  window.addEventListener('touchstart', userScroll, { passive: true });
  window.addEventListener('keydown', event => {
    if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', 'Escape', ' '].includes(event.key)) userScroll();
  });
  function findTarget(hash) {
    try { return document.getElementById(decodeURIComponent(hash.slice(1))); } catch { return null; }
  }
  function arrive(target) {
    cancelScroll();
    const margin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
    const headerHeight = document.querySelector('.header')?.getBoundingClientRect().height || 0;
    const maximum = Math.max(0, document.documentElement.scrollHeight - innerHeight);
    const destination = Math.min(maximum, Math.max(0, scrollY + target.getBoundingClientRect().top - Math.max(margin, headerHeight + 12)));
    if (!target.hasAttribute('tabindex')) {
      target.setAttribute('tabindex', '-1');
      target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
    }
    target.focus({ preventScroll: true });
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.scrollTo({ top: destination, behavior: 'instant' });
      return;
    }
    const start = Math.max(0, destination - 80);
    window.scrollTo({ top: start, behavior: 'instant' });
    const began = performance.now();
    const tick = now => {
      const progress = Math.min(1, (now - began) / 220);
      window.scrollTo({ top: start + (destination - start) * (1 - Math.pow(1 - progress, 3)), behavior: 'instant' });
      animation = progress < 1 ? requestAnimationFrame(tick) : 0;
    };
    animation = requestAnimationFrame(tick);
  }
  window.checkmarkScrollToSection = arrive;
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href]');
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
    const url = new URL(link.href, location.href);
    const pagePath = path => path.replace(/\/index\.html$/, '/');
    if (url.origin !== location.origin || pagePath(url.pathname) !== pagePath(location.pathname) || url.search !== location.search || !url.hash) return;
    const target = findTarget(url.hash);
    if (!target) return;
    event.preventDefault();
    followedLink = true;
    if (location.hash !== url.hash) history.pushState(null, '', url.hash);
    arrive(target);
  });
  const finishArrival = () => {
    if (initialHash) root.style.scrollBehavior = originalScrollBehavior;
    const target = initialHash && findTarget(initialHash);
    if (target && !followedLink) arrive(target);
  };
  if (document.readyState === 'complete') finishArrival();
  else window.addEventListener('load', finishArrival, { once: true });
})();
