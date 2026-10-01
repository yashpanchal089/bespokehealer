import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, MessageCircle, Clock } from 'lucide-react';
import { getWhatsAppUrl } from '../data/config';

interface PricingSectionProps {
  onBookClick: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onBookClick }) => {
  // Configurable plans array supporting future expansion
  const pricingPlans = [
    {
      id: "personal-session",
      duration: "60 MINUTES",
      price: "₹2,000",
      title: "Personal Guidance Session",
      badge: "Most Cherished",
      description: "Comprehensive 1-on-1 consultation combining intuitive tarot insights, energy scanning, and tailored remedy advice.",
      features: [
        "In-depth analysis of up to 3 core life areas",
        "Chakra energy scan & aura block identification",
        "Personalized gemstone & bath salt guidance",
        "Available via High-Definition Video Call or Studio",
        "Voice summary notes & crystal pairing notes"
      ],
      featured: true,
      buttonText: "Book 60-Minute Session"
    },
    {
      id: "deep-alignment",
      duration: "90 MINUTES",
      price: "₹3,200",
      title: "Deep Energy & Karma Restoration",
      badge: "Intensive",
      description: "Extended holistic immersion for heavy life transitions, cord-cutting, and deep emotional reset.",
      features: [
        "Full Celtic Cross Tarot spread & timeline forecast",
        "Complete 7-Chakra bio-energy balancing",
        "Personalized crystal blueprint for energetic harmony",
        "30-day post-session integration support on WhatsApp",
        "Complimentary blessed mini crystal talisman"
      ],
      featured: false,
      buttonText: "Book 90-Minute Immersion"
    }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-softCream/60 border-t border-secondaryPurple/30">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full lavender-glow pointer-events-none filter blur-3xl opacity-40" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-mutedPurple">
            <span>✦</span>
            <span>Sessions & Pricing</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-brandText font-normal">
            A little clarity can go a long way.
          </h2>

          <p className="text-sm sm:text-base text-brandLightText font-light max-w-lg">
            Honest, transparent guidance. No hidden fees or recurring commitments — just unhurried presence.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                plan.featured
                  ? 'bg-softCream border-2 border-secondaryPurple/70 shadow-2xl scale-[1.02]'
                  : 'bg-warmBeige/70 border border-secondaryPurple/40 shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Badge if featured */}
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-mutedPurple text-white text-[10px] font-semibold uppercase tracking-widest shadow-md">
                  {plan.badge}
                </div>
              )}

              <div>
                {/* Duration Header */}
                <div className="flex items-center justify-between border-b border-secondaryPurple/30 pb-4 mb-6">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-mutedPurple">
                    <Clock className="w-3.5 h-3.5" />
                    {plan.duration}
                  </span>
                  <span className="text-[11px] text-brandLightText uppercase tracking-wider">
                    1-on-1 Guidance
                  </span>
                </div>

                {/* Price Display: Huge and Transparent */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="font-editorial text-5xl sm:text-6xl font-light text-brandText">
                      {plan.price}
                    </span>
                    <span className="text-xs text-brandLightText uppercase tracking-wider font-medium">
                      / Session
                    </span>
                  </div>
                  <h3 className="font-editorial text-2xl text-brandText font-normal mt-2">
                    {plan.title}
                  </h3>
                  <p className="text-xs text-brandLightText font-light mt-1.5 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-3 my-6 pt-4 border-t border-secondaryPurple/25">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-xs text-brandText/90">
                      <div className="w-4 h-4 rounded-full bg-lightLavender flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-mutedPurple" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-6 border-t border-secondaryPurple/25">
                <button
                  onClick={onBookClick}
                  className={`w-full py-4 rounded-full text-xs uppercase font-semibold tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2 ${
                    plan.featured
                      ? 'bg-mutedPurple hover:bg-[#9677a5] text-white hover:shadow-lg hover:-translate-y-0.5'
                      : 'bg-secondaryPurple/80 hover:bg-mutedPurple text-brandText hover:text-white'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{plan.buttonText}</span>
                </button>

                <a
                  href={getWhatsAppUrl(`Hi Dr. Srushti 👋 I would like to book the ${plan.title} (${plan.duration} at ${plan.price}). Please share available slots.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full text-[11px] uppercase font-medium tracking-wider text-brandLightText hover:text-brandText transition-colors flex items-center justify-center gap-2 border border-secondaryPurple/30 hover:bg-lightLavender/40"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Enquire via WhatsApp</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
