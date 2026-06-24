/**
 * PrimeCare Medical — Page Interactions
 * ==========================================
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ===== Products Page: Filter + Pagination ===== */
  const grid = document.getElementById('product-grid');
  const paginationEl = document.getElementById('pagination');
  const pageTitle = document.getElementById('product-page-title');
  const sidebarLinks = document.querySelectorAll('.sidebar-list a');

  if (grid && typeof PRODUCTS !== 'undefined') {
    const PER_PAGE = 9;
    let activeCat = 0;
    let activePage = 1;

    /* ---- Render Function ---- */
    function renderProducts() {
      /* Filter */
      const filtered = activeCat === 0
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === activeCat);

      const totalPages = Math.ceil(filtered.length / PER_PAGE) || 1;
      if (activePage > totalPages) activePage = totalPages;
      const start = (activePage - 1) * PER_PAGE;
      const pageItems = filtered.slice(start, start + PER_PAGE);

      /* Title */
      const catName = CATEGORIES.find(c => c.id === activeCat)?.name || 'Products';
      if (pageTitle) pageTitle.textContent = catName;

      /* Grid */
      if (pageItems.length === 0) {
        grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--text-light);">No products in this category yet. Coming soon.</p>';
      } else {
        grid.innerHTML = pageItems.map(p => `
          <a href="product-detail.html?id=${p.id}" class="product-card">
            <div class="product-img">
              <svg viewBox="0 0 120 120" fill="none">${p.svg}</svg>
            </div>
            <div class="product-info">
              <h3>${p.name}</h3>
            </div>
          </a>
        `).join('');
      }

      /* Pagination */
      if (totalPages <= 1) {
        paginationEl.innerHTML = '';
        return;
      }

      let html = '';
      html += `<a href="#" onclick="return goToPage(${activePage - 1})">&laquo;</a>`;
      for (let i = 1; i <= totalPages; i++) {
        html += `<a href="#" onclick="return goToPage(${i})"${i === activePage ? ' class="active"' : ''}>${i}</a>`;
      }
      html += `<a href="#" onclick="return goToPage(${activePage + 1})">&raquo;</a>`;
      paginationEl.innerHTML = html;
    }

    /* ---- Page Navigation ---- */
    window.goToPage = function(page) {
      const filtered = activeCat === 0
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === activeCat);
      const totalPages = Math.ceil(filtered.length / PER_PAGE) || 1;
      if (page < 1 || page > totalPages) return false;
      activePage = page;
      renderProducts();
      window.scrollTo({ top: document.querySelector('.page-layout').offsetTop - 90, behavior: 'smooth' });
      return false;
    };

    /* ---- Category Filter ---- */
    window.filterByCat = function(cat) {
      activeCat = cat;
      activePage = 1;
      /* Update sidebar highlight */
      sidebarLinks.forEach(a => a.classList.remove('active'));
      const idx = cat === 0 ? 0 : cat;
      sidebarLinks.forEach(a => {
        const href = a.getAttribute('href') || '';
        if (cat === 0 && href === 'products.html') a.classList.add('active');
        else if (href === `products.html?cat=${cat}`) a.classList.add('active');
      });
      renderProducts();
      return false;
    };

    /* ---- Initial render ---- */
    /* Highlight default */
    sidebarLinks.forEach(a => {
      if (a.getAttribute('href') === 'products.html') a.classList.add('active');
    });
    renderProducts();
  }
});
