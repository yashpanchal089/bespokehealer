import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/config';
import { InstagramIcon, FacebookIcon } from './SocialIcons';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/#hero' },
    { label: 'Services', href: '/#services' },
    { label: 'About', href: '/#about' },
    { label: 'Tarot', href: '/#tarot-experience' },
    { label: 'Shop', href: '/shop' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'FAQ', href: '/#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-nav py-3 shadow-sm'
            : 'bg-gradient-to-b from-[#F5EFE6]/95 via-[#F5EFE6]/70 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* ================= LEFT: Brand Logo (Official Client Logo) ================= */}
          <Link
            to="/"
            className="group flex flex-col items-start gap-0.5 focus:outline-none"
            aria-label="Bespoke Healer"
          >
            <img
              src="/bespoke-healer-logo.png"
              alt="Bespoke Healer"
              className="h-11 sm:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-[9.5px] sm:text-[10.5px] tracking-[0.24em] uppercase text-brandLightText font-light pl-0.5">
              {siteConfig.founderName}
            </span>
          </Link>

          {/* ================= CENTER: Creative Floating Glass Capsule Dock ================= */}
          <nav className="hidden lg:flex items-center bg-[#FBF8F3]/90 backdrop-blur-md border border-[#E5A8CE]/50 px-2.5 py-1.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
            {navLinks.map((link) => {
              const isExternalOrAnchor = link.href.startsWith('/#');
              const linkClasses =
                "px-3.5 py-1 rounded-full text-xs font-medium tracking-wider uppercase text-[#554952] hover:text-[#251B22] hover:bg-[#E7DCEF]/70 transition-all duration-200";

              if (isExternalOrAnchor && location.pathname === '/') {
                return (
                  <a
                    key={link.label}
                    href={link.href.replace('/', '')}
                    className={linkClasses}
                  >
                    {link.label}
                  </a>
                );
              }
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={linkClasses}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* ================= RIGHT: Clean Social Logos & Luxury CTA ================= */}
          <div className="hidden md:flex items-center space-x-3">
            
            {/* Instagram Icon Button */}
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              aria-label="Instagram"
              className="group relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#f09433]/15 via-[#dc2743]/15 to-[#bc1888]/15 hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] border border-[#dc2743]/35 hover:border-transparent text-[#bc1888] hover:text-white transition-all duration-300 shadow-xs hover:shadow-md hover:scale-110 active:scale-95"
            >
              <InstagramIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
            </a>

            {/* Facebook Icon Button */}
            <a
              href={siteConfig.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
              aria-label="Facebook"
              className="group relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#1877F2]/10 hover:bg-[#1877F2] border border-[#1877F2]/30 hover:border-transparent text-[#1877F2] hover:text-white transition-all duration-300 shadow-xs hover:shadow-md hover:scale-110 active:scale-95"
            >
              <FacebookIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
            </a>

            {/* Creative Luxury Book Session CTA */}
            <button
              onClick={onBookClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#2B1F27] hover:bg-[#43313D] text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E7DCEF]" />
              <span>Book Session</span>
            </button>
          </div>

          {/* ================= MOBILE CONTROLS ================= */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-full bg-gradient-to-r from-[#f09433]/20 via-[#dc2743]/20 to-[#bc1888]/20 text-[#c13584] border border-[#dc2743]/30"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <button
              onClick={onBookClick}
              className="px-3.5 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#2B1F27] text-white shadow-xs"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-brandText hover:bg-lightLavender/40 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE DRAWER MENU ================= */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-warmBeige/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-10 animate-fadeIn">
          <nav className="flex flex-col space-y-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-editorial text-2xl text-brandText hover:text-mutedPurple transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-secondaryPurple/30 flex flex-col items-center gap-4">
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-full bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white text-xs font-semibold shadow-md"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Instagram</span>
              </a>

              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-full bg-[#1877F2] text-white text-xs font-semibold shadow-md"
              >
                <FacebookIcon className="w-4 h-4" />
                <span>Facebook</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-3.5 rounded-full bg-[#2B1F27] text-white font-medium text-sm tracking-wider uppercase shadow-md"
            >
              Book a 60-Minute Session
            </button>
          </div>
        </div>
      )}
    </>
  );
};
