import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; // Scroll to top on route change
import Loader from './components/Loader'; // Importing the Loader component
import 'swiper/css';
import 'swiper/css/pagination';

// Lazy load your pages
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const WhyUs = lazy(() => import('./pages/WhyUs'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Contact = lazy(() => import('./pages/Contact'));
const Feedback = lazy(() => import('./pages/Feedback'));
const Privacy = lazy(() => import('./components/Privacy'));
const Terms = lazy(() => import('./components/terms'));

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/whyus" element={<WhyUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Terms" element={<Terms />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
