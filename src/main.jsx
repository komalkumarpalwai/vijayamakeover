// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';           // ✅ Global styles (e.g. Tailwind)
import App from './App.jsx';    // ✅ Main App component
import './lenis-setup.js';      // ✅ Smooth scrolling setup
import { FaBeer } from 'react-icons/fa';  // ⚠️ Unused import

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
