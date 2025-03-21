import React from 'react';
import { motion } from 'framer-motion';

interface CodeTerminalProps {
  code: string;
}

export const CodeTerminal: React.FC<CodeTerminalProps> = ({ code }) => {
  return (
    <motion.div 
      className="rounded-lg overflow-hidden bg-black border border-resistance/20 w-full h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
    >
      <div className="bg-shadow py-2 px-4 flex items-center space-x-2">
        <div className="h-3 w-3 rounded-full bg-alert opacity-70"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-400 opacity-70"></div>
        <div className="h-3 w-3 rounded-full bg-resistance opacity-70"></div>
        <div className="text-xs text-gray-400 flex-1 text-center">terminal</div>
      </div>
      <pre className="p-4 overflow-auto text-sm text-gray-300 font-mono h-[calc(100%-2rem)]">
        <code>{code}</code>
      </pre>
    </motion.div>
  );
};

export default CodeTerminal; 