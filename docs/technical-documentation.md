# Technical Documentation

**Project:** Personal Portfolio Web Application – Assignment 2
**Student:** Mohammed Alroomi (202250760)
**Course:** SWE 363 – Web Development | KFUPM | 2026

---

## Overview

A static single-page portfolio application built with vanilla HTML, CSS, and JavaScript. Assignment 2 extends Assignment 1 by adding interactive features, data handling, and improved user feedback. No frameworks, build tools, or dependencies are required.

---

## File Structure

```
assignment-2/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── README.md
└── .gitignore
```

---

## HTML Structure

| Section | Description |
|---------|-------------|
| `<nav>` | Fixed navbar with logo, nav links, and theme toggle |
| `#hero` | Landing area with personalised greeting, name input, CTA buttons, terminal widget, and advice widget |
| `#about` | Personal intro, detail grid, and achievement badges |
| `#projects` | Filter bar and three project cards |
| `#experience` | Timeline of three professional roles |
| `#contact` | Validated contact form and contact info |

---

## CSS

- **Theming:** CSS custom properties on `:root` for all colors. Dark/light switch by toggling a class on `<body>`.
- **Layout:** CSS Grid for two-dimensional sections, Flexbox for one-dimensional flows.
- **Responsive breakpoints:** 900px (tablet), 640px (mobile).
- **Animations:** `fade-in` / `visible` classes via IntersectionObserver, `fadeInUp` keyframe on form success, `blink` keyframe on terminal cursor.
- **Fonts:** Sora (body), Space Mono (monospace accents) via Google Fonts.

---

## JavaScript Features

| Function | Purpose |
|----------|---------|
| `setGreeting(name)` | Sets time-based greeting, optionally personalised with visitor name |
| `initPersonalisedGreeting()` | Wires name input, updates greeting on keystroke, saves to localStorage |
| `initTheme()` | Toggles dark/light theme, saves preference to localStorage |
| `initProjectFilter()` | Filters project cards by category on button click, shows empty state if none match |
| `fetchAdvice()` | Fetches random advice from public API, handles loading and error states |
| `initAdviceWidget()` | Initialises advice fetch on load and wires refresh button |
| `initNavbar()` | Adds scroll shadow to navbar |
| `initHamburger()` | Opens/closes mobile nav menu |
| `initSmoothScroll()` | Smooth scrolling to sections on nav link click |
| `initScrollAnimations()` | Fade-in on scroll using IntersectionObserver |
| `initContactForm()` | Validates name, email, and message with inline error messages and success feedback |

---

## Data Handling

| Method | What is stored |
|--------|---------------|
| `localStorage` | Theme preference (`dark`/`light`) and visitor name — both persist across browser sessions |
| Public API | Random advice fetched from `https://api.adviceslip.com/advice` — no API key required |

---

## New in Assignment 2 vs Assignment 1

| Feature | Assignment 1 | Assignment 2 |
|---------|-------------|-------------|
| Greeting | Time-based only | Time-based + personalised with visitor name |
| Theme storage | `sessionStorage` | `localStorage` (persists across sessions) |
| Projects section | Static grid | Filter by category with empty state |
| API usage | None | Advice widget with loading + error handling |
| Form success | Appears instantly | Animated with `fadeInUp` keyframe |
| CSS | Contained unused selectors | All selectors verified against HTML |
| UX hints | Limited | In-context guidance on all interactive elements |
