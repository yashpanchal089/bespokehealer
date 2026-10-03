import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Clock, X, MessageCircle } from 'lucide-react';
import { servicesData } from '../data/services';
import type { Service } from '../data/services';
import { getServiceWhatsAppUrl } from '../data/config';

interface ServicesSectionProps {
  onBookClick: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookClick }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // 01 Tarot Card Reading is the featured/visually prominent card
  const featuredService = servicesData[0];
  const secondaryServices = servicesData.slice(1);

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-softCream/40">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full lavender-glow pointer-events-none filter blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-warmBeige/90 border border-secondaryPurple/30 text-xs font-semibold uppercase tracking-[0.25em] text-mutedPurple shadow-sm">
            <span>✦</span>
            <span>3 Core Services</span>
            <span>✦</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-brandText font-normal">
            What do you need today?
          </h2>
          <p className="font-editorial text-xl sm:text-2xl text-mutedPurple font-normal tracking-wide">
            Tarot • Healing • Crystals
          </p>
          <p className="text-sm sm:text-base text-brandLightText font-light max-w-lg">
            Curated holistic pathways designed to dissolve uncertainty and realign your inner vibration.
          </p>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* 01 — TAROT CARD READING (Visually Prominent, 7 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onClick={() => setSelectedService(featuredService)}
            className="lg:col-span-7 group cursor-pointer relative rounded-3xl overflow-hidden shadow-lg border border-secondaryPurple/40 bg-softCream flex flex-col justify-between min-h-[480px] lg:min-h-[560px] glass-card-hover"
          >
            {/* Background Image with Zoom on hover */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={featuredService.image}
                alt={featuredService.name}
                className="w-full h-full object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Luxury gradient overlay: ensures high contrast and readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-warmBeige via-warmBeige/50 to-transparent group-hover:via-warmBeige/35 transition-all duration-500" />
              {/* Soft lavender glow appearing on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-lightLavender/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Top Bar with Number & Badge */}
            <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between">
              <span className="font-editorial text-3xl font-light text-brandText/70 tracking-widest">
                01
              </span>
              <span className="px-3.5 py-1 rounded-full bg-warmBeige/90 backdrop-blur-md border border-secondaryPurple/40 text-[11px] font-semibold uppercase tracking-widest text-brandText shadow-sm">
                {featuredService.editorialHighlight}
              </span>
            </div>

            {/* Bottom Content with Heading, Short line, and Animated CTA */}
            <div className="relative z-10 p-6 sm:p-8 space-y-3">
              <h3 className="font-editorial text-3xl sm:text-4xl text-brandText font-normal group-hover:translate-x-1.5 transition-transform duration-300">
                {featuredService.name}
              </h3>
              
              <p className="text-base sm:text-lg text-brandLightText font-light">
                {featuredService.shortDescription}
              </p>

              <div className="pt-3 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-mutedPurple group-hover:text-brandText transition-colors">
                  <span>Explore Experience</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </span>

                <span className="text-xs font-medium text-brandLightText tracking-wide bg-softCream/80 px-3 py-1 rounded-full border border-secondaryPurple/30">
                  {featuredService.duration} • {featuredService.price}
                </span>
              </div>
            </div>
          </motion.div>

          {/* 02 & 03 — Stacked Editorial Columns (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
            {secondaryServices.map((service, index) => {
              const numberStr = index === 0 ? "02" : "03";
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: (index + 1) * 0.15 }}
                  onClick={() => setSelectedService(service)}
                  className="group cursor-pointer relative rounded-3xl overflow-hidden shadow-lg border border-secondaryPurple/40 bg-softCream flex-1 min-h-[260px] flex flex-col justify-between glass-card-hover"
                >
                  {/* Background Image with Zoom */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-warmBeige via-warmBeige/65 to-transparent group-hover:via-warmBeige/50 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-lightLavender/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Top Bar with Number */}
                  <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between">
                    <span className="font-editorial text-2xl font-light text-brandText/70 tracking-widest">
                      {numberStr}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-warmBeige/90 backdrop-blur-md border border-secondaryPurple/30 text-[10px] font-semibold uppercase tracking-wider text-brandText">
                      {service.editorialHighlight}
                    </span>
                  </div>

                  {/* Bottom Content */}
                  <div className="relative z-10 p-5 sm:p-6 space-y-2">
                    <h3 className="font-editorial text-2xl sm:text-3xl text-brandText font-normal group-hover:translate-x-1.5 transition-transform duration-300">
                      {service.name}
                    </h3>
                    
                    <p className="text-sm text-brandLightText font-light line-clamp-2">
                      {service.shortDescription}
                    </p>

                    <div className="pt-2 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-mutedPurple group-hover:text-brandText transition-colors">
                        <span>Explore</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>

                      <span className="text-[11px] font-medium text-brandLightText">
                        {service.duration}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Modal: Service Deep Dive */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brandText/40 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg bg-softCream rounded-3xl overflow-hidden border border-secondaryPurple/40 shadow-2xl">
            <div className="relative h-48 sm:h-56 w-full overflow-hidden">
              <img
                src={selectedService.image}
                alt={selectedService.name}
                className="w-full h-full object-cover object-[center_30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-softCream via-transparent to-black/20" />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-brandText transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-mutedPurple">
                  ✦ Signature Offering
                </span>
                <h3 className="font-editorial text-3xl text-brandText font-normal mt-1">
                  {selectedService.name}
                </h3>
                <p className="text-sm text-mutedPurple font-medium mt-1">
                  {selectedService.shortDescription}
                </p>
              </div>

              <p className="text-sm text-brandLightText leading-relaxed">
                {selectedService.description}
              </p>

              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-warmBeige/80 border border-secondaryPurple/30 text-xs">
                <span className="flex items-center gap-1.5 text-brandText font-medium">
                  <Clock className="w-4 h-4 text-mutedPurple" />
                  Duration: {selectedService.duration}
                </span>
                <span className="font-editorial text-lg font-semibold text-brandText">
                  {selectedService.price}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    onBookClick();
                  }}
                  className="flex-1 py-3.5 rounded-full bg-mutedPurple hover:bg-[#9677a5] text-white text-xs uppercase font-semibold tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Book Session</span>
                </button>

                <a
                  href={getServiceWhatsAppUrl(selectedService.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs uppercase font-semibold tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Slot</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
