/**
 * PrimeCare Medical — Page Interactions
 * ==========================================
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ===== Products Page: Filter + Pagination ===== */
  const grid = document.getElementById('product-grid');
  const paginationEl = document.getElementById('pagination');
  const pageTitle = document.getElementById('product-page-title');
  const sidebarLinks = document.querySelectorAll('.sidebar-list a[data-cat]');

  if (grid && typeof PRODUCTS !== 'undefined') {
    const PER_PAGE = 9;
    let activeCat = 0;
    let activePage = 1;

    /* Highlight sidebar by activeCat */
    function highlightSidebar() {
      sidebarLinks.forEach(a => {
        a.classList.toggle('active', parseInt(a.dataset.cat) === activeCat);
      });
    }

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
      highlightSidebar();
      renderProducts();
      return false;
    };

    /* ---- Initial render (support ?cat=X from homepage links) ---- */
    const initialCat = parseInt(new URLSearchParams(window.location.search).get('cat')) || 0;
    if (initialCat > 0) {
      activeCat = initialCat;
    }
    highlightSidebar();
    renderProducts();
  }

  /* ===== Product Detail Page ===== */
  const detailContainer = document.getElementById('product-detail');
  if (detailContainer && typeof PRODUCTS !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id')) || 1;
    const product = PRODUCTS.find(p => p.id === id);
    const category = CATEGORIES.find(c => c.id === product?.category);

    if (!product) {
      detailContainer.innerHTML = '<p style="text-align:center;padding:3rem;">Product not found.</p>';
    } else {
      detailContainer.innerHTML = `
        <div class="breadcrumb">
          <a href="index.html">Home</a> <span>/</span>
          <a href="products.html">Products</a> <span>/</span>
          <span>${product.name}</span>
        </div>

        <div class="detail-grid">
          <div class="detail-img">
            <svg viewBox="0 0 280 280" fill="none">${product.svg}</svg>
          </div>
          <div class="detail-right">
            <h1>${product.name}</h1>
            <div class="detail-meta">
              <span><strong>Category:</strong> ${category ? category.name : ''}</span>
              <span><strong>Warranty:</strong> 12 Months</span>
            </div>
            <p class="detail-desc">
              The ${product.name} is a high-quality medical device designed for professional healthcare use.
              It meets international standards and is backed by PrimeCare's comprehensive service and support.
            </p>

            <h3 style="font-size:0.9375rem;margin-bottom:0.5rem;">Key Features</h3>
            <ul style="list-style:none;margin-bottom:1.5rem;">
              <li style="padding:0.25rem 0;padding-left:1.25rem;position:relative;color:var(--text-light);font-size:0.875rem;">✓ Precision engineered for reliable performance</li>
              <li style="padding:0.25rem 0;padding-left:1.25rem;position:relative;color:var(--text-light);font-size:0.875rem;">✓ User-friendly interface with digital display</li>
              <li style="padding:0.25rem 0;padding-left:1.25rem;position:relative;color:var(--text-light);font-size:0.875rem;">✓ Complies with international medical standards</li>
              <li style="padding:0.25rem 0;padding-left:1.25rem;position:relative;color:var(--text-light);font-size:0.875rem;">✓ Low maintenance and energy efficient</li>
              <li style="padding:0.25rem 0;padding-left:1.25rem;position:relative;color:var(--text-light);font-size:0.875rem;">✓ CE marked and ISO 13485 certified</li>
            </ul>

            <a href="contact.html" class="btn btn-primary">Inquire Now</a>
            <a href="#" class="btn btn-outline" style="margin-left:0.5rem;">Download Spec Sheet</a>
          </div>
        </div>
      `;
    }
  }
});
