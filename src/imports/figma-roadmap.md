# Figma Roadmap — Berkshire Hathaway Redesign

Step-by-step manual path for rebuilding the HTML mock in Figma. Designed for ~6 hours of focused work, split into 4 sessions. No AI required.

The class wants to see *you* using Figma — auto-layout, components, styles, tab order. This roadmap teaches each muscle in the right order.

---

## Session 1 — Setup & Tokens (60 min)

Goal: Empty file ready to receive components.

### 1.1 Create the file (5 min)
- Open Figma → File → New design file
- Name it: `Berkshire Hathaway Redesign — v1`
- Create six pages (right sidebar → "+"):
  1. Cover
  2. Tokens
  3. Components
  4. Screens — Desktop
  5. Screens — Mobile
  6. Annotations

### 1.2 Install plugins (10 min)
Right-click canvas → Plugins → Manage plugins:
- **Stark** — for accessibility checks
- **A11y - Color Contrast Checker** — quick contrast verification
- **Tokens Studio for Figma** (optional, can use native styles instead)
- **Content Reel** — placeholder text
- **Autoflow** — draw user-flow arrows

### 1.3 Set up fonts (5 min)
On the Tokens page, drop a Text layer and verify these fonts load:
- Fraunces (variable)
- Source Serif 4 (variable)
- Inter (variable)

If any are missing, install Figma's font installer (Mac/Windows app — it pulls Google Fonts automatically). Restart Figma if needed.

### 1.4 Create color styles (15 min)
On the Tokens page, create a 12-row grid. For each row in `figma-spec.md` section 1:
1. Draw a 200×80 rectangle
2. Apply the hex color
3. With it selected, in right sidebar → Fill → click the 4-dot icon → "+ Create style"
4. Name exactly as in the spec (e.g., `bg/page`, `ink/primary`)

The `/` in names creates folders — Figma will group them.

Repeat for all 11 light-mode colors. Then repeat for the 7 night-mode colors below.

### 1.5 Create text styles (20 min)
For each row in spec section 2:
1. Draw a Text layer
2. Set font + size + line height + weight per spec
3. With it selected, Text settings → click the 4-dot icon → "+ Create style"
4. Name exactly as in spec (e.g., `display/hero`, `body/lg`)

13 styles total. Type "Sample" into each so you can see the proportions.

### 1.6 Create spacing variables (5 min)
File → Local variables (right sidebar gear icon → "Local variables")
- Create a collection called "Spacing"
- Add 10 number variables: `space/0` through `space/9` with values 0, 4, 8, 12, 16, 24, 32, 48, 64, 96
- Create a second collection "Radius": `radius/sm`=2, `radius/md`=4, `radius/none`=0

**End of session 1 checkpoint:** Tokens page shows all colors as swatches w/ named styles, all 13 text styles defined, spacing variables created.

---

## Session 2 — Components (90 min)

Goal: All 15 components built on the Components page, ready to drop into screens.

### Build order (do exactly this order — later components reuse earlier ones)

1. **Button** (15 min) — primary, secondary, ghost × 5 states
2. **Control button** (10 min) — for text-size and theme toggles
3. **Nav link** (5 min)
4. **Input field** (10 min) — label above, focus state, error state
5. **Stat card** (5 min)
6. **Card — Company** (5 min)
7. **Card — News** (5 min)
8. **Card — Principle** (5 min)
9. **Annotation mark** (5 min) — inline, two states
10. **Note card** (5 min)
11. **Table row** (5 min)
12. **Fraud notice** (5 min)
13. **Masthead** (5 min)
14. **Controls strip** (5 min)
15. **Footer** (5 min)

### Universal rules for every component

- **Use auto-layout.** Shift+A on a frame. Set gap, padding, alignment. Don't position elements manually.
- **Use named styles.** Never type a hex code; always pick from the style picker. Same for text — never type a font size, always pick a text style.
- **Make variants for states.** Use "Add variant" in the right sidebar after creating the main component.
- **Name variants `property=value`.** For Button: `variant=primary, state=default`, etc.

### Building Button (example walkthrough — apply same pattern to others)

