import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Activity, Lock, GitBranch } from 'lucide-react';
import { TechnologyType } from './types';
import { TechDiagram } from './TechDiagram';
import { TechTerminal } from './TechTerminal';

interface TechDetailProps {
  tech: TechnologyType;
  isOpen: boolean;
  onClose: () => void;
}

export function TechDetail({ tech, isOpen, onClose }: TechDetailProps) {
  const Icon = tech.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div 
            className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          
          {/* Content */}
          <motion.div 
            className="relative bg-shadow border border-resistance w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm"
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ duration: 0.3, type: "spring" }}
          >
            {/* Header */}
            <div className="p-6 border-b border-concrete">
              <div className="flex items-center">
                <div className="p-3 rounded-sm bg-resistance bg-opacity-10 border border-resistance mr-4">
                  <Icon size={24} className="text-resistance" />
                </div>
                <div>
                  <h3 className="text-2xl font-mono font-bold">{tech.name}</h3>
                  <p className="text-sm text-gray-400 mt-1">{tech.description}</p>
                </div>
              </div>
            </div>
            
            {/* Body */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left side */}
                <div>
                  <h4 className="text-lg font-mono mb-3 text-resistance">Overview</h4>
                  <p className="text-gray-300 mb-6">{tech.longDescription}</p>
                  
                  <h4 className="text-lg font-mono mb-3 text-resistance">Key Stats</h4>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(tech.stats).map(([key, value]) => (
                      <div key={key} className="bg-black bg-opacity-50 p-3 border border-concrete">
                        <div className="text-resistance font-mono">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Right side */}
                <div>
                  <h4 className="text-lg font-mono mb-3 text-resistance">Implementation</h4>
                  <TechDiagram type={tech.diagram} />
                  <TechTerminal code={tech.code} />
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="px-6 py-3 border-t border-concrete bg-black bg-opacity-50">
              <div className="flex justify-between items-center text-xs text-gray-500 font-mono">
                <div className="flex items-center">
                  <GitBranch size={12} className="mr-2 text-resistance" />
                  <span>VERSION: 0.9.3-alpha</span>
                </div>
                <div className="flex items-center">
                  <motion.div 
                    className="w-2 h-2 bg-resistance rounded-full mr-1"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span>RESISTANCE PROTOCOL</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}