import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Timeline } from './components/Timeline';
import { Projects } from './components/Projects';
import { Speaking } from './components/Speaking';
import { LifeGallery } from './components/LifeGallery';
import { Journal } from './components/Journal';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 z-50">
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Navigation />

      <main className="relative">
        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
        </div>

        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Speaking />
        <LifeGallery />
        <Journal />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12 mt-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            Designed & Built with ✨ by Cournicova Afiffah Syailendra
          </p>
          <p className="text-muted-foreground/60 mt-2">
            © 2026 · Crafted with passion, precision, and purpose
          </p>
        </div>
      </footer>
    </div>
  );
}
