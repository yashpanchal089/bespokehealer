import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Sparkles, ArrowRight, Compass } from 'lucide-react';
import srushtiClientPhoto from '../assets/dr-srushti-portrait.jpg';
import { siteConfig } from '../data/config';
import { SacredIconsStrip } from './SacredIconsStrip';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  // Stagger animation container variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.1,
      },
    },
  };

  const itemFadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-32 lg:pt-36 overflow-hidden bg-gradient-to-b from-[#F5EFE6] via-[#FAF6F0] to-[#FFFFFF] bg-grain"
    >
      {/* ================= CELESTIAL & TAROT WATERMARK BACKGROUND WITH ANIMATION ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-30">

        {/* Animated Meditative Rotating Sun Watermark */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 160, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-12 -left-12 w-[420px] h-[420px] text-[#D380B8] origin-center"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full stroke-current fill-none" strokeWidth="0.8">
            <circle cx="100" cy="100" r="45" strokeDasharray="2 3" />
            <circle cx="100" cy="100" r="55" />
            {Array.from({ length: 16 }).map((_, i) => {
              const angle = (i * 360) / 16;
              const rad = (angle * Math.PI) / 180;
              const x1 = 100 + 58 * Math.cos(rad);
              const y1 = 100 + 58 * Math.sin(rad);
              const x2 = 100 + 82 * Math.cos(rad);
              const y2 = 100 + 82 * Math.sin(rad);
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth={i % 2 === 0 ? "1.2" : "0.7"} />;
            })}
            <path d="M92 90 Q97 86 102 90 M108 90 Q113 86 118 90" strokeWidth="1" strokeLinecap="round" />
            <path d="M105 94 L103 103 L108 103" strokeWidth="1" strokeLinecap="round" />
            <path d="M98 112 Q105 117 112 112" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </motion.div>

        {/* Floating Tarot Wheel Watermark */}
        <motion.div
          animate={{ y: [0, -14, 0], rotate: [12, 15, 12] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-[35%] w-48 h-80 border border-[#D380B8]/40 rounded-2xl p-3 flex flex-col justify-between items-center"
        >
          <span className="text-xs font-serif tracking-widest text-[#D380B8]">THE WHEEL</span>
          <div className="w-24 h-24 rounded-full border border-dashed border-[#D380B8]/50 flex items-center justify-center">
            <span className="text-xl text-[#D380B8] animate-pulse">✦</span>
          </div>
          <span className="text-[10px] font-serif uppercase tracking-widest text-[#D380B8]">OF FORTUNE</span>
        </motion.div>

        {/* Twinkling Constellation Stars & Stardust */}
        <motion.span
          animate={{ scale: [0.8, 1.25, 0.8], opacity: [0.25, 0.85, 0.25], y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-44 left-[28%] text-secondaryPurple text-2xl"
        >
          ✦
        </motion.span>
        <motion.span
          animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.7, 0.2], y: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-36 left-[16%] text-mutedPurple text-lg"
        >
          ✧
        </motion.span>
        <motion.span
          animate={{ rotate: [0, 15, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute top-36 right-[14%] text-secondaryPurple text-xl"
        >
          ☾
        </motion.span>
        <motion.span
          animate={{ scale: [0.7, 1.2, 0.7], opacity: [0.2, 0.75, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-44 right-[28%] text-secondaryPurple text-base"
        >
          ✦
        </motion.span>
      </div>

      {/* Breathing Atmospheric Aurora Glows */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-1/4 w-[520px] h-[520px] rounded-full lavender-glow pointer-events-none filter blur-3xl -z-10"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/3 left-1/6 w-96 h-96 rounded-full beige-glow pointer-events-none filter blur-2xl -z-10"
      />

      {/* ================= HERO MAIN CONTENT CONTAINER ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* ================= LEFT COLUMN: Headline & CTAs with Full Animations ================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6 sm:space-y-7"
          >
            {/* Animated Brand Eyebrow with shimmer effect */}
            <motion.div variants={itemFadeUp} className="relative overflow-hidden">
              <div className="relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E7DCEF]/70 border border-[#E5A8CE]/60 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#40383F] shadow-xs">
                <motion.span
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  className="text-[#D380B8] inline-block"
                >
                  ✦
                </motion.span>
                <span>Bespoke Healer • Dr. Srushti Garg</span>

                {/* Shimmer reflection sweep */}
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 pointer-events-none"
                />
              </div>
            </motion.div>

            {/* Magnetic Animated Headline */}
            <motion.div variants={itemFadeUp} className="space-y-1">
              <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[5.3rem] font-normal leading-[1.04] text-[#2B2329] tracking-tight">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="inline-block hover:scale-105 transition-transform"
                >
                  Heal.
                </motion.span>{' '}

                <span className="relative inline-block">
                  <motion.span
                    animate={{
                      color: ['#8A679A', '#AC7EB8', '#7E5B8E', '#8A679A'],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className="italic font-light inline-block"
                  >
                    Align.
                  </motion.span>

                  {/* Animated Wave Underline */}
                  <motion.svg
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.6, ease: 'easeInOut' }}
                    className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-3 text-[#E5A8CE]"
                    viewBox="0 0 100 12"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M0 8 Q 25 1 50 8 T 100 8"
                      fill="transparent"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </motion.svg>
                </span>{' '}

                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="inline-block hover:scale-105 transition-transform"
                >
                  Transform.
                </motion.span>
              </h1>
            </motion.div>

            {/* Supporting Copy with Client Signature Motto */}
            <motion.div variants={itemFadeUp} className="space-y-2.5">
              <p className="font-editorial text-2xl sm:text-3xl text-[#3A3038] font-normal italic tracking-wide">
                “You hold the mystery. Let Tarot reveal it.”
              </p>
              <div className="text-base sm:text-lg text-[#635760] font-light tracking-wide flex items-center flex-wrap gap-2 pt-0.5">
                <span className="hover:text-[#2B2329] hover:font-normal transition-all cursor-default">Tarot</span>
                <span className="text-[#E5A8CE]">•</span>
                <span className="hover:text-[#2B2329] hover:font-normal transition-all cursor-default">Energy Healing</span>
                <span className="text-[#E5A8CE]">•</span>
                <span className="hover:text-[#2B2329] hover:font-normal transition-all cursor-default">Crystals</span>
              </div>
            </motion.div>

            {/* Animated Interactive CTA Buttons */}
            <motion.div
              variants={itemFadeUp}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 w-full sm:w-auto"
            >
              {/* Primary "Explore Services" Pill Button with Floating Compass */}
              <motion.a
                href="#services"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="relative group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold tracking-wider bg-[#221B20] hover:bg-[#3D2C39] text-white transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden"
              >
                {/* Subtle internal button sheen */}
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 3 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 pointer-events-none"
                />

                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <Compass className="w-4 h-4 text-[#E7DCEF]" />
                </motion.div>
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-[#E5A8CE] group-hover:translate-x-1.5 transition-transform duration-300" />
              </motion.a>

              {/* Secondary Luxury "Book a Session" Button with Pulsing Sparkle */}
              <motion.button
                onClick={onBookClick}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-sm font-semibold tracking-wider uppercase bg-[#E5A8CE]/50 hover:bg-[#E5A8CE]/80 text-[#30232E] border border-[#D380B8]/40 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Sparkles className="w-4 h-4 text-[#8A679A] group-hover:scale-125 transition-transform" />
                </motion.div>
                <span>Book a Session</span>
              </motion.button>
            </motion.div>

            {/* Trust Strip Metrics with Live Pulse */}
            <motion.div
              variants={itemFadeUp}
              className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[#756B70]"
            >
              <span className="flex items-center gap-2 font-medium text-[#40383F]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                Personal 1-on-1 Consultations
              </span>
              <span className="text-[#E5A8CE]">•</span>
              <span className="hover:text-[#2B2329] transition-colors cursor-default">1,000+ Happy Seekers</span>
              <span className="text-[#E5A8CE]">•</span>
              <span className="hover:text-[#2B2329] transition-colors cursor-default">Online & In-Person Office</span>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT COLUMN: Serene Grounded Portrait of Dr. Srushti Garg ================= */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-4 lg:mt-0">

            {/* Sacred Halo Rotating Geometry Rings (Preserved as requested: "behind circle is good. keep this") */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[360px] sm:w-[460px] h-[360px] sm:h-[460px] rounded-full border border-[#E5A8CE]/45 pointer-events-none"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#D380B8] shadow-sm shadow-[#D380B8]" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-[#E5A8CE]" />
            </motion.div>

            {/* Counter-rotating Dashed Aura Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[310px] sm:w-[390px] h-[310px] sm:h-[390px] rounded-full border border-dashed border-[#D380B8]/35 pointer-events-none"
            />

            {/* Radiant Breathing Rose-Lavender Aura */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.55, 0.8, 0.55] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[#E7DCEF]/85 via-[#F5C6D6]/45 to-transparent filter blur-3xl -z-10"
            />

            {/* ================= CALM, GROUNDED LUXURY PORTRAIT (ZERO SHAKING / ZERO EARTHQUAKE) ================= */}
            <div
              className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-[4/5] rounded-[2.8rem] overflow-hidden shadow-2xl border-2 border-[#E5A8CE]/65 bg-[#FBF8F3] group transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(211,128,184,0.35)]"
            >
              {/* Dr. Srushti Garg Real Authentic Portrait with Gentle Calm Hover */}
              <img
                src={srushtiClientPhoto}
                alt="Dr. Srushti Garg — Bespoke Healer Founder & Spiritual Guide"
                className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-[1.01] transition-transform duration-700 ease-out group-hover:scale-104 select-none"
              />

              {/* Gentle Feathered Gradient Overlay to blend harmoniously */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2F212B]/75 via-transparent to-transparent opacity-80 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#F5EFE6]/15 via-transparent to-transparent pointer-events-none" />

              {/* Dynamic Studio Sheen Gliding Across Portrait Every 2.5-3 Seconds */}
              <motion.div
                animate={{ x: ['-180%', '280%'] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  repeatDelay: 2.5,
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none z-10"
              />

              {/* Serene Glass Card with Founder Credentials */}
              <div
                className="absolute bottom-4 left-4 right-4 glass-card px-4 py-3 rounded-2xl border border-white/70 shadow-lg flex items-center justify-between z-20 backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1"
              >
                <div>
                  <p className="font-editorial text-lg sm:text-xl text-[#2B2329] font-semibold leading-tight flex items-center gap-1.5">
                    {siteConfig.founderName}
                    <span className="text-[#D380B8] text-xs inline-block">✦</span>
                  </p>
                  <p className="text-xs text-[#D380B8] font-medium tracking-wide mt-0.5">
                    Tarot Card Reader • Energy Healer • Crystals
                  </p>
                </div>

                <div
                  className="w-9 h-9 rounded-full bg-[#F8EBF4] flex items-center justify-center text-[#D380B8] shadow-inner font-serif"
                >
                  ✦
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ================= CURVED ORGANIC WAVE SEPARATOR ================= */}
      <div className="relative w-full mt-16 sm:mt-20 overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-20 lg:h-24 text-[#FFFFFF] preserve-3d"
        >
          <path
            d="M0,40 C280,100 520,10 800,55 C1080,100 1300,30 1440,65 L1440,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* ================= 3 SACRED ICONS STRIP WITH MICRO-ANIMATIONS ================= */}
      <div className="bg-[#FFFFFF] w-full border-b border-[#E5A8CE]/20">
        <SacredIconsStrip />
      </div>

    </section>
  );
};
