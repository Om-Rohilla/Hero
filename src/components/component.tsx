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

interface TwinklingStar {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
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
  // Generate twinkling stars for background
  const twinklingStars = useMemo<TwinklingStar[]>(() => {
    const starCount = 35; // More stars for richer background
    return Array.from({ length: starCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5, // 0.5px to 3px
      duration: Math.random() * 3 + 2, // 2-5 seconds
      delay: Math.random() * 5, // Staggered start
    }));
  }, []);

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

      {/* Twinkling Stars Background */}
      <div className="twinkling-stars-container">
        {twinklingStars.map((star) => (
          <div
            key={star.id}
            className="twinkling-star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

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
        <div className="planet-rotation-markers" />
        
        {/* Orbiting Asteroids/Stones */}
        <div className="planet-orbit-container">
          <div className="orbital-stone stone-1" />
          <div className="orbital-stone stone-2" />
          <div className="orbital-stone stone-3" />
          <div className="orbital-stone stone-4" />
          <div className="orbital-stone stone-5" />
          <div className="orbital-stone stone-6" />
          <div className="orbital-stone stone-7" />
          <div className="orbital-stone stone-8" />
          <div className="orbital-stone stone-9" />
          <div className="orbital-stone stone-10" />
        </div>
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
