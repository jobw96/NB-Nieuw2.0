import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
        >
            <span className="text-brand-blue font-bold text-xs tracking-widest uppercase mb-4 block">Contact</span>
            <h1 className="text-6xl font-heading font-bold text-white mb-6">Laten we praten.</h1>
            <p className="text-zinc-400 text-lg mb-12 font-light">
                Heb je een project in gedachten? Vul het formulier in of stuur ons een mailtje. We reageren meestal binnen 24 uur.
            </p>
            
            <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:border-brand-blue transition-colors">
                        <Mail size={20} />
                    </div>
                    <div>
                        <div className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Email</div>
                        <div className="font-heading font-normal text-xl">hello@lumina.nl</div>
                    </div>
                </div>
                <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:border-brand-blue transition-colors">
                        <Phone size={20} />
                    </div>
                    <div>
                        <div className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Telefoon</div>
                        <div className="font-heading font-normal text-xl">+31 (0)20 123 4567</div>
                    </div>
                </div>
                <div className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:border-brand-blue transition-colors">
                        <MapPin size={20} />
                    </div>
                    <div>
                        <div className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Kantoor</div>
                        <div className="font-heading font-normal text-xl">Keizersgracht 123, Amsterdam</div>
                    </div>
                </div>
            </div>
        </motion.div>

        <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-zinc-900/50 p-10 rounded-3xl border border-white/5 space-y-6"
            onSubmit={(e) => e.preventDefault()}
        >
            <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Voornaam</label>
                    <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-brand-blue transition-colors font-light" placeholder="John" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Achternaam</label>
                    <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-brand-blue transition-colors font-light" placeholder="Doe" />
                </div>
            </div>
            
            <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email</label>
                <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-brand-blue transition-colors font-light" placeholder="john@example.com" />
            </div>

            <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Bericht</label>
                <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-brand-blue transition-colors font-light" placeholder="Vertel ons over je project..." />
            </div>

            <button type="submit" className="w-full bg-white text-black font-medium py-4 rounded-lg hover:bg-zinc-200 transition-colors uppercase tracking-widest text-sm">
                Verstuur Bericht
            </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;