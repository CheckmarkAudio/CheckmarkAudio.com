(() => {
  const rail = document.querySelector('.equal-team-grid');
  const people = [...document.querySelectorAll('.equal-person')];
  const controls = document.querySelector('.team-mobile-controls');
  const status = document.getElementById('teamCarouselStatus');
  const phone = window.matchMedia('(max-width: 620px)');

  if (!rail || !people.length || !controls || !status) return;

  let activeIndex = 0;
  let scrollTimer;

  const update = index => {
    activeIndex = Math.max(0, Math.min(people.length - 1, index));
    status.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(people.length).padStart(2, '0')}`;
    people.forEach((person, personIndex) => {
      person.setAttribute('aria-current', personIndex === activeIndex ? 'true' : 'false');
    });
  };

  const nearestIndex = () => {
    const railLeft = rail.getBoundingClientRect().left;
    return people.reduce((closest, person, index) => {
      const distance = Math.abs(person.getBoundingClientRect().left - railLeft);
      return distance < closest.distance ? { index, distance } : closest;
    }, { index: 0, distance: Infinity }).index;
  };

  const show = index => {
    const nextIndex = (index + people.length) % people.length;
    rail.scrollTo({
      left: people[nextIndex].offsetLeft - people[0].offsetLeft,
      behavior: 'smooth'
    });
    update(nextIndex);
  };

  controls.addEventListener('click', event => {
    const button = event.target.closest('[data-team-direction]');
    if (!button) return;
    show(activeIndex + (button.dataset.teamDirection === 'next' ? 1 : -1));
  });

  rail.addEventListener('scroll', () => {
    window.clearTimeout(scrollTimer);
    scrollTimer = window.setTimeout(() => update(nearestIndex()), 90);
  }, { passive: true });

  phone.addEventListener?.('change', () => {
    rail.scrollTo({ left: 0, behavior: 'auto' });
    update(0);
  });

  update(0);
})();
