# Maselko Design System

A design system for **Маселко (Maselko)** — an Uzbek family-food brand
(maselko.uz) making premium butter, ketchups and sauces. Tagline: **«для всей
семьи»** (*for the whole family*). Warm, appetizing, homey, traditional yet modern.

## Source material
- `uploads/Maselko-Brand Guidelines-2025 Print Ver 3_compressed.pdf` — the 2025
  brand book (42 pp., Russian). Colors were sampled directly from its vector
  fills; product, lifestyle and icon imagery were extracted from its embedded
  photos into `assets/`. The book covers print/POS (business cards, flyers,
  shelf-talkers, wobblers, packaging), apparel, social and presentation layouts.

> ⚠️ **Substitutions to confirm with the brand owner** (see Caveats):
> the original brand **typeface** and **vector logo** are not recoverable from
> the supplied (flattened, iLovePDF-compressed) PDF. Onest is used as the type
> substitute and the wordmark is recreated in CSS.

---

## Brand at a glance
- **Products:** sliced butter 72 / 80 / 82 %, ketchups (к шашлыку, чили,
  томатный), sauces. Family staples.
- **Market:** Uzbekistan (UI copy is in Russian; prices in сум).
- **Personality:** warm, generous, trustworthy, family-first, a little
  traditional (Uzbek bread/non, shared tables) but clean and confident.

---

## CONTENT FUNDAMENTALS
How Maselko writes:
- **Language:** Russian (Uzbek market). Keep copy in Russian for product surfaces.
- **Voice:** warm, familial, plain-spoken. Speaks about *family*, *home*, *the
  table*. Sells trust and everyday warmth, not hype.
- **Person:** inclusive **«мы / вся семья»** ("we", "the whole family"); addresses
  the reader gently. Avoids aggressive second-person commands.
- **Casing:** Headlines are often set **UPPERCASE** for impact (e.g. the wordmark,
  «ЗАГОЛОВОК ТЕМЫ»). The tagline **«для всей семьи»** is set lowercase, tracked,
  almost always paired with the logo. Body is sentence case.
- **Tone examples:** *«Вкус, которому доверяет вся семья»*, *«Тёплые моменты
  начинаются на кухне»*, *«для всей семьи»*. Short, evocative, food- and
  family-centric. Product names are matter-of-fact: *«Масло сливочное 72%»*,
  *«Кетчуп к шашлыку»*.
- **Emoji:** none. The brand never uses emoji. Use the line-art IconCircle motif
  instead of emoji or generic UI glyphs.
- **Numbers:** fat-percentages (72 / 80 / 82 %) are a hero attribute — feature
  them prominently, in the display weight, in brand red.

---

## VISUAL FOUNDATIONS
- **Color:** a warm, edible palette. **Brick/wine red `#921E17`** is the primary
  (wordmark, headlines, CTAs); **butter gold `#FFCD82`** and **cream `#F7E4CB`**
  are the supporting surfaces; **near-black ink `#0F0E0E`** for text. A brighter
  **`#E22B19`** red adds energy. Backgrounds are cream — never stark white for
  hero areas. See `tokens/colors.css`.
- **Type:** one geometric-grotesque family (Onest, substitute). Display/headlines
  are heavy (800–900), tight tracking, frequently uppercase — echoing the
  МАСЕЛКО wordmark. Body is regular/medium, readable. No serif.
- **Wordmark:** bold uppercase **МАСЕЛКО®** with the lowercase tracked tagline
  **«для всей семьи»** beneath. Also appears as a round **gold seal badge**.
- **Signature motifs:**
  1. **The butter ribbon** — a single, continuous, hand-drawn brick-red line that
     loops across cream fields (covers, social, hero areas).
  2. **The ghost wordmark** — an oversized outlined МАСЕЛКО (or single «М») used
     as a low-opacity background element, bleeding off the edge.
  3. **The gold disc + line icon** — see Iconography.
- **Backgrounds:** flat cream or flat brand-red fields; full-bleed warm
  photography. No gradients as fills (only photo scrims). No textures/patterns
  beyond the ribbon line.
- **Photography:** warm, candid, natural light. Family and home moments
  (cooking together, breakfast, shared meals), traditional Uzbek elements (non
  bread, patterned cloth), and clean red/cream packshots. Appetizing, never cold.
