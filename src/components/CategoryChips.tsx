import React, { useRef } from 'react';
import { useGallery } from '../context/GalleryContext';
import { CategoryKey } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const CategoryChips: React.FC = () => {
  const { selectedCategory, setSelectedCategory, t } = useGallery();
  const scrollRef = useRef<HTMLDivElement>(null);

  // List of filters matching prompt requirements
  const filterList: CategoryKey[] = [
    'all',
    'portrait',
    'nature',
    'architecture',
    'anime',
    '3d',
    'fantasy',
    'cars',
    'animals',
    'technology',
    'uzbek_culture',
    'fashion',
    'digital',
    'education',
    'wallpapers',
    'cinematic',
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 my-6">
      {/* Scroll Left Button */}
      <button
        onClick={() => scroll('left')}
        aria-label="Oldingi kategoriyalar"
        className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white shadow-md border border-neutral-200/80 items-center justify-center text-neutral-700 hover:text-neutral-950 hover:bg-neutral-50 transition-all cursor-pointer"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Chips Container */}
      <div
        ref={scrollRef}
        className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 px-1 sm:px-6"
      >
        {filterList.map((catKey) => {
          const isSelected = selectedCategory === catKey;
          return (
            <button
              key={catKey}
              onClick={() => setSelectedCategory(catKey)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                isSelected
                  ? 'bg-neutral-950 text-white shadow-sm ring-1 ring-neutral-950'
                  : 'bg-neutral-100 hover:bg-neutral-200/80 text-neutral-700 hover:text-neutral-950 border border-transparent'
              }`}
            >
              {t.categories[catKey]}
            </button>
          );
        })}
      </div>

      {/* Scroll Right Button */}
      <button
        onClick={() => scroll('right')}
        aria-label="Keyingi kategoriyalar"
        className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white shadow-md border border-neutral-200/80 items-center justify-center text-neutral-700 hover:text-neutral-950 hover:bg-neutral-50 transition-all cursor-pointer"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};
