import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="text-blue-400"
      >
        <Activity className="w-8 h-8" />
      </motion.div>
      <div className="flex items-center text-2xl font-bold">
        <motion.span
          animate={{ 
            color: ['#3b82f6', '#1d4ed8', '#3b82f6'],
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-transparent bg-clip-text"
        >
          Quake
        </motion.span>
        <span className="text-gray-100">Sensor</span>
      </div>
    </div>
  );
}