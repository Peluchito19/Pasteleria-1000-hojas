import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCartStore } from '../store/cartStore';
import { PromoBanner } from './PromoBanner';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleCart, getItemCount } = useCartStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Catálogo', href: '#catalog' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Ubicación', href: '#location' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex flex-col">
      <PromoBanner />
      <div
        className={`transition-all duration-300 w-full ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 z-50">
            <img 
              data-pimer-bind="config-tienda.logo" 
              data-original-src="/logo.png"
              src="/logo.png" 
              alt="Mil Hojas Logo" 
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                const original = target.getAttribute('data-original-src');
                if (original) {
                  const originalUrl = new URL(original, window.location.origin).href;
                  if (target.src !== originalUrl) {
                    target.src = original;
                  }
                }
              }}
              className="w-12 h-12 object-contain bg-white rounded-full p-0.5 shadow-sm" 
            />
            <span data-pimer-bind="config-tienda.nombre_tienda" className={`font-playfair font-bold text-xl ${isScrolled ? 'text-dark' : 'text-dark md:text-white'}`}>
              Mil Hojas
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium hover:text-primary transition-colors ${
                  isScrolled ? 'text-dark' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 z-50">
            <button
              onClick={toggleCart}
              className={`relative p-2 rounded-full transition-colors ${
                isScrolled ? 'hover:bg-accent/50 text-dark' : 'hover:bg-white/20 text-dark md:text-white'
              }`}
              aria-label="Carrito de compras"
            >
              <ShoppingBag size={24} />
              {getItemCount() > 0 && (
                <span className="absolute top-0 right-0 bg-primary text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full transform translate-x-1 -translate-y-1">
                  {getItemCount()}
                </span>
              )}
            </button>

            <button
              className={`md:hidden p-2 rounded-full ${
                isScrolled ? 'text-dark' : 'text-dark'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-2xl font-playfair font-bold text-dark hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
}
