import React from 'react';
import AlertBanner from './components/alerts/AlertBanner';
import Header from './components/Header';
import MainContent from './components/layout/MainContent';
import Footer from './components/Footer';
import { useEarthquakeData } from './hooks/useEarthquakeData';
import { useNotifications } from './hooks/useNotifications';
import LoadingScreen from './components/LoadingScreen';
import ErrorScreen from './components/ErrorScreen';
import './i18n/config';

export default function App() {
  const { earthquakes, filteredEarthquakes, loading, error, handleFilterChange } = useEarthquakeData();
  useNotifications(earthquakes);

  // Force dark mode
  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  if (loading) return <LoadingScreen />;
  if (error) return <ErrorScreen error={error} />;

  return (
    <>
      <div className="animated-bg" />
      <div className="min-h-screen relative dark">
        <AlertBanner earthquakes={earthquakes} />
        <Header />
        <MainContent 
          earthquakes={earthquakes}
          filteredEarthquakes={filteredEarthquakes}
          onFilterChange={handleFilterChange}
        />
        <Footer />
      </div>
    </>
  );
}