import { useState } from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { LegalModal } from './LegalModal';

export function Footer() {
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalTitle, setLegalTitle] = useState('');

  const openLegal = (title: string) => {
    setLegalTitle(title);
    setIsLegalModalOpen(true);
  };

  return (
    <footer className="bg-dark text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-6">
              <img 
                data-pimer-bind="config-tienda.logo" 
                data-original-src="/logo.png"
                src="/logo.png" 
                alt="Mil Hojas Logo" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.getAttribute('data-fallback-applied') === 'true') return;
                  target.setAttribute('data-fallback-applied', 'true');
                  target.src = '/logo.png';
                }}
                className="w-16 h-16 object-contain bg-white rounded-full p-1 shadow-lg shadow-primary/30" 
              />
              <span data-pimer-bind="config-tienda.nombre_tienda" className="font-playfair font-bold text-2xl tracking-wide">
                Mil Hojas
              </span>
            </div>
            <p data-pimer-bind="footer.descripcion" className="text-white/60 mb-8 max-w-xs leading-relaxed font-light">
              Llevando el sabor de la tradición a tu hogar desde 2025. Pastelería artesanal hecha con amor.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-playfair font-bold text-xl mb-6 text-secondary">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#home" className="hover:text-primary transition-colors">Inicio</a></li>
              <li><a href="#catalog" className="hover:text-primary transition-colors">Catálogo</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">Nuestra Historia</a></li>
              <li><a href="#location" className="hover:text-primary transition-colors">Ubicación</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-playfair font-bold text-xl mb-6 text-secondary">Contacto</h4>
            <ul className="space-y-4 text-white/70">
              <li data-pimer-bind="footer.direccion1">Av. Eyzaguirre 3970</li>
              <li data-pimer-bind="footer.direccion2">Puente Alto, Región Metropolitana</li>
              <li data-pimer-bind="footer.telefono">+56 9 6647 5848</li>
              <li data-pimer-bind="footer.email">contacto@1000hojas.cl</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Pastelería 1000 Hojas. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <button onClick={() => openLegal('Términos y Condiciones')} className="hover:text-white transition-colors">Términos y Condiciones</button>
            <button onClick={() => openLegal('Política de Privacidad')} className="hover:text-white transition-colors">Política de Privacidad</button>
          </div>
        </div>

        <div className="mt-8 text-center text-white/30 text-xs max-w-4xl mx-auto px-4">
          <strong>Aviso Legal (Demo):</strong> Este sitio web es un proyecto de demostración con fines de portafolio. "Pastelería 1000 Hojas" es una marca con fines ilustrativos. No se realizan ventas reales ni se recopilan datos comerciales. Las imágenes pertenecen a sus respectivos autores.
        </div>
      </div>

      <LegalModal isOpen={isLegalModalOpen} onClose={() => setIsLegalModalOpen(false)} title={legalTitle} />
    </footer>
  );
}
