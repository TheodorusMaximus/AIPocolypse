import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavItem from './NavItem';

interface MobileNavMenuProps {
  isOpen: boolean;
  navItems: Array<{ label: string; href: string }>;
  activeSection: string;
  onItemClick: () => void;
}

export function MobileNavMenu({ isOpen, navItems, activeSection, onItemClick }: MobileNavMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="md:hidden bg-black bg-opacity-95 backdrop-blur-lg border-t border-concrete border-b"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-6 space-y-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              
              return (
                <NavItem
                  key={item.label}
                  label={item.label}
                  href={item.href}
                  isActive={isActive}
                  isMobile={true}
                  onClick={onItemClick}
                />
              );
            })}
            
            {/* CTA Button for mobile */}
            <div className="pt-4 border-t border-concrete">
              <button className="w-full py-3 bg-resistance text-black font-mono font-bold rounded-sm flex items-center justify-center">
                JOIN THE RESISTANCE
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileNavMenu; 