import React from 'react';
import { motion } from 'framer-motion';
import ResistanceMap from './ResistanceMap';
import LiveActivityFeed from '../activity/LiveActivityFeed';

interface PerformanceProps {
  isMobile: boolean;
  reducedMotion: boolean;
}

const MapAndActivityContainer: React.FC<PerformanceProps> = ({ isMobile, reducedMotion }) => {
  return (
    <motion.div 
      className="grid lg:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: reducedMotion ? 0.1 : 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="lg:col-span-2 relative bg-black bg-opacity-50 rounded-sm border border-concrete overflow-hidden min-h-[300px]">
        <div className="absolute inset-0">
          <ResistanceMap
            isMobile={isMobile}
            reducedMotion={reducedMotion}
          />
        </div>
        <div className="absolute top-4 left-4">
          <h3 className="text-lg font-mono font-bold text-resistance">GLOBAL RESISTANCE</h3>
          <p className="text-sm text-gray-400">Active nodes across continents</p>
        </div>
      </div>
      
      <div className="lg:col-span-1">
        <LiveActivityFeed />
      </div>
    </motion.div>
  );
};

export default MapAndActivityContainer; 