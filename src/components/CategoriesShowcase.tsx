import React from 'react';
import { useGallery } from '../context/GalleryContext';
import { CategoryKey } from '../types';
import { Compass, Sparkles, Layers, Image as ImageIcon } from 'lucide-react';

import uzbekImg from '../assets/images/uzbek_culture_registan_1790762545934.jpg';
import portraitImg from '../assets/images/ai_portrait_cyberpunk_1790762566073.jpg';
import natureImg from '../assets/images/nature_emerald_mountains_1790762580031.jpg';
import archImg from '../assets/images/futuristic_architecture_museum_1790762595544.jpg';
import fantasyImg from '../assets/images/fantasy_3d_mythical_creature_1790762609120.jpg';

interface CategoryCardItem {
  key: CategoryKey;
  image: string;
  count: number;
}

export const CategoriesShowcase: React.FC = () => {
  const { setSelectedCategory, t, images } = useGallery();

  const curatedCategoryCards: CategoryCardItem[] = [
    {
      key: 'uzbek_culture',
      image: uzbekImg,
      count: images.filter((i) => i.category === 'uzbek_culture').length,
    },
    {
      key: 'portrait',
      image: portraitImg,
      count: images.filter((i) => i.category === 'portrait').length,
    },
    {
      key: 'nature',
      image: natureImg,
      count: images.filter((i) => i.category === 'nature').length,
    },
    {
      key: 'architecture',
      image: archImg,
      count: images.filter((i) => i.category === 'architecture').length,
    },
    {
      key: '3d',
      image: fantasyImg,
      count: images.filter((i) => i.category === '3d' || i.category === 'fantasy').length,
    },
  ];

  const handleSelect = (catKey: CategoryKey) => {
    setSelectedCategory(catKey);
    const el = document.getElementById('explore-gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1">
            <Compass className="w-4 h-4" />
            <span>Mavzular</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {t.categoriesTitle}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1 max-w-lg">
            {t.categoriesSubtitle}
          </p>
        </div>
      </div>

      {/* Grid of attractive category tiles */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {curatedCategoryCards.map((cat) => (
          <div
            key={cat.key}
            onClick={() => handleSelect(cat.key)}
            className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-neutral-900 cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src={cat.image}
              alt={t.categories[cat.key]}
              className="w-full h-full object-cover transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent flex flex-col justify-end p-4 text-white">
              <span className="text-xs font-medium text-neutral-300">
                {cat.count} ta rasm
              </span>
              <h3 className="text-base font-semibold group-hover:text-amber-300 transition-colors">
                {t.categories[cat.key]}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
