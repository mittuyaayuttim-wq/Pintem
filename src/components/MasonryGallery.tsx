import React from 'react';
import { useGallery } from '../context/GalleryContext';
import { ImageCard } from './ImageCard';
import { SortOption } from '../types';
import { Sparkles, SlidersHorizontal, ImageOff, RotateCcw } from 'lucide-react';

export const MasonryGallery: React.FC = () => {
  const {
    filteredImages,
    sortBy,
    setSortBy,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    t,
  } = useGallery();

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
  };

  const sortOptions: { key: SortOption; label: string }[] = [
    { key: 'trending', label: t.sortTrending },
    { key: 'latest', label: t.sortLatest },
    { key: 'popular', label: t.sortPopular },
  ];

  return (
    <section id="explore-gallery" className="max-w-7xl mx-auto px-4 sm:px-6 py-10 scroll-mt-24">
      {/* Section Header with Sort Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-4 border-b border-neutral-200/80">
        <div>
          <div className="flex items-center gap-2">
            <h2
              className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {selectedCategory === 'all'
                ? t.allImagesTitle
                : t.categories[selectedCategory]}
            </h2>
            <span className="text-xs font-medium text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-full">
              {filteredImages.length} {t.allImagesCount}
            </span>
          </div>

          {searchQuery && (
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              &quot;{searchQuery}&quot; bo‘yicha qidiruv natijalari
            </p>
          )}
        </div>

        {/* Sorting Controls */}
        <div className="flex items-center gap-1.5 p-1 bg-neutral-100 rounded-full shrink-0 self-start sm:self-auto">
          <div className="pl-2.5 pr-1 text-neutral-400">
            <SlidersHorizontal className="w-3.5 h-3.5" />
          </div>
          {sortOptions.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setSortBy(opt.key)}
              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors cursor-pointer ${
                sortBy === opt.key
                  ? 'bg-white text-neutral-950 shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Layout */}
      {filteredImages.length > 0 ? (
        <div className="masonry-grid">
          {filteredImages.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="py-20 flex flex-col items-center justify-center text-center max-w-md mx-auto">
          <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 mb-4">
            <ImageOff className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-semibold text-neutral-900 mb-1.5">
            {t.emptyTitle}
          </h3>
          <p className="text-sm text-neutral-500 mb-6">{t.emptyDesc}</p>
          <button
            onClick={handleResetFilters}
            className="px-5 py-2.5 bg-neutral-950 text-white text-xs sm:text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t.emptyResetBtn}</span>
          </button>
        </div>
      )}
    </section>
  );
};
