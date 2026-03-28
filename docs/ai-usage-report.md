# AI Usage Report

**Assignment:** Assignment 2 – Interactive Features
**Course:** SWE 363 – Web Development
**Student:** Mohammed Alroomi (202250760)
**Date:** March 2026

---

## Tools Used & Use Cases

I used two AI tools: **Claude (claude.ai)** as my primary development assistant, and **ChatGPT (OpenAI)** for concept understanding and clarification.

### Claude (claude.ai) — Primary Development Tool

Claude was used iteratively across every part of the assignment. I described requirements, reviewed outputs, and made deliberate decisions about what to keep, change, or simplify before including anything in the project.

- **Feature Planning:** I described the Assignment 2 requirements and asked Claude to suggest which features best fit a portfolio. It proposed the personalised greeting and project filter — I agreed and directed the scope.
- **Code Generation:** Claude generated the HTML, CSS, and JS for the greeting input, filter bar, and advice widget. I reviewed each piece before including it — for example, I rejected a tab-based navigation system Claude proposed as it conflicted with the A1 single-page layout.
- **Feature Design Decision:** Claude initially placed the greeting input inside the navbar. After reviewing it, I found it felt disconnected from the greeting text. I instructed Claude to move it directly above the greeting line so the cause and effect would be visually clear.
- **API Integration:** Claude suggested `api.adviceslip.com` as a no-key-required public API. It implemented `fetchAdvice()` including the loading state, error handling, and refresh button. I reviewed the async/await pattern to ensure I understood it.
- **Bug Identification:** Claude identified that the form success message had no animation and added a `fadeInUp` keyframe — a small but meaningful UX improvement.
- **Code Review:** I asked Claude to audit the stylesheet for unused CSS selectors, directly addressing a deduction from Assignment 1.
- **Documentation:** Claude drafted this report and the technical documentation, which I reviewed and edited for accuracy.

### ChatGPT (OpenAI) — Concept Understanding Tool

Used exclusively to understand concepts — not for code generation.

- **Fetch API & Promises:** Before reviewing the advice widget code, I asked ChatGPT to explain how `async/await` and `fetch()` work.
- **localStorage vs sessionStorage:** ChatGPT clarified the difference, which led me to deliberately upgrade from `sessionStorage` (A1) to `localStorage` (A2).
- **CSS Keyframe Animations:** After Claude added `fadeInUp`, I asked ChatGPT to explain how `@keyframes` works before accepting the code.

---

## Benefits & Challenges

**Benefits:** AI reduced time spent on boilerplate, letting me focus on design decisions. The iterative approach — describe, review, refine — meant I never accepted anything I didn't understand. Claude also caught the unused CSS issue proactively, directly addressing A1 feedback.

**Challenges:** Claude's first attempt placed the greeting input in the navbar, which looked clean but disconnected it from its effect. Guiding it through two revisions reinforced that AI output reflects the quality of the prompt — reviewing results critically is essential.

---

## Learning Outcomes

- **Async/Await and Fetch API:** The advice widget introduced me to the Fetch API with proper error handling. I learned why `cache: 'no-cache'` was needed to avoid repeated cached responses.
- **CSS Keyframe Animations:** Adding `fadeInUp` gave me hands-on practice with `@keyframes` and how the `animation` property references them.
- **localStorage vs sessionStorage:** I upgraded preferences to `localStorage` after understanding that it persists across browser sessions, unlike `sessionStorage`.
- **IntersectionObserver reuse:** I extended the A1 scroll animation observer to target new elements in A2, reinforcing how the observer pattern works.

---

## Responsible Use & Modifications

All AI output was treated as a draft. Key decisions I made:

- **Feature selection:** I chose which two features to implement — Claude offered options, I made the call.
- **Layout decisions:** I rejected the tab navigation system and kept the original single-page layout.
- **Greeting input placement:** I identified the navbar placement was wrong and specified the correct position.
- **Simplification:** I removed a character counter Claude added to the message field as it added unnecessary complexity.
- **Content:** All personal information and project entries are my own, unchanged from Assignment 1.

I can explain every function and CSS rule in this project. Claude accelerated my work — all design decisions were mine.
