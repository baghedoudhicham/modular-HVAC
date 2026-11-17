# Roomtone — Modular HVAC / Astro

An independent, modular **Astro static website** for a fictional U.S. residential HVAC contractor. It uses a custom home-weather-station visual language with an original illustrated airflow cutaway. The Kondra Concept B thread is a **craft reference**, not a source of branding or copy. The existing Air Care project is separate.

## Start

Requires Node.js 20.10+. Run:

```bash
npm install
npm run dev
npm run build
npm run check
npm run preview
```

Astro generates static HTML, with JavaScript only for accessible menu, illustration mode, comfort-path selector and demo form validation. No client framework or runtime AI needed.

## Routes

- `/` — home: house cutaway, comfort selector, seasonal pathways, services and process
- `/heating-cooling/` — repair/maintenance/replacement decision routes
- `/services/` — all six service categories
- `/services/[slug]/` — six **prerendered** detail pages: cooling, heating, heat-pumps, air-quality, maintenance, replacement
- `/areas/` — ZIP input that never invents verified coverage
- `/about/` — values and gated trust evidence
- `/contact/` — accessible **demo-only** contact flow; no data is sent

## Architecture

| Location | Purpose |
|---|---|
| `src/pages/**/*.astro` | Astro route entrypoints and static service generation |
| `src/layouts/SiteLayout.astro` | Shared semantic shell, SEO and navigation |
| `src/components/*.astro` | Home-page section composition |
| `src/lib/content.js` | CMS-ready business and service content records |
| `src/lib/visuals.js` | Original house SVG, UI primitives, navigation and service tiles |
| `src/lib/templates.js` | Authored markup for long-form inner-page sections |
| `src/scripts/interactions.js` | Progressive enhancement, no UI re-rendering or API calls |
| `src/styles/global.css` | Original design tokens, typography and responsive system |

Business facts, contact details, coverage, credentials and reviews are deliberately blank until verified. `brand.demo` inserts a `noindex` directive so the example cannot masquerade as a real company in search. Remove only after a real owner approves publication content.

## Production gate

This is a working implementation template, **not a live contractor website**. Before publishing for a real company: verify the legal name/credentials, claims, locations, hours, phone, licensed media and technical copy; wire a server-validated secure booking endpoint or scheduler; approve localized emergency guidance; audit accessibility including screen readers and mobile; and measure CWV. Never report demo-only form submission as a completed booking.

See `docs/IMPLEMENTATION.md` and `docs/QA.md`.
