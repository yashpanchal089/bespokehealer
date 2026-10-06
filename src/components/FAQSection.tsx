import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faqsData } from '../data/faqs';
import type { FAQItem } from '../data/faqs';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqsData[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const leftFaqs = faqsData.slice(0, 5);
  const rightFaqs = faqsData.slice(5, 10);

  const renderFaqCard = (faq: FAQItem) => {
    const isOpen = openId === faq.id;

    return (
      <div
        key={faq.id}
        className="rounded-2xl border border-secondaryPurple/30 bg-softCream overflow-hidden transition-all duration-300 shadow-xs hover:border-secondaryPurple/50"
      >
        <button
          onClick={() => toggle(faq.id)}
          className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 focus:outline-none cursor-pointer group"
          aria-expanded={isOpen}
        >
          <span className="font-editorial text-lg sm:text-xl text-brandText font-medium group-hover:text-mutedPurple transition-colors leading-snug">
            {faq.question}
          </span>
          <div className={`p-2 rounded-full flex-shrink-0 transition-transform duration-300 ${isOpen ? 'bg-mutedPurple text-white' : 'bg-lightLavender/70 text-brandText group-hover:bg-lightLavender'}`}>
            {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-sm text-brandLightText font-light leading-relaxed border-t border-secondaryPurple/20">
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-mutedPurple">
            <span>✦</span>
            <span>Clarity & Answers</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-brandText font-normal">
            You may be wondering...
          </h2>

          <p className="text-sm sm:text-base text-brandLightText font-light max-w-md">
            Common questions regarding bookings, energy sessions, and crystal orders.
          </p>
        </div>

        {/* 2-Column Split: 5 Questions Left, 5 Questions Right */}
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
