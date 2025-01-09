import { useState, useEffect } from 'react';
import type { Earthquake } from '../types/earthquake';

export function useEarthquakeData() {
  const [earthquakes, setEarthquakes] = useState<Earthquake[]>([]);
  const [filteredEarthquakes, setFilteredEarthquakes] = useState<Earthquake[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEarthquakes = async () => {
      try {
        const response = await fetch(
          'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minlatitude=3&maxlatitude=15&minlongitude=33&maxlongitude=48&minmagnitude=2'
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch earthquake data');
        }

        const data = await response.json();
        setEarthquakes(data.features);
        setFilteredEarthquakes(data.features);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchEarthquakes();
    const interval = setInterval(fetchEarthquakes, 300000); // Fetch every 5 minutes
    return () => clearInterval(interval);
  }, []);

  const handleFilterChange = (filters: { minMagnitude: number; timeRange: number }) => {
    const filtered = earthquakes.filter(quake => {
      const withinTimeRange = (Date.now() - quake.properties.time) < (filters.timeRange * 24 * 60 * 60 * 1000);
      return quake.properties.mag >= filters.minMagnitude && withinTimeRange;
    });
    setFilteredEarthquakes(filtered);
  };

  return {
    earthquakes,
    filteredEarthquakes,
    loading,
    error,
    handleFilterChange
  };
}