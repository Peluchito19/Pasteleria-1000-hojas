import { useState, useEffect } from 'react';
import { Clock, Gift } from 'lucide-react';
import { motion } from 'framer-motion';

export function PromoBanner() {
  const [isPromoActive, setIsPromoActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const checkPromo = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sun, 1 = Mon, ..., 5 = Fri
      const hours = now.getHours();
      const minutes = now.getMinutes();

      // Check if it's Monday to Friday between 08:00 and 13:00
      if (day >= 1 && day <= 5 && hours >= 8 && hours < 13) {
        setIsPromoActive(true);
        
        // Calculate time left until 13:00
        const endHour = 13;
        const endMinute = 0;
        
        let hoursLeft = endHour - hours - 1;
        let minsLeft = 60 - minutes;
        
        if (minsLeft === 60) {
          hoursLeft += 1;
          minsLeft = 0;
        }

        setTimeLeft(`${hoursLeft}h ${minsLeft}m`);
      } else {
        setIsPromoActive(false);
      }
    };

    checkPromo();
    const interval = setInterval(checkPromo, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  if (!isPromoActive) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-primary text-white py-3 px-4 shadow-md z-30 relative"
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
        <div className="flex items-center gap-2 font-medium">
          <Gift className="animate-pulse" size={20} />
          <span>¡Promoción del Día Activa!</span>
        </div>
        <div className="hidden sm:block w-px h-4 bg-white/30" />
        <div className="flex items-center gap-2 text-sm bg-white/20 px-3 py-1 rounded-full">
          <Clock size={16} />
          <span>Termina en: {timeLeft}</span>
        </div>
        <a
          href="#catalog"
          className="text-sm underline hover:text-accent transition-colors ml-2 font-medium"
        >
          Ver combos
        </a>
      </div>
    </motion.div>
  );
}
