import React from 'react';
import { motion } from 'framer-motion';
import { Technology } from '../../data/technologies';

interface TechCardProps {
  tech: Technology;
  index: number;
  onClick: () => void;
  isInView: boolean;
}

export const TechCard: React.FC<TechCardProps> = ({ tech, index, onClick, isInView }) => {
  const Icon = tech.icon;
  
  return (
    <motion.div
      className="bg-black border border-resistance/20 rounded-lg overflow-hidden cursor-pointer hover:border-resistance/50 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex items-start mb-4">
          <div className="bg-resistance/10 p-3 rounded mr-4">
            <Icon className="text-resistance" size={24} />
          </div>
          <div>
            <h3 className="text-white font-mono font-bold mb-1">{tech.name}</h3>
            <p className="text-gray-400 text-sm">{tech.description}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {tech.tech.map(item => (
            <span 
              key={item} 
              className="text-xs text-resistance bg-resistance/5 border border-resistance/20 px-2 py-1 rounded font-mono"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TechCard;