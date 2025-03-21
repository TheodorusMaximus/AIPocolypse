import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

interface ToolCardProps {
  tool: {
    icon: LucideIcon;
    name: string;
    tagline: string;
    description: string;
    status: string;
  };
  isActive: boolean;
  index: number;
  onClick: () => void;
}

export function ToolCard({ tool, isActive, index, onClick }: ToolCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const Icon = tool.icon;

  return (
    <motion.div
      className={`relative bg-shadow rounded-sm p-6 border transition-all cursor-pointer overflow-hidden group ${
        isActive 
          ? 'border-resistance shadow-glow'
          : 'border-concrete hover:border-gray-500'
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { delay: index * 0.1 }
      }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className="absolute inset-0 bg-resistance opacity-0 transition-opacity z-0"
        animate={{ 
          opacity: isHovered ? 0.05 : 0
        }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="relative z-10 mb-4">
        <motion.div 
          className={`w-14 h-14 rounded-sm flex items-center justify-center ${
            isActive 
              ? 'bg-resistance bg-opacity-20'
              : 'bg-black bg-opacity-50'
          }`}
          animate={{
            boxShadow: isActive 
              ? ['0 0 0 rgba(0,255,102,0)', '0 0 10px rgba(0,255,102,0.5)', '0 0 0 rgba(0,255,102,0)']
              : 'none'
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <Icon 
            size={28} 
            className={isActive ? 'text-resistance' : 'text-gray-400 group-hover:text-resistance transition-colors'} 
          />
        </motion.div>
      </div>
      
      <h3 className="text-2xl font-mono font-bold mb-2 group-hover:text-resistance transition-colors">
        {tool.name}
      </h3>
      <p className="text-xs text-resistance font-mono mb-4">{tool.tagline}</p>
      
      <p className="text-gray-400 mb-6 line-clamp-2 group-hover:text-gray-300 transition-colors">
        {tool.description}
      </p>
      
      <div className="flex items-center justify-between mt-auto">
        <span className={`inline-block px-3 py-1 rounded-sm text-xs font-mono ${
          isActive 
            ? 'bg-resistance bg-opacity-10 text-resistance border border-resistance'
            : 'bg-black bg-opacity-50 text-gray-500 border border-concrete group-hover:border-resistance transition-colors'
        }`}>
          {tool.status}
        </span>
        
        <motion.div 
          className="w-6 h-6 flex items-center justify-center"
          initial={false}
          animate={{
            rotate: isActive ? 180 : 0,
            opacity: isActive ? 1 : 0.5
          }}
          transition={{ duration: 0.3 }}
        >
          <ArrowRight size={16} className="text-resistance" />
        </motion.div>
      </div>
      
      {isActive && (
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-1 bg-resistance"
          layoutId="activeToolIndicator"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </motion.div>
  );
}