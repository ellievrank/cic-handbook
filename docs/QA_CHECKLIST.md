# CIC Handbook QA Checklist

This checklist defines the minimum quality gates for CIC Handbook development, page completion and release. It is governed by:

- [`PROJECT_SPEC.md`](PROJECT_SPEC.md)
- [`CONTENT.md`](CONTENT.md)
- [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md)
- [`STYLE_GUIDE.md`](STYLE_GUIDE.md)
- [`ARCHITECTURE.md`](ARCHITECTURE.md)

**How to use this checklist**

- Mark an item complete only when its stated pass condition has been tested.
- Record the tester, date, commit, environment and evidence for each completed page and final release run.
- If an item is not applicable because its page or feature is outside the approved release scope, record `N/A` with the approving person and a specific reason; do not silently skip it.
- Fixed baselines and launch-blocking requirements cannot be marked `N/A`, waived or accepted as known failures.
- If an item is blocked, leave it unchecked and link to the blocking decision or issue.
- An automated result does not replace a required manual, keyboard, screen-reader, content or legal review.
- A page is “completed” only when its route, content, states, responsive behaviour and required functionality are implemented and ready for QA.

**Evidence record**

| Field | Value |
|---|---|
| Tester | |
| Date | |
| Commit or version | |
| Environment and URL | |
| Browsers and devices | |
| Evidence or issue links | |

**Fixed QA baselines**

