# CIC Handbook Design System

## 1. Purpose, sources and status

This document translates the supplied brand board into implementation rules for the CIC Handbook Astro and Tailwind project. It defines visual foundations and reusable design decisions only. It does not authorise website components, pages or unconfirmed brand assets.

### Reference material

| Reference | Status | Use |
|---|---|---|
| [`docs/reference/brand-board.png`](reference/brand-board.png) | **Brand-board value** | Authoritative for values printed on the board and for styles visibly demonstrated there. |
| [`docs/reference/homepage-centred-hero-reference.png`](reference/homepage-centred-hero-reference.png) | **Confirmed homepage reference** | Authoritative for the centred, image-free hero composition and two-colour heading hierarchy approved on 30 July 2026. Its visible copy and location action are not authoritative. |
| [`docs/reference/homepage-hero-reference.png`](reference/homepage-hero-reference.png) | **Supporting homepage reference** | Authoritative only for the equal audience-card treatment approved on 29 July 2026. Its coastal hero composition is superseded. |
| Current repository configuration and styles | **Implementation context** | Used only to identify the existing Tailwind baseline and conflicts that will require later reconciliation. |

### Status legend

- **Brand-board value** — a value printed on the board or a treatment clearly demonstrated by it.
- **Implementation interpretation** — a practical value inferred from the board for consistent implementation. It is not an exact measurement extracted from the board.
- **`[TO CONFIRM]`** — information that is missing or cannot be established reliably from the reference.

The hex labels printed on the board are authoritative. Pixel samples from the raster image are not authoritative because anti-aliasing, gradients, colour profiles and image compression affect sampled values.

### Brand naming and assets

- **Brand-board value:** the reference displays “CIC WA” primary and secondary logo lockups, a book symbol and a favicon treatment.
- **Implementation context:** the approved public project name is **CIC Handbook**.
- **Confirmed interim treatment:** until a production wordmark is approved, the global navigation uses an accessible text lockup reading **CIC Handbook** with the existing standalone book mark.
- **`[TO CONFIRM]`:** the final relationship between the CIC Handbook name and the CIC WA lockups, including any replacement production wordmark.
- **`[TO CONFIRM]`:** production-ready SVG logo, symbol and favicon exports, clear-space rules, minimum sizes, monochrome variants and misuse rules.
- Do not trace, crop or extract production logo assets from the raster brand board.

## 2. Brand colour palette

### 2.1 Core palette

All entries in this table are **Brand-board values**.

| Colour | Hex | Intended use | Suitable text pairing | Avoid |
|---|---:|---|---|---|
| Midnight Navy | `#17213A` | Primary headings, body text, line icons and dark surfaces | Warm Ivory or White on a Navy surface; Navy text on any light brand surface | Deep Burgundy text or detail directly against Navy |
| Deep Burgundy | `#7E1E2A` | Primary actions, important emphasis, logo accents and important-state details | Warm Ivory or White on a Burgundy surface; Burgundy text on any light brand surface | Midnight Navy text or detail directly against Burgundy |
| Warm Ivory | `#FBFAF8` | Primary page background and a warm light foreground on dark surfaces | Midnight Navy, Deep Burgundy or Slate text | Light palette colours as text |
| Soft Grey | `#F2F4F7` | Neutral alternate surfaces and grouped interface areas | Midnight Navy, Deep Burgundy or Slate text | Light palette colours as text |
| Slate | `#667085` | Secondary text, neutral details and restrained borders | Use as normal-sized text only on White, Warm Ivory or Soft Grey | Normal-sized Slate text on Sage Mist, Dusty Rose, Sand or Dusty Blue |
| Sage Mist | `#E9F2EE` | Helpful, supportive or organisation-related tinted surfaces | Midnight Navy or Deep Burgundy text | Slate or other light colours as normal-sized text |
| Dusty Rose | `#F7ECEE` | Important, cautionary or warm-emphasis tinted surfaces | Deep Burgundy or Midnight Navy text | Slate or other light colours as normal-sized text |
| Sand | `#F2EDE6` | Informational, editorial or “did you know” tinted surfaces | Midnight Navy or Deep Burgundy text | Slate or other light colours as normal-sized text |
| Dusty Blue | `#DDE7F2` | Guidance and next-step tinted surfaces | Midnight Navy or Deep Burgundy text | Slate or other light colours as normal-sized text |

