import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { CounterAnimation } from './CounterAnimation';

interface MetricCardProps {
  metric: {
    icon: React.ElementType;
    value: string;
    label: string;
    growthRate: string;
    detail: string;
    color: string;
  };
  index: number;
}

export function MetricCard({ metric, index }: MetricCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const Icon = metric.icon;
  
  return (
    <motion.div
      ref={cardRef}
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background glow */}
      <motion.div 
        className={`absolute -inset-0.5 rounded-lg bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500`}
        animate={isHovered ? {
          scale: [1, 1.02, 1],
        } : {}}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
      />
      
      <div className="relative bg-shadow rounded-sm p-6 border border-concrete group-hover:border-resistance transition-colors text-center h-full">
        <div className="mb-4 relative">
          <motion.div 
            className="w-16 h-16 rounded-full bg-black bg-opacity-60 mx-auto flex items-center justify-center border border-concrete group-hover:border-resistance transition-colors"
            animate={isHovered ? {
              boxShadow: ['0 0 0 rgba(0,255,102,0)', '0 0 20px rgba(0,255,102,0.3)', '0 0 0 rgba(0,255,102,0)'],
            } : {}}
            transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
          >
            <Icon className="w-8 h-8 text-resistance" />
          </motion.div>
          
          {/* Live indicator */}
          <motion.div 
            className="absolute top-0 right-0 w-3 h-3 bg-resistance rounded-full opacity-50"
            animate={{ 
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "loop" 
            }}
          />
        </div>
        
        <motion.div 
          className="text-4xl md:text-5xl font-mono font-bold mb-1 text-white group-hover:text-resistance transition-colors"
          animate={isHovered ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 0.4 }}
        >
          <CounterAnimation value={metric.value} />
        </motion.div>
        
        <div className="text-xs font-mono text-resistance mb-3">{metric.growthRate}</div>
        <div className="text-sm font-mono text-gray-400 mb-2">{metric.label}</div>
        <div className="text-xs text-gray-500">{metric.detail}</div>
      </div>
    </motion.div>
  );
}