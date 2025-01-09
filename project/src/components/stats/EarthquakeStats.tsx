import { useTranslation } from 'react-i18next';
import { Activity, AlertTriangle, Gauge } from 'lucide-react';
import type { Earthquake } from '../../types/earthquake';
import { motion } from 'framer-motion';

interface StatsProps {
  earthquakes: Earthquake[];
}

export default function EarthquakeStats({ earthquakes }: StatsProps) {
  const { t } = useTranslation();
  
  const stats = {
    total: earthquakes.length,
    avgMagnitude: earthquakes.reduce((acc, eq) => acc + eq.properties.mag, 0) / earthquakes.length,
    highRisk: earthquakes.filter(eq => eq.properties.mag >= 5).length
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {[
        {
          title: t('totalEvents'),
          value: stats.total,
          icon: Activity,
          color: 'text-blue-500'
        },
        {
          title: t('avgMagnitude'),
          value: stats.avgMagnitude.toFixed(1),
          icon: Gauge,
          color: 'text-green-500'
        },
        {
          title: t('highRiskEvents'),
          value: stats.highRisk,
          icon: AlertTriangle,
          color: 'text-red-500'
        }
      ].map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{stat.title}</p>
              <p className="text-2xl font-bold mt-1">{stat.value}</p>
            </div>
            <stat.icon className={`w-8 h-8 ${stat.color}`} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}