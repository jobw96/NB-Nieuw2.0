import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { name: "Bushido Shop", cat: "E-commerce", img: "https://picsum.photos/seed/bushido/800/600" },
  { name: "Kyodai Originals", cat: "Branding", img: "https://picsum.photos/seed/kyodai/800/600" },
  { name: "Feitsma Darkwerken", cat: "Website", img: "https://picsum.photos/seed/feitsma/800/600" },
  { name: "MHB Techniek", cat: "Corporate", img: "https://picsum.photos/seed/mhb/800/600" },
  { name: "Lashution", cat: "Beauty", img: "https://picsum.photos/seed/lash/800/600" },
  { name: "Veloretti", cat: "Rebrand", img: "https://picsum.photos/seed/velo/800/600" },
];

const Portfolio: React.FC = () => {
  return (
    <section id="werk" className="py-32 px-6 relative border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-2 block">Ons Werk</span>
            <h2 className="text-5xl md:text-6xl font-heading font-normal text-white mb-6">
                Recente Projecten
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer"
                >
                    <div className="overflow-hidden rounded-2xl aspect-[4/3] relative mb-6 border border-white/5">
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10" />
                        <img 
                            src={project.img} 
                            alt={project.name} 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                         <div className="absolute top-4 right-4 bg-black/60 backdrop-blur border border-white/10 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity z-20">
                            View Case
                        </div>
                    </div>
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-xl font-medium text-white mb-1 group-hover:text-brand-blue transition-colors">{project.name}</h3>
                            <p className="text-sm text-zinc-500 font-light">{project.cat}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;