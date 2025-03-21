import React from 'react';
import { motion } from 'framer-motion';

export const GridBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg width="100%" height="100%" className="opacity-10">
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#00FF66" strokeWidth="0.5" strokeOpacity="0.5" />
          </pattern>
        </defs>
        <motion.rect 
          width="100%" 
          height="100%" 
          fill="url(#grid)" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </svg>
    </div>
  );
};

export default GridBackground;