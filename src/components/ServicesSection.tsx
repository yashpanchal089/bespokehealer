import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, X, MessageCircle } from 'lucide-react';
import { servicesData } from '../data/services';
import type { Service } from '../data/services';
import { getServiceWhatsAppUrl } from '../data/config';

interface ServicesSectionProps {
  onBookClick: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookClick }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

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

        {/* 3 Equal Big Rectangle Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {servicesData.map((service, index) => {
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group relative rounded-3xl overflow-hidden shadow-xl border border-secondaryPurple/30 bg-softCream flex flex-col justify-between h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Full, Crisp Image without white effect */}
                <div 
                  onClick={() => setSelectedService(service)}
                  className="relative h-80 sm:h-96 lg:h-[460px] w-full overflow-hidden cursor-pointer bg-warmBeige/20"
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    className={`w-full h-full ${
                      index === 0 ? 'object-cover object-center' : 'object-cover object-center'
                    } group-hover:scale-105 transition-transform duration-700 ease-out`}
                  />
                </div>

                {/* Card Body — Compact White Part */}
                <div className="p-5 sm:p-6 flex flex-col items-center justify-between space-y-4 bg-softCream">
                  {/* Service Title */}
                  <h3 
                    onClick={() => setSelectedService(service)}
                    className="font-editorial text-2xl sm:text-3xl text-brandText font-normal leading-snug text-center cursor-pointer group-hover:text-mutedPurple transition-colors"
                  >
                    {service.name}
                  </h3>

                  {/* Book Now & Session Details */}
                  <div className="w-full flex flex-col items-center space-y-3 pt-1">
                    {/* Book Now Button */}
                    <button
                      onClick={() => onBookClick()}
                      className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-brandText hover:bg-mutedPurple text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto min-w-[180px]"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-secondaryPurple" />
                      <span>Book Now</span>
                    </button>

                    {/* View full session details */}
                    <button
                      onClick={() => setSelectedService(service)}
                      className="text-sm sm:text-base font-semibold tracking-wide text-mutedPurple hover:text-brandText transition-colors underline underline-offset-4 pt-0.5"
                    >
                      View full session details
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
