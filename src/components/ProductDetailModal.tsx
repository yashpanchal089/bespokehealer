import React from 'react';
import { X, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import type { Product } from '../data/products';
import { getProductWhatsAppUrl } from '../data/config';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const whatsappLink = getProductWhatsAppUrl(product.name);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brandText/40 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-softCream rounded-3xl overflow-hidden border border-secondaryPurple/40 shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-brandText transition-colors shadow-sm"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Media Column */}
        <div className="md:w-1/2 relative bg-warmBeige min-h-[260px] md:min-h-[420px] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-softCream/40 via-transparent to-transparent" />
          
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-secondaryPurple/30 text-[10px] font-semibold uppercase tracking-wider text-brandText shadow-sm">
              {product.categoryLabel}
            </span>
          </div>
        </div>

        {/* Product Details & WhatsApp CTA Column */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-mutedPurple flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                {product.subcategory || "Curated Essential"}
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-brandText font-normal mt-1">
                {product.name}
              </h3>
              {product.price && (
                <div className="font-editorial text-2xl text-brandText font-semibold mt-1">
                  {product.price}
                </div>
              )}
            </div>

            {/* Short 2-3 Line Description */}
            <p className="text-xs sm:text-sm text-brandLightText leading-relaxed">
              {product.shortDescription}
            </p>

            <div className="p-3.5 rounded-2xl bg-warmBeige/80 border border-secondaryPurple/30 space-y-2">
              <p className="text-xs text-brandText font-light leading-relaxed">
                {product.description}
              </p>
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>{product.availability} • Cleansed & Energized</span>
              </div>
            </div>
          </div>

          {/* Enquire on WhatsApp button */}
          <div className="pt-6 border-t border-secondaryPurple/25 space-y-2 mt-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase font-semibold tracking-wider transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Enquire on WhatsApp</span>
            </a>

            <p className="text-[10px] text-center text-brandLightText font-light">
              Connect directly with Dr. Srushti for custom sizing, personalization, and dispatch details.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
