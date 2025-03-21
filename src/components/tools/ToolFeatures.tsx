import React from 'react';
import { motion } from 'framer-motion';

interface ToolFeaturesProps {
  features: string[];
}

export function ToolFeatures({ features }: ToolFeaturesProps) {
  return (
    <div>
      <h4 className="text-sm text-gray-400 uppercase font-mono mb-3">Core Capabilities</h4>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <motion.li 
            key={feature} 
            className="text-gray-300 flex items-center"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.05 * idx }}
          >
            <span className="w-2 h-2 bg-resistance rounded-sm mr-3 flex-shrink-0" />
            {feature}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}