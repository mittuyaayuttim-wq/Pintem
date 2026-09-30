import React from 'react';
import { useGallery } from '../context/GalleryContext';
import { Flame, Heart, ArrowUpRight } from 'lucide-react';

export const TrendingSection: React.FC = () => {
  const { trendingImages, setActiveImage, t } = useGallery();

  if (trendingImages.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 mb-1">
            <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span>Top Picks</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {t.trendingTitle}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1 max-w-lg">
            {t.trendingSubtitle}
          </p>
        </div>
      </div>

      {/* Grid of 4 Trending Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {trendingImages.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setActiveImage(item)}
            className="group relative rounded-2xl overflow-hidden bg-neutral-900 aspect-[3/4] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover transform duration-500 group-hover:scale-105"
            />
            {/* Measured Scrim for Media Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/20 to-transparent flex flex-col justify-between p-4 text-white">
              {/* Top badge */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-medium text-white/80 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
                  #{index + 1}
                </span>
                <div className="flex items-center gap-1 text-xs text-white/90 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
                  <Heart className="w-3 h-3 fill-red-500 text-red-500" />
                  <span className="tabular-nums font-semibold">{item.likes}</span>
                </div>
              </div>

              {/* Bottom Info */}
              <div>
                <span className="text-[11px] uppercase tracking-wider text-neutral-300">
                  {t.categories[item.category]}
                </span>
                <h3 className="text-sm font-semibold text-white line-clamp-2 mt-0.5 group-hover:underline">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-neutral-400 mt-2 pt-2 border-t border-white/10">
                  <span className="truncate">{item.author.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
