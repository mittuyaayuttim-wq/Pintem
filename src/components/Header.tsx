import React, { useState, useRef, useEffect } from 'react';
import { useGallery } from '../context/GalleryContext';
import { BrandLogo } from './BrandLogo';
import { SearchBar } from './SearchBar';
import { LanguageSelector } from './LanguageSelector';
import { Plus, User, Heart, Image as ImageIcon, Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  const {
    t,
    setIsUploadModalOpen,
    setSelectedCategory,
    setSearchQuery,
    setShowWelcome,
    images,
    favorites,
  } = useGallery();

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  const myUploadsCount = images.filter((img) => img.isUserUploaded).length;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogoClick = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-neutral-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-3 sm:gap-6">
        {/* Left: Brand Logo & Title */}
        <div className="shrink-0 flex items-center">
          <button
            onClick={handleLogoClick}
            className="flex items-center text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-lg cursor-pointer"
            title="AI Gallery Bosh sahifasi"
          >
            <BrandLogo size="md" showText={true} />
          </button>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 flex justify-center px-1 sm:px-4">
          <SearchBar />
        </div>

        {/* Right: Upload Button, Language Selector, User Profile */}
        <div className="shrink-0 flex items-center gap-2 sm:gap-3">
          {/* Upload Button */}
          <button
            onClick={() => setIsUploadModalOpen(true)}
            className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 bg-neutral-950 text-white font-medium text-xs sm:text-sm rounded-full hover:bg-neutral-800 transition-all duration-200 shadow-xs active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span className="hidden md:inline">{t.uploadImage}</span>
            <span className="md:hidden">Yuklash</span>
          </button>

          {/* Language Selector */}
          <LanguageSelector />

          {/* User/Profile Icon with Dropdown Summary */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              aria-label="Foydalanuvchi profili"
              aria-expanded={isProfileOpen}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neutral-100 hover:bg-neutral-200/80 text-neutral-800 flex items-center justify-center transition-colors cursor-pointer border border-neutral-200/80 focus-visible:ring-2 focus-visible:ring-neutral-400"
            >
              <User className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-700" />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white border border-neutral-200 rounded-2xl shadow-xl p-4 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="flex items-center gap-3 pb-3 border-b border-neutral-100">
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">
                    AI
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-sm font-semibold text-neutral-950 truncate">
                      AI Ijodkor
                    </p>
                    <p className="text-xs text-neutral-500 truncate">creator@aigallery.uz</p>
                  </div>
                </div>

                <div className="py-2.5 space-y-1.5 text-xs text-neutral-600">
                  <div className="flex items-center justify-between px-2 py-1.5 rounded-lg bg-neutral-50">
                    <div className="flex items-center gap-2">
                      <ImageIcon className="w-3.5 h-3.5 text-neutral-500" />
                      <span>Yuklangan rasmlar:</span>
                    </div>
                    <span className="font-semibold text-neutral-900">{myUploadsCount}</span>
                  </div>

                  <div className="flex items-center justify-between px-2 py-1.5 rounded-lg bg-neutral-50">
                    <div className="flex items-center gap-2">
                      <Heart className="w-3.5 h-3.5 text-red-500" />
                      <span>Yoqtirilganlar:</span>
                    </div>
                    <span className="font-semibold text-neutral-900">{favorites.length}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-100 flex flex-col gap-1">
                  <button
                    onClick={() => {
                      setIsUploadModalOpen(true);
                      setIsProfileOpen(false);
                    }}
                    className="w-full text-left px-2.5 py-1.5 text-xs font-medium text-neutral-800 hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <Plus className="w-3.5 h-3.5 text-neutral-600" />
                    <span>Yangi rasm yuklash</span>
                  </button>
                  <button
                    onClick={() => {
                      setShowWelcome(true);
                      setIsProfileOpen(false);
                    }}
                    className="w-full text-left px-2.5 py-1.5 text-xs font-medium text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Kirish oynasini ochish</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
