import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-blue to-brand-green flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
            <div className="w-2.5 h-2.5 bg-black rounded-full" />
          </div>
          <span className="font-semibold text-lg tracking-tight">Lumina</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest uppercase text-neutral-400">
          <Link to="/" className="hover:text-white transition-colors duration-300">Home</Link>
          <a href="/#diensten" className="hover:text-white transition-colors duration-300">Diensten</a>
          <Link to="/projecten" className="hover:text-white transition-colors duration-300">Werk</Link>
          <Link to="/over-ons" className="hover:text-white transition-colors duration-300">Over Ons</Link>
          <Link to="/blog" className="hover:text-white transition-colors duration-300">Blog</Link>
          <Link to="/contact" className="hover:text-white transition-colors duration-300">Contact</Link>
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-6">
          <Link to="/contact" className="hidden md:flex relative group overflow-hidden rounded-full p-[1px]">
             <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#10b981_50%,#3b82f6_100%)]" />
             <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-5 py-2 text-sm font-medium text-white backdrop-blur-3xl transition-all duration-300 group-hover:bg-black/80">
                Start Project
             </div>
          </Link>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050505] border-b border-white/10 overflow-hidden absolute w-full"
          >
            <div className="flex flex-col p-6 gap-6 text-center">
              <Link to="/" className="text-xl font-heading font-normal text-white/80 hover:text-white">Home</Link>
              <a href="/#diensten" className="text-xl font-heading font-normal text-white/80 hover:text-white">Diensten</a>
              <Link to="/projecten" className="text-xl font-heading font-normal text-white/80 hover:text-white">Werk</Link>
              <Link to="/over-ons" className="text-xl font-heading font-normal text-white/80 hover:text-white">Over Ons</Link>
              <Link to="/blog" className="text-xl font-heading font-normal text-white/80 hover:text-white">Blog</Link>
              <Link to="/contact" className="bg-brand-blue text-white py-3 rounded-full font-medium mt-4">Start Project</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;