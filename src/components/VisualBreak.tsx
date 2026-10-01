import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const VisualBreak: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section className="relative w-full h-[55vh] sm:h-[65vh] overflow-hidden flex items-center justify-center">
      {/* Full-width aesthetic photography with subtle parallax */}
      <motion.div
        style={{ y }}
        className="absolute -top-[15%] -bottom-[15%] left-0 right-0 w-full"
      >
        <img
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1800&auto=format&fit=crop"
          alt="Peaceful serene energy sanctuary"
          className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.02]"
        />
      </motion.div>

      {/* Warm beige / lavender atmospheric overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-warmBeige via-[#40383F]/35 to-warmBeige/70 backdrop-blur-[1px]" />
      
      {/* Fine ethereal celestial accents */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full border border-white/20 animate-spin-slow opacity-40" style={{ animationDuration: '60s' }} />
      </div>

      {/* Overlay text ONLY — Strictly NO paragraph */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <span className="text-secondaryPurple text-lg sm:text-xl block mb-3 animate-pulseSlow">✦</span>
        <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-normal tracking-wide drop-shadow-md">
          Your energy deserves attention too.
        </h2>
      </div>
    </section>
  );
};
