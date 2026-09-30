import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useGallery } from '../context/GalleryContext';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  Download,
  Share2,
  Trash2,
  Calendar,
  Sparkles,
  Tag,
  User,
  ExternalLink,
} from 'lucide-react';

export const ImageViewer: React.FC = () => {
  const {
    activeImage,
    setActiveImage,
    navigateViewer,
    isFavorite,
    toggleFavorite,
    downloadImage,
    shareImage,
    deleteImage,
    filteredImages,
    t,
  } = useGallery();

  const [confirmDelete, setConfirmDelete] = useState(false);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!activeImage) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveImage(null);
      } else if (e.key === 'ArrowLeft') {
        navigateViewer('prev');
      } else if (e.key === 'ArrowRight') {
        navigateViewer('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeImage, navigateViewer, setActiveImage]);

  // Reset delete confirm state when image changes
  useEffect(() => {
    setConfirmDelete(false);
  }, [activeImage]);

  if (!activeImage) return null;

  const favorited = isFavorite(activeImage.id);

  // Related artworks
  const relatedArtworks = filteredImages
    .filter(
      (img) =>
        img.id !== activeImage.id &&
        (img.category === activeImage.category ||
          img.tags.some((tag) => activeImage.tags.includes(tag)))
    )
    .slice(0, 3);

  const handleDelete = () => {
    if (confirmDelete) {
      deleteImage(activeImage.id);
    } else {
      setConfirmDelete(true);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-xl">
        {/* Navigation Previous Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigateViewer('prev');
          }}
          aria-label={t.viewerPrev}
          className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md items-center justify-center transition-all cursor-pointer hover:scale-105"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Navigation Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigateViewer('next');
          }}
          aria-label={t.viewerNext}
          className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md items-center justify-center transition-all cursor-pointer hover:scale-105"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Close Button top-right */}
        <button
          onClick={() => setActiveImage(null)}
          aria-label={t.viewerClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer hover:scale-105"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-white rounded-3xl overflow-hidden max-w-5xl w-full max-h-[92vh] shadow-2xl flex flex-col md:flex-row border border-neutral-200/50"
        >
          {/* Left / Top: High-resolution Image Display */}
          <div className="relative flex-1 bg-neutral-950 flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-[540px] max-h-[50vh] md:max-h-[90vh]">
            <img
              src={activeImage.imageUrl}
              alt={activeImage.title}
              className="w-full h-full object-contain"
            />

            {/* Mobile Prev / Next Buttons */}
            <div className="flex md:hidden absolute bottom-3 inset-x-3 justify-between pointer-events-none">
              <button
                onClick={() => navigateViewer('prev')}
                className="pointer-events-auto p-2 rounded-full bg-black/60 text-white backdrop-blur-md"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigateViewer('next')}
                className="pointer-events-auto p-2 rounded-full bg-black/60 text-white backdrop-blur-md"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right: Artwork Metadata & Interactive Actions */}
          <div className="w-full md:w-[380px] lg:w-[420px] flex flex-col bg-white overflow-y-auto max-h-[50vh] md:max-h-[90vh] divide-y divide-neutral-100">
            {/* Action Bar */}
            <div className="p-4 sm:p-5 flex items-center justify-between gap-2 shrink-0">
              <div className="flex items-center gap-2">
                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(activeImage.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    favorited
                      ? 'bg-red-50 text-red-600 ring-1 ring-red-200'
                      : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-800'
                  }`}
                >
                  <Heart
                    className={`w-4 h-4 ${favorited ? 'fill-red-500 text-red-500' : 'text-neutral-700'}`}
                  />
                  <span>{favorited ? t.viewerFavorited : t.viewerFavorite}</span>
                  <span className="tabular-nums font-bold">({activeImage.likes})</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                {/* Share Button */}
                <button
                  onClick={() => shareImage(activeImage)}
                  title={t.viewerShare}
                  className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                </button>

                {/* Download Button */}
                <button
                  onClick={() => downloadImage(activeImage)}
                  title={t.viewerDownload}
                  className="px-4 py-2 rounded-full bg-neutral-950 text-white font-medium text-xs hover:bg-neutral-800 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t.viewerDownload}</span>
                </button>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5 space-y-4 flex-1">
              {/* Category & Date - Clean Unboxed Metadata */}
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                <span className="font-semibold text-neutral-900">
                  {t.categories[activeImage.category]}
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-neutral-400" />
                  <span>{activeImage.createdAt}</span>
                </span>
                {activeImage.aiModel && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="text-neutral-600 font-mono text-[11px]">
                      {activeImage.aiModel}
                    </span>
                  </>
                )}
              </div>

              {/* Title */}
              <h2
                className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {activeImage.title}
              </h2>

              {/* Description */}
              {activeImage.description && (
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {activeImage.description}
                </p>
              )}

              {/* Author Info */}
              <div className="pt-2 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-xs shrink-0">
                  {activeImage.author.name.charAt(0).toUpperCase()}
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-neutral-900">
                    {activeImage.author.name}
                  </p>
                  <p className="text-neutral-400">{activeImage.author.handle}</p>
                </div>
              </div>

              {/* Prompt Accordion/Info if exists */}
              {activeImage.prompt && (
                <div className="mt-4 p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-700 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>{t.viewerPrompt}</span>
                  </div>
                  <p className="text-xs text-neutral-600 font-mono leading-relaxed line-clamp-4 select-all">
                    &quot;{activeImage.prompt}&quot;
                  </p>
                </div>
              )}

              {/* Tags Section */}
              {activeImage.tags && activeImage.tags.length > 0 && (
                <div className="pt-2">
                  <p className="text-xs font-medium text-neutral-500 mb-2 flex items-center gap-1.5">
                    <Tag className="w-3 h-3" />
                    <span>{t.viewerTags}</span>
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {activeImage.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-neutral-700 bg-neutral-100 hover:bg-neutral-200/70 px-2.5 py-1 rounded-md transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* User-uploaded Delete Option */}
              {activeImage.isUserUploaded && (
                <div className="pt-4 border-t border-neutral-100">
                  {!confirmDelete ? (
                    <button
                      onClick={handleDelete}
                      className="text-xs text-red-600 hover:text-red-700 font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>{t.viewerDelete}</span>
                    </button>
                  ) : (
                    <div className="p-3 bg-red-50 rounded-xl border border-red-200">
                      <p className="text-xs text-red-900 font-semibold mb-1">
                        {t.viewerDeleteConfirmTitle}
                      </p>
                      <p className="text-[11px] text-red-700 mb-2.5">
                        {t.viewerDeleteConfirmDesc}
                      </p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={handleDelete}
                          className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-xs font-medium rounded-lg cursor-pointer transition-colors"
                        >
                          {t.viewerDeleteConfirmBtn}
                        </button>
                        <button
                          onClick={() => setConfirmDelete(false)}
                          className="px-3 py-1 bg-white hover:bg-neutral-100 text-neutral-700 text-xs font-medium rounded-lg border border-neutral-300 cursor-pointer transition-colors"
                        >
                          {t.uploadCancel}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Related Artworks Row */}
            {relatedArtworks.length > 0 && (
              <div className="p-4 sm:p-5 shrink-0 bg-neutral-50/50">
                <p className="text-xs font-semibold text-neutral-800 mb-2.5">
                  {t.viewerRelated}
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {relatedArtworks.map((rel) => (
                    <div
                      key={rel.id}
                      onClick={() => setActiveImage(rel)}
                      className="rounded-xl overflow-hidden aspect-[4/3] bg-neutral-200 cursor-pointer hover:opacity-80 transition-opacity"
                    >
                      <img
                        src={rel.imageUrl}
                        alt={rel.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
