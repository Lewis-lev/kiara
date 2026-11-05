# Kiara Rope Access

A React single-page profile site for Kiara Rope Access, built with Vite.

## Requirements

- Node.js 18 or newer

## Development

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

The production site is generated in `dist/`. Deploy the contents of that
directory to a static web host.

Images and the existing site assets are served from `public/img/`.

## Deploy to GitHub Pages

The GitHub Actions workflow builds the site with Node.js and deploys it to
GitHub Pages whenever changes are pushed to `main`. In the repository settings,
open **Pages** and set the build and deployment source to **GitHub Actions**.

The Vite build uses relative asset paths so the site works from the repository
subpath on GitHub Pages.
