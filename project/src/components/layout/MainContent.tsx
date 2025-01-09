import { motion } from 'framer-motion';
import Map from '../Map';
import SafetyInfo from '../SafetyInfo';
import EarthquakeList from '../EarthquakeList';
import EarthquakeFilters from '../filters/EarthquakeFilters';
import type { Earthquake } from '../../types/earthquake';

interface MainContentProps {
  earthquakes: Earthquake[];
  filteredEarthquakes: Earthquake[];
  onFilterChange: (filters: { minMagnitude: number; timeRange: number }) => void;
}

export default function MainContent({ 
  earthquakes, 
  filteredEarthquakes, 
  onFilterChange 
}: MainContentProps) {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 relative">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Map and Filters */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-6"
        >
          <EarthquakeFilters onFilterChange={onFilterChange} />
          <div className="glass-effect rounded-xl p-4">
            <Map earthquakes={filteredEarthquakes} />
          </div>
        </motion.div>

        {/* Right Column - Earthquake List */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:h-[calc(80vh+4rem)] overflow-y-auto"
        >
          <EarthquakeList earthquakes={filteredEarthquakes} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8"
      >
        <SafetyInfo />
      </motion.div>
    </main>
  );
}