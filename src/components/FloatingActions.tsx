import React, { useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../data/config';

export const FloatingActions: React.FC = () => {
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);

  const cleanPhone = siteConfig.displayPhoneNumber.replace(/\s+/g, '');

  return (
    <>
      {/* LEFT BOTTOM: Floating Call Button */}
      <div
        className="fixed bottom-6 left-6 z-40 flex items-center"
        onMouseEnter={() => setHoverLeft(true)}
        onMouseLeave={() => setHoverLeft(false)}
      >
        <a
          href={`tel:${cleanPhone}`}
          aria-label="Call Dr. Srushti Garg"
          className="relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#FBF8F3] border border-secondaryPurple/50 text-brandText shadow-lg hover:shadow-xl hover:bg-lightLavender hover:scale-105 active:scale-95 transition-all duration-300 group"
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-mutedPurple group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondaryPurple opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-mutedPurple"></span>
          </span>
        </a>

        {/* Desktop Tooltip for Left Button */}
        <div
          className={`hidden md:block ml-3 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-secondaryPurple/40 shadow-md text-xs font-medium text-brandText tracking-wide transition-all duration-300 pointer-events-none whitespace-nowrap ${
            hoverLeft ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
          }`}
        >
          Call Dr. Srushti
        </div>
      </div>

      {/* RIGHT BOTTOM: Floating WhatsApp Button */}
      <div
        className="fixed bottom-6 right-6 z-40 flex items-center flex-row-reverse"
        onMouseEnter={() => setHoverRight(true)}
        onMouseLeave={() => setHoverRight(false)}
      >
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Dr. Srushti Garg"
          className="relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 group"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-current group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -left-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
          </span>
        </a>

        {/* Desktop Tooltip for Right Button */}
        <div
          className={`hidden md:block mr-3 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-emerald-200 shadow-md text-xs font-medium text-brandText tracking-wide transition-all duration-300 pointer-events-none whitespace-nowrap ${
            hoverRight ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}
        >
          WhatsApp Dr. Srushti
        </div>
      </div>
    </>
  );
};