1. Draw a frame, name it "Button/primary-default"
2. Add a Text layer inside, write "Button label", apply `button` text style
3. Set frame to auto-layout: padding 12 vertical, 24 horizontal, gap 8 (center alignment)
4. Apply fill: `ink/primary` style
5. Apply text color: `bg/page` style
6. Set radius: bind to `radius/sm` variable
7. Set min height: 44px (this is your touch target)
8. Right-click frame → Create component
9. With component selected, click "Add variant" in right sidebar
10. Rename variants to "variant=primary, state=default" and "variant=primary, state=hover" etc.
11. For each state, change the relevant property:
    - `state=hover`: bg slightly lighter (use `ink/secondary`)
    - `state=focus`: add 2px outline using `focus` style, offset 3px
    - `state=disabled`: 40% opacity
12. Add a second property "variant" with values primary / secondary / ghost
13. Build out the matrix (5 states × 3 variants = 15 cells)

**End of session 2 checkpoint:** Components page shows 15 named components in a grid, each w/ visible variants. Drop one into the Scratch space to test that auto-layout responds to text changes.

---

## Session 3 — Desktop Screens (180 min)

Goal: 6 desktop frames at 1440px wide, built from components.

### 3.1 Set up the frames (10 min)
On "Screens — Desktop" page:
- Create 6 frames named: Home, Shareholders, Letter Annotated, Companies, Reports, Owner's Manual
- Each at 1440px wide, height auto (will grow as you add content)
- Apply `bg/page` color style as fill
- Set auto-layout vertical, gap 0, padding 0 (sections handle their own padding)

### 3.2 Build Home (60 min) — the most important screen

Use components ONLY. If you find yourself drawing a rectangle from scratch, stop — go back to Components page and check if you missed one.

