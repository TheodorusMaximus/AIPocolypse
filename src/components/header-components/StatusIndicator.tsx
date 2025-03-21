import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity } from 'lucide-react';

export function StatusIndicator() {
  const [statusMessage, setStatusMessage] = useState('SYSTEM SECURE');
  
  // Array of random status messages for ambient effect
  const statusMessages = [
    'SYSTEM SECURE',
    'CONNECTION ENCRYPTED',
    'NODES ACTIVE: 72',
    'NO TRACKERS DETECTED',
    'PERIMETER STABLE'
  ];
  
  useEffect(() => {
    // Rotate status messages randomly
    const statusInterval = setInterval(() => {
      const newMessage = statusMessages[Math.floor(Math.random() * statusMessages.length)];
      setStatusMessage(newMessage);
    }, 5000);
    
    return () => {
      clearInterval(statusInterval);
    };
  }, []);
  
  return (
    <motion.div 
      className="hidden lg:flex items-center mr-2 px-3 py-1 bg-black bg-opacity-40 border border-concrete rounded-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <motion.div 
        className="w-1.5 h-1.5 rounded-full bg-resistance mr-2"
        animate={{ 
          opacity: [1, 0.3, 1]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          repeatType: "loop"
        }}
      />
      <div className="text-xs font-mono text-gray-400 flex items-center">
        <Activity size={10} className="text-resistance mr-1" />
        <AnimatePresence mode="wait">
          <motion.span
            key={statusMessage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {statusMessage}
          </motion.span>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default StatusIndicator; 