document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav');
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Scroll-triggered fade-in
  const faders = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  faders.forEach(fader => observer.observe(fader));

  // Back-to-top
  const b2t = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      b2t.classList.add('show');
    } else {
      b2t.classList.remove('show');
    }
  });
  b2t.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
