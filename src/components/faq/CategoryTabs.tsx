import React from 'react';
import { motion } from 'framer-motion';

interface CategoryTabsProps {
  categories: {
    id: string;
    name: string;
    icon: React.ElementType;
  }[];
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

export function CategoryTabs({ categories, activeCategory, onSelectCategory }: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap mb-6 border-b border-concrete">
      {categories.map(category => {
        const Icon = category.icon;
        const isActive = activeCategory === category.id;
        
        return (
          <motion.button 
            key={category.id}
            className={`py-3 px-4 font-mono text-sm flex items-center mr-2 relative ${
              isActive ? 'text-resistance' : 'text-gray-400 hover:text-gray-300'
            }`}
            onClick={() => onSelectCategory(category.id)}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Icon size={14} className="mr-2" />
            {category.name}
            
            {isActive && (
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-resistance"
                layoutId="activeTab"
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}