import React from 'react';

interface TerminalWindowProps {
  code: string;
}

export function TerminalWindow({ code }: TerminalWindowProps) {
  const [isTyping, setIsTyping] = React.useState(true);
  const [text, setText] = React.useState('');
  const fullText = code;
  const typingSpeed = 20;
  
  React.useEffect(() => {
    let i = 0;
    setText('');
    setIsTyping(true);
    
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(prev => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, typingSpeed);
    
    return () => clearInterval(typingInterval);
  }, [fullText]);
  
  return (
    <div className="bg-black bg-opacity-90 rounded-md font-mono text-sm overflow-hidden border border-concrete">
      <div className="flex items-center px-3 py-2 bg-shadow">
        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <div className="ml-auto text-xs text-gray-500">resistance@terminal:~</div>
      </div>
      <div className="p-4 text-gray-300 overflow-x-auto">
        <pre>{text}<span className={`inline-block w-2 h-4 bg-resistance ml-1 ${isTyping ? 'animate-pulse' : 'opacity-0'}`}></span></pre>
      </div>
    </div>
  );
}