### 2.2 Utility neutral

| Colour | Hex | Status | Intended use |
|---|---:|---|---|
| White | `#FFFFFF` | **Implementation interpretation** | Neutral card and form-field surface where a clean white surface is visibly demonstrated. White is a utility neutral, not an additional brand colour. |

### 2.3 Contrast evidence

The following ratios are **Implementation interpretation** values calculated from the printed hex values using the WCAG relative-luminance formula. A ratio of at least 4.5:1 is used here as the minimum for normal-sized text; 3:1 is not used to justify routine body text.

| Light surface | Midnight Navy | Deep Burgundy | Slate | Normal-text result |
|---|---:|---:|---:|---|
| White | 15.97:1 | 9.97:1 | 4.97:1 | All three pass |
| Warm Ivory | 15.31:1 | 9.56:1 | 4.77:1 | All three pass |
| Soft Grey | 14.49:1 | 9.05:1 | 4.51:1 | All three pass; Slate has little margin |
| Sage Mist | 13.99:1 | 8.74:1 | 4.36:1 | Do not use Slate for normal text |
| Dusty Rose | 13.83:1 | 8.64:1 | 4.31:1 | Do not use Slate for normal text |
| Sand | 13.71:1 | 8.56:1 | 4.27:1 | Do not use Slate for normal text |
| Dusty Blue | 12.77:1 | 7.97:1 | 3.98:1 | Do not use Slate for normal text |

Additional verified combinations:

- Midnight Navy and Deep Burgundy provide only approximately **1.60:1** contrast against each other. Do not pair them as foreground and background.
- White provides 15.97:1 on Midnight Navy and 9.97:1 on Deep Burgundy.
- Warm Ivory provides 15.31:1 on Midnight Navy and 9.56:1 on Deep Burgundy.
- Light palette colours have insufficient contrast against one another for text. Use them as surfaces, not foreground text.
- Contrast must be checked again for transparency, gradients, text over images and any later colour additions.

### 2.4 Unresolved semantic colours

The board visibly uses dark green, blue and olive foreground accents, but it does not print their colour names or hex values.

| Visual treatment | Status | Interim rule |
|---|---|---|
| Organisation dark green | **`[TO CONFIRM]`** | Use Midnight Navy with Sage Mist until an approved exact value is supplied. |
| “Next step” semantic blue | **`[TO CONFIRM]`** | Use Midnight Navy with Dusty Blue until an approved exact value is supplied. |
| “Did you know?” semantic olive | **`[TO CONFIRM]`** | Use Midnight Navy with Sand until an approved exact value is supplied. |
| Burgundy hover/pressed shade or gradient | **`[TO CONFIRM]`** | Retain Deep Burgundy and distinguish state with focus, movement or shadow rather than inventing a new colour. |

Do not promote colours sampled from these raster elements into brand tokens.

## 3. Typography

### 3.1 Font families and weights

| Role | Family | Weight | Status |
|---|---|---:|---|
| Headings and emphasis | Manrope | 600 Semibold, 700 Bold | **Brand-board value** |
| Body text and user interface | Inter | 400 Regular, 500 Medium | **Brand-board value** |
| Heading fallback stack | `"Manrope", "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` | Inherit the requested weight | **Implementation interpretation** |
| Body fallback stack | `"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` | Inherit the requested weight | **Implementation interpretation** |

Neither Manrope nor Inter is currently bundled, declared with `@font-face` or installed as a direct font dependency in the repository.

- **`[TO CONFIRM]`:** approved font source, licence, hosting method, file formats and language subsets.
- **`[TO CONFIRM]`:** whether fonts will be self-hosted or loaded through an external service.
- If self-hosting is approved, include only the required WOFF2 weights listed above unless further weights are justified.

### 3.2 Type hierarchy

All sizes, line heights and letter spacing in this table are **Implementation interpretations**. Manrope applies to H1–H6; Inter applies to body and UI styles.

