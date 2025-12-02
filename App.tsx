
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import BlogPage from './pages/BlogPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Global Background Component
const BackgroundGrid = () => (
  <div className="fixed inset-0 z-0 pointer-events-none flex w-full max-w-7xl mx-auto border-r border-brand-border opacity-40">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-blue/5 via-transparent to-transparent opacity-30" />
    
    {/* Column 1 */}
    <div className="flex-1 border-l border-brand-border h-full relative overflow-hidden hidden md:block">
       <span className="absolute bottom-8 left-4 text-white/10 text-xs font-mono">01</span>
    </div>

    {/* Column 2 - Beam 1 */}
    <div className="flex-1 border-l border-brand-border h-full relative overflow-hidden">
      <div className="absolute top-0 -left-[1px] w-[1px] h-64 bg-gradient-to-b from-transparent via-brand-blue/60 to-transparent animate-beam-fall-1"></div>
      <span className="absolute bottom-8 left-4 text-white/10 text-xs font-mono">02</span>
    </div>

    {/* Column 3 - Beam 2 */}
    <div className="flex-1 border-l border-brand-border h-full relative overflow-hidden">
      <div className="absolute top-0 -left-[1px] w-[1px] h-96 bg-gradient-to-b from-transparent via-brand-blue/80 to-transparent animate-beam-fall-2"></div>
      <span className="absolute bottom-8 left-4 text-white/10 text-xs font-mono">03</span>
    </div>

    {/* Column 4 - Beam 3 */}
    <div className="flex-1 border-l border-brand-border h-full relative overflow-hidden hidden lg:block">
      <div className="absolute top-0 -left-[1px] w-[1px] h-48 bg-gradient-to-b from-transparent via-brand-blue/60 to-transparent animate-beam-fall-3"></div>
      <span className="absolute bottom-8 left-4 text-white/10 text-xs font-mono">04</span>
    </div>
    
    {/* Column 5 */}
    <div className="flex-1 border-l border-brand-border h-full relative overflow-hidden hidden xl:block">
       <span className="absolute bottom-8 left-4 text-white/10 text-xs font-mono">05</span>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-brand-dark text-white font-sans selection:bg-brand-blue/30 selection:text-white overflow-x-hidden relative">
        <BackgroundGrid />
        
        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col min-h-screen w-full">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/over-ons" element={<About />} />
              <Route path="/projecten" element={<Projects />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
