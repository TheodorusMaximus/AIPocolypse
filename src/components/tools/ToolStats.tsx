import React from 'react';
import { motion } from 'framer-motion';

interface StatProps {
  label: string;
  value: string;
}

interface ToolStatsProps {
  stats: StatProps[];
}

export function ToolStats({ stats }: ToolStatsProps) {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      {stats.map((stat, index) => (
        <motion.div 
          key={stat.label}
          className="bg-black bg-opacity-50 p-4 rounded-sm border border-concrete"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 * index }}
        >
          <div className="text-lg md:text-xl text-resistance font-mono">{stat.value}</div>
          <div className="text-xs text-gray-400 mt-1 font-mono">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}