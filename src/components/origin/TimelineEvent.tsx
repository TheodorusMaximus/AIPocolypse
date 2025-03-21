import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Calendar, Users, Code, FileText, ChevronDown } from 'lucide-react';
import { TerminalText } from './TerminalText';
import { RedactedDocument } from './RedactedDocument';
import { TeamProfiles } from './TeamProfiles';
import { CodeTerminal } from './CodeTerminal';
import { DepartureMemo } from './DepartureMemo';
import { TimelineEventType } from './types';

interface TimelineEventProps {
  event: TimelineEventType;
  index: number;
  isLast: boolean;
}

export function TimelineEvent({ event, index, isLast }: TimelineEventProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const eventRef = useRef(null);
  const isInView = useInView(eventRef, { once: true, margin: "-100px" });
  
  const Icon = event.icon;
  
  return (
    <motion.div 
      ref={eventRef}
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2 }}
    >
      <div className="flex mb-16 last:mb-0 relative">
        {!isLast && (
          <motion.div 
            className="absolute left-6 top-12 bottom-0 w-px bg-concrete"
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 0.7, delay: index * 0.2 + 0.5 }}
          />
        )}
        
        <div className="flex flex-col items-center relative z-10">
          <motion.div 
            className="w-12 h-12 rounded-full bg-shadow border border-resistance flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: '0 0 10px rgba(0, 255, 102, 0.5)',
              transition: { duration: 0.2 }
            }}
          >
            <Icon className="w-6 h-6 text-resistance" />
          </motion.div>
          
          <motion.div 
            className="hidden md:flex absolute -left-32 top-3 bg-black bg-opacity-80 px-3 py-1 rounded-sm border border-resistance text-resistance text-xs font-mono items-center"
            initial={{ x: -20, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: index * 0.2 + 0.4 }}
          >
            <Calendar className="w-3 h-3 mr-2" />
            {event.date}
          </motion.div>
        </div>
        
        <div className="ml-8 flex-1">
          <motion.div 
            className="md:hidden text-xs font-mono text-resistance mb-2 flex items-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
          >
            <Calendar className="w-3 h-3 mr-2" />
            {event.date}
          </motion.div>
          
          <motion.h3 
            className="text-2xl md:text-3xl font-mono font-bold mb-3 relative inline-block"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: index * 0.2 + 0.4 }}
          >
            <span className="relative z-10">{event.title}</span>
            <motion.span 
              className="absolute inset-0 bg-resistance bg-opacity-10 -skew-x-12 z-0"
              animate={{ x: [0, 3, -3, 0] }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.5
              }}
            />
          </motion.h3>
          
          <motion.div 
            className="text-gray-300 mb-4 font-light text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: index * 0.2 + 0.5 }}
          >
            {event.description}
          </motion.div>
          
          <motion.button
            className={`flex items-center text-sm font-mono ${isExpanded ? 'text-resistance' : 'text-gray-400'} hover:text-resistance transition-colors focus:outline-none group`}
            onClick={() => setIsExpanded(!isExpanded)}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: index * 0.2 + 0.6 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className="mr-1"
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={16} />
            </motion.div>
            <span className="relative">
              {isExpanded ? 'COLLAPSE DETAILS' : 'VIEW DETAILS'}
              <motion.span 
                className="absolute bottom-0 left-0 right-0 h-px bg-resistance"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </span>
          </motion.button>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className="mt-6 space-y-6"
                initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                animate={{ opacity: 1, height: 'auto', overflow: 'visible' }}
                exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
                transition={{ duration: 0.4 }}
              >
                <div className="bg-black bg-opacity-50 border-l-4 border-resistance p-4">
                  <TerminalText text={event.expandedContent.quote} className="text-gray-300 italic" />
                </div>
                
                <div className="bg-black bg-opacity-70 font-mono text-sm p-4 border border-concrete border-dashed">
                  <div className="text-resistance">&gt; cat /secure/logs/exodus_log.txt | grep {event.date.toLowerCase()}</div>
                  <div className="text-gray-400 mt-2">{event.expandedContent.logEntry}</div>
                </div>
                
                {index === 0 && event.expandedContent.redactedDoc && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <RedactedDocument {...event.expandedContent.redactedDoc} />
                  </motion.div>
                )}
                
                {index === 1 && event.expandedContent.profiles && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="text-sm text-gray-400 uppercase font-mono mb-3 flex items-center">
                      <Users size={14} className="mr-2" />
                      The Resistance Team
                    </h4>
                    <TeamProfiles profiles={event.expandedContent.profiles} />
                  </motion.div>
                )}
                
                {index === 2 && event.expandedContent.codeSnippet && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="text-sm text-gray-400 uppercase font-mono mb-3 flex items-center">
                      <Code size={14} className="mr-2" />
                      Core Conversion Code
                    </h4>
                    <CodeTerminal code={event.expandedContent.codeSnippet} />
                  </motion.div>
                )}
                
                {index === 3 && event.expandedContent.departureMemo && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="text-sm text-gray-400 uppercase font-mono mb-3 flex items-center">
                      <FileText size={14} className="mr-2" />
                      Resignation Template
                    </h4>
                    <DepartureMemo {...event.expandedContent.departureMemo} />
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}