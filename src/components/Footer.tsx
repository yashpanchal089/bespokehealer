import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../data/config';
import { InstagramIcon, FacebookIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const cleanPhone = siteConfig.displayPhoneNumber.replace(/\s+/g, '');

  return (
    <footer className="bg-softCream border-t border-secondaryPurple/30 text-brandText pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-secondaryPurple/25">
          
          {/* Brand Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-block group focus:outline-none">
              <img
                src="/bespoke-healer-logo.png"
                alt="Bespoke Healer"
                className="h-13 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 mb-2"
              />
              <span className="text-[11px] tracking-[0.22em] uppercase text-brandLightText block font-light">
                Founded by {siteConfig.founderName}
              </span>
            </Link>

            {/* Small Brand Statement */}
            <p className="text-xs uppercase tracking-widest text-mutedPurple font-medium">
              Healing • Guidance • Energy
            </p>

            <p className="text-xs text-brandLightText font-light max-w-sm leading-relaxed">
              Personal sanctuary for intuitive tarot consultations, bio-energy realignment, and ethically sourced, consecrated crystals.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-lightLavender/70 hover:bg-secondaryPurple/80 flex items-center justify-center text-brandText transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-lightLavender/70 hover:bg-secondaryPurple/80 flex items-center justify-center text-brandText transition-all"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links Column (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-mutedPurple">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-brandLightText">
              <li>
                <a href="/#about" className="hover:text-brandText transition-colors">
                  About Dr. Srushti
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-brandText transition-colors">
                  Holistic Services
                </a>
              </li>
              <li>
                <a href="/#tarot-experience" className="hover:text-brandText transition-colors">
                  Tarot Experience
                </a>
              </li>
              <li>
                <Link to="/shop" className="hover:text-brandText transition-colors">
                  Shop Creations
                </Link>
              </li>
              <li>
                <a href="/#pricing" className="hover:text-brandText transition-colors">
                  Pricing & Sessions
                </a>
              </li>
              <li>
                <a href="/#testimonials" className="hover:text-brandText transition-colors">
                  Kind Words
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-brandText transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Direct Booking (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-mutedPurple">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs text-brandLightText">
              <a
                href={`tel:${cleanPhone}`}
                className="flex items-center gap-2.5 p-3 rounded-2xl bg-warmBeige border border-secondaryPurple/30 text-brandText hover:bg-lightLavender/50 transition-colors"
              >
                <Phone className="w-4 h-4 text-mutedPurple" />
                <div>
                  <span className="block text-[10px] uppercase text-brandLightText">Telephone</span>
                  <span className="font-medium">{siteConfig.displayPhoneNumber}</span>
                </div>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-2xl bg-warmBeige border border-secondaryPurple/30 text-brandText hover:bg-lightLavender/50 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <div>
                  <span className="block text-[10px] uppercase text-brandLightText">Direct WhatsApp</span>
                  <span className="font-medium">Connect with Dr. Srushti</span>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Discreet Ethical Disclaimer Section */}
        <div className="py-6 border-b border-secondaryPurple/20">
          <p className="text-[11px] text-brandLightText/80 leading-relaxed text-center max-w-3xl mx-auto font-light">
            <strong className="font-medium text-brandText/90">Disclaimer: </strong>
            {siteConfig.disclaimer}
          </p>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-brandLightText gap-3">
          <div>
            © {new Date().getFullYear()} Bespoke Healer. All rights reserved.
          </div>

          <div className="flex items-center gap-1 text-[11px]">
            <span>Designed & Developed by</span>
            <span className="font-medium text-brandText">Mahant Software</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
