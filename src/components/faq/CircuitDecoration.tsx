import React from 'react';

export function CircuitDecoration() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg width="100%" height="100%" className="opacity-10">
        <defs>
          <pattern id="circuitPattern" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M 0 100 L 60 100 M 140 100 L 200 100 M 100 0 L 100 60 M 100 140 L 100 200" 
              stroke="#00FF66" strokeWidth="1" />
            <circle cx="100" cy="100" r="5" fill="#00FF66" />
            <circle cx="60" cy="100" r="3" fill="#00FF66" />
            <circle cx="140" cy="100" r="3" fill="#00FF66" />
            <circle cx="100" cy="60" r="3" fill="#00FF66" />
            <circle cx="100" cy="140" r="3" fill="#00FF66" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuitPattern)" />
      </svg>
    </div>
  );
}