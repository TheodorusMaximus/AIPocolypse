import React from 'react';
import { motion } from 'framer-motion';

export const QuantumResistanceDiagram: React.FC = () => {
  return (
    <svg viewBox="0 0 200 100" className="w-full h-full">
      {/* Traditional encryption (broken) */}
      <motion.rect 
        x="30" y="30" width="40" height="40" 
        fill="none" stroke="#FF3333" strokeWidth="1" strokeDasharray="2"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      {/* Quantum computer representation */}
      <motion.ellipse
        cx="100" cy="50" rx="20" ry="30"
        fill="none" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 1 }}
      />
      
      {/* Quantum bits */}
      {Array(6).fill(0).map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const x = 100 + Math.cos(angle) * 10;
        const y = 50 + Math.sin(angle) * 15;
        
        return (
          <motion.circle 
            key={i}
            cx={x} cy={y} r="2"
            fill="#FFFFFF"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ 
              duration: 2, 
              delay: i * 0.2, 
              repeat: Infinity,
              repeatType: "mirror"
            }}
          />
        );
      })}
      
      {/* Quantum-resistant encryption */}
      <motion.path 
        d="M 130 30 L 150 30 L 150 70 L 130 70 Z"
        fill="none" stroke="#00FF66" strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 2 }}
      />
      
      {/* Attack lines */}
      <motion.path 
        d="M 100 30 L 70 30 M 100 50 L 70 50 M 100 70 L 70 70"
        stroke="#FF3333" strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 3 }}
      />
      
      {/* Protection lines */}
      <motion.path 
        d="M 100 30 L 130 30 M 100 50 L 130 50 M 100 70 L 130 70"
        stroke="#00FF66" strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 4 }}
      />
    </svg>
  );
};

export default QuantumResistanceDiagram; 