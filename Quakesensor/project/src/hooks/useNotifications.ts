import { useEffect, useState } from 'react';
import type { Earthquake } from '../types/earthquake';

export function useNotifications(earthquakes: Earthquake[]) {
  const [lastNotifiedId, setLastNotifiedId] = useState<string>('');
  const [notificationSound] = useState(() => new Audio('/alert.mp3'));

  useEffect(() => {
    if (!('Notification' in window)) {
      console.warn('This browser does not support notifications');
      return;
    }

    const checkForNewEarthquakes = () => {
      const recentHighMagnitude = earthquakes.find(eq => 
        eq.properties.mag >= 4.5 && 
        eq.id !== lastNotifiedId &&
        Date.now() - eq.properties.time < 5 * 60 * 1000 // Last 5 minutes
      );

      if (recentHighMagnitude) {
        setLastNotifiedId(recentHighMagnitude.id);
        
        // Play sound for high magnitude earthquakes
        if (recentHighMagnitude.properties.mag >= 5) {
          notificationSound.play().catch(console.error);
        }

        // Show notification
        new Notification('Significant Earthquake Detected', {
          body: `Magnitude ${recentHighMagnitude.properties.mag} earthquake near ${recentHighMagnitude.properties.place}`,
          icon: '/favicon.ico',
          badge: '/favicon.ico',
          vibrate: [200, 100, 200],
          tag: recentHighMagnitude.id,
          renotify: true
        });
      }
    };

    // Check when new earthquakes are loaded
    checkForNewEarthquakes();

    // Set up periodic checks
    const interval = setInterval(checkForNewEarthquakes, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, [earthquakes, lastNotifiedId, notificationSound]);
}