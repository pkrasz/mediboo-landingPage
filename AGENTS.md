# MediBoo Landing (Next.js)

## Goal
Build a premium marketing landing page for the MediBoo iOS app.
The project must be deployable on GitHub Pages using static export.

---

## Technical Constraints

### Deployment
- Must work with GitHub Pages.
- Use **static export only** (`output: 'export'`).
- No runtime server features.

### Forbidden
- No API Routes
- No Server Actions
- No SSR
- No server-side data fetching
- No backend dependencies

All functionality must work as a fully static site.

---

## Required Pages

- `/` — Landing page
- `/terms` — Terms of Use
- `/privacy` — Privacy Policy
- `/delete-data` — Data deletion request page

---

## Landing Page Requirements

### Primary CTAs
- App Store button (official Apple-style badge)
- Google Play button:
  - Must NOT link externally.
  - Must open a modal/overlay with darkened background.
  - Modal contains waitlist form:
    - Email input
    - Consent checkbox (recommended)
    - Clear success state after submission

### Modal UX
- Centered card layout
- Background dimmed
- Close button (X)
- Escape key closes modal
- Respect `prefers-reduced-motion`

---

## Forms

- Custom UI forms styled according to MediBoo design system.
- Use StaticForms (or similar) with plain HTML POST.
- No custom backend.
- Must be easily replaceable with another provider in the future.
- Include honeypot or captcha if feasible.

Forms required:
1. Android waitlist (modal on landing)
2. Delete data form (`/delete-data`)

---

## Analytics (GA4)

- GA4 snippet must be added globally.
- Track events:
  - `app_store_click`
  - `google_play_click` (when modal opens)
  - `waitlist_submit`

Do not use heavy analytics libraries.

---

## Footer

Footer must include links to:
- Privacy Policy
- Terms of Use
- Delete Data

Links should be visible but visually secondary.

---

## UI & Design System

The landing page must follow MediBoo iOS visual identity.

Below section will be generated from the MediBoo iOS project:

---

## MediBoo Style Tokens

### Color Tokens

- background: #F7F6F3 — default page background
- primary: #084144 — brand dark teal (headings, strong elements)
- secondary: #C5DAD8 — soft teal surfaces (cards, secondary buttons)
- accent: #E96C5B — primary CTA / action color
- text: #084144 — main text color
- muted-text: #616161 — supporting text
- border: #E1E0DD — subtle dividers and inputs
- success: #2FAE8A — confirmation states
- error: #E96C5B — reuse accent coral
- white: #FEFFFF — card background / reversed text

Optional:
- warning: #F4C542
- info: #6FAED9
- dark: #212121

---

### Corner Radius

- sm: 9px — pills, chips
- md: 15px — buttons, inputs, cards, modal

---

### Shadows

- Card: 0 2px 4px rgba(33,33,33,0.30)
- Modal: 0 8px 20px rgba(0,0,0,0.15)
- Optional icon: 0 4px 8px rgba(0,0,0,0.25)

---

### Spacing Scale

4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64px

- Base rhythm: 16px
- Compact gaps: 8px
- Section spacing: 24–32px
- Hero spacing: 40–64px

---

## Typography Scale

### Font Family

Use system sans stack:
-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", sans-serif

No custom fonts.

### Sizes

- H1 (hero): 40–48px (scaled from iOS title2 proportions)
- H2 (section): 22px
- H3 (card title / button): 17px, 600
- Body: 17px
- Body-sm: 15px
- Callout: 16px
- Meta: 12px
- Micro/legal: 11px

Line height: 1.5–1.7 for body text.

---

## Component Guidelines

### Buttons

Primary CTA:
- background: #E96C5B
- text: white
- radius: 15px
- padding: 14px vertical, 16px horizontal
- font: 17px, semibold

Secondary CTA:
- background: #C5DAD8
- text: #084144
- same sizing as primary

Press state:
- opacity: 0.9
- subtle scale: 0.99–0.96

---

### Inputs

- background: white
- text: #084144
- border: 1px solid #E1E0DD (or rgba(8,65,68,0.15))
- radius: 15px
- min-height: 48px

---

### Cards

Default card:
- background: white
- radius: 15px
- padding: 16px
- subtle card shadow

Alternate card:
- background: #C5DAD8
- no heavy borders

Chips:
- radius: 9px
- secondary fill

---

## Landing Page UI Rules

- Use warm neutral background (#F7F6F3).
- Avoid dark mode in v1.
- Keep aesthetic calm, pediatric, trustworthy.
- Soft corners everywhere (15px language consistency).
- App Store button = primary coral CTA.
- Google Play button = secondary; opens centered modal.
- Modal:
  - white card
  - radius: 15px
  - padding: 16–24px
  - shadow: 0 8px 20px rgba(0,0,0,0.15)
  - overlay: rgba(0,0,0,0.35)

- /terms, /privacy, /delete-data:
  - narrow reading width
  - dark teal headings
  - muted supporting text
  - subtle dividers

- One dominant accent per screen:
  - coral for actions
  - teal for structure
  - soft teal for surfaces
  - green only for confirmations

- Section padding:
  - 24–32px mobile
  - 40–64px desktop

Keep layout clean, spacious, and consistent with iOS design language.

---

## Performance

- Keep bundle small.
- Avoid heavy animation libraries.
- Prefer CSS animations over JS where possible.
- Optimize images.
- Use `next/image` only if compatible with static export.

---

## Code Quality

- Keep components modular.
- Keep layout reusable across pages.
- Avoid unnecessary abstractions.
- Prefer clarity over complexity.