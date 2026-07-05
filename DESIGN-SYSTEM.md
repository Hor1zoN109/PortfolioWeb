# Barry Xu Portfolio — Content & Responsive Design System

## 1. Web content structure

1. **Hero / Welcome**
   - Positioning: Visual, Brand, AI and UI Designer
   - Short value statement
   - Animated BX logo, navigation and scroll cue
2. **Profile**
   - Concise English introduction
   - Education, focus areas and capability rail
   - Industrial design is framed as a supporting discipline
3. **Selected Work**
   - Cubeye: product + UI + brand
   - Notional: generative identity + AI + web
   - Afghanistan: data visualisation
   - Snail Dwelling: brand + UI
4. **Extended Practice**
   - Industrial design, 3D, editorial and speculative objects
5. **Contact**
   - Clear availability, email and location

The hierarchy is intentionally different from a slide portfolio: visitors see the strongest proposition first, then four complete case-study entry points, while secondary work remains discoverable without competing with the main story.

## 2. Visual language

- **Base palette:** `#050505`, `#0A0A0A`, `#F3F3EF`
- **Signal colour:** cyan `#00F3FF`, used only for status, links and key indexing
- **Lines:** white at 8–16% opacity
- **Typography:** neutral system sans for large statements; monospace for metadata and interface labels
- **Composition:** 12-column desktop grid, visible rules, large negative space, modular panels
- **Image treatment:** desaturated by default, full colour on interaction
- **Motion:** precise and restrained—logo reveal, scanning line, scroll reveal, image drift

## 3. Desktop specification

- Canvas: fluid, optimised for 1280–1920 px
- Content width: maximum 1380 px with 32 px side margins
- Grid: 12 columns
- Header: 78 px, fixed with blur after scroll
- Main section spacing: 140–160 px
- Display type: fluid 58–140 px
- Body type: 13–15 px, 1.7–1.8 line height
- Project cards: full-width feature cards plus a paired 2-column row

## 4. Mobile specification

- Breakpoints: 980 px and 720 px
- Side margin: 14 px
- Navigation: collapsible full-width panel
- Grid: single-column content; horizontal capability rail
- Hero type: 50–76 px
- Section spacing: 90–110 px
- Project media: minimum 330 px, details below image
- Dialogs: single-column content with touch-friendly controls

## 5. Accessibility and behaviour

- Semantic sections, labels and alt text
- Keyboard-friendly native project dialogs
- High-contrast text and interaction states
- Reduced-motion support
- Responsive images preserve focal areas with `object-fit`
