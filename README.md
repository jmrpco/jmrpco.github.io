# James Pediongco — Portfolio

A responsive, dark-first portfolio built with Next.js App Router, TypeScript, and Tailwind CSS. Originally created with Lovable, migrated from Vite while retaining portfolio content and public assets.

## Development

Requires Node.js 20.9+ (Node.js 22 recommended) and npm.

```sh
npm ci
npm run dev
```

## Validation and preview

```sh
npm run typecheck
npm run lint
npm run build
npm run preview
```

`next build` exports the complete site to `out/`, including `404.html`. `npm run preview` serves that directory without an SPA fallback. Images are unoptimized so the site does not require an image server. Fonts use local system stacks, with no build-time font downloads.

## GitHub Pages

The site is configured for **https://jmrpco.github.io/** at the domain root, so no base path or asset prefix is needed. In the repository's **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source. The workflow builds on pushes to `main` or manual dispatch and deploys `out/` with the official Pages actions. `public/.nojekyll` is copied into the export.

## Content

Page sections live in `src/components/`; project content is managed only in `src/data/projects.txt`. The original project links point to the same portfolio demo and GitHub profile; update these when individual project URLs are available. Experience totals are preserved as supplied, without adding employers or employment dates.

The contact form validates the fields and opens a prefilled email in the visitor's email app. The visitor must send the email there; no backend or form delivery service is configured.

Project screenshots are stored in `src/data/images/`; other original images remain in `public/`. The existing Git repository and remote are retained. Deployment runs only after changes are pushed or the workflow is manually triggered.

## Theme

The navbar Sun/Moon button switches between dark and light themes on desktop and mobile. Dark is the first-visit default. The choice is saved under `portfolio-theme` in localStorage and applied before the page paints; system theme changes do not override it. Theme switching suppresses color transitions to avoid flashes, while existing hover and entrance animations remain. If browser storage is unavailable, the toggle still works for the current visit.

## Edit projects in TXT

`src/data/projects.txt` is a UTF-8 file containing a **JSON array**, not freeform text. Add, edit, remove, hide, feature, or reorder projects by editing this file and rebuilding. Use double quotes, no comments, and no trailing commas.

```json
[
  {
    "id": "e-commerce-website",
    "title": "E-commerce Website",
    "description": "A fully responsive e-commerce platform with cart functionality and payment integration.",
    "image": "deliserv.png",
    "technologies": ["React", "Redux", "Node.js", "Express", "MongoDB"],
    "category": "Web Development",
    "githubUrl": "https://github.com/jmrpco",
    "liveUrl": "https://jmrpco.github.io/portfolio/",
    "featured": true,
    "order": 1,
    "visible": true
  }
]
```

Every record must include all eleven fields. IDs must be unique lowercase words separated by hyphens. Text fields must be nonempty, and `technologies` must contain at least one nonempty string. Use HTTP/HTTPS links; an empty `githubUrl` or `liveUrl` hides that link. Place project screenshots in `src/data/images/` and reference their relative filenames, such as `deliserv.png` or `dashboard/overview.webp`. PNG, JPG, JPEG, WebP, and SVG are supported. Do not use public URLs, absolute paths, or `..` segments. `category` appears on non-featured cards; featured cards receive the featured label and accent border. Multiple projects can be featured.

Set `visible` to `false` to hide a project without deleting it. Set `order` to a nonnegative integer; lower numbers appear first, and ties retain file order. An empty array is allowed. The existing responsive bento layout and hover animations apply automatically to added projects.

The server-only loader validates JSON, every record (including hidden ones), duplicate IDs, URLs, and safe relative image paths during static generation. Invalid content fails `npm run build` with the filename and validation details. Only visible, sorted projects are rendered into the static site; there are no APIs, browser requests for the TXT file, or filesystem reads after deployment. TXT edits require rebuilding; type checking alone does not validate the data file.

### Project screenshots

Add a PNG, JPG, JPEG, WebP, or SVG file under `src/data/images/`, set the project's `image` to its relative filename, and rebuild. Nested folders and filenames with spaces are supported. Use `"image": ""` for a project without a screenshot.

A static Webpack import context resolves the folder at build time. Next.js emits hashed screenshot assets under `_next/static/media/`, so GitHub Pages needs no image server or runtime filesystem access. Adding an image does not require component edits or hand-maintaining a manifest. Screenshots appear expanded in the cards, with responsive `object-contain` sizing. Missing or empty references show a themed placeholder and do not fail the build; failed browser image loads use the same fallback.