| Style | Responsive size | Weight | Line height | Letter spacing | Intended use |
|---|---|---:|---:|---:|---|
| H1 / Display | `clamp(2.5rem, 1.75rem + 3vw, 4rem)` (40–64px) | 700 | 1.05 | `-0.03em` | One page title or major hero statement |
| H2 | `clamp(2rem, 1.5rem + 2vw, 3rem)` (32–48px) | 700 | 1.12 | `-0.02em` | Major page sections |
| H3 | `clamp(1.5rem, 1.25rem + 1vw, 2rem)` (24–32px) | 600 | 1.20 | `-0.01em` | Subsections and prominent card groups |
| H4 | `1.25rem` (20px) | 600 | 1.30 | `0` | Component or nested-section heading |
| H5 | `1.125rem` (18px) | 600 | 1.40 | `0` | Minor heading |
| H6 | `1rem` (16px) | 600 | 1.40 | `0.01em` | Small structural heading |
| Body large | `1.125rem` (18px) | 400 | 1.65 | `0` | Introductions and prominent explanatory copy |
| Body | `1rem` (16px) | 400 | 1.60 | `0` | Default reading text |
| UI | `1rem` (16px) | 500 | 1.40 | `0` | Buttons, tabs and primary controls |
| Small | `0.875rem` (14px) | 400 | 1.50 | `0` | Supporting text and form help |
| Caption | `0.75rem` (12px) | 400 | 1.40 | `0.02em` | Non-essential captions and metadata only |

### 3.3 Hierarchy rules

These are **Implementation interpretations**:

- Use one H1 for the principal page title.
- Keep the semantic heading order intact and do not choose heading levels for appearance alone.
- Apply visual type styles independently when a semantic heading needs a different visual size.
- Keep long-form body copy between approximately 60 and 75 characters per line.
- Keep prominent headings concise; target a maximum measure of approximately 18 characters for display headings and 28 characters for other headings where the content allows.
- Do not use all capitals for body copy. Short overlines may use capitals only if tracking and readability are tested.
- Do not use font weight below 400 for content.

## 4. Spacing system

The board demonstrates consistent compact control spacing, larger card spacing and generous section separation, but it does not label exact measurements. The following 4px scale is an **Implementation interpretation** compatible with Tailwind 3 conventions.

| Token | Rem | Pixels | Typical use |
|---|---:|---:|---|
| `space-1` | `0.25rem` | 4px | Fine icon or inline adjustment |
| `space-2` | `0.5rem` | 8px | Icon-to-label gap, compact internal gap |
| `space-3` | `0.75rem` | 12px | Compact control padding |
| `space-4` | `1rem` | 16px | Default element gap and mobile gutter |
| `space-5` | `1.25rem` | 20px | Mobile card padding |
| `space-6` | `1.5rem` | 24px | Default card padding and tablet gutter |
| `space-8` | `2rem` | 32px | Desktop gutter and grouped-content separation |
| `space-10` | `2.5rem` | 40px | Large component separation |
| `space-12` | `3rem` | 48px | Small section separation |
| `space-16` | `4rem` | 64px | Default section separation |
| `space-20` | `5rem` | 80px | Large section separation |
| `space-24` | `6rem` | 96px | Major desktop section separation |

Use the smallest token that clearly expresses the relationship between elements. Prefer consistent scale values over arbitrary spacing.

## 5. Container widths

All values are **Implementation interpretations**.

| Container | Maximum width | Purpose |
|---|---:|---|
| Reading | `48rem` / 768px | Long-form guide and support content |
| Content | `75rem` / 1200px | Standard page layout, card grids and navigation content |
| Wide | `90rem` / 1440px | Wide hero imagery or editorial compositions that require extra width |

Responsive gutters:

| Viewport band | Gutter | Tailwind-aligned interpretation |
|---|---:|---|
| Below 640px | 16px | Base |
| 640px to 1023px | 24px | `sm` and above |
| 1024px and above | 32px | `lg` and above |

Containers should remain centred and use the smaller of their maximum width or the available viewport width after both gutters. Exact supported device widths remain subject to QA rather than becoming content-specific breakpoints.

