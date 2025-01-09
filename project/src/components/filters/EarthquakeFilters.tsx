import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Sliders } from 'lucide-react';
import { motion } from 'framer-motion';

interface FiltersProps {
  onFilterChange: (filters: FilterValues) => void;
}

interface FilterValues {
  minMagnitude: number;
  timeRange: number;
}

export default function EarthquakeFilters({ onFilterChange }: FiltersProps) {
  const { t } = useTranslation();
  const [filters, setFilters] = useState<FilterValues>({
    minMagnitude: 2,
    timeRange: 7
  });

  const handleChange = (key: keyof FilterValues, value: number) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white/90 dark:bg-gray-800/90 p-6 rounded-lg shadow-lg mb-6"
    >
      <div className="flex items-center space-x-2 mb-4">
        <Sliders className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        <h3 className="font-semibold text-gray-900 dark:text-white">{t('filters')}</h3>
      </div>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {t('minMagnitude')}
            </label>
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {filters.minMagnitude}
            </span>
          </div>
          <input
            type="range"
            min="2"
            max="8"
            step="0.5"
            value={filters.minMagnitude}
            onChange={(e) => handleChange('minMagnitude', parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
          <div className="flex justify-between mt-1">
            <span className="text-xs text-gray-600 dark:text-gray-400">2.0</span>
            <span className="text-xs text-gray-600 dark:text-gray-400">8.0</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {t('timeRange')}
            </label>
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {filters.timeRange} {t('days')}
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="30"
            value={filters.timeRange}
            onChange={(e) => handleChange('timeRange', parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
          <div className="flex justify-between mt-1">
            <span className="text-xs text-gray-600 dark:text-gray-400">1 day</span>
            <span className="text-xs text-gray-600 dark:text-gray-400">30 days</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}