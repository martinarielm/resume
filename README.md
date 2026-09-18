# Martín Mármol — Web Resume

A responsive personal resume website built with React and TypeScript, presenting my professional experience, technical skills, education, and contact details.

**[View resume](https://martinarielm.github.io/resume/)**

## Tech stack

- **React** — Component-based user interface.
- **TypeScript** — Typed components and work experience data.
- **Material UI & Material Icons** — UI components, icons, and a shared theme.
- **Emotion** — Styling engine used by Material UI.
- **Vite** — Local development server and production builds.
- **ESLint** — Static code analysis.
- **GitHub Pages** — Static hosting, with deployment through `gh-pages`.

## Features

- Responsive layout with stacked sections on mobile and two columns on wider screens, plus adaptive spacing.
- Reusable, typed experience components and wrapping skill tags.
- Simulated asynchronous data loading with skeleton placeholders.
- Open Graph metadata for link previews.

Resume content lives in the repository; the application runs in the browser without a backend or database.

## Local development

With Node.js and npm installed, run:

```sh
npm install
npm run dev
```

Additional commands: `npm run build` creates the production build, `npm run preview` serves it locally, and `npm run lint` checks the code.
