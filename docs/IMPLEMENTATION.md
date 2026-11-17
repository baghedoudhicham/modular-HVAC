# Astro implementation, CMS boundaries and launch gates

**Decision**: Astro static-site generation is the canonical implementation for Roomtone. The earlier WordPress theme blueprint is superseded. Do not ship the WordPress starter as part of this project. If editors later require a CMS, integrate an Astro-compatible headless CMS and preserve the existing route/content contracts.

## Why Astro

- Fast static pages, minimal JS and structured service detail routes.
- Layouts and section components enable reuse without page-builder lock-in.
- Content data is typed by convention and can be migrated into a content collection/CMS schema once the provider is known.

## Source of truth

- `brand` in `src/lib/content.js` contains explicit `null` for unverified phone/email/hours/endpoints; empty arrays for locations, reviews, credentials and team.
- `services` contains six neutral, plain-language content definitions; the service detail template generates six canonical pages.
- `routes` contains four authored selector responses and links; never generate diagnostics.
- `src/lib/visuals.js` contains original vector design; **no sensor telemetry** is implied.

## Next implementation slices

1. Confirm actual company, offered services, professional safety review, local jurisdiction, verified areas, contacts, hours, testimonials and photography.
2. Select a headless content adapter only if owner editing is required, and validate its content on build. Avoid making business claims in fallback data.
3. Connect contact to a verified dispatch/CRM workflow with protected server-side validation, spam controls, explicit consent and a true delivered/accepted state. Until then the form remains intentionally non-operational.
4. Add location pages only for genuine, differentiated service-area facts.
5. Perform QA at 1440, 834, 390, 320px; keyboard, screen-reader, form errors, reduced motion, no-overflow, and real-user Core Web Vitals.

## No assumptions

No invented company, reviews, prices, service radius, equipment measurements, financing, warranties, savings, permits or appointment confirmations. Regulatory content must be location- and date-reviewed.
