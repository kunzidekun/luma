/**
 * PrimeCare Medical — Page Interactions
 * ==========================================
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ===== Products Page: Filter + Pagination ===== */
  const grid = document.getElementById('product-grid');
  const paginationEl = document.getElementById('pagination');
  const pageTitle = document.getElementById('product-page-title');

  if (grid && typeof PRODUCTS !== 'undefined') {
    const PER_PAGE = 9;
    const params = new URLSearchParams(window.location.search);
    const activeCat = parseInt(params.get('cat')) || 0;
    const activePage = parseInt(params.get('page')) || 1;

    /* Highlight sidebar */
    document.querySelectorAll('.sidebar-list a').forEach(a => {
      const href = a.getAttribute('href') || '';
      if (activeCat === 0 && href === 'products.html') a.classList.add('active');
      else if (href.includes(`cat=${activeCat}`)) a.classList.add('active');
    });

    /* Filter products by category */
    const filtered = activeCat === 0
      ? PRODUCTS
      : PRODUCTS.filter(p => p.category === activeCat);

    const totalPages = Math.ceil(filtered.length / PER_PAGE) || 1;
    const page = Math.min(activePage, totalPages);
    const start = (page - 1) * PER_PAGE;
    const pageItems = filtered.slice(start, start + PER_PAGE);

    /* Update title */
    const catName = CATEGORIES.find(c => c.id === activeCat)?.name || 'Products';
    if (pageTitle) pageTitle.textContent = catName;

    /* Render product cards */
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

    /* Render pagination */
    if (totalPages <= 1) {
      paginationEl.innerHTML = '';
    } else {
      const baseUrl = `products.html${activeCat ? `?cat=${activeCat}` : '?'}`;
      const sep = baseUrl.includes('?') && !baseUrl.endsWith('?') ? '&' : '';
      let html = '';

      // Prev
      html += `<a href="${baseUrl}${sep}page=${Math.max(1, page - 1)}">&laquo;</a>`;

      // Page numbers
      for (let i = 1; i <= totalPages; i++) {
        const active = i === page ? ' class="active"' : '';
        html += `<a href="${baseUrl}${sep}page=${i}"${active}>${i}</a>`;
      }

      // Next
      html += `<a href="${baseUrl}${sep}page=${Math.min(totalPages, page + 1)}">&raquo;</a>`;

      paginationEl.innerHTML = html;
    }
  }
});
