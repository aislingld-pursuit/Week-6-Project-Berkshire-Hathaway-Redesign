Continue the Berkshire Hathaway redesign Figma file. The desktop
  screens, components, and tokens are already built. This pass adds
  mobile responsive frames, a corrected hero chart, and a day/night
  comparison demo.

  Use the existing color styles, text styles, and components.
  Do not invent new tokens. Do not detach instances.

  ============================================================
  TASK 1 — MOBILE RESPONSIVE FRAMES
  ============================================================

  On the "Screens — Mobile" page, create two frames at 390px wide.

  Frame 1: "Home — mobile" (390 x auto)
    - Duplicate the desktop Home frame and resize to 390px wide
    - Let auto-layout reflow, then manually fix:
      * Controls strip: collapse to a single disclosure row.
        Replace 8 controls with one row containing the label
        "Reading preferences" and a chevron "⌃" right-aligned.
        Below it (collapsed state), the original controls live
        in a hidden auto-layout group — show them in a second
        frame variant "Home — mobile — controls open".
      * Masthead: wordmark left, hamburger "≡" right (use
        display/h3 text style for the icon character).
        Hide the nav list. Show it in a third frame variant
        "Home — mobile — menu open" as a full-width dropdown
        below the masthead with 5 stacked nav links.
      * Hero H1: step down one size to display/h1 instead of
        display/hero so it fits the narrower viewport.
      * Stat cards (chart-stats): change from 4-column grid
        to single column, stacked vertically, gap 16.
      * Companies preview: 3-column grid → single column.
      * News items: date column moves above headline instead
        of left of it. Auto-layout direction change from
        horizontal to vertical for News card instances on
        mobile.
      * Ticker row: 4 items in 2-column grid instead of single
        horizontal row.
      * All horizontal padding tightens from 64 to 16.

  Frame 2: "Letter Annotated — mobile" (390 x auto)
    - Duplicate the desktop Letter Annotated frame and resize
      to 390px wide
    - Manual fixes:
      * Two-column grid (body + notes) collapses to single
        column. Letter body now full-width (max 358px content
        after 16px horizontal padding).
      * Each Note card moves to sit immediately after the
        paragraph that contains its marker. Build this as a
        static demo: place notes 1 and 2 inline (visible),
        notes 3-8 collapsed (hidden state). This shows the
        disclosure pattern.
      * Annotation marks: remove the gold background fill on
        mobile; keep only the superscript number and the
        underline-dotted hint. Reduces visual noise on small
        screens.
      * Toolbar (Annotations on/off + helper text): the
        toolbar stays at the top but the helper text moves to
        a second line below the button.

  ============================================================
  TASK 2 — CORRECTED 60-YEAR CHART
  ============================================================

  Replace the placeholder chart frame on the desktop Home screen
  with a real SVG-style line chart drawn directly in Figma using
  the Pen tool or imported SVG.

  Frame: 1000 x 400, no background fill, no border.

  GRID LINES (use rule/hairline color, 0.5px stroke):
    - 6 horizontal lines at y = 40, 92, 144, 196, 248, 300
    - These represent log decades: $1M, $100k, $10k, $1k, $100, $10

  Y-AXIS LABELS (use numeric/table text style, ink/secondary color,
  right-aligned, x = 50):
    - y=44:  "$1,000,000"
    - y=96:  "$100,000"
    - y=148: "$10,000"
    - y=200: "$1,000"
    - y=252: "$100"
    - y=304: "$10"

  X-AXIS LABELS (use numeric/table text style, ink/secondary color,
  centered, y = 325):
    - x=60:  "1965"
    - x=207: "1975"
    - x=353: "1985"
    - x=500: "1995"
    - x=647: "2005"
    - x=793: "2015"
    - x=940: "2025"

  CHART LINE (use ink/primary stroke, 1.5px, rounded joins and caps,
  no fill on the path):
    Draw a connected polyline through these 13 points exactly:
      (60, 285.5)
      (133, 258.8)
      (207, 249.2)
      (280, 216.7)
      (353, 184.8)
      (427, 161.5)
      (500, 135.7)
      (573, 112.4)
      (647, 103.8)
      (720, 93.0)
      (793, 82.1)
      (867, 67.7)
      (940, 57.5)

  SHADED AREA UNDER THE CURVE (use accent/gold fill at 8% opacity):
    Same 13 points above, then close down to (940, 300) and
    back to (60, 300).

  ANNOTATIONS (use body/sm italic text style, ink/secondary color,
  2.5px gold dots at the marked points):
    - Dot at (60, 285.5), label "1965 · $19" placed at (66, 268)
      with a 1px gold dotted leader line from dot to label
    - Dot at (500, 135.7), label "1995 · $14,426" placed at
      (506, 118) with leader line
    - Dot at (647, 103.8), label "2008 · weathered the storm,
      still compounding" placed at (580, 86) with leader line
    - Endpoint dot at (940, 57.5) in accent/navy color (4px
      radius), label "$460,210" placed at (933, 42),
      right-aligned, using display/h3 text style in accent/navy

  CAPTION (below the chart, body/sm italic, ink/tertiary,
  right-aligned):
    "Source: Berkshire Hathaway annual reports, 1965–2025.
     Values as of year-end."

  ============================================================
  TASK 3 — DAY/NIGHT COMPARISON FRAMES
  ============================================================

  On a new page "Theme Comparison", place two copies of the
  desktop Home frame side by side.

  Frame A: "Home — day" (uses default color tokens):
    bg/page = #faf7f0
    ink/primary = #1a1612
    accent/gold = #6b4f23

  Frame B: "Home — night" (swap to night tokens):
    bg/page-night = #14110c (used as page background)
    ink/primary-night = #e8dfc8 (used for body text)
    ink/secondary-night = #a89f88
    accent/gold-night = #c9a86a
    rule/hairline-night = #2e2a22

  Place them on the canvas with a 200px gap between them.

  Above each frame, add a label using display/h3 text style:
    - Frame A label: "Day"
    - Frame B label: "Night (reading lamp)"

  Between the two frames, add a center sticky note:
    "Same design system, two palette modes. Circadian shifts
     automatically by hour in the live mock; manual override
     available via theme buttons in the controls strip."

  ============================================================
  ACCESSIBILITY CHECKS
  ============================================================

  After all three tasks complete:

  1. Verify all text on mobile frames meets WCAG AA contrast
     ratios against the new ink/tertiary (#6e6655) and
     accent/gold (#6b4f23) tokens.

  2. Confirm every interactive element on mobile is at least
     44×44px including the disclosure rows, hamburger, nav
     items in the open menu, and the on/off toggle on the
     letter screen.

  3. On the night frame, verify ink/primary-night on
     bg/page-night meets WCAG AA (computed ratio ~11:1, passes).

  4. Add a sticky note on the mobile Home frame documenting
     the tab order in the collapsed state:
       1. Skip link
       2. "Reading preferences" disclosure
       3. Wordmark (focusable as Home link)
       4. Hamburger menu button
       5+ Through hero, chart, letter, news, companies, ticker,
          footer in reading order

  ============================================================
  DO NOT
  ============================================================

  - Detach any existing component instances on desktop frames.
  - Hardcode any hex value not in the spec — use color styles.
  - Add modals, chat bubbles, newsletter prompts, or any
    pattern refused in figma-spec.md section 9.
  - Plot the chart line through arbitrary points — use the 13
    coordinates above exactly. They are computed from the
    log-scale formula y = 300 - ((log10(value) - 1) / 5) × 260
    and any deviation reintroduces the v1.6 bug.

  ============================================================
  WHEN FINISHED
  ============================================================

  List:
    - The two new mobile frame node IDs
    - The chart frame node ID on desktop Home
    - The Theme Comparison page node ID
    - Any contrast failures detected during the accessibility
      check, with the offending token pair