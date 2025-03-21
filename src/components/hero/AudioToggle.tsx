import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioToggleProps {
  isEnabled: boolean;
  onToggle: () => void;
}

export function AudioToggle({ isEnabled, onToggle }: AudioToggleProps) {
  return (
    <button 
      onClick={onToggle}
      className="absolute top-4 right-4 z-50 text-gray-500 hover:text-resistance focus:outline-none"
      aria-label={isEnabled ? 'Disable ambient audio' : 'Enable ambient audio'}
    >
      {isEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
    </button>
  );
}