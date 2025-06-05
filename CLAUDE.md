# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Build production site to ./dist/
- `npm run preview` - Preview production build locally

## Architecture Overview

This is an Astro-based portfolio website with a sophisticated puzzle piece animation system. The site showcases portfolio items in a responsive grid layout with interactive reveal effects.

### Component Structure

- **BaseLayout.astro** - Global layout with Google Fonts (Host Grotesk, IBM Plex Mono) and semantic HTML structure
- **PortfolioGrid.astro** - Main portfolio component with TypeScript interfaces, renders grid of portfolio items with overlay effects
- **ScrollHint.astro** - Responsive interaction hints (hover/scroll)

### Styling Architecture

Uses **global CSS** (not scoped) in `src/styles/portfolio.css` with:
- Dark theme (#000004 background)
- CSS Grid responsive layouts: 3x2 (desktop) → 2x3 (tablet) → 1x5 (mobile)
- Fluid typography using clamp()
- Complex mosaic reveal animations with CSS transforms

### Animation System

**image-reveal.js** implements a sophisticated puzzle piece system:
- Each portfolio item has unique puzzle configurations with custom shapes, colors, and slide directions
- **Responsive interactions**: hover-triggered (desktop) vs scroll-triggered (mobile/tablet) using Intersection Observer
- Hand-crafted color palettes that complement background images
- Performance optimized with debounced resize handlers and will-change properties

### Data Structure

Portfolio items are defined as structured data in the index.astro frontmatter with properties:
- id, title, subtitle, description, link, backgroundImage

### Key Technical Patterns

- Type-safe component props using Astro's TypeScript integration
- Data-driven rendering with frontmatter arrays
- Progressive enhancement (CSS Grid base + JavaScript animations)
- Mobile-first responsive design with breakpoints at 600px, 900px, 1200px