import React, { useMemo, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import '../index.css';

export interface CometHeroProps {
  title?: string;
  subtitle?: string;
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

interface CursorParticle {
  x: number;
  y: number;
  opacity: number;
  scale: number;
  velocityX: number;
  velocityY: number;
  life: number;
  maxLife: number;
  color: { r: number; g: number; b: number };
}

/**
 * CursorTrail Component - Magical comet-like cursor with colorful particle trail
 */
const CursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<CursorParticle[]>([]);
  const mousePos = useRef({ x: -100, y: -100 });
  const targetPos = useRef({ x: -100, y: -100 });
  const lastMoveTime = useRef(Date.now());
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      lastMoveTime.current = Date.now();
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Calculate movement speed
    let lastMouseX = 0;
    let lastMouseY = 0;
    let speed = 0;

    // Animation loop
    const animate = () => {
      if (!ctx) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth cursor following with easing
      const easing = 0.18;
      mousePos.current.x += (targetPos.current.x - mousePos.current.x) * easing;
      mousePos.current.y += (targetPos.current.y - mousePos.current.y) * easing;

      // Calculate speed
      const dx = mousePos.current.x - lastMouseX;
      const dy = mousePos.current.y - lastMouseY;
      speed = Math.sqrt(dx * dx + dy * dy);
      lastMouseX = mousePos.current.x;
      lastMouseY = mousePos.current.y;

      // Purple-focused colorful palette with vibrant variety
      const colorPalette = [
        { r: 168, g: 85, b: 247 },   // Primary Purple
        { r: 192, g: 132, b: 252 },  // Light Purple
        { r: 147, g: 51, b: 234 },   // Deep Purple
        { r: 236, g: 72, b: 153 },   // Pink accent
        { r: 59, g: 130, b: 246 },   // Blue accent
        { r: 34, g: 211, b: 238 },   // Cyan accent
        { r: 251, g: 146, b: 60 },   // Orange spark
      ];

      // Generate particles when cursor is active
      if (mousePos.current.x > 0 && mousePos.current.y > 0) {
        // More particles on movement, minimum when idle
        const baseParticleCount = 3;
        const speedBonus = Math.floor(speed * 0.8);
        const particleCount = baseParticleCount + speedBonus;

        for (let i = 0; i < particleCount; i++) {
          // Favor purple tones (70% purple, 30% other colors)
          const colorIndex = Math.random() < 0.7 
            ? Math.floor(Math.random() * 3)  // Purple tones (first 3)
            : Math.floor(Math.random() * colorPalette.length);  // All colors
          const randomColor = colorPalette[colorIndex];

          particles.current.push({
            x: mousePos.current.x + (Math.random() - 0.5) * 3,
            y: mousePos.current.y + (Math.random() - 0.5) * 3,
            opacity: 1,
            scale: 0.8 + Math.random() * 0.4,
            velocityX: (Math.random() - 0.5) * 1.2,
            velocityY: (Math.random() - 0.5) * 1.2 + Math.random() * 0.5,
            life: 1,
            maxLife: 35 + Math.random() * 25,
            color: randomColor,
          });
        }

        // Limit particle count for performance
        if (particles.current.length > 200) {
          particles.current = particles.current.slice(-200);
        }
      }

      // Update and draw particles
      particles.current = particles.current.filter((particle) => {
        particle.life--;
        particle.x += particle.velocityX;
        particle.y += particle.velocityY;
        particle.velocityX *= 0.97;
        particle.velocityY *= 0.97;

        const lifeRatio = particle.life / particle.maxLife;
        particle.opacity = lifeRatio * 0.9;
        particle.scale = lifeRatio * 1.4;

        if (particle.life <= 0) return false;

        // Draw particle with dreamy glow
        const size = 5 * particle.scale;
        const { r, g, b } = particle.color;

        // Outer soft glow
        const glowGradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          size * 3
        );

        glowGradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${particle.opacity * 0.9})`);
        glowGradient.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, ${particle.opacity * 0.5})`);
        glowGradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Bright inner core
        const coreGradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          size * 0.8
        );
        coreGradient.addColorStop(0, `rgba(255, 255, 255, ${particle.opacity * 0.8})`);
        coreGradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${particle.opacity * 0.7})`);
        coreGradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, ${particle.opacity * 0.3})`);

        ctx.fillStyle = coreGradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size * 0.8, 0, Math.PI * 2);
        ctx.fill();

        return true;
      });

      // Draw smaller cursor head
      if (mousePos.current.x > 0 && mousePos.current.y > 0) {
        const timeSinceMove = Date.now() - lastMoveTime.current;
        const isPulsing = timeSinceMove > 120;
        const pulseScale = isPulsing ? 1 + Math.sin(Date.now() * 0.006) * 0.12 : 1;

        // Smaller cursor size (reduced from 4 to 2.5)
        const cursorSize = (2.5 + speed * 0.15) * pulseScale;
        const speedBrightness = Math.min(speed / 12, 1);

        // Outer purple glow
        const glowGradient = ctx.createRadialGradient(
          mousePos.current.x,
          mousePos.current.y,
          0,
          mousePos.current.x,
          mousePos.current.y,
          cursorSize * 4
        );

        glowGradient.addColorStop(0, `rgba(192, 132, 252, ${0.9 + speedBrightness * 0.1})`);
        glowGradient.addColorStop(0.3, `rgba(168, 85, 247, ${0.6 + speedBrightness * 0.3})`);
        glowGradient.addColorStop(0.7, `rgba(147, 51, 234, ${0.3 + speedBrightness * 0.2})`);
        glowGradient.addColorStop(1, 'rgba(168, 85, 247, 0)');

        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(mousePos.current.x, mousePos.current.y, cursorSize * 4, 0, Math.PI * 2);
        ctx.fill();

        // Bright white/purple core
        const coreGradient = ctx.createRadialGradient(
          mousePos.current.x,
          mousePos.current.y,
          0,
          mousePos.current.x,
          mousePos.current.y,
          cursorSize * 1.2
        );
        coreGradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        coreGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.95)');
        coreGradient.addColorStop(1, 'rgba(192, 132, 252, 0.6)');

        ctx.fillStyle = coreGradient;
        ctx.beginPath();
        ctx.arc(mousePos.current.x, mousePos.current.y, cursorSize * 1.2, 0, Math.PI * 2);
        ctx.fill();

        // Pulse ring effect when idle
        if (isPulsing) {
          const ringOpacity = 0.35 * (1 - (timeSinceMove % 1200) / 1200);
          const ringSize = cursorSize * 2 + (timeSinceMove % 1200) / 50;

          ctx.strokeStyle = `rgba(168, 85, 247, ${ringOpacity})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.arc(mousePos.current.x, mousePos.current.y, ringSize, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="cursor-trail-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
        filter: 'blur(0.4px)',
      }}
    />
  );
};

export const CometHero: React.FC<CometHeroProps> = ({
  title = 'Transform AI with Cosmic Intelligence.',
  subtitle = 'Build, automate, and scale on Comet.',
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
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9, filter: 'blur(20px)' },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1], // Custom easing for smooth entry
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 25, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
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

      {/* COMET Label - Top Center */}
      <motion.div
        className="comet-label-container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="comet-label">
          <span className="comet-label-text">COMET</span>
          <div className="comet-label-shine" />
        </div>
      </motion.div>

      {/* Main Heading - Between COMET and Planet */}
      <motion.div
        className="comet-main-heading-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="comet-main-heading">
          Transform <span className="gradient-text">AI</span> with <span className="gradient-text">Cosmic</span> Intelligence
        </h1>
      </motion.div>

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

      {/* Subtitle - Bottom Center */}
      <motion.div
        className="comet-subtitle-bottom-right"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="comet-subtitle-text">
          {subtitle}
        </p>
      </motion.div>

      {/* Magical Cursor Trail Effect */}
      <CursorTrail />
    </div>
  );
};

export default CometHero;
