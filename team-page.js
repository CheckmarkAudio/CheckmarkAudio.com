/* Team page profile modal (2026-09-30) */
(() => {
  const dialog = document.getElementById('team-profile');
  if (!dialog) return;
  const panel = dialog.querySelector('.team-profile__panel');
  const img = document.getElementById('team-profile-img');
  const nameEl = document.getElementById('team-profile-name');
  const roleEl = document.getElementById('team-profile-role');
  const bioEl = document.getElementById('team-profile-bio');
  const closeBtn = dialog.querySelector('.team-profile__close');
  let lastTrigger = null;
  let hideTimer = null;

  function open(card) {
    clearTimeout(hideTimer);
    lastTrigger = card;
    const photo = card.querySelector('img');
    img.src = photo.currentSrc || photo.src;
    img.alt = photo.alt;
    nameEl.textContent = card.dataset.name;
    roleEl.textContent = card.dataset.role;
    bioEl.textContent = card.dataset.bio;
    dialog.hidden = false;
    panel.scrollTop = 0;
    document.documentElement.style.overflow = 'hidden';
    requestAnimationFrame(() => dialog.classList.add('is-open'));
    closeBtn.focus();
  }

  function close() {
    if (dialog.hidden) return;
    dialog.classList.remove('is-open');
    document.documentElement.style.overflow = '';
    hideTimer = setTimeout(() => { dialog.hidden = true; }, 220);
    if (lastTrigger) lastTrigger.focus();
  }

  document.querySelectorAll('.team-card[data-profile]').forEach((card) => {
    card.addEventListener('click', () => open(card));
  });
  dialog.querySelectorAll('[data-profile-close]').forEach((el) => el.addEventListener('click', close));

  document.addEventListener('keydown', (e) => {
    if (dialog.hidden) return;
    if (e.key === 'Escape') { e.preventDefault(); close(); return; }
    if (e.key === 'Tab') {
      const focusable = [...panel.querySelectorAll('button, a[href]')];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
})();