## 6. Border radii

The rounded treatment is visibly demonstrated, but no radii are labelled. These values are **Implementation interpretations**.

| Token | Value | Use |
|---|---:|---|
| `radius-sm` | 6px | Small chips and compact decorative elements |
| `radius-md` | 8px | Buttons, inputs and small panels |
| `radius-lg` | 12px | Cards, callouts and images |
| `radius-full` | 9999px | Circular icon backgrounds, pagination controls and pills |

Use one radius consistently across all corners of an element unless a supplied brand asset requires otherwise.

## 7. Borders

All measurements and alpha treatments are **Implementation interpretations** derived only from approved palette colours.

| Token | Value | Use |
|---|---|---|
| `border-subtle` | 1px solid `rgb(102 112 133 / 0.20)` | Decorative card boundaries and quiet separation only |
| `border-muted` | 1px solid `rgb(102 112 133 / 0.25)` | Decorative dividers requiring slightly stronger definition |
| `border-control` | 1px solid Slate | Form controls whose boundary must remain perceptible |
| `border-brand` | 1px solid Deep Burgundy | Secondary actions and burgundy-accented elements |
| `border-focus` | 2px solid Deep Burgundy | Keyboard focus indication, with a 2px White or Warm Ivory offset |

- Do not use a border as the only indication of a validation state.
- Slate at 20–25% opacity has insufficient contrast to be the sole visual boundary of an essential control; use `border-control` for fields.
- Avoid multiple nested borders where spacing or a surface change can communicate grouping.
- Keep decorative divider lines at 1px.

## 8. Shadows

The board demonstrates soft, low-contrast elevation. It does not label exact shadow values. The following are **Implementation interpretations** derived from Midnight Navy rather than introducing a new shadow colour.

| Token | Value | Use |
|---|---|---|
| `shadow-sm` | `0 1px 2px rgb(23 33 58 / 0.08)` | Inputs, compact controls and quiet separation |
| `shadow-md` | `0 4px 12px rgb(23 33 58 / 0.10)` | Standard cards and hover elevation |
| `shadow-lg` | `0 12px 32px rgb(23 33 58 / 0.12)` | Prominent audience cards or floating navigation only |

Shadows support hierarchy; they must not be the only sign that an element is interactive. Avoid heavy black shadows, coloured glows and stacked shadow effects.

## 9. Button variants

### 9.1 Visual variants

| Variant | Surface | Text and icon | Border | Status |
|---|---|---|---|---|
| Primary | Deep Burgundy | Warm Ivory or White | None | **Brand-board value** |
| Secondary | White, Warm Ivory or transparent | Deep Burgundy | Deep Burgundy | **Brand-board value** |
| Organisation action | Dark green | Light text | None | **`[TO CONFIRM]`** — visible on the board, but the exact green is not supplied |

The arrow-after-label treatment is visibly demonstrated and is a **Brand-board value**. The following dimensions and behaviours are **Implementation interpretations**:

- Minimum control height: 44px.
- Horizontal padding: 24px; vertical padding: 12px.
- Radius: 8px.
- Label: Inter 500 at 16px with a 1.4 line height.
- Arrow or trailing icon: 20px, with an 8px gap from the label.
- Keep the entire visual control within one interactive target.
- On hover, use a small upward movement and/or `shadow-md`; do not invent a darker brand colour.
- On active, return the movement to the resting position.
- On keyboard focus, use `border-focus` with a visible offset.
- A disabled control may use an existing token at reduced opacity, but it must also remove interactive affordances and expose its disabled state semantically. Exact disabled styling is **`[TO CONFIRM]`**.
- Never communicate state through colour alone.

## 10. Card variants

### 10.1 Base card

The board visibly demonstrates light cards with rounded corners, a fine boundary and soft elevation. The following measurements are **Implementation interpretations**:

- Surface: White.
- Border: `border-control`.
- Radius: `radius-lg`.
- Shadow: `shadow-md`.
- Padding: 20px below 640px and 24px from 640px.
- Internal gaps: 12–24px from the spacing scale.

