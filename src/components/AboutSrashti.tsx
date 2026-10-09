import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { siteConfig } from '../data/config';
import srushtiClientPhoto from '../assets/srushti-client.jpg';

interface AboutSrashtiProps {
  onBookClick?: () => void;
}

export const AboutSrashti: React.FC<AboutSrashtiProps> = () => {
  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden bg-grain">
      {/* Background lavender wash */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full lavender-glow pointer-events-none filter blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: One Beautiful Imagery with editorial frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border border-secondaryPurple/40 bg-softCream">
              <img
                src={srushtiClientPhoto}
                alt="Dr. Srushti Garg — Bespoke Healer Founder"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warmBeige/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Subtle quote overlay */}
              <div className="absolute bottom-5 left-5 right-5 glass-card p-4 rounded-2xl border border-white/70">
                <p className="font-editorial italic text-sm text-brandText leading-snug">
                  "Let go. Learn to forgive &amp; forget. Let go &amp; go on living"
                </p>
              </div>
            </div>

            {/* Decorative celestial badge */}
            <div className="absolute -top-4 -right-4 w-14 h-14 rounded-full bg-lightLavender border border-secondaryPurple/50 shadow-md flex items-center justify-center text-mutedPurple">
              <Sparkles className="w-6 h-6 animate-pulseSlow" />
            </div>
          </motion.div>

          {/* RIGHT: In-depth editorial story & bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-mutedPurple">
              <span>✦</span>
              <span>Meet Your Healer</span>
            </div>

            {/* Large Heading */}
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-brandText font-normal leading-tight">
              {siteConfig.founderName}
            </h2>

            {/* Introduction Quote */}
            <p className="font-editorial text-2xl sm:text-3xl text-brandText/90 font-light leading-relaxed max-w-xl">
              "Creating a personal space for healing, clarity and meaningful spiritual guidance."
            </p>

            {/* Subtle decorative divider */}
            <div className="w-16 h-px bg-secondaryPurple/50" />

            {/* Detailed bio paragraphs displayed directly on the page */}
            <div className="space-y-4 text-base text-brandLightText leading-relaxed">
              <p>
                Dr. Srushti Garg is a practicing dentist and holistic wellness practitioner with over 18 years of experience in the world of Healing &amp; Tarot. Her journey began in conventional healthcare, with dentistry at its core.
              </p>
              <p>
                She believes that healing is not one-size-fits-all. Every individual carries a unique story, emotional pattern and energy - and sometimes, we simply need the right guidance to understand ourselves better and move forward with greater clarity.
              </p>
              <p>
                Through Bespoke Healer, her intention is to create a safe and compassionate space where people can pause, reconnect, release and realign - whether they are seeking clarity, emotional healing, energetic balance or simply a deeper connection with themselves.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

