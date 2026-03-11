import React from 'react';

const Hero = () => {
    return (
        <section
            id="home"
            className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center justify-center min-h-[80vh] overflow-hidden"
        >
            <div className="absolute inset-0 z-0 bg-[var(--color-background-dark)] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/40 via-black to-black opacity-80" />

            <div
                className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                    backgroundSize: '24px 24px'
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                    A <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold-light)] via-[var(--color-gold)] to-[var(--color-gold-dark)]">Elite</span> em Segurança Privada
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl">
                    Garantindo confiança e segurança, 24/7
                </p>

                <a
                    href="#contact"
                    className="inline-flex items-center justify-center bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] text-black px-8 py-4 rounded-md font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                >
                    Solicitar Orçamento
                </a>
            </div>
        </section>
    );
};

export default Hero;
