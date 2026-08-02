# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React 19 + Vite + React Router DOM + React Hook Form + Lucide React (v0.525).
CSS: Vanilla CSS with custom design tokens (no Tailwind). Client code lives at `client/src/`.

## Users

**Primary:** Currently enrolled students of CGEC (College of Government Engineering & Science) who want to join or use the campus gym. They access the site on mobile and desktop, primarily to register and check gym information (timings, equipment, rules).

**Secondary:** CGEC teaching and non-teaching staff who are eligible for gym access.

## Product Purpose

The CGEC Gymkhana website is the official information and registration portal for the student fitness facility on campus. It makes gym access accessible by providing a clear registration flow, communicating rules and equipment clearly, and acting as the single source of truth for students who want to use the gym.

Success means a student can find out what the gym offers, understand the rules, and register — all in one place, without needing to visit or phone the office.

## Positioning

An institution-run student fitness portal — not a commercial gym. Access is free for enrolled students; no membership tiers, no upselling. The product's differentiator is frictionless, low-barrier access to physical wellness as a student right built into enrollment.

## Operating Context

- Students arrive via word-of-mouth or campus noticeboard and need to register before their first visit.
- Physical Education Department reviews and approves registrations manually (no instant auto-approval).
- Gym operates on a slot system (morning/evening) with 6 days/week availability.
- No photography of staff or gym equipment exists; all visuals must rely on CSS, SVG, icons, and typography.
- The site must work in low-connectivity on-campus environments — no heavy image assets.

## Capabilities and Constraints

- **Registration form:** 4-step wizard — personal info, academic details, preferred slot + emergency contact, T&C acceptance + review. Submission triggers a confirmation message; backend integration is deferred (Formspree/Supabase TBD).
- **Contact form:** name, email, phone, message — shows success state on submit; no live backend currently.
- **Google Maps embed:** placeholder present; real embed URL to be provided by college.
- **No trainer profiles** and no real gym photography — constraint must be maintained.
- **7 routes:** `/`, `/about`, `/facilities`, `/contact`, `/rules`, `/terms`, `/register`.
- **Colour constraint:** midnight black (`#0A0A0A`) primary background, red (`#E10600`) sole accent — no third accent colour.
- **Type constraint:** Barlow Condensed for display headings, Inter for body.
- All pages are fully responsive (mobile-first).

## Brand Commitments

- **Name:** CGEC Gymkhana
- **Tagline in use:** "Train Hard. Rise Higher."
- **Voice:** Direct, motivating, institutional but energetic. Never commercial or sales-y.
- **Palette locked:** black + red only. No third accent.
- **No photography** — graphic/illustration-driven aesthetic is a hard constraint.
- **CTA locked:** primary action across all pages is "Register Now" routing to `/register`.

## Evidence on Hand

- Full build prompt at `gym-website-build-prompt.md` — the canonical product specification.
- Built site at `client/src/` — 7 pages, all components, hooks, and CSS design system already implemented.
- No real logos, photography, Google Maps embed URL, or backend credentials available yet.

## Product Principles

1. **Wellness as a right, not a perk.** Every design decision reinforces that gym access belongs to students by default — not gated, not upsold.
2. **No friction, no confusion.** The path from landing to registration submission must be navigable in one visit with zero support contact needed.
3. **Institution, not commerce.** Tone, copy, and aesthetics signal a trustworthy academic body — bold and energetic but never flashy or sales-driven.
4. **Zero dependency on unavailable assets.** The site must look complete and professional using only SVG, CSS, icons, and typography — never broken layouts waiting on missing photos.
5. **Mobile-first, campus-first.** Students on campus are on phones. Every interaction must work at 375 px with one thumb.

## Accessibility & Inclusion

- Semantic HTML throughout (landmarks, heading hierarchy, aria-labels on icon buttons).
- Skip-to-content link implemented.
- Form labels explicitly associated with inputs (no placeholder-only labels).
- Colour contrast: white/light text on near-black backgrounds — exceeds 4.5:1 throughout.
- `prefers-reduced-motion` respected in global CSS (animations disabled at system level).
- Touch targets ≥ 48 px on all interactive elements.
