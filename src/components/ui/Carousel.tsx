import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  items: ReactNode[];
  autoplay?: boolean;
  autoplaySpeed?: number;
  showDots?: boolean;
  showArrows?: boolean;
  enableSwipe?: boolean;
  className?: string;
  itemClassName?: string;
  slideWidth?: string;
  gap?: number;
  slidesToShow?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  autoplay = false,
  autoplaySpeed = 5000,
  showDots = true,
  showArrows = true,
  enableSwipe = true,
  className = '',
  itemClassName = '',
  slideWidth = '100%',
  gap = 16,
  slidesToShow = 1
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalItems = items.length;
  const maxIndex = Math.max(0, Math.ceil(totalItems / slidesToShow) - 1);
  
  // Calculate slide width based on container width and slides to show
  const getSlideWidth = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const totalGapWidth = gap * (slidesToShow - 1);
      return (containerWidth - totalGapWidth) / slidesToShow;
    }
    return 0;
  };
  
  // Set up autoplay
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      goToNext();
    }, autoplaySpeed);
    
    return () => clearInterval(interval);
  }, [activeIndex, autoplay, autoplaySpeed]);
  
  // Go to next/previous slide
  const goToNext = () => {
    setActiveIndex(prev => prev < maxIndex ? prev + 1 : 0);
  };
  
  const goToPrev = () => {
    setActiveIndex(prev => prev > 0 ? prev - 1 : maxIndex);
  };
  
  // Handle swipe gestures
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    if (!enableSwipe) return;
    
    setIsDragging(true);
    if ('touches' in e) {
      setStartX(e.touches[0].clientX);
    } else {
      setStartX(e.clientX);
    }
  };
  
  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging || !enableSwipe) return;
    
    let currentX = 0;
    if ('touches' in e) {
      currentX = e.touches[0].clientX;
    } else {
      currentX = e.clientX;
    }
    
    const diff = currentX - startX;
    setTranslateX(diff);
  };
  
  const handleTouchEnd = () => {
    if (!isDragging || !enableSwipe) return;
    
    setIsDragging(false);
    
    // If dragged more than 100px, change slide
    if (Math.abs(translateX) > 100) {
      if (translateX > 0) {
        goToPrev();
      } else {
        goToNext();
      }
    }
    
    setTranslateX(0);
  };
  
  // Transform value for carousel
  const getTransformValue = () => {
    const baseTransform = -activeIndex * 100;
    return `translateX(calc(${baseTransform}% + ${translateX}px))`;
  };
  
  return (
    <div 
      className={`relative overflow-hidden ${className}`} 
      ref={containerRef}
    >
      {/* Main carousel track */}
      <div 
        className="flex transition-transform duration-300 ease-out h-full"
        style={{ 
          transform: getTransformValue(),
          gap: `${gap}px`
        }}
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
        onMouseLeave={handleTouchEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item, index) => (
          <div 
            key={index}
            className={`flex-shrink-0 ${itemClassName}`}
            style={{ 
              width: slidesToShow > 1 ? `calc(${100 / slidesToShow}% - ${gap * (slidesToShow - 1) / slidesToShow}px)` : slideWidth 
            }}
          >
            {item}
          </div>
        ))}
      </div>
      
      {/* Navigation dots */}
      {showDots && (
        <div className="flex justify-center mt-4">
          {Array(maxIndex + 1).fill(0).map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2 h-2 mx-1 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-resistance focus:ring-opacity-50 ${
                i === activeIndex ? 'bg-resistance scale-125' : 'bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
      
      {/* Navigation arrows */}
      {showArrows && (
        <>
          <AnimatePresence>
            {activeIndex > 0 && (
              <motion.button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center text-white focus:outline-none focus:ring-2 focus:ring-resistance focus:ring-opacity-50 z-10"
                onClick={goToPrev}
                aria-label="Previous slide"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={24} />
              </motion.button>
            )}
          </AnimatePresence>
          
          <AnimatePresence>
            {activeIndex < maxIndex && (
              <motion.button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center text-white focus:outline-none focus:ring-2 focus:ring-resistance focus:ring-opacity-50 z-10"
                onClick={goToNext}
                aria-label="Next slide"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={24} />
              </motion.button>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

export default Carousel; 