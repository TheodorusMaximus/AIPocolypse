import React from 'react';
import { Code, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export function CommunitySupport() {
  return (
    <>
      <h3 className="text-2xl font-mono font-bold mb-3 text-resistance">JOIN THE KNOWLEDGE COLLECTIVE</h3>
      <p className="text-gray-300 mb-6">
        The resistance thrives on shared expertise. Contribute your knowledge and help others navigate the fight for digital freedom.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <motion.button 
          className="bg-resistance text-black px-6 py-3 rounded-sm font-mono font-bold flex items-center"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Code size={18} className="mr-2" />
          CONTRIBUTE ANSWERS
        </motion.button>
        
        <motion.button 
          className="border border-resistance text-resistance px-6 py-3 rounded-sm font-mono flex items-center"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Shield size={18} className="mr-2" />
          JOIN SUPPORT TEAM
        </motion.button>
      </div>
    </>
  );
}