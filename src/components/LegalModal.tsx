import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export function LegalModal({ isOpen, onClose, title }: LegalModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-dark/60 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        >
          <div className="p-6 border-b border-accent/20 flex justify-between items-center bg-accent/5">
            <h2 className="text-2xl font-playfair font-bold text-dark">{title}</h2>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-dark/50 hover:text-dark hover:bg-accent/20 transition-colors shadow-sm"
            >
              <X size={20} />
            </button>
          </div>
          <div className="p-6 overflow-y-auto text-dark/70 space-y-4 text-sm leading-relaxed">
            <p><strong>Última actualización:</strong> {new Date().toLocaleDateString()}</p>
            <p>
              <strong>1. Naturaleza del Sitio:</strong> Este sitio web es una demostración técnica y de diseño (portfolio). No representa a una entidad comercial real. Todos los productos, precios y servicios mostrados son ficticios y tienen un propósito puramente ilustrativo.
            </p>
            <p>
              <strong>2. Propiedad Intelectual e Imágenes:</strong> Las imágenes utilizadas en este sitio web provienen de bancos de imágenes gratuitos (como Unsplash), han sido proporcionadas para fines de demostración o han sido generadas por IA. Los derechos de autor de dichas imágenes pertenecen a sus respectivos creadores. Si eres el autor de alguna imagen y deseas que sea retirada, por favor contáctanos.
            </p>
            <p>
              <strong>3. Privacidad y Datos:</strong> Al ser una demostración, este sitio no recopila, almacena ni procesa datos personales reales de los visitantes con fines comerciales. Cualquier interacción (como el uso del carrito de compras) ocurre localmente en el navegador del usuario y se borra al cerrar la sesión o limpiar los datos de navegación.
            </p>
            <p>
              <strong>4. Uso de Cookies:</strong> Este sitio puede utilizar cookies técnicas básicas (almacenamiento local) únicamente para mantener el estado de la interfaz de usuario (por ejemplo, recordar si se cerró un aviso o los items del carrito simulado) durante la sesión de demostración.
            </p>
            <p>
              <strong>5. Exención de Responsabilidad:</strong> El creador de esta plantilla/demo no se hace responsable de ningún malentendido, daño o perjuicio derivado del uso de este sitio web de demostración como si fuera un negocio real.
            </p>
          </div>
          <div className="p-6 border-t border-accent/20 bg-accent/5 flex justify-end">
            <button
              onClick={onClose}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              Entendido
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
