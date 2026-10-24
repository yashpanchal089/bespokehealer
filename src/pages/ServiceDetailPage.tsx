import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Sparkles,
  Clock,
  MessageCircle,
  CheckCircle2,
  Heart,
  ArrowRight
} from 'lucide-react';
import { servicesData } from '../data/services';
import type { Service } from '../data/services';
import { siteConfig, getServiceWhatsAppUrl } from '../data/config';

interface ServiceDetailPageProps {
  onBookClick: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ onBookClick }) => {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();

  // Find service by slug or id; default to first service
  const currentService = servicesData.find(
    (s) => s.slug === slug || s.id === slug
  ) || servicesData[0];

  const isCrystals = currentService.slug === 'crystals' || currentService.id === 'crystals-guidance';

  const handleSelectService = (service: Service) => {
    navigate(`/services/${service.slug}`);
  };

  const otherServices = servicesData.filter((s) => s.id !== currentService.id);

  return (
    <div className="pt-24 sm:pt-28 pb-20 min-h-screen bg-[#F5EFE6] selection:bg-[#F8EBF4] selection:text-[#40383F]">
      {/* Decorative ambient background glows */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full lavender-glow pointer-events-none filter blur-3xl opacity-30" />
      <div className="absolute top-96 left-5 w-80 h-80 rounded-full warm-glow pointer-events-none filter blur-3xl opacity-30" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">

        {/* ================= 1. Top Navigation & Return Link ================= */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-b border-secondaryPurple/20 pb-6">
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-mutedPurple hover:text-brandText transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Sanctuary</span>
          </Link>

          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-mutedPurple bg-warmBeige/80 px-3.5 py-1 rounded-full border border-secondaryPurple/30 self-start sm:self-auto">
            <span>✦</span>
            <span>Personal 1-on-1 Sanctuary</span>
            <span>✦</span>
          </div>
        </div>

        {/* ================= 2. Editorial Header & 3 Services Switcher Tabs ================= */}
        <div className="text-center space-y-5 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-mutedPurple">
            <span>✦ Sacred Offerings ✦</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-brandText font-normal leading-tight">
            {currentService.name}
          </h1>

          {(currentService.subtitle || currentService.shortDescription) && (
            <p className="font-editorial text-xl sm:text-2xl text-mutedPurple italic font-normal">
              {currentService.subtitle || currentService.shortDescription}
            </p>
          )}

          <p className="text-sm sm:text-base text-brandLightText font-light leading-relaxed max-w-2xl mx-auto">
            {currentService.tagline || currentService.description}
          </p>

          {/* 3 Core Services Switcher Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {servicesData.map((service) => {
              const isActive = service.id === currentService.id;
              return (
                <button
                  key={service.id}
                  onClick={() => handleSelectService(service)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${isActive
                      ? 'bg-brandText text-white shadow-md scale-105'
                      : 'bg-softCream text-brandText border border-secondaryPurple/40 hover:bg-lightLavender hover:border-mutedPurple'
                    }`}
                >
                  <Sparkles className={`w-3.5 h-3.5 ${isActive ? 'text-secondaryPurple' : 'text-mutedPurple'}`} />
                  <span>{service.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= 3. Main Showcase Spotlight Card (Two Columns) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start bg-softCream/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10 border border-secondaryPurple/30 shadow-xl">

          {/* Left Column: Visual & Quick Booking Hub */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-secondaryPurple/30 bg-warmBeige/20 aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
              <img
                src={currentService.image}
                alt={currentService.name}
                className={`w-full h-full object-cover ${currentService.imagePosition || 'object-center'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-softCream/95 backdrop-blur-md text-[10px] font-semibold uppercase tracking-[0.2em] text-mutedPurple border border-secondaryPurple/40 shadow-sm">
                  ✦ {currentService.editorialHighlight || 'Signature Offering'}
                </span>
              </div>

              {/* Bottom Floating Stats */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-softCream/95 backdrop-blur-md border border-secondaryPurple/30 shadow-md text-xs">
                <div className="flex items-center gap-1.5 text-brandText font-medium">
                  <Clock className="w-4 h-4 text-mutedPurple" />
                  <span>{currentService.duration}</span>
                </div>
                <div className="font-editorial text-lg font-semibold text-brandText">
                  {currentService.price}
                </div>
              </div>
            </div>



          </div>

          {/* Right Column: Deep Dive & Details */}
          <div className="lg:col-span-7 space-y-8">

            {/* The Essence & Philosophy */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-mutedPurple">
                <span>✦ The Philosophy & Essence</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl text-brandText font-normal">
                {currentService.philosophyTitle || (isCrystals ? "What are Crystals?" : "How this session transforms your energy")}
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-brandLightText font-light leading-relaxed">
                {currentService.philosophy ? (
                  currentService.philosophy.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))
                ) : (
                  <p>{currentService.description}</p>
                )}
              </div>
            </div>

            {/* What is Included in Your Session */}
            {currentService.whatIsIncluded && currentService.whatIsIncluded.length > 0 && (
              <div className="space-y-4 pt-2">
                <h3 className="font-editorial text-2xl text-brandText font-normal">
                  What is included in your session
                </h3>
                <div className="grid grid-cols-1 gap-2.5">
                  {currentService.whatIsIncluded.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-warmBeige/50 border border-secondaryPurple/20 text-xs sm:text-sm text-brandText"
                    >
                      <CheckCircle2 className="w-4 h-4 text-mutedPurple shrink-0 mt-0.5" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Founder Note Quote */}


          </div>
        </div>

        {/* ================= Tarot Rate Cards (Informational Only) ================= */}
        {currentService.id === 'tarot-reading' && (
          <div className="space-y-4 pt-2">
            <div className="text-center space-y-1">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-mutedPurple">
                ✦ Consultation Options
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-brandText font-normal">
                Tarot Session Plans
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {/* Card 1: 1 Question */}
              <div className="p-5 rounded-2xl bg-white border border-secondaryPurple/30 shadow-xs hover:border-secondaryPurple/60 transition-all flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-lightLavender text-[10px] font-semibold uppercase tracking-wider text-mutedPurple border border-secondaryPurple/30">
                      Single Focus
                    </span>
                    <span className="font-editorial text-2xl font-semibold text-brandText">
                      ₹500
                    </span>
                  </div>
                  <h4 className="font-editorial text-lg text-brandText font-normal">
                    1 Question Reading
                  </h4>
                  <p className="text-xs text-brandLightText font-light leading-relaxed">
                    Direct, targeted clarity and guidance for one specific question.
                  </p>
                </div>
              </div>

              {/* Card 2: 60 Minutes */}
              <div className="p-5 rounded-2xl bg-white border border-secondaryPurple/30 shadow-xs hover:border-secondaryPurple/60 transition-all flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-lightLavender text-[10px] font-semibold uppercase tracking-wider text-mutedPurple border border-secondaryPurple/30">
                      Full Immersion
                    </span>
                    <span className="font-editorial text-2xl font-semibold text-brandText">
                      ₹2,000
                    </span>
                  </div>
                  <h4 className="font-editorial text-lg text-brandText font-normal">
                    60 Minutes Session
                  </h4>
                  <p className="text-xs text-brandLightText font-light leading-relaxed">
                    Unlimited questions for 60 minutes with personalized solutions and complete life-path guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= 4. Key Benefits Grid ================= */}
        {currentService.benefits && currentService.benefits.length > 0 && (
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-mutedPurple">
                ✦ Measurable Shifts
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-brandText font-normal">
                What you take away from this experience
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 max-w-4xl mx-auto">
              {currentService.benefits.map((benefit, idx) => {
                const hasDesc = Boolean(benefit.description && benefit.description.trim() !== '' && benefit.description.trim() !== '.');
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl bg-softCream border border-secondaryPurple/30 shadow-xs hover:border-secondaryPurple/60 transition-all ${
                      hasDesc ? 'p-5 sm:p-6 space-y-2' : 'p-3.5 sm:p-4 flex items-center gap-2.5'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-lightLavender flex items-center justify-center text-mutedPurple text-xs font-semibold shrink-0">
                        ✦
                      </span>
                      <h3 className="font-editorial text-base sm:text-lg text-brandText font-normal">
                        {benefit.title}
                      </h3>
                    </div>
                    {hasDesc && (
                      <p className="text-xs sm:text-sm text-brandLightText font-light leading-relaxed pl-8">
                        {benefit.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ================= 5. Step-by-Step Experience Journey ================= */}
        {currentService.processSteps && currentService.processSteps.length > 0 && (
          <div className="space-y-8 bg-warmBeige/40 rounded-3xl p-6 sm:p-10 border border-secondaryPurple/20">
            <div className="text-center space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-mutedPurple">
                ✦ The Flow
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-brandText font-normal">
                How your session unfolds
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentService.processSteps.map((step) => (
                <div
                  key={step.step}
                  className="p-5 rounded-2xl bg-softCream border border-secondaryPurple/30 shadow-sm space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="font-editorial text-2xl font-bold text-mutedPurple">
                      {step.step}
                    </span>
                    <h3 className="font-editorial text-lg text-brandText font-normal leading-snug">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs text-brandLightText font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= 6. Who Is This For? ================= */}
        {currentService.whoIsThisFor && currentService.whoIsThisFor.length > 0 && (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-mutedPurple">
                ✦ Resonance
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl text-brandText font-normal">
                Who this session is designed for
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {currentService.whoIsThisFor.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-softCream border border-secondaryPurple/30 text-xs sm:text-sm text-brandText shadow-sm"
                >
                  <Heart className="w-4 h-4 text-mutedPurple shrink-0 mt-0.5" />
                  <span className="font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= 8. Bottom Elegant Booking Banner (Tarot & Energy Healing) ================= */}
        {!isCrystals && (
          <div className="rounded-3xl p-8 sm:p-12 text-center bg-gradient-to-br from-softCream via-lightLavender/40 to-warmBeige border border-secondaryPurple/40 shadow-xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-mutedPurple">
              <span>✦ Begin Your Transformation ✦</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-brandText font-normal">
              Ready to book your {currentService.name}?
            </h2>

            <p className="text-sm sm:text-base text-brandLightText font-light max-w-xl mx-auto leading-relaxed">
              Reserve your confidential session with {siteConfig.founderName}. Connect online from anywhere in the world, or inquire for private in-person slots.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brandText hover:bg-mutedPurple text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105"
              >
                <Sparkles className="w-4 h-4 text-secondaryPurple" />
                <span>Book Session ({currentService.price})</span>
              </button>

              <a
                href={getServiceWhatsAppUrl(currentService.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Direct WhatsApp Slot</span>
              </a>
            </div>
          </div>
        )}

        {/* ================= 9. Explore Other Offerings ================= */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b border-secondaryPurple/20 pb-4">
            <h3 className="font-editorial text-2xl text-brandText font-normal">
              Explore other core offerings
            </h3>
            <Link
              to="/#services"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-mutedPurple hover:text-brandText transition-colors"
            >
              <span>View all on Home</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherServices.map((service) => (
              <div
                key={service.id}
                onClick={() => handleSelectService(service)}
                className="group p-5 rounded-2xl bg-softCream border border-secondaryPurple/30 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col sm:flex-row items-center gap-4 hover:-translate-y-1"
              >
                <div className="w-full sm:w-28 h-32 sm:h-28 rounded-xl overflow-hidden shrink-0 bg-warmBeige/30">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 space-y-1.5 text-center sm:text-left">
                  <span className="text-[10px] uppercase tracking-widest text-mutedPurple font-semibold">
                    ✦ {service.duration} • {service.price}
                  </span>
                  <h4 className="font-editorial text-xl text-brandText font-normal group-hover:text-mutedPurple transition-colors">
                    {service.name}
                  </h4>
                  <p className="text-xs text-brandLightText font-light line-clamp-2">
                    {service.shortDescription}
                  </p>
                  <div className="pt-1">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-mutedPurple group-hover:translate-x-1 transition-transform">
                      <span>View Session Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
export default ServiceDetailPage;
