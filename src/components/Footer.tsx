import React from 'react';
import { Github as GitHub, Shield, Code, Terminal, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <>
      {/* Diagonal divider */}
      <div className="relative h-16 overflow-hidden">
        <svg 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none" 
          className="absolute inset-0 w-full h-full"
        >
          <path 
            d="M0,0 L100,40 L100,100 L0,100 Z" 
            fill="#1A1A1A"
          />
          <path 
            d="M0,0 L100,40 L100,42 L0,2 Z" 
            fill="#00FF66"
            fillOpacity="0.1"
          />
        </svg>
      </div>
      
      {/* Main footer */}
      <footer className="bg-black bg-opacity-80 relative">
        {/* Circuit pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="footerGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00FF66" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footerGrid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand column */}
            <div className="col-span-1">
              <div className="font-nova text-resistance font-bold text-xl mb-4 flex items-center">
                <Terminal className="mr-2 h-5 w-5" />
                AIPOCALYPSE
              </div>
              <p className="text-gray-400 mb-4 font-nova">Built by renegades.<br />Owned by you.</p>
              
              <div className="flex space-x-4 mt-4">
                <motion.a 
                  href="#" 
                  className="text-gray-500 hover:text-resistance transition-colors"
                  aria-label="GitHub"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <GitHub className="h-5 w-5" />
                </motion.a>
                {/* Placeholder for additional social icons */}
                <div className="w-5 h-5 rounded-full border border-dashed border-gray-700"></div>
                <div className="w-5 h-5 rounded-full border border-dashed border-gray-700"></div>
              </div>
            </div>
            
            {/* Links columns */}
            <div className="col-span-1">
              <h3 className="text-sm font-mono text-resistance mb-4 flex items-center">
                <Shield className="mr-2 h-4 w-4" />
                TOOLS
              </h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-resistance transition-colors text-sm flex items-center">SCRIBE <ArrowUpRight className="ml-1 h-3 w-3 opacity-50" /></a></li>
                <li><a href="#" className="text-gray-400 hover:text-resistance transition-colors text-sm flex items-center">FORAGER <ArrowUpRight className="ml-1 h-3 w-3 opacity-50" /></a></li>
                <li><a href="#" className="text-gray-400 hover:text-resistance transition-colors text-sm flex items-center">WARDEN <ArrowUpRight className="ml-1 h-3 w-3 opacity-50" /></a></li>
              </ul>
            </div>
            
            <div className="col-span-1">
              <h3 className="text-sm font-mono text-resistance mb-4 flex items-center">
                <Code className="mr-2 h-4 w-4" />
                RESOURCES
              </h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-resistance transition-colors text-sm flex items-center">Documentation <ArrowUpRight className="ml-1 h-3 w-3 opacity-50" /></a></li>
                <li><a href="#" className="text-gray-400 hover:text-resistance transition-colors text-sm flex items-center">GitHub <ArrowUpRight className="ml-1 h-3 w-3 opacity-50" /></a></li>
                <li><a href="#" className="text-gray-400 hover:text-resistance transition-colors text-sm flex items-center">Token <ArrowUpRight className="ml-1 h-3 w-3 opacity-50" /></a></li>
              </ul>
            </div>
            
            <div className="col-span-1">
              <h3 className="text-sm font-mono text-resistance mb-4 flex items-center">
                <span className="mr-2 w-4 h-4 border border-resistance flex items-center justify-center text-xs">Ω</span>
                LEGAL
              </h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-resistance transition-colors text-sm flex items-center">Privacy <ArrowUpRight className="ml-1 h-3 w-3 opacity-50" /></a></li>
                <li><a href="#" className="text-gray-400 hover:text-resistance transition-colors text-sm flex items-center">Security <ArrowUpRight className="ml-1 h-3 w-3 opacity-50" /></a></li>
                <li><a href="#" className="text-gray-400 hover:text-resistance transition-colors text-sm flex items-center">Terms <ArrowUpRight className="ml-1 h-3 w-3 opacity-50" /></a></li>
              </ul>
            </div>
          </div>
          
          {/* Separator line with circuit node style */}
          <div className="my-8 border-t border-gray-800 relative">
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-resistance bg-black flex items-center justify-center">
              <div className="w-1 h-1 bg-resistance rounded-full"></div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center text-gray-600 text-xs">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
              <span>© 2025 AIPOCALYPSE</span>
              <span className="hidden md:block text-gray-700">|</span>
              <span>The resistance is decentralized</span>
              <span className="hidden md:block text-gray-700">|</span>
              <span>No corporate backing. No venture capital. Just us.</span>
            </div>
            
            <div className="mt-4 flex justify-center">
              <span className="px-3 py-1 text-xxs bg-black bg-opacity-30 border border-gray-800 rounded font-mono text-gray-500">
                {`// TRANSMISSION ENDS //`}
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}