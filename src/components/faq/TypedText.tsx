import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface TypedTextProps {
  text: string;
  delay?: number;
  className?: string;
  speed?: number;
}

export function TypedText({ text, delay = 0, className = "", speed = 30 }: TypedTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (!isInView) return;
    
    let currentIndex = 0;
    setDisplayText("");
    
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(prev => prev + text[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, speed);
      
      return () => clearInterval(interval);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [text, delay, speed, isInView]);
  
  return (
    <div ref={containerRef} className={className}>
      <span>{displayText}</span>
      <span className={`inline-block w-2 h-4 bg-resistance ml-1 ${isComplete ? 'animate-pulse' : 'opacity-100'}`}></span>
    </div>
  );
}