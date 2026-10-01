import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, RotateCcw } from 'lucide-react';
import { tarotExperienceCards } from '../data/tarotCards';

interface TarotExperienceProps {
  onBookClick: () => void;
}

export const TarotExperience: React.FC<TarotExperienceProps> = ({ onBookClick }) => {
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const activeCard = tarotExperienceCards.find((c) => c.id === selectedCardId);

  const handleCardClick = (id: string) => {
    setSelectedCardId(id);
  };

  const handleReset = () => {
    setSelectedCardId(null);
  };

  return (
    <section id="tarot-experience" className="py-24 relative overflow-hidden bg-grain">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full lavender-glow pointer-events-none filter blur-3xl opacity-50" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-mutedPurple">
            <span>✦</span>
            <span>Interactive Divination</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-brandText font-normal">
            Choose what calls you.
          </h2>

          <p className="text-sm sm:text-base text-brandLightText font-light max-w-md">
            Take a deep breath. Focus on what currently sits in your heart, then tap the card that resonates.
          </p>
        </div>

        {/* 3 Face-Down Tarot Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 max-w-4xl mx-auto perspective-1000">
          {tarotExperienceCards.map((card, idx) => {
            const isFlipped = selectedCardId === card.id;
            const isAnotherSelected = selectedCardId !== null && !isFlipped;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className={`cursor-pointer transition-all duration-500 ${
                  isAnotherSelected ? 'opacity-40 scale-95' : 'hover:scale-[1.02]'
                }`}
                onClick={() => handleCardClick(card.id)}
              >
                {/* 3D Flip Container */}
                <div
                  className={`relative w-full aspect-[9/15] rounded-3xl transform-style-preserve-3d transition-transform duration-700 shadow-xl ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  
                  {/* CARD BACK (Face-Down) */}
                  <div className="absolute inset-0 backface-hidden rounded-3xl p-4 sm:p-5 bg-gradient-to-b from-[#FAF6F0] to-[#EFE5F5] border-2 border-secondaryPurple/50 shadow-2xl flex flex-col justify-between overflow-hidden">
                    {/* Intricate Inner Ornamental Border */}
                    <div className="w-full h-full rounded-2xl border border-secondaryPurple/40 p-4 flex flex-col justify-between items-center relative">
                      <div className="flex justify-between w-full text-secondaryPurple text-xs">
                        <span>✦</span>
                        <span>☾</span>
                        <span>✦</span>
                      </div>

                      {/* Center Sacred Geometry Medallion */}
                      <div className="flex flex-col items-center space-y-3">
                        <div className="w-20 h-20 rounded-full border border-secondaryPurple/60 flex items-center justify-center bg-white/40 shadow-inner group">
                          <span className="font-editorial text-2xl text-mutedPurple">
                            {idx === 0 ? 'I' : idx === 1 ? 'II' : 'III'}
                          </span>
                        </div>
                        <span className="text-[10px] tracking-[0.3em] uppercase text-brandLightText font-mono">
                          Bespoke Tarot
                        </span>
                      </div>

                      <div className="text-center">
                        <span className="inline-block px-3 py-1 rounded-full bg-lightLavender/60 text-[10px] font-semibold tracking-widest uppercase text-brandText">
                          Tap to Reveal
                        </span>
                      </div>

                      <div className="flex justify-between w-full text-secondaryPurple text-xs">
                        <span>✦</span>
                        <span>☾</span>
                        <span>✦</span>
                      </div>
                    </div>
                  </div>

                  {/* CARD FRONT (Revealed / Face-Up) */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl p-5 bg-softCream border-2 border-mutedPurple/60 shadow-2xl flex flex-col justify-between overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between text-xs text-brandLightText border-b border-secondaryPurple/30 pb-2">
                      <span className="font-mono tracking-widest text-mutedPurple">{card.romanNumeral}</span>
                      <span className="text-[10px] uppercase tracking-wider">{card.element}</span>
                    </div>

                    {/* Artwork / Archetype Symbol */}
                    <div className="my-2 relative rounded-2xl overflow-hidden aspect-[4/3] border border-secondaryPurple/30 bg-warmBeige">
                      <img
                        src={card.cardImage}
                        alt={card.name}
                        className="w-full h-full object-cover filter contrast-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-softCream via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-3 right-3 text-center">
                        <p className="font-editorial text-xl text-brandText font-medium">
                          {card.name}
                        </p>
                      </div>
                    </div>

                    {/* Reflective Message */}
                    <div className="space-y-2 text-center my-auto px-1">
                      <p className="font-editorial italic text-base text-brandText leading-snug">
                        "{card.reflection}"
                      </p>
                      <p className="text-[11px] text-mutedPurple font-medium tracking-wide">
                        {card.actionGuidance}
                      </p>
                    </div>

                    {/* Card Footer Badge */}
                    <div className="text-center pt-2 border-t border-secondaryPurple/20">
                      <span className="text-[9px] uppercase tracking-[0.25em] text-brandLightText">
                        {card.archetype}
                      </span>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Revealed Reflection Bar & CTAs */}
        <AnimatePresence>
          {activeCard && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-14 p-6 sm:p-8 rounded-3xl glass-card border border-secondaryPurple/50 max-w-2xl mx-auto text-center space-y-5 shadow-xl"
            >
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-mutedPurple">
                <span>✦ Reflection Unveiled</span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl text-brandText font-normal">
                {activeCard.name} — {activeCard.archetype}
              </h3>

              <p className="text-sm text-brandLightText leading-relaxed">
                "{activeCard.reflection}" Ready to uncover deeper layers of what the cards hold for your personal path?
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <button
                  onClick={onBookClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-mutedPurple hover:bg-[#9677a5] text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Book a Tarot Session</span>
                </button>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-warmBeige hover:bg-lightLavender text-xs font-medium tracking-wider uppercase text-brandText transition-all border border-secondaryPurple/40"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Choose Another Card</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
