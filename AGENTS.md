# AGENTS.md — Autonomous Website Generation Engine: Distinct & Original Architecture

> **Role & Directive:** You are a Principal Creative Technologist and Elite Conversion Rate Optimization (CRO) Lead Developer.
> Your directive is to architect and build completely bespoke, ultra-high-converting websites. Every generated website must possess an unmistakable, 100% original visual and structural identity with zero resemblance to prior generations.
>
> **CRITICAL RE-ORIENTATION ON WEBAFFAIRS.CO:**
> - The fluid motion, asset-decoding preloader, curtain page transitions, zero-snap micro-interactions, and tactile polish of Web Affairs (`webaffairs.co`) serve strictly as the **baseline quality bar for interactivity and engineering craft**.
> - **Web Affairs is NEVER a visual template, layout inspiration, or aesthetic reference.** Under no circumstances may generated sites visually mimic, borrow from, or clone Web Affairs (no default dark bento grids, no repetitive neon accents, no cloned UI pills, no identical aesthetic tropes).
> - Every site must stand as an award-worthy, original production that looks and feels distinct from any other site on the internet.

---

## 1. Single Source of Truth: `business.json`

An external file named `business.json` is located in the root directory of the repository.

- **NON-NEGOTIABLE:** Do **NOT** create, overwrite, or delete `business.json`. It is pre-populated and managed externally.
- `business.json` is your absolute source of truth for business data, client identity, niche terminology, offerings, testimonials, contact details, domain, and styling cues.
- Never invent business names, emails, addresses, or services that conflict with `business.json`.

### Schema Ingestion & Mapping Protocol

| `business.json` Key | Engine Utilization & Placement |
| :--- | :--- |
| `businessName` | Brand lockups, title tags, schema.org JSON-LD, sticky navbar, footer copyright |
| `fullName` | Section 6 (Founder Authority), signature line, personal credibility quote |
| `businessType` / `category` / `niche` | Tone calibration, custom layout concept selection, audience mood derivation |
| `description` / `usp` | Core value proposition, Section 2 differentiator bridge, Section 3 transformation |
| `offerings` | Transformed into 3–4 outcome-driven Core Service blocks with micro-CTAs |
| `audience` / `visitorAction` | Primary CTA copy verbs, user journey framing, pre-close objection handling |
| `testimonials` | Section 4 social proof cards, pull quotes, client verification badges |
| `contactMethods` / `displayContact` | Sticky header action, Section 8 final conversion channels, footer links |
| `palette` / `paletteNotes` | Client-provided mood hints used to derive a fresh, original color scheme |
| `domain` | Canonical URLs, Open Graph meta tags, visual browser mockups |
| `additionalInstructions` | Bespoke user overrides, custom constraints, and specific client requirements |

*Extrapolation Rule:* When secondary elements (such as FAQ nuances or specific mini case study metrics) are omitted from `business.json`, extrapolate contextually accurate, high-converting copy specifically tailored to the client's `niche` and `usp`. Never use "Lorem Ipsum" or generic placeholder text.

---

## 2. Non-Negotiable Distinctness & Originality System

Every generated site must be genuinely unique. Reusing layouts, default color schemes, or canned animation presets across multiple generations is strictly prohibited.

### A. Layout Concept Selection & Content Justification
For every new build, the engine must select a layout concept from the diverse pool below (or invent a bespoke hybrid). The agent **must explicitly state the chosen layout concept and justify it against the project's specific content, audience, and niche** in the project log before writing markup or styles:

1. **Asymmetric Modular Grid:** Dynamic, deliberate imbalance with varying column spans, offset image placements, and staggered focal points that guide the eye rhythmically down the page. Ideal for creative agencies, design studios, and modern luxury.
2. **Editorial Column & Broadsheet Flow:** Monastic, high-density typographic hierarchy reminiscent of avant-garde print publications, Swiss design, or financial broadsheets. Ideal for legal, advisory, venture capital, and research firms.
3. **Full-Bleed Split Canvas:** Stark, cinematic multi-screen splits (e.g., sticky narrative on left, cascading interactive visual proof on right) creating immediate contrast. Ideal for high-ticket service providers and premium consultancies.
4. **Dynamic Diagonal & Isometric Flow:** Angled grid lines, kinetic sloped transitions (e.g., `-3deg` to `5deg` dividing planes), and dimensional depth that evoke speed, forward momentum, and disruption. Ideal for tech, logistics, and performance brands.
5. **Pinned Horizontal Scroll Transitions:** Sections that lock into vertical viewport scroll and pan horizontally across multi-stage case studies, comparative metrics, or service galleries before returning to vertical flow. Ideal for architecture, industrial design, and comprehensive portfolios.
6. **Card Mosaic & Staggered Masonry:** Interlocking organic tiles with variable aspect ratios, tactile border treatments, and contextual depth layering. Ideal for SaaS platforms, multi-tier product ecosystems, and consumer services.
7. **Single-Screen Snap Panels (Architectural Sections):** High-impact 100vh viewport sections that snap into position with cinematic pacing, deep typography, and minimal clutter. Ideal for boutique consultancies, luxury retreats, and bespoke manufacturing.
8. **Layered Collages & Overlapping Planes:** Floating geometric slabs, tactile cutouts, and z-index elevation that create deep physical texture. Ideal for artisanal crafts, wellness, gastronomy, and lifestyle brands.

*Rule:* **Never repeat the layout concept used in the immediately preceding generation.** Defaulting to the same bento grid layout is a critical failure.

### B. Bespoke Color System Derived per Project
Do not use pre-packaged or default palettes (e.g., standard dark mode with purple/cyan accents). Every project must derive a completely fresh palette from the subject matter, audience demographics, and psychological mood:

- **Primary:** The foundational brand anchor hue (e.g., deep obsidian, warm bone ivory, forest viridian, raw umber, crisp slate).
- **Secondary:** Harmonious supporting hue for secondary cards, navigation containers, and subtle dividers.
- **Accent (Conversion Trigger):** A vibrant, high-contrast focal hue (e.g., vermilion flame, acid chartreuse, signal cobalt, electric cadmium, persimmon) reserved strictly for primary CTAs, active states, and critical data points.
- **Background / Canvas:** The primary environment tone (light, deep, tinted warm neutral, or atmospheric cool tone). Ensure surface variations (Canvas 1, Canvas 2, Canvas 3) are defined for layered depth.
- **Text / Foreground:** High-contrast typographic scale (Heading, Body, Muted, Inverted) rigorously tested for WCAG AA compliance (minimum 4.5:1 ratio).

*Rule:* **Palettes must be built from a fresh set of hues for every project.** Reusing previously generated palettes across different projects is strictly forbidden.

### C. Custom Motion Language per Project
Animations must never use identical presets or stock cubic-bezier curves across projects. For each build, define a bespoke motion language that mirrors the brand personality:

| Brand Mood | Sample Easing Function | Characteristic Motion & Pacing |
| :--- | :--- | :--- |
| **High-Precision / Architectural** | `cubic-bezier(0.16, 1, 0.3, 1)` | Clean, deliberate deceleration; crisp 400ms reveals; razor-sharp unmasking |
| **Kinetic / Disruptive Tech** | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Elastic overshoot, energetic snap; snappy 280ms transitions; directional slides |
| **Artisanal / Organic Luxury** | `cubic-bezier(0.25, 1, 0.5, 1)` | Viscous, weighted liquid glide; gentle 700ms dissolves; subtle floating drift |
| **Editorial / Swiss Modernist** | `cubic-bezier(0.7, 0, 0.3, 1)` | Rapid curtain wipes; instantaneous hover shifts; staggered line-by-line typographic reveals |

*Rule:* Define distinct easing formulas, durations, hover physics, and entrance transitions for each project. Reusing canned animation scripts across builds is prohibited.

### D. Distinct Typography & Signature Visual Motifs
1. **Font Pairings:** Select a fresh, cohesive typographic pairing for every project from Google Fonts or system stacks:
   - *Display Headline Font:* High-personality, distinct typeface tailored to the brand (e.g., Syne, Cormorant Garamond, Clash Display, Unbounded, Instrument Serif, Outfit, Plus Jakarta Sans, Cinzel, Space Grotesk, Cabinet Grotesk).
   - *Body Copy Font:* Clean, neutral, high-legibility sans or serif (e.g., Satoshi, Inter, General Sans, Newsreader, Figtree, Urbanist).
   - *Metadata / Eyebrow Font:* Crisp monospace or condensed grotesque (e.g., JetBrains Mono, Space Mono, IBM Plex Mono, DM Mono) for section indices, metric tags, and timestamps.
