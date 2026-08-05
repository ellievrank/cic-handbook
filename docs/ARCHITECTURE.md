# Website Architecture

This document defines how the website must be organised and coded.

It is authoritative for project structure, component architecture, code organisation, styling implementation and technical quality.

Before changing the codebase:

1. Read `AGENTS.md`.
2. Read `docs/PROJECT_SPEC.md`.
3. Read `docs/DESIGN_SYSTEM.md`.
4. Read `docs/STYLE_GUIDE.md`.
5. Inspect the existing project structure and reusable components.
6. Preserve established patterns unless this document or the project specification requires them to change.

## Core Principles

The codebase must be:

* Component-based
* Easy to navigate
* Responsive
* Accessible
* Maintainable
* Consistent with the design system
* Static-first
* Lightweight
* Free from unnecessary duplication
* Free from unnecessary client-side JavaScript

Do not place an entire website or complex page inside one large Astro file.

Pages should compose layouts, sections and reusable UI components.

## Preferred Project Structure

```text
src/
├── assets/
│   ├── images/
│   └── icons/
├── components/
│   ├── layout/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Navigation.astro
│   │   └── MobileNavigation.astro
│   ├── sections/
│   │   ├── HeroSection.astro
│   │   ├── ServicesSection.astro
│   │   ├── TestimonialSection.astro
│   │   └── CallToActionSection.astro
│   ├── ui/
│   │   ├── Button.astro
│   │   ├── Container.astro
│   │   ├── SectionHeading.astro
│   │   ├── Card.astro
│   │   └── Icon.astro
│   └── seo/
│       └── SEO.astro
├── content/
├── data/
│   ├── navigation.ts
│   ├── site.ts
│   └── social-links.ts
├── layouts/
│   └── BaseLayout.astro
├── lib/
│   └── utilities.ts
├── pages/
│   ├── index.astro
│   └── contact.astro
└── styles/
    └── global.css
```

Only create folders that the project genuinely needs.

Do not create empty abstractions or additional architectural layers without a clear purpose.

## Pages

Files inside `src/pages/` are route entry points.

A page file should primarily:

* Import its layout
* Import page sections
* Supply page-specific content or data
* Set page metadata
* Arrange the sections in the correct order

A page file should not contain every section’s full markup.

Extract a section into a component when it:

* Represents a distinct visual section
* Has its own layout or responsive behaviour
* Is likely to be reused
* Contains repeated markup
* Has substantial logic
* Makes the page difficult to scan
* Could be edited independently

A page should remain readable as an overview of its structure.

Example:

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import HeroSection from "../components/sections/HeroSection.astro";
import ServicesSection from "../components/sections/ServicesSection.astro";
import TestimonialSection from "../components/sections/TestimonialSection.astro";
import CallToActionSection from "../components/sections/CallToActionSection.astro";
---

<BaseLayout
  title="Page title"
  description="Page description"
>
  <HeroSection />
  <ServicesSection />
  <TestimonialSection />
  <CallToActionSection />
</BaseLayout>
```

## Component Categories

### Layout components

Layout components define structures shared across pages.

Examples include:

* Site header
* Site footer
* Navigation
* Page shell
* Main content layout
* SEO metadata

Place them in:

```text
src/components/layout/
```

or:

```text
src/layouts/
```

Use `src/layouts/` for full page wrappers and `src/components/layout/` for smaller shared layout elements.

### Section components

Section components represent substantial page sections.

Examples include:

* Hero
* Services
* About
* Testimonials
* Gallery
* Frequently asked questions
* Contact call to action

Place them in:

```text
src/components/sections/
```

A section component may contain smaller UI components.

### UI components

UI components are reusable interface elements.

Examples include:

* Buttons
* Cards
* Badges
* Section headings
* Containers
* Form fields
* Decorative elements
* Icons

Place them in:

```text
src/components/ui/
```

Do not create a component for a single plain HTML element unless it provides meaningful reusable behaviour, styling or structure.

## Component Reuse

Before creating a component:

1. Search for an existing component that serves the same purpose.
2. Extend the existing component using props when appropriate.
3. Avoid creating nearly identical components with different names.
4. Do not force unrelated designs into one overly complicated component.

Create a shared component when:

* The pattern appears more than once
* The pattern is expected to appear elsewhere
* Consistency is important
* It has multiple visual variants
* It contains meaningful behaviour or logic

A one-off page section may still be a section component when extraction improves readability.

## Component Props

Use TypeScript interfaces for meaningful component props.

Example:

```astro
---
interface Props {
  heading: string;
  description?: string;
  alignment?: "left" | "center";
}

