import React from 'react';
import { motion } from 'framer-motion';

interface TarotBadgeProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const TarotBadge: React.FC<TarotBadgeProps> = ({ size = 'md', className = '' }) => {
  // Scaling and container dimensions based on size
  const config = {
    sm: { scale: 'scale-[0.58]', container: 'w-28 h-20' },
    md: { scale: 'scale-90 sm:scale-100', container: 'w-44 h-36' },
    lg: { scale: 'scale-110 sm:scale-125', container: 'w-48 h-40' },
  }[size];

  return (
    <div className={`relative inline-flex items-center justify-center select-none ${config.container} ${className}`}>
      {/* Container for fanned cards & circular badge */}
      <div className={`relative w-44 h-40 flex items-center justify-center ${config.scale} transition-transform`}>
        
        {/* ================= BACKGROUND TAROT CARDS FAN ================= */}
        {/* Left Card: THE MOON (XVIII) */}
        <motion.div
          initial={{ rotate: -16, x: -14, y: 4 }}
          whileHover={{ rotate: -22, x: -20, y: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="absolute w-20 h-32 rounded-lg bg-[#FAF6F0] border border-[#E5A8CE]/60 shadow-md p-1.5 flex flex-col justify-between overflow-hidden -rotate-[16deg] -translate-x-7 translate-y-1.5 z-0"
        >
          {/* Card Border Line */}
          <div className="w-full h-full border border-[#D380B8]/30 rounded-md p-1 flex flex-col justify-between items-center text-center">
            <span className="text-[7px] font-serif text-[#D380B8] tracking-widest font-semibold">XVIII</span>
            {/* Moon Line Art */}
            <svg viewBox="0 0 40 40" className="w-7 h-7 text-[#7D6B88] opacity-70 my-auto" fill="none" stroke="currentColor" strokeWidth="1.2">
              <circle cx="20" cy="20" r="14" strokeDasharray="1 2" />
              <path d="M20 8 A 12 12 0 1 0 20 32 A 9 9 0 0 1 20 8 Z" fill="currentColor" fillOpacity="0.15" />
              <path d="M14 16 L14.5 17.5 L16 18 L14.5 18.5 L14 20 L13.5 18.5 L12 18 L13.5 17.5 Z" fill="currentColor" />
              <path d="M26 13 L26.5 14 L27.5 14.5 L26.5 15 L26 16 L25.5 15 L24.5 14.5 L25.5 14 Z" fill="currentColor" />
            </svg>
            <span className="text-[6.5px] font-serif uppercase tracking-widest text-[#5C4F62] font-semibold">
              The Moon
            </span>
          </div>
        </motion.div>

        {/* Center Card: THE HIGH PRIESTESS (II) */}
        <motion.div
          initial={{ rotate: 0, y: -4 }}
          whileHover={{ y: -10 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="absolute w-20 h-32 rounded-lg bg-[#FCF9F4] border border-[#E5A8CE]/70 shadow-lg p-1.5 flex flex-col justify-between overflow-hidden -translate-y-2 z-10"
        >
          <div className="w-full h-full border border-[#D380B8]/35 rounded-md p-1 flex flex-col justify-between items-center text-center">
            <span className="text-[7px] font-serif text-[#D380B8] tracking-widest font-semibold">II</span>
            {/* High Priestess Celestial Symbol */}
            <svg viewBox="0 0 40 40" className="w-7 h-7 text-[#6F5D7B] opacity-80 my-auto" fill="none" stroke="currentColor" strokeWidth="1.2">
              <circle cx="20" cy="20" r="7" strokeWidth="1.2" />
              <path d="M8 20 A 12 12 0 0 0 20 32" strokeLinecap="round" />
              <path d="M32 20 A 12 12 0 0 1 20 8" strokeLinecap="round" />
              <line x1="20" y1="5" x2="20" y2="9" />
              <line x1="20" y1="31" x2="20" y2="35" />
              <line x1="5" y1="20" x2="9" y2="20" />
              <line x1="31" y1="20" x2="35" y2="20" />
              <circle cx="20" cy="20" r="2" fill="currentColor" />
            </svg>
            <span className="text-[6.2px] font-serif uppercase tracking-widest text-[#5C4F62] font-semibold">
              High Priestess
            </span>
          </div>
        </motion.div>

        {/* Right Card: THE STAR (XVII) */}
        <motion.div
          initial={{ rotate: 16, x: 14, y: 4 }}
          whileHover={{ rotate: 22, x: 20, y: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="absolute w-20 h-32 rounded-lg bg-[#FAF6F0] border border-[#E5A8CE]/60 shadow-md p-1.5 flex flex-col justify-between overflow-hidden rotate-[16deg] translate-x-7 translate-y-1.5 z-0"
        >
          <div className="w-full h-full border border-[#D380B8]/30 rounded-md p-1 flex flex-col justify-between items-center text-center">
            <span className="text-[7px] font-serif text-[#D380B8] tracking-widest font-semibold">XVII</span>
            {/* 8-pointed Radiant Star Line Art */}
            <svg viewBox="0 0 40 40" className="w-7 h-7 text-[#7D6B88] opacity-70 my-auto" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M20 6 L22 17 L33 19 L22 21 L20 32 L18 21 L7 19 L18 17 Z" fill="currentColor" fillOpacity="0.15" />
              <circle cx="12" cy="11" r="1" fill="currentColor" />
              <circle cx="28" cy="11" r="1" fill="currentColor" />
              <circle cx="10" cy="27" r="1" fill="currentColor" />
              <circle cx="30" cy="27" r="1" fill="currentColor" />
            </svg>
            <span className="text-[6.5px] font-serif uppercase tracking-widest text-[#5C4F62] font-semibold">
              The Star
            </span>
          </div>
        </motion.div>

        {/* ================= CIRCULAR EMBLEM BADGE (Front Layer) ================= */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: 'spring', stiffness: 300, damping: 18 }}
          className="relative z-20 w-24 h-24 rounded-full flex flex-col items-center justify-center text-center shadow-xl cursor-pointer"
          style={{
            background: 'radial-gradient(circle at 35% 35%, #FDE4EB 0%, #F5C6D6 55%, #E9ACC2 100%)',
            boxShadow: '0 10px 25px -4px rgba(220, 140, 170, 0.45), 0 0 0 3px rgba(255, 255, 255, 0.85), inset 0 2px 4px rgba(255, 255, 255, 0.6)'
          }}
        >
          {/* Subtle Organic Inner Ring */}
          <div className="absolute inset-1 rounded-full border border-[#D98AAB]/40 pointer-events-none" />

          {/* Top Word: Tarot / Bespoke */}
          <span className="font-editorial text-[13px] sm:text-[14px] font-semibold tracking-wide text-[#3E2E38] leading-none -mt-1 drop-shadow-sm">
            Tarot
          </span>

          {/* Middle Italic Accent: "with" */}
          <span className="font-editorial italic text-[11px] text-[#694856] -my-0.5 font-light">
            with
          </span>

          {/* Main Name: "Dr. Srushti" */}
          <span
            className="text-[15px] sm:text-[16px] font-bold tracking-tight text-[#2B1B26] leading-none drop-shadow-sm whitespace-nowrap"
            style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              letterSpacing: '-0.02em'
            }}
          >
            Dr. Srushti
          </span>

          {/* Tiny spark dot */}
          <div className="w-1 h-1 rounded-full bg-[#8E4968] mt-1 opacity-70" />
        </motion.div>

      </div>
    </div>
  );
};
