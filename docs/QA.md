# Verification status

- Astro page structure is migrated from the seven-page, pre-existing static demo.
- There are 12 intended prerendered routes: 6 top-level pages and 6 service detail pages (home, heating-cooling, services, areas, about, contact plus 6 service detail pages).
- Node-level content/security/route tests and JS syntax checks run without network access.
- **Astro package install, `astro check`, full build and browser rendering are NOT confirmed in this environment** because package registry DNS access is unavailable. Run `npm ci`/`npm install`, `npm run check`, and `npm run build` on a networked runner before release.
- Real booking, area verification and actual business details intentionally remain disabled.
- Mobile and screen-reader QA remain outstanding.
