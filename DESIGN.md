---
name: Khanh N. Trinh
description: Personal portfolio of a Computer Science student building applied AI
colors:
  night-page: "#0F1115"
  graphite-surface: "#1A1D24"
  graphite-raised: "#2A2E36"
  ember-coral: "#FF7043"
  ember-coral-hover: "#FF8A65"
  moon-text: "#EDEDED"
  ash-text: "#A1A1AA"
  slate-line: "#9AA4AE"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 8vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
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
  button-primary:
    backgroundColor: "{colors.ember-coral}"
    textColor: "{colors.night-page}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.ember-coral-hover}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.moon-text}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
    height: "48px"
  chip:
    backgroundColor: "{colors.graphite-raised}"
    textColor: "{colors.moon-text}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  nav-link:
    textColor: "{colors.ash-text}"
  nav-link-active:
    textColor: "{colors.moon-text}"
  source-link:
    textColor: "{colors.moon-text}"
  logo-mark:
    backgroundColor: "{colors.graphite-surface}"
    rounded: "{rounded.md}"
    size: "40px"
  timeline-node-current:
    backgroundColor: "{colors.ember-coral}"
    rounded: "{rounded.full}"
    size: "14px"
---

# Design System: Khanh N. Trinh

## Overview

**Creative North Star: "The Night Lab"**

The site is a quiet, dark workspace. Near-black charcoal fills the page, graphite tones mark the rare raised surface, and a single ember-coral light marks what matters: the resume, the current role, a result. Nothing competes with the work; the lab is dim so the experiments glow.

The composition is editorial and left-aligned: a 72rem container, a sticky label column beside the content on desktop, rows separated by hairlines rather than boxed in cards. Hierarchy comes from one typeface (Inter) carried by size and weight. The home page leads with the person (name as the display line, a one-line role, what Khanh is looking for, then the resume) before any claims. Motion is a short entrance stagger and small hover shifts, never the subject.

**Key Characteristics:**
- Dark only: one theme, charcoal page, graphite tones for chips and small marks.
- One accent, Ember Coral: one coral fill per screen, small coral marks allowed.
- One typeface, Inter; hierarchy through weight and size.
- Hairlines and bands, not cards.
- Proof carries the personality, and every claim that can link to its evidence does.

## Colors

A low-light neutral ramp with a single warm accent.

