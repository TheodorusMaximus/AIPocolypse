import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle } from 'lucide-react';
import { Principle } from '../../data/principles';

interface PrincipleDetailProps {
  principle: Principle | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PrincipleDetail: React.FC<PrincipleDetailProps> = ({ principle, isOpen, onClose }) => {
  if (!principle) return null;

  // Destructure principle object
  const { icon: Icon, title, explanation, application, antithesis } = principle;
  // Note: color is available from principle but not used in this component yet
  // It could be used for styling in future iterations

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Content */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <div className="w-full max-w-4xl bg-black border border-gray-800 rounded-md shadow-xl relative overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Header */}
                <div className="border-b border-gray-800 flex items-center justify-between p-4 bg-void col-span-2">
                  <div className="flex items-center space-x-3">
                    <div className="text-resistance bg-resistance bg-opacity-10 p-2 rounded">
                      <Icon size={20} />
                    </div>
                    <h2 className="text-xl font-bold text-white">{title}</h2>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Close dialog"
                  >
                    <XCircle size={24} />
                  </button>
                </div>

                {/* Manifesto/Philosophy */}
                <div className="p-6 col-span-2 md:col-span-1 border-r border-gray-800">
                  <h3 className="text-lg font-mono text-resistance mb-4">THE MANIFESTO</h3>
                  <div className="prose prose-sm prose-invert">
                    <p className="text-gray-300 leading-relaxed">{explanation}</p>
                  </div>
                </div>

                {/* Practical Application */}
                <div className="p-6 col-span-2 md:col-span-1">
                  <h3 className="text-lg font-mono text-resistance mb-4">PRACTICAL APPLICATION</h3>
                  <div className="prose prose-sm prose-invert">
                    <ul className="text-gray-300 leading-relaxed list-disc pl-5 space-y-2">
                      {application.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <h3 className="text-lg font-mono text-resistance mt-6 mb-4">BEWARE THE ANTITHESIS</h3>
                  <div className="bg-red-900 bg-opacity-20 border border-red-800 rounded p-4">
                    <ul className="text-gray-300 text-sm list-disc pl-5 space-y-2">
                      {antithesis.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Footer */}
                <div className="border-t border-gray-800 p-3 col-span-2 bg-void flex justify-end">
                  <span className="text-xs text-gray-500">RESISTANCE PRINCIPLE v1.0</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PrincipleDetail;