
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Workflow, ShieldCheck, Gauge, MousePointerClick, Plug } from 'lucide-react';

const SearchLogos: React.FC = () => {
  const logos = [
    { name: 'Grok', path: 'M4 4h16v2H4zM4 11h11v2H4zM4 18h16v2H4z' },
    { name: 'Gemini', path: 'M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z' },
    { name: 'Google', path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' },
    { name: 'Claude', path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z' },
    { name: 'Copilot', path: 'M12 2C9 7 4 9 4 14c0 4 3 7 8 7s8-3 8-7c0-5-5-7-8-12z' },
    { name: 'OpenAI', path: 'M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 3.5687-2.059.5313-1.8488-1.3534 3.4712-.0118.0157zm-6.949-3.15a4.4711 4.4711 0 0 1-.0852-3.0623l.142.0852 3.5683 2.0589.5264 1.848-3.483.9758-1.5502-3.4112zm-2.2816-7.5105a4.476 4.476 0 0 1 2.965-1.1542l.067.1445-.4832 4.1136-1.7806.9631-.0787-.1372-1.3975-3.3283zm6.2235-5.3288a4.48 4.48 0 0 1 2.8985 1.046l-.1419.0804-3.5687 2.059-.5313 1.8488 1.3534-3.4712.0118-.0157zm6.949 3.15a4.4715 4.4715 0 0 1 .0852 3.0623l-.142-.0852-3.5683-2.0589-.5264-1.848 3.483-.9758 1.5502 3.4112zm2.284 7.509a4.476 4.476 0 0 1-2.965 1.1557l-.067-.1445.4832-4.1136 1.7806-.9631.0787.1372 1.3975 3.3283zM12 16.5249a4.508 4.508 0 0 1-2.4277-.704l.0235-.0607 1.7583-.9514v-2.1287l-1.7583-.9528-.0235-.0607a4.5127 4.5127 0 0 1 4.8554 0l-.0235.0607-1.7583.9528v2.1287l1.7583.9514.0235.0607a4.508 4.508 0 0 1-2.4277.704z'}
  ];

  return (
    <section className="py-24 px-6 border-t border-white/5 relative overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 bg-brand-blue/5 opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Content */}
        <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-blue/10 px-3 py-1 text-[11px] text-brand-blue ring-1 ring-brand-blue/20 uppercase tracking-tight font-bold">
                <Plug size={14} className="mr-1" />
                AI Search Optimized
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-normal text-white mt-6">
                Vindbaar op elke <span className="text-zinc-500">zoekmachine & AI</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-zinc-400 font-light">
                Connect your brand with the future of search. One platform, infinite reach across all major AI models.
            </p>
        </div>

        {/* Icons Row */}
        <div className="relative mx-auto mt-12 max-w-4xl">
            <div className="flex items-center justify-center gap-6 sm:gap-10">
                {logos.map((logo, index) => (
                    <div key={index} className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 hover:ring-brand-blue/50 hover:bg-brand-blue/10 transition-all duration-300 group">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white group-hover:fill-brand-blue transition-colors">
                            <path d={logo.path} />
                        </svg>
                    </div>
                ))}
            </div>

            {/* Animation Area */}
            <div className="relative mt-6 h-64">
                <svg viewBox="0 0 900 360" className="absolute inset-0 w-full h-full pointer-events-none" fill="none">
                    <defs>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Nodes matching the 6 icons positions */}
                    {[150, 270, 390, 510, 630, 750].map((cx, i) => (
                        <circle key={i} cx={cx} cy="30" r="4" fill="#3b82f6" filter="url(#glow)">
                            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
                        </circle>
                    ))}

                    {/* Paths connecting center (450, 300) to nodes */}
                    {/* Path 1 */}
                    <path d="M450 300 C 450 200, 300 120, 150 30" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" fill="none" style={{ strokeDasharray: 600, strokeDashoffset: 600 }}>
                        <animate attributeName="stroke-dashoffset" values="600;0;600" dur="3s" begin="0s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
                    </path>
                    {/* Path 2 */}
                    <path d="M450 300 C 450 210, 360 130, 270 30" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" fill="none" style={{ strokeDasharray: 520, strokeDashoffset: 520 }}>
                        <animate attributeName="stroke-dashoffset" values="520;0;520" dur="3s" begin="0.2s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
                    </path>
                    {/* Path 3 */}
                    <path d="M450 300 C 450 150, 420 80, 390 30" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" fill="none" style={{ strokeDasharray: 450, strokeDashoffset: 450 }}>
                        <animate attributeName="stroke-dashoffset" values="450;0;450" dur="3s" begin="0.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
                    </path>
                    {/* Path 4 */}
                    <path d="M450 300 C 450 150, 480 80, 510 30" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" fill="none" style={{ strokeDasharray: 450, strokeDashoffset: 450 }}>
                        <animate attributeName="stroke-dashoffset" values="450;0;450" dur="3s" begin="0.6s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
                    </path>
                    {/* Path 5 */}
                    <path d="M450 300 C 450 210, 540 130, 630 30" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" fill="none" style={{ strokeDasharray: 520, strokeDashoffset: 520 }}>
                        <animate attributeName="stroke-dashoffset" values="520;0;520" dur="3s" begin="0.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
                    </path>
                    {/* Path 6 */}
                    <path d="M450 300 C 450 200, 600 120, 750 30" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" fill="none" style={{ strokeDasharray: 600, strokeDashoffset: 600 }}>
                        <animate attributeName="stroke-dashoffset" values="600;0;600" dur="3s" begin="1s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1; 0.42 0 0.58 1" />
                    </path>
                </svg>

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/20 ring-2 ring-brand-blue/40 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                        <Zap size={24} className="text-brand-blue" />
                    </span>
                </div>
            </div>
        </div>

        {/* Features List */}
        <div className="mx-auto mt-12 max-w-4xl">
            <div className="flex items-center justify-center gap-3 flex-wrap text-sm text-zinc-400">
                <div className="inline-flex items-center gap-2">
                    <Workflow size={16} className="text-brand-blue" />
                    <span className="font-medium text-white">Instant indexing</span>
                </div>
                <div className="hidden sm:block w-24 h-px border-t border-dashed border-brand-blue/40"></div>
                <div className="inline-flex items-center gap-2">
                    <ShieldCheck size={16} className="text-brand-blue" />
                    <span className="font-medium text-white">Brand protection</span>
                </div>
                <div className="hidden sm:block w-24 h-px border-t border-dashed border-brand-blue/40"></div>
                <div className="inline-flex items-center gap-2">
                    <Gauge size={16} className="text-brand-blue" />
                    <span className="font-medium text-white">Real-time data</span>
                </div>
                <div className="hidden sm:block w-24 h-px border-t border-dashed border-brand-blue/40"></div>
                <div className="inline-flex items-center gap-2">
                    <MousePointerClick size={16} className="text-brand-blue" />
                    <span className="font-medium text-white">One-click setup</span>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default SearchLogos;
