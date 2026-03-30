import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export function Location() {
  return (
    <section id="location" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-playfair font-bold text-dark mb-4"
          >
            Ubicación y Horarios
          </motion.h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-dark/70 max-w-2xl mx-auto text-lg">
            Visítanos o contáctanos para realizar tu pedido. Estamos listos para atenderte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full h-[400px] bg-accent/20 rounded-3xl overflow-hidden shadow-lg relative border border-accent/30"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.064560737126!2d-70.55621402345866!3d-33.6036125121111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d7005118880d%3A0x4c20536cff9e9e6!2sAv.%20Eyzaguirre%203970%2C%20Puente%20Alto%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1sen!2scl!4v1711820000000!5m2!1sen!2scl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Pastelería 1000 Hojas"
              className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-sm border border-accent/20 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-playfair font-bold text-dark mb-2">Dirección</h3>
                <p className="text-dark/70 leading-relaxed">
                  Av. Eyzaguirre 3970, 8166194<br />
                  Puente Alto, Región Metropolitana
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-sm border border-accent/20 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-xl font-playfair font-bold text-dark mb-2">Horario de Atención</h3>
                <ul className="text-dark/70 space-y-2">
                  <li className="flex justify-between w-full max-w-[200px]">
                    <span className="font-medium">Lunes a Viernes:</span>
                    <span>08:00 - 19:00</span>
                  </li>
                  <li className="flex justify-between w-full max-w-[200px]">
                    <span className="font-medium">Sábado:</span>
                    <span>09:00 - 15:00</span>
                  </li>
                  <li className="flex justify-between w-full max-w-[200px]">
                    <span className="font-medium">Domingo:</span>
                    <span className="text-primary font-medium">Cerrado</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-sm border border-accent/20 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-playfair font-bold text-dark mb-2">Contacto</h3>
                <p className="text-dark/70 mb-1">
                  <a href="tel:+56966475848" className="hover:text-primary transition-colors">+56 9 6647 5848</a>
                </p>
                <p className="text-dark/70">
                  <a href="mailto:contacto@1000hojas.cl" className="hover:text-primary transition-colors flex items-center gap-2">
                    <Mail size={16} /> contacto@1000hojas.cl
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
