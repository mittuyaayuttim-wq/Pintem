import React from 'react';
import { useGallery } from '../context/GalleryContext';
import { ArrowDown, Plus, Sparkles } from 'lucide-react';
import uzbekImg from '../assets/images/uzbek_culture_registan_1790762545934.jpg';
import portraitImg from '../assets/images/ai_portrait_cyberpunk_1790762566073.jpg';
import natureImg from '../assets/images/nature_emerald_mountains_1790762580031.jpg';

export const HeroSection: React.FC = () => {
  const { t, setIsUploadModalOpen, setActiveImage, images } = useGallery();

  const handleScrollToGallery = () => {
    const galleryEl = document.getElementById('explore-gallery');
    if (galleryEl) {
      galleryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sampleFeatured = images.find((i) => i.id === 'img-uzbek-culture-1') || images[0];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 via-[#fafaf9] to-white pt-8 pb-14 sm:py-16 border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Subtle editorial kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-neutral-500 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
              <span>{t.exploreTitle} · AI Gallery 2026</span>
            </div>

            {/* Main Title per requirement */}
            <h1
              className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-neutral-950 mb-4 leading-[1.12]"
              style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}
            >
              {t.heroTitle}
            </h1>

            {/* Subtitle per requirement */}
            <p className="text-base sm:text-lg text-neutral-600 mb-8 max-w-xl leading-relaxed">
              {t.heroSubtitle}
            </p>

            {/* Dual CTAs per requirement */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={handleScrollToGallery}
                className="px-6 sm:px-7 py-3 sm:py-3.5 bg-neutral-950 text-white font-medium text-sm sm:text-base rounded-full hover:bg-neutral-800 transition-all duration-200 shadow-sm flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>{t.heroCtaView}</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={() => setIsUploadModalOpen(true)}
                className="px-6 sm:px-7 py-3 sm:py-3.5 bg-white text-neutral-900 border border-neutral-300/80 font-medium text-sm sm:text-base rounded-full hover:bg-neutral-100 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
              >
                <Plus className="w-4 h-4" />
                <span>{t.heroCtaUpload}</span>
              </button>
            </div>

            {/* Subtle metrics & proof */}
            <div className="mt-10 pt-6 border-t border-neutral-200/80 w-full flex items-center gap-6 sm:gap-10 text-xs text-neutral-500">
              <div>
                <span className="block text-base sm:text-lg font-bold text-neutral-900 tabular-nums">
                  15+
                </span>
                <span>Kategoriyalar</span>
              </div>
              <div className="h-7 w-px bg-neutral-200" />
              <div>
                <span className="block text-base sm:text-lg font-bold text-neutral-900 tabular-nums">
                  4K / UHD
                </span>
                <span>Yuqori aniqlik</span>
              </div>
              <div className="h-7 w-px bg-neutral-200" />
              <div>
                <span className="block text-base sm:text-lg font-bold text-neutral-900 tabular-nums">
                  100%
                </span>
                <span>AI erkin ijod</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Bento Teaser showcasing AI artwork */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main spotlight card */}
              <div
                onClick={() => setActiveImage(sampleFeatured)}
                className="group relative rounded-3xl overflow-hidden shadow-lg border border-neutral-200/80 bg-neutral-900 cursor-pointer transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 aspect-[4/5]"
              >
                <img
                  src={uzbekImg}
                  alt="Uzbek national culture AI artwork"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center gap-2 text-xs text-neutral-300 mb-1">
                    <span>O‘zbek milliy madaniyati</span>
                    <span aria-hidden="true">·</span>
                    <span>Gemini Imagen 3.5</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold line-clamp-1">
                    Samarqand Registonining Nuri
                  </h3>
                </div>
              </div>

              {/* Floating secondary teaser cards */}
              <div
                onClick={() => {
                  const p = images.find((i) => i.id === 'img-portrait-cyber-2');
                  if (p) setActiveImage(p);
                }}
                className="hidden sm:block absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl overflow-hidden shadow-xl border-2 border-white cursor-pointer hover:scale-105 transition-transform"
              >
                <img
                  src={portraitImg}
                  alt="Portrait AI art"
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                onClick={() => {
                  const n = images.find((i) => i.id === 'img-nature-mountains-3');
                  if (n) setActiveImage(n);
                }}
                className="hidden sm:block absolute -top-4 -right-4 w-36 h-24 rounded-2xl overflow-hidden shadow-xl border-2 border-white cursor-pointer hover:scale-105 transition-transform"
              >
                <img
                  src={natureImg}
                  alt="Nature AI art"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
