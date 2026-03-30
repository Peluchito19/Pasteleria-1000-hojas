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
          if (!currentSrc || currentSrc === 'null' || currentSrc === 'undefined' || currentSrc === '' || currentSrc.includes('undefined') || currentSrc.includes('null')) {
            const originalSrc = img.getAttribute('data-original-src');
            if (originalSrc) {
              const originalUrl = new URL(originalSrc, window.location.origin).href;
              if (img.src !== originalUrl) {
                img.setAttribute('src', originalSrc);
              }
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

    // 3. Global Image Error Listener
    // Catches any image that fails to load globally (e.g. 404 from Pimer)
    const handleImageError = (e: ErrorEvent) => {
      const target = e.target as HTMLImageElement;
      if (target && target.tagName === 'IMG') {
        const originalSrc = target.getAttribute('data-original-src');
        if (originalSrc) {
          const originalUrl = new URL(originalSrc, window.location.origin).href;
          if (target.src !== originalUrl) {
            target.src = originalSrc;
          }
        }
      }
    };

    window.addEventListener('error', handleImageError, true); // true for capture phase

    return () => {
      lenis.destroy();
      observer.disconnect();
      window.removeEventListener('error', handleImageError, true);
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
