/**
 * PrimeCare Medical — Page Interactions
 * ==========================================
 * Handles sidebar active state and other page-specific behaviors.
 * Navigation and footer are managed by components.js
 */

document.addEventListener('DOMContentLoaded', () => {

  /* Sidebar active state (products page) */
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('cat');
  if (cat) {
    document.querySelectorAll('.sidebar-list a').forEach(a => {
      if (a.getAttribute('href')?.includes(`cat=${cat}`)) a.classList.add('active');
    });
  }

});
