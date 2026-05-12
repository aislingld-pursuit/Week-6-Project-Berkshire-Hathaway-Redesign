# Component Customization Exercise
## Taking Material Design Card → Berkshire Hathaway Style

### Source: Material UI Card Component

**Original Material Design specifications:**
```
Card:
- Background: #FFFFFF (elevation 1)
- Border radius: 4px
- Padding: 16px
- Shadow: 0px 2px 1px -1px rgba(0,0,0,0.2)
- Typography: Roboto
- Action buttons: Primary color #1976D2
```

**Material UI Card variants:**
- Outlined (border instead of shadow)
- Elevated (shadow depth 1-24)
- Media card (with image)
- Action card (with buttons)

---

### Target: Berkshire Hathaway Company Card

**Design requirements from figma-spec.md:**
```
Card — Company:
- Auto-layout vertical, gap 8, padding 24
- Border-top 1px rule/hairline
- H3 (company name): display/h3
- Sector line: body/sm italic, ink/tertiary
- Description: body
- "Since YYYY" footer: body/sm, ink/tertiary
```

---

## Customization Decisions

### 1. **Surface Treatment**
**Material Default:**
- White background (#FFFFFF)
- Elevation shadow for depth
- 4px corner radius

**Berkshire Adaptation:**
- Background: Transparent (uses page bg/page #faf7f0)
- **No shadow** (violates frugality principle)
- Border-top hairline instead (#d4cdb8)
- Radius: 0px (sharp corners, editorial style)

**Why:** Berkshire's "paper-first" aesthetic rejects depth illusions. The hairline border provides structure without decoration.

---

### 2. **Typography**
**Material Default:**
- Font: Roboto (geometric, neutral)
- Title: 20px/500
- Body: 14px/400
- All-caps labels

**Berkshire Adaptation:**
- Font: Source Serif 4 (serif, editorial)
- Company name: Fraunces 22px/500 (display/h3)
- Sector: Source Serif 4 14px/400 italic (body/sm)
- Description: Source Serif 4 17px/400 (body)
- Footer: Source Serif 4 14px/400 (body/sm)

**Why:** Serif fonts signal permanence and tradition. The italic sector line provides visual hierarchy without weight changes.

---

### 3. **Color Palette**
**Material Default:**
- Primary: Blue #1976D2
- Text: Black rgba(0,0,0,0.87)
- Secondary text: rgba(0,0,0,0.60)

**Berkshire Adaptation:**
- Primary text: ink/primary #1a1612
- Secondary text: ink/tertiary #6e6655
- Accent: accent/gold #6b4f23 (not used in card)
- No primary color buttons

**Why:** Muted earth tones replace saturated blues. Three ink weights create hierarchy without color.

---

### 4. **Spacing & Layout**
**Material Default:**
- Padding: 16px uniform
- Content gap: 8px
- Card-to-card spacing: 16px grid

**Berkshire Adaptation:**
- Padding: 24px vertical/horizontal
- Content gap: 8px (same)
- Card-to-card: 32px gap in 3-column grid

**Why:** Generous padding (24px vs 16px) creates breathing room. Follows 8pt grid (24 = space/6).

---

### 5. **Interactive States**
**Material Default:**
- Hover: Elevation increase (shadow deepens)
- Focus: 2px blue ring
- Active: Elevation decrease
- Ripple animation on click

**Berkshire Adaptation:**
- Hover: **None** (cards are not interactive)
- Focus: Not applicable (no card-level interaction)
- Active: Not applicable
- **No animations** (restraint principle)

**Why:** Company cards are informational, not clickable. Removing hover states prevents false affordance.

---

## Side-by-Side Comparison

### Material UI Card (Original)
```tsx
<Card elevation={1}>
  <CardContent>
    <Typography variant="h5" component="h2">
      GEICO
    </Typography>
    <Typography color="textSecondary" gutterBottom>
      Property & Casualty Insurance
    </Typography>
    <Typography variant="body2">
      One of America's largest auto insurers
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small" color="primary">
      Learn More
    </Button>
  </CardActions>
</Card>
```

### Berkshire Company Card (Customized)
```tsx
<article className="flex flex-col gap-2 p-6 border-t border-rule-hairline">
  <h3 style={{ 
    fontFamily: 'var(--font-display)', 
    fontSize: '22px', 
    lineHeight: '30px', 
    fontWeight: 500 
  }}>
    GEICO
  </h3>
  <p className="text-ink-tertiary italic" style={{ 
    fontFamily: 'var(--font-body)', 
    fontSize: '14px', 
    lineHeight: '22px' 
  }}>
    Property & Casualty Insurance
  </p>
  <p className="text-ink-primary" style={{ 
    fontFamily: 'var(--font-body)', 
    fontSize: '17px', 
    lineHeight: '26px' 
  }}>
    One of America's largest auto insurers, serving 17 million 
    policyholders with direct-to-consumer efficiency
  </p>
  <footer className="text-ink-tertiary mt-2" style={{ 
    fontFamily: 'var(--font-body)', 
    fontSize: '14px', 
    lineHeight: '22px' 
  }}>
    Since 1996
  </footer>
</article>
```

---

## What Changed: The 7 Key Transformations

| Aspect | Material Design | Berkshire Hathaway | Design Principle |
|--------|----------------|-------------------|------------------|
| **Depth** | Shadow elevation | Hairline border | Frugality (no decoration) |
| **Shape** | 4px radius | 0px radius | Editorial (sharp, paper-like) |
| **Typography** | Sans-serif (Roboto) | Serif (Fraunces/Source Serif) | Partnership voice |
| **Hierarchy** | Color + weight | Italic + weight | Restraint (minimal tools) |
| **Interaction** | Hover/ripple | None | Candor (not clickable, don't pretend) |
| **Color** | Saturated blue | Muted gold/ink | Long-term thinking (timeless) |
| **Spacing** | 16px compact | 24px generous | Owner orientation (readable) |

---

## Lessons from the Customization

### 1. **Material Design optimizes for ACTION**
- Shadows suggest clickability
- Blue buttons drive conversions
- Ripples provide feedback
- Cards are interactive by default

### 2. **Berkshire optimizes for READING**
- Borders provide structure, not depth
- No buttons to distract
- Serifs slow reading (intentional)
- Cards are content, not controls

### 3. **Design systems encode philosophy**
- Material: "Make it intuitive for any user"
- Berkshire: "Make it honest for our partners"

### 4. **Customization = Knowing what to remove**
- Removed: Shadows, radius, hover states, buttons, ripples
- Added: Hairline borders, italic sector, "Since" footer
- Changed: Typography, spacing, colors

**The insight:** Customization isn't "Material + our colors" — it's **"Material's structure, reinterpreted through our principles."**

---

## What I'd Do in Figma (Manual Steps)

If you were customizing Material UI Figma kit:

1. **Detach the Card component** (break instance)
2. **Replace color styles:**
   - Delete #1976D2 primary
   - Create ink/primary, ink/tertiary, accent/gold
3. **Replace text styles:**
   - Delete Roboto layers
   - Create display/h3, body, body/sm
4. **Remove effects:**
   - Delete shadow layer styles
   - Create hairline stroke style (1px, #d4cdb8, top only)
5. **Adjust corner radius:**
   - Set to 0 on card frame
6. **Adjust padding:**
   - Change from 16 to 24
7. **Add footer layer:**
   - New text layer "Since 1996"
   - Apply body/sm style
8. **Remove CardActions:**
   - Delete button group
9. **Save as new component:**
   - Name: "Card — Company"
   - Description: "For companies grid, non-interactive"

---

## Real-World Application

This exercise demonstrates:

✅ **How to translate between design systems**  
✅ **When to remove features (not just add)**  
✅ **How design principles drive decisions**  
✅ **The difference between decoration and structure**  

**Next time you customize a UI kit:**
1. Document the source component's purpose
2. List your design principles
3. Map each decision to a principle
4. Remove everything that doesn't serve the principle
5. Only then customize what remains

**The Berkshire lesson:** Great design isn't adding personality — it's **removing everything that isn't essential**.
