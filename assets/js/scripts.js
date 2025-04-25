
function initNav(){const btn=document.querySelector('.nav-toggle'),nav=document.querySelector('nav');btn.addEventListener('click',()=>{nav.classList.toggle('open');btn.classList.toggle('active');});}
document.addEventListener('DOMContentLoaded',()=>{
  fetch('assets/partials/navbar.html').then(r=>r.text()).then(html=>{
    const page=document.body.dataset.page;
    const filled=html.replace('{about_active}',page==='about'?'active':'')
      .replace('{services_active}',page==='services'?'active':'')
      .replace('{contact_active}',page==='contact'?'active':'')
      .replace('{investors_active}',page==='investors'?'active':'');
    document.getElementById('site-nav').innerHTML=filled;initNav();
  });
  fetch('assets/partials/footer.html').then(r=>r.text()).then(html=>{
    document.getElementById('site-footer').innerHTML=html;
  });
  const b2t=document.querySelector('.back-to-top');
  window.addEventListener('scroll',()=>{window.scrollY>300?b2t.classList.add('show'):b2t.classList.remove('show');});
  b2t.addEventListener('click',()=>{window.scrollTo({top:0,behavior:'smooth'});});
});
