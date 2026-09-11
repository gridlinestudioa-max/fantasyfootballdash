# Gridline Studio — Design System

A design system for **Gridline Studio**, an independent design practice working across brand identity, editorial/print, and web & product. The brand is deliberately monochrome and editorial: two core colours (warm **Cream** and near-black **Ink**), a strict 4px grid, and typography that carries almost all of the expression. The identity centres on a square grid glyph crossed by a drafting line — structure, drawn.

This project is consumed by the compiler as a component library + token index. Consumers link one file — `styles.css` — and mount components from the `window.GridlineStudioDesignSystem_62ae2b` namespace.

---

## Sources provided

The system was built from brand artwork supplied by the client (no codebase or Figma link was given):

- `uploads/Logo Board.ai` — master logo board (not parsed; PNG exports used instead)
- `uploads/Logos_Colors.png` — the cream/ink two-colour split
- `uploads/Logos_Combonation.png` — combination lockup (glyph + wordmark)
- `uploads/Logos_Font.png` — wordmark typeface specimen
- `uploads/Logos_Lettermark.png` — GS lettermark
- `uploads/Logos_Logo Inverse.png` — cream-on-ink mark
- `uploads/Logos_Logo Main.png` — primary ink mark

Client note: *"Use colors and logos from images. I like helvetica light for body text fonts."* — honoured: body copy is Helvetica Neue **Light (300)** via the native stack.

Cleaned exports live in `assets/logos/`.

---

## Content fundamentals

How Gridline writes:

- **Voice — confident, spare, a little dry.** Short declaratives. "We draw the grid, then break it with intent." "Two colours are enough." No hype, no exclamation marks.
- **Person — "we".** The studio speaks as a collective ("We are eight designers…"); the reader is "you" only in direct CTAs ("Tell us about what you're building").
- **Casing.** Sentence case for all headings and body. UPPERCASE is reserved for tracked-out mono labels, eyebrows, and coordinates (e.g. `SELECTED WORK — 2026`, `51.5074° N / 0.1278° W`).
- **Numbers & structure.** Zero-padded indices (`01`, `02`, `03`) and grid/coordinate motifs recur as a nod to the drafting-table logo.
- **No emoji.** Ever. Iconography is line-drawn, not pictographic.
- **Punctuation.** Typographer's apostrophes and en dashes (—) used deliberately; the em dash is a favourite connective.
- **Tone examples.** Hero: "We draw the grid, then break it with intent." Capability: "Books, journals, and reports set with a typographer's attention to the grid." Footer tagline: "A design practice built on structure."

---

## Visual foundations

- **Colour.** Fundamentally two colours — Cream `#FFFCF3` and Ink `#08070C`. Everything between is a **warm neutral ramp** (`--gl-paper-0` → `--gl-ink-9`) interpolated paper→ink. Functional states (positive/caution/critical/info) are earthy and low-chroma so they never break the monochrome calm. Colour is used structurally, not decoratively.
- **Type.** Display = **Outfit** (a substitute — see below) at 500–600 with tight tracking (−3% on large display). Body = **Helvetica Neue Light (300)** at 1.6 line-height. Labels/eyebrows/captions = **Space Mono**, uppercase, tracked out 0.14–0.22em. The type does the heavy lifting.
- **Backgrounds.** Flat cream (`--surface-page`) or flat ink (`--surface-inverse`). **No gradients, no photographic hero washes, no textures.** Where imagery would sit, the UI kit uses tonal "plates" from the neutral ramp overlaid with a faint 32px **gridline** pattern — the structural motif made literal.
- **Layout.** Strict **4px spacing grid**; 1200px max content width, 40px page margins. Generous white space is a feature, not a gap to fill.
- **Borders over shadows.** The system is editorial: it leans on **hairline borders** (`--border-subtle` → `--border-ink`). Shadows exist (`--shadow-xs`→`xl`) but are soft, warm-tinted, and used sparingly (raised cards, dialogs, toasts).
- **Corner radii.** Softly rounded, echoing the logo mark's rounded square: chips/inputs at 6–10px, cards at 16px, dialogs at 24px, buttons & pills fully rounded (`--radius-full`).
- **Cards.** Cream fill, 1px `--border-default`, 16px radius, no shadow by default (`outline`). `raised` adds `--shadow-md`; `inverse` flips to ink.
- **Motion.** Precise and unfussy — short (120–360ms) fades and eases, **no bounce**. Standard ease `cubic-bezier(0.22,0.61,0.36,1)`. Dialogs fade + lift 8px; toasts slide up 12px; tab underline slides.
- **Hover states.** Primary buttons darken to `--interactive-hover`; ghost/secondary get a 5–6% ink wash; cards lift 2px and gain a border/shadow. **Press** nudges buttons down 0.5px + scale 0.99 (a small, mechanical click).
- **Transparency & blur.** Used only for the sticky header (86% cream + 10px backdrop blur) and the dialog scrim (48% ink + 2px blur). Not decorative.
- **Focus.** A soft ink focus ring (`--focus-shadow`, 3px @16% ink) plus a border shift to `--border-ink`.

