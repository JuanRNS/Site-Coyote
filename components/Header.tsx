"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MenuIcon, X } from 'lucide-react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuRef = useRef<HTMLElement>(null);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isMobileMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    return (
        <header ref={menuRef} className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Image src="/logo-retangular.jpeg" alt="Logo" title='coyote' width={200} height={200} />
                    </div>

                    <nav className="hidden md:flex space-x-8 items-center text-sm font-medium">
                        <Link href="#home" className="text-white hover:text-[var(--color-gold)] transition-colors">
                            Início
                        </Link>
                        <Link href="#services" className="text-white hover:text-[var(--color-gold)] transition-colors">
                            Serviços
                        </Link>
                        <Link href="#portfolio" className="text-white hover:text-[var(--color-gold)] transition-colors">
                            Portfólio
                        </Link>
                        <Link href="#contact" className="text-white hover:text-[var(--color-gold)] transition-colors">
                            Contato
                        </Link>
                        {/* <Link
                            href="#client-area"
                            className="bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] text-black px-5 py-2.5 rounded-md font-bold transition-colors"
                        >
                            Área do Cliente
                        </Link> */}
                    </nav>

                    <div className="md:hidden flex items-center cursor-pointer">
                        <button onClick={toggleMenu} className="text-white hover:text-[var(--color-gold)] focus:outline-none cursor-pointer">
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <MenuIcon className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`md:hidden bg-[var(--color-background-dark)] border-white/10 space-y-2 shadow-xl transition-all duration-300 ease-in-out overflow-hidden flex flex-col ${isMobileMenuOpen ? 'max-h-[400px] opacity-100 pt-2 pb-6 px-4 border-b' : 'max-h-0 opacity-0 py-0 px-4 border-none'
                    }`}
            >
                <Link href="#home" onClick={closeMenu} className="block px-3 py-3 text-base font-medium text-white hover:text-[var(--color-gold)] hover:bg-white/5 rounded-md transition-colors">
                    Início
                </Link>
                <Link href="#services" onClick={closeMenu} className="block px-3 py-3 text-base font-medium text-white hover:text-[var(--color-gold)] hover:bg-white/5 rounded-md transition-colors">
                    Serviços
                </Link>
                <Link href="#portfolio" onClick={closeMenu} className="block px-3 py-3 text-base font-medium text-white hover:text-[var(--color-gold)] hover:bg-white/5 rounded-md transition-colors">
                    Portfólio
                </Link>
                <Link href="#contact" onClick={closeMenu} className="block px-3 py-3 text-base font-medium text-white hover:text-[var(--color-gold)] hover:bg-white/5 rounded-md transition-colors">
                    Contato
                </Link>
                <Link href="#client-area" onClick={closeMenu} className="block px-3 py-3 mt-4 text-center text-base font-bold bg-[var(--color-gold)] text-black rounded-md transition-colors hover:bg-[var(--color-gold-dark)]">
                    Área do Cliente
                </Link>
            </div>
        </header>
    );
};

export default Header;
