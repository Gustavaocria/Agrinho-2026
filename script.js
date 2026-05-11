
Action: file_editor create /app/site/script.js --file-text "/* ============================================
   AGRO FORTE — Lógica de UI
   - Alternar tema claro/escuro (persistido)
   - Contador animado de estatísticas
   - FAQ mostra/esconde divs
   - Formulário de contato (feedback visual)
   - Ano dinâmico no rodapé
   ============================================ */

(function () {
  'use strict';

  /* ---------- 1) THEME TOGGLE ---------- */
  const root = document.documentElement;
  const themeBtn = document.getElementById('themeToggle');
  const STORAGE_KEY = 'agroforte-theme';

  // Carregar tema salvo
  const savedTheme = localStorage.getItem(STORAGE_KEY) || 'dark';
  root.setAttribute('data-theme', savedTheme);
  updateThemeLabel(savedTheme);

  themeBtn.addEventListener('click', function () {
    const current = root.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem(STORAGE_KEY, next);
    updateThemeLabel(next);

    // Re-disparar contador ao trocar tema (efeito visual)
    if (statsInView) animateCounters();
  });

  function updateThemeLabel(theme) {
    const label = themeBtn.querySelector('.theme-label');
    if (label) label.textContent = theme === 'dark' ? 'claro' : 'escuro';
  }

  /* ---------- 2) CONTADOR ANIMADO ---------- */
  const counters = document.querySelectorAll('.stat-number');
  let statsInView = false;

  function animateCounters() {
    counters.forEach(function (el) {
      const target = parseInt(el.getAttribute('data-target'), 10);
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 1600; // ms
      const startTime = performance.now();

      function step(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.floor(eased * target);
        el.textContent = value + suffix;
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target + suffix;
        }
      }
      requestAnimationFrame(step);
    });
  }

  // Intersection Observer para iniciar quando aparecer na tela
  const statsSection = document.getElementById('stats');
  if ('IntersectionObserver' in window && statsSection) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !statsInView) {
          statsInView = true;
          animateCounters();
        }
      });
    }, { threshold: 0.35 });
    observer.observe(statsSection);
  } else {
    // Fallback
    animateCounters();
    statsInView = true;
  }

  // Botão reiniciar contagem
  const resetBtn = document.getElementById('resetCounters');
  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      counters.forEach(function (el) { el.textContent = '0'; });
      animateCounters();
    });
  }

  /* ---------- 3) FAQ — mostrar/esconder ---------- */
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const item = btn.parentElement;
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');

      // Fecha todos os outros (acordeão)
      document.querySelectorAll('.faq-item').forEach(function (other) {
        if (other !== item) {
          other.classList.remove('open');
          const otherAns = other.querySelector('.faq-answer');
          if (otherAns) otherAns.hidden = true;
        }
      });

      // Alterna o atual
      if (isOpen) {
        item.classList.remove('open');
        answer.hidden = true;
      } else {
        item.classList.add('open');
        answer.hidden = false;
      }
    });
  });

  /* ---------- 4) FORMULÁRIO DE CONTATO ---------- */
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const data = new FormData(form);
      const nome = (data.get('nome') || '').toString().trim();

      // Feedback visual (manipulação direta do DOM)
      status.textContent = '> enviando...';
      status.style.color = 'var(--text-dim)';

      setTimeout(function () {
        status.textContent = '✓ obrigado, ' + nome + '! retornaremos em breve.';
        status.style.color = 'var(--accent)';
        form.reset();
      }, 900);
    });
  }

  /* ---------- 5) ANO NO RODAPÉ ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- 6) SCROLL SUAVE EM LINKS INTERNOS ---------- */
  document.querySelectorAll('a[href^=\"#\"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

})();
"
Observation: Create successful: /app/site/script.js
