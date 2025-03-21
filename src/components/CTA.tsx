import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Mail, AlertTriangle, Lock } from 'lucide-react';

export function CTA() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      // Simulate form submission
      setIsSubmitted(true);
    }
  };
  
  return (
    <section ref={sectionRef} className="relative py-24 bg-black overflow-hidden" id="join">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-5"></div>
      
      {/* Grid background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="w-full h-full" width="100%" height="100%">
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#00FF66" strokeWidth="0.2" strokeOpacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      </div>
      
      {/* Scan lines */}
      <div className="absolute inset-0 pointer-events-none">
        {Array(40).fill(0).map((_, i) => (
          <div 
            key={i}
            className="w-full h-px bg-white opacity-5"
            style={{ top: `${i * 24}px` }}
          ></div>
        ))}
      </div>
      
      {/* Warning banner at top */}
      <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-center overflow-hidden">
        <div className="relative flex items-center space-x-16 animate-scroll-left">
          {Array(10).fill().map((_, i) => (
            <div key={i} className="flex items-center text-resistance font-mono text-xs opacity-40">
              <AlertTriangle size={12} className="mr-2" />
              <span>SECURE YOUR FUTURE // JOIN THE RESISTANCE</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto mb-12 text-center"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-resistance w-16 opacity-50"></div>
            <motion.h2 
              className="text-4xl md:text-5xl font-nova font-bold px-6 relative"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="relative z-10">READY TO BREAK FREE?</span>
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
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 font-nova"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The resistance launches soon. Secure your place on the frontlines.
          </motion.p>
        </motion.div>

        <motion.div 
          className="bg-black bg-opacity-50 border border-concrete max-w-lg mx-auto rounded-sm p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Animated circuit decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[
              { x: 0, y: "30%" }, { x: "100%", y: "30%" },
              { x: "30%", y: 0 }, { x: "30%", y: "100%" },
              { x: "70%", y: 0 }, { x: "70%", y: "100%" }
            ].map((point, i) => (
              <motion.div 
                key={i}
                className="absolute w-1 h-1 bg-resistance rounded-full opacity-20"
                style={{ left: point.x, top: point.y }}
                animate={{ 
                  opacity: [0.2, 0.5, 0.2],
                  scale: [1, 1.5, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              />
            ))}
            {[
              { x1: 0, y1: "30%", x2: "100%", y2: "30%" },
              { x1: "30%", y1: 0, x2: "30%", y2: "100%" },
              { x1: "70%", y1: 0, x2: "70%", y2: "100%" }
            ].map((line, i) => (
              <svg 
                key={i} 
                className="absolute inset-0 w-full h-full"
                style={{ zIndex: -1 }}
              >
                <motion.line 
                  x1={line.x1} 
                  y1={line.y1} 
                  x2={line.x2} 
                  y2={line.y2} 
                  stroke="#00FF66" 
                  strokeWidth="1" 
                  strokeOpacity="0.1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: i * 0.3 }}
                />
              </svg>
            ))}
          </div>
          
          {!isSubmitted ? (
            <>
              <div className="flex items-center mb-4">
                <div className="mr-3 w-2 h-2 bg-resistance rounded-full animate-pulse"></div>
                <h3 className="text-xl font-mono font-bold text-white">JOIN THE WAITLIST</h3>
              </div>
              <p className="text-gray-400 mb-6">Be among the first to access our tools when we launch. No spam, just resistance updates.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-resistance" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="bg-black border border-concrete text-gray-300 pl-10 py-3 px-4 w-full focus:border-resistance transition-colors outline-none rounded-sm"
                  />
                </div>
                
                <motion.button 
                  type="submit"
                  className="w-full bg-resistance text-black font-mono font-bold py-3 rounded-sm flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  SECURE YOUR PLACE
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </form>
              
              <div className="flex items-center mt-4 text-xs text-gray-500">
                <Lock className="h-3 w-3 mr-1" />
                <span>Encrypted submission. Zero tracking.</span>
              </div>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 mx-auto bg-resistance bg-opacity-10 rounded-full flex items-center justify-center mb-4 border border-resistance">
                <Lock className="h-8 w-8 text-resistance" />
              </div>
              <h3 className="text-xl font-mono font-bold text-white mb-2">YOU'RE IN THE NETWORK</h3>
              <p className="text-gray-400 mb-4">Your secure channel has been established. Watch for transmission.</p>
              <div className="text-xs text-resistance font-mono">TRANSMISSION ID: {Math.floor(Math.random() * 90000) + 10000}</div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}