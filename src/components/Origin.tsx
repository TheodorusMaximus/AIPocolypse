import React, { useRef } from 'react';
import { AlertTriangle, Code } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { TimelineEvent } from './origin/TimelineEvent';
import { SurveillanceGrid } from './origin/SurveillanceGrid';
import { timeline } from './origin/data';

export function Origin() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  return (
    <section ref={sectionRef} className="relative py-24 bg-black overflow-hidden" id="origin">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-5"></div>
      <SurveillanceGrid />
      
      {/* Warning decoration - top */}
      <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm" />
        <div className="relative flex items-center space-x-16 animate-scroll-left">
          {Array(10).fill().map((_, i) => (
            <div key={i} className="flex items-center text-resistance font-mono text-sm opacity-70">
              <AlertTriangle size={14} className="mr-2" />
              <span>CLASSIFIED INFORMATION</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Warning decoration - bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-12 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm" />
        <div className="relative flex items-center space-x-16 animate-scroll-right">
          {Array(10).fill().map((_, i) => (
            <div key={i} className="flex items-center text-resistance font-mono text-sm opacity-70">
              <AlertTriangle size={14} className="mr-2" />
              <span>CLASSIFIED INFORMATION</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scan lines */}
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
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-resistance w-16 opacity-50"></div>
            <motion.h2 
              className="text-4xl md:text-5xl font-mono font-bold px-6 text-center"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              WE QUIT. HERE'S WHY.
            </motion.h2>
            <div className="h-px bg-resistance w-16 opacity-50"></div>
          </div>
          
          <motion.div 
            className="text-center text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>When we discovered the truth about DeepSeek's surveillance plans,</p>
            <p>we chose <span className="text-resistance">resistance</span> over <span className="line-through">compliance</span>.</p>
          </motion.div>
        </motion.div>
        
        {/* Timestamp indicator */}
        <motion.div 
          className="mb-12 max-w-4xl mx-auto bg-black bg-opacity-60 border border-concrete p-3 font-mono text-sm text-gray-400 flex items-center justify-between"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center">
            <Code size={14} className="mr-2 text-resistance" />
            <span>HISTORICAL DATA RECONSTRUCTION</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-resistance rounded-full mr-2 animate-pulse"></div>
            <span>ACCESSED: {new Date().toLocaleDateString()}</span>
          </div>
        </motion.div>
        
        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {timeline.map((event, index) => (
            <TimelineEvent 
              key={event.date} 
              event={event} 
              index={index} 
              isLast={index === timeline.length - 1}
            />
          ))}
        </div>
        
        {/* Final message */}
        <motion.div 
          className="mt-16 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-xl text-resistance font-mono font-bold mb-4">THE RESISTANCE CONTINUES</p>
          <p className="text-gray-300 mb-6">Every day we grow stronger. Every user who joins makes the network more resilient.</p>
          <motion.button 
            className="group bg-resistance text-black px-8 py-3 rounded-sm font-mono inline-flex items-center overflow-hidden relative"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 group-hover:text-black transition-colors">JOIN THE MOVEMENT</span>
            
            {/* Button hover effect */}
            <motion.span 
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
            ></motion.span>
            
            {/* Glitch effect on hover */}
            <motion.span 
              className="absolute top-0 right-0 bottom-0 w-2 bg-white opacity-0 group-hover:opacity-30"
              initial={{ x: '100%' }}
              whileHover={{ x: '-100%' }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            ></motion.span>
          </motion.button>
        </motion.div>
      </div>
      
      {/* Diagonal section divider */}
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
      
      {/* CSS that would typically be in your global stylesheet */}
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
        
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        
        @keyframes scroll-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
      `}</style>
    </section>
  );
}