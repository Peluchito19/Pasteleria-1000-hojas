import { useCartStore, CartItem } from '../store/cartStore';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    description?: string;
    image: string;
    category: string;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
    });
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-accent/50 flex flex-col h-full group"
    >
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          data-pimer-bind={`producto-${product.id}.imagen`}
          src={product.image}
          alt={product.name}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            // Si la imagen falla (ej. Pimer inyecta una URL vacía o rota), usamos la local
            if (!target.src.includes(product.image)) {
              target.src = product.image;
            }
          }}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2 gap-4">
          <h3 data-pimer-bind={`producto-${product.id}.nombre`} className="font-playfair font-bold text-xl text-dark leading-tight">
            {product.name}
          </h3>
          <span data-pimer-bind={`producto-${product.id}.precio`} className="font-semibold text-primary whitespace-nowrap bg-accent/30 px-3 py-1 rounded-full text-sm">
            ${product.price.toLocaleString('es-CL')}
          </span>
        </div>
        
        {product.description && (
          <p data-pimer-bind={`producto-${product.id}.descripcion`} className="text-dark/70 text-sm mb-6 flex-grow line-clamp-2">
            {product.description}
          </p>
        )}
        
        <button
          onClick={handleAdd}
          className="mt-auto w-full bg-dark hover:bg-primary text-white py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 group-hover:shadow-md"
        >
          <Plus size={18} />
          <span>Agregar al Carrito</span>
        </button>
      </div>
    </motion.div>
  );
}
