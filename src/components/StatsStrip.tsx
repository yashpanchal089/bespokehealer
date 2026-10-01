import React from 'react';
import { motion } from 'framer-motion';

export const StatsStrip: React.FC = () => {
  const stats = [
    {
      value: "18+",
      label: "Years of Experience",
      sublabel: "Master Intuitive & Healer"
    },
    {
      value: "1,000+",
      label: "Happy Clients",
      sublabel: "Across 14+ Countries"
    },
    {
      value: "3",
      label: "Core Services",
      sublabel: "Tarot • Healing • Crystals"
    },
    {
      value: "15+",
      label: "Crystal Varieties",
      sublabel: "Curated & Cleansed"
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 border-y border-secondaryPurple/30 bg-softCream/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center relative group"
            >
              {/* Vertical subtle divider for desktop */}
              {idx < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-14 bg-secondaryPurple/30" />
              )}

              {/* Huge Serif Number */}
              <span className="font-editorial text-4xl sm:text-5xl md:text-6xl text-brandText font-light tracking-tight group-hover:text-mutedPurple transition-colors duration-300">
                {stat.value}
              </span>

              {/* Primary Label */}
              <h2 className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-brandText mt-2">
                {stat.label}
              </h2>

              {/* Minimal Sublabel */}
              <p className="text-[11px] text-brandLightText font-light tracking-wide mt-0.5">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
