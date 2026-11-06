---
name: Khanh N. Trinh
description: Personal portfolio of a Computer Science student building applied AI
colors:
  night-page: "#0F1115"
  graphite-surface: "#1A1D24"
  graphite-raised: "#2A2E36"
  ember-coral: "#FF7043"
  moon-text: "#EDEDED"
  ash-text: "#A1A1AA"
  slate-line: "#9AA4AE"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1.1
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
components:
  card:
    backgroundColor: "{colors.graphite-surface}"
    textColor: "{colors.moon-text}"
    rounded: "{rounded.lg}"
    padding: "16px 24px"
  chip:
    backgroundColor: "{colors.graphite-raised}"
    textColor: "{colors.moon-text}"
    rounded: "{rounded.full}"
    padding: "4px 8px"
  nav-link:
    textColor: "{colors.moon-text}"
  nav-link-hover:
    textColor: "{colors.ember-coral}"
  button-primary:
    backgroundColor: "#000000"
    textColor: "#FFFFFF"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  timeline-node:
    backgroundColor: "{colors.ember-coral}"
    rounded: "{rounded.full}"
    size: "32px"
---

# Design System: Khanh N. Trinh

## Overview

**Creative North Star: "The Night Lab"**

The site is a quiet, dark workspace. Near-black charcoal fills the page, graphite panels hold the work, and a single ember-coral light marks what matters: a result, a medal, the next thing to click. Nothing competes with the work itself; the lab is dim so the experiments glow.

Density is moderate and editorial: centred single columns up to a 72rem container, generous vertical breathing room between sections, and one idea per section. Type is a single family (Inter) carried by weight rather than by font changes. Components are calm and solid: soft-cornered surfaces, a gentle lift on hover, no gimmicks. Motion exists (entrance fades, a word-by-word tagline reveal) but should stay a supporting gesture, never the subject.

**Key Characteristics:**
- Dark-only: one theme, charcoal page with graphite surfaces.
- One accent, ember coral, used sparingly.
- One typeface, Inter, hierarchy through weight and size.
- Soft corners (8px) on surfaces, full pills on chips and buttons.
- Content-first: proof (medals, publication, research) carries the personality.

## Colors

A low-light neutral ramp with a single warm accent.

