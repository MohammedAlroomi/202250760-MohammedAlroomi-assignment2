/**
 * script.js – Mohammed Alroomi Portfolio
 * SWE 363 | KFUPM | 2026
 * Assignment 2 – Interactive Features
 *
 * Features:
 *  1.  Time-based greeting
 *  2.  Personalised greeting via name input (saved in localStorage)
 *  3.  Dark / Light theme toggle (saved in localStorage)
 *  4.  Tab-based section switching
 *  5.  Project filter by category
 *  6.  Navbar highlight on active tab
 *  7.  Hamburger menu for mobile
 *  8.  Scroll-triggered fade-in animations
 *  9.  Contact form validation with character counter
 *  10. Console branding
 */

/* ============================================================
   1. TIME-BASED GREETING
   ============================================================ */
function setGreeting(name) {
  const greetingEl = document.getElementById('greeting');
  if (!greetingEl) return;

  const hour = new Date().getHours();
  let timeGreeting;

  if (hour >= 5 && hour < 12) {
    timeGreeting = '☀️ Good morning';
  } else if (hour >= 12 && hour < 17) {
    timeGreeting = '🌤️ Good afternoon';
  } else if (hour >= 17 && hour < 21) {
    timeGreeting = '🌆 Good evening';
  } else {
    timeGreeting = '🌙 Good night';
  }

  // Append visitor's name if provided
  greetingEl.textContent = name
    ? `${timeGreeting}, ${name}!`
    : timeGreeting;
}

/* ============================================================
   2. PERSONALISED GREETING INPUT
      - Updates greeting in real time as the user types
      - Saves the name in localStorage so it persists on return visits
   ============================================================ */
function initPersonalisedGreeting() {
  const input      = document.getElementById('visitorName');
  const clearBtn   = document.getElementById('greetingClear');
  if (!input) return;

  // Load saved name on page load
  const savedName = localStorage.getItem('visitorName') || '';
  if (savedName) {
    input.value = savedName;
    setGreeting(savedName);
  }

  // Update greeting and save on every keystroke
  input.addEventListener('input', () => {
    const name = input.value.trim();
    setGreeting(name);
    if (name) {
      localStorage.setItem('visitorName', name);
    } else {
      localStorage.removeItem('visitorName');
    }
  });

  // Clear button — removes saved name and resets greeting
  clearBtn?.addEventListener('click', () => {
    input.value = '';
    setGreeting('');
    localStorage.removeItem('visitorName');
    input.focus();
  });
}

/* ============================================================
   3. DARK / LIGHT THEME TOGGLE
      - Saves preference to localStorage (persists across sessions)
   ============================================================ */
function initTheme() {
  const toggle    = document.getElementById('themeToggle');
  const themeIcon = toggle?.querySelector('.theme-icon');
  const themeLabel = toggle?.querySelector('.theme-label');

  // Apply saved preference, default to dark
  const saved = localStorage.getItem('theme') || 'dark';
  applyTheme(saved);

  toggle?.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-theme');
    applyTheme(isDark ? 'light' : 'dark');
  });

  function applyTheme(theme) {
    document.body.classList.remove('dark-theme', 'light-theme');
    document.body.classList.add(theme + '-theme');
    localStorage.setItem('theme', theme);
    if (themeIcon)  themeIcon.textContent  = theme === 'dark' ? '☀️' : '🌙';
    if (themeLabel) themeLabel.textContent  = theme === 'dark' ? 'Light' : 'Dark';
  }
}

/* ============================================================
   4. TAB-BASED SECTION SWITCHING
      - Clicking a tab shows only that section, hides all others
      - Navbar links are wired to the same tab system
      - Smooth fade-in animation on tab switch (handled in CSS)
   ============================================================ */
function initTabs() {
  const tabBtns    = document.querySelectorAll('.tab-btn');
  const tabSections = document.querySelectorAll('.tab-section');
  const navTabLinks = document.querySelectorAll('.nav-tab-link');

  if (!tabBtns.length) return;

  // Core function: activate a tab by its name
  function activateTab(tabName) {
    // Update tab button states
    tabBtns.forEach(btn => {
      const isActive = btn.dataset.tab === tabName;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive);
    });

    // Show the matching section, hide all others
    tabSections.forEach(section => {
      if (section.id === `tab-${tabName}`) {
        section.removeAttribute('hidden');
      } else {
        section.setAttribute('hidden', '');
      }
    });

    // Highlight matching navbar link
    navTabLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.tab === tabName);
    });

    // Scroll to just below the tab bar after switching
    const tabNav = document.getElementById('tabNavWrapper');
    if (tabNav) {
      const offset = tabNav.getBoundingClientRect().bottom + window.scrollY;
      window.scrollTo({ top: offset - 10, behavior: 'smooth' });
    }
  }

  // Wire tab buttons
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => activateTab(btn.dataset.tab));
  });

  // Wire navbar links
  navTabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      activateTab(link.dataset.tab);
      // Close mobile menu if open
      document.querySelector('.nav-links')?.classList.remove('open');
    });
  });
}

