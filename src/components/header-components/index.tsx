import React, { useState, useEffect, useRef } from 'react';
import WarningBanner from './WarningBanner';
import Logo from './Logo';
import DesktopNav from './DesktopNav';
import StatusIndicator from './StatusIndicator';
import JoinButton from './JoinButton';
import MobileMenuButton from './MobileMenuButton';
import MobileNavMenu from './MobileNavMenu';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const headerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    const highlightActiveSection = () => {
      const scrollY = window.scrollY;
      
      // Get all sections and find which one is currently in view
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight && sectionId) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', highlightActiveSection);
    
    // Initial check for active section
    highlightActiveSection();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', highlightActiveSection);
    };
  }, []);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
  const navItems = [
    { label: 'TOOLS', href: '#tools' },
    { label: 'ORIGIN', href: '#origin' },
    { label: 'TECH', href: '#tech' },
    { label: 'ETHOS', href: '#ethos' },
    { label: 'FAQ', href: '#faq' },
  ];
  
  return (
    <>
      <WarningBanner />
      
      <header 
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 pt-6 ${
          isScrolled ? 'bg-black bg-opacity-90 backdrop-blur-md shadow-glow' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Logo />
            
            <DesktopNav navItems={navItems} activeSection={activeSection} />
            
            {/* Status Indicator & CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <StatusIndicator />
              <JoinButton />
            </div>
            
            <MobileMenuButton isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
          </div>
        </div>
        
        <MobileNavMenu 
          isOpen={isMobileMenuOpen} 
          navItems={navItems} 
          activeSection={activeSection} 
          onItemClick={closeMobileMenu} 
        />
      </header>
    </>
  );
}

export default Header; 