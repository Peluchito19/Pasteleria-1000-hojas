import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { categories, products } from '../data/products';
import { ProductCard } from './ProductCard';

export function Catalog() {
  const [activeCategory, setActiveCategory] = useState('tortas');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="catalog" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair font-bold text-dark mb-4"
          >
            Nuestro Catálogo
          </motion.h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-dark/70 max-w-2xl mx-auto text-lg">
            Descubre nuestra selección de productos artesanales, preparados con los mejores ingredientes y mucho amor.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="text-dark/40" size={20} />
          </div>
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-full border border-accent/50 bg-accent/10 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-dark placeholder-dark/40 shadow-sm"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar gap-3 mb-12 pb-4 snap-x">
          <button
            onClick={() => setActiveCategory('all')}
            className={`snap-center whitespace-nowrap px-6 py-3 rounded-full font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-primary text-white shadow-md shadow-primary/30'
                : 'bg-accent/30 text-dark hover:bg-accent/50'
            }`}
          >
            Todos
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`snap-center whitespace-nowrap px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-md shadow-primary/30'
                  : 'bg-accent/30 text-dark hover:bg-accent/50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-dark/50 font-medium">No se encontraron productos que coincidan con tu búsqueda.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-6 text-primary hover:underline font-medium"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
