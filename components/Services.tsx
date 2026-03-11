import React from 'react';
import { Camera, UserCheck, CalendarDays } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Camera size={32} className="text-[var(--color-gold)] mb-4" />,
            title: 'Vigilância Patrimonial',
            description: 'Soluções completas de monitoramento e proteção para garantir a integridade do seu patrimônio.',
        },
        {
            icon: <UserCheck size={32} className="text-[var(--color-gold)] mb-4" />,
            title: 'Escolta Armada',
            description: 'Serviços profissionais e ostensivos de escolta para proteção de vidas e bens de alto valor.',
        },
    ];

    return (
        <section id="services" className="py-20 bg-[var(--color-background-dark)] border-t border-[var(--color-gold)]/20 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-[var(--color-background-card)] rounded-lg p-8 flex flex-col items-center text-center shadow-lg border border-transparent hover:border-[var(--color-gold)]/30 transition-all duration-300 transform hover:-translate-y-2"
                        >
                            {service.icon}
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