Section order (drag in from Components page, in this order):
1. Controls strip instance
2. Masthead instance (set position to "sticky" using Figma's new sticky behavior, or just leave as normal)
3. **Hero section** — manually build:
   - Container frame, auto-layout vertical, padding 96 vertical, 64 horizontal, gap 24
   - Eyebrow text ("Sixty years of compounding") in `eyebrow` style, `accent/gold` color
   - H1: "A company built to last another century." in `display/hero`. Make "another century" italic using `accent/gold`.
   - Lede paragraph in `lede` style, max 600px wide
4. **Chart block:**
   - H2 + gloss row (flex auto-layout, justify space-between)
   - 4-column grid of Stat card components (use the data from spec)
   - SVG placeholder frame 1000×400 (just a bordered rectangle for now, label it "Chart — see spec")
   - Caption text below in `body/sm` italic, right-aligned
5. **Fraud notice** instance
6. **Letter excerpt** — manually build:
   - Container max 720px wide, centered
   - Eyebrow → H2 → meta row → salutation in italic → 3 body paragraphs in `body/lg` → italic signature → CTA line
7. **News section** — H2 + intro + 3 News card instances stacked
8. **Companies preview** — H2 + intro + 6 Company card instances in 3-col grid
9. **Ticker row** — flex auto-layout, 4 stat groups
10. Footer instance

Save every 10 minutes (Ctrl+S / Cmd+S).

### 3.3 Build the other 5 screens (90 min — ~18 min each)

Follow spec sections 5.2 through 5.6 in order. Use the same discipline: components only, named styles only.

For the **Letter Annotated** screen, the two-column grid is the centerpiece. Build it as:
- Outer frame, auto-layout horizontal, gap 48
- Left column 720px (letter body)
- Right column 320px (notes column, auto-layout vertical, gap 32)
- Inline annotation marks within paragraphs: use the Annotation mark component (place inline by setting paragraph text frame to "Wrap" and dropping the mark in line)

### 3.4 Final desktop polish (20 min)
- Walk through each screen top-to-bottom
- Check: every text element uses a named text style (not a custom override)
- Check: every fill uses a named color style
- Check: every interactive component (button, link) is at least 44px tall
- Check: visual hierarchy — H1 dominant, H2 secondary, H3 supporting
- Run Stark contrast checker on each screen — fix any failures

**End of session 3 checkpoint:** 6 desktop frames complete, all using components and styles, all passing Stark contrast.

---

## Session 4 — Mobile + Annotations (90 min)

Goal: 2 mobile frames + annotation overlay.

### 4.1 Mobile Home (30 min)
On "Screens — Mobile" page, create a 390px wide frame called "Home — mobile".

Approach: instead of rebuilding from scratch, duplicate the desktop Home frame, then:
- Resize to 390px wide
- Each section's auto-layout should reflow (this is why we used auto-layout everywhere)
- Manual fixes you'll need:
  - Controls strip → collapse to a single disclosure ("Reading preferences ⌃")
  - Masthead → wordmark left, hamburger right (use a simple "≡" character in `display/h3`)
  - Stat cards → stack vertically, single column
  - Companies grid → single column
  - News date column → stack above content instead of left of it

### 4.2 Mobile Letter Annotated (30 min)
- Duplicate the desktop Letter frame
- Resize to 390px
- The two-column grid: collapse to single column
- Each note card moves to sit immediately after its paragraph (build this as a separate frame to demo the reflow behavior)
- Annotation marks stay inline; tapping reveals the note inline as a disclosure

### 4.3 Accessibility annotations overlay (30 min)
On the "Annotations" page:

1. Copy the Home desktop frame in
2. Add numbered sticky-note callouts (use Figma's comment tool or just drop circle + number components) showing tab order:
   - 1: Skip link
   - 2-4: Controls strip (text size buttons)
   - 5-7: Theme buttons
   - 8: Preview slider
   - 9-13: Masthead nav (5 links)
   - 14: H1 (heading, not focusable — but document it)
   - 15+: continue through sections
3. Add a separate cluster of stickies on the side documenting:
   - Color contrast ratios for any non-obvious pair
   - Heading hierarchy check ("H1 → H2 → H3 — no skips")
   - Focus indicator note ("All interactive: 2px outline, offset 3px, color = focus token")

Repeat for one mobile frame.

---

## Final Checklist Before Submission

| Item | Done? |
|---|---|
| Tokens page shows all 18 color styles named per spec | |
| Tokens page shows all 13 text styles named per spec | |
| Spacing and radius variables created | |
| 15 components built with auto-layout and variants | |
| 6 desktop screens, each using components (no detached instances) | |
| 2 mobile screens (Home + Letter minimum) | |
| Cover page has title, your name, date | |
| Tab order annotated on Home (desktop and mobile) | |
| Stark contrast checker passes on all desktop screens | |
| No hardcoded hex colors (everything uses named styles) | |
| No hardcoded font sizes (everything uses text styles) | |
| One H1 per screen, no level-skipping | |
| All interactive elements ≥ 44×44px | |
| Visible focus state designed on at least Button + Nav link + Input | |
| Reading-flow arrows drawn between screens using Autoflow plugin | |

---

## What to Show During Class Presentation

1. Open the Cover page → state the project in one sentence
2. Open the Tokens page → "Everything in this file uses these tokens. No exceptions."
3. Open the Components page → demonstrate one component (Button), show variants, explain why touch targets are 44px
4. Open Desktop Home → walk through visual hierarchy: chart-as-hero, letter-as-letter, frugality (point out what's NOT there)
5. Open Letter Annotated → this is your standout feature. Demo the two-column grid, point out the gold marks, explain the on/off toggle for editor's notes
6. Open Mobile Home → show the same content reflowed; the auto-layout did most of the work
7. Open Annotations page → "Here's the tab order, here's the contrast audit, here's the WCAG AA pass"

End with: "The design philosophy is the synthesis of Apple HIG and Buffett's Owner's Manual — restraint as candor, frugality as style. Every decision is traceable to one of seven paired principles in the spec."

That's the win.

---

## Time Budget Summary

| Session | Time | Output |
|---|---|---|
| 1. Setup + Tokens | 60 min | File scaffolded, 18 colors + 13 text styles + variables |
| 2. Components | 90 min | 15 components w/ variants |
| 3. Desktop Screens | 180 min | 6 fully-built desktop frames |
| 4. Mobile + Annotations | 90 min | 2 mobile frames + tab-order overlay |
| **Total** | **7 hr** | Class-ready Figma file |

If you have less time: cut sessions 4 to just Home mobile + annotations on Home only (saves 60 min). Drop to 6 hours.

If you have even less: cut the Reports and Companies screens, build only Home + Shareholders + Letter Annotated + Owner's Manual (the four that matter most for the pitch). Saves 36 min.

Minimum viable for class: Home + Letter Annotated + tab-order annotations. ~3 hours.
