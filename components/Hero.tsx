
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Wand2, Monitor, Download, Play, ScanLine, Video, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { id: 1, title: 'Import Footage', icon: Video, badge: '01' },
    { id: 2, title: 'AI Scene Detect', icon: ScanLine, badge: '02' },
    { id: 3, title: 'Export 4K', icon: Download, badge: '03' },
  ];

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden bg-[#050505]">
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-4 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-1 lg:col-span-6 flex flex-col justify-center pl-0 md:pl-4"
        >
          <div className="flex items-center gap-2 text-brand-blue mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-brand-blue/80">Creative Suite 2.0</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight leading-[0.9] mb-8">
            Craft Visual <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">Stories.</span>
          </h1>
          
          <p className="text-lg text-zinc-300 max-w-lg leading-relaxed mb-10 font-light drop-shadow-md">
            Transforms raw footage into cinematic masterpieces instantly.
            Lumina's AI adapts to your unique style, automating the tedious so you can focus on the story.
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <Link 
              to="/contact"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white/10 px-1 py-1 pr-5 transition-all hover:bg-white/20 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] border border-white/10 backdrop-blur-md"
            >
              <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-b from-brand-blue to-brand-green shadow-lg">
                 <Wand2 size={16} className="text-white" />
              </div>
              <span className="font-medium text-white">Start Creating</span>
              <ArrowRight size={16} className="text-white/50 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
            </Link>
            
            <div className="flex items-center gap-2 text-xs font-medium text-zinc-400">
               <Check size={14} className="text-brand-green" />
               <span>No credit card required</span>
            </div>
          </div>
        </motion.div>

        {/* Interactive Visual */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-1 lg:col-span-6 flex flex-col lg:items-end lg:pt-20"
        >
           <div className="relative w-full max-w-md lg:mr-8 mb-12">
              {/* Card Stack */}
              <div className="relative aspect-video perspective-1000">
                 <div className="absolute -inset-8 bg-brand-blue/20 blur-3xl -z-10 opacity-40 animate-pulse-slow" />
                 
                 <div className="relative w-full h-full">
                    {/* Background Cards (Visual only) */}
                    <div 
                        className={`absolute inset-0 rounded-xl bg-zinc-900 border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 ease-out origin-bottom ${activeStep === 3 ? 'z-30 scale-100 translate-y-0 opacity-100' : 'z-10 scale-90 translate-y-6 opacity-40'}`}
                    >
                         <img src="https://picsum.photos/seed/render/800/450" alt="Export" className="w-full h-full object-cover opacity-60" />
                         <div className="absolute top-3 right-3 px-2 py-1 bg-brand-green text-black text-[10px] font-bold rounded uppercase">4K Ready</div>
                    </div>

                    <div 
                        className={`absolute inset-0 rounded-xl bg-zinc-900 border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 ease-out origin-bottom ${activeStep === 2 ? 'z-30 scale-100 translate-y-0 opacity-100' : 'z-20 scale-95 translate-y-3 opacity-60'}`}
                    >
                         <img src="https://picsum.photos/seed/scan/800/450?grayscale" alt="Scan" className="w-full h-full object-cover opacity-70" />
                         <div className="absolute inset-0 bg-brand-blue/10 mix-blend-overlay" />
                         <div className="absolute bottom-3 left-3 flex items-center gap-2">
                            <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
                            <span className="text-[10px] font-mono text-white/80">Scanning...</span>
                         </div>
                    </div>

                    <div 
                        className={`absolute inset-0 rounded-xl bg-zinc-900 border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 ease-out origin-bottom ${activeStep === 1 ? 'z-30 scale-100 translate-y-0 opacity-100' : 'z-10 scale-90 translate-y-6 opacity-30'}`}
                    >
                        <img src="https://picsum.photos/seed/lumina/800/450" alt="Import" className="w-full h-full object-cover opacity-90" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl">
                                <Play size={20} className="fill-white text-white ml-1" />
                            </div>
                        </div>
                    </div>
                 </div>
              </div>

              {/* Steps Controls */}
              <div className="mt-8 flex flex-col gap-3 max-w-xs ml-auto">
                 {steps.map((step) => (
                    <button
                        key={step.id}
                        onClick={() => setActiveStep(step.id)}
                        className={`group relative flex items-center gap-4 p-3 rounded-lg border transition-all duration-300 ${
                            activeStep === step.id 
                            ? 'bg-white/10 border-white/20 shadow-xl backdrop-blur-md translate-x-[-10px]' 
                            : 'bg-black/40 border-transparent hover:bg-white/5 backdrop-blur-sm'
                        }`}
                    >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-colors ${
                            activeStep === step.id 
                            ? 'bg-brand-blue text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]' 
                            : 'bg-transparent text-zinc-500 border border-zinc-700'
                        }`}>
                            {step.badge}
                        </div>
                        <span className={`text-sm font-medium transition-colors ${activeStep === step.id ? 'text-white' : 'text-zinc-400'}`}>
                            {step.title}
                        </span>
                        <step.icon 
                            size={14} 
                            className={`ml-auto transition-all ${
                                activeStep === step.id ? 'text-brand-blue opacity-100' : 'text-zinc-600 opacity-0 group-hover:opacity-50'
                            }`} 
                        />
                    </button>
                 ))}
              </div>
           </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