- **Accessibility:** WCAG 2.2 Level AA across complete pages, responsive variants and complete processes. See [WCAG 2.2](https://www.w3.org/TR/WCAG22/).
- **Project target size:** interactive targets are at least 44 × 44 CSS pixels unless a larger documented control size applies.
- **Text contrast:** at least 4.5:1 for normal-sized text and 3:1 for large-scale text.
- **Non-text contrast:** at least 3:1 for essential control boundaries, states, graphics and focus indicators.
- **Responsive tests:** 320px, 639px, 640px, 1023px, 1024px and 1440px; also test 200% browser zoom.
- **Performance:** mobile Lighthouse Performance score of at least 90 for Home, WA Guide, Support Services and every additional page template. See [Lighthouse performance scoring](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring).
- **Core Web Vitals:** LCP ≤2.5 seconds, INP ≤200ms and CLS ≤0.1. Record whether evidence is a lab result or 75th-percentile field data. See [Web Vitals](https://web.dev/articles/vitals).
- **Automated accessibility:** zero failed automated accessibility checks, followed by manual WCAG testing.
- **Console and network:** zero console errors, unhandled promise rejections and failed first-party requests.
- **Type and build:** `bun run check` reports zero diagnostics and `bun run build` exits with code 0.
- **Links and placeholders:** zero broken internal routes or fragment targets and zero user-visible placeholder or incomplete content.

> **Release blocker:** `docs/CONTENT.md` was empty when this checklist was created. Content completeness, source accuracy and final approval cannot pass until that document contains the approved content and source inventory.

## 1. Checks required during development

### 1.1 Project specification and scope

- [ ] Every proposed route, page, form, integration and feature is recorded as confirmed, `[TO CONFIRM]`, optional or excluded before implementation begins.
- [ ] No item marked `[TO CONFIRM]` is implemented or exposed without a recorded approval.
- [ ] “CIC Handbook” is used as the public project name.
- [ ] The interface identifies the subject as Western Australian criminal injuries compensation where context requires it.
- [ ] General-information and not-legal-advice status is visible in the approved global or page-level location.
- [ ] Every public page includes the approved global footer identity, tagline,
  quick links, For organisations link, acknowledgement, current-year copyright,
  and general-information disclaimer.
- [ ] Legal, news, contact, organisation training or resource, and social footer
  links remain absent unless separately approved with working destinations.
- [ ] No copy or visual treatment implies CIC Handbook is a government agency, court, law firm, emergency service or authorised decision-maker.
- [ ] No copy promises eligibility, an award amount, a processing time, claim approval or a successful outcome.
- [ ] The individual pathway leads to the approved WA Guide route.
- [ ] The organisation pathway links to the approved `/for-organisations/`
  holding page and does not link directly to an incomplete module or resource.
- [ ] When both audience pathways are shown, they have equally discoverable labels, descriptions, target sizes and actions.
- [ ] Organisation training is not marked ready until each module has an approved title, objective, content, sequence and completion behaviour.
- [ ] No on-site CIC application or application-status workflow exists.
- [ ] No form accepts statements, medical records, police material, financial evidence, identity documents or other claim evidence.
- [ ] No payment, legal-representation, claim-assessment or eligibility-assessment feature exists.
- [ ] Newsletter, contact, quick exit, accounts, authentication, LMS, learner progress, assessments, certificates, analytics, CRM and social integrations are absent unless individually approved.
- [ ] Sensitive content is preceded by an approved content warning.
- [ ] On every page with sensitive material, a visible support action appears in or immediately after the content warning and before the first sensitive section.

### 1.2 Content accuracy and approval

- [ ] Every legal claim, threshold, time limit, form name and process instruction has an approved source recorded in `CONTENT.md`.
- [ ] Every service name, telephone number, availability statement, eligibility statement, location and URL has an approved source recorded in `CONTENT.md`.
- [ ] Each factual content entry records its source URL or document, responsible reviewer and review date.
- [ ] Content uses the approved source meaning without overstating certainty or authority.
- [ ] Visual-reference wording is not treated as approved legal or editorial copy.
- [ ] No invented service, claim, price, location, contact detail or outcome is introduced.
- [ ] Plain-language editing preserves the legal meaning confirmed by the accountable reviewer.
- [ ] Content does not assume legal knowledge.
- [ ] Potentially graphic or unnecessarily detailed descriptions are removed or rewritten without losing required information.
- [ ] Support content makes clear that help can be accessed independently of a compensation application.
- [ ] Any changed legal-process content is returned to the accountable reviewer before it is marked approved.

### 1.3 Component architecture and code organisation

- [ ] Before a component is added, `src/components/` is searched and the review records that no existing component serves the same purpose.
- [ ] No new component duplicates an existing component with only a different name, colour or minor cosmetic change.
- [ ] A route entry primarily declares metadata, imports layouts or components and arranges page-specific content.
- [ ] A visually distinct section with its own layout, responsive behaviour or substantial logic is extracted from the route entry.
- [ ] Shared header and footer markup uses the configured shared layout components and is not duplicated in route files.
- [ ] Each component has one clear visual or behavioural responsibility.
- [ ] A pattern used more than once is shared, or the review records why separate implementations are required.
- [ ] No unrelated designs are forced into one component through confusing prop combinations.
- [ ] Every component with meaningful props declares a TypeScript `Props` interface or equivalent typed contract.
- [ ] Optional props have an explicit default when the component requires one.
- [ ] Props represent content or genuine variants rather than unexplained appearance toggles.
- [ ] Repeated navigation, contact, social, service or other structured business data has one source of truth.
- [ ] Shared content is not copied into multiple components or pages.
- [ ] Astro component filenames use PascalCase.
- [ ] Public asset filenames use descriptive kebab-case names.
- [ ] TypeScript variables and functions use descriptive camelCase names.
- [ ] Imports resolve consistently through configured aliases where appropriate.
- [ ] No unused import or circular dependency remains.
- [ ] No empty folder, placeholder component or speculative architecture layer is created.
- [ ] No entire page or site is hydrated when only a small interaction requires browser JavaScript.
- [ ] Static HTML and CSS are used for non-interactive content.
- [ ] No React, Vue, Svelte or other UI framework is added.

### 1.4 Design-system and style-guide compliance

- [ ] Implemented primitive colour tokens exactly match the nine approved brand-board hex values in `DESIGN_SYSTEM.md`.
- [ ] White is treated as a utility neutral, not an additional brand colour.
- [ ] No sampled green, blue, olive or gradient is introduced as a design token.
- [ ] No colour from the legacy stylesheet is treated as an approved new brand colour.
- [ ] Unconfirmed organisation and callout accents use the documented Midnight Navy interim treatment.
- [ ] Headings use Manrope 600/700 or the documented fallback stack while font delivery remains unresolved.
- [ ] Body and interface text use Inter 400/500 or the documented fallback stack while font delivery remains unresolved.
- [ ] Typography reproduces the documented sizes, weights, line heights and letter spacing.
- [ ] H1–H3 use the documented fluid `clamp()` ranges.
- [ ] Reusable spacing uses the documented 4px scale.
- [ ] Reusable containers enforce maximum widths of 768px, 1200px and 1440px for their documented purposes.
- [ ] Borders, radii and shadows use documented tokens rather than repeated arbitrary values.
- [ ] Every remaining arbitrary styling value has a documented, approved design reason.
- [ ] The card/form-border contradiction is resolved in the Design System before affected components are approved: decorative cards use a subtle boundary and essential controls use a perceptible solid boundary.
- [ ] Primary actions use flat Deep Burgundy with Warm Ivory or White text; no unapproved darker state or gradient is used.
- [ ] A section has no more than one primary action for the same decision.
- [ ] Colour, icon, position or motion is never the only way to identify a pathway, callout, validation state or status.
- [ ] The branded footer uses the approved Midnight Navy surface, Warm Ivory text,
  1200px container, four-column desktop composition, subtle internal divider,
  responsive stacking, and peripheral dotted quarter-circle treatment.

### 1.5 Responsive behaviour

- [ ] Layout work starts from the narrowest supported presentation rather than shrinking a completed desktop layout.
- [ ] Base gutters are 16px below 640px.
- [ ] Gutters are 24px from 640px through 1023px.
- [ ] Gutters are 32px from 1024px upward.
- [ ] Each responsive component is tested at 639px, 640px, 1023px and 1024px before it is merged.
- [ ] Boundary testing shows no clipping, overlap, unintended wrapping or page-level horizontal scrolling.
- [ ] Body text does not drop below 16px.
- [ ] Headings do not drop below the minimum sizes in `DESIGN_SYSTEM.md`.
- [ ] Section spacing reduces before type is made smaller.
- [ ] Columns collapse in the same logical order as the DOM and keyboard focus order.
- [ ] Multi-column audience, value, resource and footer groups reduce columns until no item text overlaps, clips or causes page-level horizontal scrolling at any required viewport.
- [ ] Footer source, reading and keyboard-focus order remains identity and tagline,
  quick links, For organisations, acknowledgement, copyright, then disclaimer as
  the four-column layout stacks.
- [ ] Long-guide navigation becomes an accessible in-flow or compact navigation pattern when a sidebar no longer fits.
- [ ] Wide tables use a labelled scroll container or an equivalent accessible small-screen presentation.
- [ ] Images use intentional crops that preserve the meaningful focal point.
- [ ] Decorative motifs are cropped or omitted when they interfere with content, controls or focus indicators.
- [ ] Interactive controls remain at least 44 × 44 CSS pixels when labels wrap or text is enlarged.
- [ ] At 320 × 568 CSS pixels, no sticky element obscures content or occupies more than 25% of the viewport height.

### 1.6 Mobile navigation

- [ ] The compact-navigation trigger is a semantic button.
- [ ] The trigger has a descriptive accessible name.
- [ ] The trigger exposes its open/closed state programmatically.
- [ ] The trigger is reachable and operable with Tab, Shift+Tab, Enter and Space.
- [ ] Closed-menu links are not visually exposed or included in the tab order.
- [ ] Opening the menu preserves a logical focus sequence.
- [ ] If the menu behaves as a modal overlay, focus remains within it until closed and Escape closes it.
- [ ] If the menu behaves as an in-flow disclosure, focus proceeds through its links without a trap and Escape closes it when supported.
- [ ] Closing the menu returns focus to the trigger when focus moved into the menu.
- [ ] Focus remains visible and unobscured throughout the menu.
- [ ] The menu does not change context merely by receiving focus.
- [ ] Search remains discoverable in the compact navigation or immediately adjacent page shell.
- [ ] Both audience pathways remain reachable without navigating through unrelated content.
- [ ] Opening the menu does not create page-level horizontal scrolling.
- [ ] The menu can be closed without a pointer.
- [ ] Resizing between compact and desktop navigation does not leave content hidden, focus trapped or stale state applied.

### 1.7 Accessibility and keyboard operation

- [ ] Each page template uses semantic header, navigation, main and footer landmarks where applicable.
- [ ] A keyboard-operable skip link bypasses repeated navigation and lands at the main content.
- [ ] Native buttons are used for actions and native links are used for navigation.
- [ ] No clickable `div` or non-semantic control replaces a suitable native element.
- [ ] Every interactive control has an accessible name matching its visible purpose.
- [ ] Every interactive control exposes its current role, value and state programmatically.
- [ ] Every interaction works with keyboard alone.
- [ ] Tab and Shift+Tab follow the logical content order.
- [ ] No keyboard trap exists.
- [ ] Focus is visible immediately and is not hidden behind sticky or overlay content.
- [ ] Opening and closing menus, dialogs and disclosures places and restores focus meaningfully.
- [ ] Status, loading, error and success messages are announced without forcing unnecessary focus.
- [ ] Information remains understandable with author colours disabled.
- [ ] Normal-sized text pairings meet at least 4.5:1 contrast.
- [ ] Large-scale text pairings meet at least 3:1 contrast.
- [ ] Essential component boundaries, graphics and focus indicators meet at least 3:1 contrast.
- [ ] Slate normal text is not used on Sage Mist, Dusty Rose, Sand or Dusty Blue.
- [ ] Midnight Navy and Deep Burgundy are not used directly against each other for essential text or controls.
- [ ] Content remains available and operable at 200% browser zoom.
- [ ] Content reflows without page-level horizontal scrolling at a 320px viewport.
- [ ] Reduced-motion mode removes non-essential translation and reveal effects.
- [ ] No autoplaying sound, video, parallax, looping, flashing, bouncing or content-delaying motion is introduced.
- [ ] Automated accessibility tests are run after meaningful interactive or structural changes and report zero failures.

### 1.8 Forms

- [ ] No CIC application, evidence-upload or claim-status form exists.
- [ ] An unapproved newsletter, contact, registration, enrolment or certificate form is not displayed as functional.
- [ ] Every approved field has a persistent visible label.
- [ ] Placeholder text is supplementary and is never the only label.
- [ ] Required fields are identified in text and programmatically.
- [ ] Input types and autocomplete values match the requested data.
- [ ] The form collects only the approved minimum fields.
- [ ] Help text and errors are programmatically associated with their fields.
- [ ] Invalid submission produces a specific error summary and field-level errors.
- [ ] Errors are identified in writing and do not rely on colour alone.
- [ ] Entered values are retained after validation failure.
- [ ] The first invalid field can be reached without searching the page.
- [ ] Error and success status messages are announced to assistive technology.
- [ ] Repeated submission is prevented while processing.
- [ ] A final success, pending or failure state is unambiguous.
- [ ] Approved privacy and consent wording appears before submission.
- [ ] Spam and abuse protection is present when the approved form connects to a live service.
- [ ] A contact form states that it does not lodge a claim, provide legal advice or reach emergency services.
- [ ] Textareas remain vertically resizable and meet the documented 128px minimum height.
- [ ] Custom checkbox or radio styling preserves native keyboard and assistive-technology behaviour.

### 1.9 Images, icons and alternative text

- [ ] A processable local raster image in `src/` is imported and passed as an image object to `astro:assets` `<Image />` or `<Picture />`, unless bypassing optimisation has a recorded reason.
- [ ] A local `src/` image used in a native `<img>` references the imported image’s `.src`, `.width` and `.height`.
- [ ] A `public/` image uses a root-relative URL and has explicit width and height.
- [ ] A remote image uses a full URL and has explicit width and height unless an approved size-inference method is used.
- [ ] Native `<img>` is used only where emitting the source unchanged or another documented constraint justifies bypassing Astro optimisation.
- [ ] `<Picture />` is used when multiple formats or source variants are required.
- [ ] Responsive width candidates have a matching `sizes` value.
- [ ] `densities` is not combined with `widths` or `layout`.
- [ ] A responsive `layout` mode matches the intended container behaviour.
- [ ] Only an above-the-fold or likely LCP image uses `priority`.
- [ ] A likely LCP image is not lazy-loaded.
- [ ] Non-critical off-screen images retain lazy-loading behaviour.
- [ ] Every raster image reserves its rendered aspect ratio before loading and causes no visible layout shift.
- [ ] Informative images have concise, context-specific alternative text.
- [ ] Decorative images use `alt=""`.
- [ ] Decorative inline or component SVGs are hidden from assistive technology.
- [ ] Standalone functional icons have accessible names.
- [ ] Category or status icons are paired with written labels.
- [ ] Essential instructions or labels are not embedded only in an image.
- [ ] Essential text is not placed over an uncontrolled photographic background.
- [ ] Image crops preserve the meaningful focal point at all tested widths.
- [ ] Image source, licence, consent and attribution requirements are recorded before publication.
- [ ] Raster brand-board assets are not traced, cropped or extracted as production logos or icons.

See the [official Astro image guide](https://docs.astro.build/en/guides/images/) for source handling, dimensions, responsive images and loading behaviour.

### 1.10 JavaScript and dependencies

- [ ] `rg -n '<script|client:' src` is run after every interactive change and every result maps to a confirmed browser interaction.
- [ ] Static content and presentational components add no browser script or client hydration.
- [ ] Important and indexable content remains present with JavaScript disabled.
- [ ] No whole-page hydration or unused framework runtime is shipped.
- [ ] `rg -n 'console\\.|debugger|javascript:' src` returns no production debugging statement, `debugger`, or `javascript:` URL.
- [ ] Every third-party script or integration is approved and documented.
- [ ] Every new dependency has a recorded purpose and cannot reasonably be replaced by existing Astro or browser functionality.
- [ ] Every dependency appears consistently in `package.json` and `bun.lock`.
- [ ] No large dependency is added solely for a minor visual effect.
- [ ] Removed functionality leaves no unused dependency, import, script or asset.

### 1.11 Incremental validation

- [ ] `bun run check` is run after meaningful component, content-schema, TypeScript or configuration changes and exits with zero diagnostics.
- [ ] `bun run build` is run after meaningful route, integration, asset or production-behaviour changes and exits with code 0.
- [ ] The build log contains no unresolved error or unexplained warning.
- [ ] If a required check cannot run, the handoff records the exact command, reason and unverified behaviour and does not mark the check passed.
- [ ] No formatter, linter or automated test is described as configured unless a direct dependency, configuration and script exist.

## 2. Checks required for each completed page

Create a fresh copy of this section for every completed route.

### Page evidence

| Field | Value |
|---|---|
| Page and route | |
| Page type or template | |
| Approval/status source | |
| Content reviewer and date | |
| Tester and date | |
| Commit or version | |
| Test URL/environment | |
| Browser/device evidence | |
| Accessibility evidence | |
| Performance report | |
| Issues or N/A approvals | |

### 2.1 Specification and content

- [ ] The page and route are confirmed rather than `[TO CONFIRM]`.
- [ ] The page purpose and primary action match `PROJECT_SPEC.md`.
- [ ] Every required section for this page type is present.
- [ ] No unapproved secondary destination is presented as complete.
- [ ] The public name is “CIC Handbook”.
- [ ] A page containing CIC process guidance identifies Western Australia or WA in its visible title or introduction and contains no guidance for another jurisdiction.
- [ ] General-information and not-legal-advice status appears in its approved location.
- [ ] No text or visual treatment implies government, court, law-firm or decision-maker status.
- [ ] Every published legal claim, threshold, time limit, form name and instruction has an approved source and reviewer.
- [ ] Every service, contact detail and external destination has an approved source and reviewer.
- [ ] No visual-reference copy is published merely because it appears in a mock-up or board.
- [ ] No promise of eligibility, amount, timing or outcome appears.
- [ ] No service, price, location, contact or claim has been invented.
- [ ] Sensitive material has an advance content warning.
- [ ] Where the page contains sensitive material, a visible support action appears in or immediately after the content warning and before the first sensitive section.
- [ ] All important content appears in rendered HTML and remains available with JavaScript disabled.

### 2.2 Structure and heading hierarchy

- [ ] The rendered page has exactly one semantic H1 describing its principal subject.
- [ ] The page has a single main landmark.
- [ ] Navigation regions have distinguishable accessible names when more than one exists.
- [ ] Heading levels form a logical outline and are not chosen only for visual size.
- [ ] No heading level is skipped without a structural reason recorded in the evidence.
- [ ] Lists use list markup and data tables use table markup with appropriate headers.
- [ ] Long-form content remains within the 768px reading container and approximately 60–75 characters per line.
- [ ] Each section has one dominant message, task or decision.
- [ ] Each decision area has no more than one primary action.
- [ ] Reading order remains logical when columns collapse.
- [ ] Process graphics do not imply eligibility, claim status, stored progress, assessment, certification or guaranteed outcomes.

### 2.3 Responsive behaviour and mobile navigation

- [ ] At 320px, no content, control, table, image or focus indicator overlaps, clips or causes page-level horizontal scrolling.
- [ ] At 639px and 640px, gutters, wrapping, image crops and column changes match the documented behaviour.
- [ ] At 1023px and 1024px, gutters, navigation, wrapping and column changes match the documented behaviour.
- [ ] At 1440px, body copy remains inside its documented maximum-width container.
- [ ] At 200% zoom, no content or functionality is lost and no page-level horizontal scrolling is introduced except for permitted content such as a labelled data-table scroller.
- [ ] Body copy remains at least 16px.
- [ ] Headings remain at or above their documented minimum sizes.
- [ ] Audience cards, values, resources, callouts and footer groups stack in logical order.
- [ ] Search and both audience pathways remain discoverable on a narrow viewport.
- [ ] Guide navigation remains usable when the desktop sidebar no longer fits.
- [ ] Tables have an accessible narrow-screen presentation.
- [ ] Image mosaics simplify without hiding essential content.
- [ ] At 320 × 568 CSS pixels, sticky elements do not obscure focused content or occupy more than 25% of the viewport height.
- [ ] All interactive targets remain at least 44 × 44 CSS pixels with at least 8 CSS pixels between adjacent target rectangles.
- [ ] The compact navigation passes every check in section 1.6 where it appears.

### 2.4 Keyboard and accessibility

- [ ] Tab reaches every interactive element exactly once in a logical order.
- [ ] Shift+Tab reverses through the same order.
- [ ] Enter activates links and controls that use Enter natively.
- [ ] Space activates buttons and controls that use Space natively.
- [ ] Arrow keys operate native radio, select, tab or menu patterns where applicable.
- [ ] Escape closes an open modal, menu or disclosure where that behaviour is provided.
- [ ] No focus trap exists outside an intentional open modal pattern.
- [ ] Focus remains visible and unobscured throughout the page.
- [ ] Focus returns to a meaningful control after a modal or overlay closes.
- [ ] The skip link reaches the main content.
- [ ] Every control exposes the correct accessible name, role, value and state.
- [ ] The document language attribute accurately identifies the page’s primary language.
- [ ] Every normal-text colour pairing meets at least 4.5:1.
- [ ] Every large-scale text pairing meets at least 3:1.
- [ ] Every essential control boundary, state graphic and focus indicator meets at least 3:1.
- [ ] Information remains understandable without colour.
- [ ] Reduced-motion mode leaves all content and controls available and understandable.
- [ ] An automated accessibility scan reports zero failures.
- [ ] Manual WCAG 2.2 Level AA checks for the page and its states pass.

### 2.5 Forms and states

- [ ] No CIC application or evidence-upload form appears.
- [ ] Every displayed form is approved and has implemented submission behaviour.
- [ ] Every field has a visible label and associated instructions.
- [ ] Required fields are identified in text and programmatically.
- [ ] Submitting an empty or invalid form produces a specific error summary and field errors.
- [ ] Error text identifies the problem and how to correct it.
- [ ] Entered values remain after validation failure.
- [ ] Errors and final status are announced to assistive technology.
- [ ] A processing state prevents duplicate submissions.
- [ ] Success, pending and failure outcomes are unambiguous.
- [ ] Approved privacy and consent information is linked before submission.
- [ ] Spam protection works without creating an inaccessible barrier.
- [ ] Keyboard-only users can complete, correct and submit the form.
- [ ] The form collects no field beyond the approved minimum.
- [ ] A contact form does not imply claim lodgement, legal advice or emergency response.

If the page has no approved form, mark this subsection `N/A` with the reason rather than marking untested form behaviour as passed.

### 2.6 Links and functionality

- [ ] Every internal link resolves to a built route or approved redirect.
- [ ] Every fragment link targets one unique existing element ID.
- [ ] No link uses an empty `href`, `href="#"`, `javascript:` URL or placeholder destination.
- [ ] Every link label describes its destination or action without relying on surrounding visual position.
- [ ] External-link text identifies the destination or purpose.
- [ ] Every external URL matches its approved source and reaches the intended current content.
- [ ] Every telephone link matches its visible approved number.
- [ ] Download links identify the file or action and point to an approved current artefact.
- [ ] An official-application action leaves CIC Handbook for the approved official channel.
- [ ] Back, next, pagination and guide navigation land on the expected content.
- [ ] Every query in the recorded search fixture opens its expected route or fragment and no returned result link is broken.
- [ ] Loading, empty, error and success states all have a tested recovery path.
- [ ] A deliberately unknown URL reaches the 404 experience.
- [ ] 404 recovery links reach approved Home, Guide, Search or Support destinations.
- [ ] Print controls invoke print without a `javascript:` URL.
- [ ] In A4 portrait print preview, all main content is present, body text is at least 10pt, navigation-only controls are absent and no text, table or image overlaps, clips or is truncated horizontally.

### 2.7 Images, icons and alternative text

- [ ] Every image uses the appropriate `astro:assets`, native, public or remote source strategy from section 1.9.
- [ ] Every raster image has intrinsic dimensions or an equivalent reserved aspect ratio.
- [ ] Responsive images emit intentional source candidates and a correct `sizes` value.
- [ ] Only the likely LCP image uses priority loading.
- [ ] Non-critical off-screen images lazy-load.
- [ ] Loading the page produces no visible image-related layout shift.
- [ ] Every informative image has context-specific alternative text.
- [ ] Every decorative image uses empty alternative text.
- [ ] Decorative graphics and icons are hidden from assistive technology.
- [ ] The footer book mark reserves its intrinsic dimensions and is ignored by assistive technology because adjacent text supplies the identity.
- [ ] The footer's decorative dotted SVG is ignored by assistive technology and does not overlap content or focus indicators.
- [ ] Functional icons have an accessible name.
- [ ] No essential instruction or label exists only inside an image.
- [ ] Text over imagery remains on a controlled surface with verified contrast.
- [ ] Responsive crops preserve the meaningful subject.
- [ ] Every published image has recorded rights, consent and attribution status.
- [ ] No production logo or icon was extracted from the raster brand board.

### 2.8 SEO and social-sharing metadata

- [ ] The rendered `<title>` is non-empty and unique among indexable pages.
- [ ] The rendered meta description is non-empty, unique, contains no placeholder text and accurately states the page purpose approved in `PROJECT_SPEC.md`.
- [ ] The canonical URL is absolute and equals `https://cichandbook.com` plus the final canonical route.
- [ ] The page has exactly one descriptive H1.
- [ ] The indexing decision is recorded and matches the page’s approved completion status.
- [ ] Important content is present in server-rendered HTML.
- [ ] Link text is descriptive.
- [ ] Any removed or renamed route uses its approved redirect or 404 behaviour.
- [ ] Social-sharing metadata has a recorded decision of approved or excluded.
- [ ] If social sharing is approved, `og:title`, `og:type`, `og:url` and `og:image` are present and non-empty.
- [ ] If social sharing is approved, `og:description` matches the approved page summary.
- [ ] If social sharing is approved, `og:url` matches the canonical URL.
- [ ] If social sharing is approved, `og:image` is an absolute HTTPS URL that resolves successfully.
- [ ] If social sharing is approved, `og:image:width`, `og:image:height` and `og:image:alt` are accurate.
- [ ] If social sharing is approved, corresponding social-card title, description, image and image-alt metadata are present and accurate.
- [ ] If social sharing is approved, an approved preview validator shows the expected title, description and image.
- [ ] If social sharing is excluded, no partial, default, broken or placeholder social metadata remains.

### 2.9 Performance, JavaScript, console and placeholders

- [ ] A mobile Lighthouse run against the production build scores at least 90 for Performance.
- [ ] Measured LCP is no more than 2.5 seconds.
- [ ] Measured INP is no more than 200ms where an interaction measurement is available.
- [ ] Measured CLS is no more than 0.1.
- [ ] The report records test hardware, network settings, URL, date and whether results are lab or field data.
- [ ] Browser-console testing produces zero errors and unhandled promise rejections.
- [ ] Every console warning is resolved or has a documented approved reason.
- [ ] Network testing produces zero failed first-party requests.
- [ ] Every shipped client script supports a confirmed interaction.
- [ ] The page’s important content and navigation remain available with JavaScript disabled.
- [ ] No whole-page hydration or unused framework runtime is present.
- [ ] No user-visible TODO, FIXME, Lorem Ipsum, unapproved “Coming Soon”, `[TO CONFIRM]`, empty title, fake contact detail, placeholder destination, temporary image or inactive control remains. The approved “Coming soon” copy is permitted only on `/for-organisations/`.
- [ ] No conditional form, account, LMS, analytics, social or integration feature is visually presented as available unless approved and functional.

### 2.10 Page-specific completion checks

#### Home

- [ ] Header, responsive navigation and search are present and functional.
- [ ] The hero explains the Western Australian CIC information purpose in plain language.
- [ ] The individual pathway has a clear label, explanation and working action to the WA Guide.
- [ ] The organisation pathway has a clear label, explanation and only an approved destination.
- [ ] Both audience cards have equal prominence and discoverability.
- [ ] Plain-English, step-by-step, compassionate/inclusive and WA-focused principles are present.
- [ ] The introductory “start with the basics” pathway reaches approved content.
- [ ] Newsletter controls are absent unless the feature and all form behaviour are approved.
- [ ] The footer displays the existing book mark beside the accessible “CIC Handbook” identity and approved tagline.
- [ ] Footer links reach About CIC, Making a claim, Check eligibility, Support services, and For organisations at their approved routes or fragments.
- [ ] The acknowledgement exactly matches the approved text in `CONTENT.md`.
- [ ] The copyright year matches the current build year and reads “CIC Handbook. All rights reserved.”
- [ ] The footer states “This site provides general information only and is not legal advice.”
- [ ] No unapproved legal, news, contact, training, resource, or social footer link or control appears.

#### Western Australian CIC Guide

- [ ] Content warning and “take your time” guidance are present.
- [ ] Definitions are present.
- [ ] Guide purpose, information status and legal-information disclaimer are present.
- [ ] “What criminal injuries compensation is” content is present and approved.
- [ ] “Who may apply” content is present and approved.
- [ ] Refusal and reduction circumstances are present and approved.
- [ ] Coverage information is present and approved.
- [ ] Claims without a charge or conviction are addressed.
- [ ] Time-limit and extension information is present and approved.
- [ ] Application steps are present and approved.
- [ ] Application contents are explained.
- [ ] Statement of Impact guidance is present.
- [ ] Supporting-evidence and record-keeping guidance is present.
- [ ] Interim-payment information is present.
- [ ] Offender-notification information is present.
- [ ] Post-lodgement process information is present.
- [ ] Appeal information is present.
- [ ] Help and support-services routes are present.
- [ ] Official forms, source documents and application destinations are approved and current.
- [ ] Guide print output passes section 2.6.
- [ ] A download action appears only when an approved current accessible artefact exists.

#### Support Services

- [ ] Emergency warning is present and immediately discoverable.
- [ ] The page states that support is available independently of a compensation claim.
- [ ] Approved national services are present.
- [ ] Approved WA or local services are present.
- [ ] Legal-help information is present.
- [ ] Return links to the guide and other approved resources work.
- [ ] Every service name, number, availability claim, eligibility statement and URL has a current review record.

#### For Organisations

- [ ] The page presents the approved holding state without unreleased
  organisation-pathway purpose or training copy.
- [ ] `/for-organisations/` has a unique page title, meta description, canonical URL and H1.
- [ ] The visible page content is limited to “For organisations” and “Coming soon”.
- [ ] The page is indexable and appears in the generated sitemap and Pagefind index.
- [ ] The global-navigation link and homepage “Access resources” action both reach `/for-organisations/`.
- [ ] No “Coming soon” label or inactive organisation control appears in the header or homepage.
- [ ] No unapproved module, resource, release date, form, contact detail, start action, account, tracking, assessment, certification or CPD recognition appears.

#### Training Module

- [ ] Module identity and objective are approved.
- [ ] Intended learner is approved.
- [ ] Learning content is approved.
- [ ] Sequence and navigation are approved.
- [ ] Any activity or assessment is approved and functional.
- [ ] Completion criteria are approved and do not imply unimplemented tracking.
- [ ] Downloads are approved, current and accessible.
- [ ] References, accountable reviewer and review date are present.
- [ ] Accessibility alternatives are provided.
- [ ] The module is not marked complete while any required field remains `[TO CONFIRM]`.

#### 404

- [ ] An unknown route displays a 404 heading, text stating that the page was not found and at least two working recovery links to approved destinations.
- [ ] Recovery actions to approved Home, Guide, Search or Support destinations work.
- [ ] The 404 route is excluded from the sitemap and indexing.

If the completed page is a different approved type, record its required sections from `PROJECT_SPEC.md` and test each as an additional checkbox.

## 3. Final pre-launch checks

### 3.1 Release scope, content and approvals

- [ ] `docs/CONTENT.md` is populated with the final approved content, source inventory, reviewers and review dates.
- [ ] Every launch-blocking `[TO CONFIRM]` item is resolved or its associated page, feature or integration is removed from release.
- [ ] Legal entity, project owner and accountable publisher are confirmed.
- [ ] Government or legal-service affiliation wording is confirmed.
- [ ] Privacy obligations, terms, and any required dedicated disclaimer or legal pages are approved.
- [ ] Footer identity, tagline, quick-link destinations, acknowledgement, copyright wording, and general-information disclaimer match `CONTENT.md`.
- [ ] Unapproved legal, news, contact, organisation training or resource, and social destinations are absent from the footer.
- [ ] The organisation holding route and navigation label are approved; any
  released training scope and modules have separate approval.
- [ ] Newsletter, contact, analytics, social, quick exit, LMS, authentication and learner-management decisions are documented as approved or excluded.
- [ ] The final supported browser, device and assistive-technology matrix is recorded.
- [ ] Every legal-process page has accountable legal/content-owner approval.
- [ ] Every page records its last content review.
- [ ] Every support service, telephone number, availability statement, eligibility statement and URL is reverified immediately before launch.
- [ ] Every production image has completed rights, consent, source and attribution records.
- [ ] Manrope and Inter font source, licensing, formats and delivery are approved.
- [ ] Final logo, favicon, icon and illustration assets are approved and are not extracted from the raster board.

### 3.2 Frozen install, type checking and production build

- [ ] `bun install --frozen-lockfile` completes successfully from a clean dependency installation.
- [ ] `bun run check` exits with code 0 and reports zero diagnostics.
- [ ] `bun run build` exits with code 0.
- [ ] The final build log contains no unresolved error or unexplained warning.
- [ ] `bun run preview` serves the complete production build.
- [ ] The preview uses the release commit and no uncommitted production change.
- [ ] Generated search and sitemap artefacts are present.
- [ ] The final deployment configuration publishes the intended `dist` output.

### 3.3 Full-site functionality and links

- [ ] A full-site crawl reports zero broken internal routes.
- [ ] A full-site crawl reports zero missing fragment targets.
- [ ] Every external URL is revalidated against its approved content, not merely its HTTP response.
- [ ] Every telephone link is revalidated against its approved number.
- [ ] The reviewer and date for external-link validation are recorded.
- [ ] The complete individual journey works from Home through the WA Guide to approved official application and support destinations.
- [ ] The current organisation journey works from Home to `/for-organisations/`;
  released training is included in the journey only when separately approved.
- [ ] A recorded Pagefind fixture contains at least five approved queries covering eligibility, time limits, Statement of Impact, interim payments and support services; each expected route or fragment appears within the first five results.
- [ ] Every search result opens the correct page or guide section.
- [ ] Every WA Guide topic link lands on the intended section.
- [ ] In A4 portrait print preview, the complete guide is present, body text is at least 10pt, navigation-only controls are absent and no heading, paragraph, table or image overlaps, clips or is truncated horizontally.
- [ ] Every approved download resolves to the current artefact.
- [ ] Every official application action leaves CIC Handbook for the approved official channel.
- [ ] Every support action reaches the intended approved service.
- [ ] Every public route contains one branded site footer, and every approved footer route and fragment resolves correctly.
- [ ] Starlight previous/next pagination remains above the branded site footer where pagination applies.
- [ ] The compact navigation works throughout the released site.
- [ ] A deliberately unknown route reaches the 404 experience and every recovery link works.
- [ ] Every approved form completes its success path.
- [ ] Every approved form completes its validation, server-error and network-failure path without losing recoverable input.
- [ ] No on-site claim application, sensitive-evidence upload, payment or claim-status feature exists.

### 3.4 WCAG 2.2 Level AA release audit

- [ ] Every released full page and responsive variation passes all applicable WCAG 2.2 Level A and Level AA success criteria.
- [ ] Every complete user process passes all applicable WCAG 2.2 Level A and Level AA success criteria.
- [ ] Automated accessibility testing reports zero failures on every released page template and state.
- [ ] Keyboard-only testing covers navigation, search, guide navigation, disclosures, forms, links and controls across the entire site.
- [ ] Screen-reader testing is completed for every browser/assistive-technology combination in the approved matrix.
- [ ] Every page has a working skip link, logical landmarks, exactly one H1 and a valid heading hierarchy.
- [ ] Every focus indicator is visible, unobscured and meets the approved contrast requirement.
- [ ] No keyboard trap exists.
- [ ] All content and functionality remain available at 200% zoom.
- [ ] Every page reflows at 320px without page-level horizontal scrolling except permitted contained scrollers.
- [ ] Normal text, large text, controls, graphics and focus states pass their documented contrast thresholds.
- [ ] Every form label, instruction, error and status message is programmatically associated or announced.
- [ ] Every informative image has alternative text that states the information or purpose conveyed without using a filename or duplicating adjacent text, and every decorative asset is ignored by assistive technology.
- [ ] No essential content is embedded only in imagery.
- [ ] Reduced-motion testing confirms the absence of content-delaying or disorienting motion.
- [ ] Sensitive content has an advance warning and support routes remain discoverable.
- [ ] Accessible HTML equivalents exist for every inaccessible or unapproved downloadable document.
- [ ] The accessibility reviewer, date, scope, results and remediation evidence are recorded.

### 3.5 Responsive and cross-browser release audit

- [ ] Every released page is tested at 320px, 639px, 640px, 1023px, 1024px and 1440px.
- [ ] Every released page is tested at 200% browser zoom.
- [ ] Every browser and device in the approved support matrix completes the critical journeys.
- [ ] Navigation, search, pathway cards, guide navigation, forms, tables, images and footer reflow without page-level horizontal scrolling.
- [ ] The branded footer is tested at 320px, 640px, 1024px, 1276px, 1440px, and 200% zoom with no clipping, overlap, lost content, or obscured focus.
- [ ] Every public route has zero visible document or background gap beneath the
  branded footer on short pages and tall viewports; the footer remains in normal
  flow after long content and Starlight pagination without fixed, sticky or
  overlay positioning.
- [ ] DOM order, reading order and focus order remain logical in every layout.
- [ ] Image crops remain meaningful at every target width.
- [ ] No sticky, fixed or overlay element obscures content or focus.
- [ ] Touch targets remain at least 44 × 44 CSS pixels with at least 8 CSS pixels between adjacent target rectangles.
- [ ] No browser-specific console error, failed request, visual overlap or broken interaction remains.

### 3.6 SEO, sitemap, robots and social sharing

- [ ] Every indexable route has one unique non-empty title.
- [ ] Every indexable route has one unique non-empty meta description.
- [ ] Every indexable route has one absolute canonical URL matching its final route.
- [ ] Every canonical URL begins with `https://cichandbook.com`.
- [ ] Every indexable route has exactly one descriptive H1.
- [ ] Every important page has crawlable rendered HTML content.
- [ ] Every removed or renamed route either reaches its approved redirect target or returns the tested 404 experience with at least two working recovery links.
- [ ] Incomplete, duplicate, private and non-indexable routes use the approved indexing rule.
- [ ] The generated sitemap contains every and only canonical, indexable, completed public route.
- [ ] The 404 route is absent from the sitemap.
- [ ] Every sitemap URL begins with `https://cichandbook.com`.
- [ ] The built `robots.txt` contains the exact directive `Sitemap: https://cichandbook.com/sitemap-index.xml`.
- [ ] Search indexes final public content and excludes incomplete or non-public content.
- [ ] The final social-sharing metadata decision is approved.
- [ ] If social sharing is approved, Open Graph and corresponding social-card values pass every per-page check in section 2.8.
- [ ] If social sharing is approved, every released page type has a captured passing social-preview result.
- [ ] If social sharing is excluded, no broken, partial or placeholder sharing metadata is emitted.

### 3.7 Performance, images and JavaScript

- [ ] Home records a mobile Lighthouse Performance score of at least 90.
- [ ] WA Guide records a mobile Lighthouse Performance score of at least 90.
- [ ] Support Services records a mobile Lighthouse Performance score of at least 90.
- [ ] Every additional released page template records a mobile Lighthouse Performance score of at least 90.
- [ ] Every report records the release URL, date, environment, throttling and tool version.
- [ ] Every tested template records LCP ≤2.5 seconds.
- [ ] Every tested interactive template records INP ≤200ms where measurement is available.
- [ ] Every tested template records CLS ≤0.1.
- [ ] Lab results and 75th-percentile field results are labelled separately.
- [ ] Every likely LCP image is identified and uses intentional priority loading.
- [ ] No non-critical image is unnecessarily loaded with high priority.
- [ ] Every image reserves space before load.
- [ ] Responsive image output and file formats are inspected for each page template.
- [ ] No oversized source is served where a smaller generated candidate is selected by the browser.
- [ ] Font loading does not hide text or cause a layout failure.
- [ ] The final `dist` JavaScript inventory is recorded.
- [ ] Every JavaScript bundle is attributable to confirmed functionality.
- [ ] No whole-page hydration, unused framework runtime or abandoned integration script is present.
- [ ] Important content and navigation remain available with JavaScript disabled.

### 3.8 Console, network, placeholders and incomplete functionality

- [ ] Every public route is loaded in production preview with zero console errors.
- [ ] Every public route is loaded in production preview with zero unhandled promise rejections.
- [ ] Every console warning is resolved or has a recorded approved reason.
- [ ] Every public route loads with zero failed first-party requests.
- [ ] `rg -n 'console\\.|debugger|javascript:' src` returns no production debugging statement, `debugger`, or `javascript:` URL.
- [ ] `rg -n -i 'TODO|FIXME|lorem|ipsum|coming soon|\\[TO CONFIRM\\]|example\\.com' src public` is reviewed and no unapproved user-visible placeholder remains; “Coming soon” appears only as approved page copy on `/for-organisations/`.
- [ ] No rendered page contains an empty title, fake contact detail, temporary image, inactive control or placeholder destination.
- [ ] No unapproved route appears in navigation, search, sitemap or footer.
- [ ] Footer output contains the current build year, exact approved acknowledgement and disclaimer, and no stale hardcoded year.
- [ ] The branded footer is absent from print output while Starlight page pagination remains functional on screen.
- [ ] No unapproved newsletter, contact form, quick exit, account, authentication, LMS, progress, assessment, certificate, analytics, CRM, social link or third-party integration appears.
- [ ] No visual treatment implies government or court authority, legal representation, eligibility, claim approval, stored application status, learner completion, certification or guaranteed compensation.
- [ ] No published CIC guidance extends beyond Western Australia.
- [ ] Every known defect is closed; no fixed baseline or launch-blocking failure remains open.

### 3.9 Final sign-off

- [ ] Product owner confirms the released scope matches `PROJECT_SPEC.md`.
- [ ] Accountable content/legal reviewer approves the released legal-process content.
- [ ] Design reviewer confirms the release matches `DESIGN_SYSTEM.md` and `STYLE_GUIDE.md`.
- [ ] Technical reviewer confirms the release follows `ARCHITECTURE.md`.
- [ ] Accessibility reviewer confirms the WCAG 2.2 Level AA audit scope and result.
- [ ] Release owner confirms every applicable final pre-launch check is passed and every `N/A` item relates only to a feature or page outside the approved release scope.
- [ ] Release version, commit, test evidence and approval date are recorded.
