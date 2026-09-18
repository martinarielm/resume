# Repository Guidelines

## Project Structure & Module Organization

This repository contains a React, TypeScript, and Vite résumé site styled with Material UI.

- `src/main.tsx` initializes React, fonts, and the theme; `src/App.tsx` composes the résumé page.
- `src/components/JobItem.tsx` renders experience entries and loading skeletons.
- `src/api.ts` holds job data and its loading function; `src/types/Job.ts` defines the shared data shape.
- `src/theme.ts` centralizes typography and palette settings.
- `public/` contains avatar images; `src/assets/` contains bundled assets.
- `dist/` is generated build output. Do not edit it directly.

## Build, Test, and Development Commands

Use npm and keep `package-lock.json` synchronized with dependency changes.

- `npm ci`: install dependencies from the lockfile.
- `npm run dev`: start the local Vite development server.
- `npm run build`: run TypeScript project checks and produce `dist/`.
- `npm run lint`: run ESLint on the project.
- `npm run preview`: serve the production build locally after building.
- `npm run deploy`: run the predeploy build and publish `dist/` through `gh-pages`. Use only when publication is requested.

## Coding Style & Naming Conventions

Follow existing source conventions: two-space indentation, double quotes, and semicolons. Use PascalCase for components and types (`JobItem`, `Job`) and camelCase for functions and variables. Prefer existing Material UI components and `sx` styling; place shared design settings in `src/theme.ts`. TypeScript strict checks and ESLint rules cover unused declarations, React Hooks, and refresh compatibility. No dedicated formatter is configured.

## Testing Guidelines

No automated test framework, test script, or coverage threshold is configured. Before submitting changes, run `npm run lint` and `npm run build`. Manually check mobile and desktop layouts, loading skeletons, experience entries, avatars, and contact links. Record checks and any failures in the pull request.

## Commit & Pull Request Guidelines

Recent commits use short, descriptive subjects such as `Update resume profile, skills, and work experience`; no consistent Conventional Commits requirement is evident. Keep commits focused. Pull requests should describe the change, link relevant issues, list validation results, and include screenshots for visual updates.

## Configuration & Agent Instructions

Preserve the `/resume/` base path in `vite.config.ts` for GitHub Pages. For library or tool documentation, use Context7: resolve the library ID first, then query the relevant concept.
