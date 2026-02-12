# Portfolio Improvements Checklist

This repo is already clean and fast (static export, app router, Tailwind). Below are high-impact improvements to make it more recruiter-friendly, more credible, and easier to maintain.

## Content & credibility

- Add measurable impact in experience bullets (latency, throughput, cost, DB size, response times, test coverage).
- Add “What I’m looking for” (role type, stack, relocation/remote preference) near the hero.
- Add “Featured” vs “More” projects and include:
  - problem statement
  - architecture diagram or short “system design” paragraph
  - key tradeoffs and why you chose them
  - screenshots / short demo GIF where relevant
- Add a “Writing / Notes” section (even 2–3 posts) to differentiate you from other candidates.
- Add “Resume last updated” date (helps recruiters trust freshness).

## UX / design

- Add a mobile nav (drawer / sheet) so section links are reachable on small screens.
- Add a “Back to top” affordance (floating button or footer link).
- Make the “Open to backend roles” badge data-driven (toggleable in `app/data.ts`).
- Consider a dedicated “Projects” page for deeper case studies if you have 2–3 strong projects.

## Accessibility

- Ensure focus states are clearly visible for all interactive controls (especially icon buttons).
- Add `prefers-reduced-motion` support (reduce Framer Motion animations).
- Add skip-link (`Skip to content`) at top for keyboard navigation.

## Performance

- Consider hosting tech icons locally (or via a single sprite) instead of many third-party requests.
- Add `preconnect` for icon CDN if you keep remote icons.
- Add a lightweight analytics solution (optional) and only load it in production.

## SEO & sharing

- Add Open Graph + Twitter metadata (title, description, `og:image`).
- Add `public/og.png` (social preview image) and a consistent favicon set.
- Add `sitemap.xml` and `robots.txt` for GitHub Pages.
- Ensure canonical URL is correct for your deployment (root domain vs project subpath).

## Code quality / maintainability

- Add types for `DATA` (interfaces) to prevent shape drift over time.
- Normalize project links: omit arrow/CTA when link is missing, or keep a `repoUrl`/`liveUrl` pair.
- Consider moving `DATA` into `content/` as JSON/YAML + Zod schema validation.
- Update `README.md` to describe the project (it’s still the default create-next-app README).

## Dependencies & security

- Run `npm audit` and patch the critical vulnerability when convenient.
- The build prints a Baseline dataset warning; updating `baseline-browser-mapping` removes it.

