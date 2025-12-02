import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden border-t border-white/5">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-heading font-normal text-white mb-8">Klaar om te <span className="text-brand-blue">groeien?</span></h2>
        <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto font-light">
            Laten we samenwerken aan jouw volgende grote project. Vraag vandaag nog een vrijblijvend gesprek aan.
        </p>
        <Link 
            to="/contact"
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-zinc-200 transition-all hover:scale-105"
        >
            Start Project <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
};

export default CTA;