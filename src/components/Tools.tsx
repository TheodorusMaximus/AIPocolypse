import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code, Lock, Activity, GitBranch } from 'lucide-react';
import { ToolCard } from './tools/ToolCard';
import { ToolDetail } from './tools/ToolDetail';
import { CircuitDecoration } from './tools/CircuitDecoration';
import { DataFlow } from './tools/DataFlow';
import { tools } from '../data/tools';

export function Tools() {
  const [activeTab, setActiveTab] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasTransitioned, setHasTransitioned] = useState(false);
  const containerRef = useRef(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasTransitioned) setHasTransitioned(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, [hasTransitioned]);
  
  const handleTabChange = (index) => {
    setActiveTab(index);
    setIsExpanded(false);
  };
  
  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  
  const activeTool = tools[activeTab];
  
  return (
    <section className="relative py-24 bg-black overflow-hidden" id="tools">
      <div className="absolute inset-0 bg-noise opacity-5"></div>
      <CircuitDecoration />
      <DataFlow activeIndex={activeTab} />
      
      <div className="absolute inset-0 pointer-events-none">
        {Array(40).fill(0).map((_, i) => (
          <div 
            key={i}
            className="w-full h-px bg-white opacity-5"
            style={{ top: `${i * 24}px` }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-resistance w-16 opacity-50"></div>
            <h2 className="text-4xl md:text-5xl font-mono font-bold px-6 text-center relative">
              <span className="relative z-10">YOUR DIGITAL ARSENAL</span>
              <motion.span 
                className="absolute inset-0 bg-resistance bg-opacity-5 -skew-x-12 z-0"
                animate={{ 
                  x: [0, 5, -5, 0],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              ></motion.span>
            </h2>
            <div className="h-px bg-resistance w-16 opacity-50"></div>
          </div>
          
          <motion.p 
            className="text-center text-xl md:text-2xl text-gray-300 mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Three tools. Zero compromise. Built for the resistance.
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {tools.map((tool, index) => (
            <ToolCard
              key={tool.name}
              tool={tool}
              isActive={activeTab === index}
              index={index}
              onClick={() => handleTabChange(index)}
            />
          ))}
        </div>
        
        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <ToolDetail
              tool={activeTool}
              activeTab={activeTab}
              isExpanded={isExpanded}
              hasTransitioned={hasTransitioned}
              onExpand={handleExpand}
            />
          </AnimatePresence>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden pointer-events-none">
        <svg 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none" 
          className="absolute bottom-0 left-0 w-full h-full"
        >
          <motion.path 
            d="M0,100 L100,60 L100,100 L0,100 Z" 
            fill="#1A1A1A"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
          <motion.path 
            d="M0,100 L100,70 L100,72 L0,102 Z" 
            fill="#00FF66"
            fillOpacity="0.1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </svg>
      </div>
      
      <style jsx>{`
        .bg-void {
          background-color: #1A1A1A;
        }
        .bg-shadow {
          background-color: #2D2D2D;
        }
        .bg-concrete {
          background-color: #4A4A4A;
        }
        .bg-resistance {
          background-color: #00FF66;
        }
        .text-resistance {
          color: #00FF66;
        }
        .border-resistance {
          border-color: #00FF66;
        }
        .border-concrete {
          border-color: #4A4A4A;
        }
        
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        
        .shadow-glow {
          box-shadow: 0 0 15px rgba(0, 255, 102, 0.3);
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}