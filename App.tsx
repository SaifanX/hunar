import React, { Suspense, lazy, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import TransitionOverlay from './components/TransitionOverlay';
// Changed import to react-router-dom and switched to BrowserRouter for clean URLs
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import CursorTrail from './components/CursorTrail';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

const LoadingFallback = () => (
  <div className="min-h-screen bg-charcoal flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-t-2 border-primary border-solid rounded-full animate-spin"></div>
      <span className="text-primary font-headline text-[10px] uppercase tracking-[0.4em] animate-pulse">Initializing Excellence</span>
    </div>
  </div>
);

const App: React.FC = () => {
  const [isExiting, setIsExiting] = useState(false);
  const [overlayColor, setOverlayColor] = useState("#171512"); // Default Hunar Charcoal

  const handleSwitchToMbsys = () => {
    setOverlayColor("#020617"); // MBSYS Deep Slate
    setIsExiting(true);
    setTimeout(() => {
      window.location.href = 'https://mbsys.co.in?from=hunar';
    }, 1100);
  };

  return (
    <HelmetProvider>
      <Router>
        <TransitionOverlay isExiting={isExiting} brandColor={overlayColor} />
        <ScrollToTop />
      <CursorTrail />
      <Layout onSwitchBrand={handleSwitchToMbsys}>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  </HelmetProvider>
  );
};

export default App;