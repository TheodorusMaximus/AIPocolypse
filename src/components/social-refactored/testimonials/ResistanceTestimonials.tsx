import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  location: string;
}

interface PerformanceProps {
  isMobile: boolean;
  reducedMotion: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Joining the Resistance Network reconnected me with my autonomy in the digital space. Their tools helped me reclaim privacy I thought was lost forever.",
    author: "M. Chen",
    role: "Cybersecurity Researcher",
    location: "Taipei"
  },
  {
    id: 2,
    quote: "The collective wisdom of this community has given me hope that we can build an internet that serves humanity rather than exploits it.",
    author: "L. Kowalski",
    role: "Digital Rights Activist",
    location: "Warsaw"
  },
  {
    id: 3,
    quote: "I found not just tools but a philosophy and community that understands what's at stake in our algorithmic age.",
    author: "J. Okonkwo",
    role: "AI Ethics Advocate",
    location: "Lagos"
  },
  {
    id: 4,
    quote: "We've deployed the network's countermeasures across our entire organization. Our data is finally ours again.",
    author: "S. Reyes",
    role: "NGO Technical Director",
    location: "Mexico City"
  }
];

export const ResistanceTestimonials: React.FC<PerformanceProps> = ({ isMobile, reducedMotion }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex(current => (current + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [autoplay]);
  
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setAutoplay(false);
  };
  
  const animationDuration = reducedMotion ? 0.1 : 0.5;

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: animationDuration }}
      >
        <h3 className="text-xl md:text-2xl font-mono font-bold text-resistance mb-4">VOICES OF THE RESISTANCE</h3>
        <p className="text-gray-400 max-w-2xl mx-auto">
          From researchers to activists, people around the world are using our tools to reclaim digital freedom.
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className="bg-black bg-opacity-50 border border-concrete p-6 rounded-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: animationDuration, 
              delay: reducedMotion ? 0 : index * 0.1 
            }}
          >
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-800 mr-4 overflow-hidden">
                <motion.div
                  className="w-full h-full bg-gradient-to-br from-resistance/30 to-resistance/10"
                  animate={!reducedMotion ? { 
                    background: [
                      "linear-gradient(to bottom right, rgba(0, 255, 102, 0.3), rgba(0, 255, 102, 0.1))",
                      "linear-gradient(to bottom right, rgba(0, 255, 102, 0.1), rgba(0, 255, 102, 0.3))",
                      "linear-gradient(to bottom right, rgba(0, 255, 102, 0.3), rgba(0, 255, 102, 0.1))"
                    ] 
                  } : {}}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
              <div>
                <h4 className="font-bold text-white">{testimonial.author}</h4>
                <p className="text-xs text-gray-400">{testimonial.role} · {testimonial.location}</p>
              </div>
            </div>
            <blockquote className="relative text-sm text-gray-300 italic">
              <span className="text-resistance text-2xl absolute top-0 left-0 transform -translate-x-4 -translate-y-2">"</span>
              {testimonial.quote}
              <span className="text-resistance text-2xl absolute bottom-0 right-0 transform translate-x-2 translate-y-1">"</span>
            </blockquote>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="text-center mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: animationDuration, delay: reducedMotion ? 0.1 : 0.8 }}
      >
        <a href="#" className="text-resistance hover:underline text-sm inline-flex items-center">
          <span>Read more testimonials</span>
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </motion.div>
    </div>
  );
};

export default ResistanceTestimonials; 