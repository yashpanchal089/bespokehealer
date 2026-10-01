import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/config';
import { InstagramIcon, FacebookIcon } from './SocialIcons';

export const InstagramSection: React.FC = () => {
  const instagramPosts = [
    {
      id: "post-1",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop",
      caption: "Quiet mornings with the cards & sacred lavender tea."
    },
    {
      id: "post-2",
      image: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?q=80&w=600&auto=format&fit=crop",
      caption: "Cleansing raw amethyst clusters beneath the waxing moon."
    },
    {
      id: "post-3",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop",
      caption: "Freshly blended Nazar protection salts ready for dispatch."
    },
    {
      id: "post-4",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=600&auto=format&fit=crop",
      caption: "Heart chakra activation with raw Madagascar rose quartz."
    },
    {
      id: "post-5",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop",
      caption: "Preparing for a 60-minute personal distant healing session."
    },
    {
      id: "post-6",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop",
      caption: "Sunlight catching the 7-chakra brass wall hanging."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-mutedPurple">
            <span>✦</span>
            <span>Social Sanctuary</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-brandText font-normal">
            Stay connected.
          </h2>

          <p className="text-sm sm:text-base text-brandLightText font-light max-w-md">
            Daily glimpses into intuitive readings, crystal blessings, and sacred rituals.
          </p>
        </div>

        {/* 6-Image Instagram Grid (Do not overcrowd) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 mb-12">
          {instagramPosts.map((post, idx) => (
            <motion.a
              key={post.id}
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-warmBeige border border-secondaryPurple/30 shadow-sm block"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-[#40383F]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3 text-center">
                <InstagramIcon className="w-6 h-6 text-white" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-softCream hover:bg-lightLavender border border-secondaryPurple/40 text-xs font-semibold uppercase tracking-wider text-brandText transition-all duration-300 shadow-sm hover:shadow-md group"
          >
            <InstagramIcon className="w-4 h-4 text-mutedPurple" />
            <span>Follow on Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-brandLightText group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href={siteConfig.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-medium uppercase tracking-wider text-brandLightText hover:text-brandText transition-colors"
          >
            <FacebookIcon className="w-4 h-4 text-mutedPurple" />
            <span>Join on Facebook</span>
          </a>
        </div>

      </div>
    </section>
  );
};
