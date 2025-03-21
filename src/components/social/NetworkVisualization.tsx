import React from 'react';
import { motion } from 'framer-motion';

export function NetworkVisualization() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg width="100%" height="100%" className="opacity-10">
        {/* Tech connection nodes */}
        {[
          {x: "10%", y: "20%"}, {x: "30%", y: "10%"}, {x: "50%", y: "5%"}, 
          {x: "70%", y: "10%"}, {x: "90%", y: "20%"}, {x: "95%", y: "40%"},
          {x: "90%", y: "60%"}, {x: "70%", y: "80%"}, {x: "50%", y: "90%"},
          {x: "30%", y: "80%"}, {x: "10%", y: "60%"}, {x: "5%", y: "40%"}
        ].map((node, i) => (
          <motion.circle 
            key={i}
            cx={node.x} cy={node.y} r="3"
            fill="#00FF66" fillOpacity="0.3"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 0.3,
              r: [3, 4, 3],
            }}
            transition={{ 
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
        
        {/* Connection lines */}
        <motion.path 
          d="M 10% 20% L 30% 10% L 50% 5% L 70% 10% L 90% 20% L 95% 40% L 90% 60% L 70% 80% L 50% 90% L 30% 80% L 10% 60% L 5% 40% Z" 
          stroke="#00FF66" strokeWidth="1" strokeOpacity="0.2" fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 15, ease: "linear" }}
        />
        
        {/* Data packets */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.circle 
            key={i}
            r="2"
            fill="#FFFFFF" fillOpacity="0.7"
            initial={{ 
              cx: "10%", 
              cy: "20%",
              opacity: 0
            }}
            animate={{ 
              cx: ["10%", "30%", "50%", "70%", "90%", "95%", "90%", "70%", "50%", "30%", "10%", "5%", "10%"],
              cy: ["20%", "10%", "5%", "10%", "20%", "40%", "60%", "80%", "90%", "80%", "60%", "40%", "20%"],
              opacity: [0, 0.7, 0.7, 0.7, 0]
            }}
            transition={{ 
              duration: 25, 
              delay: i * 5,
              times: [0, 0.08, 0.16, 0.24, 0.32, 0.4, 0.48, 0.56, 0.64, 0.72, 0.8, 0.88, 1],
              repeat: Infinity
            }}
          />
        ))}
      </svg>
    </div>
  );
}