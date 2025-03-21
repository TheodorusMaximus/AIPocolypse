import React from 'react';
import NavItem from './NavItem';

interface DesktopNavProps {
  navItems: Array<{ label: string; href: string }>;
  activeSection: string;
}

export function DesktopNav({ navItems, activeSection }: DesktopNavProps) {
  return (
    <nav className="hidden md:flex items-center space-x-2">
      {navItems.map((item) => {
        const isActive = activeSection === item.href.substring(1);
        
        return (
          <NavItem
            key={item.label}
            label={item.label}
            href={item.href}
            isActive={isActive}
          />
        );
      })}
    </nav>
  );
}

export default DesktopNav; 