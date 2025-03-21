import React from 'react';
import { motion } from 'framer-motion';

export function CircuitDecoration() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 bottom-0 left-1/4 w-px bg-resistance opacity-10"></div>
      <div className="absolute top-0 bottom-0 left-3/4 w-px bg-resistance opacity-10"></div>
      
      <div className="absolute left-0 right-0 top-1/3 h-px bg-resistance opacity-10"></div>
      <div className="absolute left-0 right-0 top-2/3 h-px bg-resistance opacity-10"></div>
      
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path 
          d="M25,0 L25,33 L75,33 L75,67 L25,67 L25,100" 
          stroke="#00FF66" 
          strokeWidth="0.2" 
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <motion.path 
          d="M75,0 L75,33 L25,33 L25,67 L75,67 L75,100" 
          stroke="#00FF66" 
          strokeWidth="0.2" 
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
        />
      </svg>
      
      {[25, 75].map(x => [0, 33, 67, 100].map(y => (
        <motion.div 
          key={`${x}-${y}`}
          className="absolute w-1.5 h-1.5 rounded-full bg-resistance"
          style={{ 
            left: `${x}%`, 
            top: `${y}%`,
            transform: 'translate(-50%, -50%)'
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            boxShadow: [
              '0 0 0 0 rgba(0, 255, 102, 0)',
              '0 0 0 4px rgba(0, 255, 102, 0.2)',
              '0 0 0 0 rgba(0, 255, 102, 0)'
            ]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      )))}
    </div>
  );
}