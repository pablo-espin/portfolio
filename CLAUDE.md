# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Build production site to ./dist/
- `npm run preview` - Preview production build locally

## Architecture Overview

This is an Astro-based portfolio website with a sophisticated puzzle piece animation system. The site showcases portfolio items in a responsive grid layout with interactive reveal effects.

### Component Structure

#### Main Layout Components
- **BaseLayout.astro** - Global layout with Google Fonts (Host Grotesk, IBM Plex Mono) and semantic HTML structure
- **Navigation.astro** - Site-wide navigation with logo and responsive design
- **PortfolioGrid.astro** - Main portfolio component with TypeScript interfaces, renders grid of portfolio items with overlay effects
- **ScrollHint.astro** - Responsive interaction hints (hover/scroll)

#### Project Layout System
- **ProjectLayout.astro** - Dedicated layout for case study pages with:
  - Container max-width of 1400px (--container-2xl)
  - Centered content layout with back navigation
  - Structured header with title, subtitle, description, and tags
  - Hero image support with 1200px max-width
  - Mobile-responsive padding adjustments

#### Content Components
- **Header.astro** - Semantic heading component with configurable levels (h1-h6), optional subtitles, and consistent spacing
- **Text.astro** - Typography component with size variants (small/normal/large), color themes (primary/secondary/accent), and global paragraph/list styling
- **Video.astro** - Advanced video component with:
  - Multiple size options: small (400px), medium (600px), large (800px), full-width, fullscreen
  - Responsive source selection (desktop/mobile versions)
  - Lazy loading with intersection observer and click-to-load placeholder
  - Custom controls styling for dark theme
  - Autoplay, loop, muted, and poster support
  - Object-fit control and custom height options
- **Image.astro** - Image component for case studies
- **Callout.astro** - Special content highlighting component

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

### Case Study Pages

Individual project pages (khthon.astro, carambolo.astro, etc.) use:
- **ProjectLayout** wrapper for consistent structure
- **Header** components for section titles
- **Text** components for content blocks
- **Video** components for project demonstrations
- **Image** components for visual assets

### Video Integration

The site supports both local MP4 videos and external content:
- Local videos stored in `public/videos/` directory
- Responsive video sources for desktop/mobile optimization
- Poster images for video thumbnails
- Lazy loading for performance optimization

### Key Technical Patterns

- Type-safe component props using Astro's TypeScript integration
- Data-driven rendering with frontmatter arrays
- Progressive enhancement (CSS Grid base + JavaScript animations)
- Mobile-first responsive design with breakpoints at 600px, 900px, 1200px