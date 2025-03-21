import React from 'react';
import { motion } from 'framer-motion';

export const KeyManagementDiagram: React.FC = () => {
  return (
    <svg viewBox="0 0 200 100" className="w-full h-full">
      {/* Master key */}
      <motion.rect 
        x="90" y="20" width="20" height="10" 
        fill="#00FF66" fillOpacity="0.9"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Key shards */}
      {Array(5).fill(0).map((_, i) => {
        const x = 40 + i * 30;
        
        return (
          <g key={i}>
            <motion.path 
              d={`M ${100} ${30} L ${x} ${60}`}
              stroke="#00FF66" strokeWidth="1" strokeDasharray="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
            />
            <motion.rect 
              x={x - 5} y="60" width="10" height="5" 
              fill="#00FF66" fillOpacity="0.7"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 0.5, delay: 1.5 + i * 0.2 }}
            />
          </g>
        );
      })}
      
      {/* Reconstruction */}
      <motion.path 
        d="M 70 65 L 70 80 L 100 80 M 130 65 L 130 80 L 100 80 M 100 65 L 100 80"
        stroke="#00FF66" strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 3 }}
      />
      
      {/* Reconstructed key */}
      <motion.rect 
        x="90" y="75" width="20" height="10" 
        fill="#00FF66" fillOpacity="0.9"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 0.5, delay: 4.5 }}
      />
    </svg>
  );
};

export default KeyManagementDiagram; 