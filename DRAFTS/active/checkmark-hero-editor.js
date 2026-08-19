(() => {
  'use strict';

  const storageKey = 'checkmark-draft-home-hero-v1';
  const starterMedia = [
    { id: 'sign', label: 'Checkmark studio sign', src: '../../MEDIA/IMAGES/albuquerque-new-mexico-music-studio-recording-checkmark-sign.webp', alt: 'Checkmark Audio recording studio sign in Albuquerque, New Mexico', desktop: { x: 100, y: 50, zoom: 100 }, mobile: { x: 82, y: 50, zoom: 122 } },
    { id: 'control-room', label: 'Control room workstation', src: '../../MEDIA/IMAGES/music-studio-desk-checkmark-audio-view-06.webp', alt: 'Music production workstation inside Checkmark Audio', desktop: { x: 58, y: 48, zoom: 106 }, mobile: { x: 55, y: 48, zoom: 118 } },
    { id: 'microphone-room', label: 'Control room microphone', src: '../../MEDIA/IMAGES/vocal-recording-albuquerque-nm-control-room-microphone-view-01.webp', alt: 'Recording microphone and control room at Checkmark Audio in Albuquerque', desktop: { x: 64, y: 50, zoom: 108 }, mobile: { x: 68, y: 50, zoom: 125 } },
    { id: 'studio-lounge', label: 'Studio lounge session', src: '../../MEDIA/IMAGES/GALLERY/recording-session-studio-lounge-view-03.webp', alt: 'Recording session in the Checkmark Audio studio lounge', desktop: { x: 55, y: 52, zoom: 108 }, mobile: { x: 62, y: 50, zoom: 126 } }
  ];
  const defaults = {
    interval: 8000,
    transition: 'crossfade',
    slides: starterMedia.slice(0, 3).map((item, index) => ({ ...item, enabled: true, added: index }))
  };

  const clone = value => JSON.parse(JSON.stringify(value));
  const clamp = (value, min, max) => Math.min(max, Math.max(min, Number(value)));
  const safeConfig = input => {
    if (!input || !Array.isArray(input.slides)) return clone(defaults);
    const slides = input.slides.map((slide, index) => {
      const known = starterMedia.find(item => item.id === slide.id) || (
        typeof slide.src === 'string' && /^\.\.\/\.\.\/MEDIA\/IMAGES\/.+\.(avif|gif|jpe?g|png|webp)$/i.test(slide.src)
          ? { id: String(slide.id || slide.src), label: String(slide.label || 'Project photograph'), src: slide.src, alt: String(slide.alt || ''), desktop: { x: 50, y: 50, zoom: 100 }, mobile: { x: 50, y: 50, zoom: 115 } }
          : null
      );
      if (!known) return null;
      return {
        ...clone(known),
        enabled: slide.enabled !== false,
        added: Number.isFinite(slide.added) ? slide.added : index,
        desktop: {
          x: clamp(slide.desktop?.x ?? known.desktop.x, 0, 100),
          y: clamp(slide.desktop?.y ?? known.desktop.y, 0, 100),
          zoom: clamp(slide.desktop?.zoom ?? known.desktop.zoom, 100, 170)
        },
        mobile: {
          x: clamp(slide.mobile?.x ?? known.mobile.x, 0, 100),
          y: clamp(slide.mobile?.y ?? known.mobile.y, 0, 100),
          zoom: clamp(slide.mobile?.zoom ?? known.mobile.zoom, 100, 170)
        }
      };
    }).filter(Boolean);
    if (!slides.length) return clone(defaults);
    if (!slides.some(slide => slide.enabled)) slides[0].enabled = true;
    return {
      interval: [0, 5000, 8000, 12000].includes(Number(input.interval)) ? Number(input.interval) : defaults.interval,
      transition: input.transition === 'cut' ? 'cut' : 'crossfade',
      slides
    };
  };

  let config;
  try { config = safeConfig(JSON.parse(localStorage.getItem(storageKey))); }
  catch { config = clone(defaults); }

  const hero = document.getElementById('homeHero');
  const media = document.getElementById('heroMedia');
  const dots = document.getElementById('heroDots');
  const editor = document.getElementById('heroEditor');
  const scrim = document.getElementById('heroEditorScrim');
  const slideList = document.getElementById('heroEditorSlides');
  const pauseButton = document.getElementById('heroPause');
  const launchButton = document.getElementById('heroEditLaunch');
  const saveState = document.getElementById('heroSaveState');
  const ranges = {
    x: document.getElementById('heroX'),
    y: document.getElementById('heroY'),
    zoom: document.getElementById('heroZoom')
  };
  const outputs = {
    x: document.getElementById('heroXOutput'),
    y: document.getElementById('heroYOutput'),
    zoom: document.getElementById('heroZoomOutput')
  };
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let activeId = config.slides.find(slide => slide.enabled)?.id;
  let selectedId = activeId;
  let breakpoint = 'desktop';
  let paused = false;
  let timer = null;
  let saveTimer = null;
  let dragging = false;
  let dragStart = null;
  let mediaCatalog = [];
  let mediaFiltered = [];
  let mediaVisible = 60;
  let mediaType = 'all';
  let mediaSelection = null;

  const enabledSlides = () => config.slides.filter(slide => slide.enabled);
  const selectedSlide = () => config.slides.find(slide => slide.id === selectedId) || config.slides[0];
  const activeIndex = () => Math.max(0, enabledSlides().findIndex(slide => slide.id === activeId));
  const currentProfile = slide => slide[breakpoint];
  const save = message => {
    clearTimeout(saveTimer);
    saveState.textContent = 'Saving draft settings…';
    saveTimer = setTimeout(() => {
      localStorage.setItem(storageKey, JSON.stringify(config));
      saveState.textContent = message || 'Draft settings saved on this device.';
    }, 180);
  };

  function applySlideStyle(element, slide) {
    const profile = currentProfile(slide);
    element.style.setProperty('--hero-x', `${profile.x}%`);
    element.style.setProperty('--hero-y', `${profile.y}%`);
    element.style.setProperty('--hero-zoom', profile.zoom / 100);
  }

  function renderHero() {
    const enabled = enabledSlides();
    if (!enabled.some(slide => slide.id === activeId)) activeId = enabled[0].id;
    hero.dataset.transition = config.transition;
    media.innerHTML = '';
    dots.innerHTML = '';
    enabled.forEach((slide, index) => {
      const frame = document.createElement('div');
      frame.className = `hero-slide${slide.id === activeId ? ' active' : ''}`;
      frame.dataset.slideId = slide.id;
      frame.setAttribute('aria-hidden', slide.id === activeId ? 'false' : 'true');
      const image = document.createElement('img');
      image.src = slide.src;
      image.alt = slide.id === activeId ? slide.alt : '';
      image.draggable = false;
      if (index > 0) image.loading = 'lazy';
      frame.appendChild(image);
      applySlideStyle(frame, slide);
      media.appendChild(frame);

      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = slide.id === activeId ? 'active' : '';
      dot.setAttribute('aria-label', `Show hero photograph ${index + 1}: ${slide.label}`);
      dot.addEventListener('click', () => showSlide(slide.id, true));
      dots.appendChild(dot);
    });
    restartTimer();
  }

  function showSlide(id, manual = false) {
    if (!enabledSlides().some(slide => slide.id === id)) return;
    activeId = id;
    [...media.children].forEach(frame => {
      const active = frame.dataset.slideId === id;
      frame.classList.toggle('active', active);
      frame.setAttribute('aria-hidden', active ? 'false' : 'true');
      frame.querySelector('img').alt = active ? config.slides.find(slide => slide.id === id).alt : '';
    });
    [...dots.children].forEach((dot, index) => dot.classList.toggle('active', enabledSlides()[index]?.id === id));
    if (manual) restartTimer();
  }

  function step(direction) {
    const slides = enabledSlides();
    const next = (activeIndex() + direction + slides.length) % slides.length;
    showSlide(slides[next].id, true);
  }

  function restartTimer() {
    clearInterval(timer);
    timer = null;
    if (!paused && !editor.classList.contains('open') && !reducedMotion.matches && config.interval > 0 && enabledSlides().length > 1) {
      timer = setInterval(() => step(1), config.interval);
    }
  }

  function renderEditorList() {
    slideList.innerHTML = '';
    config.slides.forEach((slide, index) => {
      const row = document.createElement('div');
      row.className = `hero-editor-slide${slide.id === selectedId ? ' selected' : ''}${slide.enabled ? '' : ' disabled'}`;
      row.tabIndex = 0;
      row.innerHTML = `<img src="${slide.src}" alt=""><span><strong>${slide.label}</strong><small>${slide.enabled ? `Slide ${enabledSlides().findIndex(item => item.id === slide.id) + 1}` : 'Hidden'}</small></span><span class="hero-slide-actions"><button type="button" data-action="up" aria-label="Move ${slide.label} earlier">↑</button><button type="button" data-action="down" aria-label="Move ${slide.label} later">↓</button><button type="button" data-action="toggle" aria-label="${slide.enabled ? 'Hide' : 'Show'} ${slide.label}">${slide.enabled ? '◉' : '○'}</button><button type="button" data-action="remove" aria-label="Remove ${slide.label} from carousel">×</button></span>`;
      const select = event => {
        if (event.target.closest('button')) return;
        selectedId = slide.id;
        if (slide.enabled) showSlide(slide.id, true);
        renderEditorList();
        syncControls();
      };
      row.addEventListener('click', select);
      row.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); select(event); } });
      row.querySelector('.hero-slide-actions').addEventListener('click', event => {
        const action = event.target.closest('button')?.dataset.action;
        if (!action) return;
        if (action === 'up' && index > 0) [config.slides[index - 1], config.slides[index]] = [config.slides[index], config.slides[index - 1]];
        if (action === 'down' && index < config.slides.length - 1) [config.slides[index + 1], config.slides[index]] = [config.slides[index], config.slides[index + 1]];
        if (action === 'toggle') {
          if (slide.enabled && enabledSlides().length === 1) { saveState.textContent = 'At least one hero photograph must remain visible.'; return; }
          slide.enabled = !slide.enabled;
        }
        if (action === 'remove') {
          if (config.slides.length === 1) { saveState.textContent = 'The final hero photograph cannot be removed.'; return; }
          if (slide.enabled && enabledSlides().length === 1) { saveState.textContent = 'Show another photograph before removing the only visible slide.'; return; }
          config.slides.splice(index, 1);
          if (selectedId === slide.id) selectedId = config.slides[0].id;
        }
        if (!enabledSlides().some(item => item.id === activeId)) activeId = enabledSlides()[0].id;
        renderHero(); renderEditorList(); syncControls(); save();
      });
      slideList.appendChild(row);
    });
  }

  function syncControls() {
    const profile = currentProfile(selectedSlide());
    Object.entries(ranges).forEach(([key, input]) => { input.value = profile[key]; outputs[key].textContent = `${profile[key]}%`; });
  }

  function updateProfile(key, value) {
    const slide = selectedSlide();
    slide[breakpoint][key] = clamp(value, key === 'zoom' ? 100 : 0, key === 'zoom' ? 170 : 100);
    outputs[key].textContent = `${slide[breakpoint][key]}%`;
    const frame = [...media.children].find(item => item.dataset.slideId === slide.id);
    if (frame) applySlideStyle(frame, slide);
    save();
  }

  const mediaBrowser = document.getElementById('mediaBrowser');
  const mediaBrowserScrim = document.getElementById('mediaBrowserScrim');
  const mediaGrid = document.getElementById('mediaGrid');
  const mediaPreviewStage = document.getElementById('mediaPreviewStage');
  const mediaSearch = document.getElementById('mediaSearch');
  const mediaFolder = document.getElementById('mediaFolder');
  const mediaAddButton = document.getElementById('mediaAddToHero');
  const escapeHtml = value => String(value).replace(/[&<>"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[character]);

  async function ensureMediaCatalog() {
    if (mediaCatalog.length) return true;
    document.getElementById('mediaResultsCount').textContent = 'Loading project media…';
    try {
      const response = await fetch('checkmark-media-index.json?v=20260819-1', { cache: 'no-store' });
      if (!response.ok) throw new Error(`Media index returned ${response.status}`);
      const payload = await response.json();
      mediaCatalog = Array.isArray(payload.entries) ? payload.entries : [];
      const folders = [...new Set(mediaCatalog.map(item => item.folder))].sort();
      mediaFolder.innerHTML = '<option value="all">All folders</option>' + folders.map(folder => `<option value="${escapeHtml(folder)}">${escapeHtml(folder.replace('MEDIA/', ''))}</option>`).join('');
      filterMedia();
      return true;
    } catch (error) {
      document.getElementById('mediaResultsCount').textContent = 'The project media index could not be loaded. Refresh the preview and try again.';
      return false;
    }
  }

  function filterMedia() {
    const query = mediaSearch.value.trim().toLowerCase();
    const folder = mediaFolder.value;
    mediaFiltered = mediaCatalog.filter(item => {
      const matchesType = mediaType === 'all' || item.type === mediaType;
      const matchesFolder = folder === 'all' || item.folder === folder;
      const matchesQuery = !query || `${item.name} ${item.folder} ${item.label}`.toLowerCase().includes(query);
      return matchesType && matchesFolder && matchesQuery;
    });
    mediaVisible = 60;
    renderMediaGrid();
  }

  function renderMediaGrid() {
    const visible = mediaFiltered.slice(0, mediaVisible);
    document.getElementById('mediaResultsCount').textContent = `${mediaFiltered.length.toLocaleString()} matching file${mediaFiltered.length === 1 ? '' : 's'} · showing ${visible.length.toLocaleString()}`;
    mediaGrid.innerHTML = visible.map(item => `<button class="media-tile${mediaSelection?.id === item.id ? ' selected' : ''}" type="button" data-media-id="${escapeHtml(item.id)}" title="${escapeHtml(item.name)}"><span class="media-tile-visual">${item.type === 'image' ? `<img src="${escapeHtml(item.src)}" alt="" loading="lazy" decoding="async">` : '<span class="media-tile-video">▶ Video</span>'}</span><span class="media-tile-name">${escapeHtml(item.name)}</span></button>`).join('');
    document.getElementById('mediaLoadMore').hidden = visible.length >= mediaFiltered.length;
  }

  function selectMedia(item) {
    mediaSelection = item;
    mediaGrid.querySelectorAll('.media-tile').forEach(tile => tile.classList.toggle('selected', tile.dataset.mediaId === item.id));
    mediaPreviewStage.innerHTML = item.type === 'image'
      ? `<img src="${escapeHtml(item.src)}" alt="Preview of ${escapeHtml(item.label)}">`
      : `<video controls preload="metadata" src="${escapeHtml(item.src)}"></video>`;
    document.getElementById('mediaPreviewName').textContent = item.name;
    document.getElementById('mediaPreviewPath').textContent = item.folder;
    mediaAddButton.disabled = item.type !== 'image' || config.slides.some(slide => slide.id === item.id);
    mediaAddButton.textContent = item.type === 'video' ? 'Videos need playback setup' : config.slides.some(slide => slide.id === item.id) ? 'Already in header' : 'Add photo to header';
  }

  async function openMediaBrowser() {
    mediaBrowser.classList.add('open'); mediaBrowserScrim.hidden = false; mediaBrowser.setAttribute('aria-hidden', 'false');
    await ensureMediaCatalog();
    mediaSearch.focus();
  }

  function closeMediaBrowser() {
    mediaBrowser.classList.remove('open'); mediaBrowserScrim.hidden = true; mediaBrowser.setAttribute('aria-hidden', 'true');
    const video = mediaPreviewStage.querySelector('video');
    if (video) video.pause();
    document.getElementById('heroBrowseMedia').focus();
  }

  function openEditor() {
    editor.classList.add('open'); hero.classList.add('editor-open'); scrim.hidden = false;
    editor.setAttribute('aria-hidden', 'false'); launchButton.setAttribute('aria-expanded', 'true');
    selectedId = activeId;
    document.querySelectorAll('[data-hero-breakpoint]').forEach(button => button.classList.toggle('active', button.dataset.heroBreakpoint === breakpoint));
    renderEditorList(); syncControls(); restartTimer();
    document.getElementById('heroEditorClose').focus();
  }

  function closeEditor() {
    editor.classList.remove('open'); hero.classList.remove('editor-open'); scrim.hidden = true;
    editor.setAttribute('aria-hidden', 'true'); launchButton.setAttribute('aria-expanded', 'false');
    breakpoint = innerWidth <= 660 ? 'mobile' : 'desktop';
    document.querySelectorAll('[data-hero-breakpoint]').forEach(button => button.classList.toggle('active', button.dataset.heroBreakpoint === breakpoint));
    renderHero(); launchButton.focus();
  }

  Object.entries(ranges).forEach(([key, input]) => input.addEventListener('input', () => updateProfile(key, input.value)));
  document.querySelectorAll('[data-hero-breakpoint]').forEach(button => button.addEventListener('click', () => {
    breakpoint = button.dataset.heroBreakpoint;
    document.querySelectorAll('[data-hero-breakpoint]').forEach(item => item.classList.toggle('active', item === button));
    renderHero(); syncControls();
  }));
  document.getElementById('heroInterval').value = String(config.interval);
  document.getElementById('heroTransition').value = config.transition;
  document.getElementById('heroInterval').addEventListener('change', event => { config.interval = Number(event.target.value); restartTimer(); save(); });
  document.getElementById('heroTransition').addEventListener('change', event => { config.transition = event.target.value; hero.dataset.transition = config.transition; save(); });
  document.getElementById('heroPrevious').addEventListener('click', () => step(-1));
  document.getElementById('heroNext').addEventListener('click', () => step(1));
  pauseButton.addEventListener('click', () => { paused = !paused; pauseButton.textContent = paused ? 'Play' : 'Pause'; pauseButton.setAttribute('aria-pressed', paused ? 'true' : 'false'); restartTimer(); });
  launchButton.addEventListener('click', openEditor);
  document.getElementById('heroEditorClose').addEventListener('click', closeEditor);
  document.getElementById('heroDone').addEventListener('click', closeEditor);
  scrim.addEventListener('click', closeEditor);
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    if (mediaBrowser.classList.contains('open')) closeMediaBrowser();
    else if (editor.classList.contains('open')) closeEditor();
  });
  document.getElementById('heroBrowseMedia').addEventListener('click', openMediaBrowser);
  document.getElementById('mediaBrowserClose').addEventListener('click', closeMediaBrowser);
  mediaBrowserScrim.addEventListener('click', closeMediaBrowser);
  mediaGrid.addEventListener('click', event => {
    const tile = event.target.closest('.media-tile');
    if (!tile) return;
    const item = mediaCatalog.find(entry => entry.id === tile.dataset.mediaId);
    if (item) selectMedia(item);
  });
  let mediaSearchTimer;
  mediaSearch.addEventListener('input', () => { clearTimeout(mediaSearchTimer); mediaSearchTimer = setTimeout(filterMedia, 120); });
  mediaFolder.addEventListener('change', filterMedia);
  document.querySelectorAll('[data-media-type]').forEach(button => button.addEventListener('click', () => {
    mediaType = button.dataset.mediaType;
    document.querySelectorAll('[data-media-type]').forEach(item => item.classList.toggle('active', item === button));
    filterMedia();
  }));
  document.getElementById('mediaLoadMore').addEventListener('click', () => { mediaVisible += 60; renderMediaGrid(); });
  mediaAddButton.addEventListener('click', () => {
    const item = mediaSelection;
    if (!item || item.type !== 'image' || config.slides.some(slide => slide.id === item.id)) return;
    const slide = { id: item.id, label: item.label, src: item.src, alt: '', enabled: true, added: Date.now(), desktop: { x: 50, y: 50, zoom: 100 }, mobile: { x: 50, y: 50, zoom: 115 } };
    config.slides.push(slide);
    selectedId = slide.id; activeId = slide.id;
    renderHero(); renderEditorList(); syncControls(); selectMedia(item); save('Photo added to this device’s draft carousel.');
    closeMediaBrowser();
  });
  document.getElementById('heroReset').addEventListener('click', () => {
    config = clone(defaults); activeId = config.slides[0].id; selectedId = activeId; breakpoint = 'desktop'; paused = false;
    localStorage.removeItem(storageKey);
    document.getElementById('heroInterval').value = String(config.interval);
    document.getElementById('heroTransition').value = config.transition;
    pauseButton.textContent = 'Pause'; pauseButton.setAttribute('aria-pressed', 'false');
    renderHero(); renderEditorList(); syncControls();
    saveState.textContent = 'Original draft setup restored.';
  });

  media.addEventListener('pointerdown', event => {
    if (!editor.classList.contains('open')) return;
    const profile = currentProfile(selectedSlide());
    dragging = true;
    dragStart = { clientX: event.clientX, clientY: event.clientY, x: profile.x, y: profile.y };
    media.classList.add('dragging'); media.setPointerCapture(event.pointerId);
  });
  media.addEventListener('pointermove', event => {
    if (!dragging || !dragStart) return;
    const bounds = media.getBoundingClientRect();
    ranges.x.value = clamp(dragStart.x - ((event.clientX - dragStart.clientX) / bounds.width) * 100, 0, 100);
    ranges.y.value = clamp(dragStart.y - ((event.clientY - dragStart.clientY) / bounds.height) * 100, 0, 100);
    updateProfile('x', ranges.x.value); updateProfile('y', ranges.y.value);
  });
  const stopDragging = event => { if (!dragging) return; dragging = false; dragStart = null; media.classList.remove('dragging'); if (media.hasPointerCapture(event.pointerId)) media.releasePointerCapture(event.pointerId); };
  media.addEventListener('pointerup', stopDragging);
  media.addEventListener('pointercancel', stopDragging);
  addEventListener('resize', () => {
    if (editor.classList.contains('open')) return;
    const nextBreakpoint = innerWidth <= 660 ? 'mobile' : 'desktop';
    if (nextBreakpoint !== breakpoint) { breakpoint = nextBreakpoint; renderHero(); }
  });
  reducedMotion.addEventListener?.('change', restartTimer);

  breakpoint = innerWidth <= 660 ? 'mobile' : 'desktop';
  renderHero();
})();
