// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';  // Global styles (including Tailwind CSS)
import App from './App.jsx';  // Your main app component
import './lenis-setup.js';  // Import the Lenis smooth scroll setup
import { FaBeer } from 'react-icons/fa';


// Render the React app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
