import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  Heart,
  MessageCircle,
  Calendar,
  CheckCircle2,
  Maximize2,
  X,
  Camera,
  ArrowRight
} from 'lucide-react';
import { corporateAndWeddingOfferings, eventGalleryPhotos } from '../data/events';
import type { EventGalleryPhoto } from '../data/events';
import { getEventWhatsAppUrl } from '../data/config';

interface CorporateEventsSectionProps {
  onBookClick: () => void;
}

export const CorporateEventsSection: React.FC<CorporateEventsSectionProps> = ({ onBookClick }) => {
  const [selectedImage, setSelectedImage] = useState<EventGalleryPhoto | null>(null);

  const featuredPhoto = eventGalleryPhotos[0];

  return (
    <section id="events" className="py-20 lg:py-24 relative overflow-hidden bg-warmBeige/40 border-t border-secondaryPurple/25">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-5 w-96 h-96 rounded-full lavender-glow pointer-events-none filter blur-3xl opacity-35" />
      <div className="absolute bottom-10 left-5 w-80 h-80 rounded-full warm-glow pointer-events-none filter blur-3xl opacity-35" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 lg:space-y-14">
        
        {/* ================= 1. Header (Minimal & Punchy) ================= */}
        <div className="flex flex-col items-center text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-softCream border border-secondaryPurple/40 text-xs font-semibold uppercase tracking-[0.25em] text-mutedPurple shadow-sm">
            <span>✦</span>
            <span>In The Limelight</span>
            <span>✦</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-brandText font-normal leading-tight">
            Corporate Summits &amp; Luxury Weddings
          </h2>

          <p className="font-editorial text-xl sm:text-2xl text-mutedPurple font-normal italic">
            Keynote speaking, executive wellness &amp; bespoke wedding experiences
          </p>

          {/* Quick Limelight Badges */}
          <div className="pt-1 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="px-3.5 py-1 rounded-full bg-softCream/80 border border-secondaryPurple/30 text-brandText font-medium">
              ✦ National Symposia
            </span>
            <span className="px-3.5 py-1 rounded-full bg-softCream/80 border border-secondaryPurple/30 text-brandText font-medium">
              ✦ Executive Retreats
            </span>
            <span className="px-3.5 py-1 rounded-full bg-softCream/80 border border-secondaryPurple/30 text-brandText font-medium">
              ✦ Luxury Bridal Lounges
            </span>
          </div>
        </div>

        {/* ================= 2. Featured Photo Spotlight (Big & Visual) ================= */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-secondaryPurple/40 bg-softCream group">
          <div 
            onClick={() => setSelectedImage(featuredPhoto)}
            className="relative w-full h-[360px] sm:h-[480px] lg:h-[540px] cursor-pointer overflow-hidden bg-warmBeige/20"
          >
            <img
              src={featuredPhoto.image}
              alt={featuredPhoto.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            
            {/* Visual Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent transition-opacity" />

            {/* Top Tag */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-softCream/95 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider text-mutedPurple border border-secondaryPurple/40 shadow-sm flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5 text-mutedPurple" />
                <span>Featured Engagement</span>
              </span>
            </div>

            {/* Click to expand button */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-all shadow-md">
              <Maximize2 className="w-4 h-4" />
            </div>

            {/* Bottom Caption inside image */}
            <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 text-white">
              <div className="space-y-1 max-w-xl">
                <span className="text-[11px] uppercase tracking-widest text-secondaryPurple font-semibold block">
                  ✦ {featuredPhoto.eventCategory} • {featuredPhoto.tag}
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-white font-normal drop-shadow">
                  {featuredPhoto.title}
                </h3>
              </div>

              {/* Quick WhatsApp Button right on photo */}
              <a
                href={getEventWhatsAppUrl('Corporate / Wedding Event')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-lg shrink-0 hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Event Inquiry</span>
              </a>
            </div>
          </div>
        </div>

        {/* ================= 3. The Two Core Offerings (Concise, Clean Cards) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {corporateAndWeddingOfferings.map((offering, idx) => {
            const isCorporate = offering.type === 'corporate';
            return (
              <motion.div
                key={offering.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-3xl bg-softCream border border-secondaryPurple/30 shadow-md flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1 space-y-6"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-mutedPurple">
                      {offering.tag}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-lightLavender border border-secondaryPurple/40 flex items-center justify-center text-mutedPurple">
                      {isCorporate ? (
                        <Building2 className="w-4 h-4" />
                      ) : (
                        <Heart className="w-4 h-4" />
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-editorial text-2xl sm:text-3xl text-brandText font-normal">
                      {offering.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brandLightText font-light mt-1">
                      {offering.subtitle}
                    </p>
                  </div>

                  {/* Bullet points without long text */}
                  <div className="pt-2 space-y-2">
                    {offering.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2.5 text-xs text-brandText">
                        <CheckCircle2 className="w-3.5 h-3.5 text-mutedPurple shrink-0" />
                        <span className="font-normal">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-secondaryPurple/20 flex items-center justify-between">
                  <a
                    href={getEventWhatsAppUrl(offering.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-mutedPurple hover:text-brandText transition-colors group"
                  >
                    <span>Discuss on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <button
                    onClick={onBookClick}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brandText hover:bg-mutedPurple text-white text-xs font-semibold uppercase tracking-wider transition-all"
                  >
                    <Calendar className="w-3 h-3 text-secondaryPurple" />
                    <span>Inquire</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal for Photo Preview */}
      <AnimatePresence>
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-softCream rounded-3xl overflow-hidden border border-secondaryPurple/40 shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[75vh] w-full overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[75vh] object-contain"
                />
              </div>

              <div className="p-5 flex items-center justify-between bg-softCream">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-mutedPurple block">
                    ✦ {selectedImage.eventCategory}
                  </span>
                  <h3 className="font-editorial text-xl sm:text-2xl text-brandText font-normal">
                    {selectedImage.title}
                  </h3>
                </div>

                <a
                  href={getEventWhatsAppUrl(selectedImage.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Inquire</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CorporateEventsSection;