const {
  heading,
  description,
  alignment = "left",
} = Astro.props;
---
```

Props should:

* Have clear names
* Be typed
* Use sensible defaults
* Avoid unnecessary boolean combinations
* Represent content or genuine variants
* Remain understandable where the component is used

Prefer:

```astro
<Button variant="primary" size="large">
  Contact us
</Button>
```

Avoid:

```astro
<Button blue rounded large shadow>
  Contact us
</Button>
```

Do not add props solely to make a component theoretically reusable.

## Content and Data

Do not duplicate repeated content directly throughout multiple components.

Place shared structured information in `src/data/`.

Suitable examples include:

* Navigation links
* Contact information
* Social links
* Services
* Testimonials
* Frequently asked questions
* Site-wide calls to action

Example:

```ts
export const navigationItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
```

Keep small, page-specific content close to the page or component that uses it.

Use Astro content collections when the website contains a meaningful collection of structured editorial content such as articles, resources, recipes, projects or case studies.

Do not hardcode the same phone number, email address or business detail in multiple files.

## Styling

Tailwind CSS is the primary styling system.

Use utility classes directly in Astro markup for most styling.

Global CSS should be reserved for:

* Tailwind imports
* Design tokens
* Font declarations
* Base document styles
* Reusable global behaviours
* Styles that cannot be expressed cleanly with utilities

Do not place large amounts of page-specific CSS in `global.css`.

Avoid arbitrary values when an existing design token or standard utility is suitable.

Prefer:

```html
<div class="rounded-xl px-6 py-8">
```

Avoid repeatedly using unexplained values such as:

```html
<div class="rounded-[17px] px-[23px] py-[31px]">
```

Arbitrary values may be used when they are intentionally required by the approved design.

## Design Tokens

Colours, fonts, spacing and other recurring values must come from `docs/DESIGN_SYSTEM.md`.

Do not introduce a new:

* Brand colour
* Font family
* Shadow
* Border radius
* Container width
* Spacing convention

without checking the design system first.

When a recurring design value is needed, define it once through the project’s Tailwind theme or global CSS variables rather than repeating it throughout the codebase.

## Containers and Section Spacing

Use a shared container pattern to maintain consistent page widths and horizontal padding.

Prefer a reusable `Container.astro` component or one clearly documented container class.

Sections should follow a consistent vertical-spacing system.

Do not independently invent different maximum widths and padding values for every section.

Full-width backgrounds may wrap an inner constrained container.

Example:

```astro
<section class="py-16 md:py-24">
  <Container>
    <!-- Section content -->
  </Container>
