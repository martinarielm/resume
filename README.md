# Martín Mármol — Web Resume

A responsive personal resume website built with React and TypeScript, presenting my professional experience, technical skills, education, and contact details.

**[View resume](https://martinarielm.github.io/resume/)**

## Tech stack

- **React** — Component-based user interface.
- **TypeScript** — Typed components and work experience data.
- **Material UI & Material Icons** — Responsive layout, themed components, icons, and loading skeletons.
- **Emotion** — Styling engine used by Material UI.
- **Fontsource / Rubik** — Locally bundled font files.
- **Vite** — Local development server and production builds.
- **ESLint** — Static code analysis.
- **GitHub Pages** — Static hosting, with deployment through `gh-pages`.

## Project scope

Resume content is maintained directly in the repository. A mock data layer simulates asynchronous loading with a one-second delay, while React manages loading state and displays skeleton placeholders. The application runs entirely in the browser, without a backend server or database.

## Local development

With Node.js and npm installed, run:

```sh
npm install
npm run dev
```

Additional commands: `npm run build` creates the production build, `npm run preview` serves it locally, and `npm run lint` checks the code.
