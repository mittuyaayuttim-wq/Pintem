import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
}) => {
  const sizeMap = {
    sm: { icon: 'w-7 h-7', text: 'text-base' },
    md: { icon: 'w-9 h-9', text: 'text-xl' },
    lg: { icon: 'w-14 h-14', text: 'text-3xl' },
    xl: { icon: 'w-20 h-20', text: 'text-4xl' },
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* 
        Pinterest-inspired brand mark.
        Per requirement: Use ONLY black for the logo/icon.
      */}
      <div
        className={`${sizeMap[size].icon} bg-black rounded-full flex items-center justify-center shrink-0 shadow-xs transition-transform duration-300 hover:scale-105`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-3/5 h-3/5 fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Elegant Pinterest-inspired fluid 'P' / pin silhouette */}
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.365-.053.225-.174.271-.401.165-1.495-.695-2.43-2.876-2.43-4.629 0-3.774 2.743-7.24 7.906-7.24 4.15 0 7.377 2.957 7.377 6.909 0 4.124-2.599 7.442-6.208 7.442-1.212 0-2.352-.63-2.743-1.377l-.746 2.846c-.27 1.04-.999 2.344-1.488 3.136 1.118.345 2.307.533 3.538.533 6.627 0 12-5.373 12-12S18.627 0 12 0z" />
        </svg>
      </div>

      {showText && (
        <span
          className={`font-semibold tracking-tight text-black ${sizeMap[size].text}`}
          style={{ fontFamily: 'var(--font-display)' }}
        >
          AI Gallery
        </span>
      )}
    </div>
  );
};
