import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { eventGalleryPhotos, type EventGalleryPhoto } from '../data/events';
import { getEventWhatsAppUrl } from '../data/config';

interface CorporateEventsSectionProps {
  onBookClick?: () => void;
}

export const CorporateEventsSection: React.FC<CorporateEventsSectionProps> = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<EventGalleryPhoto | null>(null);

  return (
    <section id="events" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-warmBeige/40 border-t border-secondaryPurple/25">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-5 w-96 h-96 rounded-full lavender-glow pointer-events-none filter blur-3xl opacity-35" />
      <div className="absolute bottom-10 left-5 w-80 h-80 rounded-full warm-glow pointer-events-none filter blur-3xl opacity-35" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-12">
        
        {/* ================= 1. Header ================= */}
        <div className="flex flex-col items-center text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-softCream border border-secondaryPurple/40 text-xs font-semibold uppercase tracking-[0.25em] text-mutedPurple shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-secondaryPurple" />
            <span>Experiential Gatherings</span>
            <Sparkles className="w-3.5 h-3.5 text-secondaryPurple" />
          </div>

          <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-brandText font-normal leading-tight">
            We Also Do Corporate &amp; Wedding Events
          </h2>

          <p className="font-editorial text-lg sm:text-2xl text-mutedPurple font-normal italic max-w-2xl">
            Experiential bridal tarot lounges, executive burnout release &amp; consecrated crystal setups
          </p>
        </div>

        {/* ================= 2. Photo Gallery Grid (Clean 2x2 Grid on Mobile, 4-col on Desktop) ================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
          {eventGalleryPhotos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-secondaryPurple/35 bg-softCream shadow-md hover:shadow-2xl active:scale-95 transition-all duration-300 cursor-pointer aspect-[3/4]"
            >
              <img
                src={photo.image}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* ================= 3. Minimal Action Banner ================= */}
        <div className="rounded-3xl p-5 sm:p-8 bg-softCream/90 border border-secondaryPurple/40 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-editorial text-xl sm:text-2xl text-brandText font-normal leading-snug">
              Planning a corporate summit or destination wedding?
            </h4>
            <p className="text-xs sm:text-sm text-brandLightText font-light">
              We design custom tarot reading lounges, consecrated gifts, and mindfulness sessions for your guests.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={getEventWhatsAppUrl('Corporate & Wedding Event')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg active:scale-95 transition-all min-h-[46px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>

      {/* ================= Lightbox Modal (Clean Photo Preview) ================= */}
      <AnimatePresence>
        {selectedPhoto && (
          <div
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] bg-transparent rounded-2xl overflow-hidden flex flex-col items-center justify-center"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-3 z-20 p-2.5 rounded-full bg-black/70 hover:bg-black/95 text-white transition-colors shadow-lg border border-white/20"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.alt}
                className="max-h-[85vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-white/10"
              />
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CorporateEventsSection;
