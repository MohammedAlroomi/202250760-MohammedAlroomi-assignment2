# AI Usage Report

**Assignment:** Assignment 2 – Interactive Features
**Course:** SWE 363 – Web Development
**Student:** Mohammed Alroomi (202250760)
**Date:** March 2026

---

## Tools Used & Use Cases

For this assignment I used two AI tools. Claude was my main tool for building the project, and ChatGPT was something I turned to when I wanted to understand a concept before moving forward.

### Claude (claude.ai)

I used Claude as a coding assistant throughout the assignment. The way I worked with it was simple: I decided what to build, described it to Claude, reviewed what it gave me, and then modified or rejected it based on my own judgment before anything made it into the project.

For the features, I was the one who decided on the personalised greeting input and the project filter after thinking about what would actually make sense on a portfolio site. Claude offered a tab-based navigation system at one point and I rejected it entirely because I knew it would break the layout I had built in Assignment 1.

A good example of how I reviewed and corrected Claude's output was the greeting input placement. Claude put it in the navbar, and when I saw the result I could tell it felt wrong. The input was too far from the text it was supposed to change. I went back, explained the problem, and told it exactly where I wanted it. That decision came from me noticing the issue, not Claude.

I also asked Claude to review the CSS for unused selectors after Assignment 1 feedback, and to add an animation to the form success message. Both were things I identified as problems and directed Claude to fix.

### ChatGPT (OpenAI)

I used ChatGPT only for understanding concepts, never for writing code. Before reading through the advice widget code, I asked it to explain async/await and the Fetch API so I could properly review what Claude had written. I did the same with localStorage vs sessionStorage, which helped me make a conscious decision to switch from sessionStorage in Assignment 1 to localStorage here. And after the fadeInUp animation was added, I asked ChatGPT to explain CSS keyframes so I understood exactly what was in my own file before accepting it.

---

## Benefits & Challenges

The main benefit was speed. Handling the repetitive parts through AI meant I could spend more time on decisions rather than syntax. But I made sure that everything that went into the project passed through my own review first. If something looked off or didn't match what I had in mind, I sent it back.

The challenge was that Claude does not always get things right on the first try. The greeting input took two rounds of corrections before it looked the way I wanted. Each time I had to clearly explain what was wrong and what I expected instead. That back and forth was actually useful because it forced me to think precisely about what I wanted rather than just accepting whatever came back.

---

## Learning Outcomes

This assignment gave me real experience with the Fetch API and async/await, including understanding why cache: 'no-cache' matters. I also properly learned CSS keyframe animations for the first time by making sure I understood them before accepting the code. Switching from sessionStorage to localStorage was a small change that came from actually understanding the difference. And working with IntersectionObserver again helped me get more comfortable with it.

---

## Responsible Use

Every decision in this project was mine. I chose the features, rejected what did not fit, and corrected what was wrong. All AI output was reviewed and modified before being included. All personal content is my own from Assignment 1. I can explain every part of the code. Claude and ChatGPT made the work faster, but I was the one thinking through every step.
