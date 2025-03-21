import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Shield, MessageSquare, Globe, Zap, Eye, AlertTriangle, X } from 'lucide-react';

interface TestimonialDetailProps {
  testimonial: any;
  isOpen: boolean;
  onClose: () => void;
}

export function TestimonialDetail({ testimonial, isOpen, onClose }: TestimonialDetailProps) {
  if (!testimonial) return null;

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
          <motion.div 
            className="absolute inset-0 bg-black bg-opacity-90 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          
          <motion.div 
            className="relative bg-shadow border border-resistance w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-sm"
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ duration: 0.3, type: "spring" }}
          >
            <div className="p-6 border-b border-concrete flex items-start justify-between">
              <div className="flex items-center">
                <div className="p-3 rounded-sm bg-black border border-resistance mr-4 flex items-center justify-center">
                  <Lock size={24} className="text-resistance" />
                </div>
                <div>
                  <h3 className="text-2xl font-mono font-bold">{testimonial.author}</h3>
                  <div className="flex items-center mt-1">
                    <Globe size={14} className="text-gray-400 mr-2" />
                    <span className="text-gray-400">{testimonial.location}</span>
                    {testimonial.verified && (
                      <div className="ml-3 bg-resistance bg-opacity-10 px-2 py-0.5 rounded-sm text-xs font-mono text-resistance flex items-center">
                        <Shield size={10} className="mr-1" />
                        VERIFIED
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <button 
                className="text-gray-400 hover:text-resistance transition-colors"
                onClick={onClose}
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Eye size={14} className="text-resistance mr-2" />
                    <span className="text-sm text-gray-400 font-mono">RESISTANCE CONTEXT</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    {new Date(testimonial.timestamp).toLocaleDateString()}
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.context}</p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <MessageSquare size={16} className="text-resistance mr-2" />
                  <span className="text-lg font-mono text-gray-300">TESTIMONIAL</span>
                </div>
                <div className="bg-black bg-opacity-60 p-6 border-l-4 border-resistance">
                  <blockquote className="text-gray-300 italic leading-relaxed">
                    "{testimonial.extendedQuote}"
                  </blockquote>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center mb-3">
                    <Shield size={14} className="text-resistance mr-2" />
                    <span className="text-sm font-mono text-gray-400">SECURITY CONTEXT</span>
                  </div>
                  <div className="bg-black bg-opacity-50 p-4 rounded-sm border border-concrete h-full">
                    <div className="mb-2 text-resistance font-mono">{testimonial.security}</div>
                    <p className="text-gray-400 text-sm">Using AIPOCALYPSE tools to maintain operational security in high-risk environments.</p>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center mb-3">
                    <Zap size={14} className="text-resistance mr-2" />
                    <span className="text-sm font-mono text-gray-400">PRIMARY TOOL</span>
                  </div>
                  <div className="bg-black bg-opacity-50 p-4 rounded-sm border border-concrete h-full">
                    <div className="mb-2 text-resistance font-mono">{testimonial.tool}</div>
                    <p className="text-gray-400 text-sm">
                      {testimonial.tool === "SCRIBE" && "Protection against surveillance and secure communication channels."}
                      {testimonial.tool === "FORAGER" && "Economic resilience and resource discovery."}
                      {testimonial.tool === "WARDEN" && "Threat detection and counter-surveillance measures."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="px-6 py-3 border-t border-concrete bg-black bg-opacity-50 text-xs text-gray-500 font-mono flex justify-between">
              <div className="flex items-center">
                <AlertTriangle size={12} className="mr-2 text-resistance" />
                <span>TRANSMISSION SECURED</span>
              </div>
              <div className="flex items-center">
                <motion.div 
                  className="w-2 h-2 bg-resistance rounded-full mr-1"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                ></motion.div>
                <span>RESISTANCE VERIFIED</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}