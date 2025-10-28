import React from 'react';
import { CometHero } from '../components/component';

/**
 * Demo Component showcasing CometHero usage
 */
const CometHeroDemo: React.FC = () => {
  return (
    <div className="demo-wrapper">
      {/* Simple demo showing just the hero section */}
      <CometHero />
    </div>
  );
};

export default CometHeroDemo;
