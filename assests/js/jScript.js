
// ── Scroll Reveal ──
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 80 * i);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

// ── Active nav link ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href').includes(section.id)) {
          link.classList.add('active-link');
        }
      });
    }
  });
});

// ── Typewriter effect for hero subtitle ──
const subtitleEl = document.getElementById('hero-subtitle');
if (subtitleEl) {
  const text = subtitleEl.dataset.text || '';
  subtitleEl.textContent = '';
  let idx = 0;
  function type() {
    if (idx < text.length) {
      subtitleEl.textContent += text[idx++];
      setTimeout(type, 45);
    }
  }
  setTimeout(type, 800);
}

// ── Hamburger Menu ──
const hamburger = document.querySelector('.hamburger');
const navMenu   = document.querySelector('.nav-links');
const overlay   = document.querySelector('.nav-overlay');

function openMenu() {
  hamburger.classList.add('open');
  navMenu.classList.add('open');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  hamburger.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  hamburger.classList.remove('open');
  navMenu.classList.remove('open');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  hamburger.setAttribute('aria-expanded', 'false');
}

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.contains('open') ? closeMenu() : openMenu();
  });
}

if (overlay) {
  overlay.addEventListener('click', closeMenu);
}

// Menü linklerine tıklayınca kapat
navLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Escape tuşu
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});
