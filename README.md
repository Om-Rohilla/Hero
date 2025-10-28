# Comet Hero

A stunning, comet-inspired animated hero section component for modern web applications. Built for the 21st.dev marketplace with smooth animations and customizable options.

## ✨ Features

- 🎨 Beautiful comet trail animations
- 🚀 Smooth Framer Motion animations
- 📱 Fully responsive design
- ♿ Accessible and semantic HTML
- 🎯 Tailwind CSS styling
- 💪 TypeScript support
- 🔧 Highly customizable

## 📦 Installation

```bash
npm install comet-hero
```

Or with yarn:

```bash
yarn add comet-hero
```

## 🚀 Basic Usage

```tsx
import { CometHero } from 'comet-hero';

function App() {
  return (
    <CometHero
      title="Welcome to the Future"
      subtitle="Build amazing products with cutting-edge technology"
      ctaText="Get Started"
      ctaLink="/signup"
    />
  );
}
```

## 🎨 Customization Options

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Main heading text |
| `subtitle` | `string` | - | Subheading/description text |
| `ctaText` | `string` | - | Call-to-action button text |
| `ctaLink` | `string` | - | CTA button link/href |
| `animationSpeed` | `number` | `1` | Animation speed multiplier (0.5 = slower, 2 = faster) |
| `primaryColor` | `string` | - | Primary theme color (Tailwind class or hex) |
| `secondaryColor` | `string` | - | Secondary theme color (Tailwind class or hex) |
| `showComet` | `boolean` | `true` | Toggle comet animation visibility |

### Example with Custom Options

```tsx
<CometHero
  title="Build Something Amazing"
  subtitle="The future of web development is here"
  ctaText="Start Building"
  ctaLink="/dashboard"
  animationSpeed={1.5}
  primaryColor="text-purple-500"
  secondaryColor="text-blue-500"
  showComet={true}
/>
```

## 🎭 Animation Customization

The component uses Framer Motion for smooth animations. You can customize the animation timing and effects by modifying the `index.css` file or passing custom animation variants.

## 🛠️ Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 💬 Support

For issues and questions, please open an issue on the GitHub repository.

# Hero
