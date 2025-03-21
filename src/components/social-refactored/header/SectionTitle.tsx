import React, { memo } from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  isInView: boolean;
  reducedMotion?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  isInView,
  reducedMotion = false
}) => {
  // Calculate animation settings based on reduced motion preference
  const animDuration = reducedMotion ? 0.3 : 0.8;
  const animDelay = reducedMotion ? 0 : 0.2;
  
  // Disable infinite animations for reduced motion
  const shouldAnimate = !reducedMotion;

  return (
    <motion.div
      initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: animDuration }}
      className="mb-12 sm:mb-16"
    >
      <div className="flex items-center justify-center mb-4 sm:mb-6">
        <div className="hidden sm:block h-px bg-resistance w-8 sm:w-16 opacity-50"></div>
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono font-bold px-3 sm:px-6 text-center relative"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: animDuration, delay: animDelay }}
        >
          <span className="relative z-10">{title}</span>
          {shouldAnimate && (
            <motion.span 
              className="absolute inset-0 bg-resistance bg-opacity-5 -skew-x-12 z-0"
              animate={{ 
                x: [0, 5, -5, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            ></motion.span>
          )}
          {!shouldAnimate && (
            <span className="absolute inset-0 bg-resistance bg-opacity-5 -skew-x-12 z-0"></span>
          )}
        </motion.h2>
        <div className="hidden sm:block h-px bg-resistance w-8 sm:w-16 opacity-50"></div>
      </div>
      
      <motion.div 
        className="text-center text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 md:mb-16 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto px-2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: animDuration, delay: animDelay }}
      >
        <p>{subtitle}</p>
      </motion.div>
    </motion.div>
  );
};

// Memoize to prevent unnecessary re-renders
export default memo(SectionTitle); 