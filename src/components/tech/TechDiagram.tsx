import React from 'react';
import { motion } from 'framer-motion';

interface TechDiagramProps {
  type: string;
}

export function TechDiagram({ type }: TechDiagramProps) {
  return (
    <div className="h-32 bg-black bg-opacity-70 p-4 rounded-sm border border-concrete mb-6">
      <svg width="100%" height="100%" className="opacity-70">
        {type === 'storage' && (
          <>
            <motion.circle
              cx="50%" cy="50%" r="20"
              stroke="#00FF66"
              strokeWidth="2"
              fill="none"
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <motion.line
                key={angle}
                x1="50%" y1="50%"
                x2={`${50 + Math.cos(angle * Math.PI / 180) * 30}%`}
                y2={`${50 + Math.sin(angle * Math.PI / 180) * 30}%`}
                stroke="#00FF66"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: angle / 360 }}
              />
            ))}
          </>
        )}
        
        {type === 'network' && (
          <>
            {[0, 1, 2].map((i) => (
              <motion.circle
                key={i}
                cx={`${25 + i * 25}%`}
                cy="50%"
                r="10"
                stroke="#00FF66"
                strokeWidth="2"
                fill="none"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.2 }}
              />
            ))}
            <motion.path
              d="M 25% 50% L 50% 50% L 75% 50%"
              stroke="#00FF66"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
            />
          </>
        )}
        
        {type === 'security' && (
          <>
            <motion.path
              d="M 50 20 L 80 20 L 80 80 L 20 80 L 20 20 L 50 20"
              stroke="#00FF66"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2 }}
            />
            <motion.circle
              cx="50%" cy="50%"
              r="15"
              stroke="#00FF66"
              strokeWidth="2"
              fill="none"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 }}
            />
          </>
        )}
      </svg>
    </div>
  );
}