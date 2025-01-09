import { motion } from 'framer-motion';
import Logo from './Logo';
import NotificationButton from './notifications/NotificationButton';

export default function Header() {
  return (
    <header className="bg-black/30 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Logo />
          <NotificationButton />
        </div>
      </div>
    </header>
  );
}