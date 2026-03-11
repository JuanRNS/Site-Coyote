"use client";

import { useState } from 'react';

const Portfolio = () => {
    const [filter, setFilter] = useState('Todos');
    const filters = ['Todos', 'Vigilância', 'Escolta', 'Eventos'];

    const projects = [
        { id: 1, category: 'Vigilância', title: 'Central de Instalação de CFTV' },
        { id: 2, category: 'Escolta', title: 'Escolta Armada de Comboio VIP' },
        { id: 3, category: 'Eventos', title: 'Segurança de Festival de Grande Porte' },
    ];

    const filteredProjects = filter === 'Todos' ? projects : projects.filter(p => p.category === filter);

    return (
        <section id="portfolio" className="py-20 bg-[var(--color-background-light)] border-t border-[var(--color-gold)]/10 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-white mb-10">Nosso Portfólio</h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {filters.map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-6 py-2 rounded-md font-medium text-sm transition-all cursor-pointer ${filter === f
                                ? 'bg-[var(--color-gold)] text-black'
                                : 'bg-[var(--color-background-card)] text-gray-300 hover:text-[var(--color-gold)] border border-gray-800'
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative bg-[var(--color-background-lighter)] rounded-xl overflow-hidden shadow-xl aspect-video"
                        >
                            <div className="absolute inset-0 bg-neutral-800 group-hover:bg-neutral-700 transition-colors flex items-center justify-center">
                                <span className="text-gray-500 font-medium">Espaço para Imagem</span>
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-wider mb-1">{project.category}</span>
                                <h4 className="text-white text-lg font-semibold">{project.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
