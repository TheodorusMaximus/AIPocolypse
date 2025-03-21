import React, { useState, useRef, useEffect } from 'react';
import { AlertTriangle, HelpCircle, Send, ChevronDown, ChevronUp, Shield, Cpu, Coins, Code, Lock, Database, Search, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { faqData } from '../data/faq';
import { FAQItem } from './faq/FAQItem';
import { CategoryTabs } from './faq/CategoryTabs';
import { TerminalSearch } from './faq/TerminalSearch';
import { CircuitDecoration } from './faq/CircuitDecoration';
import { QuickStats } from './faq/QuickStats';
import { RecentQuestions } from './faq/RecentQuestions';
import { AskQuestionForm } from './faq/AskQuestionForm';
import { SecurityWarning } from './faq/SecurityWarning';
import { CommunitySupport } from './faq/CommunitySupport';
import { DiagonalDivider } from './shared/DiagonalDivider';

// Main FAQ component
export function FAQ() {
  const [activeCategory, setActiveCategory] = useState('privacy');
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const [expandAll, setExpandAll] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const filteredFaqs = faqData.faqs.filter(faq => 
    activeCategory === 'all' || faq.category === activeCategory
  );
  
  const handleToggle = (id: string): void => {
    setActiveFaq(activeFaq === id ? null : id);
    setExpandAll(false);
  };
  
  const handleExpandAll = () => {
    setExpandAll(!expandAll);
    setActiveFaq(null);
  };
  
  const handleSelectCategory = (categoryId: string): void => {
    setActiveCategory(categoryId);
    setActiveFaq(null);
    setExpandAll(false);
  };
  
  const handleSearchSelect = (faqId: string): void => {
    const faq = faqData.faqs.find(f => f.id === faqId);
    if (faq) {
      setActiveCategory(faq.category);
      setActiveFaq(faqId);
      
      // Scroll to the selected FAQ
      const element = document.getElementById(`faq-${faqId}`);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
      }
    }
  };
  
  useEffect(() => {
    // Reset active FAQ when category changes
    setActiveFaq(null);
    setExpandAll(false);
  }, [activeCategory]);
  
  return (
    <section ref={sectionRef} className="relative py-24 bg-black overflow-hidden" id="faq">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-5"></div>
      <CircuitDecoration />
      
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
      
      <div className="container mx-auto px-4 relative z-10">
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
              <span className="relative z-10">QUESTIONS FROM THE TRENCHES</span>
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
            className="text-center text-xl md:text-2xl text-gray-300 mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>
              Common questions from the resistance. Direct answers, no corporate speak.
            </p>
          </motion.div>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <motion.div 
              className="bg-shadow rounded-sm border border-concrete overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Header with category tabs */}
              <div className="border-b border-concrete p-4">
                <CategoryTabs 
                  categories={[
                    { id: 'all', name: 'ALL QUESTIONS', icon: HelpCircle },
                    ...faqData.categories
                  ]} 
                  activeCategory={activeCategory}
                  onSelectCategory={handleSelectCategory}
                />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-400 text-sm">
                    <AlertTriangle size={14} className="mr-2 text-resistance" />
                    <span>
                      Showing {filteredFaqs.length} of {faqData.faqs.length} questions
                    </span>
                  </div>
                  
                  <button 
                    onClick={handleExpandAll}
                    className="text-resistance text-sm font-mono flex items-center hover:underline"
                  >
                    {expandAll ? (
                      <>
                        <ChevronUp size={14} className="mr-2" />
                        COLLAPSE ALL
                      </>
                    ) : (
                      <>
                        <ChevronDown size={14} className="mr-2" />
                        EXPAND ALL
                      </>
                    )}
                  </button>
                </div>
              </div>
              
              {/* FAQ list */}
              <div className="divide-y divide-concrete">
                {filteredFaqs.map((faq, index) => (
                  <div key={faq.id} id={`faq-${faq.id}`}>
                    <FAQItem 
                      faq={faq}
                      isActive={expandAll || activeFaq === faq.id}
                      onToggle={() => handleToggle(faq.id)}
                      index={index}
                    />
                  </div>
                ))}
              </div>
              
              {/* Ask a question form */}
              <div className="p-6 border-t border-concrete bg-black bg-opacity-40">
                <h3 className="text-lg font-mono font-bold mb-4 text-gray-300">CAN'T FIND AN ANSWER?</h3>
                <div className="flex items-start">
                  <input 
                    type="text" 
                    placeholder="Ask the resistance..." 
                    className="flex-1 bg-black bg-opacity-60 border border-concrete px-4 py-3 text-gray-300 placeholder-gray-500 focus:border-resistance transition-colors outline-none"
                  />
                  <button className="bg-resistance text-black ml-3 px-4 py-3 font-mono flex items-center">
                    <Send size={16} className="mr-2" />
                    SUBMIT
                  </button>
                </div>
              </div>
              
              {/* Security warning */}
              <div className="bg-black bg-opacity-60 p-4 text-xs text-gray-500 flex items-center">
                <Lock size={12} className="mr-2 text-resistance" />
                <span>All questions are submitted through encrypted channels and stripped of metadata.</span>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-1 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* Search terminal */}
              <TerminalSearch faqs={faqData.faqs} onSelect={handleSearchSelect} />
              
              {/* Stats and Recent Questions */}
              <div className="mt-6 bg-black bg-opacity-60 border border-concrete p-6 rounded-sm">
                <h3 className="font-mono font-bold mb-4 flex items-center">
                  <Database size={16} className="text-resistance mr-2" />
                  <span>KNOWLEDGE BASE STATS</span>
                </h3>
                
                <QuickStats stats={[
                  { value: String(faqData.faqs.length), label: 'Questions Answered' },
                  { value: '24hrs', label: 'Average Response Time' },
                  { value: '97%', label: 'Resolution Rate' },
                  { value: '132', label: 'Contributors' }
                ]} />
              </div>
              
              {/* Recent Questions */}
              <div className="mt-6 bg-black bg-opacity-60 border border-concrete p-6 rounded-sm">
                <h3 className="font-mono font-bold mb-4 flex items-center">
                  <Database size={16} className="text-resistance mr-2" />
                  <span>RECENTLY ADDED</span>
                </h3>
                
                <RecentQuestions 
                  faqs={faqData.faqs.slice(5, 8)} 
                  onSelect={handleSearchSelect} 
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Community support CTA */}
        <motion.div 
          className="mt-16 max-w-4xl mx-auto text-center p-8 border border-concrete bg-black bg-opacity-60 rounded-sm relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
        </motion.div>
        {/* Animated circuit background */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#00FF66" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
          </svg>
        </div>

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <CommunitySupport />
        </motion.div>
      </div>
      {/* Diagonal section divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden pointer-events-none">
        <svg 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none" 
          className="absolute bottom-0 left-0 w-full h-full"
        >
          <DiagonalDivider />
        </svg>
      </div>
    </section>
  );
}