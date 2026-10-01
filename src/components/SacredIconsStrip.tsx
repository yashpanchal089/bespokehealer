import React from 'react';
import { motion } from 'framer-motion';
import energyHealerHand from '../assets/energy-healer-hand.png';
import energyHealerHandHover from '../assets/energy-healer-hand-hover.png';

export const SacredIconsStrip: React.FC = () => {
  const sacredSymbols = [
    {
      title: "Tarot Card Reader",
      subtitle: "Tarot & Intuitive Wisdom",
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 text-[#40383F] group-hover:text-[#D380B8] transition-colors" fill="none" stroke="currentColor" strokeWidth="1.2">
          {/* Left Tilted Tarot Card */}
          <g transform="rotate(-14 42 56)">
            <rect x="25" y="31" width="28" height="46" rx="2.5" strokeWidth="1.2" fill="#FDFBF9" />
            <rect x="28" y="34" width="22" height="40" rx="1.5" strokeDasharray="1.5 2" opacity="0.5" />
            <circle cx="39" cy="54" r="4" strokeWidth="0.8" opacity="0.4" />
          </g>

          {/* Right Tilted Tarot Card */}
          <g transform="rotate(14 58 56)">
            <rect x="47" y="31" width="28" height="46" rx="2.5" strokeWidth="1.2" fill="#FDFBF9" />
            <rect x="50" y="34" width="22" height="40" rx="1.5" strokeDasharray="1.5 2" opacity="0.5" />
            <circle cx="61" cy="54" r="4" strokeWidth="0.8" opacity="0.4" />
          </g>

          {/* Center Front Tarot Card */}
          <rect x="35" y="25" width="30" height="50" rx="3" strokeWidth="1.4" fill="#FFFFFF" />
          <rect x="38.5" y="28.5" width="23" height="43" rx="1.5" strokeWidth="0.8" opacity="0.75" />
          
          {/* Center Card Celestial Symbol: Radiant Sunburst & Mystic Crescent */}
          <circle cx="50" cy="50" r="5.5" strokeWidth="1.1" />
          <circle cx="50" cy="50" r="2.2" fill="currentColor" />
          
          {/* Sunburst Rays */}
          <path d="M50 41 L50 37 M50 59 L50 63 M41 50 L37 50 M59 50 L63 50 M44 44 L41 41 M56 56 L59 59 M44 56 L41 59 M56 44 L59 41" strokeWidth="1" strokeLinecap="round" />
          
          {/* Crescent Moon Arc Over Sun */}
          <path d="M46 50 A 5 5 0 0 1 54 44 A 4 4 0 0 0 46 50 Z" fill="currentColor" fillOpacity="0.4" stroke="none" />
          
          {/* Corner Sacred Stars inside Center Card */}
          <circle cx="41.5" cy="31.5" r="0.75" fill="currentColor" />
          <circle cx="58.5" cy="31.5" r="0.75" fill="currentColor" />
          <circle cx="41.5" cy="68.5" r="0.75" fill="currentColor" />
          <circle cx="58.5" cy="68.5" r="0.75" fill="currentColor" />

          {/* Floating Celestial Stardust & Sparks Above & Around Cards */}
          <path d="M50 11 L51.2 15.5 L55.5 16.5 L51.2 17.5 L50 22 L48.8 17.5 L44.5 16.5 L48.8 15.5 Z" fill="currentColor" />
          <circle cx="21" cy="36" r="1.4" fill="currentColor" />
          <circle cx="79" cy="36" r="1.4" fill="currentColor" />
          <circle cx="27" cy="22" r="1" fill="currentColor" opacity="0.7" />
          <circle cx="73" cy="22" r="1" fill="currentColor" opacity="0.7" />
          <circle cx="50" cy="83" r="1.2" fill="currentColor" opacity="0.6" />
        </svg>
      )
    },
    {
      title: "Energy Healer",
      subtitle: "Pranic & Chakra Healing",
      icon: (
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
          <img
            src={energyHealerHand}
            alt="Energy Healer Pranic & Chakra Healing"
            className="w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0 select-none"
          />
          <img
            src={energyHealerHandHover}
            alt="Energy Healer Pranic & Chakra Healing"
            className="w-full h-full object-contain absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 select-none"
          />
        </div>
      )
    },
    {
      title: "Crystals",
      subtitle: "Sacred Stones & Vibrations",
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 text-[#40383F] group-hover:text-[#D380B8] transition-colors" fill="none" stroke="currentColor" strokeWidth="1.2">
          {/* Sacred Base Pedestal / Radiant Foundation */}
          <ellipse cx="50" cy="80" rx="30" ry="6" strokeDasharray="1.5 2.5" opacity="0.4" />
          <path d="M28 80 Q50 84 72 80" strokeWidth="1" opacity="0.35" />

          {/* Central Tall Hexagonal Quartz Crystal Point */}
          <polygon points="50,18 42,32 58,32" strokeWidth="1.4" strokeLinejoin="round" fill="currentColor" fillOpacity="0.05" />
          <polygon points="42,32 58,32 57,76 43,76" strokeWidth="1.4" strokeLinejoin="round" />
          {/* Center Facet Ridge Line */}
          <line x1="50" y1="18" x2="50" y2="76" strokeWidth="1" opacity="0.75" />

          {/* Left Angled Crystal Point */}
          <polygon points="32,36 25,48 37,48" strokeWidth="1.2" strokeLinejoin="round" fill="currentColor" fillOpacity="0.04" />
          <polygon points="25,48 37,48 39,78 28,78" strokeWidth="1.2" strokeLinejoin="round" />
          <line x1="32" y1="36" x2="33" y2="78" strokeWidth="0.9" opacity="0.65" />

          {/* Right Angled Crystal Point */}
          <polygon points="68,40 63,52 75,52" strokeWidth="1.2" strokeLinejoin="round" fill="currentColor" fillOpacity="0.04" />
          <polygon points="63,52 75,52 72,78 61,78" strokeWidth="1.2" strokeLinejoin="round" />
          <line x1="68" y1="40" x2="67" y2="78" strokeWidth="0.9" opacity="0.65" />

          {/* Small Accent Quartz Point on Left */}
          <polygon points="20,58 16,66 24,66" strokeWidth="1" strokeLinejoin="round" />
          <polygon points="16,66 24,66 25,79 17,79" strokeWidth="1" strokeLinejoin="round" />

          {/* Small Accent Quartz Point on Right */}
          <polygon points="80,56 76,64 84,64" strokeWidth="1" strokeLinejoin="round" />
          <polygon points="76,64 84,64 83,79 75,79" strokeWidth="1" strokeLinejoin="round" />

          {/* Radiant Starlight Flare on Center Crystal Apex */}
          <path d="M50 6 L51.2 10.5 L55.5 11.5 L51.2 12.5 L50 17 L48.8 12.5 L44.5 11.5 L48.8 10.5 Z" fill="currentColor" />
          
          {/* Subtle Light Beams */}
          <line x1="50" y1="11" x2="50" y2="2" strokeWidth="0.9" strokeLinecap="round" opacity="0.6" />
          <line x1="32" y1="31" x2="28" y2="26" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
          <line x1="68" y1="35" x2="72" y2="30" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />

          {/* Twinkling Sparkles */}
          <path d="M22 28 L22.7 29.8 L24.5 30.5 L22.7 31.2 L22 33 L21.3 31.2 L19.5 30.5 L21.3 29.8 Z" fill="currentColor" />
          <path d="M78 30 L78.7 31.8 L80.5 32.5 L78.7 33.2 L78 35 L77.3 33.2 L75.5 32.5 L77.3 31.8 Z" fill="currentColor" />
          <circle cx="38" cy="18" r="1" fill="currentColor" opacity="0.6" />
          <circle cx="62" cy="18" r="1" fill="currentColor" opacity="0.6" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 sm:py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
        {sacredSymbols.map((symbol, idx) => (
          <motion.div
            key={symbol.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="group flex flex-col items-center text-center p-4 rounded-2xl hover:bg-white/40 transition-all duration-300"
          >
            {/* Symbol Illustration */}
            <div className="mb-4 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500">
              {symbol.icon}
            </div>
            
            {/* Title */}
            <h3 className="font-editorial text-xl sm:text-2xl text-[#40383F] font-medium tracking-wide mb-1">
              {symbol.title}
            </h3>
            
            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-[#756B70] font-light tracking-wider uppercase">
              {symbol.subtitle}
            </p>

            <span className="w-6 h-[1px] bg-[#E5A8CE] mt-3 group-hover:w-12 transition-all duration-300" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
