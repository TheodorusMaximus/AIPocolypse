import React from 'react';
import { motion } from 'framer-motion';

interface NavigationSection {
  id: string;
  label: string;
}

interface NavigationIndicatorProps {
  sections: NavigationSection[];
  activeSection: string;
  onSectionClick: (id: string) => void;
}

export const NavigationIndicator: React.FC<NavigationIndicatorProps> = ({
  sections,
  activeSection,
  onSectionClick
}) => {
  return (
    <motion.div 
      className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col items-center"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      {sections.map(section => (
        <div className="relative group my-4" key={section.id}>
          <motion.button
            onClick={() => onSectionClick(section.id)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-resistance focus:ring-opacity-50 ${
              activeSection === section.id 
                ? "bg-resistance scale-125" 
                : "bg-gray-600 hover:bg-gray-400"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Navigate to ${section.label} section`}
          />
          
          {/* Tooltip label that appears on hover */}
          <div className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-90 px-2 py-1 rounded text-xs pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {section.label}
          </div>
          
          {/* Connecting line between dots */}
          {section.id !== sections[sections.length - 1].id && (
            <div className="w-px h-5 bg-gray-700 mx-auto mt-1"></div>
          )}
        </div>
      ))}
    </motion.div>
  );
};

export default NavigationIndicator; 