### Primary
- **Ember Coral** (#FF7043): the only accent. Timeline nodes, project icons, link and nav hover states, and at most one primary emphasis per screen.

### Neutral
- **Night Page** (#0F1115): page background and fixed navbar.
- **Graphite Surface** (#1A1D24): cards, footer, timeline panels; the default container one step above the page.
- **Graphite Raised** (#2A2E36): chips and subtle separators, one step above a surface.
- **Moon Text** (#EDEDED): headings, body copy, nav links.
- **Ash Text** (#A1A1AA): secondary text: dates, organisations, descriptions.
- **Slate Line** (#9AA4AE): timeline spine and footer text.

Token naming in `tailwind.config.ts` is inherited from an earlier light theme and reads inverted: `off-black` is the light text (Moon Text), `off-white` is the dark surface (Graphite Surface). Use the Tailwind names in code; use the names above when describing the system.

### Named Rules
**The Ember Rule.** Ember Coral is a signal, not a fill. It marks fewer than one in ten elements on any screen; if two things on a screen are coral, one of them is wrong.

**The One Theme Rule.** The site is dark only (`<html class="dark">`). Do not introduce light sections or light-theme components.

## Typography

**Display Font:** Inter (via `next/font/google`, with system-ui fallback)
**Body Font:** Inter

**Character:** One neutral grotesque, used with clear weight steps (400 body, 500 labels, 700 headings), so the work and its numbers do the talking.

### Hierarchy
- **Display** (700, 3rem, 1.1): page-defining titles such as a project header; the home tagline reveal scales 1.5rem → 3rem across breakpoints.
- **Headline** (700, 2.25rem, 1.2): page titles (Experience, CV, Portfolio, Contact).
- **Title** (700, 1.25rem, 1.4): card titles, timeline roles.
- **Body** (400, 1rem, 1.5): paragraphs and descriptions, kept to a ~65–75ch measure.
- **Label** (500, 0.875rem): nav links, dates, organisations, chips (chips at 0.75rem).

### Named Rules
**The Weight-Not-Font Rule.** Hierarchy comes from size and weight inside Inter. No second display face, no gradient text.

## Layout

Left-aligned, editorial composition inside a `max-w-6xl` (72rem) container with 16px side padding on mobile, scaling to 24–32px. Body text holds a ~60–68ch measure.

Every inner page follows the same frame (`src/components/PageShell.tsx`): a fixed navbar, a **page header** (large h1, optional one-line lede in Ash Text, optional actions, then a 1px Graphite Raised hairline), and content laid out in **bands**: a 15rem label column (sticky on desktop) beside a fluid content column, collapsing to a single column below 1024px. Inside a band, list rows use a narrower meta column (dates, categories: 8.5–11.5rem) beside the content. Rows are separated by hairlines, not cards.

Breakpoints follow Tailwind defaults (640 / 768 / 1024 / 1280px).

## Elevation & Depth

Depth comes mostly from tonal layering (Night Page → Graphite Surface → Graphite Raised) and secondarily from soft, offset drop shadows. On a near-black page shadows read faintly, so the tonal step is what actually separates a card from the page.

### Shadow Vocabulary
- **Resting card** (`box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`): project and timeline cards.
- **Hover lift** (`box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)` with `translateY(-4px)`): interactive cards on hover.

### Named Rules
**The Tone-First Rule.** Separate layers by a tonal step first; a shadow alone never defines a surface on this dark page.

## Shapes

Gently curved surfaces (8px radius) for cards, panels and images; fully rounded pills for chips, tags and buttons; circles for timeline nodes and avatars. The logo uses a 25% rounded square. No sharp corners, no clipped or angled silhouettes.

## Components

### Buttons
- **Shape:** full pill (9999px).
- **Primary:** the shimmer button on the CV page: black fill, white text, 12px × 24px padding, a thin white/10 border and a slow orbiting highlight.
- **Hover / Focus:** a slightly stronger inner glow on hover; 1px press on active. A visible focus ring is not yet defined and should be added in Ember Coral.

### Chips
- **Style:** small pills (0.75rem, 500 weight) on a faint raised tone, Moon Text.
- **State:** a "Show All (n)" chip expands hidden tags; it toggles to "Show Less".

### Cards / Containers
- **Corner Style:** 8px.
- **Background:** Graphite Surface on the Night Page.
- **Shadow Strategy:** resting card shadow, hover lift on interactive cards (see Elevation).
- **Internal Padding:** 16–24px.

### Navigation
- **Style:** fixed top bar on translucent Night Page with a hairline bottom border; logo + lowercase short name on the left; six 0.875rem/500 text links on the right.
- **States:** Ash Text at rest, Moon Text on hover; the current page is Moon Text with a 2px Ember Coral underline sitting on the bar's bottom edge (`aria-current="page"`).
- **Mobile:** below 768px a labelled 44px menu button opens a full-width list; the current page is marked with a small coral dot.

### Links to profiles
- One component (`SocialLinks`) renders every profile in `site.socials` plus email, with an icon per known network (GitHub, LinkedIn, Hugging Face, X, YouTube) and a generic link icon otherwise. It appears in the home hero, the home About band, the /about page, the footer, and as full rows on /contact. New profiles are added in `site.ts` only.

### Page header
- Large h1 (700, clamp 2.5–4rem, -0.03em), optional lede (1.125rem Ash Text, 60ch), optional actions, hairline below. Never a coloured bar under the title.

### Footer
- Hairline top border on Night Page; name and one-line role, profile links, a two-column link list (including Resume PDF), and a small copyright line.

### Experience Timeline (signature)
A single left-hand spine (1px Graphite Raised) with the date in a right-aligned column beside it. Nodes are 14px circles: filled Ember Coral for a current role, hollow Slate Line for past ones. Each entry shows title, organisation with an optional 20px logo, description (skipped when it repeats the first bullet), all bullets with short dash markers, and every tool as a chip. Nothing is hidden behind toggles.

## Do's and Don'ts

### Do:
- **Do** keep every new surface on the Night Page / Graphite Surface ramp, with Moon Text and Ash Text for copy.
- **Do** keep Ember Coral (#FF7043) for the primary button, the current-page underline, current-role nodes and small outcome icons.
- **Do** use Inter only, with 700 for headings, 500 for labels and 400 for body.
- **Do** use 8px corners on surfaces and full pills on chips and buttons.
- **Do** add a visible Ember Coral focus ring to anything interactive.

### Don't:
- **Don't** reintroduce the legacy light neumorphic `.btn` (#F5F5F5 fill with white highlight shadows) from `experience/_components/styles/card.css`; it belongs to the old light theme.
- **Don't** use the unused `highlight-teal` (#008080) or `highlight-purple` (#673AB7) tokens; the system has one accent.
- **Don't** add light-theme sections or components; the site is dark only.
- **Don't** use gradient text or a second typeface.
- **Don't** rely on shadows alone to separate a surface from the page.
- **Don't** wrap list content in cards or put a thick coloured bar under page titles; use hairlines and the band layout.
- **Don't** hide content behind accordions or info overlays; recruiters skim.