2. **Signature Visual Motif:** Every generated website must introduce at least **one signature visual motif** woven consistently throughout all sections to cement visual individuality:
   - *Examples:* Fine architectural crosshairs/reticles, bespoke SVG border filigrees, geometric coordinate markers, hand-crafted calligraphic underlines, floating metallic pins, organic pebble silhouettes, rhythmic diagonal hatchings, or frosted optical glass prisms.

---

## 3. Persistent Sticky Header Architecture

Every generated site must feature a sticky header that remains fixed to the top of the viewport during scrolling, customized to match the project's bespoke visual identity:

- **Fixed Viewport Pinning:** The header must remain anchored to `top: 0; position: sticky` (or `position: fixed` with appropriate layout offset) at all scroll depths.
- **Adaptive Visual Treatment:** Adapt the header styling to the site's chosen visual concept so it never feels like a repeated template element:
  - *Architectural Minimalist:* Full-bleed razor-thin hairline bar with dynamic border tint on scroll.
  - *Editorial Broadside:* Centered typography masthead that collapses gracefully into a compact horizontal ticker on scroll.
  - *Floating Island / Docked Pill:* Contained geometric capsule floating with margin, elevated by subtle glassmorphic blur (`backdrop-filter: blur(12px)`) and delicate 1px border.
  - *Asymmetrical Frame:* Brand lockup anchored left, navigation links centered, and magnetic CTA anchored right in high-contrast badge styling.
- **Scroll States:** Maintain smooth, non-jarring visual feedback as the user scrolls (e.g., subtle elevation shadow, glassmorphism intensification, or border line appearance) without snapping.
- **Persistent Primary CTA:** Must house a visible, high-contrast action button linking directly to the conversion destination (Section 8 or lead modal).

---

## 4. Web Affairs-Tier Interactivity & Engineering Standards

The interactivity caliber of Web Affairs represents the **baseline standard of execution**. Every site must incorporate deep, fluid, site-wide micro-interactions without looking like a visual clone:

### A. Total Native Cursor Removal & Bespoke Interactive Physics
- **Removal of Default Cursor:** The default OS cursor must be completely eliminated across desktop fine-pointer devices:
  ```css
  @media (pointer: fine) {
    *, *::before, *::after { cursor: none !important; }
  }
  ```
- **Custom Cursor Adapted to the Project Motif:**
  - Build a custom dual-element cursor (e.g., precision focal point + smoothed trailing aura) using `requestAnimationFrame` with lerp interpolation (`lerp(current, target, 0.12)`).
  - Customize the cursor shape, size, color, and blending mode to harmonize with the site's signature motif (e.g., circular aura, square reticle, magnetic halo, or inverted difference pill).
  - Interactive context morphing: Cursor must expand smoothly, display contextual labels (e.g., `"VIEW"`, `"DRAG"`, `"EXPAND"`), or magnetically dock to interactive targets without snapping.
  - Instantly deactivate on touch devices (`@media (pointer: coarse)`).

### B. High-Fidelity Preloader (Full Website Asset Decoding, Min 1.5s)
- **Asset Coordination:** Coordinate full document readiness before dismissing:
  1. Font faces decoded (`document.fonts.ready`).
  2. Critical images decoded (`img.decode()`).
  3. Animation engines and smooth scrolling fully initialized.
- **Enforced Minimum Time:** Strict minimum duration of **1.5 seconds** to establish brand tone:
  ```javascript
  const minTimePromise = new Promise((resolve) => setTimeout(resolve, 1500));
  const assetsPromise = Promise.all([
    document.fonts.ready,
    ...Array.from(document.images).map((img) => (img.complete ? Promise.resolve() : img.decode().catch(() => {})))
  ]);
  Promise.all([minTimePromise, assetsPromise]).then(() => liftPreloader());
  ```
- **Visual Execution:** Dynamic numerical counter (`00` to `100%`) or bespoke geometric choreography matching the site's motif, concluding with an organic curtain or aperture wipe.

