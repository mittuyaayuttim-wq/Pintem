import React, { useState } from 'react';
import { ImageItem } from '../types';
import { useGallery } from '../context/GalleryContext';
import { Heart, Download, Maximize2, Trash2 } from 'lucide-react';

interface ImageCardProps {
  image: ImageItem;
}

export const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  const {
    t,
    isFavorite,
    toggleFavorite,
    setActiveImage,
    downloadImage,
    deleteImage,
  } = useGallery();

  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const favorited = isFavorite(image.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(image.id);
  };

  const handleDownloadClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    downloadImage(image);
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm(t.viewerDeleteConfirmTitle)) {
      deleteImage(image.id);
    }
  };

  return (
    <div
      onClick={() => setActiveImage(image)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative mb-5 break-inside-avoid rounded-2xl overflow-hidden bg-white border border-neutral-200/70 shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-neutral-100">
        {!imageError ? (
          <img
            src={image.imageUrl}
            alt={image.title}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-auto object-cover transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="w-full aspect-[4/3] bg-neutral-900 flex flex-col items-center justify-center p-6 text-center text-white">
            <span className="text-xs uppercase tracking-wider text-neutral-400 mb-1">
              {t.categories[image.category]}
            </span>
            <p className="text-sm font-medium line-clamp-2">{image.title}</p>
          </div>
        )}

        {/* Hover Gradient Overlay & Quick Actions */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-neutral-950/20 to-transparent transition-opacity duration-200 flex flex-col justify-between p-3.5 ${
            isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Top action row */}
          <div className="flex items-center justify-between gap-2">
            {/* Delete button if user uploaded */}
            {image.isUserUploaded ? (
              <button
                onClick={handleDeleteClick}
                title={t.viewerDelete}
                className="w-8 h-8 rounded-full bg-red-600/90 hover:bg-red-600 text-white flex items-center justify-center transition-transform hover:scale-110 cursor-pointer shadow-sm"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            ) : (
              <span />
            )}

            {/* Favorite button */}
            <button
              onClick={handleFavoriteClick}
              aria-label={t.viewerFavorite}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-md transition-all cursor-pointer shadow-sm ${
                favorited
                  ? 'bg-red-500 text-white'
                  : 'bg-white/90 hover:bg-white text-neutral-900 hover:scale-105'
              }`}
            >
              <Heart
                className={`w-3.5 h-3.5 ${favorited ? 'fill-white stroke-white' : 'stroke-neutral-900'}`}
              />
              <span className="tabular-nums font-semibold">{image.likes}</span>
            </button>
          </div>

          {/* Bottom action row */}
          <div className="flex items-center justify-between">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveImage(image);
              }}
              className="flex items-center gap-1 text-xs text-white/90 hover:text-white font-medium bg-neutral-900/60 hover:bg-neutral-900/90 backdrop-blur-md px-3 py-1.5 rounded-full transition-colors cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>{t.exploreTitle}</span>
            </button>

            <button
              onClick={handleDownloadClick}
              title={t.viewerDownload}
              className="w-8 h-8 rounded-full bg-white/90 hover:bg-white text-neutral-900 flex items-center justify-center transition-transform hover:scale-110 cursor-pointer shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Card Info Below Image - Clean Unboxed Metadata per Zero-Pill Rules */}
      <div className="p-3.5">
        <h3 className="text-sm font-semibold text-neutral-900 line-clamp-1 group-hover:text-black transition-colors">
          {image.title}
        </h3>

        <div className="flex items-center gap-1.5 mt-1 text-xs text-neutral-500">
          <span className="font-medium text-neutral-700">
            {t.categories[image.category]}
          </span>
          <span aria-hidden="true" className="text-neutral-300">·</span>
          <span className="truncate">{image.author.name}</span>
        </div>
      </div>
    </div>
  );
};
