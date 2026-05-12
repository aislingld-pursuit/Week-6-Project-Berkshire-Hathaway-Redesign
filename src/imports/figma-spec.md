# Berkshire Hathaway Redesign — Figma Spec

Single source of truth for the Figma rebuild. Tokens, components, screen blueprints, and accessibility rules in one document. Mirrors the HTML mock (v1.6) but tightened for WCAG 2.2 AA compliance.

---

## 1. Color Tokens

All colors named for Figma color styles. Light mode is default. Night mode variants below.

### Light mode (default)

| Figma style name | Hex | Use |
|---|---|---|
| `bg/page` | `#faf7f0` | Page background (warm paper) |
| `bg/surface` | `#f2ede1` | Subtle paper-tonal surface, controls strip |
| `ink/primary` | `#1a1612` | Body text, headings |
| `ink/secondary` | `#5c554a` | Glosses, lede text, supporting copy |
| `ink/tertiary` | `#6e6655` | Captions, eyebrow text **(darkened from #8a8272 for WCAG AA)** |
| `accent/navy` | `#0d2340` | Links, primary accent |
| `accent/gold` | `#6b4f23` | Eyebrows, hairlines, signal accents **(darkened from #8b6b3a for WCAG AA)** |
| `rule/hairline` | `#d4cdb8` | Thin dividers |
| `rule/strong` | `#1a1612` | Strong dividers (same as ink/primary) |
| `warn` | `#a8531a` | Warning/error states |
| `focus` | `#0d2340` | Focus ring (uses accent/navy) |

### Night mode

| Figma style name | Hex |
|---|---|
| `bg/page-night` | `#14110c` |
| `bg/surface-night` | `#1d1a14` |
| `ink/primary-night` | `#e8dfc8` |
| `ink/secondary-night` | `#a89f88` |
| `ink/tertiary-night` | `#8a8272` |
| `accent/gold-night` | `#c9a86a` |
| `rule/hairline-night` | `#2e2a22` |

### WCAG contrast (light mode body text on `bg/page`)

| Pair | Ratio | Passes |
|---|---|---|
| ink/primary on bg/page | 14.8:1 | AAA |
| ink/secondary on bg/page | 7.4:1 | AAA |
| ink/tertiary on bg/page | 5.1:1 | AA |
| accent/navy on bg/page | 11.2:1 | AAA |
| accent/gold on bg/page | 5.6:1 | AA |

All body text now passes WCAG AA (≥4.5:1). Large text (≥18pt or 14pt bold) requires only 3.0:1.

---

## 2. Typography Tokens

Three typefaces. All free from Google Fonts. Set up Figma text styles for each role.

### Type families

| Family | Use |
|---|---|
| Fraunces (variable) | Display, headings |
| Source Serif 4 (variable) | Body, paragraphs |
| Inter (variable) | Numerics only (stat values, dates in tables) |

### Text styles to create in Figma

| Style name | Family | Size | Line height | Weight | Tracking | Use |
|---|---|---|---|---|---|---|
| `display/hero` | Fraunces | 72px | 76px | 500 | -2% | Page H1 (`Built to last another century`) |
| `display/h1` | Fraunces | 48px | 56px | 500 | -1.5% | Subpage titles |
| `display/h2` | Fraunces | 32px | 40px | 500 | -1% | Section headings |
| `display/h3` | Fraunces | 22px | 30px | 500 | -0.5% | Card titles |
| `eyebrow` | Source Serif 4 | 13px | 16px | 500 italic | +18% UPPERCASE | Section eyebrows (gold) |
| `lede` | Source Serif 4 | 20px | 30px | 400 italic | 0% | Hero lede paragraphs |
| `body/lg` | Source Serif 4 | 18px | 28px | 400 | 0% | Letter body, long-form |
| `body` | Source Serif 4 | 17px | 26px | 400 | 0% | Default body |
| `body/sm` | Source Serif 4 | 14px | 22px | 400 | 0% | Captions, glosses |
| `numeric/stat` | Inter | 28px | 32px | 600 | -1% | Large stat values |
| `numeric/table` | Inter | 15px | 20px | 500 | 0% | Tabular numerals in tables |
| `nav` | Source Serif 4 | 16px | 24px | 500 | 0% | Nav links |
| `button` | Source Serif 4 | 15px | 20px | 500 | +2% | Button labels |

Reading measure: max 65–70 characters per line for body text. Use a max-width frame constraint of ~640px on long-form text.

---

## 3. Spacing & Layout Tokens

8-point grid. Set up as Figma local variables (numbers).

| Token | Value |
|---|---|
| `space/0` | 0 |
| `space/1` | 4 |
| `space/2` | 8 |
| `space/3` | 12 |
| `space/4` | 16 |
| `space/5` | 24 |
| `space/6` | 32 |
| `space/7` | 48 |
| `space/8` | 64 |
| `space/9` | 96 |

### Radii

| Token | Value |
|---|---|
| `radius/sm` | 2px (buttons, inputs) |
| `radius/md` | 4px (cards) |
| `radius/none` | 0px (rules, hairlines) |

### Container widths

| Frame | Max width |
|---|---|
| Page container | 1240px |
| Reading measure | 640px |
| Annotated letter body | 720px (65ch) |
| Annotated letter note column | 320px (36ch) |

### Breakpoints (build frames at these widths)

| Name | Width |
|---|---|
| Mobile | 390px |
| Tablet | 768px |
| Desktop | 1280px |
| Wide | 1440px |

Build mobile + desktop minimum. Tablet optional for class scope.

---

## 4. Components

Build as Figma components with variants. Use auto-layout everywhere.

### 4.1 Button

Variants: `variant` (primary / secondary / ghost) × `state` (default / hover / pressed / focus / disabled)

- Primary: bg `ink/primary`, label `bg/page`, padding 12×24, radius 2
- Secondary: bg transparent, border 1px `rule/hairline`, label `ink/secondary`
- Ghost: no border, label `ink/secondary`
- Min height: 44px (touch target)
- Focus state: 2px outline `focus` token, offset 3px
- Disabled: 40% opacity, no pointer

### 4.2 Control button (text-size, theme)

The A−/A/A+ and Auto/Day/Night controls. Variants: `state` (default / pressed)
- Default: border 1px `rule/hairline`, label `ink/secondary`, padding 4×12
- Pressed (`aria-pressed=true`): bg `ink/primary`, label `bg/page`
- Min height: 32px (smaller than Button — these are chrome, not primary CTAs)

### 4.3 Nav link

Variants: `state` (default / hover / current)
- Default: label `ink/secondary`, border-bottom 1px transparent
- Current: label `ink/primary`, border-bottom 1px `accent/gold`

### 4.4 Input field

Variants: `state` (default / focus / error / disabled)
- Label sits **above** the field, not inside (placeholder is not a label)
- Field height: 44px
- Border: 1px `rule/hairline`
- Focus border: 2px `focus`
- Error: border `warn`, helper text below in `warn`
- Label text style: `body/sm`, color `ink/secondary`

### 4.5 Card — Company

Used in companies grid. Auto-layout vertical, gap 8, padding 24, border-top 1px `rule/hairline`.
- H3 (company name): `display/h3`
- Sector line: `body/sm` italic, `ink/tertiary`
- Description: `body`
- "Since YYYY" footer: `body/sm`, `ink/tertiary`

### 4.6 Card — News item

Two-column auto-layout: date column 120px + content column flex.
- Date: `numeric/table`, `ink/tertiary`
- H3 headline: `display/h3`
- Why-it-matters gloss: `body`, max 2 sentences

### 4.7 Card — Principle (Owner's Manual)

Two-column: numeral 48px + content flex.
- Numeral: `display/h2` in `accent/gold`, e.g. "01", "02", or roman "i", "ii"
- H3: `display/h3`
- Body: `body`

### 4.8 Card — Stat (chart stats)

Auto-layout vertical, gap 4.
- Label: `body/sm` italic, `ink/secondary`
- Value: `numeric/stat`, `ink/primary`
- Gloss: `body/sm` italic, `ink/tertiary`

### 4.9 Masthead

Frame, sticky-top, height 80, border-bottom 1px `rule/hairline`, bg `bg/page`.
- Left: wordmark "Berkshire Hathaway" in `display/h3`, with 2rem gold hairline above and small "Omaha, Nebraska · Founded 1839" line below in `body/sm`
- Right: nav list (5 links: Home, Shareholders, Companies, Reports, Owner's Manual) using Nav link component

### 4.10 Controls strip

Sits above masthead. Frame, height 40, bg `bg/surface`, border-bottom 1px `rule/hairline`.
- Three groups, gap 24: Text size (A−/A/A+), Theme (Auto/Day/Night), Preview slider
- All buttons use Control button component
- Each group labeled with small uppercase `eyebrow`-style label

### 4.11 Annotation mark

Inline span on annotated letter. Variants: `state` (default / active)
- Default: text color inherits, background `accent/gold` at 8% opacity, underline-dotted 1px `accent/gold`
- Active: background `accent/gold` at 18% opacity
- Includes superscript number to the right

### 4.12 Note card

The right-gutter editor's notes. Auto-layout vertical, gap 8, padding 16, border-left 2px transparent.
- Active state: border-left 2px `accent/gold`, bg `bg/surface`
- Number badge: 24×24 circle, `accent/gold` bg, `bg/page` text
- Body: `body/sm`, `ink/secondary`

### 4.13 Table row

For reports table. Auto-layout horizontal, padding 12 vertical, border-bottom 1px `rule/hairline`.
- Year cell: `numeric/table`, `ink/primary`
- Title cell: `body`, flex
- Filed cell: `numeric/table`, `ink/tertiary`
- Action cell: link styled `accent/navy` with arrow → (this MUST be a button/link, not plain text)

### 4.14 Fraud notice

Frame, padding 24, border-left 3px `accent/gold`, bg `bg/surface`.
- Sigil "§" at top-left in `display/h2`, `accent/gold`
- Body: `body`, with bold lead-in "A standing notice."
- Link to full notice in `accent/navy`

### 4.15 Footer

Frame, padding 64 top + 32 bottom, border-top 1px `rule/hairline`, bg `bg/page`.
- 5-column auto-layout: brand (with `<address>` block) + 4 link columns
- Bottom legal row: copyright "© 1977–2026" + privacy/terms links

---

## 5. Screen Blueprints

Six screens to build, in this order.

### Screen 1 — Home (priority 1)

Desktop 1440×~3800 (long scroll). Sections top-to-bottom:

1. Controls strip (h 40)
2. Masthead (h 80, sticky)
3. **Hero** (padding-y 96): eyebrow → H1 → lede (max 600px wide)
4. **Chart block** (padding-y 64): chart-head (H2 + gloss) → 4 stat cards in 4-col grid → SVG chart placeholder 1000×400 → caption
5. **Fraud notice** (padding-y 48)
6. **Letter excerpt** (padding-y 96): max 720px wide, centered. Eyebrow → H2 → meta (italic place + date) → salutation → 3 paragraphs → italic signature → CTA line
7. **News section** (padding-y 64): H2 → intro → 3 news cards
8. **Companies preview** (padding-y 64): H2 → intro → 6 company cards in 3-col grid
9. **Ticker row** (padding-y 32): H3 small → 4 ticker stats horizontal
10. Footer

Mobile 390×~5200: same order, single column, controls strip collapsed to disclosure.

### Screen 2 — Shareholders

Desktop 1440×~1800:
1. Controls + Masthead
2. Subpage head: eyebrow → H1 → intro
3. Principles list (6 items): roman numerals i–vi, each w/ H3 + paragraph
4. Footer

### Screen 3 — Letter Annotated (priority 2 — the standout feature)

Desktop 1440×~2400:
1. Controls + Masthead
2. Subpage head: eyebrow → H1 → meta (author + date) → toolbar (Annotations on/off toggle + helper text)
3. **Two-column grid:**
   - Left col 720px: letter body w/ inline annotation marks (8 of them)
   - Right col 320px: 8 note cards stacked, gap 24
4. Inset milestone table (within left col)
5. Postscript block
6. Letter footnav (Back to home / All shareholder materials)
7. Footer

Mobile variant: single column. Notes appear inline below their paragraph (build as separate frame to demo the reflow).

### Screen 4 — Companies

Desktop 1440×~1400:
1. Controls + Masthead
2. Subpage head
3. Companies grid: 12 company cards in 3-col grid, gap 32
4. Footer

### Screen 5 — Reports

Desktop 1440×~1200:
1. Controls + Masthead
2. Subpage head
3. Reports table: 8 rows w/ Year / Document / Filed / Action columns
4. Footer

### Screen 6 — Owner's Manual

Desktop 1440×~1800:
1. Controls + Masthead
2. Subpage head
3. 5 principle cards (01–05)
4. "A note on this site" aside block (cream wash, gold hairlines, max 600px wide)
5. Footer

---

## 6. Accessibility Rules (WCAG 2.2 AA)

Every screen must satisfy these. Document each as a Figma annotation/sticky on the canvas.

### Color & contrast
- Body text contrast ≥ 4.5:1 against background
- Large text (≥18pt or 14pt bold) ≥ 3.0:1
- UI controls (button borders, focus rings) ≥ 3.0:1
- No color-only signal. Always pair color w/ shape, label, or weight.

### Touch targets
- Minimum 44×44px for any interactive element (button, link, control, mark, toggle)

### Focus
- Visible focus indicator on every interactive element: 2px outline `focus` token, offset 3px
- Focus indicator must contrast ≥ 3.0:1 against the surrounding background

### Labels
- Every input has a visible label above the field (not placeholder-as-label)
- Every button has a visible text label OR an aria-label annotation
- Every icon has a text alternative

### Tab order (document on each frame)
- Document with numbered annotations in Figma: 1, 2, 3...
- Order: skip link → controls strip (text size → theme → preview) → masthead nav → main content (top to bottom) → footer
- No keyboard trap

### Heading hierarchy
- One H1 per screen
- No skipping levels (don't go H1 → H3)
- Headings describe the section, not just decorate

### Reading order
- Use Figma's "Show layout grids" + clear top-to-bottom auto-layout so the layer order matches the visual reading order

### Motion
- Document any animation/transition as ≤ 200ms ease, with a note "reduce when prefers-reduced-motion"

---

## 7. Figma File Structure

Single Figma file. Pages in this order:

1. **Cover** — project title, your name, date, link to live mock if hosted
2. **Tokens** — color styles, text styles, spacing variables visible as a reference page
3. **Components** — library of all 15 components above, in a grid w/ labels
4. **Screens — Desktop** — 6 frames (Home, Shareholders, Letter, Companies, Reports, Owner's Manual)
5. **Screens — Mobile** — same 6 frames at 390px
6. **Annotations** — tab order, accessibility notes, design rationale stickies
7. **Scratch** — sandbox for exploration

---

## 8. Plugins to Install

| Plugin | Use |
|---|---|
| **Figma Tokens / Tokens Studio** | Manage color + spacing tokens cleanly |
| **A11y - Color Contrast Checker** | Verify each pair hits WCAG AA |
| **Stark** | Full accessibility audit (contrast, focus order, simulators) |
| **Content Reel** | Realistic placeholder text |
| **Iconify** | If you need any icon (don't add many — frugality principle) |
| **Autoflow** | Draw arrows between frames to show user flow |

---

## 9. What This Spec Deliberately Excludes

To stay honest to the Owner's Manual principle of frugality:

- No modals, dialogs, or overlays
- No live chat, no help bubbles
- No newsletter capture
- No cookie banner beyond legal minimum
- No skeleton screens / loading shimmers
- No icon-heavy navigation
- No photographs of executives or headquarters
- No animated stock ticker
- No "Trending" / "Most read" / "Related" rails

If a future revision wants to add any of these, the spec must be amended first — they are refused on principle.
