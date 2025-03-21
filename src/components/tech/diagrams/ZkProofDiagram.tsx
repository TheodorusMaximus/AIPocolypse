import React from 'react';
import { motion } from 'framer-motion';

export const ZkProofDiagram: React.FC = () => {
  return (
    <svg viewBox="0 0 200 100" className="w-full h-full">
      {/* Private data (key) */}
      <motion.rect 
        x="20" y="40" width="30" height="20" 
        fill="#00FF66" fillOpacity="0.8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1 }}
      />
      
      {/* Transformation process */}
      <motion.path 
        d="M 50 50 L 80 50 C 90 50, 90 30, 100 30 C 110 30, 110 70, 120 70 C 130 70, 130 50, 140 50 L 170 50" 
        fill="none" stroke="#00FF66" strokeWidth="2" strokeDasharray="4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 1 }}
      />
      
      {/* Verification result */}
      <motion.circle 
        cx="170" cy="50" r="10"
        fill="none" stroke="#00FF66" strokeWidth="2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 3 }}
      />
      
      {/* Verification checkmark */}
      <motion.path 
        d="M 165 50 L 170 55 L 175 45"
        fill="none" stroke="#00FF66" strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 3.5 }}
      />
    </svg>
  );
};

export default ZkProofDiagram; 