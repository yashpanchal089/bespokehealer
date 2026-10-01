import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  formatWithComma?: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  suffix = '',
  duration = 2.2,
  formatWithComma = false,
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1], // Smooth luxury ease-out
      onUpdate: (latest) => {
        setDisplayValue(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value, duration]);

  const formattedNumber = formatWithComma
    ? displayValue.toLocaleString('en-US')
    : displayValue.toString();

  return (
    <span ref={ref} className="inline-flex items-baseline tabular-nums">
      <span>{formattedNumber}</span>
      {suffix && (
        <span className="text-secondaryPurple font-normal ml-0.5 text-[0.8em]">{suffix}</span>
      )}
    </span>
  );
};

export const StatsStrip: React.FC = () => {
  const stats = [
    {
      numericValue: 18,
      suffix: "+",
      formatWithComma: false,
      duration: 2.0,
      label: "Years of Experience",
      sublabel: "Master Intuitive & Healer"
    },
    {
      numericValue: 1000,
      suffix: "+",
      formatWithComma: true,
      duration: 2.4,
      label: "Happy Clients",
      sublabel: "Across 14+ Countries"
    },
    {
      numericValue: 3,
      suffix: "",
      formatWithComma: false,
      duration: 1.6,
      label: "Core Services",
      sublabel: "Tarot • Healing • Crystals"
    },
    {
      numericValue: 20,
      suffix: "+",
      formatWithComma: false,
      duration: 2.0,
      label: "Crystal Varieties",
      sublabel: "Curated & Cleansed"
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 border-y border-secondaryPurple/30 bg-softCream/60 backdrop-blur-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.12, ease: 'easeOut' }}
              className="flex flex-col items-center text-center relative group"
            >
              {/* Vertical subtle divider for desktop */}
              {idx < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-14 bg-secondaryPurple/30" />
              )}

              {/* Huge Serif Number with Animated Rolling Counter */}
              <span className="font-editorial text-4xl sm:text-5xl md:text-6xl text-brandText font-light tracking-tight group-hover:text-mutedPurple transition-colors duration-300">
                <AnimatedCounter
                  value={stat.numericValue}
                  suffix={stat.suffix}
                  duration={stat.duration}
                  formatWithComma={stat.formatWithComma}
                />
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