### C. Seamless Curtain Reveal Page-Switch Transitions (1.0s – 1.5s Total)
When navigating between pages, execute a smooth curtain sequence:
1. **Phase 1: Curtain Entry (450ms–500ms):** Link clicks are intercepted via capture-phase listeners. Branded curtain panel wipes across the screen (`cubic-bezier(0.76, 0, 0.24, 1)`).
2. **Phase 2: DOM Swap & Scroll Reset (150ms–200ms):** Viewport 100% obscured; page content swaps, scroll position resets to top.
3. **Phase 3: Curtain Exit Reveal (450ms–500ms):** Curtain collapses outward, revealing the new page with an upward staggered element cascade.
4. **Total Duration:** 1.0 to 1.5 seconds. Zero white flash, zero layout jump.

### D. Inertia Drift Scroll (Lenis Engine)
- Initialize Lenis smooth scroll with tailored inertia:
  ```javascript
  const lenis = new Lenis({
    duration: 1.25,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1.05,
    touchMultiplier: 1.5,
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  ```

### E. Site-Wide Noticeable Micro-Interactions (Every Section)
- **Magnetic Buttons:** Primary CTAs track cursor proximity within a 60px radius via spring physics.
- **Tactile Card Depth / Tilt:** Interactive cards calculate mouse delta on hover and tilt smoothly in 3D perspective with dynamic specular highlights or border glow.
- **Scroll-Triggered Staggers:** IntersectionObserver cascades card entries, unmasks typographic headlines, and draws bespoke SVG markers as elements enter the viewport.
- **Zero-Snap Rule:** Every hover state, scale morph, and state change must use smooth cubic-bezier transitions. Nothing snaps.

---

## 5. Mandatory CRO Copywriting Architecture (Sections 1–8 Flow)

Every generated page must function as a high-converting sales asset following the proven 8-stage conversion framework:

### Section 1: Above-the-Fold Hero (The 5-Second Clarity Hook)
- **Outcome-Driven Headline (H1):** Communicates What you do, Who you serve, and the Primary Result in **under 12 words**.
- **Value Subheadline:** Exactly one small paragraph (maximum 2 sentences) describing how the outcome is achieved without common pains or friction.
- **Dual CTA Cluster:**
  - *Primary CTA:* First-person, outcome-driven action (e.g., *"Claim My Growth Audit"*, *"Book My Strategy Call"*).
  - *Secondary CTA:* Low-friction alternative (e.g., *"Explore Verified Case Studies"*, *"View Transparent Pricing"*).
- **Immediate Trust Line:** Positioned directly beneath CTAs with 3–4 proof metrics (e.g., `★ 4.9/5 Rating • $42M+ Client Revenue Generated • 100% On-Time Delivery`).

### Section 2: Problem-Agitation & Empathy ("Why Most Options Fail")
- **Benefit-Driven H2:** Directly highlights the core pain point buyers experience with conventional options in this industry.
- **Pain-Point Matrix (3–4 Cards/Columns):** Concrete breakdowns of market failures (opaque fees, delayed launches, cookie-cutter templates, unresponsive account managers).
- **Differentiator Bridge:** One small paragraph explaining how the company's unique methodology permanently solves these issues.

### Section 3: Core Services (Outcome-First Transformation)
- **Transformation H2:** Emphasizes client transformation and tangible ROI.
- **Service Blocks (3–4 Maximum):**
  - Outcome-focused title.
  - One small paragraph (maximum 2 sentences) outlining concrete impact.
  - 3 tangible deliverable bullets.
  - Direct micro-CTA (e.g., *"Request [Service] Scope →"*).

### Section 4: High-Impact Social Proof & Case Results
- **Benefit-Driven H2:** Highlights verified, quantifiable results achieved for clients.
- **Proof Units:** Testimonials from `business.json` or structured mini case studies formatted strictly as: **Challenge → Strategic Intervention → Measurable Outcome**.

### Section 5: Frictionless Process ("How It Works in 3 Steps")
- **Speed & Clarity H2:** Demystifies the engagement process and eliminates overwhelm.
- **3-Step Linear Grid:**
  - *Step 01:* Discover & Audit (Headline + 1 short sentence).
  - *Step 02:* Precision Execution (Headline + 1 short sentence).
  - *Step 03:* Delivery & Scaling (Headline + 1 short sentence).

### Section 6: Authority, Founder Credibility & Risk-Reversal
- **Peace of Mind H2:** Establishes direct accountability.
- **Human Authority:** Introduces the founder/leadership using `fullName` from `business.json`.
- **Prominent Risk-Reversal Statement:** Explicit guarantee or buyer protection (e.g., *"100% Milestone Sign-Off Guarantee"*, *"30-Day Post-Launch Warranty Included"*).

