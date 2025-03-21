import React, { useState, useRef, lazy, Suspense } from 'react';
import { motion, useInView } from 'framer-motion';
import { principles, Principle } from '../data/principles';
import { Section } from './Layout';
import { CollapsibleSection } from './ui/CollapsibleSection';
import { Carousel } from './ui/Carousel';
import { Tooltip } from './ui/Tooltip';

// Lazy load non-critical components for better initial load performance
const GridBackground = lazy(() => import('./proverbs/GridBackground'));
const ConnectionLines = lazy(() => import('./proverbs/ConnectionLines'));
const PrincipleCard = lazy(() => import('./proverbs/PrincipleCard'));
const PrincipleDetail = lazy(() => import('./proverbs/PrincipleDetail'));

// Skeleton loader for principle cards
const PrincipleCardSkeleton = () => (
  <div className="bg-black bg-opacity-50 border border-gray-800 rounded-sm p-6 h-full">
    <div className="flex items-center mb-4">
      <div className="w-10 h-10 bg-gray-800 rounded-full mr-3 animate-pulse"></div>
      <div className="h-6 bg-gray-800 rounded-sm w-40 animate-pulse"></div>
    </div>
    <div className="space-y-3">
      <div className="h-4 bg-gray-800 rounded-sm w-full animate-pulse"></div>
      <div className="h-4 bg-gray-800 rounded-sm w-3/4 animate-pulse"></div>
      <div className="h-4 bg-gray-800 rounded-sm w-5/6 animate-pulse"></div>
    </div>
    <div className="mt-6 flex justify-center">
      <div className="h-8 bg-gray-800 rounded-sm w-32 animate-pulse"></div>
    </div>
  </div>
);

export function Proverbs() {
  const [selectedPrinciple, setSelectedPrinciple] = useState<Principle | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  // Handle scroll events to optimize performance
  React.useEffect(() => {
    let scrollTimer: NodeJS.Timeout;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => setIsScrolling(false), 150);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);
  
  const handleSelectPrinciple = (principle: Principle) => {
    setSelectedPrinciple(principle);
  };
  
  const handleClosePrinciple = () => {
    setSelectedPrinciple(null);
  };
  
  // Create carousel items from principles
  const carouselItems = principles.map((principle, index) => (
    <Suspense key={principle.title} fallback={<PrincipleCardSkeleton />}>
      <PrincipleCard
        principle={principle}
        index={index}
        onSelect={handleSelectPrinciple}
      />
    </Suspense>
  ));
  
  return (
    <Section 
      id="ethos" 
      snapAlign={true}
      className="relative bg-black overflow-hidden"
    >
      <div ref={sectionRef} className="relative">
        {/* Background elements */}
        <div className="absolute inset-0 bg-noise opacity-5"></div>
        
        {/* Only render these when in view and not scrolling for better performance */}
        {isInView && !isScrolling && (
          <>
            <Suspense fallback={null}>
              <GridBackground />
            </Suspense>
            <Suspense fallback={null}>
              <ConnectionLines />
            </Suspense>
          </>
        )}
        
        {/* Scan lines - reduced for better performance */}
        <div className="absolute inset-0 pointer-events-none">
          {Array(20).fill(0).map((_, i) => (
            <div 
              key={i}
              className="w-full h-px bg-white opacity-5"
              style={{ top: `${i * 48}px` }}
            ></div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-resistance w-16 opacity-50"></div>
              <motion.h2 
                className="text-4xl md:text-5xl font-mono font-bold px-6 text-center relative"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="relative z-10">THE ETHOS</span>
                <motion.span 
                  className="absolute inset-0 bg-resistance bg-opacity-5 -skew-x-12 z-0"
                  animate={{ 
                    x: [0, 5, -5, 0],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                ></motion.span>
              </motion.h2>
              <div className="h-px bg-resistance w-16 opacity-50"></div>
            </div>
            
            <motion.div 
              className="text-center text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p>
                Our uncompromising principles guide everything we build.
              </p>
            </motion.div>
          </motion.div>

          {/* Desktop: Display as grid, Mobile: Display as carousel */}
          <div className="hidden md:block">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {principles.map((principle, index) => (
                <Suspense key={principle.title} fallback={<PrincipleCardSkeleton />}>
                  <PrincipleCard
                    principle={principle}
                    index={index}
                    onSelect={handleSelectPrinciple}
                  />
                </Suspense>
              ))}
            </div>
          </div>
          
          {/* Mobile: Display as carousel */}
          <div className="block md:hidden">
            <Carousel 
              items={carouselItems}
              showDots={true}
              showArrows={true}
              enableSwipe={true}
              className="mb-8"
            />
          </div>
          
          {/* Ethos summary in a collapsible section for mobile */}
          <CollapsibleSection
            title="THE RESISTANCE MANIFESTO"
            initiallyExpanded={false}
            maxHeight="120px"
            className="mt-16 md:mt-20 max-w-4xl mx-auto bg-black bg-opacity-70 border border-resistance/20 p-8 rounded-lg"
          >
            <p className="text-gray-300 mb-6">
              These six core principles form the foundation of our resistance movement. They guide our development, define our community, and represent our commitment to reclaiming digital freedom in an age of surveillance capitalism.
            </p>
            <p className="text-gray-300">
              We invite you to join us in building technology that embodies these values—software that serves humanity rather than exploiting it. The resistance grows stronger with every new voice, every new contribution, and every act of digital sovereignty.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {principles.map((principle) => {
                const Icon = principle.icon;
                return (
                  <Tooltip key={principle.title} content={principle.title}>
                    <div 
                      className="p-3 border border-gray-800 rounded-sm text-center cursor-pointer hover:border-resistance transition-colors"
                      onClick={() => handleSelectPrinciple(principle)}
                    >
                      <div className="text-resistance mb-2">
                        <Icon size={20} />
                      </div>
                      <div className="text-xs font-mono">{principle.title}</div>
                    </div>
                  </Tooltip>
                );
              })}
            </div>
          </CollapsibleSection>
        </div>
        
        {/* Principle detail modal */}
        <Suspense fallback={null}>
          <PrincipleDetail 
            principle={selectedPrinciple}
            isOpen={selectedPrinciple !== null}
            onClose={handleClosePrinciple}
          />
        </Suspense>
      </div>
    </Section>
  );
}

export default Proverbs; 