// smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href.length > 1) {
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        window.scrollTo({
          top: el.offsetTop - 70,
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
