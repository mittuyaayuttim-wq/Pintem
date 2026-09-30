import React from 'react';
import { useGallery } from '../context/GalleryContext';
import { Clock, Plus, ArrowRight } from 'lucide-react';

export const LatestUploadsSection: React.FC = () => {
  const { latestImages, setActiveImage, setIsUploadModalOpen, t } = useGallery();

  if (latestImages.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1">
            <Clock className="w-4 h-4" />
            <span>Yangi qo‘shilganlar</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {t.latestTitle}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1 max-w-lg">
            {t.latestSubtitle}
          </p>
        </div>

        <button
          onClick={() => setIsUploadModalOpen(true)}
          className="self-start sm:self-auto flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-900 hover:text-black hover:underline cursor-pointer"
        >
          <span>O‘z rasmingizni qo‘shing</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Grid of latest 6 images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
        {latestImages.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveImage(item)}
            className="group relative rounded-xl overflow-hidden aspect-[3/4] bg-neutral-100 cursor-pointer border border-neutral-200/80 shadow-2xs hover:shadow-md transition-all duration-200"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {item.isUserUploaded && (
              <span className="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-semibold bg-black/80 text-white rounded-full backdrop-blur-md">
                Sizniki
              </span>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-2.5 flex flex-col justify-end text-white">
              <p className="text-xs font-medium line-clamp-1">{item.title}</p>
              <p className="text-[10px] text-neutral-300">{item.createdAt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
