import React, { useState, useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';

interface CounterAnimationProps {
  value: string;
  duration?: number;
}

export function CounterAnimation({ value, duration = 2.5 }: CounterAnimationProps) {
  const nodeRef = useRef(null);
  const [count, setCount] = useState(0);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  
  const finalValue = parseInt(value.replace(/\D/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    if (isInView) {
      const updateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const progressPercent = Math.min(progress / (duration * 1000), 1);
        
        // Easing function for more natural animation
        const easeOutQuart = 1 - Math.pow(1 - progressPercent, 4);
        
        setCount(Math.floor(easeOutQuart * finalValue));
        
        if (progressPercent < 1) {
          animationFrame = requestAnimationFrame(updateCount);
        }
      };
      
      animationFrame = requestAnimationFrame(updateCount);
    }
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [finalValue, duration, isInView]);
  
  return (
    <div ref={nodeRef}>
      {finalValue > 99999 ? 
        `${Math.floor(count / 1000)}k${suffix}` : 
        `${count}${suffix}`}
    </div>
  );
}