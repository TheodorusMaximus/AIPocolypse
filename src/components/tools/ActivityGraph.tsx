import React from 'react';
import { motion } from 'framer-motion';

interface ActivityGraphProps {
  activeIndex: number;
}

export function ActivityGraph({ activeIndex }: ActivityGraphProps) {
  const graphPatterns = [
    // Shield pattern (more stable, protective)
    Array(20).fill(0).map((_, i) => 50 + Math.sin(i/3) * 10 + (Math.random() * 5)),
    // Market pattern (more volatile, opportunistic)
    Array(20).fill(0).map((_, i) => 50 + (Math.sin(i/2) * 20) * (1 + 0.5 * Math.sin(i/5)) + (Math.random() * 10 - 5)),
    // Truth pattern (more analytical, structured)
    Array(20).fill(0).map((_, i) => {
      const base = 50 + Math.sin(i/4) * 15;
      return i % 5 === 0 ? base + 15 : base + (Math.random() * 6 - 3);
    })
  ];
  
  const points = graphPatterns[activeIndex];
  const pathData = points.map((point, i) => `${i * 5},${point}`).join(' L ');
  
  return (
    <div className="h-32 relative">
      <svg width="100%" height="100%" className="absolute inset-0">
        {[0, 25, 50, 75, 100].map(y => (
          <line 
            key={`grid-${y}`}
            x1="0" 
            y1={y} 
            x2="100" 
            y2={y} 
            stroke="#333" 
            strokeWidth="1" 
            strokeDasharray="1,1" 
          />
        ))}
        
        <motion.path
          d={`M 0,${points[0]} L ${pathData}`}
          fill="none"
          stroke="#00FF66"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2 }}
        />
        
        {points.map((point, i) => (
          <motion.circle
            key={i}
            cx={i * 5}
            cy={point}
            r="2"
            fill="#00FF66"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          />
        ))}
        
        <motion.circle
          cx={95}
          cy={points[points.length - 1]}
          r="4"
          fill="#00FF66"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            r: [3, 5, 3]
          }}
          transition={{ 
            delay: 2, 
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
      </svg>
      
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center text-xs text-gray-500 font-mono">
        <div>STATUS: ACTIVE</div>
        <div className="flex items-center">
          <span className="w-2 h-2 bg-resistance rounded-full mr-1 animate-pulse"></span>
          SECURE
        </div>
      </div>
    </div>
  );
}