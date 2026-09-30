import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useGallery } from '../context/GalleryContext';
import { CategoryKey } from '../types';
import { X, UploadCloud, Image as ImageIcon, Trash2, Check, AlertCircle } from 'lucide-react';

export const UploadModal: React.FC = () => {
  const { isUploadModalOpen, setIsUploadModalOpen, uploadImage, t } = useGallery();

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<CategoryKey>('uzbek_culture');
  const [tagsInput, setTagsInput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isUploadModalOpen) {
        setIsUploadModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isUploadModalOpen, setIsUploadModalOpen]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isUploadModalOpen) {
      setPreviewUrl(null);
      setTitle('');
      setDescription('');
      setCategory('uzbek_culture');
      setTagsInput('');
      setError(null);
    }
  }, [isUploadModalOpen]);

  if (!isUploadModalOpen) return null;

  const handleFileProcess = (file: File) => {
    setError(null);
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      setError(t.uploadSupportedFormats);
      return;
    }

    if (file.size > 15 * 1024 * 1024) {
      setError(t.uploadSizeError);
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setPreviewUrl(e.target.result as string);
        if (!title) {
          // Pre-populate clean title from filename
          const cleanName = file.name
            .replace(/\.[^/.]+$/, '')
            .replace(/[-_]/g, ' ');
          setTitle(cleanName.charAt(0).toUpperCase() + cleanName.slice(1));
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileProcess(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileProcess(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!previewUrl || !title.trim()) {
      setError(t.uploadRequiredError);
      return;
    }

    const parsedTags = tagsInput
      .split(',')
      .map((tag) => tag.trim().replace(/^#/, ''))
      .filter((tag) => tag.length > 0);

    uploadImage({
      title: title.trim(),
      description: description.trim(),
      imageUrl: previewUrl,
      category,
      tags: parsedTags.length > 0 ? parsedTags : [category, 'ai-art'],
      aspectRatio: 'tall',
    });
  };

  const categoriesList: CategoryKey[] = [
    'uzbek_culture',
    'portrait',
    'nature',
    'architecture',
    'fashion',
    'cars',
    'anime',
    '3d',
    'digital',
    'fantasy',
    'animals',
    'education',
    'technology',
    'wallpapers',
    'cinematic',
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-neutral-200"
        >
          {/* Header */}
          <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-neutral-100 p-5 sm:px-6 flex items-center justify-between z-10">
            <div>
              <h2
                className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {t.uploadModalTitle}
              </h2>
              <p className="text-xs text-neutral-500 mt-0.5">
                {t.uploadModalSubtitle}
              </p>
            </div>
            <button
              onClick={() => setIsUploadModalOpen(false)}
              className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-5">
            {error && (
              <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                <span>{error}</span>
              </div>
            )}

            {/* Drop Zone / Image Preview */}
            {!previewUrl ? (
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-2xl p-8 sm:p-10 flex flex-col items-center justify-center text-center cursor-pointer transition-all ${
                  isDragging
                    ? 'border-neutral-950 bg-neutral-100'
                    : 'border-neutral-300 hover:border-neutral-400 bg-neutral-50/60'
                }`}
              >
                <div className="w-14 h-14 rounded-full bg-white shadow-xs flex items-center justify-center text-neutral-800 mb-3 border border-neutral-200">
                  <UploadCloud className="w-7 h-7" />
                </div>
                <p className="text-sm font-semibold text-neutral-900 mb-1">
                  {t.uploadDropText}
                </p>
                <p className="text-xs text-neutral-500 mb-3">
                  {t.uploadSupportedFormats}
                </p>
                <span className="px-4 py-2 bg-white border border-neutral-300 rounded-full text-xs font-semibold text-neutral-800 shadow-2xs hover:bg-neutral-50">
                  {t.uploadBrowseText}
                </span>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/jpg,image/png,image/webp"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            ) : (
              <div className="relative rounded-2xl overflow-hidden bg-neutral-950 aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center group">
                <img
                  src={previewUrl}
                  alt="Yuklanayotgan rasm"
                  className="w-full h-full object-contain"
                />
                <button
                  type="button"
                  onClick={() => setPreviewUrl(null)}
                  className="absolute top-3 right-3 p-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition-transform hover:scale-110 shadow-lg cursor-pointer"
                  title="Rasmni almashtirish"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Title Field */}
            <div>
              <label className="block text-xs font-semibold text-neutral-800 mb-1.5">
                {t.uploadTitleLabel} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={t.uploadTitlePlaceholder}
                required
                className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-sm text-neutral-900 focus:bg-white focus:border-neutral-900 focus:outline-none transition-colors"
              />
            </div>

            {/* Description Field */}
            <div>
              <label className="block text-xs font-semibold text-neutral-800 mb-1.5">
                {t.uploadDescLabel}
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder={t.uploadDescPlaceholder}
                rows={3}
                className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-sm text-neutral-900 focus:bg-white focus:border-neutral-900 focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Category Field */}
            <div>
              <label className="block text-xs font-semibold text-neutral-800 mb-1.5">
                {t.uploadCategoryLabel}
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as CategoryKey)}
                className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-sm text-neutral-900 focus:bg-white focus:border-neutral-900 focus:outline-none transition-colors cursor-pointer"
              >
                {categoriesList.map((catKey) => (
                  <option key={catKey} value={catKey}>
                    {t.categories[catKey]}
                  </option>
                ))}
              </select>
            </div>

            {/* Tags Field */}
            <div>
              <label className="block text-xs font-semibold text-neutral-800 mb-1.5">
                {t.uploadTagsLabel}
              </label>
              <input
                type="text"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                placeholder={t.uploadTagsPlaceholder}
                className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-sm text-neutral-900 focus:bg-white focus:border-neutral-900 focus:outline-none transition-colors"
              />
            </div>

            {/* Buttons */}
            <div className="pt-3 border-t border-neutral-100 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsUploadModalOpen(false)}
                className="px-5 py-2.5 text-xs sm:text-sm font-medium text-neutral-700 hover:bg-neutral-100 rounded-full transition-colors cursor-pointer"
              >
                {t.uploadCancel}
              </button>
              <button
                type="submit"
                disabled={!previewUrl || !title.trim()}
                className="px-6 py-2.5 bg-neutral-950 hover:bg-neutral-800 disabled:opacity-50 text-white text-xs sm:text-sm font-semibold rounded-full shadow-xs transition-all cursor-pointer flex items-center gap-2"
              >
                <Check className="w-4 h-4" />
                <span>{t.uploadSubmit}</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
