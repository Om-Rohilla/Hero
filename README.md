# 🌌 Comet Hero Section

> A premium animated hero section with cosmic planet, shimmer effects, and interactive cursor trail for modern web applications.

[![21st.dev](https://img.shields.io/badge/21st.dev-Component-blue)](https://21st.dev/r/omrohilla6/comet-hero-section)
[![React](https://img.shields.io/badge/React-18+-blue)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)](https://www.javascript.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11+-purple)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📖 Description

The **Comet Hero Section** transforms ordinary landing pages into immersive cosmic experiences. Featuring a stunning Jupiter-like planet with 18 orbiting asteroids, 80 twinkling stars, and an interactive purple comet cursor trail, this component creates an unforgettable first impression that captivates visitors.

Built with performance as a priority, every animation is GPU-accelerated for buttery-smooth 60fps rendering. The component includes gradient text effects with hover-activated shimmer on the "COMET" label, automatic text wrapping for optimal readability, and a magical particle-based cursor effect that follows mouse movement with physics-based trails.

Perfect for SaaS products, AI platforms, tech startups, creative portfolios, or any project where you want to make a bold, futuristic statement. The component is fully responsive from mobile to 4K displays, SSR-safe for Next.js, respects accessibility preferences, and works flawlessly out of the box.

---

## ✨ Features

- 🪐 **Animated Cosmic Planet** - Rotating Jupiter-like sphere with atmospheric layers and curved bands
- 🌑 **18 Orbiting Asteroids** - Multi-layered asteroid belt with realistic wobble effects
- ⭐ **80 Twinkling Stars** - Dynamic starfield with varied brightness and pulsing animations
- 🖱️ **Interactive Cursor Trail** - Purple comet effect with colorful particle physics
- 💫 **Hover Shimmer Effects** - Light sweep animation on "COMET" label activation
- 🎨 **Gradient Text** - Smooth color transitions on "AI" and "Cosmic" keywords
- 🚀 **GPU-Accelerated** - Smooth 60fps performance using transform and opacity
- 📱 **Fully Responsive** - Adapts perfectly from 360px mobile to 4K displays
- ⚡ **Self-Contained** - All CSS embedded, no external dependencies
- 🎭 **SSR Ready** - No hydration mismatches, safe for Next.js App Router
- ♿ **Accessible** - Respects `prefers-reduced-motion` and high contrast preferences
- 🎯 **Zero Config** - Drop it in and it works immediately
- 💎 **Customizable Props** - Control text, animations, particles, and theme colors
- 🔧 **Pure JavaScript** - No TypeScript required, works everywhere

---

## 🎥 Preview

### Visual Elements
- **Background**: Deep cosmic gradient with animated radial glow
- **Stars**: 80 individual twinkling points with varied timing
- **Planet**: Central rotating sphere with atmosphere and surface details
- **Asteroids**: 18 orbiting stones in multiple orbital paths
- **Text**: "COMET" label, gradient hero text, and subtitle
- **Cursor**: Interactive purple comet trail with particle effects

### Interactions
- **Hover "COMET"**: Light sweep animation glides across letters
- **Mouse Movement**: Purple particle trail follows cursor with physics
- **Responsive**: Layout adapts seamlessly across all breakpoints
- **Animations**: Continuous smooth rotations and floating effects

> 🔗 **[View Live Demo →](https://21st.dev/r/omrohilla6/comet-hero-section)**

---

## 📦 Installation

Install the component directly into your project using the official 21st.dev command:

```bash
npx shadcn@latest add https://21st.dev/r/omrohilla6/comet-hero-section
```

This command will:
- ✅ Automatically install all required dependencies
- ✅ Add the component files to your project
- ✅ Set up proper imports and paths
- ✅ Configure Framer Motion

---

## 🛠️ Prerequisites

Before installing, ensure your project has:

| Requirement | Version | Notes |
|------------|---------|-------|
| **React** | 18+ | Client components with hooks |
| **Framer Motion** | 11+ | Animation engine |
| **Tailwind CSS** | 3.4+ | Optional (CSS is self-contained) |

> **Note:** The installation command handles dependency installation automatically via shadcn/ui.

---

## 🚀 Basic Usage

### 1. Import the Component

```jsx
import { Component } from '@/components/ui/component'

export default function Home() {
  return <Component />
}
```

That's it! The component renders with default cosmic-themed content.

---

## 🎯 Advanced Usage

### Custom Text Content

```jsx
<Component 
  title="Transform AI with Cosmic Intelligence"
  subtitle="Build, automate, and scale on Comet"
/>
```

### Control Particles

```jsx
<Component 
  showParticles={true}
  particleCount={50}
/>
```

### Custom Theme Colors

```jsx
<Component 
  theme={{
    primaryColor: '#a855f7',
    accentColor: '#ec4899',
    backgroundColor: '#0a1628'
  }}
/>
```

### Animation Speed

```jsx
<Component 
  animationSpeed="fast" // 'slow' | 'normal' | 'fast'
/>
```

### With Custom Wrapper

```jsx
<div className="relative min-h-screen">
  <Component className="absolute inset-0" />
  <div className="relative z-10">
    {/* Your content on top */}
  </div>
</div>
```

### Full-Screen Hero

```jsx
export default function LandingPage() {
  return (
    <main>
      <Component />
      <section className="relative z-10 bg-white dark:bg-gray-900">
        {/* Rest of your page */}
      </section>
    </main>
  )
}
```

---

## 📋 API Reference

### Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `"Transform AI with..."` | Main heading text |
| `subtitle` | `string` | `"Build, automate..."` | Subtitle below planet |
| `animationSpeed` | `'slow'` \| `'normal'` \| `'fast'` | `'normal'` | Overall animation speed |
| `showParticles` | `boolean` | `true` | Enable floating particles |
| `particleCount` | `number` | `50` | Number of particles (1-100) |
| `theme` | `object` | `{}` | Custom color overrides |
| `theme.primaryColor` | `string` | - | Primary accent color |
| `theme.accentColor` | `string` | - | Secondary accent color |
| `theme.backgroundColor` | `string` | `'#0a1628'` | Background color |
| `className` | `string` | `''` | Additional CSS classes |

---

## 🔧 How It Works

### Technical Architecture

```
┌─────────────────────────────────────────┐
│       Comet Hero Component              │
├─────────────────────────────────────────┤
│                                         │
│  1. Renders Cosmic Background           │
│  2. Generates 80 Random Star Positions  │
│  3. Creates Rotating Planet Sphere      │
│  4. Spawns 18 Orbital Asteroids         │
│  5. Displays Animated Text Layers       │
│  6. Activates Cursor Trail Canvas       │
│  7. Listens for Mouse Movement          │
│  8. Generates Physics-Based Particles   │
│                                         │
└─────────────────────────────────────────┘
```

### Animation Layers

```
Layer 1: Background gradient (animated pulse)
Layer 2: Twinkling stars (80 individual)
Layer 3: Radial glow effects
Layer 4: Vignette overlay
Layer 5: Planet sphere (rotating)
Layer 6: Orbital asteroids (18 paths)
Layer 7: Text content (with animations)
Layer 8: Floating particles (optional)
Layer 9: Cursor trail canvas (top layer)
```

### Performance Optimizations

- **GPU Acceleration**: All animations use `transform` and `opacity`
- **Canvas Rendering**: Cursor trail uses efficient canvas API
- **Particle Recycling**: Old particles are removed to maintain performance
- **Memoization**: Stars and particles generated once with `useMemo`
- **SSR Safety**: `mounted` state prevents server-side canvas access
- **Conditional Rendering**: Particles only render when enabled
- **Transform-Only Animations**: No layout thrashing or repaints

---

## 🎨 Customization

### Changing Text Colors

The gradient text uses embedded CSS. To customize, fork the component and modify:

```javascript
// In component.jsx, find:
.gradient-text {
  background: linear-gradient(
    135deg,
    #f97316 0%,    // Change these colors
    #fb923c 30%,
    #ec4899 70%,
    #f472b6 100%
  );
}
```

### Adjusting Planet Size

```javascript
// In component.jsx, find:
.comet-hero-planet {
  width: 300px;   // Change size
  height: 300px;
}
```

### Modifying Star Count

```javascript
// In component.jsx, find:
const starCount = 80; // Increase or decrease
```

### Custom Cursor Colors

```javascript
// In CursorTrail component, find:
const colorPalette = [
  { r: 168, g: 85, b: 247 },   // Purple
  { r: 192, g: 132, b: 252 },  // Light Purple
  // Add your own RGB colors here
];
```

### Animation Timing

```javascript
// Planet rotation speed
animation: planet-rotate 25s linear infinite;
// Change 25s to any duration

// Star twinkle speed
duration: Math.random() * 3 + 2 // 2-5 seconds
// Adjust range as needed
```

---

## ♿ Accessibility

The component is built with accessibility as a priority:

### Motion Preferences

Respects `prefers-reduced-motion`. When enabled:
- All animations pause immediately
- Particles are disabled
- Cursor trail is simplified
- Only essential content remains

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
  }
}
```

### High Contrast Mode

Adjusts colors for better visibility:
- Text gets stronger contrast
- Gradient effects are simplified
- Shine effects are disabled
- Focus states enhanced

### Keyboard Navigation

- Component is non-interactive (no focus traps)
- Cursor effect doesn't interfere with keyboard use
- Text remains selectable

### Screen Readers

- Semantic HTML structure
- Proper heading hierarchy
- Decorative elements have `aria-hidden`
- Canvas cursor has `role="presentation"`

---

## 🐛 Troubleshooting

### Cursor trail not showing
**Issue**: No purple comet effect visible  
**Solution**: Ensure JavaScript is enabled and component is mounted. Check browser console for errors.

### Performance issues on mobile
**Issue**: Animations are choppy  
**Solution**: Component automatically reduces particles on smaller screens. Ensure no other heavy processes are running.

### Hydration mismatch in Next.js
**Issue**: React hydration error  
**Solution**: Component has built-in SSR safety with `mounted` state. Ensure you're using `"use client"` directive.

### Stars not twinkling
**Issue**: Stars are static  
**Solution**: Check that CSS animations are working. Test in a different browser.

### Text not centered
**Issue**: Text alignment is off  
**Solution**: Component is responsive. Check your viewport size and ensure no conflicting CSS.

### Import path not resolving
**Issue**: Cannot find module error  
**Solution**: Verify your path alias configuration in `tsconfig.json` or `jsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Framer Motion errors
**Issue**: Module not found errors  
**Solution**: Install Framer Motion manually:

```bash
npm install framer-motion
```

---

## 🎭 Use Cases

Perfect for:

- 🚀 **SaaS Landing Pages** - Make a bold first impression
- 🤖 **AI Product Websites** - Convey innovation and intelligence
- 💼 **Tech Startup Homepages** - Stand out from competitors
- 🎨 **Creative Portfolios** - Showcase your design skills
- 📱 **Mobile App Landing Pages** - Futuristic, engaging hero
- 🌐 **Web3/Crypto Projects** - Cosmic, space-age aesthetic
- 🎮 **Gaming Websites** - Immersive, interactive experience
- 🔬 **Science/Tech Blogs** - Premium, professional look

---

## 📊 Bundle Size

| Asset | Size | Gzipped |
|-------|------|---------|
| **JavaScript** | 289.68 KB | 89.55 KB |
| **CSS** | 31.81 KB | 6.73 KB |
| **Total** | 321.49 KB | 96.28 KB |

> Note: Framer Motion accounts for most of the bundle size. It's tree-shakeable and only imports what's used.

---

## 🤝 Contributing

Found a bug or have a feature request? Contributions are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

MIT License - feel free to use this component in your personal or commercial projects.

---

## 🙏 Acknowledgments

- **[21st.dev](https://21st.dev/)** - Component registry and hosting
- **[Framer Motion](https://www.framer.com/motion/)** - Powerful animation library
- **[shadcn/ui](https://ui.shadcn.com/)** - Component infrastructure
- **[Lucide](https://lucide.dev/)** - Icon inspiration
- **The React Community** - For amazing tools and support

---

## 🔗 Links

- **[Live Demo](https://21st.dev/r/omrohilla6/comet-hero-section)** - Try it yourself
- **[21st.dev Component Page](https://21st.dev/r/omrohilla6/comet-hero-section)** - Official listing
- **[Installation Guide](https://21st.dev/r/omrohilla6/comet-hero-section)** - Step-by-step setup
- **[Report Bug](https://github.com/yourusername/comet-hero-section/issues)** - Issue tracker

---

## 🌟 Featured Projects

Have you used Comet Hero Section in your project? Let us know! We'd love to feature it here.

---

<div align="center">

**Made with ❤️ and cosmic energy**

If you found this component helpful, consider giving it a ⭐ on 21st.dev!

[Install Now](https://21st.dev/r/omrohilla6/comet-hero-section) • [View Demo](https://21st.dev/r/omrohilla6/comet-hero-section) • [Report Issue](#)

</div>
