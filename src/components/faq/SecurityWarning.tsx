import React from 'react';
import { Lock } from 'lucide-react';

export function SecurityWarning() {
  return (
    <div className="bg-black bg-opacity-60 p-4 text-xs text-gray-500 flex items-center">
      <Lock size={12} className="mr-2 text-resistance" />
      <span>All questions are submitted through encrypted channels and stripped of metadata.</span>
    </div>
  );
}