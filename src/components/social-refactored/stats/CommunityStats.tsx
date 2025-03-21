import React, { useState, useEffect, memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, Globe, Server } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  delay: number;
  reducedMotion?: boolean;
  isMobile?: boolean;
}

const StatItem: React.FC<StatItemProps> = memo(({ 
  icon, 
  label, 
  value, 
  delay,
  reducedMotion = false,
  isMobile = false
}) => {
  // Adjust animation parameters based on preferences
  const animDuration = reducedMotion ? 0.2 : 0.5;
  const animDelay = reducedMotion ? 0 : delay;
  const viewportAmount = isMobile ? 0.3 : 0.5;
  const iconSize = isMobile ? 16 : 18;
  
  return (
    <motion.div
      className="bg-black bg-opacity-70 border border-concrete p-3 sm:p-4 rounded-sm"
      initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: animDuration, delay: animDelay }}
      viewport={{ once: true, amount: viewportAmount }}
      // Improve touch behavior for interactive elements
      style={{ touchAction: 'manipulation' }}
    >
      <div className="flex items-center mb-2">
        <div className="text-resistance mr-2">
          {React.cloneElement(icon as React.ReactElement, { size: iconSize })}
        </div>
        <h4 className="text-xs uppercase tracking-wider text-gray-400 font-mono">{label}</h4>
      </div>
      
      <div className="font-mono text-lg sm:text-xl md:text-2xl text-gray-200">
        {value}
      </div>
    </motion.div>
  );
});

// Add display name for debugging
StatItem.displayName = 'StatItem';

interface CommunityStatsProps {
  isMobile?: boolean;
  reducedMotion?: boolean;
  isInView?: boolean;
}

export const CommunityStats: React.FC<CommunityStatsProps> = memo(({
  isMobile = false,
  reducedMotion = false,
  isInView = false
}) => {
  const [members, setMembers] = useState("32,741");
  
  // Memoized formatter function to prevent unnecessary re-renders
  const formatWithCommas = useCallback((num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }, []);
  
  // Simulating real-time member count increase with optimized performance
  useEffect(() => {
    // Don't run the interval if reduced motion is preferred (accessibility)
    if (reducedMotion) return;
    
    // Use a less frequent interval on mobile to save battery
    const intervalTime = isMobile ? 15000 : 10000;
    
    const interval = setInterval(() => {
      setMembers(prev => {
        // Parse current member count and add a random number between 1 and 5
        const currentCount = parseInt(prev.replace(/,/g, ''));
        const newCount = currentCount + Math.floor(Math.random() * 5) + 1;
        
        // Format with commas
        return formatWithCommas(newCount);
      });
    }, intervalTime);
    
    return () => clearInterval(interval);
  }, [isMobile, reducedMotion, formatWithCommas]);
  
  // Adjust animation parameters based on preferences
  const animDuration = reducedMotion ? 0.2 : 0.5;
  const viewportAmount = isMobile ? 0.3 : 0.8;
  
  return (
    <div>
      <motion.h3
        className="text-base sm:text-lg md:text-xl text-gray-200 font-mono text-center mb-4 sm:mb-6"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: animDuration }}
      >
        RESISTANCE BY THE NUMBERS
      </motion.h3>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
        <StatItem 
          icon={<Users />} 
          label="Active Members" 
          value={members}
          delay={0.1}
          reducedMotion={reducedMotion}
          isMobile={isMobile}
        />
        
        <StatItem 
          icon={<Shield />} 
          label="Surveillance Blocks" 
          value="138M+"
          delay={0.2}
          reducedMotion={reducedMotion}
          isMobile={isMobile}
        />
        
        <StatItem 
          icon={<Globe />} 
          label="Countries" 
          value="92"
          delay={0.3}
          reducedMotion={reducedMotion}
          isMobile={isMobile}
        />
        
        <StatItem 
          icon={<Server />} 
          label="Secure Nodes" 
          value="1,204"
          delay={0.4}
          reducedMotion={reducedMotion}
          isMobile={isMobile}
        />
      </div>
    </div>
  );
});

// Add display name for debugging
CommunityStats.displayName = 'CommunityStats';

export default CommunityStats; 