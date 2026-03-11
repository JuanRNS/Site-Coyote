"use client";

import Link from 'next/link';
import { useEffect } from 'react';

const Footer = () => {
    useEffect(() => {
        const initMap = async () => {
            const L = (await import('leaflet')).default;
            // @ts-ignore
            await import('leaflet/dist/leaflet.css');

            const mapContainer = document.getElementById('map') as any;
            if (mapContainer && mapContainer._leaflet_id) {
                return;
            }

            delete (L.Icon.Default.prototype as any)._getIconUrl;
            L.Icon.Default.mergeOptions({
                iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
                iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
                shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
            });

            const map = L.map('map').setView([-7.121922401910087, -34.857248165618465], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([-7.12193304796826, -34.8574842]).addTo(map)
                .bindPopup('<strong style="color: black;">Coyote Segurança Privada</strong>')
                .openPopup();
        };

        initMap();
    }, []);


    return (
        <footer id="contact" className="bg-[var(--color-cyan)] !bg-[var(--color-background-darker)] pt-16 pb-8 border-t border-[var(--color-gold)]/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
                    <div className="flex flex-col items-start md:items-start">
                        <h4 className="text-white font-bold text-lg mb-6">Links Rápidos</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#home" className="text-gray-400 hover:text-[var(--color-gold)] transition-colors text-sm">
                                    Início
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-gray-400 hover:text-[var(--color-gold)] transition-colors text-sm">
                                    Serviços
                                </Link>
                            </li>
                            <li>
                                <Link href="#portfolio" className="text-gray-400 hover:text-[var(--color-gold)] transition-colors text-sm">
                                    Portfólio
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-gray-400 hover:text-[var(--color-gold)] transition-colors text-sm">
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="text-start md:text-left">
                        <h4 className="text-white font-bold text-lg mb-6">Informações da Empresa</h4>
                        <div className="space-y-3">
                            <p className="text-gray-400 text-sm">CNPJ: 35.416033/0001-00</p>
                            <p className="text-gray-400 text-sm">Email: comercial@coyotesegurancaprivada.com.br</p>
                            <p className="text-gray-400 text-sm">Telefone: (83) 3690-0549</p>
                            <p className="text-gray-400 text-sm">Endereço: Rua Carlos Gomes n° 318 B – Bairro dos Expedicionários - CEP 58.040.080 João Pessoa</p>
                            <p className="text-[var(--color-gold)] text-sm font-semibold flex items-center justify-start md:justify-start gap-2 mt-4">
                                <span className="w-2 h-2 rounded-full bg-[var(--color-gold)] inline-block"></span>
                                Segurança Certificada
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-start md:justify-end w-full md:w-1/3">
                        {/* Z-0 garante que o mapa não fique em cima do menu mobile ou cabeçalho. Alturas responsivas definidas. */}
                        <div id="map" className="w-full h-[300px] md:h-[250px] bg-neutral-800 rounded-md border border-neutral-700 z-0">
                        </div>
                    </div>

                </div>

                <div className="text-center pt-8 border-t border-white/10">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Coyote Segurança Privada Eireli. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