### Primary
- **Ember Coral** (#FF7043): the one accent. The filled primary button (Resume), the current-page underline in the nav, filled timeline nodes for current roles, small outcome icons in Selected work, the focus ring, and text selection. **Ember Coral Hover** (#FF8A65) is the primary button's hover fill only.

### Neutral
- **Night Page** (#0F1115): page background, navbar (translucent), footer.
- **Graphite Surface** (#1A1D24): the rare raised area: logo-mark tiles, image placeholders.
- **Graphite Raised** (#2A2E36): every hairline and divider, chip fills, the secondary button's border.
- **Moon Text** (#EDEDED): headings, names, emphasis, link text.
- **Ash Text** (#A1A1AA): body copy, dates, organisations, ledes, resting nav links.
- **Slate Line** (#9AA4AE): tertiary text (tool lists, the home tagline), underline colour on evidence links (at 50%), hollow timeline nodes, the secondary button's hover border.

Token naming in `tailwind.config.ts` is inherited from an earlier light theme and reads inverted: `off-black` is Moon Text, `off-white` is Graphite Surface, `light-grey` is Graphite Raised, `dark-grey` is Ash Text, `cool-grey` is Slate Line, `highlight-orange` is Ember Coral, `page` is Night Page. Use the Tailwind names in code; use the names above when describing the system.

### Named Rules
**The Ember Rule.** Ember Coral fills at most one element per screen, and that element is the primary action. Small coral marks (outcome icons, current-role nodes, the active-nav underline, focus rings) are allowed because they signal state, not emphasis. A second coral fill on one screen is always wrong.

**The One Theme Rule.** The site is dark only (`<html class="dark">`). Do not introduce light sections or light-theme components.

## Typography

**Display Font:** Inter (via `next/font/google`, with system-ui fallback)
**Body Font:** Inter

**Character:** One neutral grotesque with clear weight steps (400 body, 500 labels, 600 titles, 700 headings), so the work and its numbers do the talking.

### Hierarchy
- **Display** (700, clamp 2.75–5.5rem, 0.98, -0.035em): the home page's h1, which is the owner's name. Nothing else uses this size.
- **Headline** (700, clamp 2.5–4rem, 1.02, -0.03em): inner page titles in the page header (Experience, Moments, CV, Contact).
- **Section heading** (700, 1.5–1.875rem, tight tracking): band labels and section titles such as a year on Moments or "Selected work".
- **Title** (600, 1.25rem → 1.5rem at sm, -0.015em): row titles: a role, a project, a moment.
- **Body** (400, 1rem, 1.625): descriptions and bullets in Ash Text, held to a 60–68ch measure. Ledes and the home intro step up to 1.125–1.25rem.
- **Label** (500, 0.875rem): nav links, dates, organisations, evidence links. Chips drop to 0.75rem. Dates use tabular numerals.

### Named Rules
**The Weight-Not-Font Rule.** Hierarchy comes from size and weight inside Inter. No second display face, no gradient text, no monospace costume.

**The Name-First Rule.** On the home page the largest type is the owner's name. A slogan or motto never takes the display line; the tagline "Code. Create. Inspire." sits as a small Slate Line label at the foot of the first screen.

## Layout

Left-aligned editorial composition inside a `max-w-6xl` (72rem) container, with 16px side padding on mobile, 24px at sm and 32px at lg.

**Home first screen:** a full-viewport column, vertically centred, in reading order: name (display), intro (Ash Text, 34rem measure), the goal line (Moon Text, 500), then the action row (primary + secondary button), then up to four proof points in a two-column grid (each topped by a hairline), then profile links with the tagline at the right end of the same row. The action row must sit above the fold at 375×812 (currently at about 323px) and well inside the first screen on desktop. The sonar illustration sits behind the content on the right from 1280px up.

**Inner pages** share one frame (`src/components/PageShell.tsx`): fixed navbar; a **page header** (headline h1, optional lede at 60ch in Ash Text, optional actions, then a hairline); then content in **bands**: a 15rem label column (sticky at `top-28` on desktop) beside a fluid content column, collapsing to one column below 1024px. Inside a band, list rows put a narrower meta column (dates, places: 8.5–11.5rem) beside the content. Rows are separated by hairlines, never by cards.

**Rhythm:** about 48px of vertical padding per band, 32px between rows within a band, 4–16px inside a row. More space above a heading than below it.

Breakpoints follow Tailwind defaults (640 / 768 / 1024 / 1280px).

## Elevation & Depth

The system is flat. Depth comes from tonal steps (Night Page → Graphite Surface → Graphite Raised) and from 1px Graphite Raised hairlines; no shipped page uses a drop shadow. The one translucent layer is the fixed navbar (Night Page at 75–90% with a backdrop blur), which exists so content scrolling beneath stays legible, not as decoration.

### Named Rules
**The Tone-First Rule.** Separate layers with a tonal step or a hairline. A shadow alone never defines a surface on this dark page, and a new component does not get one by default.

## Shapes

Gently curved corners (8px) on images and the few raised areas; 6px on logo marks; full pills on buttons and chips; circles for timeline nodes and the about-page portrait. The site logo uses a 25% rounded square. No sharp corners, no clipped or angled silhouettes.

## Components

### Buttons
- **Shape:** full pill (9999px), at least 48px tall.
- **Primary:** Ember Coral fill, Night Page text, 600 weight, a leading download icon when it opens the resume. Padding 12px × 20px on phones, 24px from sm. One per screen (The Ember Rule).
- **Secondary:** transparent with a 1px Graphite Raised border and Moon Text, 500 weight, a trailing arrow that nudges 2px right on hover. The border lightens to Slate Line on hover.
- **Small secondary** (Contact page actions such as Copy address): the same outline style at 0.875rem with 10px × 20px padding.
- **Focus:** every interactive element shares one ring: a 2px Ember Coral outline offset 4px, shown on `:focus-visible` only.

### Evidence links (signature)
The quiet outbound link that lets a recruiter check a claim (`src/components/SourceLink.tsx`): Label size, Moon Text, underlined in Slate Line at 50% with a 4px offset, the underline warming to Ember Coral on hover, followed by a small external-link icon in Ash Text and a screen-reader note that it opens a new tab. A vertical padding trick gives it about a 36px hit area without changing the layout. Used under Selected work rows and Experience entries ("Read the paper"), and on a home proof point's title when that point has an `href`. Only real URLs the owner supplies go here.

### Chips
- **Style:** small pills (0.75rem, 500) on Graphite Raised with Moon Text, 4px × 10px. Used for tools on Experience entries.

### Proof points (home)
Up to four items, each a hairline over a 600-weight Moon Text title and a one-line Ash Text detail at 0.875rem. Two columns from 640px.

### Navigation
- **Style:** fixed top bar on translucent Night Page with a hairline bottom border; logo + lowercase short name on the left; six 0.875rem/500 links on the right.
- **States:** Ash Text at rest, Moon Text on hover; the current page is Moon Text with a 2px Ember Coral underline on the bar's bottom edge (`aria-current="page"`).
- **Mobile:** below 768px a labelled 44px menu button opens a full-width list; the current page carries a small coral dot. A "Resume (PDF)" item closes the list, separated by a hairline. Escape closes the menu.

### Page header
- Headline h1, optional lede (1.125rem Ash Text, 60ch), optional actions, a hairline below. Never a coloured bar under the title.

### Experience timeline (signature)
A single left spine (1px Graphite Raised) with the date in a right-aligned column beside it. Nodes are 14px circles: filled Ember Coral for a current role (with a screen-reader "current role"), hollow Slate Line for past ones. Each entry shows title, organisation with an optional 20px logo, description (skipped when empty or when it repeats the first bullet), every bullet with a short dash marker, an optional evidence link, then every tool as a chip. Nothing is hidden behind toggles.

### Moments timeline
Moments are grouped by year in bands (the year is the sticky label) and listed together, newest first, separated by faint hairlines; they are never revealed one per screen. A moment's optional image has a kind: a **logo** renders as a 40px mark on a Graphite Surface tile beside the title; a **photo** renders at 5:4, cropped to fill, in a 17rem column to the right on desktop and full width below the text on phones. Every image carries real alt text.

### Profile links
One component (`SocialLinks`) renders every profile in `site.socials` plus email, with an icon per known network and a generic link icon otherwise. It appears in the home first screen, the /about page, the footer, and as full rows on /contact.

### Footer
Hairline top border on Night Page; name and one-line role, profile links, a two-column link list (including Resume PDF), and a small copyright line.

## Do's and Don'ts

### Do:
- **Do** keep every new surface on the Night Page / Graphite ramp, with Moon Text and Ash Text for copy.
- **Do** keep one coral fill per screen (the primary action); small coral marks are fine for state.
- **Do** use Inter only, with 700 headings, 600 titles, 500 labels and 400 body.
- **Do** separate rows with Graphite Raised hairlines and lay inner pages out in bands.
- **Do** give every interactive element the shared Ember Coral focus ring and at least a 44px touch target on phones.
- **Do** link a claim to its evidence with an evidence link whenever the owner has supplied a URL.
- **Do** keep the home action row above the fold on a 375×812 phone.

### Don't:
- **Don't** put a slogan or eyebrow label above or in place of the name on the home page.
- **Don't** add a second coral-filled element to a screen.
- **Don't** add drop shadows, glows or card stacks; this system is flat.
- **Don't** reintroduce the legacy light neumorphic `.btn` or the card styles in `experience/_components/styles/card.css` and `portfolio/_components/styles/card.css`; they belong to the old light theme.
- **Don't** use the unused `highlight-teal` (#008080) or `highlight-purple` (#673AB7) tokens.
- **Don't** use gradient text, a second typeface, or emoji in place of icons.
- **Don't** wrap list content in cards, put a thick coloured bar under a page title, or hide content behind accordions, overlays or one-per-screen scroll reveals.
- **Don't** let an entrance animation start from fully invisible; it starts at 40% opacity so content never sits hidden.
