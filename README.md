# Backroads App

A React single-page app for a travel brand landing page. The UI is split into reusable components and most repeated content is driven from a shared data file.

## Tech Stack

- React (Create React App)
- JavaScript (ES6)
- CSS (single global stylesheet in `src/index.css`)
- Font Awesome (CDN link in `public/index.html`)

## Project Structure

```text
backroads-app/
  public/
    index.html          # App HTML shell + Font Awesome link
  src/
    components/
      Navbar.js
      About.js
      Services.js
      Tours.js
      Hero.js
      Footer.js
      Title.js          # Reusable section title component
    images/             # Local image assets
    App.js              # Main page composition
    data.js             # Shared content data (links, services, tours)
    index.css           # Global styles for all sections
    index.js            # React entry point
  package.json
  README.md
```

## Current Render Flow

1. `src/index.js` mounts `<App />` in `React.StrictMode`.
2. `src/App.js` renders the page sections in this exact order:
   - `Navbar`
   - `About`
   - `Services`
   - `Tours`
   - `Hero`
   - `Footer`
3. Components map shared arrays from `src/data.js`:
   - `pageLinks` in Navbar + Footer
   - `socialLinks` in Navbar + Footer
   - `services` in Services
   - `tours` in Tours
4. `Title` is reused by About, Services, and Tours for section headings.

## Development Workflow

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

```bash
npm start
```

Runs the app in development mode at `https://temp-backroad-app-v1.vercel.app/`.

### 3. Build for production

```bash
npm run build
```

Creates the optimized production build in `build/`.

### 4. Run tests

```bash
npm test
```

Starts the test runner in watch mode.

## Content Update Workflow

- Update text, links, icons, and tour/service cards in `src/data.js`.
- Update section-specific markup in the related component under `src/components/`.
- Update global visual styling in `src/index.css`.
- Replace image assets in `src/images/` and update imports where needed.

## Notes About Current Implementation

- Smooth scroll is enabled via CSS (`html { scroll-behavior: smooth; }`).
- The navbar toggle button is present for mobile UI, but no React click handler is currently wired to open/close links.
- Footer year is dynamic (`new Date().getFullYear()`).
