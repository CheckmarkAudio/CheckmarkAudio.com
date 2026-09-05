(() => {
  const header = document.querySelector('.header');
  const menu = header?.querySelector('.menu');
  const navigation = header?.querySelector('.navlinks');
  const services = navigation?.querySelector('.navdrop');
  const servicesButton = services?.querySelector(':scope > button');
  const servicesMenu = services?.querySelector('.navdrop-menu');
  const consultation = header?.querySelector('.header-cta');
  const mobileQuery = window.matchMedia('(max-width: 1120px)');

  if (!header || !menu || !navigation || header.dataset.navigationReady === 'true') return;
  header.dataset.navigationReady = 'true';

  navigation.setAttribute('aria-label', 'Primary navigation');
  menu.setAttribute('aria-label', 'Open navigation');
  menu.innerHTML = '<span class="menu-icon" aria-hidden="true"><i></i><i></i></span><span class="menu-label">Menu</span>';

  if (consultation && !navigation.querySelector('.nav-mobile-cta')) {
    const mobileConsultation = consultation.cloneNode(true);
    mobileConsultation.classList.remove('header-cta');
    mobileConsultation.classList.add('nav-mobile-cta');
    navigation.appendChild(mobileConsultation);
  }

  const setSubmenu = open => {
    if (!services || !servicesButton || !servicesMenu) return;
    services.classList.toggle('open', open);
    servicesButton.setAttribute('aria-expanded', String(open));
    servicesButton.setAttribute('aria-label', `${open ? 'Close' : 'Open'} services menu`);
    if (mobileQuery.matches) servicesMenu.setAttribute('aria-hidden', String(!open));
    else servicesMenu.removeAttribute('aria-hidden');
  };

  const setNavigation = (open, { restoreFocus = false } = {}) => {
    navigation.classList.toggle('open', open);
    document.body.classList.toggle('nav-open', open && mobileQuery.matches);
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', `${open ? 'Close' : 'Open'} navigation`);
    menu.querySelector('.menu-label').textContent = open ? 'Close' : 'Menu';
    if (mobileQuery.matches) navigation.setAttribute('aria-hidden', String(!open));
    else navigation.removeAttribute('aria-hidden');
    if (!open) setSubmenu(false);
    if (restoreFocus) menu.focus();
  };

  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    setNavigation(open);
    if (open) navigation.querySelector('a')?.focus();
  });

  servicesButton?.addEventListener('click', event => {
    event.stopPropagation();
    setSubmenu(servicesButton.getAttribute('aria-expanded') !== 'true');
  });

  navigation.addEventListener('click', event => {
    if (event.target.closest('a') && mobileQuery.matches) setNavigation(false);
  });

  document.addEventListener('click', event => {
    if (!header.contains(event.target)) {
      if (mobileQuery.matches) setNavigation(false);
      else setSubmenu(false);
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      if (navigation.classList.contains('open')) setNavigation(false, { restoreFocus: true });
      else if (services?.classList.contains('open')) {
        setSubmenu(false);
        servicesButton.focus();
      }
      return;
    }

    if (event.key !== 'Tab' || !mobileQuery.matches || !navigation.classList.contains('open')) return;
    const focusable = [...header.querySelectorAll('a[href], button:not([disabled])')]
      .filter(element => element.offsetParent !== null);
    const first = focusable[0];
    const last = focusable.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
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
