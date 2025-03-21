import React from 'react';
import { motion } from 'framer-motion';

interface PerformanceProps {
  isMobile: boolean;
  reducedMotion: boolean;
}

const NetworkVisualization: React.FC<PerformanceProps> = ({ isMobile, reducedMotion }) => {
  // Network nodes configuration
  const nodes = [
    { id: 'node1', cx: 150, cy: 100, r: 10 },
    { id: 'node2', cx: 300, cy: 90, r: 8 },
    { id: 'node3', cx: 450, cy: 150, r: 12 },
    { id: 'node4', cx: 320, cy: 240, r: 9 },
    { id: 'node5', cx: 180, cy: 210, r: 7 },
    { id: 'node6', cx: 120, cy: 300, r: 8 },
    { id: 'node7', cx: 410, cy: 330, r: 9 },
    { id: 'node8', cx: 250, cy: 380, r: 10 }
  ];
  
  // Connection path for nodes
  const connections = [
    'M150,100 L300,90',
    'M300,90 L450,150',
    'M450,150 L320,240',
    'M320,240 L180,210',
    'M180,210 L150,100',
    'M180,210 L120,300',
    'M320,240 L410,330',
    'M410,330 L250,380',
    'M250,380 L120,300',
    'M450,150 L410,330'
  ];
  
  // Define point-to-point connections for simplified animations
  const dataLines = [
    { start: nodes[0], end: nodes[1] },
    { start: nodes[1], end: nodes[2] },
    { start: nodes[2], end: nodes[3] },
    { start: nodes[3], end: nodes[4] },
    { start: nodes[4], end: nodes[0] },
    { start: nodes[4], end: nodes[5] }
  ];

  // Reduce animation complexity on mobile
  const reducedNodeCount = isMobile ? 6 : 8;
  const activeNodes = nodes.slice(0, reducedNodeCount);
  
  return (
    <div className="w-full h-[300px] md:h-[400px]">
      <svg className="w-full h-full" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid meet">
        {/* Connection lines */}
        {connections.map((d, i) => (
          <motion.path
            key={`conn-${i}`}
            d={d}
            stroke="#00FF66"
            strokeWidth={1.5}
            strokeOpacity={0.5}
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ 
              duration: reducedMotion ? 0.1 : 2, 
              delay: reducedMotion ? 0 : i * 0.2, 
              ease: "easeInOut" 
            }}
          />
        ))}
        
        {/* Network nodes */}
        {activeNodes.map(node => (
          <motion.circle
            key={node.id}
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill="#00FF66"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 0.8,
              filter: [
                "drop-shadow(0 0 2px rgba(0, 255, 102, 0.5))",
                "drop-shadow(0 0 5px rgba(0, 255, 102, 0.8))",
                "drop-shadow(0 0 2px rgba(0, 255, 102, 0.5))"
              ]
            }}
            transition={{ 
              duration: reducedMotion ? 0.1 : 1, 
              delay: reducedMotion ? 0 : Math.random() * 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: Math.random() * 2 + 1
            }}
          />
        ))}
        
        {/* Data packets - Using simple point-to-point animations instead of path */}
        {!reducedMotion && dataLines.slice(0, isMobile ? 2 : dataLines.length).map((line, index) => (
          <React.Fragment key={`data-line-${index}`}>
            {[0, 1, 2].map((offset, i) => (
              <motion.circle
                key={`data-${index}-${i}`}
                r={3}
                fill="#FFFFFF"
                filter="drop-shadow(0 0 5px rgba(255, 255, 255, 0.8))"
                initial={{ 
                  cx: line.start.cx, 
                  cy: line.start.cy,
                  opacity: 0
                }}
                animate={{ 
                  cx: [line.start.cx, line.end.cx],
                  cy: [line.start.cy, line.end.cy],
                  opacity: [0, 0.8, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5 + i * 1.5,
                  ease: "linear",
                  times: [0, 0.5, 1]
                }}
              />
            ))}
          </React.Fragment>
        ))}
      </svg>
    </div>
  );
};

export default NetworkVisualization; 