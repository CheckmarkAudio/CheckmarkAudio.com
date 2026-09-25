(() => {
  const CLIP_SECONDS = 4;
  const FADE_MS = 0; // hard cut, no crossfade
  const START_OFFSETS = [2, 4, 3, 1]; // soft in-points per slide (seconds)

  const root = document.querySelector("[data-live-carousel]");
  if (!root) return;

  const slides = [...root.querySelectorAll(".live-cover__slide")];
  const dots = [...root.querySelectorAll(".live-cover__dots button")];
  const caption = root.querySelector("[data-slide-caption]");
  const prevBtn = root.querySelector("[data-carousel-prev]");
  const nextBtn = root.querySelector("[data-carousel-next]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let index = 0;
  let timer = null;
  let advancing = false;

  function labelFor(i) {
    return slides[i]?.dataset.label || `Clip ${i + 1}`;
  }

  function setActive(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach((slide, n) => {
      const on = n === index;
      slide.classList.toggle("is-active", on);
      const video = slide.querySelector("video");
      if (!video) return;
      if (on) {
        const start = START_OFFSETS[n] ?? 0;
        try {
          if (Number.isFinite(video.duration) && video.duration > start + 1) {
            video.currentTime = start;
          }
        } catch (_) { /* ignore seek until metadata */ }
        video.muted = true;
        video.playsInline = true;
        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => {});
        }
      } else {
        video.pause();
      }
    });
    dots.forEach((dot, n) => {
      dot.setAttribute("aria-current", n === index ? "true" : "false");
    });
    if (caption) caption.textContent = labelFor(index);
  }

  function clearTimer() {
    if (timer) {
      window.clearTimeout(timer);
      timer = null;
    }
  }

  function scheduleNext() {
    clearTimer();
    if (reduceMotion) return;
    timer = window.setTimeout(() => go(index + 1), CLIP_SECONDS * 1000);
  }

  function go(i) {
    if (advancing) return;
    advancing = true;
    clearTimer();
    setActive(i);
    window.setTimeout(() => {
      advancing = false;
      scheduleNext();
    }, FADE_MS);
  }

  slides.forEach((slide, n) => {
    const video = slide.querySelector("video");
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    video.playsInline = true;
    video.preload = n === 0 ? "auto" : "metadata";
    video.addEventListener("loadedmetadata", () => {
      if (n !== index) return;
      const start = START_OFFSETS[n] ?? 0;
      if (video.duration > start + 1) video.currentTime = start;
    });
  });

  dots.forEach((dot, n) => {
    dot.addEventListener("click", () => go(n));
  });
  prevBtn?.addEventListener("click", () => go(index - 1));
  nextBtn?.addEventListener("click", () => go(index + 1));

  document.addEventListener("visibilitychange", () => {
    const video = slides[index]?.querySelector("video");
    if (document.hidden) {
      clearTimer();
      video?.pause();
    } else {
      setActive(index);
      scheduleNext();
    }
  });

  setActive(0);
  if (reduceMotion) {
    const video = slides[0]?.querySelector("video");
    video?.pause();
  } else {
    scheduleNext();
  }
})();
