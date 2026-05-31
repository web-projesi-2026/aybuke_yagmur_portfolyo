/* ─────────────────────────────────────────
   jScript.js — Aybüke Yağmur Portfolyo
   İçerik: Oturum Kontrolü · Mobil Menü · Dark Mode · Yukarı Çık · Reveal
───────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', function () {

  /* ── 1. OTURUM KONTROLÜ ── */
  var SESSION_KEY = 'aybuke-session';

  function getSession() {
    try { return JSON.parse(localStorage.getItem(SESSION_KEY)); } catch(e) { return null; }
  }

  /* Hangi klasörde olduğumuzu bul */
  var inPages = window.location.pathname.indexOf('/pages/') !== -1;
  var authPage = window.location.pathname.indexOf('auth.html') !== -1;

  if (!authPage) {
    var session = getSession();
    if (!session) {
      /* Oturum yoksa giriş sayfasına yönlendir */
      window.location.replace(inPages ? '../auth.html' : 'auth.html');
      return;
    }

    /* Nav'da kullanıcı adını göster */
    var navUser = document.getElementById('navUser');
    if (navUser) {
      navUser.textContent = '✦ ' + session.name.split(' ')[0];
    }

    /* Çıkış butonu */
    var logoutBtn = document.getElementById('navLogout');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', function () {
        localStorage.removeItem(SESSION_KEY);
        window.location.replace(inPages ? '../auth.html' : 'auth.html');
      });
    }
  }

  /* ── 2. MOBİL HAMBURGER MENÜ ── */
  var hamburger = document.querySelector('.hamburger');
  var navLinks  = document.querySelector('.nav-links');
  var overlay   = document.querySelector('.nav-overlay');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      var isOpen = hamburger.classList.toggle('open');
      navLinks.classList.toggle('open', isOpen);
      overlay && overlay.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    overlay && overlay.addEventListener('click', closeMenu);
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    function closeMenu() {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      overlay && overlay.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  /* ── 3. DARK MODE ── */
  var darkToggle = document.getElementById('darkToggle');
  var DARK_KEY   = 'aybuke-dark-mode';

  if (localStorage.getItem(DARK_KEY) === 'true') {
    document.body.classList.add('dark-mode');
  }

  if (darkToggle) {
    darkToggle.addEventListener('click', function () {
      var isDark = document.body.classList.toggle('dark-mode');
      localStorage.setItem(DARK_KEY, isDark);
    });
  }

  /* ── 4. YUKARIYA ÇIK BUTONU ── */
  var scrollBtn = document.getElementById('scrollTopBtn');

  if (scrollBtn) {
    window.addEventListener('scroll', function () {
      scrollBtn.classList.toggle('show', window.scrollY > 300);
    });

    scrollBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── 5. SCROLL REVEAL ── */
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ── 6. HERO TYPEWRITER ── */
  var heroSub = document.getElementById('hero-subtitle');
  if (heroSub) {
    var text = heroSub.dataset.text || heroSub.textContent;
    heroSub.textContent = '';
    var i = 0;
    var type = function () {
      if (i < text.length) {
        heroSub.textContent += text[i++];
        setTimeout(type, 45);
      }
    };
    setTimeout(type, 500);
  }

});
