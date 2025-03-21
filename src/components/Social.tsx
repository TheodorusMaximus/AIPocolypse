import React, { useState, useRef, useEffect } from 'react';
import { Users, Shield, MessageSquare, Star, Globe, Activity, ChevronDown, ChevronRight, Zap, Lock, Eye, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { metrics } from '../data/metrics';
import { testimonials } from '../data/testimonials';
import { MetricCard } from './social/MetricCard';
import { TestimonialCard } from './social/TestimonialCard';
import { TestimonialDetail } from './social/TestimonialDetail';
import { NetworkVisualization } from './social/NetworkVisualization';
import { ResistanceMap } from './social/ResistanceMap';
import { LiveActivityFeed } from './social/LiveActivityFeed';

export function Social() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const handleTestimonialSelect = (testimonial) => {
    setSelectedTestimonial(testimonial);
  };
  
  const handleCloseTestimonial = () => {
    setSelectedTestimonial(null);
  };
  
  return (
    <section ref={sectionRef} className="relative py-24 bg-black overflow-hidden" id="social">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-5"></div>
      <NetworkVisualization />
      
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
              className="text-4xl md:text-5xl font-mono font-bold px-6 text-center relative"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="relative z-10">THE RESISTANCE IS WORKING</span>
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
            </motion.h2>
            <div className="h-px bg-resistance w-16 opacity-50"></div>
          </div>
          
          <motion.div 
            className="text-center text-xl md:text-2xl text-gray-300 mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>
              Real impact, real stories. The movement grows stronger every day.
            </p>
          </motion.div>
        </motion.div>
        
        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
          {metrics.map((metric, index) => (
            <MetricCard key={metric.label} metric={metric} index={index} />
          ))}
        </div>
        
        {/* Visualization and activity feed */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
          <div className="lg:col-span-2 relative bg-black bg-opacity-50 rounded-sm border border-concrete overflow-hidden min-h-[300px]">
            <div className="absolute inset-0">
              <ResistanceMap />
            </div>
            <div className="absolute top-4 left-4">
              <h3 className="text-lg font-mono font-bold text-resistance">GLOBAL RESISTANCE</h3>
              <p className="text-sm text-gray-400">Active nodes across continents</p>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <LiveActivityFeed />
          </div>
        </div>
        
        {/* Testimonials header */}
        <motion.div 
          className="max-w-6xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl font-mono font-bold mb-4 text-center">VOICES OF THE RESISTANCE</h3>
          <p className="text-gray-300 text-center">From journalists to activists, real users share their experiences.</p>
        </motion.div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.author} 
              testimonial={testimonial} 
              index={index}
              onSelect={handleTestimonialSelect}
            />
          ))}
        </div>
        
        {/* View more testimonials button */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.button 
            className="bg-black bg-opacity-80 text-resistance px-8 py-3 rounded-sm font-mono border border-resistance inline-flex items-center"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleTestimonialSelect(testimonials[3])}
          >
            VIEW MORE STORIES
            <ChevronDown size={18} className="ml-2" />
          </motion.button>
        </motion.div>
        
        {/* Join the movement CTA */}
        <motion.div 
          className="mt-24 py-12 border-t border-b border-concrete text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl md:text-3xl font-mono font-bold mb-4 text-resistance">BE PART OF THE RESISTANCE</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of others fighting for digital freedom. Every new member strengthens our network and pushes the movement forward.
          </p>
          
          <motion.button 
            className="bg-resistance text-black px-8 py-3 rounded-sm font-mono font-bold inline-flex items-center"
            whileHover={{ 
              scale: 1.03,
              boxShadow: '0 0 20px rgba(0, 255, 102, 0.3)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            JOIN THE MOVEMENT
            <Users size={18} className="ml-2" />
          </motion.button>
        </motion.div>
      </div>
      
      {/* Testimonial detail modal */}
      <TestimonialDetail 
        testimonial={selectedTestimonial} 
        isOpen={selectedTestimonial !== null}
        onClose={handleCloseTestimonial}
      />
      
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
      `}</style>
    </section>
  );
}