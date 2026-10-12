# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters, hiring managers, and technical leads evaluating Marcos Bustos for full-time or part-time backend / full-stack roles. Their job is to judge fit fast — scan the profile, projects, stack, and production results, then decide whether to reach out. They arrive from LinkedIn, GitHub, search, or a CV, on desktop and mobile.

## Product Purpose

A single-page personal portfolio that presents Marcos Bustos's work, skills, and experience clearly enough to drive a hiring conversation. Success means a recruiter or company can understand his fit and initiate contact without friction.

## Positioning

Backend plus full-stack, delivered end to end: async Python / FastAPI services through React 19 / TypeScript / Firebase frontends and Flutter mobile, all backed by systems running in production with measured outcomes. A neighboring portfolio could show the stack; this one shows the finished, operating systems and their numbers.

## Operating Context

- Everyday language is Spanish (`es`); the audience is Argentine and remote-friendly.
- The interface is a simulated developer terminal — navigation reads as shell commands.
- Deployed as a static site on GitHub Pages at `https://markbus-ai.github.io/`.
- Contact channels: GitHub, LinkedIn, email, and a downloadable CV (`img/marcossbustoss.pdf`).
- Recruiters often skim on mobile between other tasks.

## Capabilities and Constraints

- Static HTML, CSS, and vanilla JavaScript — no build step and no framework. A dev-only `package.json` runs the lintapple UI checks (`npm run lint:ui`); nothing is generated from it at deploy time.
- One page with sections: Home / `whoami`, Projects / `ls projects/`, About / `cat about_me`, Experience / `cat experience.log`, Contact / `./contact`.
- Interactive terminal input supports `whoami`, `ls projects/`, `cat about_me`, `cat experience.log`, `./contact`, `clear`, and `help`.
- Project cards and content are data-driven from `script.js`; images live in `img/`.
- SEO surface includes `Person`, `WebSite`, `FAQPage`, and `BreadcrumbList` JSON-LD, Open Graph, Twitter cards, `robots.txt`, `sitemap.xml`, and `llms.txt`.
- Canonical email is `marcosbustos.dev@gmail.com`, used consistently in the CV (`cv_marcos_bustos.typ`), `llms.txt`, structured data, and the Contact button.
- Only Spanish (`hreflang="es"`) is published today.

## Brand Commitments

- Name: Marcos Bustos. Handles: `markbus-ai`, `mbustos`.
- Terminal / CLI identity is load-bearing: shell prompts, command-style labels, ASCII avatar.
- Monospace typography (Fira Code) and a dark theme (`#0d1117`, `color-scheme: dark`).
- Voice is direct and technical, in Spanish.

## Evidence on Hand

- Production systems: AppiarWeb / Beemore (React 19, TypeScript, Firebase, MUI, TanStack Query, Leaflet, offline-first), BlackFire E-Commerce (FastAPI + React + Mercado Pago + Docker + PostgreSQL), MozoPlus (FastAPI + WebSockets + Flutter).
- Open source: `whatsplay` (Playwright-powered WhatsApp Web automation), `mutils` (C CLI utilities).
- Measured results: whatsapp-bot ~+5,000 messages/month at 94.7% success, 99.5% query coverage; stated goal of reducing manual intervention by 80%.
- Education: ISFT 204 (Tecnicatura en Desarrollo de Software, in progress), CFP 403 (DB, backend, testing).
- CV asset: `img/marcossbustoss.pdf`.
- Do not fabricate testimonials, named clients, benchmarks, or results beyond the above.

## Product Principles

1. Prove, don't claim — lead with operating systems and real numbers, not adjectives.
2. The terminal is the personality; keep it coherent and functional rather than decorative.
3. Optimize for the recruiter's scan: fit readable in seconds, on any device.
4. Stay asset-light — no build step, no dependencies; a static site that ships from the repo.
5. Keep the profile truthful and current; every fact is one a future employer can verify.

## Accessibility & Inclusion

- Keep the existing baseline: `lang="es"`, skip link, ARIA labels on controls, keyboard-operable navigation, and `aria-live` terminal feedback.
- Preserve the current SEO / accessibility / performance posture when adding features.
