import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-background-dark)] flex flex-col font-sans">
      <Header />

      <main className="flex-grow flex flex-col">
        <Hero />
        <Services />
        <Stats />
        <Portfolio />
      </main>

      <Footer />
    </div>
  );
}

