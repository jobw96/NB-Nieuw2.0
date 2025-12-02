import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const questions = [
  { q: "Wat kost een nieuwe website?", a: "De kosten hangen af van de complexiteit en wensen. We bieden pakketten vanaf €2.500 voor een basis website tot €15.000+ voor complexe webshops." },
  { q: "Hoe lang duurt een branding traject?", a: "Gemiddeld duurt een compleet branding traject 4 tot 6 weken, inclusief strategie, design en oplevering van alle assets." },
  { q: "Doen jullie ook hosting en onderhoud?", a: "Ja, wij bieden volledige ontzorging met snelle, veilige hosting en maandelijks onderhoud om je site up-to-date te houden." },
  { q: "Werken jullie met internationale klanten?", a: "Zeker! Hoewel we in Nederland gevestigd zijn, werken we digitaal samen met klanten over de hele wereld." }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 border-t border-white/5 bg-[#080808]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-heading font-normal text-white text-center mb-16">Veelgestelde <span className="text-zinc-500">vragen</span></h2>
        
        <div className="space-y-4">
          {questions.map((item, i) => (
            <div key={i} className="border border-white/5 bg-white/[0.02] rounded-xl overflow-hidden">
              <button 
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="flex items-center justify-between w-full p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-medium text-lg text-white">{item.q}</span>
                {activeIndex === i ? <Minus size={18} className="text-brand-blue" /> : <Plus size={18} className="text-zinc-500" />}
              </button>
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-zinc-400 leading-relaxed border-t border-white/5 mt-2 font-light">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;