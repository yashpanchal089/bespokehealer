import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/config';
import instagramBannerImg from '../assets/instagram-connect-banner.png';

export const InstagramBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F5EFE6] via-[#FAF3EE] to-[#FBF8F3] border-t border-b border-secondaryPurple/25">
      {/* Background Soft Glow matching website brand palette */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-secondaryPurple/20 filter blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-lightLavender/60 filter blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">

        {/* Banner Graphic Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full relative group"
        >
          {/* Subtle Outer Glow on Hover */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-secondaryPurple/30 via-mutedPurple/20 to-secondaryPurple/30 opacity-40 group-hover:opacity-80 blur-lg transition duration-500" />

          {/* Banner Container with exact aspect ratio (1024 / 349) */}
          <div className="relative w-full aspect-[1024/349] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-secondaryPurple/40 bg-[#FAF3EE]">
            <img
              src={instagramBannerImg}
              alt="Connect with us on Instagram @bespokehealer"
              className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-700 ease-out"
            />

            {/* Clickable Link for the entire Banner & @bespokehealer button */}
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 cursor-pointer group/link"
              aria-label="Open Bespoke Healer Instagram @bespokehealer"
              title="Open @bespokehealer on Instagram"
            >
              {/* Interactive subtle focus highlight on @bespokehealer button */}
              <span className="absolute left-[42.5%] top-[51%] w-[34%] h-[24%] rounded-full border-2 border-transparent group-hover/link:border-mutedPurple/50 group-hover/link:bg-mutedPurple/10 transition-all duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