- **Corner radii:** soft and friendly — cards `--radius-lg` (18px), pills for
  buttons/badges, full circles for badges/avatars/icon discs.
- **Cards:** white (or cream/gold/brand) surface, generous padding, **warm-tinted
  soft shadow** (red-based, e.g. `0 2px 8px rgba(94,18,13,.10)`) — never a cold
  grey shadow. No hard borders by default; hairline `--border-soft` if needed.
- **Shadows:** all warm (red-tinted), soft and diffuse. `--shadow-sm/md/lg`.
- **Borders:** thin hairlines or 2px brand-red outlines (secondary buttons,
  active states). Gold borders for emphasis.
- **Buttons:** pill-shaped. Primary = brand-red fill + cream text; gold =
  butter-gold + red text; secondary = red 2px outline; ghost = text only.
- **Hover:** buttons darken (red→`--red-800`, gold→`--gold-600`); cards lift 4px
  with a deeper shadow. **Press:** subtle scale-down (0.97) — no big bounces.
- **Motion:** gentle and calm. `--ease-out` (cubic-bezier(.22,1,.36,1)),
  120–360 ms. Fades and small lifts; no springy/bouncy easing.
- **Transparency / blur:** sparing. The sticky header uses a translucent cream
  with backdrop-blur. Photo scrims use solid-red gradients for legibility.
- **Layout:** centered max-width containers (`--container-xl` 1320px), 32px
  gutters, sticky translucent header. Generous vertical rhythm between sections.

---

## ICONOGRAPHY
- **Primary motif:** **single continuous-line, hand-drawn illustrations in brick
  red, set inside a butter-gold disc** (`IconCircle`). Sampled examples live in
  `assets/icons/` (`line-percent`, `line-globe`, `line-phone`). Used for
  Instagram highlights, feature bullets and category chips.
- These are **photographic/raster** assets pulled from the brand book — there is
  no icon font or SVG icon set in the source. When you need an icon not in the
  set, draw it in the same style (one unbroken red line, ~6–8px stroke, rounded
  caps) on a gold disc, or commission it — do **not** drop in a generic UI icon
  library, and **do not use emoji**.
- For small functional UI glyphs (chevrons, +/−, close) plain typographic
  characters in brand colors are acceptable, kept minimal.

---

## Index / manifest
**Root**
- `styles.css` — entry point (import this). `@import`s everything below.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`.
- `readme.md` — this file. `SKILL.md` — Agent-Skill wrapper.

**Foundation cards** (`guidelines/*.html`) — Design System tab specimens:
colors (brand / ramps / neutrals), type (display / body / eyebrow), spacing
(scale / radius+shadow), brand (logo / icons / photography).

**Components** (`window.MaselkoDesignSystem_4ca089`)
- `components/core/` — `Button`, `Badge`, `Card`, `Input`, `Avatar`, `Logo`.
- `components/brand/` — `IconCircle`, `ProductCard`.
- Each has `.jsx` + `.d.ts` + `.prompt.md`; per-directory `*.card.html` specimen.

**UI kit**
- `ui_kits/website/` — interactive maselko.uz recreation (Home, Catalog,
  Product, About + Header/Footer). Entry `index.html`. See its `README.md`.

**Slides** (`slides/*.html`) — presentation templates at 1280×720: title,
section, content, image, stat.

**Assets** (`assets/`)
- `products/` — butter pack, ketchup (shashlik / chili) packshots.
- `lifestyle/` — warm family & food photography.
- `icons/` — gold-disc line-art icons.
- `brand/` — slide-template & Instagram reference frames.

---

## Caveats
1. **Typeface** — the real brand font is outlined in the PDF and unrecoverable.
   **Onest** (Google Fonts, full Cyrillic) is the substitute. Replace in
   `tokens/fonts.css` + `tokens/typography.css` when the official face is supplied.
2. **Logo** — recreated as a CSS wordmark / gold badge (`Logo` component). Drop in
   official vector artwork (SVG) when available.
3. **Assets** are extracted from a print-compressed PDF (~500px, JPEG) — fine for
   mockups, not print. Request originals for production.
4. **Product range & copy** are representative of what's shown in the book; confirm
   the full SKU list, prices and descriptions.
