import { Github, Mail, BrandTelegram } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-black/30 backdrop-blur-lg mt-12">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-4">
            <motion.a
              href="https://github.com/lisan-5"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <Github className="w-6 h-6 text-white" />
            </motion.a>
            <motion.a
              href="https://t.me/ligator"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <BrandTelegram className="w-6 h-6 text-white" />
            </motion.a>
            <motion.a
              href="mailto:lisan5abay@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <Mail className="w-6 h-6 text-white" />
            </motion.a>
          </div>
          <p className="text-center text-white text-sm">
            © 2025 Lisanegebriel Abay Kebedew. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}