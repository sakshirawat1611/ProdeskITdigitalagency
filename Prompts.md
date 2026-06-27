# Prompts.md — AI Assistance Log

## Project: ProdeskIT Digital Agency Landing Page
**Tech Stack:** HTML, CSS, JavaScript  
**Type:** Static Multi-Section Landing Page

---

## How I Used AI in This Project

I used Claude (by Anthropic) as a **strict mentor** throughout this project. I did not ask for full code to be written for me. Instead, I asked Claude to explain concepts first, point me in the right direction, and only help me fix specific issues when I was stuck.

---

## My Learning Process

Before implementing anything, I first studied the core concepts independently:

- Watched **CodeWithHarry** on YouTube for HTML & CSS fundamentals
- Practiced rough layouts and experiments in separate files before touching the project
- Used Claude to clarify concepts I did not fully understand after watching tutorials
- Claude also recommended channels like **Traversy Media**, **Web Dev Simplified**, and **Kevin Powell** for deeper CSS topics like positioning, flexbox, and responsive design

Only after I had a basic understanding did I start building. The base structure, section layout, and initial styling were written by me. Claude helped me debug and improve specific parts.

---

## Key Concepts I Learned

- CSS custom properties (variables) for theming
- `position: fixed` for sticky navbar behavior
- `backdrop-filter` for glassmorphism blur effect
- CSS transitions and `@keyframes` animations
- Dark/light mode toggle using `classList.toggle` in JavaScript
- `localStorage` to persist theme preference across sessions
- Responsive design using `@media` queries
- Mobile hamburger menu with open/close toggle logic
- Smooth scroll with `scroll-behavior: smooth`
- CSS Grid and `auto-fit` / `minmax` for service cards
- `clamp()` for fluid responsive typography
- `z-index` stacking context for overlapping elements
- Hero video background with overlay gradient

---

## Prompts I Used With Claude

### Navbar
> "My navbar is not covering the full width, it has gaps on both sides. What is causing this and where do I fix it?"

> "When I scroll down the navbar background appears but it is not full width. How do I move the background from .nav to .header?"

> "I don't want my navbar to shrink when I scroll. How do I keep the padding stable?"

> "What is more professional for a digital agency — always dark navbar or transparent that becomes dark on scroll?"

### Dark Mode
> "In dark mode I want the hero section to become darker and moodier, not washed out. What overlay values should I use?"

> "My CSS has duplicate body.dark blocks conflicting with each other. Help me clean them up into one single block."

> "I want Get Started button text to be white in light mode and dark in dark mode. Where exactly do I change this?"

### Debugging
> "My console is showing an unsafe attempt to load URL file:// error. Is this a real problem or just a local issue?"

> "How do I push my updated project to GitHub after making all these changes?"

---

## What I Built Myself

- Full HTML structure across all sections (Hero, About, Services, Contact, Footer)
- Initial CSS styling for layout, typography, and colors
- Service cards with hover animations
- Footer with social icons
- Basic JavaScript for theme toggle and hamburger menu logic

## Where Claude Helped

- Identifying why the navbar was clipped (container class on nav element)
- Moving scrolled background from `.nav` to `.header` for full-width coverage
- Cleaning up conflicting duplicate dark mode CSS blocks
- Explaining `clamp()`, `backdrop-filter`, and CSS variable scope
- Recommending YouTube resources for deeper learning

---

## Resources I Studied

- [CodeWithHarry — HTML & CSS](https://www.youtube.com/@CodeWithHarry)
- [Traversy Media — Responsive Design](https://www.youtube.com/@TraversyMedia)
- [Kevin Powell — CSS Deep Dives](https://www.youtube.com/@KevinPowell)
- [Web Dev Simplified — JavaScript Concepts](https://www.youtube.com/@WebDevSimplified)

---

*This file documents my learning journey and honest use of AI as a mentor tool, not a code generator.*
