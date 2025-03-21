import React from 'react';
import { motion } from 'framer-motion';

export const StorageDiagram: React.FC = () => {
  return (
    <svg viewBox="0 0 200 100" className="w-full h-full">
      {/* Central data piece */}
      <motion.rect 
        x="90" y="10" width="20" height="20" 
        fill="#00FF66" fillOpacity="0.7"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.7, 0.9, 0.7] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      {/* Fragmentation animation */}
      {Array(8).fill(0).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const endX = 100 + Math.cos(angle) * 40;
        const endY = 50 + Math.sin(angle) * 30;
        
        return (
          <g key={i}>
            <motion.line 
              x1="100" y1="20" 
              x2={endX} y2={endY}
              stroke="#00FF66" strokeWidth="1" strokeOpacity="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: i * 0.2 }}
            />
            <motion.rect 
              x={endX - 5} y={endY - 5} width="10" height="10"
              fill="#00FF66" fillOpacity="0.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.2 + 1 }}
            />
          </g>
        );
      })}
    </svg>
  );
};

export default StorageDiagram; 