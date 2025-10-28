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
  opacity: number;
}

interface Streak {
  id: number;
  layer: 1 | 2 | 3;
  startX: number;
  startY: number;
  duration: number;
  delay: number;
  opacity: number;
  scale: number;
  blur: number;
  gradient: string;
}

export const CometHero: React.FC<CometHeroProps> = ({
  title = 'comet',
  tagline = 'The internet is better on',
  animationSpeed = 'normal',
  showParticles = true,
  particleCount = 50,
  theme = {},
  className = '',
}) => {
  const speedMultiplier = {
    slow: 1.5,
    normal: 1,
    fast: 0.65,
  }[animationSpeed];

  // Generate advanced multi-layered streaks with GPU optimization
  const streaks = useMemo<Streak[]>(() => {
    const allStreaks: Streak[] = [];

    // LAYER 1: Background - Slow, Wide, Subtle
    const layer1Config = [
      { gradient: 'blue-dark', opacity: 0.2, duration: 10, blur: 12 },
      { gradient: 'blue-dark', opacity: 0.18, duration: 12, blur: 14 },
      { gradient: 'cyan-subtle', opacity: 0.15, duration: 11, blur: 10 },
      { gradient: 'blue-dark', opacity: 0.22, duration: 9, blur: 13 },
    ];

    layer1Config.forEach((config, i) => {
      allStreaks.push({
        id: `l1-${i}`,
        layer: 1,
        startX: -20 + Math.random() * -10,
        startY: 100 + Math.random() * 20,
        duration: config.duration * speedMultiplier,
        delay: i * 0.8,
        opacity: config.opacity,
        scale: 1.0,
        blur: config.blur,
        gradient: config.gradient,
      });
    });

    // LAYER 2: Mid-ground - Medium Speed, Varied Angles
    const layer2Config = [
      { gradient: 'cyan-bright', opacity: 0.45, duration: 6.5, blur: 8 },
      { gradient: 'white-soft', opacity: 0.5, duration: 7, blur: 10 },
      { gradient: 'blue-medium', opacity: 0.4, duration: 6, blur: 9 },
      { gradient: 'cyan-bright', opacity: 0.55, duration: 7.5, blur: 11 },
      { gradient: 'white-soft', opacity: 0.48, duration: 5.5, blur: 8 },
    ];

    layer2Config.forEach((config, i) => {
      allStreaks.push({
        id: `l2-${i}`,
        layer: 2,
        startX: -15 + Math.random() * -8,
        startY: 105 + Math.random() * 15,
        duration: config.duration * speedMultiplier,
        delay: i * 0.6 + 0.3,
        opacity: config.opacity,
        scale: 1.05,
        blur: config.blur,
        gradient: config.gradient,
      });
    });

    // LAYER 3: Foreground - Fast, Bright, High Impact
    const layer3Config = [
      { gradient: 'white-intense', opacity: 0.85, duration: 4, blur: 6 },
      { gradient: 'orange-glow', opacity: 0.9, duration: 4.5, blur: 7 },
      { gradient: 'gold-bright', opacity: 0.8, duration: 3.5, blur: 5 },
    ];

    layer3Config.forEach((config, i) => {
      allStreaks.push({
        id: `l3-${i}`,
        layer: 3,
        startX: -10 + Math.random() * -5,
        startY: 110 + Math.random() * 10,
        duration: config.duration * speedMultiplier,
        delay: i * 0.5 + 0.2,
        opacity: config.opacity,
        scale: 1.15,
        blur: config.blur,
        gradient: config.gradient,
      });
    });

    return allStreaks;
  }, [speedMultiplier]);

  // Generate optimized particles with varied characteristics
  const particles = useMemo<Particle[]>(() => {
    if (!showParticles) return [];
    return Array.from({ length: particleCount }, (_, i) => {
      const size = Math.random() * 2.5 + 0.8;
      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size,
        duration: Math.random() * 4 + 2.5,
        delay: Math.random() * 3,
        opacity: Math.random() * 0.6 + 0.3,
      };
    });
  }, [particleCount, showParticles]);

  // Enhanced text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 40, filter: 'blur(15px)' },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2,
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
      {/* Animated Background Gradient */}
      <div className="comet-hero-gradient" />

      {/* Dynamic Vignette */}
      <div className="comet-hero-vignette" />

      {/* Radial Glow Effect */}
      <div className="comet-hero-radial-glow" />

      {/* Jupiter-like Planet Sphere */}
      <div className="comet-hero-planet">
        <div className="planet-core" />
        <div className="planet-atmosphere" />
        <div className="planet-texture" />
        <div className="planet-surface-detail" />
        <div className="planet-shine-effect" />
      </div>

      {/* LAYER 1: Background Streaks */}
      <div className="comet-streaks-layer comet-streaks-layer-1">
        {streaks
          .filter((s) => s.layer === 1)
          .map((streak) => (
            <div
              key={streak.id}
              className={`comet-streak comet-streak-${streak.gradient}`}
              style={
                {
                  '--streak-start-x': `${streak.startX}%`,
                  '--streak-start-y': `${streak.startY}%`,
                  '--streak-duration': `${streak.duration}s`,
                  '--streak-delay': `${streak.delay}s`,
                  '--streak-opacity': streak.opacity,
                  '--streak-scale': streak.scale,
                  '--streak-blur': `${streak.blur}px`,
                } as React.CSSProperties
              }
              data-layer="1"
            />
          ))}
      </div>

      {/* LAYER 2: Mid-ground Streaks */}
      <div className="comet-streaks-layer comet-streaks-layer-2">
        {streaks
          .filter((s) => s.layer === 2)
          .map((streak) => (
            <div
              key={streak.id}
              className={`comet-streak comet-streak-${streak.gradient}`}
              style={
                {
                  '--streak-start-x': `${streak.startX}%`,
                  '--streak-start-y': `${streak.startY}%`,
                  '--streak-duration': `${streak.duration}s`,
                  '--streak-delay': `${streak.delay}s`,
                  '--streak-opacity': streak.opacity,
                  '--streak-scale': streak.scale,
                  '--streak-blur': `${streak.blur}px`,
                } as React.CSSProperties
              }
              data-layer="2"
            />
          ))}
      </div>

      {/* LAYER 3: Foreground Streaks */}
      <div className="comet-streaks-layer comet-streaks-layer-3">
        {streaks
          .filter((s) => s.layer === 3)
          .map((streak) => (
            <div
              key={streak.id}
              className={`comet-streak comet-streak-${streak.gradient}`}
              style={
                {
                  '--streak-start-x': `${streak.startX}%`,
                  '--streak-start-y': `${streak.startY}%`,
                  '--streak-duration': `${streak.duration}s`,
                  '--streak-delay': `${streak.delay}s`,
                  '--streak-opacity': streak.opacity,
                  '--streak-scale': streak.scale,
                  '--streak-blur': `${streak.blur}px`,
                } as React.CSSProperties
              }
              data-layer="3"
            />
          ))}
      </div>

      {/* Enhanced Particles */}
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
                opacity: [particle.opacity * 0.3, particle.opacity, particle.opacity * 0.3],
                scale: [1, 1.3, 1],
                y: [0, -10, 0],
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

      {/* Content with Enhanced Animations */}
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
