import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Lock, Shield, Eye, ChevronRight } from 'lucide-react';
import { useInView } from 'framer-motion';

interface TestimonialCardProps {
  testimonial: {
    quote: string;
    author: string;
    location: string;
    timestamp: string;
    verified: boolean;
  };
  index: number;
  onSelect: (testimonial: any) => void;
}

export function TestimonialCard({ testimonial, index, onSelect }: TestimonialCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={cardRef}
      className="relative group h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(testimonial)}
    >
      <motion.div 
        className="absolute -inset-0.5 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
        animate={isHovered ? {
          scale: [1, 1.05, 1],
        } : {}}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
      />
      
      <div className="relative bg-shadow rounded-sm p-8 border border-concrete group-hover:border-resistance transition-colors h-full flex flex-col">
        <div className="flex items-start justify-between mb-6">
          <div className="w-8 h-8 rounded-full bg-black bg-opacity-60 border border-resistance flex items-center justify-center">
            <Lock size={16} className="text-resistance" />
          </div>
          {testimonial.verified && (
            <div className="bg-resistance bg-opacity-10 px-2 py-0.5 rounded-sm text-xs font-mono text-resistance flex items-center">
              <Shield size={10} className="mr-1" />
              VERIFIED
            </div>
          )}
        </div>
        
        <blockquote className="text-gray-300 italic mb-6 relative">
          <motion.div 
            className="absolute -left-2 top-0 text-resistance text-xl opacity-40 group-hover:opacity-100 transition-opacity"
            animate={isHovered ? { x: [-5, 0] } : {}}
            transition={{ duration: 0.3 }}
          >
            "
          </motion.div>
          
          {testimonial.quote}
          
          <motion.div 
            className="absolute -right-2 bottom-0 text-resistance text-xl opacity-40 group-hover:opacity-100 transition-opacity"
            animate={isHovered ? { x: [5, 0] } : {}}
            transition={{ duration: 0.3 }}
          >
            "
          </motion.div>
        </blockquote>
        
        <div className="mt-auto">
          <div className="font-mono text-resistance">{testimonial.author}</div>
          <div className="flex items-center justify-between mt-1">
            <span className="text-xs text-gray-400">{testimonial.location}</span>
            <span className="text-xs text-gray-500">{new Date(testimonial.timestamp).toLocaleDateString()}</span>
          </div>
        </div>
        
        <motion.div 
          className="mt-6 flex items-center justify-center text-resistance font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ y: 10 }}
          animate={isHovered ? { y: 0 } : {}}
          transition={{ duration: 0.2 }}
        >
          <Eye size={12} className="mr-2" />
          <span>VIEW FULL STORY</span>
          <ChevronRight size={12} className="ml-2" />
        </motion.div>
      </div>
    </motion.div>
  );
}