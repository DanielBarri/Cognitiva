# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Cognitiva is a Next.js 16 web application designed as an educational platform for children to learn reading through interactive stories and games. The app is built with React 19, TypeScript, and Tailwind CSS v4.

**Target audience**: Children learning to read, with family involvement tracking
**Primary language**: Spanish
**Tech stack**: Next.js App Router, React 19, TypeScript 5, Tailwind CSS v4

## Development Commands

```bash
# Start development server at http://localhost:3000
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Project Structure

- **`src/app/`** - Next.js App Router pages and layouts
  - `page.tsx` - Main landing page (client component with scroll animations)
  - `layout.tsx` - Root layout with Geist fonts configuration
  - `globals.css` - Global styles and Tailwind CSS base
- **`public/`** - Static assets
- **TypeScript config** - Uses `@/*` path alias for `./src/*`

## Architecture Notes

### App Router & Client Components

This project uses Next.js App Router. The main landing page (`src/app/page.tsx`) is a client component (`'use client'`) that implements:

- Smooth scroll behavior for anchor links
- Intersection Observer-based scroll animations for feature cards and benefit items
- Direct DOM manipulation for animations (opacity/transform transitions)

### Styling Approach

- **Tailwind CSS v4** with PostCSS plugin (`@tailwindcss/postcss`)
- Custom CSS in `globals.css` handles complex animations, floating shapes, and component-specific styles
- Mix of Tailwind utilities and traditional CSS classes (e.g., `.feature-card`, `.hero`, `.floating-shapes`)
- Custom font variables: `--font-geist-sans` and `--font-geist-mono`

### Key UI Patterns

1. **Floating background shapes** - SVG shapes with CSS animations
2. **Feature cards & benefit items** - Animate in on scroll using IntersectionObserver
3. **Custom SVG illustrations** - Inline SVG for hero section kids illustration
4. **Emoji-heavy design** - Emojis used extensively throughout UI for child-friendly appeal

## TypeScript Configuration

- Target: ES2017
- Strict mode enabled
- Module resolution: bundler (Next.js specific)
- Path alias: `@/*` maps to `./src/*`
- JSX runtime: react-jsx (React 19)

## Important Conventions

1. **Component structure**: Pages in `src/app/` directory follow App Router conventions
2. **Client-side interactions**: Use `'use client'` directive for components with hooks/browser APIs
3. **Font optimization**: Geist Sans and Geist Mono loaded via `next/font/google`
4. **Animation lifecycle**: Clean up event listeners and observers in useEffect return functions
5. **Spanish content**: All user-facing text is in Spanish - maintain this language consistency
