import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export function JoinButton() {
  return (
    <motion.button
      className="bg-resistance text-black px-6 py-2 rounded-sm font-mono font-bold flex items-center group relative overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Shield className="w-4 h-4 mr-2" />
      <span className="relative z-10">JOIN NOW</span>
      
      {/* Button hover effect */}
      <motion.span 
        className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
      />
      
      {/* Glitch effect on hover */}
      <motion.span 
        className="absolute top-0 right-0 bottom-0 w-1 bg-white opacity-0 group-hover:opacity-30"
        initial={{ x: '100%' }}
        whileHover={{ x: '-400%' }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
    </motion.button>
  );
}

export default JoinButton; 