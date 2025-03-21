import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

interface JoinCTAProps {
  title: string;
  description: string;
  buttonText: string;
  isMobile?: boolean;
  reducedMotion?: boolean;
}

export const JoinCTA: React.FC<JoinCTAProps> = ({ 
  title, 
  description, 
  buttonText,
  isMobile = false,
  reducedMotion = false
}) => {
  // Optimize for reduced motion and mobile
  const viewportMargin = isMobile ? "-50px" : "-100px";
  const animDuration = reducedMotion ? 0.3 : 0.8;
  
  return (
    <motion.div 
      className="py-8 sm:py-10 md:py-12 border-t border-b border-concrete text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: animDuration }}
      viewport={{ once: true, margin: viewportMargin }}
    >
      <h3 className="text-xl sm:text-2xl md:text-3xl font-mono font-bold mb-3 sm:mb-4 text-resistance">{title}</h3>
      <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-2xl mx-auto px-1">
        {description}
      </p>
      
      <motion.button 
        className="bg-resistance text-black px-6 sm:px-8 py-3 rounded-sm font-mono font-bold inline-flex items-center text-sm sm:text-base"
        whileHover={!reducedMotion ? { 
          scale: 1.03,
          boxShadow: '0 0 20px rgba(0, 255, 102, 0.3)'
        } : {}}
        whileTap={!reducedMotion ? { scale: 0.98 } : {}}
        // Make button more accessible
        aria-label={buttonText}
        // Improve touch target size on mobile
        style={{ 
          minHeight: isMobile ? '44px' : '40px',
          minWidth: isMobile ? '150px' : 'auto',
          touchAction: 'manipulation'
        }}
      >
        {buttonText}
        <Users size={isMobile ? 16 : 18} className="ml-2" />
      </motion.button>
    </motion.div>
  );
};

// Memoize to prevent unnecessary re-renders
export default memo(JoinCTA); 