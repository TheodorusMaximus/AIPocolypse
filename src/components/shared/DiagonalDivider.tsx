import React from 'react';
import { motion } from 'framer-motion';

export function DiagonalDivider() {
  return (
    <>
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
    </>
  );
}