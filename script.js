// script.js — menu, theme, loader, mobile links
document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const menuBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-links');
  const themeToggle = document.getElementById('theme-toggle');

  // hide loader after load (or after small delay)
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (loader) loader.style.display = 'none';
    }, 600);
  });

  // mobile menu open/close
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
  }

  // close mobile menu when a mobile link is clicked
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });

  // theme toggle (light/dark)
  themeToggle.addEventListener('click', () => {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', next);
    // optional: persist setting
    try { localStorage.setItem('theme', next); } catch(e) {}
  });

  // restore theme if saved
  try {
    const saved = localStorage.getItem('theme');
    if (saved) document.documentElement.setAttribute('data-theme', saved);
  } catch(e){}

  // smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
