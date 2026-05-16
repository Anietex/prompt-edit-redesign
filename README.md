# Prompt Edit — Sales Page Redesign

A ground-up redesign of `contentcreator.com/prompt-edit`, built as a
direct-response **sales page** with a refined, cinematic dark aesthetic.

## Stack

- **Vue 3** (`<script setup>`) + **TypeScript** — typed throughout, `vue-tsc` clean
- **Tailwind CSS v4** — design tokens in `@theme`, utility-first, idiomatic
- **Vite 6** — `@tailwindcss/vite` plugin
- **ESLint** (flat config, `eslint-plugin-vue` + `@vue/eslint-config-typescript`) + **Prettier**

```bash
npm install
npm run dev          # local dev server
npm run build        # production build -> dist/
npm run preview      # preview the production build
npm run type-check   # vue-tsc
npm run lint         # eslint --fix
npm run format       # prettier --write
```

## Design direction

Refined dark — restrained and cinematic, not neon:

- True near-black canvas, warm-white (`#ece9e2`) primary actions
- A single accent — the brand blue (`#43adf4`), pulled from the logo, used sparingly
- Film grain over everything; subtle, desaturated mesh glow
- Clash Display / Satoshi typography
- Custom cubic-bezier motion, `IntersectionObserver` scroll reveals

## Sales structure (AIDA)

| Stage | Sections |
|-------|----------|
| Attention | Stripped sales nav + cinematic hero — a scrolling wall of real platform output |
| Interest | Concept video, draggable before/after slider, 4 tool categories with 18 demo videos |
| Desire | Pricing value-stack, 5 template blocks (banner videos + grids + software shots), sound A/B + samples, testimonials, qualifier |
| Action | Risk-reversal guarantee, FAQ, urgent final CTA, footer |

## Assets

Every image and the six fonts are **self-hosted** in `src/assets/` (WebP and
woff2) — zero third-party requests at page load. Imagery is sourced from the
original page; the wall tiles are sliced from its template library and AI
demos. `WistiaLite.vue` is a lazy click-to-load embed that keeps the demo
videos off the initial page load.

## Structure

```
src/
├── App.vue                    page composition + atmosphere
├── main.ts                    bootstrap + v-reveal directive
├── styles/main.css            Tailwind entry: @theme tokens + component layer
├── data/content.ts            typed copy + asset imports
├── composables/useReveal.ts   shared IntersectionObserver directive
└── components/
    ├── SiteNav · SiteFooter · BrandMark · CtaButton
    ├── WistiaLite             lazy click-to-load video
    ├── SectionHeading · ToolCategory · TemplateBlock
    └── sections/              Hero · Concept · BeforeAfter · Toolkit
                               Pricing · Templates · Sound · Testimonials
                               Qualify · Guarantee · Faq · FinalCta
```

Accessibility: semantic landmarks, `focus-visible` rings, keyboard-operable
before/after slider, reduced-motion support. Responsive down to mobile.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages. `base: './'` keeps asset paths portable to any URL.
