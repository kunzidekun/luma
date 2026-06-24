/**
 * PrimeCare Medical — Shared Components
 * ==========================================
 *
 * Navigation, topbar, and footer are defined HERE only.
 * Change them once, every page updates automatically.
 *
 * HOW TO ADD A NEW PAGE:
 *   1. Copy template.html as my-new-page.html
 *   2. Change the <title> and <main> content
 *   3. Commit and push
 */

/* ===== Shared Data ===== */
const SITE = {
  name: 'PrimeCare Medical',
  tagline: 'Professional Medical Equipment Supplier',
  phone: '+86 20 8888 8888',
  email: 'info@primecare.com',
  year: '2026'
};

const NAV_ITEMS = [
  { label: 'Home',     href: 'index.html' },
  { label: 'Products', href: 'products.html' },
  { label: 'About Us', href: 'about.html' },
  { label: 'Service',  href: 'service.html' },
  { label: 'News',     href: 'news.html' },
  { label: 'Contact',  href: 'contact.html' }
];

/* ===== Render Functions ===== */

function renderTopbar() {
  return `
    <div class="topbar">
      <div class="container">
        <span>📧 ${SITE.email} | 📞 ${SITE.phone}</span>
        <span>${SITE.tagline}</span>
      </div>
    </div>`;
}

function renderNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  const links = NAV_ITEMS.map(i =>
    `<li><a href="${i.href}"${i.href === current ? ' class="active"' : ''}>${i.label}</a></li>`
  ).join('');

  return `
    <nav class="nav">
      <div class="container">
        <a href="index.html" class="nav-logo">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect width="36" height="36" rx="8" fill="#2563eb"/><path d="M12 18h12M18 12v12" stroke="white" stroke-width="3.5" stroke-linecap="round"/></svg>
          <span class="nav-logo-text">Prime<span>Care</span></span>
        </a>
        <button class="nav-toggle" aria-label="Menu" onclick="document.querySelector('.nav-links').classList.toggle('open');this.setAttribute('aria-expanded',document.querySelector('.nav-links').classList.contains('open'))">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1e293b" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
        <ul class="nav-links">${links}</ul>
      </div>
    </nav>`;
}

function renderBanner(title, subtitle) {
  return `
    <section class="banner">
      <div class="container">
        <h1>${title}</h1>
        ${subtitle ? `<p>${subtitle}</p>` : ''}
      </div>
    </section>`;
}

function renderFooter() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <h3>${SITE.name}</h3>
            <p>Professional medical equipment supplier dedicated to providing high-quality healthcare solutions worldwide. ISO 13485 certified.</p>
          </div>
          <div class="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="products.html">Products</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="service.html">Service</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Products</h4>
            <ul>
              <li><a href="products.html?cat=1">Clinical Analyzer</a></li>
              <li><a href="products.html?cat=3">OR Equipment</a></li>
              <li><a href="products.html?cat=6">X-Ray Machine</a></li>
              <li><a href="products.html?cat=5">Ultrasound</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>📧 ${SITE.email}</li>
              <li>📞 ${SITE.phone}</li>
              <li>📍 Guangzhou, China</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>&copy; ${SITE.year} ${SITE.name}. All rights reserved.</span>
          <span>${SITE.tagline}</span>
        </div>
      </div>
    </footer>`;
}

/* ===== Init ===== */
/* Injects topbar, nav, and footer into placeholder elements.
   Each page must have: <div id="topbar-placeholder"></div>
                         <nav id="nav-placeholder"></nav>
                         <footer id="footer-placeholder"></footer> */
document.addEventListener('DOMContentLoaded', () => {
  const tp = document.getElementById('topbar-placeholder');
  const np = document.getElementById('nav-placeholder');
  const fp = document.getElementById('footer-placeholder');
  if (tp) tp.outerHTML = renderTopbar();
  if (np) np.outerHTML = renderNav();
  if (fp) fp.outerHTML = renderFooter();
});
