import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface PerformanceProps {
  isMobile: boolean;
  reducedMotion: boolean;
}

const ResistanceMap: React.FC<PerformanceProps> = ({ isMobile, reducedMotion }) => {
  const [currentTime, setCurrentTime] = useState(new Date().toUTCString());
  
  // Update the time every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toUTCString());
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Hotspots of resistance activity
  const hotspots = [
    // North America
    { x: 200, y: 120, size: 14, pulse: true, name: "North America", region: "San Francisco Bay Area" },
    { x: 220, y: 140, size: 10, pulse: false, name: "North America", region: "Austin, Texas" },
    { x: 245, y: 110, size: 12, pulse: true, name: "North America", region: "Montreal, Canada" },
    
    // Europe
    { x: 420, y: 110, size: 16, pulse: true, name: "Europe", region: "Berlin, Germany" },
    { x: 400, y: 130, size: 12, pulse: false, name: "Europe", region: "Zurich, Switzerland" },
    { x: 380, y: 100, size: 10, pulse: true, name: "Europe", region: "London, UK" },
    
    // Asia
    { x: 600, y: 130, size: 14, pulse: true, name: "Asia", region: "Tokyo, Japan" },
    { x: 570, y: 180, size: 12, pulse: false, name: "Asia", region: "Singapore" },
    
    // Australia
    { x: 650, y: 300, size: 10, pulse: true, name: "Oceania", region: "Sydney, Australia" }
  ];
  
  // Simplified continents paths
  const continentsPaths = [
    "M180,80 C230,60 280,70 320,100 C350,120 360,150 380,170 C250,200 180,150 180,80 Z", // North America
    "M350,80 C380,60 410,70 430,90 C450,120 440,150 420,170 C390,180 370,160 350,80 Z", // Europe
    "M450,90 C500,70 550,80 600,100 C650,130 670,170 650,220 C600,240 550,220 500,190 C480,150 450,90 450,90 Z", // Asia
    "M250,200 C300,190 350,200 400,220 C450,250 450,300 400,350 C350,370 300,350 250,320 C220,280 230,230 250,200 Z", // Africa
    "M600,240 C630,220 670,230 680,270 C690,310 670,340 630,350 C590,330 580,280 600,240 Z" // Australia
  ];
  
  // Reduce animation complexity for mobile and reduced motion
  const activeHotspots = isMobile ? hotspots.filter((_, i) => i % 2 === 0) : hotspots;
  const baseDuration = reducedMotion ? 0.1 : 1.5;
  
  return (
    <div className="w-full h-full relative bg-black bg-opacity-50 overflow-hidden">
      <div className="absolute top-2 right-2 text-xs text-gray-500 font-mono z-10">
        <span>UTC: {currentTime}</span>
      </div>
      
      <svg 
        viewBox="0 0 800 400" 
        className="w-full h-full"
        style={{ opacity: 0.8 }}
      >
        {/* Continents */}
        {continentsPaths.map((path, i) => (
          <motion.path
            key={`continent-${i}`}
            d={path}
            fill="#1A1A1A"
            strokeWidth="1"
            stroke="#333"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: baseDuration, delay: i * 0.1 }}
          />
        ))}
        
        {/* Grid lines */}
        {Array(8).fill(0).map((_, i) => (
          <motion.line
            key={`horizontal-${i}`}
            x1="0"
            y1={i * 50}
            x2="800"
            y2={i * 50}
            stroke="#333"
            strokeWidth="0.5"
            strokeDasharray="5,5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: baseDuration, delay: 0.5 + i * 0.05 }}
          />
        ))}
        
        {Array(16).fill(0).map((_, i) => (
          <motion.line
            key={`vertical-${i}`}
            x1={i * 50}
            y1="0"
            x2={i * 50}
            y2="400"
            stroke="#333"
            strokeWidth="0.5"
            strokeDasharray="5,5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: baseDuration, delay: 0.5 + i * 0.05 }}
          />
        ))}
        
        {/* Connection lines between hotspots */}
        {activeHotspots.slice(0, -1).map((hotspot, i) => (
          <motion.line
            key={`connection-${i}`}
            x1={hotspot.x}
            y1={hotspot.y}
            x2={activeHotspots[i + 1].x}
            y2={activeHotspots[i + 1].y}
            stroke="#00FF66"
            strokeWidth="0.5"
            strokeOpacity="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: baseDuration * 2, delay: baseDuration + i * 0.1 }}
          />
        ))}
        
        {/* Data flow animations - only show if not reduced motion */}
        {!reducedMotion && activeHotspots.slice(0, -1).map((hotspot, i) => (
          <motion.circle
            key={`data-${i}`}
            r="2"
            fill="#FFFFFF"
            opacity="0.7"
            animate={{
              opacity: [0, 0.7, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: i * 0.5,
              ease: "linear"
            }}
          >
            <animateMotion
              path={`M${hotspot.x},${hotspot.y} L${activeHotspots[i + 1].x},${activeHotspots[i + 1].y}`}
              dur="3s"
              repeatCount="indefinite"
            />
          </motion.circle>
        ))}
        
        {/* Resistance hotspots */}
        {activeHotspots.map((hotspot, i) => (
          <React.Fragment key={`hotspot-${i}`}>
            <motion.circle
              cx={hotspot.x}
              cy={hotspot.y}
              r={hotspot.size}
              fill="#00FF66"
              fillOpacity="0.2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: hotspot.pulse && !reducedMotion ? [1, 1.2, 1] : 1, 
                opacity: 0.2 
              }}
              transition={{ 
                duration: hotspot.pulse ? 2 : baseDuration, 
                delay: baseDuration * 2 + i * 0.1,
                repeat: hotspot.pulse && !reducedMotion ? Infinity : 0
              }}
            />
            <motion.circle
              cx={hotspot.x}
              cy={hotspot.y}
              r={hotspot.size / 3}
              fill="#00FF66"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.8 }}
              transition={{ duration: baseDuration, delay: baseDuration * 2 + i * 0.1 }}
            />
            
            {/* Region labels - fewer on mobile */}
            {!isMobile && (
              <motion.text
                x={hotspot.x + 10}
                y={hotspot.y - 10}
                fontSize="8"
                fill="#CCCCCC"
                opacity="0.7"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: baseDuration, delay: baseDuration * 3 + i * 0.1 }}
              >
                {hotspot.region}
              </motion.text>
            )}
          </React.Fragment>
        ))}
      </svg>
      
      {/* Text overlay with minimal stats */}
      <div className="absolute bottom-2 left-2 text-xs text-gray-500 font-mono">
        <div>Active nodes: 1,342</div>
        <div>Secure connections: 3,891</div>
      </div>
    </div>
  );
};

export default ResistanceMap; 