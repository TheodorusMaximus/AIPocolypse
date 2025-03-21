import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity } from 'lucide-react';

const events = [
  "New member joined from Zürich, Switzerland",
  "234 trackers blocked in São Paulo",
  "Secure channel established: Singapore → Berlin",
  "Firmware update distributed to 127 nodes",
  "New vulnerability patched: CVE-2025-1337",
  "WARDEN detected coordinated surveillance attempt",
  "FORAGER identified economic opportunity in Toronto",
  "Anonymous whistleblower data secured via SCRIBE",
  "Quantum-resistant key exchange completed",
  "Zero-knowledge proof validation successful",
  "Multi-party computation protocol initialized",
  "Distributed consensus reached on update 0.9.7",
  "New resistance relay node online: Johannesburg"
];

export function LiveActivityFeed() {
  const [visibleEvents, setVisibleEvents] = useState([]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const newEvent = events[Math.floor(Math.random() * events.length)];
      setVisibleEvents(prev => {
        const updated = [newEvent, ...prev];
        return updated.slice(0, 4);
      });
    }, 3000);
    
    setVisibleEvents([events[Math.floor(Math.random() * events.length)]]);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="bg-black bg-opacity-70 border border-concrete rounded-sm p-4 h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Activity size={16} className="text-resistance mr-2" />
          <h3 className="text-sm font-mono text-gray-300">LIVE RESISTANCE ACTIVITY</h3>
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-resistance rounded-full mr-1 animate-pulse"></div>
          <span className="text-xs text-gray-500">LIVE FEED</span>
        </div>
      </div>
      
      <div className="space-y-3">
        <AnimatePresence>
          {visibleEvents.map((event, index) => (
            <motion.div 
              key={`${event}-${index}`}
              className="flex items-start py-2 border-b border-dashed border-concrete last:border-0"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mt-1 mr-3 w-2 h-2 rounded-full bg-resistance animate-pulse"></div>
              <div>
                <div className="text-gray-300 text-sm">{event}</div>
                <div className="text-xs text-gray-500 mt-1">
                  {new Date().toLocaleTimeString()}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}