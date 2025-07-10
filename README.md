# Astro Demo Blog

A personal blog built with Astro, featuring blog posts, tags, and a responsive design.

## Live Site

Visit the site: [https://josh-williams-curtin.github.io/astro-demo](https://josh-williams-curtin.github.io/astro-demo)

## Features

- **Blog Posts**: Markdown-based blog posts with frontmatter
- **Tag System**: Categorize and filter posts by tags
- **Responsive Design**: Mobile-friendly navigation with hamburger menu
- **Dark/Light Theme**: Toggle between themes
- **RSS Feed**: Subscribe to blog updates
- **GitHub Pages**: Automatic deployment

## Tech Stack

- **Astro**: Static site generator
- **Preact**: Interactive components
- **Markdown**: Content management
- **GitHub Actions**: CI/CD deployment

## Project Structure

```
src/
├── components/     # Reusable UI components
├── layouts/        # Page layouts
├── pages/          # Route pages
├── blog/           # Markdown blog posts
├── styles/         # Global CSS
└── scripts/        # Client-side JavaScript
```

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions. Simply push to the `main` branch to trigger a new deployment.

## Blog Posts

Blog posts are written in Markdown and stored in `src/blog/`. Each post includes:

- Title, description, and author
- Publication date
- Tags for categorization
- Featured image

## Customization

- **Theme**: Toggle between light and dark modes
- **Navigation**: Responsive hamburger menu for mobile
- **Styling**: Custom CSS with CSS variables for theming
