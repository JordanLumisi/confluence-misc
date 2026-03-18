# Vite Starter Template

A minimal, flexible starter template for static sites, WordPress themes, and JavaScript experiments.

## Quick Start

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run clean` | Remove build output |

## Project Structure

```
/
├── src/
│   ├── js/
│   │   └── main.js        # JavaScript entry point
│   ├── css/
│   │   └── main.css       # Base styles
│   └── assets/
│       ├── images/
│       └── fonts/
│
├── dist/                  # Generated build output (do not edit)
├── index.html             # Entry point for static projects
│
├── vite.config.js
├── package.json
├── .gitignore
├── .env
└── README.md
```

## Usage

### Static Projects

Use `index.html` as the entry point. Run `npm run dev` to start the dev server.

### WordPress

Skip `index.html`. Enable manifest generation in `vite.config.js`:

```js
build: {
  manifest: true,
  // ...
}
```

Load assets in `functions.php` using the generated `dist/.vite/manifest.json`.

## Extending

This template is intentionally minimal. Add tools per project as needed:

- **Tailwind CSS** – `npm install -D tailwindcss @tailwindcss/vite`
- **Alpine.js** – `npm install alpinejs`
- **PostCSS** – `npm install -D postcss autoprefixer`

## Conventions

- Work inside `/src` only
- Never edit files in `/dist`
- Import CSS into `main.js` for bundling
- Use the `@` alias to import from `src/`

```js
import '@/css/main.css';
import { myModule } from '@/js/modules/myModule.js';
```