/* ============================================================
   5. PROJECT FILTER BY CATEGORY
      - Clicking All / Data Science / AI / Database
        shows only matching project cards
      - Shows an empty-state message if no cards match
   ============================================================ */
function initProjectFilter() {
  const filterBtns  = document.querySelectorAll('.filter-btn');
  const cards       = document.querySelectorAll('.project-card');
  const emptyState  = document.getElementById('emptyState');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Update active button state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Show / hide cards based on category
      let visibleCount = 0;
      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('hidden', !match);
        if (match) visibleCount++;
      });

      // Show empty state if no cards are visible
      if (emptyState) {
        emptyState.hidden = visibleCount > 0;
      }
    });
  });
}

/* ============================================================
   6. NAVBAR SCROLL SHADOW
   ============================================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 60
      ? '0 2px 24px rgba(0,0,0,0.3)'
      : 'none';
  }, { passive: true });
}

/* ============================================================
   7. HAMBURGER MOBILE MENU
   ============================================================ */
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

/* ============================================================
   8. SCROLL FADE-IN ANIMATIONS
   ============================================================ */
function initScrollAnimations() {
  const targets = document.querySelectorAll(
    '.project-card, .about-grid, .contact-wrapper, .section-title, .exp-card, .achievement-badge'
  );

  targets.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach(el => observer.observe(el));
}

/* ============================================================
   9. CONTACT FORM VALIDATION WITH CHARACTER COUNTER
      - Real-time character count on message field
      - Inline error messages on blur and on submit
      - Animated success message, auto-hides after 5 seconds
   ============================================================ */
function initContactForm() {
  const form       = document.getElementById('contactForm');
  const nameInput  = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const msgInput   = document.getElementById('message');
  const nameError  = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const msgError   = document.getElementById('messageError');
  const charCount  = document.getElementById('charCount');
  const successBox = document.getElementById('formSuccess');

  if (!form) return;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Live character counter for message field
  msgInput?.addEventListener('input', () => {
    const len = msgInput.value.trim().length;
    if (charCount) {
      charCount.textContent = `${len} character${len !== 1 ? 's' : ''}${len < 10 ? ' (10 minimum)' : ' ✓'}`;
      charCount.style.color = len >= 10 ? 'var(--accent)' : 'var(--text-secondary)';
    }
  });

  // Validate all fields, return true if all pass
  function validate() {
    let valid = true;

    // Name check
    if (!nameInput.value.trim()) {
      nameError.textContent = '⚠️ Please enter your name.';
      valid = false;
    } else {
      nameError.textContent = '';
    }

    // Email check
    if (!emailInput.value.trim()) {
      emailError.textContent = '⚠️ Please enter your email address.';
      valid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
      emailError.textContent = '⚠️ Please enter a valid email address.';
      valid = false;
    } else {
      emailError.textContent = '';
    }

    // Message check
    if (!msgInput.value.trim()) {
      msgError.textContent = '⚠️ Please enter a message.';
      valid = false;
    } else if (msgInput.value.trim().length < 10) {
      msgError.textContent = '⚠️ Message must be at least 10 characters.';
      valid = false;
    } else {
      msgError.textContent = '';
    }

    return valid;
  }

  // Submit handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validate()) {
      successBox.classList.add('visible');
      form.reset();
      if (charCount) charCount.textContent = '0 characters';
      setTimeout(() => successBox.classList.remove('visible'), 5000);
    }
  });

  // Live inline validation on blur (when user leaves a field)
  [nameInput, emailInput, msgInput].forEach(input => {
    input?.addEventListener('blur', validate);
  });
}

/* ============================================================
   INIT – Run all features when DOM is ready
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  setGreeting();               // Time-based greeting (no name yet)
  initPersonalisedGreeting();  // Name input + localStorage
  initTheme();                 // Theme toggle + localStorage
  initTabs();                  // Tab section switching
  initProjectFilter();         // Project category filter
  initNavbar();                // Navbar scroll shadow
  initHamburger();             // Mobile menu
  initScrollAnimations();      // Fade-in on scroll
  initContactForm();           // Form validation + char counter

  console.log('%c Mohammed Alroomi | Portfolio', 'color: #00d4aa; font-size: 14px; font-weight: bold;');
  console.log('%c Assignment 2 – Interactive Features | SWE 363 | KFUPM', 'color: #9090a0;');
});