---

## Iconography

- **Approach: line icons, ~1.75–2px stroke, rounded caps/joins** — matching the drafting-line quality of the logo. Icons are drawn as inline SVG paths inside components (chevron, check, close, plus, grid, info, arrow), not from an icon font.
- **No icon binary shipped.** The studio's source provided only logos, so components carry their own minimal inline SVGs. For richer product work, use **[Lucide](https://lucide.dev)** (CDN) — its 2px rounded-stroke geometry is the closest match to the house style. **Flagged substitution:** Lucide is a stand-in, not an official Gridline set.
- **No emoji, no unicode-glyph icons.** The recurring "iconographic" motifs are instead **mono coordinate/index labels** (`01`, `51.5074° N`) and the **gridline overlay** used on image plates.
- **Logos** are real PNG artwork in `assets/logos/` — always use the `Logo` component or the files directly; never redraw the mark.

---

## Components

Mounted from `window.GridlineStudioDesignSystem_62ae2b`. Each lives in `components/<group>/` with a `.jsx`, `.d.ts`, `.prompt.md`, and a group `@dsCard` thumbnail.

- **Actions** — `Button` (pill; primary / secondary / ghost / inverse; sm/md/lg), `IconButton` (square or round icon-only)
- **Forms** — `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`
- **Data** — `Badge` (6 status tones, mono uppercase), `Tag` (chip; selectable, removable)
- **Layout** — `Card` (outline / raised / inverse)
- **Navigation** — `Tabs` (underline, sliding ink marker)
- **Feedback** — `Dialog` (modal sheet), `Toast` (ink notification), `Tooltip` (hover/focus hint)
- **Brand** — `Logo` (mark / combination / lettermark, ink or cream — renders the real PNG)

Full inventory: **Badge, Button, Card, Checkbox, Dialog, IconButton, Input, Logo, Radio, Select, Switch, Tabs, Tag, Textarea, Toast, Tooltip** (16).

> Intentional additions: this was a brand-guidelines-only brief (no source component library), so a standard primitive set was authored. `Logo` is added specifically to wrap the supplied brand PNGs so consumers never redraw the mark.

---

## Font substitution (needs your input)

- **Display / wordmark:** the brand face (an *All Around Gothic*-style geometric sans, per `Logos_Font.png`) is **substituted with Outfit** (Google Fonts) — geometric, single-story `a`, heavy weights available. **Please send the licensed display font files** (`.woff2`) and I'll swap the `@font-face` + `--font-display` token.
- **Body:** per your note, body is the native **Helvetica Neue Light** stack — no webfont binary shipped. If you'd prefer a licensed Neue Haas Grotesk, send the files.

---

## Project index

- `styles.css` — entry point (import this). `@import`s everything below.
- `tokens/` — `colors.css`, `typography.css`, `fonts.css`, `spacing.css`, `radius.css`, `shadow.css`, `motion.css`
- `assets/logos/` — brand PNGs (mark, combination, lettermark; ink & cream)
- `components/` — `actions/`, `forms/`, `data/`, `layout/`, `navigation/`, `feedback/`, `brand/`
- `foundations/` — specimen cards for the Design System tab (Colors, Type, Spacing, Brand)
- `ui_kits/website/` — full click-through recreation of the Gridline Studio marketing site
- `SKILL.md` — Agent-Skill manifest for use in Claude Code

Namespace: `GridlineStudioDesignSystem_62ae2b`.
