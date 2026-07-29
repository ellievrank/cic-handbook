# Project Instructions

Before making changes, read the applicable project documentation.

## Sources of Truth

Follow these documents:

1. `docs/PROJECT_SPEC.md` — website requirements, pages and functionality
2. `docs/CONTENT.md` — approved website copy and business information
3. `docs/DESIGN_SYSTEM.md` — colours, typography, spacing and design tokens
4. `docs/STYLE_GUIDE.md` — visual direction and design application
5. `docs/ARCHITECTURE.md` — project structure and coding conventions
6. `docs/QA_CHECKLIST.md` — completion and quality requirements

When instructions conflict:

1. The user’s current request takes priority.
2. `PROJECT_SPEC.md` determines required functionality.
3. `CONTENT.md` determines approved content.
4. `DESIGN_SYSTEM.md` determines exact design tokens.
5. `STYLE_GUIDE.md` determines visual interpretation.
6. `ARCHITECTURE.md` determines code organisation.
7. Existing code patterns apply where the documents are silent.

## Working Rules

- Inspect the existing codebase before editing.
- Reuse existing components before creating new ones.
- Keep page files focused on composing layouts and sections.
- Do not create one large page file containing the entire website.
- Use Astro components by default.
- Add client-side JavaScript only when genuine interaction requires it.
- Use Tailwind CSS according to the project design system.
- Do not invent business details, content or functionality.
- Do not replace approved copy without being asked.
- Keep changes focused on the requested task.
- Update documentation when architecture or behaviour changes.

## Required Checks

After meaningful code changes, run:

```bash
npm run check
npm run build
```

Run any additional configured linting, formatting or automated tests.

Resolve failures caused by the change before considering the task complete.

At the end of the task, report:

- What changed
- Which files changed
- Which checks were run
- Whether the checks passed
- Anything that remains incomplete or unverified


AGENTS.md should remain relatively short.
