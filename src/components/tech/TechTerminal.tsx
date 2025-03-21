import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TechTerminalProps {
  code: string;
}

export function TechTerminal({ code }: TechTerminalProps) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < code.length) {
        setDisplayText(prev => prev + code[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsComplete(true);
      }
    }, 20);
    
    return () => clearInterval(interval);
  }, [code]);

  return (
    <div className="bg-black bg-opacity-90 rounded-sm font-mono text-sm border border-concrete overflow-hidden">
      <div className="flex items-center px-3 py-2 bg-shadow">
        <div className="w-3 h-3 rounded-full bg-red-500 mr-2" />
        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <div className="ml-auto text-xs text-gray-500">resistance@terminal:~/tech</div>
      </div>
      <div className="p-4 text-gray-300">
        <pre className="whitespace-pre-wrap">
          {displayText}
          <motion.span
            className="inline-block w-2 h-4 bg-resistance ml-1"
            animate={{ opacity: isComplete ? [0, 1] : 1 }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        </pre>
      </div>
    </div>
  );
}