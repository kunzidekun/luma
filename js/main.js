/* PrimeCare Medical — Interactions */
document.addEventListener('DOMContentLoaded', () => {

  /* Mobile nav */
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });
    navLinks.querySelectorAll('a').forEach(l => l.addEventListener('click', () => {
      navLinks.classList.remove('open'); toggle.setAttribute('aria-expanded','false');
    }));
  }

  /* Active nav */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  /* Sidebar active */
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('cat');
  if (cat) {
    document.querySelectorAll('.sidebar-list a').forEach(a => {
      if (a.getAttribute('href')?.includes(`cat=${cat}`)) a.classList.add('active');
    });
  }

});
