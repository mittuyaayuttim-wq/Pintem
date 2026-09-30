import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { CategoryKey, ImageItem, LanguageKey, SortOption } from '../types';
import { INITIAL_IMAGES } from '../data/seedImages';
import { translations, TranslationDictionary } from '../i18n/translations';

interface GalleryContextType {
  images: ImageItem[];
  filteredImages: ImageItem[];
  trendingImages: ImageItem[];
  latestImages: ImageItem[];
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategory: CategoryKey;
  setSelectedCategory: (cat: CategoryKey) => void;
  sortBy: SortOption;
  setSortBy: (sort: SortOption) => void;
  language: LanguageKey;
  setLanguage: (lang: LanguageKey) => void;
  t: TranslationDictionary;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  activeImage: ImageItem | null;
  setActiveImage: (img: ImageItem | null) => void;
  navigateViewer: (direction: 'prev' | 'next') => void;
  isUploadModalOpen: boolean;
  setIsUploadModalOpen: (open: boolean) => void;
  showWelcome: boolean;
  setShowWelcome: (show: boolean) => void;
  isAboutModalOpen: boolean;
  setIsAboutModalOpen: (open: boolean) => void;
  isPrivacyModalOpen: boolean;
  setIsPrivacyModalOpen: (open: boolean) => void;
  toast: string | null;
  showToast: (msg: string) => void;
  uploadImage: (newImage: {
    title: string;
    description: string;
    imageUrl: string;
    category: CategoryKey;
    tags: string[];
    aspectRatio?: 'tall' | 'square' | 'wide' | 'ultra-tall';
  }) => void;
  deleteImage: (id: string) => void;
  downloadImage: (image: ImageItem) => void;
  shareImage: (image: ImageItem) => void;
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

const STORAGE_KEYS = {
  IMAGES: 'ai_gallery_images_v1',
  FAVORITES: 'ai_gallery_favorites_v1',
  LANGUAGE: 'ai_gallery_lang_v1',
  WELCOME_DISMISSED: 'ai_gallery_welcome_dismissed_v1',
};

export const GalleryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Language initialization (Uzbek default)
  const [language, setLanguageState] = useState<LanguageKey>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.LANGUAGE) as LanguageKey;
      if (saved && ['uz', 'en', 'ru', 'tr', 'ko'].includes(saved)) {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'uz';
  });

  const setLanguage = (lang: LanguageKey) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEYS.LANGUAGE, lang);
      document.documentElement.lang = lang;
    } catch {
      // ignore
    }
  };

  const t = useMemo(() => translations[language], [language]);

  // Images initialization
  const [images, setImages] = useState<ImageItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.IMAGES);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge user uploads with initial images in case seed images updated
          const userUploads = parsed.filter((item: ImageItem) => item.isUserUploaded);
          return [...userUploads, ...INITIAL_IMAGES];
        }
      }
    } catch {
      // ignore
    }
    return INITIAL_IMAGES;
  });

  // Favorites
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.FAVORITES);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return [];
  });

  // Welcome screen state
  const [showWelcome, setShowWelcomeState] = useState<boolean>(() => {
    try {
      return !localStorage.getItem(STORAGE_KEYS.WELCOME_DISMISSED);
    } catch {
      return true;
    }
  });

  const setShowWelcome = (show: boolean) => {
    setShowWelcomeState(show);
    if (!show) {
      try {
        localStorage.setItem(STORAGE_KEYS.WELCOME_DISMISSED, 'true');
      } catch {
        // ignore
      }
    }
  };

  // Search & Filter
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('all');
  const [sortBy, setSortBy] = useState<SortOption>('trending');

  // Modals & Viewer
  const [activeImage, setActiveImage] = useState<ImageItem | null>(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState<boolean>(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState<boolean>(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState<boolean>(false);

  // Toast
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3200);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Persist images
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.IMAGES, JSON.stringify(images));
    } catch {
      // ignore
    }
  }, [images]);

  // Persist favorites
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
    } catch {
      // ignore
    }
  }, [favorites]);

  const toggleFavorite = (id: string) => {
    const isFav = favorites.includes(id);
    const updatedFavs = isFav ? favorites.filter((f) => f !== id) : [...favorites, id];
    setFavorites(updatedFavs);

    setImages((prev) =>
      prev.map((img) => {
        if (img.id === id) {
          return {
            ...img,
            likes: isFav ? Math.max(0, img.likes - 1) : img.likes + 1,
          };
        }
        return img;
      })
    );

    if (activeImage && activeImage.id === id) {
      setActiveImage((prev) =>
        prev
          ? {
              ...prev,
              likes: isFav ? Math.max(0, prev.likes - 1) : prev.likes + 1,
            }
          : null
      );
    }
  };

  const isFavorite = (id: string) => favorites.includes(id);

  // Filter and search computation
  const filteredImages = useMemo(() => {
    let result = [...images];

    // Filter by Category
    if (selectedCategory !== 'all') {
      result = result.filter((img) => img.category === selectedCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter((img) => {
        const titleMatch = img.title.toLowerCase().includes(q);
        const descMatch = img.description.toLowerCase().includes(q);
        const categoryMatch = img.category.toLowerCase().includes(q);
        const tagsMatch = img.tags.some((tag) => tag.toLowerCase().includes(q));
        const authorMatch = img.author.name.toLowerCase().includes(q);
        return titleMatch || descMatch || categoryMatch || tagsMatch || authorMatch;
      });
    }

    // Sorting
    if (sortBy === 'trending') {
      result.sort((a, b) => b.likes * 1.5 + b.downloads - (a.likes * 1.5 + a.downloads));
    } else if (sortBy === 'popular') {
      result.sort((a, b) => b.likes - a.likes);
    } else if (sortBy === 'latest') {
      result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }

    return result;
  }, [images, selectedCategory, searchQuery, sortBy]);

  // Curated trending images
  const trendingImages = useMemo(() => {
    return [...images]
      .sort((a, b) => b.likes - a.likes)
      .slice(0, 4);
  }, [images]);

  // Latest uploads
  const latestImages = useMemo(() => {
    return [...images]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 6);
  }, [images]);

  // Viewer navigation
  const navigateViewer = (direction: 'prev' | 'next') => {
    if (!activeImage) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === activeImage.id);
    if (currentIndex === -1) return;

    if (direction === 'prev') {
      const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
      setActiveImage(filteredImages[prevIndex]);
    } else {
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      setActiveImage(filteredImages[nextIndex]);
    }
  };

  // Upload new image
  const uploadImage = (newImage: {
    title: string;
    description: string;
    imageUrl: string;
    category: CategoryKey;
    tags: string[];
    aspectRatio?: 'tall' | 'square' | 'wide' | 'ultra-tall';
  }) => {
    const newItem: ImageItem = {
      id: `upload-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
      title: newImage.title.trim(),
      description: newImage.description.trim(),
      imageUrl: newImage.imageUrl,
      category: newImage.category,
      tags: newImage.tags,
      aspectRatio: newImage.aspectRatio || 'tall',
      author: {
        name: language === 'uz' ? 'Siz (Muallif)' : 'You (Creator)',
        handle: '@you_creator',
      },
      likes: 1,
      downloads: 0,
      createdAt: new Date().toISOString().split('T')[0],
      isUserUploaded: true,
      aiModel: 'User Generated / AI',
    };

    setImages((prev) => [newItem, ...prev]);
    showToast(t.uploadSuccessToast);
    setIsUploadModalOpen(false);
  };

  // Delete image
  const deleteImage = (id: string) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
    if (activeImage && activeImage.id === id) {
      setActiveImage(null);
    }
    showToast(t.viewerDeleteSuccessToast);
  };

  // Download image
  const downloadImage = (image: ImageItem) => {
    showToast(t.viewerDownloadToast);
    try {
      const a = document.createElement('a');
      a.href = image.imageUrl;
      a.download = `${image.title.replace(/[^a-zA-Z0-9]/g, '_')}_ai_gallery.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      // Increment download counter
      setImages((prev) =>
        prev.map((img) => (img.id === image.id ? { ...img, downloads: img.downloads + 1 } : img))
      );
    } catch (e) {
      console.error('Download error', e);
    }
  };

  // Share image
  const shareImage = (image: ImageItem) => {
    const url = window.location.href.split('?')[0] + `?art=${encodeURIComponent(image.id)}`;
    if (navigator.share) {
      navigator
        .share({
          title: image.title,
          text: `${image.title} — AI Gallery`,
          url: url,
        })
        .catch(() => {
          navigator.clipboard.writeText(url);
          showToast(t.viewerCopiedToast);
        });
    } else {
      navigator.clipboard.writeText(url);
      showToast(t.viewerCopiedToast);
    }
  };

  return (
    <GalleryContext.Provider
      value={{
        images,
        filteredImages,
        trendingImages,
        latestImages,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        sortBy,
        setSortBy,
        language,
        setLanguage,
        t,
        favorites,
        toggleFavorite,
        isFavorite,
        activeImage,
        setActiveImage,
        navigateViewer,
        isUploadModalOpen,
        setIsUploadModalOpen,
        showWelcome,
        setShowWelcome,
        isAboutModalOpen,
        setIsAboutModalOpen,
        isPrivacyModalOpen,
        setIsPrivacyModalOpen,
        toast,
        showToast,
        uploadImage,
        deleteImage,
        downloadImage,
        shareImage,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

export const useGallery = (): GalleryContextType => {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error('useGallery must be used within a GalleryProvider');
  }
  return context;
};
