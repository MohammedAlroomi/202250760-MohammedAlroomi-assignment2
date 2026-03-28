# AI Usage Report

**Assignment:** Assignment 2 – Interactive Features
**Course:** SWE 363 – Web Development
**Student:** Mohammed Alroomi (202250760)
**Date:** March 2026

---

## Tools Used & Use Cases

I used two AI tools throughout this assignment: **Claude (claude.ai)** as my primary development assistant, and **ChatGPT (OpenAI)** for concept understanding and clarification.

### Claude (claude.ai) — Primary Development Tool

Claude was used iteratively across every part of the assignment. I described requirements, reviewed outputs, asked follow-up questions, and made deliberate decisions about what to keep, change, or simplify before including anything in the project.

- **Feature Planning:** I described the Assignment 2 requirements to Claude and asked it to suggest which dynamic features best fit a portfolio website. Claude proposed the personalised greeting input and project filter as the most natural fit — I agreed and directed the implementation scope.

- **Code Generation:** Claude generated the HTML structure for the greeting input, filter bar, advice widget, and their corresponding CSS and JavaScript. I reviewed each piece before including it, and simplified or adjusted several outputs — for example, I rejected a tab-based navigation system Claude initially proposed as it conflicted with the existing single-page layout from Assignment 1.

- **Feature Design Decision:** Claude initially placed the greeting name input inside the navbar. After reviewing the result, I found it felt disconnected from the greeting text it was meant to personalise. I instructed Claude to move it directly above the greeting line so the cause and effect would be visually obvious to the user — making the interaction more intuitive.

- **API Integration:** Claude suggested using `api.adviceslip.com` as a no-key-required public API appropriate for a portfolio context. It implemented the `fetchAdvice()` function including the loading state, error handling, and refresh button. I reviewed the async/await pattern and the error handling logic to ensure I understood both.

- **Bug Identification:** Claude identified that the form success message in Assignment 1 used `display: block` with no animation, which meant it appeared abruptly. It added a `fadeInUp` CSS keyframe animation to make the appearance smooth — a small but meaningful UX improvement.

- **Code Review:** After assembling the project, I asked Claude to check for unused CSS selectors — a deduction I had received in Assignment 1. Claude audited the stylesheet and confirmed all selectors had matching HTML elements.

- **Documentation:** Claude drafted this report and the technical documentation based on my description of what was built, which I then reviewed and edited for accuracy.

### ChatGPT (OpenAI) — Concept Understanding Tool

I used ChatGPT exclusively to understand concepts before or after Claude implemented them — not for code generation.

- **Fetch API & Promises:** Before reviewing the `fetchAdvice()` function Claude generated, I asked ChatGPT to explain how `async/await` works and how `fetch()` handles HTTP responses. This gave me the confidence to read and understand the implementation.
- **localStorage vs sessionStorage:** I asked ChatGPT to explain the difference between the two storage mechanisms. Understanding this helped me make the deliberate decision to upgrade from `sessionStorage` (Assignment 1) to `localStorage` (Assignment 2) for theme and name preferences.
- **CSS Keyframe Animations:** After Claude added the `fadeInUp` animation, I asked ChatGPT to walk me through how `@keyframes` works and how the `animation` property references them. This confirmed my understanding before I accepted the code.

---

## Benefits & Challenges

**Benefits:**
AI significantly reduced the time spent on boilerplate and syntax, letting me focus on design decisions and feature logic. The iterative approach — describing a requirement, reviewing the output, then refining — meant I never accepted anything I didn't understand. Claude also caught the unused CSS issue proactively, which directly addressed feedback from Assignment 1.

**Challenges:**
Claude's first attempt at the greeting feature placed the input in the navbar, which looked clean in isolation but disconnected the input from its visual effect. I had to guide it through two revisions before the layout matched my intent. This was a good reminder that AI output reflects the prompt — vague direction produces misaligned results, and reviewing the outcome critically is essential.

---

## Learning Outcomes

- **Async/Await and Fetch API:** The advice widget introduced me to the browser Fetch API with proper async/await error handling. Claude explained why `cache: 'no-cache'` was needed for the advice API to return a different result on each call rather than a cached one.
- **CSS Keyframe Animations:** Adding `fadeInUp` to the success message gave me hands-on practice with `@keyframes` — I now understand how to define and apply named animation sequences.
- **localStorage vs sessionStorage:** Building on Assignment 1 where I used `sessionStorage`, I upgraded the theme and name preferences to `localStorage` in Assignment 2. This was a deliberate decision I made after understanding the difference — `localStorage` persists across browser sessions, which is more appropriate for user preferences.
- **IntersectionObserver reuse:** I extended the existing scroll animation observer from Assignment 1 to also target `.exp-card` and `.achievement-badge` elements added in Assignment 2, reinforcing my understanding of how the observer pattern works.

---

## Responsible Use & Modifications

All AI-generated output was treated as a draft. Key decisions and modifications I made:

- **Feature selection:** I chose which two dynamic features to implement — Claude offered options, I made the call.
- **Layout decisions:** I rejected the tab navigation system Claude proposed and directed it back to the original single-page layout.
- **Greeting input placement:** I identified that the navbar placement was wrong and specified the correct position above the greeting line.
- **Simplification:** I removed a character counter Claude added to the message field, as it added complexity without meaningful value for this scope.
- **Content:** All personal information, project descriptions, and experience entries are my own — unchanged from Assignment 1.

I can explain every function and every CSS rule in this project. Claude accelerated and informed my work — all design decisions were mine.
