# Portfolio — Bedirhan Aktas

Personal portfolio site built with React and Vite. Showcases my projects, skills and contact info.

**Live:** https://portfolio-chi-blush-14n44wcve5.vercel.app

## Tech stack

- React 19
- Vite
- react-icons
- Hand-written CSS with design tokens (CSS custom properties), no UI framework

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint     # run ESLint
```

## Project structure

```
public/
  favicon.svg          # "BA" monogram icon
  screenshots/         # project cover images
src/
  Components/          # Navbar, Hero, About, Projects, Skills, Contact
  css/                 # one stylesheet per component
  Data/Projects.js     # project cards content (edit this to add projects)
  index.css            # design tokens + global styles
```

To add or edit a project, update `src/Data/Projects.js` — the Projects section renders from that array.