### 10.2 Audience cards

| Variant | Demonstrated treatment | Implementation rule | Status |
|---|---|---|---|
| Person seeking compensation | Burgundy heading/action with a Dusty Rose icon disc | Use the confirmed Burgundy and Dusty Rose tokens | **Brand-board value** |
| Organisation | Dark-green heading/action with a Sage Mist icon disc | Use Midnight Navy with Sage Mist until the exact green is supplied | Green is **`[TO CONFIRM]`** |

Audience cards should present a clear title, a short explanation and one primary action. Do not make separate nested links compete with the card action.

### 10.3 Informational cards and callouts

The presence and purpose of these four treatments are **Brand-board values**. Foreground substitutions and dimensions below are implementation rules.

| Variant | Surface | Foreground | Status |
|---|---|---|---|
| Helpful tip | Sage Mist | Midnight Navy interim | Exact dark green is **`[TO CONFIRM]`** |
| Important | Dusty Rose | Deep Burgundy | **Brand-board value** |
| Next step | Dusty Blue | Midnight Navy interim | Exact semantic blue is **`[TO CONFIRM]`** |
| Did you know? | Sand | Midnight Navy interim | Exact semantic olive is **`[TO CONFIRM]`** |

Use `radius-lg`, 16–24px padding and a line icon. Pair the icon with a written heading so meaning does not depend on colour.

## 11. Form field styling

The board demonstrates a search field with a light surface, restrained border/shadow, rounded corners, placeholder text and a trailing search icon. The following complete field system is an **Implementation interpretation**.

### 11.1 Base field

- Minimum height: 48px.
- Surface: White or Warm Ivory.
- Text: Midnight Navy, Inter 400 at 16px.
- Label: Midnight Navy, Inter 500 at 14–16px.
- Placeholder: Slate, only on White, Warm Ivory or Soft Grey.
- Border: `border-subtle`.
- Radius: `radius-md`.
- Horizontal padding: 16px.
- Help text: Slate on White, Warm Ivory or Soft Grey.
- Search or trailing icon: Midnight Navy at 20–24px.

### 11.2 States

| State | Treatment | Status |
|---|---|---|
| Hover | Change the border to Deep Burgundy without changing its width | **Implementation interpretation** |
| Keyboard focus | 2px Deep Burgundy ring with a 2px White or Warm Ivory offset | **Implementation interpretation** |
| Error | Dusty Rose supporting surface, Deep Burgundy border/icon/message and written error text | **Implementation interpretation** |
| Success | Sage Mist supporting surface with Midnight Navy border/icon/message until green is confirmed | **Implementation interpretation**; exact green **`[TO CONFIRM]`** |
| Disabled/read-only | Existing neutral tokens, reduced emphasis and a semantic disabled/read-only state | Exact treatment **`[TO CONFIRM]`** |

Never use placeholder text as the only label. Instructions and errors must remain associated with their field programmatically, and error recovery must not rely on colour alone.

Text inputs, search inputs, selects and textareas should share the same label, border, radius, typography and state rules. Textareas should allow vertical resizing and have an interpreted minimum height of 128px. Native checkboxes and radio controls should use Deep Burgundy as their selected accent and sit within an interpreted minimum 44px interactive target; any custom visual replacement must preserve native keyboard and assistive-technology behaviour. These control extensions are **Implementation interpretations** because the board shows only a search field.

## 12. Image treatment

### 12.1 Subject and tone

The board visibly demonstrates:

- Western Australian landscapes and coastlines;
- warm, natural light;
- calm professional or supportive human interactions;
- notebooks, printed guidance and branded handbook imagery; and
- uncluttered, editorial compositions.

These are **Brand-board values** for visual direction.

### 12.2 Implementation rules

The following are **Implementation interpretations**:

- Use `object-fit: cover` for fixed-ratio crops while preserving the meaningful focal point.
- Prefer 16:9 for wide editorial or hero imagery and 3:2 for supporting photography.
- Use `radius-lg` where an image is presented as a card or editorial panel.
- Keep colour grading warm and natural; do not apply strong filters that distort people, landscapes or brand colours.
- Choose authentic, respectful imagery. Do not use graphic, sensationalised or exploitative depictions of crime, injury or distress.
- Do not place essential text inside an image.
- Supply meaningful alt text when an image communicates information; use empty alt text for genuinely decorative images.
- Confirm usage rights, attribution requirements, consent and source records before publication.

