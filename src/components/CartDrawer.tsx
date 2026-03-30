import { useCartStore } from '../store/cartStore';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';

export function CartDrawer() {
  const { items, isCartOpen, toggleCart, updateQuantity, removeItem, getTotal } = useCartStore();

  const handleCheckout = () => {
    const phoneNumber = '56966475848';
    const now = new Date();
    const dateStr = now.toLocaleDateString('es-CL');
    const timeStr = now.toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' });

    let message = `🎂 *Pedido Pastelería 1000 Hojas*\n`;
    message += `📅 Fecha: ${dateStr}\n`;
    message += `⏰ Hora: ${timeStr}\n\n`;
    message += `*Productos:*\n`;

    items.forEach((item) => {
      const subtotal = item.price * item.quantity;
      message += `• ${item.name} x${item.quantity} - $${subtotal.toLocaleString('es-CL')}\n`;
    });

    message += `\n*Total: $${getTotal().toLocaleString('es-CL')}*\n\n`;
    message += `📍 Retiro en local / 🚚 Delivery (consultar)\n\n`;
    message += `¿Confirmar pedido?`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-dark/40 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-accent/50 bg-accent/10">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-primary" size={24} />
                <h2 className="text-2xl font-playfair font-bold text-dark">Tu Pedido</h2>
              </div>
              <button
                onClick={toggleCart}
                className="p-2 hover:bg-white rounded-full transition-colors text-dark/60 hover:text-dark shadow-sm"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-dark/50 gap-4">
                  <ShoppingBag size={64} className="opacity-20" />
                  <p className="text-lg font-medium">Tu carrito está vacío</p>
                  <button
                    onClick={toggleCart}
                    className="mt-4 text-primary hover:underline font-medium"
                  >
                    Volver al catálogo
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      key={item.id}
                      className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-accent/30 shadow-sm"
                    >
                      <div className="flex-1">
                        <h3 className="font-medium text-dark line-clamp-1">{item.name}</h3>
                        <p className="text-primary font-semibold mt-1">
                          ${(item.price * item.quantity).toLocaleString('es-CL')}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 bg-accent/20 rounded-full p-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white text-dark/70 hover:text-dark transition-colors shadow-sm"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-4 text-center font-medium text-dark">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white text-dark/70 hover:text-dark transition-colors shadow-sm"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-dark/40 hover:text-red-500 transition-colors"
                      >
                        <X size={18} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 bg-accent/10 border-t border-accent/50">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-dark/70 font-medium text-lg">Total</span>
                  <span className="text-3xl font-playfair font-bold text-dark">
                    ${getTotal().toLocaleString('es-CL')}
                  </span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-4 rounded-xl font-medium text-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20"
                >
                  <span>Pedir por WhatsApp</span>
                  <ArrowRight size={20} />
                </button>
                <p className="text-center text-xs text-dark/50 mt-4">
                  Serás redirigido a WhatsApp para confirmar tu pedido.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
