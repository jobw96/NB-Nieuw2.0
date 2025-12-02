
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12 px-6 relative overflow-hidden">
        {/* Massive Text Background */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden opacity-20">
             <h1 className="text-[18vw] leading-[0.75] font-bold tracking-tighter text-center text-white mix-blend-overlay">
                LUMINA
             </h1>
             <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-24 relative z-10">
        <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-black rounded-full" />
                </div>
                <span className="font-semibold text-xl tracking-tight">Lumina</span>
            </div>
            <p className="text-zinc-500 max-w-sm font-light">
                Wij creëren digitale ervaringen die merken transformeren en bedrijven laten groeien.
            </p>
        </div>
        
        <div>
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-widest">Diensten</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Websites</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Branding</a></li>
                <li><a href="#" className="hover:text-white transition-colors">E-commerce</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Video Productie</a></li>
            </ul>
        </div>

        <div>
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-widest">Bedrijf</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
                <li><Link to="/over-ons" className="hover:text-white transition-colors">Over Ons</Link></li>
                <li><Link to="/projecten" className="hover:text-white transition-colors">Werk</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-zinc-600 text-xs font-medium tracking-widest uppercase relative z-10">
        <p>&copy; {new Date().getFullYear()} Lumina Creative. Alle rechten voorbehouden.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
