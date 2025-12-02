import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    text: "Lumina heeft onze verwachtingen overtroffen. De nieuwe branding straalt precies uit wie we zijn, en de conversies zijn met 40% gestegen.",
    author: "Mark de Vries",
    role: "CEO, TechFlow",
  },
  {
    text: "Professioneel, snel en ongelooflijk creatief. Het team denkt echt mee en komt met oplossingen waar je zelf nooit op was gekomen.",
    author: "Sarah Jansen",
    role: "Marketing Manager, PureBeauty",
  },
  {
    text: "Onze webshop draait als een zonnetje. De snelheid en het design zijn top. Zeker een aanrader voor elk groeiend bedrijf.",
    author: "Tom Bakker",
    role: "Founder, FitGear",
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 px-6 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
         <div className="flex items-center gap-2 text-sm font-medium text-neutral-500 mb-2 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
            <span className="uppercase tracking-widest text-xs">Reviews</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-heading font-normal text-white text-center mb-16">
            Wat klanten <span className="text-zinc-500">zeggen</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-brand-card p-8 rounded-2xl border border-white/5 relative group hover:border-white/10 transition-colors">
              <div className="flex gap-1 mb-6 text-brand-green">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg text-zinc-300 mb-8 leading-relaxed font-light">"{review.text}"</p>
              <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-800 to-black border border-white/10 flex items-center justify-center text-xs font-bold text-white">
                    {review.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-sm text-white">{review.author}</div>
                  <div className="text-xs text-zinc-500">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;