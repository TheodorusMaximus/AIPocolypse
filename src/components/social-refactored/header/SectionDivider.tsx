import React from 'react';
import { motion } from 'framer-motion';

export const SectionDivider: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden pointer-events-none">
      <svg 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none" 
        className="absolute bottom-0 left-0 w-full h-full"
      >
        <motion.path 
          d="M0,100 L100,60 L100,100 L0,100 Z" 
          fill="#1A1A1A"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        <motion.path 
          d="M0,100 L100,70 L100,72 L0,102 Z" 
          fill="#00FF66"
          fillOpacity="0.1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        />
      </svg>
    </div>
  );
};

export default SectionDivider; 