# Luma Design System

## Theme

Light. Clean warm-toned background that complements the lighting product. Off-white canvas (never pure white) with subtle warmth, like a well-lit room at golden hour.

Scene: A remote worker browsing at their own desk on a weekend afternoon, natural light from a window, looking for an upgrade that makes their space feel intentional and their eyes less tired.

## Color Palette

All values in OKLCH for perceptual uniformity.

```css
/* Backgrounds */
--bg:          oklch(0.985 0.003 75);
--surface:     oklch(0.97 0.006 78);
--surface-alt: oklch(0.94 0.008 75);

/* Text */
--text-primary:   oklch(0.13 0.01 50);
--text-secondary: oklch(0.4 0.015 55);
--text-tertiary:  oklch(0.6 0.01 60);

/* Accent — warm amber, the lamp's glow */
--accent:       oklch(0.7 0.14 55);
--accent-soft:  oklch(0.85 0.07 60);
--accent-deep:  oklch(0.55 0.16 50);

/* Cool accent — represents the lamp's daylight/cool mode */
--cool:        oklch(0.55 0.08 240);
--cool-soft:   oklch(0.75 0.05 230);

/* Decoratives */
--border: oklch(0.9 0.005 75);
--glow:   oklch(0.85 0.12 55 / 0.15);
```

## Typography

**Primary font:** Sora — geometric sans-serif by JetBrains. Clean, modern, with distinctive circular shapes. Good weight range (300–800) for both display and body.

**Scale:** 1.25 ratio, fluid `clamp()` sizing.

| Token | Weight | Size |
|-------|--------|------|
| Display | 700 | `clamp(3rem, 7vw, 6rem)` |
| H1 | 700 | `clamp(2.5rem, 5vw, 4.5rem)` |
| H2 | 600 | `clamp(1.8rem, 3.5vw, 3rem)` |
| H3 | 600 | `clamp(1.3rem, 2.5vw, 1.8rem)` |
| Body | 400 | `clamp(1rem, 1.2vw, 1.125rem)` |
| Small | 400 | `0.875rem` |
| Label | 500 | `0.75rem`, uppercase, 0.08em tracking |

Body line length: 65–75ch max-width.

## Elevation

Minimal. Soft shadows for depth, never hard.

```css
--shadow-sm: 0 1px 3px oklch(0 0 0 / 0.04);
--shadow-md: 0 4px 12px oklch(0 0 0 / 0.06);
--shadow-lg: 0 8px 30px oklch(0 0 0 / 0.08);
--shadow-glow: 0 0 40px var(--glow);
```

## Components

**Navigation:** Fixed top, transparent with blur on scroll. Logo left, links right, CTA button.

**Buttons:** 
- Primary: accent bg, white text, subtle glow on hover
- Secondary: transparent with border, accent text
- All: 12px border-radius, 0.3s ease transitions

**Cards:** Clean, minimal. Surface bg, fine border, optional soft shadow. No side-stripes.

**Sections:** 100vh minimum for hero, alternating layouts for content sections (image-left/text-right then text-left/image-right).

## Layout

- Max content width: 1200px
- Section padding: `clamp(4rem, 10vh, 8rem)` vertical
- Grid for feature cards: `repeat(auto-fit, minmax(300px, 1fr))`
- Hero: full-viewport, asymmetric (text left, product right)
- No nested cards. No centered-stack templates.

## Motion

- Entrance animations: staggered fade-up with ease-out-quint
- Scroll-trigger reveals using IntersectionObserver
- Light glow effect: subtle pulsing animation
- Navigation: background fade on scroll
- Respect `prefers-reduced-motion`

## Imagery

Product hero uses CSS/SVG-rendered lamp illustration with realistic glow effects. Feature sections use icon-driven visuals. Product page uses detailed spec presentation.

No stock photography. The product IS the visual hero.
