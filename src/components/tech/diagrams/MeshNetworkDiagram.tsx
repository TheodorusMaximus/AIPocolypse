import React from 'react';
import { motion } from 'framer-motion';

export const MeshNetworkDiagram: React.FC = () => {
  return (
    <svg viewBox="0 0 200 100" className="w-full h-full">
      {/* Network nodes */}
      {[
        {x: 100, y: 50}, // Center
        {x: 40, y: 30}, {x: 50, y: 70}, {x: 150, y: 30}, 
        {x: 160, y: 70}, {x: 70, y: 20}, {x: 130, y: 80}
      ].map((node, i) => (
        <motion.circle 
          key={i}
          cx={node.x} cy={node.y} r="5"
          fill="#00FF66" fillOpacity="0.8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
        />
      ))}
      
      {/* Network connections */}
      {[
        {from: {x: 100, y: 50}, to: {x: 40, y: 30}},
        {from: {x: 100, y: 50}, to: {x: 50, y: 70}},
        {from: {x: 100, y: 50}, to: {x: 150, y: 30}},
        {from: {x: 100, y: 50}, to: {x: 160, y: 70}},
        {from: {x: 40, y: 30}, to: {x: 70, y: 20}},
        {from: {x: 70, y: 20}, to: {x: 150, y: 30}},
        {from: {x: 50, y: 70}, to: {x: 160, y: 70}},
        {from: {x: 160, y: 70}, to: {x: 130, y: 80}},
        {from: {x: 50, y: 70}, to: {x: 130, y: 80}}
      ].map((conn, i) => (
        <motion.line 
          key={i}
          x1={conn.from.x} y1={conn.from.y}
          x2={conn.to.x} y2={conn.to.y}
          stroke="#00FF66" strokeWidth="1" strokeOpacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1 + i * 0.1 }}
        />
      ))}
      
      {/* Data packet */}
      <motion.circle 
        cx="100" cy="50" r="3"
        fill="#FFFFFF"
        animate={{ 
          cx: [100, 40, 70, 150, 160, 130],
          cy: [50, 30, 20, 30, 70, 80]
        }}
        transition={{ 
          duration: 4, 
          delay: 2,
          times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </svg>
  );
};

export default MeshNetworkDiagram; 