import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export function Logo() {
  return (
    <motion.a 
      href="#"
      className="flex items-center space-x-3"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative">
        <div className="w-10 h-10 rounded-sm bg-resistance bg-opacity-20 border border-resistance flex items-center justify-center">
          <Terminal className="w-6 h-6 text-resistance" />
        </div>
        
        {/* Animated pulse effect */}
        <motion.div 
          className="absolute -inset-1 rounded-sm border border-resistance opacity-0"
          animate={{ 
            opacity: [0, 0.5, 0], 
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
      </div>
      <span className="text-xl font-mono font-bold">AIPOCALYPSE</span>
    </motion.a>
  );
}

export default Logo; 