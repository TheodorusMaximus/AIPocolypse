import React, { memo, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Memoize individual grid cells to prevent unnecessary rerenders
const GridCell = memo(({ x, y, animate }: { x: number; y: number; animate: boolean }) => (
  <motion.circle
    key={`${x}-${y}`}
    cx={x + 0.5}
    cy={y + 0.5}
    r={0.1}
    fill="none"
    stroke="#00FF66"
    strokeWidth={0.05}
    initial={{ opacity: 0.1 }}
    animate={animate ? { 
      opacity: [0.1, 0.5, 0.1],
      r: [0.1, 0.3, 0.1],
    } : { opacity: 0.1 }}
    transition={{ 
      duration: 2,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut',
    }}
  />
));

// Memoize grid lines to prevent unnecessary rerenders
const GridLines = memo(({ index, gridSize }: { index: number; gridSize: number }) => (
  <React.Fragment key={`grid-${index}`}>
    <motion.line
      x1={0}
      y1={index}
      x2={gridSize}
      y2={index}
      stroke="#00FF66"
      strokeWidth={0.02}
      opacity={0.3}
    />
    <motion.line
      x1={index}
      y1={0}
      x2={index}
      y2={gridSize}
      stroke="#00FF66"
      strokeWidth={0.02}
      opacity={0.3}
    />
  </React.Fragment>
));

export function SurveillanceGrid() {
  // Use a reduced grid size based on performance needs
  const gridSize = 12; // Reduced from 20
  
  // Track if on desktop/mobile for performance optimizations
  const [isMobile, setIsMobile] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState<boolean[][]>([]);
  
  // Check viewport size and adjust accordingly
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Setup animation matrix - significantly fewer animations on mobile
      const animationThreshold = mobile ? 0.95 : 0.85; 
      const animateMatrix = Array(gridSize).fill(0).map(() => 
        Array(gridSize).fill(0).map(() => Math.random() > animationThreshold)
      );
      setShouldAnimate(animateMatrix);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Create a reduced grid for better performance
  const grid = Array(gridSize).fill(null).map((_, i) => Array(gridSize).fill(null));
  
  // Drawing only what's needed
  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full opacity-20" viewBox={`0 0 ${gridSize} ${gridSize}`}>
        {/* Render cells with selective animation */}
        {shouldAnimate.length > 0 && grid.map((row, y) => 
          row.map((_, x) => (
            <GridCell key={`${x}-${y}`} x={x} y={y} animate={shouldAnimate[y][x]} />
          ))
        )}
        
        {/* Render reduced number of grid lines */}
        {grid.map((_, i) => (
          <GridLines key={`grid-${i}`} index={i} gridSize={gridSize} />
        ))}
      </svg>
    </div>
  );
}

export default memo(SurveillanceGrid);