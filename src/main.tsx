import React from 'react';
import ReactDOM from 'react-dom/client';
import CometHeroDemo from './demos/demo.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CometHeroDemo />
  </React.StrictMode>,
);