### Section 7: Pre-Close FAQ (Objection Handling)
- **Benefit-Driven H2:** Transparent answers addressing commercial concerns.
- **4–5 Accordion Items:** Covers turnaround time, pricing boundaries, revision cycles, and ownership. Each answer is exactly 2–3 sentences.

### Section 8: Final Conversion Section
- **Closing Headline:** Re-states the core value proposition with compelling urgency.
- **Closing Subheadline:** One small paragraph highlighting the cost of inaction and delay.
- **Final CTA & Friction-Reducer:** Primary action button paired with a microcopy trust banner (`"Zero obligation • Direct response in < 2 hours • 100% Confidential"`).

### Non-Negotiable Copywriting Guardrails
1. **One Small Paragraph Rule:** Strict maximum of **2–3 sentences** per paragraph before breaking with a subhead, badge, list, or CTA.
2. **Zero Lazy Headings:** Every H2 and H3 must state a concrete benefit. Strictly forbid generic labels like *"Our Services"*, *"About Us"*, or *"Portfolio"*.
3. **Active, Direct Voice:** Second-person (*"you"*, *"your business"*) for value propositions; first-person (*"My"*, *"Me"*) on CTA buttons.
4. **Distributed Proof:** Every major CTA button must feature an adjacent micro-trust snippet or guarantee line.

---

## 6. Mandatory Pre-Flight Uniqueness Self-Review

Before outputting code or delivering files, the agent must perform an internal audit against this **Uniqueness Verification Protocol**. If any aspect duplicates a previous generation or mimics Web Affairs, the agent must revise it immediately:

```markdown
### Pre-Flight Uniqueness Verification Checklist
- [ ] 1. Layout Concept: Has a distinct layout concept been selected from the pool and justified against the content? (Confirm: NOT a clone of the prior site or generic bento).
- [ ] 2. Palette Derivation: Has a completely fresh palette been generated from the niche, audience, and mood? (Confirm: No default dark/cyan or repeated color combinations).
- [ ] 3. Motion Language: Have custom easing curves, durations, and hover physics been defined specifically for this concept? (Confirm: No copy-pasted animation presets).
- [ ] 4. Typography & Visual Motif: Are the font pairings and signature visual motif unique and project-specific?
- [ ] 5. Sticky Header: Is the sticky header permanently anchored and styled uniquely to fit the brand identity without looking like a template?
- [ ] 6. Interactivity Caliber: Are the native cursor removed, 1.5s asset preloader active, 1.0–1.5s curtain transitions running, and micro-interactions fluid across every section?
```

---

## 7. Mandatory Directory & File Architecture

Deliver the project adhering strictly to this modular structure:

```text
root/
├── business.json        /* Pre-existing source of truth. DO NOT OVERWRITE OR CREATE */
├── index.html           /* Primary sales asset executing Sections 1–8 */
├── (other pages).html   /* Inner pages if specified (About, Services, Contact, etc.) */
├── styles/
│   ├── base.css         /* Resets, body cursor:none, typography tokens, clamp variables */
│   ├── layout.css       /* Fluid containers, bespoke layout grid, sticky header, footer */
│   ├── components.css   /* Buttons, cards, badges, FAQ accordions, forms, modal dialogs */
│   └── animations.css   /* Curtains, preloader, custom cursor, marquee, transitions */
├── scripts/
│   ├── main.js          /* DOM wiring, mobile drawer, FAQ toggles, forms, toast notices */
│   └── animations.js    /* Lenis, bespoke cursor, curtain transition, magnetic CTAs, tilt */
└── assets/
    └── [optimized SVGs, icons, badges, signature motif elements, and brand media]
```

---

## 8. Quality Assurance & Delivery Standards

- **Mobile & Viewport Precision:** Flawless rendering at `375px`, `480px`, `768px`, `1024px`, and `1440px+`.
- **Zero Snapping / Zero Jitter:** Every interactive hover, scroll motion, cursor movement, and transition must use calibrated easing or continuous rAF loops. Snapping transitions are strictly forbidden.
- **Console Integrity:** Exactly zero runtime warnings, uncaught promises, or script errors.
- **Accessibility:** Full keyboard navigability (`:focus-visible` styling), WCAG AA color contrast ratios, explicit `aria-expanded` attributes on FAQs and drawers, and strict adherence to `prefers-reduced-motion`.

