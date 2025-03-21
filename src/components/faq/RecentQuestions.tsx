import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface RecentQuestionsProps {
  faqs: {
    id: string;
    question: string;
  }[];
  onSelect: (id: string) => void;
}

export function RecentQuestions({ faqs, onSelect }: RecentQuestionsProps) {
  return (
    <ul className="space-y-3">
      {faqs.map((faq, index) => (
        <motion.li
          key={faq.id}
          className="pb-3 border-b border-concrete border-dashed last:border-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <button 
            className="text-left hover:text-resistance transition-colors text-sm flex items-start w-full"
            onClick={() => onSelect(faq.id)}
          >
            <ChevronRight size={14} className="text-resistance mr-2 mt-1 flex-shrink-0" />
            <span>{faq.question}</span>
          </button>
        </motion.li>
      ))}
    </ul>
  );
}