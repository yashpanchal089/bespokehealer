import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, HeartHandshake, Truck } from 'lucide-react';
import { ShopSection } from '../components/ShopSection';
import { siteConfig } from '../data/config';

export const ShopPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-grain">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center space-y-4">
        {/* Back Link */}
        <div className="flex justify-start">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-mutedPurple hover:text-brandText transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Sanctuary</span>
          </Link>
        </div>

        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-mutedPurple">
          <span>✦ Curated Offerings</span>
        </div>

        <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-brandText font-normal">
          The Bespoke Boutique
        </h1>

        <p className="text-sm sm:text-base text-brandLightText font-light max-w-xl mx-auto leading-relaxed">
          Every crystal is handpicked, moon-bathed, and energetically consecrated before reaching your doorstep. Organic bath salts are blended in small, intentional batches.
        </p>

        {/* Guarantees Bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-brandLightText">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-mutedPurple" />
            <span>100% Natural Earth Crystals</span>
          </div>
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-4 h-4 text-mutedPurple" />
            <span>Blessed by {siteConfig.founderName}</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-mutedPurple" />
            <span>Pan-India Secure Dispatch</span>
          </div>
        </div>
      </div>

      {/* Full Catalog with all categories */}
      <ShopSection isFullCatalogPage={true} />
    </div>
  );
};
