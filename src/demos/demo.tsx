import React, { useState } from 'react';
import { CometHero } from '../components/component';

/**
 * Demo Component showcasing CometHero usage examples
 */
const CometHeroDemo: React.FC = () => {
  const [currentDemo, setCurrentDemo] = useState<number>(0);

  const demos = [
    {
      name: 'Default Comet Hero',
      description: 'Standard configuration with default settings',
      component: <CometHero />,
    },
    {
      name: 'Custom Text',
      description: 'Customized title and tagline',
      component: (
        <CometHero
          title="velocity"
          tagline="Experience the future of browsing"
        />
      ),
    },
    {
      name: 'Fast Animation',
      description: 'Increased animation speed for dynamic feel',
      component: (
        <CometHero
          title="turbo"
          tagline="Speed meets intelligence"
          animationSpeed="fast"
        />
      ),
    },
    {
      name: 'Slow Animation',
      description: 'Slower, more relaxed animation pace',
      component: (
        <CometHero
          title="zen"
          tagline="Calm and focused browsing"
          animationSpeed="slow"
        />
      ),
    },
    {
      name: 'Custom Theme - Purple',
      description: 'Custom color scheme with purple accents',
      component: (
        <CometHero
          title="nebula"
          tagline="Explore the digital cosmos"
          theme={{
            primaryColor: '#c084fc',
            accentColor: '#e9d5ff',
            backgroundColor: '#1e1b4b',
          }}
        />
      ),
    },
    {
      name: 'Custom Theme - Green',
      description: 'Custom color scheme with green tones',
      component: (
        <CometHero
          title="aurora"
          tagline="Navigate with natural intelligence"
          theme={{
            primaryColor: '#86efac',
            accentColor: '#d1fae5',
            backgroundColor: '#064e3b',
          }}
        />
      ),
    },
    {
      name: 'Fewer Particles',
      description: 'Reduced particle count for cleaner look',
      component: (
        <CometHero
          title="minimalist"
          tagline="Less is more"
          particleCount={20}
        />
      ),
    },
    {
      name: 'More Particles',
      description: 'Increased particle density',
      component: (
        <CometHero
          title="cosmic"
          tagline="Lost in the stars"
          particleCount={80}
        />
      ),
    },
    {
      name: 'No Particles',
      description: 'Only light streaks, no particles',
      component: (
        <CometHero
          title="streamlined"
          tagline="Pure motion"
          showParticles={false}
        />
      ),
    },
  ];

  return (
    <div className="demo-wrapper">
      {/* Demo Controls */}
      <div className="demo-controls">
        <div className="demo-controls-inner">
          <h2 className="demo-title">Comet Hero Demos</h2>
          <p className="demo-description">
            Explore different configurations of the Comet Hero component
          </p>

          <div className="demo-buttons">
            {demos.map((demo, index) => (
              <button
                key={index}
                onClick={() => setCurrentDemo(index)}
                className={`demo-button ${
                  currentDemo === index ? 'demo-button-active' : ''
                }`}
              >
                <span className="demo-button-name">{demo.name}</span>
                <span className="demo-button-description">
                  {demo.description}
                </span>
              </button>
            ))}
          </div>

          {/* Code Example */}
          <div className="demo-code-section">
            <h3 className="demo-code-title">Current Configuration:</h3>
            <pre className="demo-code">
              <code>{getDemoCode(currentDemo)}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Active Demo */}
      <div className="demo-display">{demos[currentDemo].component}</div>

      <style jsx>{`
        .demo-wrapper {
          position: relative;
          min-height: 100vh;
        }

        .demo-controls {
          position: fixed;
          top: 0;
          left: 0;
          width: 400px;
          height: 100vh;
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(10px);
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          overflow-y: auto;
          z-index: 1000;
          padding: 2rem;
        }

        .demo-controls-inner {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .demo-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
        }

        .demo-description {
          font-size: 0.875rem;
          color: #94a3b8;
          margin: 0;
          line-height: 1.5;
        }

        .demo-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .demo-button {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0.75rem 1rem;
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
          color: #e2e8f0;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
        }

        .demo-button:hover {
          background: rgba(30, 41, 59, 0.8);
          border-color: rgba(59, 130, 246, 0.5);
          transform: translateX(4px);
        }

        .demo-button-active {
          background: rgba(59, 130, 246, 0.2);
          border-color: rgba(59, 130, 246, 0.8);
        }

        .demo-button-name {
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .demo-button-description {
          font-size: 0.75rem;
          color: #94a3b8;
          line-height: 1.4;
        }

        .demo-code-section {
          margin-top: 1rem;
        }

        .demo-code-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: #e2e8f0;
          margin-bottom: 0.5rem;
        }

        .demo-code {
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
          padding: 1rem;
          font-size: 0.75rem;
          color: #94a3b8;
          overflow-x: auto;
          line-height: 1.6;
        }

        .demo-display {
          margin-left: 400px;
        }

        @media (max-width: 1024px) {
          .demo-controls {
            width: 100%;
            height: auto;
            max-height: 50vh;
            position: relative;
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .demo-display {
            margin-left: 0;
          }
        }
      `}</style>
    </div>
  );
};

// Helper function to generate code examples
const getDemoCode = (demoIndex: number): string => {
  const codeExamples = [
    `<CometHero />`,
    
    `<CometHero
  title="velocity"
  tagline="Experience the future of browsing"
/>`,
    
    `<CometHero
  title="turbo"
  tagline="Speed meets intelligence"
  animationSpeed="fast"
/>`,
    
    `<CometHero
  title="zen"
  tagline="Calm and focused browsing"
  animationSpeed="slow"
/>`,
    
    `<CometHero
  title="nebula"
  tagline="Explore the digital cosmos"
  theme={{
    primaryColor: '#c084fc',
    accentColor: '#e9d5ff',
    backgroundColor: '#1e1b4b',
  }}
/>`,
    
    `<CometHero
  title="aurora"
  tagline="Navigate with natural intelligence"
  theme={{
    primaryColor: '#86efac',
    accentColor: '#d1fae5',
    backgroundColor: '#064e3b',
  }}
/>`,
    
    `<CometHero
  title="minimalist"
  tagline="Less is more"
  particleCount={20}
/>`,
    
    `<CometHero
  title="cosmic"
  tagline="Lost in the stars"
  particleCount={80}
/>`,
    
    `<CometHero
  title="streamlined"
  tagline="Pure motion"
  showParticles={false}
/>`,
  ];

  return codeExamples[demoIndex] || '<CometHero />';
};

export default CometHeroDemo;
