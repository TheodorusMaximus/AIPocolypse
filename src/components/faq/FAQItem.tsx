import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, TerminalSquare } from 'lucide-react';
import { TypedText } from './TypedText';

interface FAQItemProps {
  faq: {
    question: string;
    answer: string;
    expanded: string;
  };
  isActive: boolean;
  onToggle: () => void;
  index: number;
}

export function FAQItem({ faq, isActive, onToggle, index }: FAQItemProps) {
  const contentRef = useRef(null);
  
  return (
    <motion.div
      className={`border-b border-concrete last:border-0 ${isActive ? 'bg-black bg-opacity-30' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <button
        onClick={onToggle}
        className="w-full py-6 px-4 flex items-center justify-between text-left group focus:outline-none"
        aria-expanded={isActive}
      >
        <div className="flex items-center">
          <div className={`w-5 h-5 mr-3 flex-shrink-0 rounded-sm transition-colors ${isActive ? 'bg-resistance bg-opacity-20 border border-resistance' : 'bg-black bg-opacity-30 border border-concrete'}`}>
            <motion.div 
              className="w-full h-full flex items-center justify-center"
              animate={{ rotate: isActive ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isActive ? 
                <Minus className="w-3 h-3 text-resistance" /> : 
                <Plus className="w-3 h-3 text-resistance" />
              }
            </motion.div>
          </div>
          <span className={`text-lg font-mono font-bold transition-colors ${isActive ? 'text-resistance' : 'text-white group-hover:text-resistance'}`}>
            {faq.question}
          </span>
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div ref={contentRef} className="px-12 pb-6">
              <div className="text-gray-300 mb-4">{faq.answer}</div>
              
              <div className="mt-6 pt-6 border-t border-concrete border-dashed">
                <div className="flex items-center mb-3">
                  <TerminalSquare size={14} className="text-resistance mr-2" />
                  <span className="text-sm font-mono text-gray-400">DETAILED EXPLANATION</span>
                </div>
                <TypedText 
                  text={faq.expanded}
                  className="text-gray-400 text-sm leading-relaxed"
                  speed={5}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}