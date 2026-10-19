import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'footer';
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'light',
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 cursor-pointer group select-none ${className}`}
      role="banner"
      aria-label="Lawrence and Sons Roofing Inc"
    >
      {variant === 'dark' || variant === 'footer' ? (
        <div className="bg-white p-1.5 rounded-sm shadow-sm transition-transform duration-200 group-hover:scale-[1.02]">
          <img
            src="/images/logo.jpg"
            alt="Lawrence & Sons Roofing Inc."
            className="h-10 md:h-12 w-auto object-contain"
            width={180}
            height={48}
            loading="eager"
          />
        </div>
      ) : (
        <div className="transition-transform duration-200 group-hover:scale-[1.01]">
          <img
            src="/images/logo.jpg"
            alt="Lawrence & Sons Roofing Inc."
            className="h-11 md:h-14 w-auto object-contain"
            width={200}
            height={56}
            loading="eager"
          />
        </div>
      )}
    </div>
  );
};