Image licensing, commissioned photography, stock provider and final asset library are **`[TO CONFIRM]`**.

## 13. Icon treatment

The board establishes a consistent **thin line icon style** for eligibility, checklists, forms, support, training, compassion, time limits, WA focus, guides, resources, legal information and updates. Navy outlines, restrained Burgundy emphasis, rounded forms and limited tinted backgrounds are visibly demonstrated **Brand-board values**.

The following are **Implementation interpretations**:

- Standard UI icon: 24px.
- Feature icon: 40px or 48px.
- Nominal stroke: 2px at a 24px source size, scaled consistently.
- Use rounded line caps and joins.
- Default foreground: Midnight Navy.
- Emphasis foreground: Deep Burgundy.
- Supporting discs may use Sage Mist, Dusty Rose, Sand or Dusty Blue.
- Keep all icons within one coherent line family; do not mix filled, duotone and unrelated line libraries.
- Decorative icons must be hidden from assistive technology. Standalone functional icons require an accessible name.

Approved vector icon and illustration source files are **`[TO CONFIRM]`**. Do not extract production icons from the raster board.

## 14. Responsive typography behaviour

The following rules are **Implementation interpretations**:

- H1–H3 use the `clamp()` values in the type hierarchy so they scale fluidly between their documented minimum and maximum sizes.
- H4–H6 and body styles remain stable unless user testing identifies a readability need.
- Do not introduce additional heading-size jumps at component-specific breakpoints.
- At narrow widths, allow headings to wrap naturally; do not reduce them below their documented minimum.
- Keep body text at 16px or larger and maintain the reading-container measure.
- Reduce section spacing before reducing type size.
- Avoid manual line breaks that only work at one viewport width.
- Verify that text remains readable and does not overlap, clip or require horizontal scrolling at 320px viewport width and at 200% browser zoom.
- Navigation, buttons and fields must preserve their minimum target heights as text wraps or scales.

## 15. Design tokens for CSS variables and Tailwind

This section defines the future token contract. It does not change the current stylesheet or Tailwind configuration.

### 15.1 Primitive colour tokens

| CSS variable | Value | Tailwind 3.4 theme path | Status |
|---|---:|---|---|
| `--color-brand-midnight-navy` | `#17213A` | `colors.brand.navy` | **Brand-board value** |
| `--color-brand-deep-burgundy` | `#7E1E2A` | `colors.brand.burgundy` | **Brand-board value** |
| `--color-brand-warm-ivory` | `#FBFAF8` | `colors.brand.ivory` | **Brand-board value** |
| `--color-brand-soft-grey` | `#F2F4F7` | `colors.brand.soft-grey` | **Brand-board value** |
| `--color-brand-slate` | `#667085` | `colors.brand.slate` | **Brand-board value** |
| `--color-brand-sage-mist` | `#E9F2EE` | `colors.brand.sage` | **Brand-board value** |
| `--color-brand-dusty-rose` | `#F7ECEE` | `colors.brand.rose` | **Brand-board value** |
| `--color-brand-sand` | `#F2EDE6` | `colors.brand.sand` | **Brand-board value** |
| `--color-brand-dusty-blue` | `#DDE7F2` | `colors.brand.blue` | **Brand-board value** |
| `--color-utility-white` | `#FFFFFF` | `colors.utility.white` | **Implementation interpretation** |

If Tailwind opacity modifiers are required, store the corresponding RGB channels or use a Tailwind-compatible colour function rather than duplicating a second palette.

### 15.2 Semantic aliases

All mappings are **Implementation interpretations**.

