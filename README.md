# 202250760-MohammedAlroomi-assignment2

**Mohammed Alroomi | 202250760**
**SWE 363 – Web Development | KFUPM | 2026**

---

## Project Description

This is my personal portfolio website, built as a continuation of Assignment 1 and extended with interactive features for Assignment 2. The site is a single-page application built entirely with vanilla HTML, CSS, and JavaScript — no frameworks or build tools required.

The portfolio covers who I am, the academic projects I have worked on, my professional experience, and a way to get in touch. The design uses a dark/light theme system built on CSS custom properties, a responsive layout that works across desktop, tablet, and mobile, and smooth scroll animations triggered as the user moves through the page.

Assignment 2 adds a layer of interactivity and data handling on top of the Assignment 1 foundation:

- A personalised greeting input sits above the hero greeting. Typing a name updates the greeting in real time, and the name is saved to localStorage so it carries over on the next visit.
- A project filter lets visitors click a category button to show only Data Science, AI, or Database projects. An empty state message appears if nothing matches.
- A live advice widget fetches a random piece of advice from a public API on page load, with a loading indicator, a refresh button, and a friendly error message if the request fails.
- Theme preference is saved to localStorage so the chosen theme persists across browser sessions.
- The contact form validates all fields in real time and shows an animated success message on submission.

---

## Setup Instructions

No installation or build tools needed.

1. Clone the repository:
   ```bash
   git clone https://github.com/MohammedAlroomi/202250760-MohammedAlroomi-assignment2.git
   ```

2. Open `index.html` directly in your browser.

All features work without a local server.

---

## AI Usage Summary

I used Claude as my main coding assistant for code generation, code review, and debugging. I used ChatGPT separately to understand concepts like async/await, localStorage, and CSS keyframes before reviewing Claude's output. All AI output was reviewed, modified, and approved by me before being included in the project. See [`docs/ai-usage-report.md`](docs/ai-usage-report.md) for the full details.

---

## Live Demo

> [https://mohammedalroomi.github.io/202250760-MohammedAlroomi-assignment2/](https://mohammedalroomi.github.io/202250760-MohammedAlroomi-assignment2/)
