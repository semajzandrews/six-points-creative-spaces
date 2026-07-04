# Six Points Creative Spaces — SIGNATURE

- Slug: six-points-creative-spaces
- Live: https://six-points-creative-spaces.vercel.app
- Repo: https://github.com/semajzandrews/six-points-creative-spaces (private)
- Business: event venue, 547 Bloomfield Ave, Bloomfield NJ 07003 · 5.0★ Google (2 reviews) · no phone listed → form CTA
- Built: 07-04-2026 · first Fable 5 build · batch: Bloomfield Center #1

## Design fingerprint
- Palette: ink (#100e0c) + bone (#f3ecdf) + champagne gold (#d4a545 ramp)
- Signature move (ONE per site): original six-point star mark, slow 90s rotation, reused via single `<symbol>` (nav, section heads, list bullets, footer)
- Sections: video hero → The Space (split) → Occasions (3-card) → Gallery (bento) → Request form → Map/Visit → footer
- No phone on record → "Request the Space" form is the money button (Resend wiring = Phase 2, post-yes)

## Arsenal Manifest
- Primary medium: video — event venue sells atmosphere; celebration footage carries it (category + Bloomfield Center clientele)
- Video considered: yes — used: yes — hero toast close-up loop, warm golden light [BUILD_RULES §7]
- Media used (all self-hosted in public/, no hotlinks) — ONE image per slot, verified unique per-page 07-04-2026 after a duplicate-use bug (see Corrections):
  - video — Mixkit id 48636 — friends sharing a toast, warm bokeh — hero loop, 720p+360p pair, poster fallback
  - photo — Pexels 16985178 — moody amber venue interior (wood/brick) — The Space section only
  - photo — Pexels 17056974 — airy loft venue, round tables, string lights — Pop-ups & shoots card
  - photo — Pexels 30142374 — gold-glitter 40th birthday, champagne — Milestone birthdays card only
  - photo — Pexels 34260120 — "ONE" balloon garland first birthday — Showers card
  - photo — Pexels 5970895 — confetti + gold balloons, Black/diverse celebrants — gallery (community match: Bloomfield is a diverse town)
  - photo — Pexels 14457436 — portrait balloon arch table — gallery tall card
  - photo — Pexels 16935897 — candlelit banquet hall, purple/gold ambient — gallery wide tile
  - photo — Pexels 17001774 — dark wood table, greenery centerpiece — gallery tile
  - All banked + verified in image-library registry under six-points-creative-spaces
  - Spare banked (unused, on shelf): Pexels 3419649 — portrait, gold streamers, party glam

## Corrections
- 07-04-2026: shipped with 16985178 and 30142374 each duplicated (used in their primary section AND again in the Gallery grid). Same-page image repetition — caught by Semaj post-review. Fixed by sourcing 2 new verified, board-unique images (16935897, 17001774) for the Gallery slots and redeploying. Lesson logged in ARSENAL.md / journal.md: grep every `/img/ID.jpg` reference before shipping and assert each ID appears in exactly one slot.
- Motion technique: IntersectionObserver reveal (custom, cubic-bezier rise) + Lenis smooth scroll; slow-rotate star keyframe — all styled to brand, no library defaults
- Custom icons: original six-point star, drawn for this brand — license: original work (fully owned) — single `<symbol>` source of truth: yes
- Fontshare pairing: Melodrama (display) + Ranade (body) — first use across the registry, self-hosted woff2
- GPU-verified: n/a — no shader/WebGL (2D motion only, per bundle doctrine)

## Verification
- 375px audit: PASS — zero horizontal overflow (getBoundingClientRect sweep), hero/nav/CTAs verified visually
- Prod build: clean static export, all pages prerendered
- Map: keyless Google output=embed (Ramos pattern); blank in preview-MCP sandbox as documented — verify on live in real Chrome
- Facts on site: only verified lead data (name, address, category, 5★ Google). No invented hours/phone/socials.
