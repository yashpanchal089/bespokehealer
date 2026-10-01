import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, HeartHandshake, CheckCircle2, X } from 'lucide-react';
import { siteConfig } from '../data/config';
import srushtiClientPhoto from '../assets/srushti-client.jpg';

interface AboutSrashtiProps {
  onBookClick: () => void;
}

export const AboutSrashti: React.FC<AboutSrashtiProps> = ({ onBookClick }) => {
  const [modalOpen, setModalOpen] = useState(false);

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
                  "Healing is not about becoming someone new. It is peeling away the noise to remember who you already are."
                </p>
              </div>
            </div>

            {/* Decorative celestial badge */}
            <div className="absolute -top-4 -right-4 w-14 h-14 rounded-full bg-lightLavender border border-secondaryPurple/50 shadow-md flex items-center justify-center text-mutedPurple">
              <Sparkles className="w-6 h-6 animate-pulseSlow" />
            </div>
          </motion.div>

          {/* RIGHT: Short, impactful editorial copy */}
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

            {/* Strict 2-3 Line Introduction */}
            <p className="font-editorial text-2xl sm:text-3xl text-brandText/90 font-light leading-relaxed max-w-xl">
              "Creating a personal space for healing, clarity and meaningful spiritual guidance."
            </p>

            {/* Trust Pill Indicators */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-softCream border border-secondaryPurple/30 text-xs font-semibold tracking-wide text-brandText">
                <CheckCircle2 className="w-3.5 h-3.5 text-mutedPurple" />
                18+ Years Experience
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-softCream border border-secondaryPurple/30 text-xs font-semibold tracking-wide text-brandText">
                <HeartHandshake className="w-3.5 h-3.5 text-mutedPurple" />
                1,000+ Journeys Guided
              </span>
            </div>

            {/* Know Srushti CTA */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-brandText hover:text-mutedPurple border-b-2 border-mutedPurple pb-1 hover:border-brandText transition-all duration-300 group"
              >
                <span>Know Dr. Srushti</span>
                <ArrowRight className="w-4 h-4 text-mutedPurple group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={onBookClick}
                className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-lightLavender hover:bg-secondaryPurple/70 text-brandText transition-all"
              >
                Book Session
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Modal: Extended Journey of Dr. Srushti Garg */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brandText/40 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg bg-softCream rounded-3xl p-6 sm:p-8 border border-secondaryPurple/40 shadow-2xl space-y-6">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-lightLavender transition-colors text-brandText"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mutedPurple">
                ✦ Sacred Heritage
              </span>
              <h3 className="font-editorial text-3xl text-brandText font-normal">
                Dr. Srushti's Path & Philosophy
              </h3>
            </div>

            <p className="text-sm text-brandLightText leading-relaxed">
              With over 18 years dedicated to esoteric wisdom, intuitive tarot readings, and bio-energy harmonizing, Dr. Srushti Garg guides seekers through pivotal moments of decision, heartbreak, and spiritual rebirth.
            </p>

            <div className="space-y-2 pt-2">
              <div className="p-3.5 rounded-2xl bg-warmBeige/80 border border-secondaryPurple/20 text-xs text-brandText">
                <strong className="block text-brandText font-medium mb-1">Pure Transparency:</strong>
                "No fear-mongering, no obscure predictions. Just grounded, compassionate truth that empowers you to move forward with peace."
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-3">
              <button
                onClick={() => {
                  setModalOpen(false);
                  onBookClick();
                }}
                className="w-full py-3 rounded-full bg-mutedPurple text-white text-xs uppercase font-semibold tracking-wider hover:bg-[#9375a2] transition-colors"
              >
                Schedule Appointment with Dr. Srushti Garg
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
