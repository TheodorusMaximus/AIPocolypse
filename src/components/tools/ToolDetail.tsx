import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Activity, Lock, GitBranch } from 'lucide-react';
import { ToolStats } from './ToolStats';
import { ToolFeatures } from './ToolFeatures';
import { ActivityGraph } from './ActivityGraph';
import { TerminalWindow } from './TerminalWindow';

interface ToolDetailProps {
  tool: any;
  activeTab: number;
  isExpanded: boolean;
  hasTransitioned: boolean;
  onExpand: () => void;
}

export function ToolDetail({ tool, activeTab, isExpanded, hasTransitioned, onExpand }: ToolDetailProps) {
  const Icon = tool.icon;

  return (
    <motion.div
      key={`tool-detail-${activeTab}`}
      initial={hasTransitioned ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-shadow rounded-sm border border-concrete overflow-hidden"
    >
      <div className="grid md:grid-cols-5 gap-0">
        <div className="md:col-span-3 p-8 md:p-10 border-b md:border-b-0 md:border-r border-concrete">
          <div className="flex items-center mb-8">
            <motion.div 
              className="p-3 rounded-sm bg-resistance bg-opacity-10 border border-resistance"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={28} className="text-resistance" />
            </motion.div>
            <div className="ml-4">
              <h3 className="text-3xl font-mono font-bold">{tool.name}</h3>
              <div className="text-sm text-resistance font-mono mt-1">{tool.tagline}</div>
            </div>
          </div>
          
          <motion.div 
            className="mb-8"
            initial={{ height: "auto" }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              {isExpanded ? tool.longDescription : tool.description}
            </p>
            <button 
              className="mt-3 text-resistance text-sm font-mono flex items-center hover:underline focus:outline-none"
              onClick={onExpand}
            >
              {isExpanded ? 'Show less' : 'Show more'}
            </button>
          </motion.div>
          
          <ToolStats stats={tool.stats} />
          
          <motion.div 
            className="mb-8 bg-black bg-opacity-30 border-l-2 border-resistance p-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-gray-300 italic text-sm mb-2">"{tool.testimonial.quote}"</p>
            <p className="text-xs text-gray-500 font-mono">—{tool.testimonial.author}</p>
          </motion.div>
          
          <ToolFeatures features={tool.features} />
        </div>
        
        <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-between bg-gradient-to-br from-black to-shadow">
          <div>
            <div className="flex items-center mb-6">
              <Code size={18} className="text-resistance mr-2" />
              <h4 className="text-gray-300 font-mono">TECHNICAL SPECIFICATION</h4>
            </div>
            
            <TerminalWindow code={tool.codeSnippet} />
          </div>
          
          <div className="mt-8">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <Activity size={16} className="text-resistance mr-2" />
                <h4 className="text-sm text-gray-400 uppercase font-mono">Live Activity</h4>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-resistance rounded-full mr-1 animate-pulse"></span>
                <span className="text-xs text-gray-500 font-mono">LIVE</span>
              </div>
            </div>
            
            <div className="bg-black bg-opacity-80 rounded-sm p-4 border border-concrete">
              <ActivityGraph activeIndex={activeTab} />
            </div>
          </div>
          
          <motion.button 
            className="mt-8 w-full bg-resistance text-black py-3 rounded-sm font-mono font-bold flex justify-center items-center group relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Lock size={16} className="mr-2" />
            <span className="relative z-10">ACCESS {tool.name}</span>
          </motion.button>
        </div>
      </div>
      
      <div className="px-4 py-2 bg-black border-t border-concrete text-xs text-gray-500 font-mono flex justify-between">
        <div className="flex items-center">
          <GitBranch size={12} className="mr-2 text-resistance" />
          <span>TOOLKIT VERSION: 0.9.{activeTab + 1}</span>
        </div>
        <div className="flex items-center">
          <motion.div 
            className="w-2 h-2 bg-resistance rounded-full mr-1"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          ></motion.div>
          <span className="hidden md:inline">SECURE CONNECTION</span> ACTIVE
        </div>
      </div>
    </motion.div>
  );
}