</section>
```

## Responsive Design

Build mobile-first.

Every page and component must be checked at:

* Small mobile width
* Large mobile width
* Tablet width
* Laptop width
* Large desktop width

Responsive behaviour must be intentional.

Do not simply reduce font sizes until content fits.

Consider:

* Content order
* Navigation behaviour
* Grid columns
* Image cropping
* Button width
* Text line length
* Section spacing
* Decorative element placement
* Touch target size

Avoid horizontal overflow.

Decorative elements must not cover important content or interfere with readability.

## Astro and Client-Side JavaScript

Use Astro components by default.

Only use client-side JavaScript when the interface genuinely requires browser interaction.

Suitable uses include:

* Mobile navigation
* Accordions
* Tabs
* Interactive forms
* Carousels
* User-controlled filters

Do not hydrate an entire page when only one component is interactive.

When using a framework component, apply the least aggressive appropriate Astro client directive.

Prefer static HTML and CSS wherever possible.

Do not add React, Vue, Svelte or another UI framework solely to implement simple markup or basic interactions that Astro can handle directly.

## Images

Store source images in an appropriate assets directory.

Use consistent:

* File naming
* Aspect ratios
* Cropping
* Alternative text
* Loading behaviour

Use descriptive lowercase file names with hyphens.

Example:

```text
outback-oasis-cabin-exterior.webp
```

Do not use names such as:

```text
IMG_9284-final-FINAL2.png
```

Meaningful images must have useful alternative text.

Purely decorative images should use empty alternative text.

Avoid using an image as text when real HTML text can be used.

Prevent layout shifts by ensuring image dimensions or aspect ratios are known.

## Accessibility

Use semantic HTML.

Every page must have:

* One clear primary heading
* Logical heading order
* Descriptive links
* Keyboard-accessible interactions
* Visible focus states
* Appropriate form labels
* Sufficient colour contrast
* Meaningful image alternative text

Use buttons for actions and links for navigation.

Do not use clickable `div` elements where a native interactive element is appropriate.

Interactive components must work without a mouse.

Respect reduced-motion preferences for substantial animation.

## SEO

Every public page must provide:

* A unique title
* A useful meta description
* A canonical URL when appropriate
* Open Graph information
* A logical heading structure
* Descriptive link text

Use a shared SEO component or layout interface.

Do not duplicate complete `<head>` implementations across pages.

## Naming

Use PascalCase for Astro components:

```text
ServiceCard.astro
CallToActionSection.astro
```

Use kebab-case for public assets:

```text
hero-background.webp
```

Use camelCase for TypeScript variables and functions:

```ts
const navigationItems = [];
```

Names must describe purpose rather than appearance alone.

Prefer:

```text
TestimonialCard.astro
```

Avoid:

```text
WhiteBox.astro
```

## Imports

Keep imports organised and remove unused imports.

Use consistent project aliases when aliases are configured.

Do not create deeply nested relative imports when a clear alias is available.

Avoid circular dependencies between components.

## Functions and Logic

Keep components focused on presentation and local rendering concerns.

Place reusable non-visual logic in `src/lib/`.

Functions should:

* Have one clear responsibility
* Use descriptive names
* Return predictable results
* Avoid hidden side effects
* Be typed when useful

Do not create utility functions for operations that are clearer when written directly.

## Forms

Forms must include:

* Proper labels
* Correct input types
* Required-state indicators
* Clear error messages
* Clear success feedback
* Keyboard accessibility
* Spam protection when connected to a live service

Do not imply that a form is functional unless its submission behaviour has been implemented and tested.

## Dependencies

Do not install a package before checking whether the project or browser platform already provides the required functionality.

Before adding a dependency:

1. Explain its purpose.
2. Confirm that it is maintained and suitable.
3. Consider its effect on bundle size.
4. Use it consistently.
5. Remove it if it is no longer used.

Avoid adding a large dependency for a minor visual effect.

## Code Quality

Do not leave:

* Commented-out code
* Unused components
* Unused imports
* Placeholder content
* Debugging logs
* Duplicate implementations
* Broken links
* Empty sections
* Unexplained magic values
* Temporary file names

Comments should explain why something exists, not restate obvious markup.

## Refactoring Rules

Refactor when:

* The same markup is repeated
* A page has become difficult to scan
* A component has multiple unrelated responsibilities
* Data is duplicated
* Styling patterns are inconsistent
* A component has accumulated confusing props
* A shared convention has emerged

Do not perform unrelated large-scale refactors while completing a focused task.

Preserve working behaviour unless the requested change requires it to change.

## Validation

After meaningful changes, run the available project checks.

At minimum, run:

```bash
npm run check
npm run build
```

Also run configured formatting, linting or automated tests when available.

Do not claim that the project is complete when required checks are failing.

When a check cannot be run, clearly state:

* Which check was not run
* Why it could not be run
* What remains unverified

## Definition of Done

A task is complete only when:

* The requested functionality is implemented
* The result follows the project specification
* The result matches the design system and style guide
* Existing reusable components have been used where appropriate
* New components are logically organised
* Desktop and mobile layouts work
* Accessibility requirements are addressed
* Content is accurate
* Links and interactions work
* Type and build checks pass
* Temporary code has been removed
* Relevant documentation is updated

## Prohibited Patterns

Do not:

* Put the entire site in `src/pages/index.astro`
* Put multiple unrelated page sections into one giant component
* Duplicate headers or footers between pages
* Hardcode shared business information in multiple locations
* Add client-side JavaScript without a clear requirement
* Install unnecessary frameworks
* Create slightly different copies of existing components
* Ignore the design-system tokens
* Use placeholder content in the final implementation
* Mark incomplete or untested behaviour as finished
* Change unrelated parts of the website without justification
