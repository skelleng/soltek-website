
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav');
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Back to top
  const b2t = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    b2t.style.opacity = window.scrollY > 300 ? '1' : '0';
    b2t.style.pointerEvents = window.scrollY > 300 ? 'auto' : 'none';
  });
  b2t.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
