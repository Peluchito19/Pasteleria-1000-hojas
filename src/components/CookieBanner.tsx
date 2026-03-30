import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 pointer-events-none"
        >
          <div className="max-w-4xl mx-auto bg-dark/95 backdrop-blur-md text-white p-6 rounded-2xl shadow-2xl border border-white/10 pointer-events-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-white/80">
              <p className="font-medium text-white mb-1">Aviso de Cookies y Privacidad</p>
              <p>
                Utilizamos cookies (ficticias en esta demo) para mejorar tu experiencia. Al continuar navegando, aceptas nuestra política de privacidad de demostración.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={acceptCookies}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
              >
                Aceptar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
