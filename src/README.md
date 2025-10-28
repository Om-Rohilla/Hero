# Comet Hero

A stunning, comet-inspired animated hero section component built for the 21st.dev marketplace.

## Purpose

The Comet Hero component provides a visually captivating hero section with smooth, comet-like animations that draw users' attention to your landing page. Perfect for modern web applications that need an eye-catching entrance.

## Installation

```bash
npm install comet-hero
```

or

```bash
yarn add comet-hero
```

or

```bash
pnpm add comet-hero
```

## Basic Usage

```tsx
import { CometHero } from 'comet-hero';
import 'comet-hero/index.css';

function App() {
  return (
    <CometHero
      title="Welcome to the Future"
      subtitle="Building amazing experiences"
      ctaText="Get Started"
      onCtaClick={() => console.log('CTA clicked')}
    />
  );
}
```

## Customization Options

### Props

- **`title`** (string): Main headline text
- **`subtitle`** (string): Supporting text below the title
- **`ctaText`** (string): Call-to-action button text
- **`onCtaClick`** (function): Callback when CTA button is clicked

### Theme Customization

You can customize colors, animation speed, and other properties:

```tsx
<CometHero
  title="Your Title"
  subtitle="Your Subtitle"
  ctaText="Click Me"
  onCtaClick={handleClick}
  theme={{
    primaryColor: '#3b82f6',
    secondaryColor: '#8b5cf6',
    animationSpeed: 'normal', // 'slow' | 'normal' | 'fast'
  }}
/>
```

### Animation Speed

Control the comet animation speed:

- `slow`: Relaxed, subtle animations
- `normal`: Balanced animation timing (default)
- `fast`: Dynamic, energetic animations

## Requirements

- React 18+
- Tailwind CSS 3.4+
- Framer Motion 11+

## License

MIT

