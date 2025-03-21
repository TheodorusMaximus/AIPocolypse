import React from 'react';

interface CodeTerminalProps {
  code: string;
}

export function CodeTerminal({ code }: CodeTerminalProps) {
  return (
    <div className="bg-black bg-opacity-90 rounded-sm font-mono text-sm border border-concrete overflow-hidden">
      <div className="flex items-center px-3 py-2 bg-shadow">
        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <div className="ml-auto text-xs text-gray-500">resistance@terminal:~/dev</div>
      </div>
      <div className="p-4 text-gray-300 overflow-x-auto">
        <pre className="whitespace-pre-wrap">{code}</pre>
      </div>
    </div>
  );
}