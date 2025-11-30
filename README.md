# Kabayun

Personal link hub for **Kabayun** - psytrance producer & DJ from Philadelphia, USA.

**Live Site:** [kabayun.com](https://www.kabayun.com)

## About

A modern link-tree style website featuring a cosmic deep space aesthetic. Built as a central hub for music, social links, and booking information.

## Tech Stack

- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - Radix UI component primitives
- [Vercel Analytics](https://vercel.com/analytics) - Web analytics
- [next/og](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image) - Dynamic Open Graph images

## Features

- Cosmic animated gradient background
- Glassmorphic UI design
- Dark / Light / System theme modes
- Dynamic OG images for social sharing
- Responsive layout
- Staggered page load animations

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main page
│   ├── opengraph-image.tsx  # Dynamic OG image generation
│   └── twitter-image.tsx    # Dynamic Twitter card image
├── components/
│   ├── cosmic-background.tsx # Animated background
│   ├── link-grid.tsx         # Link cards grid
│   ├── social-links.tsx      # Social media icons
│   ├── mode-toggle.tsx       # Theme toggle button
│   └── ui/                   # shadcn/ui components
└── lib/
    └── utils.ts              # Utility functions
```

## License

MIT
