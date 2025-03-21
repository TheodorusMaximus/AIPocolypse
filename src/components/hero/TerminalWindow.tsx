import React, { useState, useEffect } from 'react';
import { useTypingEffect } from '../../hooks/useTypingEffect';

interface TerminalWindowProps {
  commands: string[];
}

export function TerminalWindow({ commands }: TerminalWindowProps) {
  const [currentCommand, setCurrentCommand] = useState(0);
  const { displayText, isComplete } = useTypingEffect(commands[currentCommand]);
  
  useEffect(() => {
    if (isComplete && currentCommand < commands.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentCommand(prev => prev + 1);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [isComplete, currentCommand, commands.length]);

  return (
    <div className="bg-black bg-opacity-80 border border-resistance p-4 rounded-md font-mono text-sm w-full max-w-md mx-auto mb-8">
      <div className="flex items-center mb-2">
        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <div className="ml-auto text-xs text-gray-500">resistance@terminal:~</div>
      </div>
      <div className="text-resistance">
        $ <span className="text-gray-200">{displayText}</span>
        <span className={`inline-block w-2 h-4 bg-resistance ml-1 ${isComplete && currentCommand === commands.length - 1 ? 'animate-pulse' : ''}`}></span>
      </div>
    </div>
  );
}