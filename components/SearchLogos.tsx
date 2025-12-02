import React from 'react';
import { motion } from 'framer-motion';

const SearchLogos: React.FC = () => {
  const logos = [
    { name: 'Grok', path: 'M4 4h16v2H4zM4 11h11v2H4zM4 18h16v2H4z' }, // Placeholder
    { name: 'Gemini', path: 'M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z' },
    { name: 'Google', path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' },
    { name: 'Claude', path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z' },
    { name: 'Copilot', path: 'M12 2C9 7 4 9 4 14c0 4 3 7 8 7s8-3 8-7c0-5-5-7-8-12z' },
  ];

  return (
    <section className="py-32 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-blue/5 opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-20"
        >
            <span className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-2 block">Toekomstbestendig</span>
            <h2 className="text-4xl md:text-5xl font-heading font-normal text-white">
                Vindbaar op elke <span className="text-zinc-500">zoekmachine & AI</span>
            </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {/* Main Lumina Logo */}
            <div className="relative w-24 h-24 rounded-full bg-gradient-to-tr from-brand-blue to-brand-green flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.3)] z-10">
                <div className="w-8 h-8 bg-black rounded-full" />
                {/* Connecting lines */}
                {logos.map((_, i) => (
                    <motion.div
                        key={`line-${i}`}
                        className="absolute top-1/2 left-1/2 h-[1px] bg-gradient-to-r from-brand-blue/50 to-transparent origin-left -z-10"
                        style={{ 
                            width: '150px', 
                            transform: `rotate(${i * (360 / logos.length)}deg) translateY(-50%)` 
                        }}
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                    >
                         <motion.div 
                            className="absolute right-0 top-1/2 w-1 h-1 bg-white rounded-full -translate-y-1/2 shadow-[0_0_10px_white]"
                            animate={{ x: [0, -150, 0], opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 3, delay: i * 0.5 }}
                        />
                    </motion.div>
                ))}
            </div>

            {/* Satellite Logos */}
            {logos.map((logo, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex flex-col items-center gap-3 group"
                >
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors backdrop-blur-sm">
                        <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
                            <path d={logo.path} />
                        </svg>
                    </div>
                    <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">{logo.name}</span>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SearchLogos;