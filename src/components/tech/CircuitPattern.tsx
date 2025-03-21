import React from 'react';

export const CircuitPattern: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg width="100%" height="100%" className="opacity-10">
        <defs>
          <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 0 50 L 25 50 M 75 50 L 100 50 M 50 0 L 50 25 M 50 75 L 50 100" stroke="#00FF66" strokeWidth="1" />
            <circle cx="50" cy="50" r="3" fill="#00FF66" />
            <circle cx="25" cy="50" r="2" fill="#00FF66" />
            <circle cx="75" cy="50" r="2" fill="#00FF66" />
            <circle cx="50" cy="25" r="2" fill="#00FF66" />
            <circle cx="50" cy="75" r="2" fill="#00FF66" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    </div>
  );
};

export default CircuitPattern;