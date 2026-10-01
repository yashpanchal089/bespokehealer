import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { productsData, productCategories } from '../data/products';
import type { Product } from '../data/products';
import { ProductDetailModal } from './ProductDetailModal';
import { getProductWhatsAppUrl } from '../data/config';

interface ShopSectionProps {
  isFullCatalogPage?: boolean;
}

export const ShopSection: React.FC<ShopSectionProps> = ({ isFullCatalogPage = false }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  // Filter products by selected category
  const filteredProducts = productsData.filter((product) => {
    if (selectedCategory === 'all') {
      return isFullCatalogPage ? true : product.featured;
    }
    return product.category === selectedCategory;
  });

  // Limit display on homepage
  const displayedProducts = isFullCatalogPage ? filteredProducts : filteredProducts.slice(0, 8);

  return (
    <section id="shop" className="py-24 relative overflow-hidden bg-grain">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full lavender-glow pointer-events-none filter blur-3xl opacity-35" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-mutedPurple">
            <span>✦</span>
            <span>Spiritual Boutique</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-brandText font-normal">
            Take the energy home.
          </h2>

          <p className="text-sm sm:text-base text-brandLightText font-light max-w-md">
            Curated spiritual & self-care essentials, blessed and hand-energized.
          </p>
        </div>

        {/* Dynamic Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-14">
          {productCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                  isSelected
                    ? 'bg-mutedPurple text-white shadow-md'
                    : 'bg-softCream/80 text-brandLightText hover:text-brandText hover:bg-lightLavender/70 border border-secondaryPurple/30'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid: Luxury Spiritual Boutique */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {displayedProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (idx % 4) * 0.1 }}
              className="group flex flex-col justify-between rounded-3xl overflow-hidden bg-softCream border border-secondaryPurple/40 shadow-sm hover:shadow-xl transition-all duration-500 glass-card-hover"
            >
              {/* Product Visual Container */}
              <div
                onClick={() => setActiveProduct(product)}
                className="relative aspect-square w-full overflow-hidden bg-warmBeige cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-warmBeige/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                {/* Subcategory Pill */}
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-semibold uppercase tracking-wider text-brandText border border-secondaryPurple/30 shadow-sm">
                  {product.categoryLabel}
                </span>

                {/* Hover Quick Action Badge */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brandText/15 backdrop-blur-[2px]">
                  <span className="px-4 py-2 rounded-full bg-softCream text-xs font-semibold uppercase tracking-wider text-brandText shadow-lg flex items-center gap-1.5">
                    <span>Quick View</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[10px] tracking-widest uppercase text-mutedPurple font-mono">
                      {product.subcategory || "Curated"}
                    </span>
                    {product.price && (
                      <span className="font-editorial text-lg font-semibold text-brandText">
                        {product.price}
                      </span>
                    )}
                  </div>

                  <h3
                    onClick={() => setActiveProduct(product)}
                    className="font-editorial text-xl sm:text-2xl text-brandText font-normal cursor-pointer hover:text-mutedPurple transition-colors leading-tight"
                  >
                    {product.name}
                  </h3>

                  <p className="text-xs text-brandLightText font-light line-clamp-2 leading-relaxed">
                    {product.shortDescription}
                  </p>
                </div>

                {/* Card Action Row */}
                <div className="pt-3 border-t border-secondaryPurple/25 flex items-center justify-between">
                  <button
                    onClick={() => setActiveProduct(product)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-mutedPurple hover:text-brandText transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={getProductWhatsAppUrl(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Enquire about ${product.name} on WhatsApp`}
                    className="p-2 rounded-full bg-lightLavender/80 hover:bg-[#25D366] hover:text-white text-brandText transition-all duration-300"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Homepage Preview Bottom Link: Explore the Shop */}
        {!isFullCatalogPage && (
          <div className="mt-16 text-center">
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-softCream hover:bg-lightLavender border border-secondaryPurple/50 text-xs font-semibold uppercase tracking-wider text-brandText transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
            >
              <Sparkles className="w-4 h-4 text-mutedPurple" />
              <span>Explore Complete Shop Catalog</span>
              <ArrowRight className="w-4 h-4 text-mutedPurple group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}

      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
      />
    </section>
  );
};
