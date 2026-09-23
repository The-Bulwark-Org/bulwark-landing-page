# Bulwark — Waitlist Landing Hero

A pixel-accurate replica of the Bulwark waitlist landing hero built with **Vite + React + TypeScript + Tailwind CSS v4**.

## Stack

| Layer | Tool |
|---|---|
| Bundler | Vite 8 |
| UI | React 19 + TypeScript |
| Styling | Tailwind CSS v4 + Vanilla CSS (design tokens as CSS custom properties) |
| Font | [Sora](https://fonts.google.com/specimen/Sora) via Google Fonts (weights 400, 500, 600; `font-display: swap`) |

## Getting Started

```bash
npm install
npm run dev
```

Then open **http://localhost:5173/**

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx         # Full-bleed hero section
│   ├── Logo.tsx         # Logo lockup (renders /assets/logo.svg)
│   └── CTAButton.tsx    # Pill-shaped CTA button
├── index.css            # Design tokens, base styles, all layout rules
├── main.tsx             # Entry point
└── App.tsx              # Thin shell that mounts <Hero />

public/
└── assets/
    ├── logo.svg         # Arch icon + "Bulwark" wordmark
    └── grass.svg        # Bush / flower illustration

index.html               # SEO meta tags, Sora font, lang="en"
```

## Design Tokens

All tokens live in `src/index.css` as CSS custom properties:

| Token | Value | Usage |
|---|---|---|
| `--sky-top` | `#C9ECFF` | Gradient top color |
| `--bg` | `#FFFFFF` | Page / gradient bottom |
| `--text-primary` | `#0A0A0A` | H1, CTA text |
| `--text-muted` | `#8E8E8E` | Subtext paragraph |
| `--brand-ink` | `#1E1008` | Logo dark brown-black |
| `--cta-bg` | `#FDB63A` | Button fill |
| `--cta-text` | `#0A0A0A` | Button label |
| `--green-dark` | `#2E9741` | Illustration (dark bush) |
| `--green-light` | `#52AE3F` | Illustration (light bush) |

## Responsive Breakpoints

| Viewport | Behaviour |
|---|---|
| ≥1024px | Single-line headline & subtext, full design |
| 640–1023px | H1 clamps to ~36–54px, wraps to 2 lines; subtext max-width 560px |
| <640px | Side padding 20px; H1 34px; subtext 16px; button full-width (max 320px) |

## Accessibility Notes

- Single `<h1>` per page
- `<main>` landmark wraps the hero
- Illustration is `alt=""` + `aria-hidden="true"` (decorative)
- `logo.svg` renders via `<img alt="Bulwark">`
- Visible `:focus-visible` ring (2px dark outline, 3px offset)
- `prefers-reduced-motion` respected — hover transition disabled
- **WCAG AA contrast note:** `--text-muted` (#8E8E8E) on white yields ~3.9:1, which passes AA for large text but fails for normal text (4.5:1 required). The color was kept as specified in the design tokens; raising lightness could be considered if full compliance is needed.

## What Was Assumed / Decided

| Item | Decision |
|---|---|
| Font family | **Sora** (confirmed match to design spec) |
| Button action | `href="#"` placeholder — wire to your waitlist endpoint/modal |
| Gradient stop | `33%` ≈ 300px at 900px height, smooth — matches visual |
| Illustration flower | Original SVG contained a base64-embedded raster PNG daisy that was reconstructed as a vector path group (visually identical) |
| No extra sections | Only the single hero section, no nav, no footer |
