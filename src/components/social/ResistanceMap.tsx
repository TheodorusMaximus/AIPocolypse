import React from 'react';
import { motion } from 'framer-motion';

export function ResistanceMap() {
  // Hotspots of resistance activity (locations are approximations)
  const hotspots = [
    { x: 20, y: 40, size: 3, pulse: 1.5 }, // North America
    { x: 48, y: 38, size: 4, pulse: 2 },   // Europe
    { x: 55, y: 53, size: 2, pulse: 1 },   // Middle East
    { x: 75, y: 52, size: 3, pulse: 1.8 }, // Asia
    { x: 48, y: 65, size: 2, pulse: 1.2 }, // Africa
    { x: 25, y: 70, size: 2, pulse: 1.3 }, // South America
    { x: 85, y: 75, size: 2, pulse: 1.1 }  // Australia
  ];
  
  return (
    <div className="relative h-full">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* World map paths - simplified continents */}
        <path 
          d="M 10,40 L 25,35 L 30,45 L 20,50 L 15,60 L 30,70 L 25,80 L 10,70 Z" 
          fill="none" stroke="#333" strokeWidth="0.5" 
        />
        <path 
          d="M 40,30 L 55,30 L 60,45 L 50,55 L 45,70 L 40,65 Z" 
          fill="none" stroke="#333" strokeWidth="0.5" 
        />
        <path 
          d="M 65,30 L 80,25 L 90,35 L 85,60 L 75,65 L 65,55 Z" 
          fill="none" stroke="#333" strokeWidth="0.5" 
        />
        <path 
          d="M 80,75 L 90,70 L 92,80 L 85,85 Z" 
          fill="none" stroke="#333" strokeWidth="0.5" 
        />
        
        {/* Resistance hotspots */}
        {hotspots.map((spot, i) => (
          <g key={i}>
            <motion.circle 
              cx={spot.x} cy={spot.y} r={spot.size}
              fill="#00FF66" fillOpacity="0.7"
              animate={{ 
                r: [spot.size, spot.size * 1.2, spot.size],
                opacity: [0.7, 0.3, 0.7]
              }}
              transition={{ 
                duration: spot.pulse, 
                repeat: Infinity,
                repeatType: "loop" 
              }}
            />
            
            {/* Connection lines between hotspots */}
            {hotspots.slice(i + 1).map((otherSpot, j) => (
              <motion.line 
                key={j}
                x1={spot.x} y1={spot.y}
                x2={otherSpot.x} y2={otherSpot.y}
                stroke="#00FF66" strokeWidth="0.2" strokeOpacity="0.3"
                strokeDasharray="1,1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ 
                  duration: 3,
                  delay: (i + j) * 0.2,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 5
                }}
              />
            ))}
          </g>
        ))}
        
        {/* Data flow animation */}
        {hotspots.map((spot, i) => 
          hotspots.slice(i + 1).filter((_, j) => (i + j) % 3 === 0).map((otherSpot, j) => (
            <motion.circle 
              key={`flow-${i}-${j}`}
              r="1"
              fill="#00FF66"
              animate={{
                cx: [spot.x, otherSpot.x],
                cy: [spot.y, otherSpot.y],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 5,
                times: [0, 0.8, 1]
              }}
            />
          ))
        )}
      </svg>
      
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-16 pointer-events-none"></div>
      
      <div className="absolute bottom-0 left-0 w-full p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-resistance rounded-full mr-2 animate-pulse"></div>
            <span className="text-xs text-gray-500 font-mono">ACTIVE NODES</span>
          </div>
          <div className="text-xs text-gray-500 font-mono">LAST UPDATE: {new Date().toLocaleTimeString()}</div>
        </div>
      </div>
    </div>
  );
}