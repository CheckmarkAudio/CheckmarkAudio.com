(() => {
  const gallery = document.querySelector('[data-tonight-gallery]');
  const lightbox = document.querySelector('[data-tonight-lightbox]');
  if (!gallery || !lightbox) return;

  const items = [...gallery.querySelectorAll('.tonight-gallery__item')];
  const image = lightbox.querySelector('[data-lightbox-image]');
  const artist = lightbox.querySelector('[data-lightbox-artist]');
  const count = lightbox.querySelector('[data-lightbox-count]');
  const closeButton = lightbox.querySelector('[data-lightbox-close]');
  const previousButton = lightbox.querySelector('[data-lightbox-previous]');
  const nextButton = lightbox.querySelector('[data-lightbox-next]');
  let currentIndex = 0;
  let lastFocused = null;
  let touchStartX = 0;

  const show = (index) => {
    currentIndex = (index + items.length) % items.length;
    const item = items[currentIndex];
    const source = item.querySelector('img');
    const artistName = item.dataset.artist.trim();

    image.classList.remove('is-ready');
    image.onload = () => image.classList.add('is-ready');
    image.src = source.currentSrc || source.src;
    image.alt = source.alt;
    count.textContent = `${String(currentIndex + 1).padStart(2, '0')} / ${String(items.length).padStart(2, '0')}`;
    artist.textContent = artistName;
    artist.hidden = !artistName;

    [currentIndex - 1, currentIndex + 1].forEach((nearbyIndex) => {
      const nearbySource = items[(nearbyIndex + items.length) % items.length].querySelector('img');
      const preload = new Image();
      preload.src = nearbySource.currentSrc || nearbySource.src;
    });

    if (image.complete) image.classList.add('is-ready');
  };

  const open = (index) => {
    lastFocused = document.activeElement;
    show(index);
    lightbox.hidden = false;
    document.body.classList.add('tonight-lightbox-open');
    closeButton.focus();
  };

  const close = () => {
    lightbox.hidden = true;
    document.body.classList.remove('tonight-lightbox-open');
    image.removeAttribute('src');
    if (lastFocused instanceof HTMLElement) lastFocused.focus();
  };

  items.forEach((item, index) => item.addEventListener('click', () => open(index)));
  closeButton.addEventListener('click', close);
  previousButton.addEventListener('click', () => show(currentIndex - 1));
  nextButton.addEventListener('click', () => show(currentIndex + 1));

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) close();
  });

  lightbox.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });

  lightbox.addEventListener('touchend', (event) => {
    const distance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) < 50) return;
    show(currentIndex + (distance < 0 ? 1 : -1));
  }, { passive: true });

  document.addEventListener('keydown', (event) => {
    if (lightbox.hidden) return;
    if (event.key === 'Escape') close();
    if (event.key === 'ArrowLeft') show(currentIndex - 1);
    if (event.key === 'ArrowRight') show(currentIndex + 1);
  });
})();
