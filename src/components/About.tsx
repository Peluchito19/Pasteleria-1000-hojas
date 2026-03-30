import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-24 bg-accent/10 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/duena-pasteleria.jpg"
                alt="Nuestra Historia"
                className="w-full h-full object-cover aspect-[4/5]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-dark/20" />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-accent/30 hidden md:block">
              <div className="font-playfair font-bold text-4xl text-primary mb-1">2025</div>
              <div className="text-dark/70 text-sm uppercase tracking-widest font-medium">Año de Fundación</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-dark mb-6">
              Nuestra Historia
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mb-8" />
            
            <div className="space-y-6 text-lg text-dark/80 leading-relaxed font-light">
              <p>
                Pastelería 1000 Hojas nació en el año 2025 con un sueño claro: llevar el sabor de la tradición a cada hogar chileno. Comenzamos en una pequeña cocina, horneando con recetas familiares que han pasado de generación en generación.
              </p>
              <p>
                Nuestro compromiso siempre ha sido la calidad. Utilizamos ingredientes frescos y seleccionados para crear tortas, tartas y dulces que no solo se ven increíbles, sino que saben a hogar.
              </p>
              <p>
                Hoy, seguimos creciendo gracias a la preferencia de nuestros clientes, manteniendo intacta la esencia artesanal que nos caracteriza. Cada producto que sale de nuestros hornos lleva consigo dedicación, amor y el auténtico sabor de la pastelería tradicional.
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-playfair font-bold text-primary">+1000</span>
                <span className="text-sm text-dark/60 uppercase tracking-wider font-medium mt-1">Clientes Felices</span>
              </div>
              <div className="w-px h-12 bg-accent/50" />
              <div className="flex flex-col">
                <span className="text-3xl font-playfair font-bold text-primary">100%</span>
                <span className="text-sm text-dark/60 uppercase tracking-wider font-medium mt-1">Artesanal</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Decorative Shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-accent/20 rounded-bl-full -z-0 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-primary/5 rounded-tr-full -z-0 blur-3xl" />
    </section>
  );
}
