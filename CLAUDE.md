# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev         # Start dev server with Turbopack
pnpm build       # Production build
pnpm lint        # ESLint
pnpm start       # Start production server
```

## Architecture

This is a personal link-in-bio site for Kabayun (psytrance artist), built with Next.js 15 and React 19. Single-page app with no routing beyond the main page.

### Key Files

- `src/app/page.tsx` - Main page component, orchestrates all sections
- `src/components/link-grid.tsx` - External link cards (bookings, music, records)
- `src/components/social-links.tsx` - Social media icon row with tooltips
- `src/components/theme-provider.tsx` - Custom dark/light theme context (not next-themes)
- `src/app/globals.css` - Theme variables, glassmorphic effects, animations

### Theming

Uses a custom ThemeProvider that sets `data-theme` attribute on `<html>`. Theme CSS variables defined in `globals.css` under `:root[data-theme="light"]` and `:root[data-theme="dark"]`. Dark mode is the primary experience.

Theme-conditional visibility: use `.dark-only` and `.light-only` classes.

### UI Components

Uses shadcn/ui pattern (`src/components/ui/`) with Radix primitives. Utility function `cn()` in `src/lib/utils.ts` merges Tailwind classes.

### Styling

- Tailwind CSS with custom theme extending shadcn defaults
- HSL color variables for semantic colors
- Glassmorphic card effects (`.glass-card`, `.gradient-border`)
- Cosmic background with animated gradients
- Font: Inter (body) and Outfit (display headings)
