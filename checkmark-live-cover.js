(() => {
  const CLIP_SECONDS = 4;
  const root = document.querySelector("[data-live-carousel]");
  if (!root) return;

  const slides = [...root.querySelectorAll(".live-cover__slide")];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let index = 0;
  let timer = null;

  function clearTimer() {
    if (timer) {
      window.clearTimeout(timer);
      timer = null;
    }
  }

  function setActive(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach((slide, n) => {
      const on = n === index;
      slide.classList.toggle("is-active", on);
      const video = slide.querySelector("video");
      if (!video) return;
      if (on) {
        try {
          video.currentTime = 0;
        } catch (_) {}
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
  }

  function scheduleNext() {
    clearTimer();
    if (reduceMotion) return;
    timer = window.setTimeout(() => {
      setActive(index + 1);
      scheduleNext();
    }, CLIP_SECONDS * 1000);
  }

  slides.forEach((slide, n) => {
    const video = slide.querySelector("video");
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    video.playsInline = true;
    video.preload = n === 0 ? "auto" : "metadata";
  });

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
    slides[0]?.querySelector("video")?.pause();
  } else {
    scheduleNext();
  }
})();
