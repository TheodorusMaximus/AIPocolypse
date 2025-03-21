import React from 'react';
import { motion } from 'framer-motion';

export const ConnectionLines: React.FC = () => {
  // Grid positions for the 6 principles in 2 rows of 3
  const positions = [
    { x: '25%', y: '30%' }, // top left
    { x: '50%', y: '30%' }, // top center
    { x: '75%', y: '30%' }, // top right
    { x: '25%', y: '70%' }, // bottom left
    { x: '50%', y: '70%' }, // bottom center
    { x: '75%', y: '70%' }  // bottom right
  ];

  // Connection patterns between principles
  const connections = [
    { from: 0, to: 1 }, // top left to top center
    { from: 1, to: 2 }, // top center to top right
    { from: 3, to: 4 }, // bottom left to bottom center
    { from: 4, to: 5 }, // bottom center to bottom right
    { from: 0, to: 3 }, // top left to bottom left
    { from: 1, to: 4 }, // top center to bottom center
    { from: 2, to: 5 }, // top right to bottom right
    { from: 0, to: 4 }, // top left to bottom center
    { from: 1, to: 5 }, // top center to bottom right
    { from: 2, to: 4 }, // top right to bottom center
    { from: 1, to: 3 }  // top center to bottom left
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg width="100%" height="100%" className="opacity-20">
        {connections.map((conn, i) => {
          const start = positions[conn.from];
          const end = positions[conn.to];
          
          return (
            <motion.line 
              key={i}
              x1={start.x} 
              y1={start.y} 
              x2={end.x} 
              y2={end.y}
              stroke="#00FF66"
              strokeWidth="1"
              strokeDasharray="5,5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{ 
                duration: 1.5, 
                delay: 0.5 + (i * 0.1), 
                ease: "easeInOut" 
              }}
            />
          );
        })}
        
        {/* Nodes at each principle position */}
        {positions.map((pos, i) => (
          <motion.circle
            key={i}
            cx={pos.x}
            cy={pos.y}
            r="4"
            fill="#00FF66"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.2 + (i * 0.1) 
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default ConnectionLines;