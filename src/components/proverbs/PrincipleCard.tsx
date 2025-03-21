import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Principle } from '../../data/principles';
import TypedText from './TypedText';

interface PrincipleCardProps {
  principle: Principle;
  index: number;
  onSelect: (principle: Principle) => void;
}

export const PrincipleCard: React.FC<PrincipleCardProps> = ({ principle, index, onSelect }) => {
  const { icon: Icon, title, quote, color } = principle;
  
  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg p-6 bg-gradient-to-br ${color} border border-resistance/10 group cursor-pointer`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -5 }}
      onClick={() => onSelect(principle)}
    >
      {/* Principle Icon */}
      <div className="mb-6 bg-black/30 w-12 h-12 rounded-lg flex items-center justify-center border border-resistance/20">
        <Icon className="text-resistance" size={24} />
      </div>
      
      {/* Title with glitch effect on hover */}
      <div className="relative">
        <h3 className="text-xl font-mono font-bold mb-4 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        <motion.div 
          className="absolute -inset-1 bg-resistance/10 -skew-x-12 opacity-0 group-hover:opacity-100 -z-10"
          animate={{ 
            x: [0, 3, -3, 0],
          }}
          transition={{ 
            duration: 0.5, 
            repeat: Infinity,
            repeatType: "mirror"
          }}
        />
      </div>
      
      {/* Quote with typing effect */}
      <div className="mb-6 min-h-[80px]">
        <TypedText 
          text={quote} 
          delay={index * 200} 
          className="text-gray-200 italic"
          speed={20}
        />
      </div>
      
      {/* View details button */}
      <div className="flex items-center justify-center mt-4 text-resistance font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span>VIEW MANIFESTO</span>
        <ChevronDown size={14} className="ml-2" />
      </div>
      
      {/* Interactive hover effect */}
      <motion.div
        className="absolute -inset-px bg-resistance/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        whileHover={{ opacity: 1 }}
      />
    </motion.div>
  );
};

export default PrincipleCard;