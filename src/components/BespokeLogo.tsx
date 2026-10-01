import React from 'react';

interface BespokeLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const BespokeLogo: React.FC<BespokeLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = false,
}) => {
  // Height presets
  const heightClasses = {
    sm: 'h-9 sm:h-10',
    md: 'h-11 sm:h-13',
    lg: 'h-16 sm:h-20',
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <img
        src="/bespoke-healer-logo.png"
        alt="Bespoke Healer"
        className={`${heightClasses[size]} w-auto object-contain drop-shadow-xs transition-transform duration-300 group-hover:scale-105`}
      />
      {showSubtitle && (
        <span className="text-[9px] sm:text-[10px] tracking-[0.24em] uppercase text-[#756B70] mt-1 font-light text-center">
          Dr. Srushti Garg
        </span>
      )}
    </div>
  );
};
