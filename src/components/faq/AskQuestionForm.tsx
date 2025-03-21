import React from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

export function AskQuestionForm() {
  return (
    <div className="p-6 border-t border-concrete bg-black bg-opacity-40">
      <h3 className="text-lg font-mono font-bold mb-4 text-gray-300">CAN'T FIND AN ANSWER?</h3>
      <div className="flex items-start">
        <input 
          type="text" 
          placeholder="Ask the resistance..." 
          className="flex-1 bg-black bg-opacity-60 border border-concrete px-4 py-3 text-gray-300 placeholder-gray-500 focus:border-resistance transition-colors outline-none"
        />
        <motion.button 
          className="bg-resistance text-black ml-3 px-4 py-3 font-mono flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Send size={16} className="mr-2" />
          SUBMIT
        </motion.button>
      </div>
    </div>
  );
}