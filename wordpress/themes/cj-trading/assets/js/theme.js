(() => {
  const overlay = document.querySelector('[data-cj-menu]');
  const openers = document.querySelectorAll('[data-cj-menu-open]');
  const closers = document.querySelectorAll('[data-cj-menu-close]');

  const setMenu = (open) => {
    if (!overlay) return;
    overlay.classList.toggle('is-open', open);
    overlay.setAttribute('aria-hidden', open ? 'false' : 'true');
    document.body.classList.toggle('cj-menu-open', open);
  };

  openers.forEach((button) => button.addEventListener('click', () => setMenu(true)));
  closers.forEach((button) => button.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });

  const revealItems = document.querySelectorAll('[data-catalog-reveal]');
  const catalog = document.querySelector('[data-catalog-theme]');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealItems.forEach((item) => observer.observe(item));
  }

  let frame;
  const syncCatalogTheme = () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      if (!catalog) return;
      const rect = catalog.getBoundingClientRect();
      const trigger = window.innerHeight * 0.7;
      catalog.classList.toggle('is-dark', rect.top <= trigger && rect.bottom > trigger);
    });
  };
  window.addEventListener('scroll', syncCatalogTheme, { passive: true });
  syncCatalogTheme();
})();