| Semantic token | Primitive mapping | Use |
|---|---|---|
| `--color-text-primary` | Midnight Navy | Headings and default text |
| `--color-text-secondary` | Slate | Secondary text on approved neutral surfaces only |
| `--color-text-emphasis` | Deep Burgundy | Important emphasis and action labels |
| `--color-text-on-dark` | Warm Ivory | Text on Midnight Navy or Deep Burgundy |
| `--color-action-primary` | Deep Burgundy | Primary actions |
| `--color-focus` | Deep Burgundy | Focus indicator |
| `--color-surface-page` | Warm Ivory | Default page surface |
| `--color-surface-neutral` | Soft Grey | Alternate neutral surface |
| `--color-surface-card` | White | Card and field surface |
| `--color-surface-helpful` | Sage Mist | Helpful callout surface |
| `--color-surface-important` | Dusty Rose | Important callout surface |
| `--color-surface-editorial` | Sand | Editorial/fact callout surface |
| `--color-surface-next-step` | Dusty Blue | Next-step callout surface |
| `--color-border-subtle` | Slate at 20% alpha | Decorative boundaries only |
| `--color-border-control` | Slate | Essential form-control boundaries |

Reserve these token names without assigning a colour until approved:

- `--color-organisation-accent` — **`[TO CONFIRM]`**
- `--color-information-accent` — **`[TO CONFIRM]`**
- `--color-knowledge-accent` — **`[TO CONFIRM]`**
- `--color-action-primary-hover` — **`[TO CONFIRM]`**

### 15.3 Other token groups

The following token groups and values are **Implementation interpretations**:

| CSS token group | Tailwind 3.4 `theme.extend` group | Values defined in this document |
|---|---|---|
| `--font-heading`, `--font-body` | `fontFamily.heading`, `fontFamily.body` | Manrope and Inter stacks |
| Type sizes with line height and tracking | `fontSize` object entries | H1–H6, body, UI, small and caption |
| `--space-*` | `spacing` | 4–96px spacing scale |
| `--container-*` | `maxWidth` | Reading, content and wide containers |
| `--radius-*` | `borderRadius` | Small, medium, large and full |
| `--shadow-*` | `boxShadow` | Small, medium and large elevations |

Use `theme.extend` so project tokens are added without replacing Tailwind’s complete defaults. Tailwind 3 supports custom font-size entries that carry line height and letter spacing together, and custom `maxWidth`, `borderRadius`, `boxShadow`, colour and font-family entries. CSS custom properties should remain the single source for exact brand colours, with Tailwind entries referring to those values where practical.

Relevant Tailwind 3 documentation:

- [Theme configuration](https://v3.tailwindcss.com/docs/configuration)
- [Custom colours and CSS variables](https://v3.tailwindcss.com/docs/colors)
- [Font-size configuration](https://v3.tailwindcss.com/docs/font-size)
- [Maximum width configuration](https://v3.tailwindcss.com/docs/max-width)

## 16. Current repository reconciliation

The repository currently uses Tailwind CSS 3.4.17 with `@astrojs/tailwind` 6.0.2. Its `tailwind.config.mjs` has no theme extensions.

The current global stylesheet contains earlier colour literals, including `#78081C`, `#FFF1F2`, `#1E293B` and unrelated purple, blue, rose and grey values. These are **implementation context**, not approved additions to this design system.

For later website implementation:

1. Treat the printed brand-board palette as the source of truth.
2. Map existing usage to semantic tokens.
3. Retire legacy literals only after a visual review confirms the intended role of each use.
4. Do not silently reinterpret unlabelled board accents as current stylesheet colours.
5. Load the approved font files before relying on Manrope or Inter rendering.

No stylesheet, Tailwind configuration, component or page change is authorised by this document alone.

## 17. Open confirmations

The following must be resolved before full visual implementation:

1. Final CIC Handbook/CIC WA naming and approved vector logo exports.
2. Exact organisation green, semantic blue and semantic olive colours.
3. Font source, licensing, delivery method, file formats and subsets.
4. Approved icon and illustration asset library.
5. Photography source, licensing, consent and attribution requirements for future imagery; the generated homepage hero provenance is recorded in `CONTENT.md`.
6. Exact hover, pressed and disabled treatments if non-colour cues are insufficient.
7. Whether future reference material supersedes or extends the supplied board and homepage reference.
