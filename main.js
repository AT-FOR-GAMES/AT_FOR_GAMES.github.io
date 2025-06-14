// main.js

// Smooth scrolling for anchor links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Fade-in effect on page load
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = 0;
  document.body.style.transition = 'opacity 1s ease';
  setTimeout(() => {
    document.body.style.opacity = 1;
  }, 100);

  // Animate all sections on load
  document.querySelectorAll('section').forEach((section, index) => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = `opacity 0.6s ease ${(index + 1) * 0.2}s, transform 0.6s ease ${(index + 1) * 0.2}s`;
  });

  setTimeout(() => {
    document.querySelectorAll('section').forEach(section => {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    });
  }, 150);
});

// Reveal on scroll
window.addEventListener('scroll', () => {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
});