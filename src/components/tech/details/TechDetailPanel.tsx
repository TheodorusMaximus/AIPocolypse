import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';
import CodeTerminal from '../CodeTerminal';
import TechDiagram from '../diagrams/TechDiagram';
import { Technology } from '../../../data/technologies';

interface TechDetailPanelProps {
  tech: Technology | null;
  isOpen: boolean;
  onClose: () => void;
}

export const TechDetailPanel: React.FC<TechDetailPanelProps> = ({ tech, isOpen, onClose }) => {
  if (!tech) return null;
  
  const { name, longDescription, tech: techList, stats, diagram, code } = tech;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/80" onClick={onClose}></div>
          <motion.div
            className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden bg-void rounded-lg border border-resistance/30"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
          >
            {/* Header */}
            <div className="p-4 border-b border-resistance/20 flex justify-between items-center">
              <h3 className="text-resistance font-mono font-bold">{name}</h3>
              <button 
                className="text-gray-400 hover:text-resistance transition-colors"
                onClick={onClose}
              >
                <ChevronDown size={20} />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-4rem)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div>
                  <div className="mb-6">
                    <h4 className="text-white text-sm font-semibold mb-2">Overview</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{longDescription}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white text-sm font-semibold mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {techList.map(item => (
                        <span 
                          key={item} 
                          className="inline-block px-2 py-1 bg-black/50 border border-resistance/30 rounded text-xs font-mono text-resistance"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white text-sm font-semibold mb-2">Performance Metrics</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(stats).map(([key, value]) => (
                        <div key={key} className="bg-black/50 p-3 rounded border border-resistance/10">
                          <div className="text-resistance text-lg font-mono">{value}</div>
                          <div className="text-gray-400 text-xs capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Right Column */}
                <div className="space-y-6">
                  <div className="h-48">
                    <h4 className="text-white text-sm font-semibold mb-2">Visual Architecture</h4>
                    <div className="h-full bg-black/30 rounded border border-resistance/10 p-2">
                      <TechDiagram type={diagram} />
                    </div>
                  </div>
                  
                  <div className="h-64">
                    <h4 className="text-white text-sm font-semibold mb-2">Implementation Sample</h4>
                    <div className="h-full">
                      <CodeTerminal code={code} />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Footer */}
              <div className="mt-8 pt-4 border-t border-resistance/10 text-xs text-gray-500 flex justify-between items-center">
                <div>Provided as educational content only. Not for production use.</div>
                <a 
                  href="#" 
                  className="text-resistance/70 flex items-center hover:text-resistance"
                >
                  <span className="mr-1">Documentation</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TechDetailPanel; 