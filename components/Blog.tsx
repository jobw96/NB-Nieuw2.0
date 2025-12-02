import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const posts = [
  { date: "12 Oct 2023", title: "De impact van AI op modern webdesign", category: "Design" },
  { date: "28 Sep 2023", title: "Waarom branding belangrijker is dan ooit", category: "Branding" },
  { date: "15 Sep 2023", title: "5 Tips voor een hogere conversie", category: "Marketing" },
];

const Blog: React.FC = () => {
  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
            <div>
                 <span className="text-xs font-bold tracking-widest uppercase text-brand-blue mb-2 block">Inzichten</span>
                <h2 className="text-4xl md:text-5xl font-heading font-normal text-white">Laatste Artikelen</h2>
            </div>
            <a href="#" className="text-sm font-medium tracking-widest uppercase text-neutral-500 hover:text-white transition-colors">Naar de blog</a>
        </div>
        
        <div className="flex flex-col border-t border-white/5">
            {posts.map((post, i) => (
                <div key={i} className="group flex flex-col md:flex-row md:items-center justify-between border-b border-white/5 py-8 hover:bg-white/[0.02] transition-colors cursor-pointer px-4 -mx-4 rounded-lg">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                        <span className="text-xs font-mono text-brand-green">{post.date}</span>
                        <h3 className="text-2xl font-heading font-normal text-white group-hover:text-brand-blue transition-colors">{post.title}</h3>
                    </div>
                    <div className="flex items-center justify-between mt-4 md:mt-0 w-full md:w-auto gap-6">
                        <span className="text-[10px] uppercase tracking-widest text-zinc-500 border border-white/10 px-3 py-1 rounded-full">{post.category}</span>
                        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                             <ArrowUpRight size={14} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;