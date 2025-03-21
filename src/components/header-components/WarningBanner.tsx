import React from 'react';
import { AlertTriangle } from 'lucide-react';

export function WarningBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 h-6 flex items-center justify-center overflow-hidden z-50 bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="relative flex items-center space-x-16 animate-scroll-left">
        {Array(10).fill(null).map((_, i) => (
          <div key={i} className="flex items-center text-resistance font-mono text-xs opacity-60">
            <AlertTriangle size={10} className="mr-1" />
            <span>SECURE CONNECTION ESTABLISHED</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WarningBanner; 