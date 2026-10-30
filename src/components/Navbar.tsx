import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
    { label: 'About', href: '/#about' },
    { label: 'Services', href: '/#services' },
    { label: 'Tarot', href: '/#tarot-experience' },
    { label: 'Events', href: '/#events' },
    { label: 'Shop', href: '/#shop' },
    { label: 'FAQ', href: '/#faq' },
  ];

  return (
    <>
      {/* Header: Pure white on mobile viewports (< lg), gradient/glass on desktop */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#F0E6EE]/80 py-2.5 sm:py-3'
            : 'bg-white shadow-xs border-b border-[#F0E6EE]/70 lg:bg-gradient-to-b lg:from-[#F5EFE6]/95 lg:via-[#F5EFE6]/70 lg:to-transparent lg:shadow-none lg:border-b-0 py-2.5 sm:py-3.5 lg:py-5'
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
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
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
              className="p-2 min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-gradient-to-r from-[#f09433]/15 via-[#dc2743]/15 to-[#bc1888]/15 text-[#c13584] border border-[#dc2743]/25 active:scale-95 transition-transform"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <button
              onClick={onBookClick}
              className="px-3.5 py-2 min-h-[38px] rounded-full text-xs font-semibold uppercase tracking-wider bg-[#2B1F27] active:bg-[#43313D] text-white shadow-xs active:scale-95 transition-all"
            >
              Book
            </button>

            {/* Animated Hamburger Button with Morphing 3-Bar to X */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 min-w-[42px] min-h-[42px] flex items-center justify-center rounded-xl bg-gray-50/90 hover:bg-gray-100 active:bg-gray-200 border border-gray-200/60 text-[#2B2329] transition-all focus:outline-none"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-5 h-3.5 flex flex-col justify-between items-center relative pointer-events-none">
                <motion.span
                  animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="w-5 h-0.5 bg-[#2B2329] rounded-full origin-center"
                />
                <motion.span
                  animate={mobileMenuOpen ? { opacity: 0, x: -6 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className="w-5 h-0.5 bg-[#2B2329] rounded-full"
                />
                <motion.span
                  animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="w-5 h-0.5 bg-[#2B2329] rounded-full origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ================= COMPACT MOBILE FLOATING MENU (White background, takes only required height) ================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Click-away backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/25 backdrop-blur-xs md:hidden"
            />

            {/* Compact Floating White Dropdown Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="fixed top-[58px] sm:top-[66px] left-3 right-3 sm:left-6 sm:right-6 z-50 md:hidden bg-white rounded-3xl border border-[#F0E6EE] shadow-2xl p-4 sm:p-5 flex flex-col gap-3"
            >
              {/* Navigation Links Grid (2-column layout to keep it compact and easy to reach) */}
              <nav className="grid grid-cols-2 gap-1.5 py-1">
                {navLinks.map((link) => {
                  const isAnchor = link.href.startsWith('/#');
                  const targetHref = isAnchor && location.pathname === '/' ? link.href.replace('/', '') : link.href;
                  return (
                    <a
                      key={link.label}
                      href={targetHref}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium tracking-wide text-[#3D333B] hover:text-[#2B1F27] hover:bg-[#F8EBF4]/70 active:bg-[#F8EBF4] transition-all flex items-center justify-between group"
                    >
                      <span>{link.label}</span>
                      <span className="text-[#D380B8] opacity-60 group-hover:opacity-100 transition-opacity text-[10px]">✦</span>
                    </a>
                  );
                })}
              </nav>

              {/* Bottom Quick Actions */}
              <div className="pt-3 border-t border-[#F0E6EE] flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookClick();
                  }}
                  className="w-full py-3 min-h-[44px] rounded-full bg-[#2B1F27] active:bg-[#43313D] text-white font-medium text-xs tracking-wider uppercase shadow-sm active:scale-98 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#E7DCEF]" />
                  <span>Book a Session</span>
                </button>

                <div className="grid grid-cols-2 gap-2 pt-0.5">
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 min-h-[40px] rounded-full bg-gradient-to-r from-[#f09433]/10 via-[#dc2743]/10 to-[#bc1888]/10 text-[#bc1888] border border-[#dc2743]/25 text-xs font-semibold active:scale-95 transition-transform"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </a>

                  <a
                    href={siteConfig.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 min-h-[40px] rounded-full bg-[#1877F2]/10 text-[#1877F2] border border-[#1877F2]/25 text-xs font-semibold active:scale-95 transition-transform"
                  >
                    <FacebookIcon className="w-3.5 h-3.5" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
