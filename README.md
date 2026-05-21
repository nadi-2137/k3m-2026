# Konstytucja 3 Maja - Educational Website

Educational website about the Polish Constitution of 3 May 1791, built with Astro and Tailwind CSS. The project combines static content pages, interactive quizzes, printable materials, SEO metadata, sitemap generation, accessibility checks, and Playwright end-to-end tests.

Live site: <https://nadia.luczak.org/k3m-2026/>

## Author and Context

The website was created by Nadia Zofia Łuczak, a grade 8A student at Primary School No. 83 in Łódź, Poland. It was prepared as a competition project for the `Konstytucja 3 Maja` contest.

Its goal is to explain the Constitution of 3 May in an accessible way for students: from the basic question "what was it?" through source text, archival context, comparisons, quizzes, and printable study materials.

## Features

- Static Astro pages for historical topics, glossary entries, source notes, and downloadable learning materials.
- Interactive quiz modes: chronology, matching terms, true/false, single-choice, and open questions.
- Production build configured for deployment under `/k3m-2026`.
- SEO metadata, canonical URLs, Open Graph image, `robots.txt`, and sitemap output.
- Automated checks for Astro diagnostics, data validation, accessibility, base-path routing, and user flows.

## Tech Stack

- Astro 6
- Tailwind CSS 4
- TypeScript
- Playwright
- pnpm with pinned Node and pnpm versions via `package.json`

## Project Structure

- `src/pages` - Astro routes.
- `src/components` - reusable UI and interactive components.
- `src/layouts` - page layouts.
- `src/data` - public site data used by the app.
- `src/styles/global.css` - global Tailwind CSS.
- `public` - static assets, PDFs, favicons, and Open Graph assets.
- `tests` - Playwright e2e, accessibility, and visual tests.

## Commands

| Command | Action |
| :-- | :-- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start local dev server at `localhost:4321` |
| `pnpm dev:k3m` | Start dev server with `/k3m-2026` base path |
| `pnpm check` | Run Astro diagnostics |
| `pnpm check:data` | Validate internal site data and links |
| `pnpm build` | Build the site with root base path |
| `pnpm build:prod` | Build the production variant for `https://nadia.luczak.org/k3m-2026/` |
| `pnpm test:e2e` | Run Playwright end-to-end tests |
| `pnpm test:e2e:k3m` | Run base-path deployment tests |
| `pnpm test:a11y` | Run accessibility checks |

## Quality Gates

Before publishing, the project is expected to pass:

```bash
pnpm check
pnpm build:prod
pnpm test:e2e
pnpm test:e2e:k3m
pnpm test:a11y
```

## Assets and Licenses

The source code is licensed under the MIT License. Educational content, PDFs, and third-party visual materials may have separate copyright or attribution requirements.

Logo and favicon assets use the `Herb Rzeczypospolitej Obojga Narodów` file from Wikimedia Commons. Reuse must preserve the author attribution and the CC BY-SA/GFDL terms listed on the source file page.

The Jan Matejko painting and portrait images are local copies of Wikimedia Commons files described in the site source notes as public domain / PD-Art materials.
