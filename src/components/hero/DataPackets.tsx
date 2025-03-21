import React, { memo, useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

// This component is memoized to prevent unnecessary re-renders
const Packet = memo(({ index, duration, delay, positionX }: { 
  index: number;
  duration: number;
  delay: number;
  positionX: string;
}) => (
  <motion.div
    key={index}
    className="absolute w-2 h-2 bg-resistance rounded-full opacity-70"
    initial={{ 
      x: positionX, 
      y: '-5%',
      opacity: 0.3,
    }}
    animate={{ 
      y: '105%',
      opacity: [0.3, 0.8, 0.3],
    }}
    transition={{ 
      duration,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'linear',
      delay,
    }}
  />
));

export function DataPackets() {
  // Track device capabilities for performance optimization
  const [isLowPerfDevice, setIsLowPerfDevice] = useState(false);
  
  // Check device capabilities
  useEffect(() => {
    // Check for mobile or low performance indicators
    const checkPerformance = () => {
      const isMobile = window.innerWidth < 768;
      const isLowEnd = !window.matchMedia('(min-device-pixel-ratio: 2)').matches;
      setIsLowPerfDevice(isMobile || isLowEnd);
    };
    
    checkPerformance();
    window.addEventListener('resize', checkPerformance);
    return () => window.removeEventListener('resize', checkPerformance);
  }, []);
  
  // Adjusting packet count based on device capabilities
  const packetCount = isLowPerfDevice ? 8 : 14; // Reduced from 20
  
  // Pre-compute animation parameters for all packets to avoid recalculation during renders
  const packetProps = useMemo(() => 
    Array(packetCount).fill(0).map((_, i) => ({
      index: i,
      duration: (Math.random() * 3 + 4), // Reduced max duration
      delay: Math.random() * 3, // Reduced delay
      positionX: Math.random() * 100 - 50 + '%'
    })),
  [packetCount]);
  
  return (
    <div className="absolute inset-0 pointer-events-none">
      {packetProps.map((props) => (
        <Packet key={props.index} {...props} />
      ))}
    </div>
  );
}

export default memo(DataPackets);