import React, { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface CollapsibleSectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  initiallyExpanded?: boolean;
  maxHeight?: string;
  className?: string;
  id?: string;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  children,
  title,
  subtitle,
  initiallyExpanded = false,
  maxHeight = '50vh',
  className = '',
  id
}) => {
  const [expanded, setExpanded] = useState(initiallyExpanded);
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  
  return (
    <section id={id} className={`relative ${className}`}>
      {/* Optional title and subtitle */}
      {title && (
        <div className="mb-4">
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          {subtitle && <p className="text-gray-400 mt-2">{subtitle}</p>}
        </div>
      )}
      
      {/* Collapsible content */}
      <div 
        className="transition-all duration-500 ease-in-out relative overflow-hidden"
        style={{ 
          maxHeight: expanded ? '9999px' : maxHeight
        }}
      >
        {children}
        
        {/* Gradient overlay and expand button */}
        <AnimatePresence>
          {!expanded && (
            <motion.div 
              className="absolute bottom-0 left-0 right-0 gradient-fade h-24 flex items-end justify-center"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                onClick={toggleExpand}
                className="bg-resistance text-black px-4 py-2 rounded-sm mb-4 flex items-center focus:outline-none focus:ring-2 focus:ring-resistance focus:ring-opacity-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">View more</span>
                <ChevronDown size={16} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Show collapse button when expanded */}
      <AnimatePresence>
        {expanded && (
          <motion.div 
            className="flex justify-center mt-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              onClick={toggleExpand}
              className="bg-black border border-resistance text-resistance px-4 py-2 rounded-sm flex items-center focus:outline-none focus:ring-2 focus:ring-resistance focus:ring-opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">Show less</span>
              <ChevronDown className="transform rotate-180" size={16} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CollapsibleSection; 