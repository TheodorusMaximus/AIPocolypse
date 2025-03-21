import React, { memo } from 'react';

interface BackgroundElementsProps {
  mobileOptimized?: boolean;
}

export const BackgroundElements: React.FC<BackgroundElementsProps> = ({ mobileOptimized = false }) => {
  // Reduce visual complexity on mobile for better performance
  const scanLineCount = mobileOptimized ? 20 : 40;
  const scanLineOpacity = mobileOptimized ? 0.03 : 0.05;
  const noiseOpacity = mobileOptimized ? 0.03 : 0.05;
  
  return (
    <>
      {/* Background noise - reduced opacity on mobile */}
      <div 
        className="absolute inset-0 bg-noise"
        style={{ opacity: noiseOpacity }}
      ></div>
      
      {/* Scan lines - fewer lines on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        {Array(scanLineCount).fill(0).map((_, i) => (
          <div 
            key={i}
            className="w-full h-px bg-white"
            style={{ 
              top: `${i * (mobileOptimized ? 36 : 24)}px`,
              opacity: scanLineOpacity
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

// Memoize component to prevent unnecessary renders
export default memo(BackgroundElements); 