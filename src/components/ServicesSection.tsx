import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShoppingBag } from 'lucide-react';
import { servicesData } from '../data/services';

interface ServicesSectionProps {
  onBookClick: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookClick }) => {
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
                <Link
                  to={`/services/${service.slug}`}
                  className="relative h-80 sm:h-96 lg:h-[460px] w-full overflow-hidden block cursor-pointer bg-warmBeige/20"
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    className={`w-full h-full object-cover ${service.imagePosition || 'object-center'} group-hover:scale-105 transition-transform duration-700 ease-out`}
                  />
                  {/* Subtle hover overlay badge */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-3 py-1 rounded-full bg-softCream/95 backdrop-blur-md text-[10px] font-semibold uppercase tracking-wider text-mutedPurple border border-secondaryPurple/40 shadow-sm flex items-center gap-1">
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>

                {/* Card Body — Compact Part */}
                <div className="p-5 sm:p-6 flex flex-col items-center justify-between space-y-4 bg-softCream">
                  {/* Service Title */}
                  <Link
                    to={`/services/${service.slug}`}
                    className="font-editorial text-2xl sm:text-3xl text-brandText font-normal leading-snug text-center cursor-pointer hover:text-mutedPurple transition-colors"
                  >
                    {service.name}
                  </Link>

                  {/* Book Now & Session Details */}
                  <div className="w-full flex flex-col items-center gap-3 pt-1">
                    {/* Book Now or Shop Now Button */}
                    {service.slug === 'crystals' || service.id === 'crystals-guidance' ? (
                      <Link
                        to="/shop"
                        className="inline-flex items-center justify-center gap-2 px-8 py-2.5 rounded-full bg-brandText hover:bg-mutedPurple text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto min-w-[190px]"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 text-secondaryPurple" />
                        <span>Shop Now</span>
                      </Link>
                    ) : (
                      <button
                        onClick={() => onBookClick()}
                        className="inline-flex items-center justify-center gap-2 px-8 py-2.5 rounded-full bg-brandText hover:bg-mutedPurple text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto min-w-[190px]"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-secondaryPurple" />
                        <span>Book Now</span>
                      </button>
                    )}

                    {/* View Session Details — Navigates to dedicated page */}
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-lightLavender border border-secondaryPurple/60 hover:border-mutedPurple text-xs sm:text-sm font-semibold tracking-wide text-brandText hover:text-mutedPurple transition-all duration-300 shadow-sm hover:shadow hover:scale-[1.02] group"
                    >
                      <span className="text-mutedPurple">✦</span>
                      <span>View Full Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-mutedPurple group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
