import React from 'react';
import { motion } from 'framer-motion';

export function ScrollIndicator() {
  return (
    <motion.div 
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.7, 0], y: [0, 10, 0] }}
      transition={{ 
        delay: 6,
        duration: 2,
        repeat: Infinity,
        repeatType: "loop"
      }}
    >
      <span className="text-xs text-gray-500 font-mono mb-2">SCROLL</span>
      <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="14" height="22" rx="7" stroke="#00FF66" strokeWidth="2"/>
        <motion.circle 
          cx="8" 
          cy="8" 
          r="4" 
          fill="#00FF66"
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
      </svg>
    </motion.div>
  );
}