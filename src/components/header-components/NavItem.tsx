import React from 'react';
import { motion } from 'framer-motion';

interface NavItemProps {
  label: string;
  href: string;
  isActive: boolean;
  isMobile?: boolean;
  onClick?: () => void;
}

export function NavItem({ label, href, isActive, isMobile = false, onClick }: NavItemProps) {
  if (isMobile) {
    return (
      <motion.a
        href={href}
        className={`block py-2 pl-3 border-l-2 ${
          isActive ? 'border-resistance text-resistance' : 'border-concrete text-gray-300'
        } font-mono transition-colors`}
        onClick={onClick}
        whileHover={{ x: 5, borderColor: '#00FF66', color: '#00FF66' }}
      >
        {label}
      </motion.a>
    );
  }
  
  return (
    <motion.a
      href={href}
      className={`px-3 py-2 text-sm font-mono transition-colors relative ${
        isActive ? 'text-resistance' : 'text-gray-300 hover:text-resistance'
      }`}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
    >
      {label}
      {isActive && (
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-resistance"
          layoutId="activeNavIndicator"
          transition={{ type: "spring", duration: 0.3 }}
        />
      )}
    </motion.a>
  );
}

export default NavItem; 