/* ─────────────────────────────────────────
   jScript.js — Aybüke Yağmur Portfolyo
   İçerik: Mobil Menü · Dark Mode · Yukarı Çık · Reveal Animasyonu
───────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. MOBİL HAMBURGER MENÜ ── */
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');
  const overlay   = document.querySelector('.nav-overlay');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      navLinks.classList.toggle('open', isOpen);
      overlay && overlay.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    overlay && overlay.addEventListener('click', closeMenu);

    navLinks.querySelectorAll('a').forEach(link =>
      link.addEventListener('click', closeMenu)
    );

    function closeMenu() {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      overlay && overlay.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }


  /* ── 2. DARK MODE ── */
  const toggleBtn = document.getElementById('darkToggle');
  const STORAGE_KEY = 'aybuke-dark-mode';

  // Kaydedilmiş tercihi uygula
  if (localStorage.getItem(STORAGE_KEY) === 'true') {
    document.body.classList.add('dark-mode');
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isDark = document.body.classList.toggle('dark-mode');
      localStorage.setItem(STORAGE_KEY, isDark);
      toggleBtn.setAttribute('aria-label', isDark ? 'Açık moda geç' : 'Koyu moda geç');
    });
  }


  /* ── 3. YUKARIYA ÇIK BUTONU ── */
  const scrollBtn = document.getElementById('scrollTopBtn');

  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollBtn.classList.add('show');
      } else {
        scrollBtn.classList.remove('show');
      }
    });

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  /* ── 4. SCROLL REVEAL ANİMASYONU ── */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(el => observer.observe(el));
  } else {
    // Eski tarayıcı fallback
    revealEls.forEach(el => el.classList.add('visible'));
  }


  /* ── 5. HERO YAZI ANİMASYONU (Typewriter) ── */
  const heroSub = document.getElementById('hero-subtitle');
  if (heroSub) {
    const text = heroSub.dataset.text || heroSub.textContent;
    heroSub.textContent = '';
    let i = 0;
    const type = () => {
      if (i < text.length) {
        heroSub.textContent += text[i++];
        setTimeout(type, 45);
      }
    };
    setTimeout(type, 700);
  }

});
