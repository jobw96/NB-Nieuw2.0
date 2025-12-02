import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Palette, ShoppingBag, PenTool } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: "Websites die verkopen",
    desc: "Supersnelle, SEO-geoptimaliseerde websites.",
    color: "text-brand-blue"
  },
  {
    icon: Palette,
    title: "Merkidentiteit die raakt",
    desc: "Een uniek verhaal en visuele stijl.",
    color: "text-brand-green"
  },
  {
    icon: ShoppingBag,
    title: "Webshops die groeien",
    desc: "Schaalbare e-commerce oplossingen.",
    color: "text-brand-blue"
  },
  {
    icon: PenTool,
    title: "Design dat onderscheidt",
    desc: "Van UI/UX tot print materiaal.",
    color: "text-brand-green"
  }
];

const Services: React.FC = () => {
  return (
    <section id="diensten" className="py-24 px-6 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-20 gap-8">
            <div>
                <div className="flex items-center gap-2 text-sm font-medium text-neutral-500 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                    <span className="uppercase tracking-widest text-xs">Wat wij doen</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-heading font-normal text-white">
                    Onze Expertise
                </h2>
            </div>
        </div>

        <div className="flex flex-col border-t border-white/5">
            {services.map((service, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative border-b border-white/5 hover:bg-white/[0.02] transition-colors duration-300 cursor-pointer py-10"
                >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                        <div className="col-span-1 md:col-span-4">
                            <span className="text-xs font-semibold tracking-widest uppercase text-neutral-500 group-hover:text-white transition-colors">
                                0{index + 1}
                            </span>
                        </div>
                        <div className="col-span-1 md:col-span-7 flex flex-col md:flex-row md:items-center gap-4">
                            <service.icon className={`w-6 h-6 ${service.color} opacity-70 group-hover:opacity-100 transition-opacity`} />
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-1">{service.title}</h3>
                                <p className="text-zinc-500 text-sm font-light">{service.desc}</p>
                            </div>
                        </div>
                        <div className="col-span-1 flex justify-end">
                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                <ArrowUpRight size={18} />
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;