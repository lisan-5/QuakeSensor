import { useState, useEffect } from 'react';
import { Bell, BellOff, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NotificationButton() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [minMagnitude, setMinMagnitude] = useState(4.5);

  useEffect(() => {
    if ('Notification' in window) {
      setNotificationsEnabled(Notification.permission === 'granted');
    }
    
    // Load saved settings
    const savedMinMag = localStorage.getItem('notificationMinMagnitude');
    if (savedMinMag) {
      setMinMagnitude(parseFloat(savedMinMag));
    }
  }, []);

  const enableNotifications = async () => {
    if (!('Notification' in window)) {
      alert('This browser does not support notifications');
      return;
    }

    try {
      const permission = await Notification.requestPermission();
      setNotificationsEnabled(permission === 'granted');
      
      if (permission === 'granted') {
        new Notification('Notifications Enabled', {
          body: 'You will be notified of significant earthquakes',
          icon: '/favicon.ico'
        });
      }
    } catch (error) {
      console.error('Error requesting notification permission:', error);
    }
  };

  const handleMinMagnitudeChange = (value: number) => {
    setMinMagnitude(value);
    localStorage.setItem('notificationMinMagnitude', value.toString());
  };

  return (
    <div className="relative">
      <div className="flex items-center space-x-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={enableNotifications}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
            notificationsEnabled 
              ? 'bg-green-500 text-white' 
              : 'bg-gray-200/10 backdrop-blur-sm text-white'
          }`}
        >
          {notificationsEnabled ? (
            <Bell className="w-5 h-5" />
          ) : (
            <BellOff className="w-5 h-5" />
          )}
        </motion.button>
        
        {notificationsEnabled && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowSettings(!showSettings)}
            className="p-2 rounded-full bg-gray-200/10 backdrop-blur-sm text-white"
          >
            <Settings className="w-5 h-5" />
          </motion.button>
        )}
      </div>

      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 p-4 bg-white/10 backdrop-blur-md rounded-lg shadow-lg w-64"
          >
            <h3 className="text-white font-semibold mb-3">Notification Settings</h3>
            <div className="space-y-2">
              <label className="text-white text-sm">
                Minimum Magnitude: {minMagnitude}
              </label>
              <input
                type="range"
                min="2"
                max="8"
                step="0.5"
                value={minMagnitude}
                onChange={(e) => handleMinMagnitudeChange(parseFloat(e.target.value))}
                className="w-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}