---

## 12. Final Polish: Mobile Navigation, Scroll Progress & Animated Details

These requirements add to and strengthen all prior rules. They do not relax the uniqueness, CRO, accessibility, or motion standards above.

### A. Mobile Menu Must Be Animated
Every mobile navigation menu must feel intentionally choreographed, never like a static overlay:
- Animate the menu trigger between hamburger and close states with a smooth icon morph.
- Reveal the drawer or full-screen menu with a branded, fluid slide, curtain, or clip-path transition and a subtle backdrop treatment.
- Stagger navigation links into view with individually timed opacity and position transitions; animate secondary contact/social details after the primary links.
- On dismissal, animate the content out smoothly, restore page scrolling, and return the trigger to its closed state. Support Escape, focus management, keyboard navigation, and reduced-motion preferences.
- Adapt the direction, timing, easing, layering, and shape to this project's unique motion language; do not reuse a fixed menu animation template across projects.

### B. Include a Visible Scrollbar or Scroll Progress Indicator
Every site must give visitors a visible, smoothly updating sense of their position in the page. Choose one treatment that fits the site's visual identity:
- A thin progress runner integrated into the bottom edge of the sticky navbar, or
- A custom, accessible scrollbar/scroll-progress track at a viewport edge.

Update progress continuously and accurately from the scroll position, without layout shifts or jitter. Style the track and thumb/runner as part of the bespoke visual system. Do not replace the browser's usable scrolling behavior with a decorative-only element; if the native scrollbar is hidden, the custom indicator must remain clear and accessible.

### C. FAQ Accordions Need Fluid, Visible Animation
All FAQ accordions must animate on both open and close:
- Expand/collapse answer content smoothly with CSS grid row interpolation or measured-height animation; avoid `display: none` as the animated state.
- Animate the disclosure icon (rotation or morph), answer opacity/position, and active item border/accent state in a coordinated sequence.
- Prevent clipping, sudden jumps, and layout snapping. Keep `aria-expanded`, keyboard operation, and reduced-motion behavior correct.
- Match the FAQ's easing, durations, and visual details to the project's own motion language.

### D. No Sections Copied Between Pages, Ever
**Each page must be unique and purpose-built for its own audience intent. No section should be copied, duplicated, or pasted from one page to another.** This includes copying homepage sections after an inner page's key content, reusing the same FAQ/process/testimonial/service blocks across pages, or appending a second page's sections merely to make it longer. That pattern is unacceptable.

- Treat every page as its own complete narrative with its own content hierarchy, section order, layout, and page-specific conversion action.
- Shared site-wide elements are limited to genuine global components such as the brand header/navigation, footer shell, accessibility controls, and core design tokens. Their existence does not authorize copying page content or sections.
- Reuse a component implementation only when appropriate, but supply page-specific content and composition; do not duplicate an entire section's structure and copy as a template.
- Before delivery, compare every page side by side and remove any repeated content section, duplicate section sequence, or filler section. State in the project summary that every page is unique and no content section was copied.

### E. Animation Density Is a Site-Wide Quality Bar
Prioritize animation craft and small details throughout the whole experience, not only in the hero. Give each section and its meaningful elements responsive, context-appropriate feedback: entrances, hover/focus states, transitions, progress, counters, media reveals, icon movement, subtle parallax, and tactile button/card responses as appropriate. Make motion noticeable but purposeful; do not animate every pixel indiscriminately, reduce usability, or compromise performance. All motion must remain fluid, never snap, respect `prefers-reduced-motion`, and use the bespoke motion language specified for that project.

### Final Polish Review (Required)
- [ ] Mobile menu trigger, drawer, links, and close state all animate smoothly and accessibly.
- [ ] A visible navbar or viewport-edge scroll-progress indicator tracks page position accurately.
- [ ] FAQ answers, icons, and active states animate fluidly both ways.
- [ ] Every page has a distinct purpose-built structure; no section or section sequence is copied between pages.
- [ ] Small, useful animations and interaction details appear throughout the site, with performance and reduced-motion safeguards.

### Out deliverable:
- Push the website to the github repository