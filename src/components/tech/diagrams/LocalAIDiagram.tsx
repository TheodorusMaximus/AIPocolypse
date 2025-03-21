import React from 'react';
import { motion } from 'framer-motion';

export const LocalAIDiagram: React.FC = () => {
  return (
    <svg viewBox="0 0 200 100" className="w-full h-full">
      {/* Device outline */}
      <motion.rect 
        x="50" y="20" width="100" height="60" rx="2"
        fill="none" stroke="#00FF66" strokeWidth="2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      {/* CPU/GPU */}
      <motion.rect 
        x="70" y="40" width="30" height="20" 
        fill="#00FF66" fillOpacity="0.8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 0.5, delay: 1 }}
      />
      
      {/* Neural network representation */}
      {Array(4).fill(0).map((_, col) => (
        Array(3).fill(0).map((_, row) => (
          <g key={`${col}-${row}`}>
            <motion.circle 
              cx={110 + col * 10} cy={30 + row * 10} r="2"
              fill="#FFFFFF"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.5 + (col + row) * 0.1 }}
            />
            {col < 3 && Array(3).fill(0).map((_, nextRow) => (
              <motion.line 
                key={`${col}-${row}-${nextRow}`}
                x1={110 + col * 10} y1={30 + row * 10}
                x2={110 + (col + 1) * 10} y2={30 + nextRow * 10}
                stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 0.3, delay: 2 + (col + row + nextRow) * 0.05 }}
              />
            ))}
          </g>
        ))
      ))}
      
      {/* Processing signal */}
      <motion.path 
        d="M 70 50 L 90 50 L 105 50 L 110 50 L 120 50 L 130 50 L 140 50"
        fill="none" stroke="#FFFFFF" strokeWidth="1"
        strokeDasharray="2 2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, delay: 2.5, repeat: Infinity }}
      />
    </svg>
  );
};

export default LocalAIDiagram; 