import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { technologies, Technology } from '../../data/technologies';
import NetworkVisualization from './NetworkVisualization';
import CircuitPattern from './CircuitPattern';
import TechCard from './TechCard';
import TechDetailPanel from './details/TechDetailPanel';

export function Tech() {
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleTechClick = (tech: Technology) => {
    setSelectedTech(tech);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
  };

  return (
    <section id="tech" ref={sectionRef} className="relative py-20 bg-void">
      {/* Background elements */}
      <NetworkVisualization />
      <CircuitPattern />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-resistance">/</span>THE TECHNOLOGY<span className="text-resistance">_</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Freedom demands open-source. These are the technological foundations that power our resistance tooling.
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <TechCard
              key={tech.name}
              tech={tech}
              index={index}
              onClick={() => handleTechClick(tech)}
              isInView={isInView}
            />
          ))}
        </div>
      </div>

      {/* Detail Panel */}
      <TechDetailPanel 
        tech={selectedTech} 
        isOpen={isDetailOpen} 
        onClose={handleCloseDetail}
      />
    </section>
  );
}

export default Tech; 