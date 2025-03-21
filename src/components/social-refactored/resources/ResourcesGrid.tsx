import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Book, Video, Users, Code, Shield } from 'lucide-react';

interface PerformanceProps {
  isMobile: boolean;
  reducedMotion: boolean;
}

const resources = [
  {
    id: 1,
    title: "Resistance Manifesto",
    description: "Our foundational document outlining the principles and goals of the movement.",
    icon: <FileText className="text-resistance w-5 h-5" />,
    label: "PDF Document",
    link: "#manifesto"
  },
  {
    id: 2,
    title: "Privacy Toolkit Guide",
    description: "Comprehensive guide to using all resistance tools for maximum privacy.",
    icon: <Book className="text-resistance w-5 h-5" />,
    label: "Guide",
    link: "#privacy-toolkit"
  },
  {
    id: 3,
    title: "Tool Implementation Tutorials",
    description: "Video walkthroughs for setting up and configuring our tools.",
    icon: <Video className="text-resistance w-5 h-5" />,
    label: "Video Series",
    link: "#tutorials"
  },
  {
    id: 4,
    title: "Community Forums",
    description: "Connect with other resistance members, share insights and get help.",
    icon: <Users className="text-resistance w-5 h-5" />,
    label: "Community",
    link: "#forums"
  },
  {
    id: 5,
    title: "Developer Documentation",
    description: "Technical documentation and APIs for contributing to our tools.",
    icon: <Code className="text-resistance w-5 h-5" />,
    label: "Documentation",
    link: "#docs"
  },
  {
    id: 6,
    title: "Security Advisories",
    description: "Latest security information and updates for resistance tools.",
    icon: <Shield className="text-resistance w-5 h-5" />,
    label: "Security",
    link: "#security"
  }
];

const ResourcesGrid: React.FC<PerformanceProps> = ({ isMobile, reducedMotion }) => {
  // Adjust resources shown on mobile
  const displayedResources = isMobile ? resources.slice(0, 4) : resources;
  const animationDuration = reducedMotion ? 0.1 : 0.5;
  
  return (
    <div className="max-w-6xl mx-auto">
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: animationDuration }}
      >
        <h3 className="text-xl md:text-2xl font-mono font-bold text-resistance mb-4">RESISTANCE RESOURCES</h3>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Essential tools, guides, and community resources to support your journey.
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedResources.map((resource, index) => (
          <motion.a
            key={resource.id}
            href={resource.link}
            className="bg-black bg-opacity-50 border border-concrete hover:border-resistance p-6 rounded-sm transition-colors group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: animationDuration, 
              delay: reducedMotion ? 0 : index * 0.1 
            }}
          >
            <div className="flex items-center mb-4">
              {resource.icon}
              <span className="text-xs text-gray-500 ml-2 px-2 py-1 bg-black bg-opacity-50 rounded">
                {resource.label}
              </span>
            </div>
            <h4 className="text-lg font-medium text-white mb-2 group-hover:text-resistance transition-colors">
              {resource.title}
            </h4>
            <p className="text-sm text-gray-400">
              {resource.description}
            </p>
          </motion.a>
        ))}
      </div>
      
      {isMobile && (
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: animationDuration, delay: 0.6 }}
        >
          <a href="#all-resources" className="text-resistance hover:underline text-sm inline-flex items-center">
            <span>View all resources</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      )}
    </div>
  );
};

export default ResourcesGrid; 