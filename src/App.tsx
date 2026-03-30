import { useEffect } from 'react';
import Lenis from 'lenis';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Catalog } from './components/Catalog';
import { About } from './components/About';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CookieBanner } from './components/CookieBanner';

export default function App() {
  useEffect(() => {
    // 1. Smooth scrolling setup
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 2. Pimer CMS Image Fallback Observer
    // Pimer sets src to empty/null if the user hasn't uploaded an image yet.
    // This observer catches that and restores the original local image.
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        const target = mutation.target as HTMLElement;
        if (target.tagName === 'IMG' && mutation.attributeName === 'src') {
          const img = target as HTMLImageElement;
          const currentSrc = img.getAttribute('src');
          
          // Si Pimer vació el src o puso un valor inválido
          if (!currentSrc || currentSrc === 'null' || currentSrc === 'undefined' || currentSrc === '') {
            const originalSrc = img.getAttribute('data-original-src');
            if (originalSrc) {
              img.setAttribute('src', originalSrc);
            }
          }
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['src']
    });

    return () => {
      lenis.destroy();
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-poppins text-dark selection:bg-primary selection:text-white">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Catalog />
        <About />
        <Location />
      </main>

      <Footer />
      <CartDrawer />
      <FloatingWhatsApp />
      <CookieBanner />
    </div>
  );
}
