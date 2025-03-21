import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = 'top',
  delay = 200,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  let showTimer: NodeJS.Timeout;
  
  // Calculate position based on trigger element
  const updateTooltipPosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return;
    
    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    
    let x = 0;
    let y = 0;
    
    switch (position) {
      case 'top':
        x = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2);
        y = triggerRect.top - tooltipRect.height - 8;
        break;
      case 'bottom':
        x = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2);
        y = triggerRect.bottom + 8;
        break;
      case 'left':
        x = triggerRect.left - tooltipRect.width - 8;
        y = triggerRect.top + (triggerRect.height / 2) - (tooltipRect.height / 2);
        break;
      case 'right':
        x = triggerRect.right + 8;
        y = triggerRect.top + (triggerRect.height / 2) - (tooltipRect.height / 2);
        break;
    }
    
    // Adjust for screen boundaries
    if (x < 10) x = 10;
    if (x + tooltipRect.width > window.innerWidth - 10) {
      x = window.innerWidth - tooltipRect.width - 10;
    }
    if (y < 10) y = 10;
    if (y + tooltipRect.height > window.innerHeight - 10) {
      y = triggerRect.top - tooltipRect.height - 8;
    }
    
    setCoords({ x, y });
  };
  
  // Handle mouse events with delay
  const handleMouseEnter = () => {
    showTimer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };
  
  const handleMouseLeave = () => {
    clearTimeout(showTimer);
    setIsVisible(false);
  };
  
  // Update position when tooltip visibility changes
  useEffect(() => {
    if (isVisible) {
      updateTooltipPosition();
      // Add window resize listener
      window.addEventListener('resize', updateTooltipPosition);
      window.addEventListener('scroll', updateTooltipPosition);
    }
    
    return () => {
      clearTimeout(showTimer);
      window.removeEventListener('resize', updateTooltipPosition);
      window.removeEventListener('scroll', updateTooltipPosition);
    };
  }, [isVisible]);
  
  return (
    <div className={`inline-block ${className}`}>
      <div
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
        className="inline-block"
      >
        {children}
      </div>
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={tooltipRef}
            className="fixed z-50 px-3 py-2 bg-black bg-opacity-90 text-white text-xs rounded shadow-lg pointer-events-none max-w-xs backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            style={{
              left: coords.x,
              top: coords.y,
              transformOrigin: position === 'top' ? 'bottom center' : 
                               position === 'bottom' ? 'top center' : 
                               position === 'left' ? 'right center' : 'left center'
            }}
          >
            {content}
            {/* Arrow */}
            <div 
              className={`absolute w-0 h-0 border-solid
                ${position === 'top' ? 'border-t-[6px] border-l-[6px] border-r-[6px] border-l-transparent border-r-transparent border-t-black border-opacity-90 bottom-[-6px] left-1/2 transform -translate-x-1/2' : 
                 position === 'bottom' ? 'border-b-[6px] border-l-[6px] border-r-[6px] border-l-transparent border-r-transparent border-b-black border-opacity-90 top-[-6px] left-1/2 transform -translate-x-1/2' : 
                 position === 'left' ? 'border-l-[6px] border-t-[6px] border-b-[6px] border-t-transparent border-b-transparent border-l-black border-opacity-90 right-[-6px] top-1/2 transform -translate-y-1/2' : 
                 'border-r-[6px] border-t-[6px] border-b-[6px] border-t-transparent border-b-transparent border-r-black border-opacity-90 left-[-6px] top-1/2 transform -translate-y-1/2'}`}
            ></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip; 