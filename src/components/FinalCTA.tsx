import React from 'react';
import { Sparkles, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/config';

interface FinalCTAProps {
  onBookClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onBookClick }) => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-b from-warmBeige via-lightLavender/40 to-warmBeige">
      {/* Background radial lavender aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full lavender-glow pointer-events-none filter blur-3xl opacity-60" />

      {/* Subtle sacred symbol */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-secondaryPurple text-2xl font-serif select-none pointer-events-none opacity-60">
        ✦
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Small Eyebrow */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-mutedPurple">
          <span>Ready when you are</span>
        </div>

        {/* Large Heading */}
        <h2 className="font-editorial text-5xl sm:text-6xl md:text-7xl text-brandText font-normal leading-tight tracking-tight">
          Your next step starts here.
        </h2>

        <p className="text-base sm:text-lg text-brandLightText font-light max-w-lg mx-auto">
          Step into a quiet harbor of clarity, grounded truth, and personal renewal.
        </p>

        {/* Dual Primary Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-mutedPurple hover:bg-[#9677a5] text-white text-xs font-semibold uppercase tracking-wider shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            <Sparkles className="w-4 h-4 text-lightLavender" />
            <span>Book a Session</span>
          </button>

          <a
            href={getWhatsAppUrl("Hi Dr. Srushti 👋 I am on your website and would love to connect for guidance.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-softCream hover:bg-lightLavender border border-secondaryPurple/50 text-xs font-semibold uppercase tracking-wider text-brandText shadow-md hover:shadow-lg transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp Dr. Srushti</span>
          </a>
        </div>

        {/* Underneath transparent indicator */}
        <div className="pt-2">
          <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-mutedPurple bg-softCream/80 px-4 py-1.5 rounded-full border border-secondaryPurple/30">
            60 Minutes • ₹2,000
          </span>
        </div>

      </div>
    </section>
  );
};
