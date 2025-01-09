import { motion } from 'framer-motion';
import Logo from './Logo';

export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut"
        }}
      >
        <Logo />
        <motion.div
          className="mt-4 h-1 bg-red-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  );
}