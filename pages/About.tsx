import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="pt-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-brand-blue font-bold text-xs tracking-widest uppercase mb-4 block">Over Lumina</span>
          <h1 className="text-6xl md:text-8xl font-heading font-bold text-white mb-8">Creativiteit ontmoet <span className="text-zinc-500">Technologie.</span></h1>
          
          <div className="prose prose-invert prose-lg text-zinc-400 font-light">
            <p className="lead text-2xl text-white mb-8">
              Wij zijn een digitaal bureau dat gelooft in de kracht van design en innovatie. Sinds 2020 helpen we ambitieuze merken hun digitale potentieel te ontsluiten.
            </p>
            <p className="mb-6">
              Ons team bestaat uit gepassioneerde designers, developers en strategen. We werken niet voor, maar met onze klanten. Of het nu gaat om een nieuwe merkidentiteit, een high-end website of een complexe webshop; wij leveren kwaliteit die resultaat oplevert.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 mb-20">
            <div className="aspect-square bg-zinc-900 rounded-2xl border border-white/5 relative overflow-hidden">
                <img src="https://picsum.photos/seed/office/800/800?grayscale" alt="Office" className="w-full h-full object-cover opacity-60" />
            </div>
            <div className="flex flex-col justify-center space-y-6">
                <div className="bg-white/[0.02] p-8 rounded-2xl border border-white/5">
                    <h3 className="text-2xl font-heading font-normal text-white mb-2">Missie</h3>
                    <p className="text-zinc-400 font-light">Bedrijven helpen excelleren in het digitale tijdperk door design en technologie naadloos te integreren.</p>
                </div>
                <div className="bg-white/[0.02] p-8 rounded-2xl border border-white/5">
                    <h3 className="text-2xl font-heading font-normal text-white mb-2">Visie</h3>
                    <p className="text-zinc-400 font-light">Een wereld waarin elke digitale interactie betekenisvol, intuïtief en prachtig is.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;