import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

interface ErrorScreenProps {
  error: string;
}

export default function ErrorScreen({ error }: ErrorScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
      >
        <div className="flex items-center space-x-3 text-red-500">
          <AlertTriangle className="w-6 h-6" />
          <p className="text-lg font-medium">{error}</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          Try Again
        </motion.button>
      </motion.div>
    </div>
  );
}