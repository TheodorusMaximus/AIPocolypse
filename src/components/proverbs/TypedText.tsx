import React, { useState, useEffect, useRef } from 'react';

interface TypedTextProps {
  text: string;
  delay?: number;
  className?: string;
  speed?: number;
}

export const TypedText: React.FC<TypedTextProps> = ({ 
  text, 
  delay = 0, 
  className = "", 
  speed = 30 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const textRef = useRef(text);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;

    if (delay > 0) {
      timeout = setTimeout(() => {
        startTyping();
      }, delay);
    } else {
      startTyping();
    }

    function startTyping() {
      setIsTyping(true);
      let i = 0;
      interval = setInterval(() => {
        if (i <= textRef.current.length) {
          setDisplayText(textRef.current.substring(0, i));
          i++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, speed);
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [delay, speed]);

  return (
    <span className={className}>
      {displayText}
      {isTyping && <span className="inline-block w-1 h-4 bg-resistance animate-pulse ml-0.5"></span>}
    </span>
  );
};

export default TypedText;