import React from 'react';
import { Award, Clock, Smile } from 'lucide-react';

const Stats = () => {
    const stats = [
        {
            icon: <Award size={24} className="text-[var(--color-gold)] mb-2" />,
            value: '10+',
            label: 'Anos de Experiência',
        },
        {
            icon: <Clock size={24} className="text-[var(--color-gold)] mb-2" />,
            value: '24/7',
            label: 'Monitoramento',
        },
        {
            icon: <Smile size={24} className="text-[var(--color-gold)] mb-2" />,
            value: '100%',
            label: 'Satisfação dos Clientes',
        },
    ];

    return (
        <section className="py-16 bg-[var(--color-background-dark)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[var(--color-gold)]/20">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center py-6 md:py-0">
                            {stat.icon}
                            <h3 className="text-4xl font-bold text-[var(--color-gold)] mb-2">{stat.value}</h3>
                            <p className="text-white font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
