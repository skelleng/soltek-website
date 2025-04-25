
function initNav() {
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav');
  btn.addEventListener('click', () => {
    nav.classList.toggle('open');
    btn.classList.toggle('active');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Inject navbar
  fetch('assets/partials/navbar.html').then(res => res.text()).then(html => {
    const page = document.body.dataset.page;
    const filled = html
      .replace('{about_active}', page==='about'?'active':'')
      .replace('{services_active}', page==='services'?'active':'')
      .replace('{contact_active}', page==='contact'?'active':'')
      .replace('{investors_active}', page==='investors'?'active':'');
    document.getElementById('site-nav').innerHTML = filled;
    initNav();
  });

  // Inject footer
  fetch('assets/partials/footer.html').then(res => res.text()).then(html => {
    document.getElementById('site-footer').innerHTML = html;
  });

  // Back to top
  const backToTop = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) backToTop.classList.add('show');
    else backToTop.classList.remove('show');
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
