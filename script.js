// smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href.length > 1) {
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        // Dynamically get navbar height
        const navbar = document.querySelector('.navbar.sticky-top');
        const navHeight = navbar ? navbar.offsetHeight : 0;
        const rect = el.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        window.scrollTo({
          top: rect.top + scrollTop - navHeight,
          behavior: 'smooth'
        });
      }
    }
  });
});

// year in footer
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('year').textContent = new Date().getFullYear();
});
