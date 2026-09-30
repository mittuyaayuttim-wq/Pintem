import React from 'react';
import { useGallery } from '../context/GalleryContext';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const {
    t,
    setSelectedCategory,
    setSearchQuery,
    setIsUploadModalOpen,
    setIsAboutModalOpen,
    setIsPrivacyModalOpen,
  } = useGallery();

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedCategory('all');
    setSearchQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoriesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('explore-gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-neutral-200/80 mt-20 pt-12 pb-10 text-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-neutral-100">
          {/* Brand & Description */}
          <div className="max-w-md">
            <button
              onClick={handleHomeClick}
              className="flex items-center mb-3 cursor-pointer text-left"
            >
              <BrandLogo size="md" showText={true} />
            </button>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              {t.footerDesc}
            </p>
          </div>

          {/* Footer Navigation Links per specification */}
          <nav className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-medium text-neutral-600">
            <button
              onClick={handleHomeClick}
              className="hover:text-black transition-colors cursor-pointer"
            >
              {t.footerHome}
            </button>
            <button
              onClick={handleCategoriesClick}
              className="hover:text-black transition-colors cursor-pointer"
            >
              {t.footerCategories}
            </button>
            <button
              onClick={() => setIsUploadModalOpen(true)}
              className="hover:text-black transition-colors cursor-pointer"
            >
              {t.footerUpload}
            </button>
            <button
              onClick={() => setIsAboutModalOpen(true)}
              className="hover:text-black transition-colors cursor-pointer"
            >
              {t.footerAbout}
            </button>
            <button
              onClick={() => setIsPrivacyModalOpen(true)}
              className="hover:text-black transition-colors cursor-pointer"
            >
              {t.footerPrivacy}
            </button>
          </nav>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© 2026 AI Gallery. {t.footerAllRights}</p>
          <p className="font-mono text-[11px]">v1.0 · Pinterest-Inspired AI Discovery</p>
        </div>
      </div>
    </footer>
  );
};
