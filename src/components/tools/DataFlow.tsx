import React from 'react';
import { motion } from 'framer-motion';

interface DataFlowProps {
  activeIndex: number;
}

export function DataFlow({ activeIndex }: DataFlowProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array(15).fill(0).map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-resistance rounded-full w-1 h-1 opacity-80"
          initial={{ 
            x: `${Math.random() * 100}%`, 
            y: '-5%',
            opacity: 0.3,
          }}
          animate={{ 
            y: '105%',
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ 
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            delay: Math.random() * 5,
          }}
        />
      ))}
      
      {activeIndex === 0 && Array(10).fill(0).map((_, i) => (
        <motion.div
          key={`shield-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0,255,102,0.8) 0%, rgba(0,255,102,0) 70%)',
            left: `${30 + Math.random() * 40}%`
          }}
          initial={{ 
            y: '105%',
            scale: 1,
          }}
          animate={{ 
            y: '-5%',
            scale: [1, 1.5, 1],
            opacity: [0.7, 0.3, 0.7]
          }}
          transition={{ 
            duration: Math.random() * 4 + 6,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            delay: Math.random() * 3,
          }}
        />
      ))}
      
      {activeIndex === 1 && Array(12).fill(0).map((_, i) => (
        <motion.div
          key={`market-${i}`}
          className="absolute flex items-center justify-center"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0]
          }}
          transition={{ 
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
            delay: Math.random() * 5,
          }}
        >
          <div className="text-xs font-mono text-resistance opacity-80">
            {Math.random() > 0.5 ? '+' : '-'}{Math.floor(Math.random() * 99)}%
          </div>
        </motion.div>
      ))}
      
      {activeIndex === 2 && Array(20).fill(0).map((_, i) => (
        <motion.div
          key={`truth-${i}`}
          className="absolute w-0.5 h-0.5 bg-resistance"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            width: ['1px', '2px', '100px', '1px'],
            height: '1px'
          }}
          transition={{ 
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}