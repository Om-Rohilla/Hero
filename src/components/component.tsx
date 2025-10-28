import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import '../index.css';

export interface CometHeroProps {
  title?: string;
  tagline?: string;
  animationSpeed?: 'slow' | 'normal' | 'fast';
  showParticles?: boolean;
  particleCount?: number;
  theme?: {
    primaryColor?: string;
    accentColor?: string;
    backgroundColor?: string;
  };
  className?: string;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface Streak {
  id: number;
  width: number;
  height: number;
  top: number;
  left: number;
  opacity: number;
  duration: number;
  delay: number;
  color: string;
  blur: number;
}

export const CometHero: React.FC<CometHeroProps> = ({
  title = 'comet',
  tagline = 'The internet is better on',
  animationSpeed = 'normal',
  showParticles = true,
  particleCount = 40,
  theme = {},
  className = '',
}) => {
  const speedMultiplier = {
    slow: 1.5,
    normal: 1,
    fast: 0.6,
  }[animationSpeed];

  // Generate random particles
  const particles = useMemo<Particle[]>(() => {
    if (!showParticles) return [];
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
  }, [particleCount, showParticles]);

  // Generate light streaks
  const streaks = useMemo<Streak[]>(() => {
    const streakConfigs = [
      // Background blue streaks
      { width: 400, height: 2, opacity: 0.3, color: 'blue', blur: 8 },
      { width: 600, height: 3, opacity: 0.25, color: 'blue', blur: 10 },
      { width: 350, height: 2, opacity: 0.2, color: 'cyan', blur: 6 },
      // Mid-layer white/silver streaks
      { width: 500, height: 3, opacity: 0.5, color: 'white', blur: 12 },
      { width: 450, height: 2, opacity: 0.4, color: 'white', blur: 10 },
      { width: 550, height: 4, opacity: 0.35, color: 'silver', blur: 14 },
      // Foreground orange/gold accents
      { width: 300, height: 2, opacity: 0.6, color: 'orange', blur: 8 },
      { width: 400, height: 3, opacity: 0.5, color: 'gold', blur: 10 },
    ];

    return streakConfigs.map((config, i) => ({
      id: i,
      ...config,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: (Math.random() * 4 + 3) * speedMultiplier,
      delay: Math.random() * 2,
    }));
  }, [speedMultiplier]);

  // Text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div
      className={`comet-hero-container ${className}`}
      style={{
        backgroundColor: theme.backgroundColor || '#0a1628',
      }}
    >
      {/* Background Gradient */}
      <div className="comet-hero-gradient" />

      {/* Vignette Effect */}
      <div className="comet-hero-vignette" />

      {/* Light Streaks */}
      <div className="comet-hero-streaks">
        {streaks.map((streak) => (
          <div
            key={streak.id}
            className={`comet-streak comet-streak-${streak.color}`}
            style={{
              width: `${streak.width}px`,
              height: `${streak.height}px`,
              top: `${streak.top}%`,
              left: `${streak.left}%`,
              opacity: streak.opacity,
              filter: `blur(${streak.blur}px)`,
              animationDuration: `${streak.duration}s`,
              animationDelay: `${streak.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Particles */}
      {showParticles && (
        <div className="comet-hero-particles">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="comet-particle"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <motion.div
        className="comet-hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="comet-hero-tagline"
          variants={textVariants}
          style={{ color: theme.primaryColor || '#9ca3af' }}
        >
          {tagline}
        </motion.p>

        <motion.h1
          className="comet-hero-title"
          variants={titleVariants}
          style={{ color: theme.accentColor || '#ffffff' }}
        >
          {title}
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default CometHero;
