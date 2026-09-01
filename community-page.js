// Community page — foreground depth effect.
//
// The lead photo is drawn twice: the full photo behind the COMMUNITY title,
// and a transparent cutout of the foreground people above it, so they overlap
// the letters the way an iPhone lock screen does.
//
// The two layers must register exactly or the effect reads as a ghost/double
// image. The lead photo is a media-editor slot, so its box and crop can be
// restyled at runtime (the localhost editor sets object-position, a zoom
// transform, and forces its figure to position:relative). This mirrors the
// photo's live layout box and crop onto the cutout whenever either changes,
// so the cutout tracks the photo through re-crops, resizes, and edit mode.
(() => {
  const feature = document.querySelector('.community-feature');
  const lead = document.querySelector('.community-lead-image img');
  const depthWrap = document.querySelector('.community-depth');
  const depth = depthWrap && depthWrap.querySelector('img');
  if (!feature || !lead || !depthWrap || !depth) return;

  // Untransformed layout box of `el` relative to `ancestor`.
  const layoutBox = (el, ancestor) => {
    let x = 0, y = 0, node = el;
    while (node && node !== ancestor) {
      x += node.offsetLeft;
      y += node.offsetTop;
      node = node.offsetParent;
    }
    return { x, y, w: el.offsetWidth, h: el.offsetHeight };
  };

  // The cutout is traced from one specific photo. If the lead photo is swapped
  // in the media editor, hide the depth layer rather than overlay a cutout of
  // the wrong picture; regenerate it with MEDIA/IMAGES/make-subject-cutout.swift.
  const expected = depthWrap.dataset.depthFor;
  const leadFile = () => (lead.currentSrc || lead.src).split('/').pop().split('?')[0];

  let queued = false;
  const sync = () => {
    queued = false;
    if (!lead.offsetWidth || !lead.offsetHeight || (expected && leadFile() !== expected)) {
      depthWrap.style.visibility = 'hidden';
      return;
    }
    const box = layoutBox(lead, feature);
    depthWrap.style.left = box.x + 'px';
    depthWrap.style.top = box.y + 'px';
    depthWrap.style.width = box.w + 'px';
    depthWrap.style.height = box.h + 'px';
    depthWrap.style.right = 'auto';
    depthWrap.style.bottom = 'auto';
    depthWrap.style.visibility = 'visible';

    const cs = getComputedStyle(lead);
    depth.style.objectFit = cs.objectFit;
    depth.style.objectPosition = cs.objectPosition;
    depth.style.transform = cs.transform === 'none' ? '' : cs.transform;
    depth.style.transformOrigin = cs.transformOrigin;
  };
  const schedule = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(sync);
  };

  schedule();
  if (!lead.complete) lead.addEventListener('load', schedule, { once: true });
  if (!depth.complete) depth.addEventListener('load', schedule, { once: true });
  window.addEventListener('resize', schedule);
  window.addEventListener('load', schedule);

  // The media editor rewrites the photo's class, inline crop vars, and src.
  new MutationObserver(schedule).observe(lead, {
    attributes: true,
    attributeFilter: ['style', 'class', 'src']
  });
  if ('ResizeObserver' in window) {
    const ro = new ResizeObserver(schedule);
    ro.observe(lead);
    ro.observe(feature);
  }
})();
