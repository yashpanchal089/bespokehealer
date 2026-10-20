import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faqsData } from '../data/faqs';
import type { FAQItem } from '../data/faqs';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const half = Math.ceil(faqsData.length / 2);
  const leftFaqs = faqsData.slice(0, half);
  const rightFaqs = faqsData.slice(half);

  const renderFaqCard = (faq: FAQItem) => {
    const isOpen = openId === faq.id;

    return (
      <div
        key={faq.id}
        className={`rounded-2xl border transition-all duration-300 bg-softCream overflow-hidden shadow-xs ${
          isOpen
            ? 'border-mutedPurple/60 shadow-md ring-1 ring-secondaryPurple/20'
            : 'border-secondaryPurple/30 hover:border-secondaryPurple/60'
        }`}
      >
        <button
          onClick={() => toggle(faq.id)}
          className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 focus:outline-none cursor-pointer group min-h-[72px]"
          aria-expanded={isOpen}
        >
          <span className="font-editorial text-base sm:text-lg text-brandText font-medium group-hover:text-mutedPurple transition-colors leading-snug">
            {faq.question}
          </span>
          <div
            className={`p-1.5 sm:p-2 rounded-full flex-shrink-0 transition-transform duration-300 ${
              isOpen
                ? 'bg-mutedPurple text-white rotate-180'
                : 'bg-lightLavender/80 text-brandText group-hover:bg-lightLavender'
            }`}
          >
            {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-brandLightText font-light leading-relaxed border-t border-secondaryPurple/15">
                {faq.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-softCream/40 border-t border-secondaryPurple/30">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full lavender-glow pointer-events-none filter blur-3xl opacity-25" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3.5 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-mutedPurple">
            <span>✦</span>
            <span>Clarity &amp; Answers</span>
            <span>✦</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-brandText font-normal">
            Frequently Asked
          </h2>

          <p className="text-sm sm:text-base text-brandLightText font-light">
            Everything you need to know about personal sessions, energy healing, and consecrated crystal boutique orders.
          </p>
        </div>

        {/* Clean, Equal 2-Column Split: 5 Questions Left, 5 Questions Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-start">
          {/* Left Column (5 Questions) */}
          <div className="space-y-4">
            {leftFaqs.map(renderFaqCard)}
          </div>

          {/* Right Column (5 Questions) */}
          <div className="space-y-4">
            {rightFaqs.map(renderFaqCard)}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
