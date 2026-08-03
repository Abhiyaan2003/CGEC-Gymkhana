---
name: CGEC Gymkhana
description: Official student fitness portal for the College of Government Engineering & Science.
colors:
  primary: "#E10600"
  primary-light: "#FF1E1E"
  primary-dark: "#B80500"
  neutral-bg: "#0A0A0A"
  neutral-surface: "#111111"
  neutral-elevated: "#1A1A1A"
  neutral-card: "#161616"
  text-primary: "#F5F5F5"
  text-secondary: "#A0A0A0"
  border: "rgba(255, 255, 255, 0.07)"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontWeight: 800
    textTransform: "uppercase"
  body:
    fontFamily: "Inter, sans-serif"
    fontWeight: 400
rounded:
  sm: "4px"
  md: "8px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.primary-light}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: "14px 28px"
  card:
    backgroundColor: "{colors.neutral-card}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: CGEC Gymkhana

## Overview

**Creative North Star: "The Crimson Monolith"**

A high-impact, high-energy layout structure utilizing heavy dark surfaces pierced by raw, concentrated red energy. The display typography is heavy and condensed, delivering a commanding, athletic presence. The layout emphasizes structure, high contrast, and dynamic illumination via custom CSS glowing gradients, with an absolute avoidance of photography.

**Key Characteristics:**
- **Raw Contrast:** Saturated athletic red accent against absolute deep midnight black.
- **Graphic-Driven:** Pure reliance on CSS effects, clean SVG iconography, and strong display typography rather than photography.
- **Physical Weight:** Thick cards, defined borders, and atmospheric glows to ground the user interface in a premium athletic space.

## Colors

The color system uses a strict Midnight Black primary canvas with a high-energy Crimson Red sole accent. No secondary or tertiary hue accents are allowed.

### Primary
- **Crimson Red** (#E10600): The core branding and call-to-action color. Used for buttons, active state highlights, and primary accents.
- **Crimson Light** (#FF1E1E): Hover state variant of Crimson Red. High visibility/intensity.
- **Crimson Dark** (#B80500): Active/pressed state variant and gradient stop.

### Neutral
- **Midnight Black** (#0A0A0A): The global canvas background.
- **Midnight Surface** (#111111): Base card/section background.
- **Midnight Elevated** (#1A1A1A): Interactive inputs and elevated sheet backgrounds.
- **Midnight Card** (#161616): Default static card surface.
- **Ice White** (#F5F5F5): Primary high-contrast body text.
- **Muted Silver** (#A0A0A0): Secondary label and description text.

### Named Rules
**The Sole Accent Rule.** The primary red accent `#E10600` must be the only hue accent. No blue, yellow, green, or other colored accent is permitted under any circumstances.
**The 10% Accenting Rule.** Red accenting must occupy ≤ 10% of any given viewport surface area. Its high-energy impact is preserved through constraint.

## Typography

**Display Font:** Syne (with sans-serif fallback)
**Body Font:** Plus Jakarta Sans (with sans-serif fallback)

### Hierarchy
- **Display XL** (Extra Bold 800, clamp(56px, 10vw, 120px), line-height 0.92): Large display headlines, hero banners, and high-impact statements. Always uppercase.
- **Display LG** (Extra Bold 800, clamp(40px, 7vw, 80px), line-height 0.95): Primary section headings. Always uppercase.
- **Display MD** (Bold 700, clamp(28px, 5vw, 56px), line-height 1.0): Secondary page/section headings. Always uppercase.
- **Display SM** (Bold 700, clamp(20px, 3vw, 36px), line-height 1.1): Tertiary subheadings. Always uppercase.
- **Heading LG** (Semi Bold 600, 24px, line-height 1.3): Card-level headings.
- **Body MD** (Regular 400, 16px, line-height 1.65): Default body text.
- **Label** (Semi Bold 600, 11px, letter-spacing 0.12em): Section tags, uppercase metadata, and sub-labels.

### Named Rules
**The Heavy Case Rule.** All headings using `Syne` must be styled in uppercase to project a structured, athletic feel.
**The Contrast Rhythm Rule.** Display headers in Syne should contrast heavily against the clean, highly legible geometric Plus Jakarta Sans body font.

## Layout

The layout uses a standard responsive 8px grid system. Grid gutters scale with container width to maintain visual rhythm.

- **Breakpoints:** Mobile (375px), Tablet (768px), Desktop (1024px), Wide Desktop (1200px max container).
- **Spacing Steps:** 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px, 96px.
- **Rhythm:** Layout sections have a default padding of 96px (`var(--sp-24)`) on desktop, scaling down to 64px (`var(--sp-16)`) on mobile.

## Elevation & Depth

Depth is established via tonal layering and glowing atmospheric lighting effects. There are no ambient grey shadows; shadows are reserved for absolute dark shadows and active red glows.

### Shadow Vocabulary
- **Shadow Card** (`0 4px 24px rgba(0,0,0,0.5)`): Standard black drop shadow to elevate surfaces off the base canvas.
- **Crimson Glow** (`0 0 32px rgba(225, 6, 0, 0.35)`): Used on hover for primary elements to simulate backlighting.

### Named Rules
**The Flat-at-Rest Rule.** All cards and containers are flat at rest. Elevation glows and translateY offsets are strictly triggered as active hover/focus responses.

## Shapes

Shapes are geometric, clean, and boxy with subtle corner rounding to maintain a modern, engineered look.

- **Rounding:** Large cards use 16px (`--radius-lg`), inputs and boxes use 8px (`--radius-md`), buttons use 4px (`--radius-sm`), and tags/badges use pill-shaped (`--radius-full`).
- **Form Borders:** Borders are thin, semi-transparent white lines (`rgba(255,255,255,0.07)`) that brighten to `rgba(255,255,255,0.14)` on hover.

## Components

### Buttons
- **Shape:** Rounded corners (4px radius).
- **Primary:** Background `#E10600` (Red), text `#ffffff`, padding 14px 28px.
- **Hover:** Background `#FF1E1E` (Red Light) with `0 0 32px rgba(225, 6, 0, 0.35)` glow, shift up 1px.
- **Outline:** Background transparent, border 1.5px solid `rgba(255, 255, 255, 0.14)`, text `#F5F5F5`. Hover border-color `#E10600`, text `#E10600`.

### Cards
- **Corner Style:** Rounded corners (16px radius).
- **Background:** Solid Midnight Card `#161616`, thin border `rgba(255,255,255,0.07)`.
- **Hover:** TranslateY -2px, border-color `#E10600` or `rgba(255,255,255,0.14)`, red glow shadow if accent card.

### Inputs
- **Style:** Background Midnight Elevated `#1A1A1A`, border 1.5px solid `rgba(255, 255, 255, 0.07)`.
- **Focus:** Outline none, border `#E10600`, glow shadow `0 0 0 3px rgba(225, 6, 0, 0.08)`.

## Do's and Don'ts

### Do:
- **Do** stick to the Midnight Black (`#0A0A0A`) and Crimson Red (`#E10600`) color palette.
- **Do** use Barlow Condensed for display titles and force them to uppercase.
- **Do** rely on CSS gradients, orbs, and clean SVG shapes for visual background energy.

### Don't:
- **Don't** use photography or stock images of gym goers, staff, or equipment.
- **Don't** add secondary accent colors such as corporate blue, gold, or green.
- **Don't** use soft/round/bubbly geometries; keep radii subtle (4px to 16px).
