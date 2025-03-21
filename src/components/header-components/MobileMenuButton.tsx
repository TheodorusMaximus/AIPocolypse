import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  return (
    <motion.button
      className="md:hidden relative w-10 h-10 flex items-center justify-center"
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
    >
      <div className="absolute inset-0 rounded-sm bg-black bg-opacity-40 backdrop-blur-sm -z-10 border border-concrete"></div>
      
      {isOpen ? (
        <X className="w-6 h-6 text-resistance" />
      ) : (
        <Menu className="w-6 h-6" />
      )}
      
      {/* Notification dot */}
      <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-resistance animate-pulse"></div>
    </motion.button>
  );
}

export default MobileMenuButton; 