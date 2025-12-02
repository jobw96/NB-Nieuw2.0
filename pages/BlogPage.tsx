
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, User, Tag } from 'lucide-react';

const blogPosts = [
  { 
    id: 1,
    date: "12 Oct 2023", 
    title: "De impact van AI op modern webdesign", 
    category: "Design",
    excerpt: "Hoe generatieve AI de manier waarop we websites ontwerpen fundamenteel verandert, van lay-out tot content creatie.",
    author: "Lisa de Jong",
    image: "https://picsum.photos/seed/aiweb/800/600"
  },
  { 
    id: 2,
    date: "28 Sep 2023", 
    title: "Waarom branding belangrijker is dan ooit", 
    category: "Branding",
    excerpt: "In een verzadigde digitale markt is een sterk merkverhaal je enige onderscheidende factor. Lees waarom.",
    author: "Mark Visser",
    image: "https://picsum.photos/seed/branding/800/600"
  },
  { 
    id: 3,
    date: "15 Sep 2023", 
    title: "5 Tips voor een hogere conversie", 
    category: "Marketing",
    excerpt: "Praktische tips om bezoekers om te zetten in klanten zonder in te leveren op gebruikerservaring.",
    author: "Sarah Jansen",
    image: "https://picsum.photos/seed/conversion/800/600"
  },
  { 
    id: 4,
    date: "02 Sep 2023", 
    title: "De toekomst van E-commerce in 2024", 
    category: "E-commerce",
    excerpt: "Trends die je niet mag missen: Social commerce, AR shopping en gepersonaliseerde shopping experiences.",
    author: "Tom Bakker",
    image: "https://picsum.photos/seed/ecom/800/600"
  },
  { 
    id: 5,
    date: "20 Aug 2023", 
    title: "Video content strategie voor B2B", 
    category: "Video",
    excerpt: "Waarom video niet alleen voor consumenten is. B2B bedrijven zien 3x meer engagement met video content.",
    author: "Lisa de Jong",
    image: "https://picsum.photos/seed/videob2b/800/600"
  },
];

const BlogPage: React.FC = () => {
  return (
    <div className="pt-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
        >
            <span className="text-brand-blue font-bold text-xs tracking-widest uppercase mb-4 block">Kennis & Nieuws</span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">Onze Inzichten</h1>
            <p className="text-xl text-zinc-400 font-light max-w-2xl">
                Diepgaande artikelen over design, technologie en digitale groei, geschreven door ons team van experts.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {blogPosts.map((post, index) => (
                <motion.article 
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer flex flex-col h-full"
                >
                    <div className="rounded-2xl overflow-hidden aspect-video mb-6 border border-white/5 relative">
                        <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white border border-white/10">
                            {post.category}
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-zinc-500 mb-3 font-mono">
                        <div className="flex items-center gap-1">
                            <Calendar size={12} />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <User size={12} />
                            <span>{post.author}</span>
                        </div>
                    </div>

                    <h2 className="text-3xl font-heading font-normal text-white mb-4 group-hover:text-brand-blue transition-colors">
                        {post.title}
                    </h2>
                    
                    <p className="text-zinc-400 font-light leading-relaxed mb-6 flex-grow">
                        {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-brand-green text-sm font-medium uppercase tracking-widest group-hover:gap-3 transition-all">
                        Lees Artikel <ArrowUpRight size={16} />
                    </div>
                </motion.article>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
