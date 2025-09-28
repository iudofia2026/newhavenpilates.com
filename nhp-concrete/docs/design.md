# NHP Concrete Design System

A minimalist design system inspired by concreteclub.studio's aesthetic—clean, spacious, and architectural.

## Philosophy

This design system embraces the concrete aesthetic: raw, honest, and functional. It prioritizes readability, generous spacing, and subtle motion to create an experience that feels both modern and timeless.

## Color Palette

### Neutral Foundation
- **Background**: Light, airy neutrals (`#fafafa`, `#f5f5f5`, `#eeeeee`)
- **Text**: Near-black hierarchy (`#1a1a1a` → `#8a8a8a`)
- **Purpose**: Creates high contrast for readability while maintaining visual calm

### Accent Colors
Two muted accent options inspired by concrete materials:

#### Desaturated Teal (`#6b8e8e`)
- Evokes weathered concrete and natural patina
- Sophisticated, architectural feel
- Works well with neutral backgrounds

#### Warm Sand (`#b8a68a`)
- References concrete's natural earth tones
- Warmer, more inviting alternative
- Complements both light and dark text

## Typography

### Scale Philosophy
Fluid typography that scales beautifully across devices using `clamp()` functions.

#### Hero Text
- **Size**: `clamp(3.5rem, 2.5rem + 5vw, 6rem)`
- **Weight**: Bold (700)
- **Use**: Main headlines, impactful statements
- **Character**: Large, confident, architectural

#### Strong H2
- **Size**: `clamp(2rem, 1.5rem + 2.5vw, 3.5rem)`
- **Weight**: Semibold (600)
- **Use**: Section headers, important subheadings
- **Character**: Strong hierarchy, clear structure

#### Readable Body
- **Size**: `clamp(1rem, 0.95rem + 0.25vw, 1.125rem)`
- **Weight**: Normal (400)
- **Line Height**: Relaxed (1.6)
- **Use**: All body text, descriptions, content
- **Character**: Highly readable, comfortable for extended reading

### Font Stack
System fonts for optimal performance and native feel:
```css
--font-family-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
```

## Spacing Grid

### Generous Leading
Inspired by concreteclub.studio's airy layouts:

- **Base Unit**: `1rem` (16px)
- **Scale**: Geometric progression with generous multipliers
- **Range**: `0.25rem` (4px) to `16rem` (256px)

### Wide Gutters
- **Small**: `2rem` (32px)
- **Medium**: `3rem` (48px) 
- **Large**: `4rem` (64px)
- **Extra Large**: `6rem` (96px)

### Container Philosophy
Multiple container sizes for different content types:
- **Narrow**: `56rem` (896px) - Focused reading
- **Standard**: `80rem` (1280px) - Balanced layout
- **Wide**: `100%` - Full-width impact

## Motion & Animation

### Duration Scale
Carefully calibrated timing for natural feel:
- **Fast**: `150ms` - Micro-interactions, hover states
- **Normal**: `250ms` - Standard transitions
- **Slow**: `350ms` - Page transitions, modal animations
- **Slower**: `450ms` - Complex animations, staggered reveals

### Easing Functions
Standard cubic-bezier curves for consistent motion:
- **Standard**: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- **In**: `cubic-bezier(0.4, 0, 1, 1)`
- **Out**: `cubic-bezier(0, 0, 0.2, 1)`
- **In-Out**: `cubic-bezier(0.4, 0, 0.2, 1)`

### Stagger Animations
Scroll-triggered reveals with staggered timing:
- **Standard Delay**: `100ms`
- **Small Delay**: `50ms`
- **Large Delay**: `150ms`

## Usage Guidelines

### Color Usage
1. **Primary Text**: Use `--color-text-primary` for main content
2. **Secondary Text**: Use `--color-text-secondary` for supporting information
3. **Accent**: Use sparingly for highlights, links, and interactive elements
4. **Background**: Stick to neutral backgrounds for content areas

### Typography Hierarchy
1. **Hero**: One per page, maximum impact
2. **H2**: Clear section breaks, strong hierarchy
3. **Body**: Comfortable reading experience
4. **Maintain**: Consistent line heights and letter spacing

### Spacing Principles
1. **Generous**: Use larger spacing values for breathing room
2. **Consistent**: Stick to the defined scale
3. **Responsive**: Gutters adjust on mobile devices
4. **Purposeful**: Every space should serve a function

### Motion Guidelines
1. **Subtle**: Animations should enhance, not distract
2. **Fast**: Keep micro-interactions snappy
3. **Staggered**: Use delays for sequential reveals
4. **Accessible**: Respect `prefers-reduced-motion`

## Implementation

### CSS Variables
All tokens are available as CSS custom properties:
```css
:root {
  --color-text-primary: #1a1a1a;
  --font-size-hero: clamp(3.5rem, 2.5rem + 5vw, 6rem);
  --space-xl: calc(var(--space-unit) * 2);
  --duration-normal: 250ms;
}
```

### Utility Classes
Pre-built utility classes for common patterns:
```css
.text-hero { /* Hero typography */ }
.text-h2 { /* Strong H2 styling */ }
.text-body { /* Readable body text */ }
.container { /* Responsive container */ }
.animate-fade-in { /* Fade in animation */ }
```

### No Frameworks
Pure CSS implementation—no external dependencies required.

## Responsive Behavior

### Mobile Adaptations
- Gutters reduce to maintain proportions
- Typography scales appropriately
- Container padding adjusts for touch interfaces

### Breakpoint Strategy
- Mobile-first approach
- Fluid scaling with `clamp()`
- Container max-widths prevent excessive line lengths

## Accessibility

### Color Contrast
- All text combinations meet WCAG AA standards
- High contrast ratios for readability
- Semantic color usage for meaning

### Motion Preferences
- Respects `prefers-reduced-motion`
- Essential animations only for reduced motion users
- Clear focus states for keyboard navigation

## Inspiration

This design system draws inspiration from:
- **concreteclub.studio**: Spacious layouts, generous typography
- **Architectural Design**: Clean lines, functional beauty
- **Modern Web Standards**: Performance, accessibility, usability

The result is a design system that feels both contemporary and timeless—like well-crafted concrete architecture.