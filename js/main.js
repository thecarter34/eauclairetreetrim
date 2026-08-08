/* =========================================
   EAU CLAIRE TREE REMOVALS — MAIN JS
   ========================================= */

(function () {
  'use strict';

  // ─── HEADER SCROLL EFFECT ───────────────────────────────
  const header = document.getElementById('site-header');
  if (header) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          header.classList.toggle('scrolled', window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ─── MOBILE DRAWER ──────────────────────────────────────
  const drawer       = document.getElementById('mobile-drawer');
  const overlay      = document.getElementById('drawer-overlay');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const closeBtn     = document.getElementById('drawer-close');

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add('is-open');
    overlay.classList.add('is-visible');
    hamburgerBtn.classList.add('is-open');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    // Focus the close button for accessibility
    closeBtn && closeBtn.focus();
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    hamburgerBtn.classList.remove('is-open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function toggleDrawer() {
    if (!drawer) return;
    drawer.classList.contains('is-open') ? closeDrawer() : openDrawer();
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', toggleDrawer);
  if (closeBtn)     closeBtn.addEventListener('click', closeDrawer);
  if (overlay)      overlay.addEventListener('click', closeDrawer);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('is-open')) {
      closeDrawer();
      hamburgerBtn.focus();
    }
  });

  // Close drawer when a nav link is clicked (mobile nav links close the drawer)
  const drawerLinks = drawer ? drawer.querySelectorAll('.drawer-link') : [];
  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // ─── ACTIVE NAV LINK ────────────────────────────────────
  // Highlight the current page in the desktop nav
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // ─── SMOOTH SCROLL (for any anchor links) ───────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
