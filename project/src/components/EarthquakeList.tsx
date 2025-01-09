import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import type { Earthquake } from '../types/earthquake';

interface EarthquakeListProps {
  earthquakes: Earthquake[];
}

export default function EarthquakeList({ earthquakes }: EarthquakeListProps) {
  const { t } = useTranslation();

  return (
    <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg rounded-xl shadow-xl p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        {t('recentEarthquakes')}
      </h2>
      <div className="space-y-4 max-h-[600px] overflow-y-auto custom-scrollbar">
        {earthquakes.map((quake, index) => (
          <motion.div
            key={quake.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                  {quake.properties.place}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {format(new Date(quake.properties.time), 'PPP p')}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span
                  className={`px-3 py-1 rounded-full text-white font-semibold ${
                    getMagnitudeColor(quake.properties.mag)
                  }`}
                >
                  M{quake.properties.mag.toFixed(1)}
                </span>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t('depth')}: {quake.geometry.coordinates[2].toFixed(1)} km
              </p>
              <a
                href={quake.properties.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:underline text-sm inline-flex items-center space-x-1 mt-1"
              >
                {t('moreDetails')} →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function getMagnitudeColor(magnitude: number): string {
  if (magnitude >= 7) return 'bg-red-600 animate-pulse';
  if (magnitude >= 5) return 'bg-orange-500';
  if (magnitude >= 3) return 'bg-yellow-500';
  return 'bg-green-500';
}