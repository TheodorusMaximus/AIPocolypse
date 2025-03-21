import React, { Suspense, lazy, useEffect, useState, ReactNode } from 'react';
import { Header } from './Header';

// Lazy load the Footer since it's not critical for initial rendering
const Footer = lazy(() => import('./Footer').then(module => ({ default: module.Footer })));

// Loading fallback for lazy loaded components
const LoadingFallback = () => (
  <div className="h-24 bg-black flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-resistance border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Reusable section component with dynamic height control
export const Section = ({ 
  children, 
  fullHeight = false,
  id = '',
  className = '',
  snapAlign = false
}: { 
  children: ReactNode; 
  fullHeight?: boolean;
  id?: string;
  className?: string;
  snapAlign?: boolean;
}) => (
  <section 
    id={id}
    className={`relative ${fullHeight ? 'min-h-screen' : 'py-16 md:py-24'} 
      ${snapAlign ? 'snap-section' : ''} ${className}`}
  >
    {children}
  </section>
);

export function Layout({ children }: { children: React.ReactNode }) {
  const [isLowPerfDevice, setIsLowPerfDevice] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  
  // Detect device capabilities for performance optimization
  useEffect(() => {
    // Check for mobile or low-performance indicators
    const checkPerformance = () => {
      const isMobile = window.innerWidth < 768;
      const isLowEnd = !window.matchMedia('(min-device-pixel-ratio: 2)').matches;
      setIsLowPerfDevice(isMobile || isLowEnd);
    };
    
    checkPerformance();
    window.addEventListener('resize', checkPerformance);
    
    // Preload critical assets - wrapped in try/catch to handle missing files
    const preloadImages = [
      '/logo.svg'
    ]; 
    
    preloadImages.forEach(src => {
      try {
        const img = new Image();
        img.src = src;
      } catch (error) {
        console.warn(`Failed to preload ${src}`, error);
      }
    });
    
    // Add scroll detection for animation optimization
    let scrollTimer: NodeJS.Timeout;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => setIsScrolling(false), 150);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', checkPerformance);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header />
      <div className="relative snap-container pt-28">
        {/* Optimized background effects with conditional rendering based on device capabilities */}
        {!isLowPerfDevice && !isScrolling && (
          <>
            {/* Noise overlay with reduced opacity */}
            <div className="fixed inset-0 pointer-events-none opacity-3 bg-noise" />
            {/* Scan lines with reduced count for better performance */}
            <div className="fixed inset-0 pointer-events-none opacity-8">
              {/* Generating fewer scan lines for better performance */}
              {Array(isLowPerfDevice ? 15 : 30).fill(0).map((_, i) => (
                <div 
                  key={i}
                  className="w-full h-px bg-white opacity-10"
                  style={{ top: `${i * (isLowPerfDevice ? 48 : 24)}px` }}
                />
              ))}
            </div>
          </>
        )}
        {/* If on a low performance device, use simplified background */}
        {isLowPerfDevice && (
          <div className="fixed inset-0 pointer-events-none bg-black opacity-10" />
        )}
        <div className="layout-content hide-scrollbar">
          {children}
        </div>
      </div>
      
      {/* Lazy load footer with Suspense */}
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default Layout;