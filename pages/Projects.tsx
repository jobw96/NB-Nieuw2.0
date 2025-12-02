import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

// Data Types
type Category = 'Websites' | 'Branding' | 'E-commerce' | 'Video\'s';

interface Project {
  id: string;
  title: string;
  category: Category;
  tags: string[];
  description: string;
  image: string;
}

// Mock Data
const projects: Project[] = [
  {
    id: "001",
    title: "Bushido Shop",
    category: "E-commerce",
    tags: ["E-commerce", "Web Design", "Branding"],
    description: "Een complete e-commerce oplossing voor Bushido Shop, gespecialiseerd in vechtsportartikelen. We hebben een platform gebouwd dat niet alleen producten verkoopt, maar ook de levensstijl van de vechtkunst ademt. Focus op conversie-optimalisatie en mobiele gebruiksvriendelijkheid.",
    image: "https://picsum.photos/seed/bushido/1200/1000"
  },
  {
    id: "002",
    title: "Kyodai Originals",
    category: "Branding",
    tags: ["Identity", "Packaging", "Strategy"],
    description: "Kyodai combineert Japanse esthetiek met moderne streetwear. Wij verzorgden de volledige rebranding, van logo tot verpakkingsmateriaal, om een consistent en krachtig merkverhaal neer te zetten.",
    image: "https://picsum.photos/seed/kyodai/1200/1000"
  },
  {
    id: "003",
    title: "Feitsma Darkwerken",
    category: "Websites",
    tags: ["UX/UI", "Development", "SEO"],
    description: "Een robuuste, donkere website voor een specialist in dakwerken. De focus lag op het genereren van leads en het visueel presenteren van hoogwaardige projecten.",
    image: "https://picsum.photos/seed/feitsma/1200/1000"
  },
  {
    id: "004",
    title: "MHB Techniek",
    category: "Websites",
    tags: ["Corporate", "B2B", "Webflow"],
    description: "Zakelijke website voor MHB Techniek. Schoon, technisch en informatief. Het doel was om complexe technische diensten eenvoudig uit te leggen aan potentiële klanten.",
    image: "https://picsum.photos/seed/mhb/1200/1000"
  },
  {
    id: "005",
    title: "Lashution",
    category: "E-commerce",
    tags: ["Shopify", "Social Media", "Beauty"],
    description: "Een sprankelende webshop voor beauty professionals. Integratie met social commerce en een loyaliteitssysteem voor terugkerende klanten.",
    image: "https://picsum.photos/seed/lash/1200/1000"
  },
  {
    id: "006",
    title: "Veloretti Campaign",
    category: "Video's",
    tags: ["Commercial", "Editing", "Color Grading"],
    description: "Een dynamische commercial voor de nieuwe elektrische fietsen van Veloretti. Focus op snelheid, stadse omgeving en lifestyle.",
    image: "https://picsum.photos/seed/velo/1200/1000"
  },
  {
    id: "007",
    title: "Urban Gym",
    category: "Video's",
    tags: ["Promo", "Social", "High Energy"],
    description: "High-energy promotievideo voor een nieuwe gym keten. Snelle cuts en pompende muziek om de sfeer perfect over te brengen.",
    image: "https://picsum.photos/seed/gym/1200/1000"
  },
];

const categories: Category[] = ['Websites', 'Branding', 'E-commerce', 'Video\'s'];

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Category | 'All'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Navigate projects in modal
  const handleNavigate = (direction: 'next' | 'prev', e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject) return;
    
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    
    if (newIndex >= filteredProjects.length) newIndex = 0;
    if (newIndex < 0) newIndex = filteredProjects.length - 1;
    
    setSelectedProject(filteredProjects[newIndex]);
  };

  return (
    <div className="pt-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
        >
            <span className="text-brand-blue font-bold text-xs tracking-widest uppercase mb-4 block">Portfolio</span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">Ons Werk</h1>
            
            {/* Tabs */}
            <div className="flex flex-wrap gap-4 mt-8">
                <button 
                    onClick={() => setActiveTab('All')}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'All' ? 'bg-white text-black' : 'bg-white/5 text-zinc-400 hover:bg-white/10'}`}
                >
                    Alles
                </button>
                {categories.map(cat => (
                    <button 
                        key={cat}
                        onClick={() => setActiveTab(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === cat ? 'bg-white text-black' : 'bg-white/5 text-zinc-400 hover:bg-white/10'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </motion.div>

        {/* Grid */}
        <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24"
        >
            <AnimatePresence>
                {filteredProjects.map((project) => (
                    <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                        className="group cursor-pointer"
                    >
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/5 bg-zinc-900">
                             <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center">
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-xl font-heading font-medium text-white">{project.title}</h3>
                            <p className="text-sm text-zinc-500">{project.category}</p>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
            {selectedProject && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 md:px-8">
                    {/* Backdrop */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="absolute inset-0 bg-black/90 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-6xl h-[85vh] bg-[#0a0a0a] rounded-[32px] overflow-hidden flex flex-col md:flex-row shadow-2xl border border-white/10"
                    >
                        {/* Close Button */}
                        <button 
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-6 right-6 z-50 p-2 rounded-full bg-black/50 hover:bg-white hover:text-black text-white transition-all backdrop-blur-sm border border-white/10"
                        >
                            <X size={24} />
                        </button>

                        {/* Image Section (Left/Top) */}
                        <div className="w-full md:w-[60%] h-[40%] md:h-full relative bg-zinc-900 group">
                            <img 
                                src={selectedProject.image} 
                                alt={selectedProject.title} 
                                className="w-full h-full object-cover"
                            />
                            {/* Navigation Overlays */}
                            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <button 
                                    onClick={(e) => handleNavigate('prev', e)}
                                    className="p-3 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all pointer-events-auto"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button 
                                    onClick={(e) => handleNavigate('next', e)}
                                    className="p-3 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all pointer-events-auto"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        </div>

                        {/* Content Section (Right/Bottom) */}
                        <div className="w-full md:w-[40%] h-[60%] md:h-full p-8 md:p-12 flex flex-col relative bg-[#0a0a0a]">
                            <div className="flex-grow">
                                <span className="inline-block px-4 py-1.5 rounded-full border border-brand-green/30 bg-brand-green/10 text-brand-green text-xs font-bold tracking-widest uppercase mb-6">
                                    {selectedProject.category}
                                </span>
                                
                                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                                    {selectedProject.title}
                                </h2>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {selectedProject.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-white/5 rounded-lg text-xs text-zinc-400">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-zinc-400 text-lg leading-relaxed font-light">
                                    {selectedProject.description}
                                </p>
                            </div>

                            {/* Footer Line */}
                            <div className="pt-6 border-t border-white/5 flex justify-between items-center text-xs text-zinc-600 font-mono mt-8">
                                <span>Project ID: {selectedProject.id}</span>
                                <span>Lumina Portfolio</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;