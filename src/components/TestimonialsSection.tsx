import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-softCream/40 border-t border-secondaryPurple/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-mutedPurple">
              <span>✦</span>
              <span>Kind Words</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-brandText font-normal">
              1,000+ journeys. Countless stories.
            </h2>
          </div>

          {/* Carousel Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-softCream hover:bg-lightLavender border border-secondaryPurple/40 text-brandText shadow-sm transition-all active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-softCream hover:bg-lightLavender border border-secondaryPurple/40 text-brandText shadow-sm transition-all active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Swipeable Cards Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-none scroll-smooth -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonialsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="min-w-[300px] sm:min-w-[360px] md:min-w-[380px] max-w-[400px] flex-shrink-0 snap-start rounded-3xl p-7 sm:p-8 bg-softCream border border-secondaryPurple/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Stars and Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-mutedPurple">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-secondaryPurple/50" />
                </div>

                {/* Highlight Badge */}
                <div className="text-[10px] font-semibold uppercase tracking-wider text-mutedPurple mb-2">
                  ✦ {item.highlight}
                </div>

                {/* Short Testimonial Quote */}
                <p className="font-editorial text-lg sm:text-xl text-brandText font-light leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Client Info Footer */}
              <div className="pt-4 border-t border-secondaryPurple/25 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-brandText">
                    {item.clientName}
                  </h3>
                  <p className="text-xs text-brandLightText">
                    {item.location} • {item.service}
                  </p>
                </div>

                <span className="text-[10px] uppercase tracking-wider text-brandLightText bg-warmBeige px-2.5 py-1 rounded-full border border-secondaryPurple/30 font-medium">
                  {item.durationTogether}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
