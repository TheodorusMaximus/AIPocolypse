import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { Terminal, ArrowRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { TerminalWindow } from './hero/TerminalWindow';
import { Section } from './Layout';
import { Tooltip } from './ui/Tooltip';
// Lazy load non-critical components
const DataPackets = lazy(() => import('./hero/DataPackets'));
const SurveillanceGrid = lazy(() => import('./hero/SurveillanceGrid'));
const AudioToggle = lazy(() => import('./hero/AudioToggle').then(mod => ({ default: mod.AudioToggle })));

import '../styles/animations.css';

// Main hero component
export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [isHoveredManifesto, setIsHoveredManifesto] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const initialCommands = [
    "INITIALIZING RESISTANCE PROTOCOL...",
    "SCANNING FOR SURVEILLANCE...",
    "ESTABLISHING SECURE CONNECTION...",
    "ACCESS GRANTED. WELCOME TO AIPOCALYPSE."
  ];

  // Simulate initial load sequence with shorter timeouts for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2800); // Reduced from 4000 for better UX
    return () => clearTimeout(timer);
  }, []);
  
  // Handle ambient audio
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isAudioEnabled) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsAudioEnabled(!isAudioEnabled);
    }
  };
  
  // Handle scroll events to optimize performance
  useEffect(() => {
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
  
  // Scroll to next section
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('tools');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section 
      id="hero" 
      fullHeight={true} 
      snapAlign={true} 
      className="relative flex items-center justify-center overflow-hidden"
    >
      {/* Reference the section ref to the div inside */}
      <div ref={sectionRef} className="w-full h-full">
        {/* Audio element */}
        <audio 
          ref={audioRef} 
          preload="none"
          src="https://example.com/ambient-cyberpunk.mp3" 
          loop 
          className="hidden"
        />
        
        {/* Audio toggle - lazy loaded */}
        <Suspense fallback={null}>
          <AudioToggle isEnabled={isAudioEnabled} onToggle={toggleAudio} />
        </Suspense>

        {/* Background video effect with noise overlay */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Surveillance footage background - lazy load video */}
          <div className="absolute inset-0 bg-black opacity-80">
            <video 
              className="absolute w-full h-full object-cover opacity-30"
              autoPlay 
              muted 
              loop 
              playsInline
              preload="none"
              poster="/surveillance-poster.jpg"
            >
              <source src="/surveillance-loop.mp4" type="video/mp4" />
            </video>
          </div>
          
          {/* Surveillance grid - lazy loaded and only shown when not scrolling */}
          {!isScrolling && (
            <Suspense fallback={null}>
              <SurveillanceGrid />
            </Suspense>
          )}
          
          {/* Data packets animation - lazy loaded and only shown when not scrolling */}
          {!isScrolling && (
            <Suspense fallback={null}>
              <DataPackets />
            </Suspense>
          )}
          
          {/* Reduced noise texture overlay for better performance */}
          <div className="absolute inset-0 bg-noise opacity-3"></div>
          
          {/* Reduced scan lines for better performance */}
          <div className="absolute inset-0 pointer-events-none">
            {Array(40).fill(0).map((_, i) => (
              <div 
                key={i}
                className="w-full h-px bg-white opacity-5"
                style={{ top: `${i * 7.5}px` }}
              ></div>
            ))}
          </div>
        </div>
        
        <AnimatePresence>
          {!isLoaded ? (
            // Loading sequence
            <motion.div 
              className="absolute inset-0 bg-black z-50 flex items-center justify-center"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <TerminalWindow commands={initialCommands} />
            </motion.div>
          ) : null}
        </AnimatePresence>
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center items-center h-full pb-20">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: isLoaded ? 0.2 : 2.8, duration: 0.8 }}
          >
            <div className="flex justify-center items-center mb-6">
              <motion.div 
                className="relative"
                animate={{ 
                  filter: ["drop-shadow(0 0 8px rgba(0, 255, 102, 0.3))", "drop-shadow(0 0 12px rgba(0, 255, 102, 0.6))", "drop-shadow(0 0 8px rgba(0, 255, 102, 0.3))"]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Terminal className="w-16 h-16 text-resistance" />
                
                {/* Decorative elements around the terminal icon - optimized animations */}
                <motion.div 
                  className="absolute -inset-4 border border-resistance rounded-full opacity-30"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                ></motion.div>
                
                <motion.div 
                  className="absolute -inset-8 border border-resistance rounded-full opacity-20"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2],
                    rotate: [0, 90, 0]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                ></motion.div>
              </motion.div>
            </div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-nova font-bold mb-6 text-center leading-tight tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: isLoaded ? 0.4 : 3.0, duration: 0.8 }}
            >
              <div className="relative inline-block">
                <span className="relative z-10 text-white">THEY'RE WATCHING.</span>
                <motion.span 
                  className="absolute inset-0 bg-resistance bg-opacity-20 -skew-x-12 z-0"
                  animate={{ 
                    x: [0, 5, -5, 0],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                ></motion.span>
              </div>
              <br/>
              <div className="relative inline-block mt-2">
                <span className="relative z-10 text-resistance">WE'RE FIGHTING.</span>
                <motion.span 
                  className="absolute inset-0 -skew-x-12 z-0 glitch-effect"
                  animate={{ 
                    x: [-3, 3, -3],
                  }}
                  transition={{ 
                    duration: 0.2, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                ></motion.span>
              </div>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-center mb-8 text-gray-300 font-nova leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: isLoaded ? 0.6 : 3.2, duration: 0.8 }}
            >
              Built by ex-DeepSeek developers who walked away from the machine.
              <br className="hidden md:block" />
              Scribe, Forager, Warden—tools engineered to claw back control.
              <br className="hidden md:block" />
              <Tooltip content="Our token that powers the resistance ecosystem">
                <span className="text-resistance font-medium">$AIPO</span>
              </Tooltip> keeps it ours.
            </motion.p>
            
            {/* Manifesto Block - more compact */}
            <motion.div 
              className="bg-black bg-opacity-60 border-l-4 border-resistance p-4 my-6 max-w-2xl mx-auto transform transition-all duration-300"
              style={{ 
                boxShadow: isHoveredManifesto ? '0 0 20px rgba(0, 255, 102, 0.3)' : 'none',
              }}
              onMouseEnter={() => setIsHoveredManifesto(true)}
              onMouseLeave={() => setIsHoveredManifesto(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: isLoaded ? 0.8 : 3.4, duration: 0.8 }}
            >
              <div className="font-mono text-xs text-gray-500 mb-1">[03.15.2025] — We've seen behind the curtain.</div>
              <div className="space-y-1 font-light text-sm md:text-base">
                <p className="text-white">Their systems learn your patterns.</p>
                <p className="text-white">Their algorithms predict your moves.</p>
                <p className="text-white">Their platforms extract your value.</p>
                <p className="text-resistance font-medium">Not anymore.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="mt-8 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: isLoaded ? 1.0 : 3.6, duration: 0.8 }}
            >
              <motion.button 
                className="group relative overflow-hidden bg-resistance text-black px-8 py-4 rounded-sm font-nova font-bold tracking-wider text-lg flex items-center justify-center min-w-[220px] focus:outline-none focus:ring-2 focus:ring-resistance focus:ring-opacity-50"
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const toolsSection = document.getElementById('tools');
                  if (toolsSection) {
                    toolsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span className="relative z-10 group-hover:text-black transition-colors">ACCESS THE TOOLKIT</span>
                
                {/* Button hover effect */}
                <motion.span 
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                ></motion.span>
                
                {/* Glitch effect on hover */}
                <motion.span 
                  className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity glitch-effect-subtle"
                ></motion.span>
              </motion.button>
              
              <motion.button 
                className="group bg-transparent border border-gray-700 hover:border-resistance text-white px-8 py-4 rounded-sm font-nova font-bold tracking-wider text-lg flex items-center justify-center min-w-[220px] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-resistance focus:ring-opacity-50"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const socialSection = document.getElementById('social');
                  if (socialSection) {
                    socialSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span className="mr-2">JOIN THE RESISTANCE</span>
                <ArrowRight className="w-5 h-5 group-hover:text-resistance transition-colors" />
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Scroll indicator - fixed at bottom */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: isLoaded ? 1.5 : 4.0, duration: 0.8 }}
            onClick={scrollToNextSection}
          >
            <motion.div 
              className="flex flex-col items-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                repeatType: "loop" 
              }}
            >
              <div className="text-xs uppercase tracking-widest mb-2 text-gray-400">Discover</div>
              <ChevronDown className="text-resistance w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}