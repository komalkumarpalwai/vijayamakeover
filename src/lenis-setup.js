// src/lenis-setup.js
import Lenis from 'lenis';

// Initialize Lenis with autoRaf set to true for smooth scrolling
const lenis = new Lenis({ autoRaf: true });

// Optional: Listen to the scroll event (e.g., you could log the scroll event or track scroll position)
lenis.on('scroll', (e) => {
  // You can add your custom scroll handling logic here, like tracking scroll position
  console.log(e);
});

// Recursive RAF function for the smooth scroll animation loop
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);  // Keep requesting the next frame for smooth scrolling
}

// Start the animation frame loop
requestAnimationFrame(raf);
