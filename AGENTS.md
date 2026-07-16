# Project Guide

## Architecture

This is a dependency-free static website deployed directly from the repository root. There is no compilation, framework runtime, database, or server-side code.

- `index.html` contains all page sections, content, metadata, contact links, and inline SVG icons.
- `style.css` contains the full design system, CSS-generated portfolio artwork, transitions, and responsive layouts.
- `script.js` contains progressive enhancement for the mobile menu, sticky navigation state, active section tracking, scroll reveals, portfolio lightbox, and dynamic copyright year.

## Coding Conventions

- Keep the site in separate HTML, CSS, and JavaScript files.
- Preserve semantic sectioning elements and accessible names for interactive controls.
- Define repeated colors, typography, spacing, and shared values as CSS custom properties in `:root`.
- Prefer CSS Grid for page-level layouts and use the existing `768px` and `520px` breakpoints when extending mobile behavior.
- Animate only `transform` and `opacity` where possible, and retain the reduced-motion overrides.
- Keep JavaScript dependency-free and use native browser APIs.

## Design Decisions

The visual direction references editorial print production through warm paper neutrals, ink-black typography, a vermilion printing accent, subtle grain, and asymmetric compositions. Portfolio placeholders are intentionally generated in CSS so the initial project has no fragile remote image dependencies. Founder photo areas are placeholders and are designed to accept real portraits later.

## Contact Links

WhatsApp and email links contain pre-filled order prompts. When changing phone numbers or email addresses, update both the visible contact copy and every matching `wa.me`, `tel:`, or `mailto:` link in `index.html`.
