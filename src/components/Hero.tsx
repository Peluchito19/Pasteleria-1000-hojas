import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          data-pimer-bind="hero.imagen"
          data-original-src="https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&q=80&w=2000"
          src="https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&q=80&w=2000"
          alt="Pastelería 1000 Hojas"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (target.getAttribute('data-fallback-applied') === 'true') return;
            target.setAttribute('data-fallback-applied', 'true');
            target.src = "https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&fit=crop&q=80&w=2000";
          }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center text-white flex flex-col items-center justify-center h-full pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <h2 data-pimer-bind="hero.desde" className="text-secondary font-medium tracking-widest uppercase text-sm md:text-base mb-4">
            Desde 2025
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 leading-tight">
            <span data-pimer-bind="hero.titulo">Pastelería</span> <br />
            <span data-pimer-bind="hero.subtitulo_destacado" className="text-primary">1000 Hojas</span>
          </h1>
          <p data-pimer-bind="hero.subtitulo" className="text-xl md:text-2xl font-light mb-10 text-accent/90">
            "Tradición en Casa"
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#catalog"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors shadow-lg shadow-primary/30"
            >
              Ver Catálogo
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#location"
              className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors"
            >
              Ubicación
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/70 text-sm uppercase tracking-widest">Descubre</span>
        <div className="w-[1px] h-12 bg-white/30 overflow-hidden">
          <motion.div
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
            className="w-full h-1/2 bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
