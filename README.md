# Astro Carbon

A GitHub Blog-inspired dark theme for Astro. Clean, professional, and built for developer blogs.

![Astro Carbon Theme](./preview.png)

## Features

- **Dark Theme** - GitHub-inspired dark color scheme with excellent readability
- **Mega Menu Navigation** - Category-based navigation with hover dropdowns and featured content
- **Hero Sections** - Multiple hero layouts for featuring content
- **Content Collections** - Built-in support for Astro content collections (posts, changelog)
- **Responsive Design** - Mobile-first approach with smooth breakpoints
- **Search** - Built-in search modal (Cmd/Ctrl + K)
- **RSS Feed** - Automatic RSS feed generation
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards, and structured data

## Quick Start

```bash
# Clone the repository
git clone https://github.com/ry-ops/astro-carbon.git my-blog
cd my-blog

# Install dependencies
npm install

# Start development server
npm run dev
```

## Project Structure

```
/
├── public/
│   └── js/header.js         # Navigation scripts
├── src/
│   ├── components/
│   │   ├── Header.astro     # Main navigation with mega menu
│   │   ├── Footer.astro     # Site footer
│   │   ├── MegaMenu.astro   # Category dropdown menus
│   │   ├── HeroFeatured.astro
│   │   └── ...
│   ├── config/
│   │   └── categories.ts    # Category configuration
│   ├── content/
│   │   ├── config.ts        # Content collection schemas
│   │   └── posts/           # Blog posts (Markdown/MDX)
│   ├── layouts/
│   │   └── Layout.astro     # Base layout
│   ├── pages/
│   │   └── index.astro      # Homepage
│   └── styles/
│       ├── critical.css     # Above-the-fold styles
│       └── global.css       # Global styles & CSS variables
└── package.json
```

## Configuration

### Categories

Edit `src/config/categories.ts` to customize navigation categories:

```typescript
export const CATEGORIES = [
  {
    name: 'Engineering',
    slug: 'engineering',
    description: 'Software architecture and system design',
    subcategories: [
      { name: 'Architecture', tag: 'architecture', description: '...' },
      // ...
    ],
    featured: {
      title: 'Featured Post',
      slug: 'featured-post-slug',
      image: '/images/posts/featured.svg',
      description: '...'
    }
  }
];
```

### Styles

CSS variables are defined in `src/styles/global.css`:

```css
:root {
  --bg-primary: #0d1117;
  --bg-secondary: #161b22;
  --text-primary: #f0f3f6;
  --accent-primary: #58a6ff;
  /* ... */
}
```

## Adding Content

### Blog Posts

Create Markdown files in `src/content/posts/`:

```markdown
---
title: "My First Post"
description: "A brief description"
date: 2025-01-01
category: engineering
author: Your Name
tags: ["astro", "web-dev"]
hero:
  image: /images/posts/my-post-hero.svg
  alt: Post hero image
---

Your content here...
```

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build for production to `./dist/` |
| `npm run preview` | Preview production build locally |

## Customization

### Removing ry-ops Branding

1. Update `src/config/categories.ts` with your categories
2. Replace logos in `public/`
3. Update meta tags in `src/layouts/Layout.astro`
4. Modify footer links in `src/components/Footer.astro`

### Adding New Components

Components are standard Astro components. Create new ones in `src/components/` and import them where needed.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

MIT License - see [LICENSE](./LICENSE) for details.

## Credits

- Design inspired by [GitHub Blog](https://github.blog)
- Built with [Astro](https://astro.build)
