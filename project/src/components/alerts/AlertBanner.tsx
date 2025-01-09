import { useTranslation } from 'react-i18next';
import { AlertTriangle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Earthquake } from '../../types/earthquake';
import { useState } from 'react';

interface AlertBannerProps {
  earthquakes: Earthquake[];
}

export default function AlertBanner({ earthquakes }: AlertBannerProps) {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);
  
  const recentHighMagnitude = earthquakes.find(eq => 
    eq.properties.mag >= 5 && 
    Date.now() - eq.properties.time < 24 * 60 * 60 * 1000
  );

  if (!recentHighMagnitude || !isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="bg-red-500 text-white py-3 px-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="w-6 h-6" />
            <p>
              {t('recentHighMagnitude', {
                magnitude: recentHighMagnitude.properties.mag.toFixed(1),
                location: recentHighMagnitude.properties.place
              })}
            </p>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-red-600 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}