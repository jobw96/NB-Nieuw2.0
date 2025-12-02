
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SearchLogos: React.FC = () => {
  const logos = [
    { name: 'Grok', path: 'M4 4h16v2H4zM4 11h11v2H4zM4 18h16v2H4z' },
    { name: 'Gemini', path: 'M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z' },
    { name: 'Google', path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' },
    { name: 'Claude', path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z' },
    { name: 'Copilot', path: 'M12 2C9 7 4 9 4 14c0 4 3 7 8 7s8-3 8-7c0-5-5-7-8-12z' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % logos.length);
    }, 1500); // Slightly faster interval for better flow
    return () => clearInterval(interval);
  }, [logos.length]);

  const radius = 135;

  return (
    <section className="py-24 px-6 border-t border-white/5 relative overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 bg-brand-blue/5 opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-12 md:mb-20"
        >
            <span className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-2 block">Toekomstbestendig</span>
            <h2 className="text-4xl md:text-5xl font-heading font-normal text-white">
                Vindbaar op elke <span className="text-zinc-500">zoekmachine & AI</span>
            </h2>
        </motion.div>

        {/* Circular Animation Container */}
        <div className="relative w-full h-[400px] flex items-center justify-center md:scale-125 transition-transform duration-500">
            
            {/* Center Hub */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                 {/* Rotating Glow Ring */}
                 <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-20px] rounded-full bg-gradient-to-tr from-brand-blue/0 via-brand-blue/20 to-brand-green/0 blur-md"
                 />
                 
                 {/* Core */}
                 <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-brand-blue to-brand-green flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.5)] relative z-20">
                     <div className="w-8 h-8 bg-black rounded-full relative z-30" />
                     {/* Pulse waves */}
                     <motion.div 
                        animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                        className="absolute inset-0 rounded-full bg-white/30 z-10"
                     />
                 </div>
            </div>

            {/* Connecting Lines & Logos */}
            {logos.map((logo, i) => {
                 const angle = i * (360 / logos.length);
                 const isActive = i === activeIndex;

                 return (
                    <React.Fragment key={i}>
                        {/* Connecting Line Container */}
                        <div
                            className="absolute top-1/2 left-1/2 h-[1px] origin-left -z-10"
                            style={{ 
                                width: `${radius}px`,
                                transform: `rotate(${angle}deg) translateY(-50%)`,
                            }}
                        >
                            {/* Inactive Base Line */}
                            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-30" />

                            {/* Active Line Overlay (Fade In/Out) */}
                            <motion.div 
                                initial={false}
                                animate={{ opacity: isActive ? 1 : 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 bg-gradient-to-r from-brand-blue/80 to-brand-green/80"
                            />

                            {/* Particle */}
                            <AnimatePresence>
                                {isActive && (
                                    <motion.div 
                                        className="absolute right-0 top-1/2 w-2 h-2 bg-white rounded-full -translate-y-1/2 shadow-[0_0_10px_white]"
                                        initial={{ x: -radius, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 1, ease: "linear" }}
                                    />
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Satellite Logo */}
                        <div
                            className="absolute flex flex-col items-center gap-3"
                            style={{
                                left: '50%',
                                top: '50%',
                                transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                                zIndex: isActive ? 40 : 30
                            }}
                        >
                            <motion.div
                                animate={{ 
                                    scale: isActive ? 1.15 : 1,
                                    backgroundColor: isActive ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.05)',
                                    borderColor: isActive ? 'rgba(16,185,129,1)' : 'rgba(255,255,255,0.1)',
                                    boxShadow: isActive ? '0 0 30px rgba(16,185,129,0.3)' : '0 0 0px rgba(0,0,0,0)'
                                }}
                                transition={{ duration: 0.5 }}
                                className="w-16 h-16 rounded-2xl border flex items-center justify-center backdrop-blur-sm shadow-lg"
                            >
                                <motion.svg 
                                    viewBox="0 0 24 24" 
                                    className="w-8 h-8"
                                    animate={{ color: isActive ? '#10b981' : '#71717a' }}
                                    transition={{ duration: 0.5 }}
                                    fill="currentColor"
                                >
                                    <path d={logo.path} />
                                </motion.svg>
                            </motion.div>
                            
                            <motion.span 
                                animate={{ 
                                    color: isActive ? '#ffffff' : '#52525b',
                                    backgroundColor: isActive ? 'rgba(59,130,246,0.2)' : 'rgba(0,0,0,0)'
                                }}
                                transition={{ duration: 0.5 }}
                                className="text-xs font-medium uppercase tracking-wider px-2 py-0.5 rounded-full"
                            >
                                {logo.name}
                            </motion.span>
                        </div>
                    </React.Fragment>
                 );
            })}
        </div>
      </div>
    </section>
  );
};

export default SearchLogos;
