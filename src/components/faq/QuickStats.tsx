import React from 'react';
import { motion } from 'framer-motion';

interface QuickStatsProps {
  stats: {
    value: string;
    label: string;
  }[];
}

export function QuickStats({ stats }: QuickStatsProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="bg-black bg-opacity-60 p-3 border border-concrete border-dashed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="text-resistance font-mono text-xl">{stat.value}</div>
          <div className="text-xs text-gray-500">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}