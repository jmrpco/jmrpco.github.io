# AGENTS.md

## Project Overview
Personal portfolio for a Senior Software Developer, showcasing professional experience, technical skills, featured projects, and contact information. Maintain a premium, responsive 2026-style design and deploy as a static site to GitHub Pages at `https://jmrpco.github.io/`.

## Tech Stack
- Framework: Next.js App Router, React, TypeScript
- Styling: Tailwind CSS; reuse existing UI components and animation libraries
- Package manager: npm (`package-lock.json`)
- Hosting: GitHub Pages via Next.js static export
- Content: Local project data in `src/data/projects.txt` (JSON array)
- Backend: None; do not introduce runtime server requirements

## What to Inspect
- `src/app/**`: routes, layouts, global styles, metadata
- `src/components/**`: shared UI and page sections
- `src/data/projects.txt`: project records (if present)
- `public/**`: images, icons, static assets
- `package.json`, `next.config.ts`, `tsconfig.json`, Tailwind/PostCSS configs
- `.github/workflows/**`: build and deployment
- `README.md`: setup and project editing instructions

Inspect only files relevant to the task. Do not read `.next/`, `out/`, `node_modules/`, or generated files. If a listed path does not exist, inspect the actual project structure rather than assuming it does.

## Development Workflow & Expectations
- Preserve existing functionality, content, assets, and Git history unless explicitly asked to change them.
- Make focused changes; avoid unrelated refactors and unnecessary dependencies.
- Ask before adding production dependencies or changing deployment architecture.
- Use `npm install` only when dependencies need updating; use `npm ci` for clean installs.
- Run `npm run lint` if defined and `npm run build` before finalizing; report any checks that could not run.
- Do not commit, push, or deploy unless explicitly requested.
- Keep responses concise: summarize changed files and any failed checks; no lengthy explanations.

## Coding Style & Naming Conventions
- Prefer typed functional React components and reusable, accessible UI.
- Use PascalCase for components/types and camelCase for variables/functions.
- Prefer Server Components; add `"use client"` only for browser interactivity.
- Keep components focused and avoid unnecessary abstractions.
- Use semantic HTML, keyboard-accessible controls, responsive layouts, and reduced-motion support.
- Maintain consistent dark and light theme styles and avoid hydration/theme flicker.

## Theme Rules
- Provide a working Sun/Moon toggle in the navigation.
- Default to dark mode on first visit; persist user choice in `localStorage`.
- Ensure both themes cover all sections, cards, typography, borders, and controls.
- Keep theme logic client-side and hydration-safe for static export.

## Projects Data Rules
- Treat `src/data/projects.txt` as the single source of truth when it exists; otherwise create it when implementing project-data changes.
- Store a valid JSON array with: `id`, `title`, `description`, `image`, `technologies`, `category`, `githubUrl`, `liveUrl`, `featured`, `order`, `visible`.
- Read and validate project data at build time, not through runtime filesystem calls.
- Render only `visible: true` projects, sort by `order`, and visually distinguish `featured: true`.
- Do not hardcode project entries in components or invent projects, URLs, metrics, or achievements.
- Adding, editing, hiding, or removing a project should require editing only the TXT file and rebuilding.

## GitHub Pages & Build Rules
- Preserve Next.js `output: 'export'` and `images.unoptimized: true` where configured.
- For root-domain deployment (`jmrpco.github.io`), do not introduce an unnecessary `basePath`.
- Keep GitHub Actions publishing the generated `out/` directory and preserve `.nojekyll` handling.
- Avoid API routes, middleware, Server Actions, SSR-only features, and runtime backend dependencies.
- Verify navigation, asset paths, SEO metadata, and static-export compatibility.

## Testing Rules
- Run available lint, type-check, test, and build scripts relevant to changed files.
- If a test suite does not exist, do not create a large test framework for a minor UI change.
- Manually check mobile navigation, theme persistence, project sorting/visibility, links, and accessibility when relevant.
- Fix errors introduced by the change; clearly report pre-existing failures.
