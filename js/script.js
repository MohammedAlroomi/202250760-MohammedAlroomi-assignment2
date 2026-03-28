/**
 * script.js – Mohammed Alroomi Portfolio
 * SWE 363 | KFUPM | 2026
 *
 * Features:
 *  1. Time-based greeting
 *  2. Dark / Light theme toggle (persisted in sessionStorage)
 *  3. Smooth scroll for nav links
 *  4. Hamburger menu for mobile
 *  5. Navbar shrink on scroll
 *  6. Scroll-triggered fade-in animations
 *  7. Contact form validation with success feedback
 */

/* ============================================================
   1. TIME-BASED GREETING
   ============================================================ */
function setGreeting() {
  const greetingEl = document.getElementById('greeting');
  if (!greetingEl) return;

  const hour = new Date().getHours();
  let greeting;

  if (hour >= 5 && hour < 12) {
    greeting = '☀️ Good morning';
  } else if (hour >= 12 && hour < 17) {
    greeting = '🌤️ Good afternoon';
  } else if (hour >= 17 && hour < 21) {
    greeting = '🌆 Good evening';
  } else {
    greeting = '🌙 Good night';
  }

  greetingEl.textContent = greeting;
}

/* ============================================================
   2. DARK / LIGHT THEME TOGGLE
   ============================================================ */
function initTheme() {
  const toggle    = document.getElementById('themeToggle');
  const themeIcon = toggle?.querySelector('.theme-icon');

  // Apply saved preference
  const saved = sessionStorage.getItem('theme') || 'dark';
  applyTheme(saved);

  toggle?.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-theme');
    applyTheme(isDark ? 'light' : 'dark');
  });

  function applyTheme(theme) {
    document.body.classList.remove('dark-theme', 'light-theme');
    document.body.classList.add(theme + '-theme');
    sessionStorage.setItem('theme', theme);
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }
}

/* ============================================================
   3. NAVBAR SCROLL BEHAVIOUR
   ============================================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.style.boxShadow = '0 2px 24px rgba(0,0,0,0.3)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  }, { passive: true });
}

/* ============================================================
   4. HAMBURGER MOBILE MENU
   ============================================================ */
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

/* ============================================================
   5. SMOOTH SCROLLING (fallback for older browsers)
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* ============================================================
   6. SCROLL FADE-IN ANIMATION
   ============================================================ */
function initScrollAnimations() {
  // Add fade-in class to animatable elements
  const targets = document.querySelectorAll(
    '.project-card, .skill-category, .about-grid, .contact-wrapper, .section-title'
  );

  targets.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach(el => observer.observe(el));
}

/* ============================================================
   7. CONTACT FORM VALIDATION
   ============================================================ */
function initContactForm() {
  const form        = document.getElementById('contactForm');
  const nameInput   = document.getElementById('name');
  const emailInput  = document.getElementById('email');
  const msgInput    = document.getElementById('message');
  const nameError   = document.getElementById('nameError');
  const emailError  = document.getElementById('emailError');
  const msgError    = document.getElementById('messageError');
  const successBox  = document.getElementById('formSuccess');

  if (!form) return;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validate() {
    let valid = true;

    // Name
    if (!nameInput.value.trim()) {
      nameError.textContent = 'Please enter your name.';
      valid = false;
    } else {
      nameError.textContent = '';
    }

    // Email
    if (!emailInput.value.trim()) {
      emailError.textContent = 'Please enter your email address.';
      valid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
      emailError.textContent = 'Please enter a valid email address.';
      valid = false;
    } else {
      emailError.textContent = '';
    }

    // Message
    if (!msgInput.value.trim()) {
      msgError.textContent = 'Please enter a message.';
      valid = false;
    } else if (msgInput.value.trim().length < 10) {
      msgError.textContent = 'Message must be at least 10 characters.';
      valid = false;
    } else {
      msgError.textContent = '';
    }

    return valid;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validate()) {
      successBox.classList.add('visible');
      form.reset();

      // Hide success message after 5 seconds
      setTimeout(() => successBox.classList.remove('visible'), 5000);
    }
  });

  // Live inline validation feedback
  [nameInput, emailInput, msgInput].forEach(input => {
    input.addEventListener('blur', validate);
  });
}

/* ============================================================
   INIT – Run everything when DOM is ready
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  setGreeting();
  initTheme();
  initNavbar();
  initHamburger();
  initSmoothScroll();
  initScrollAnimations();
  initContactForm();

  console.log('%c Mohammed Alroomi | Portfolio', 'color: #00d4aa; font-size: 14px; font-weight: bold;');
  console.log('%c Built with HTML, CSS & JavaScript – SWE 363 | KFUPM', 'color: #9090a0;');
});
