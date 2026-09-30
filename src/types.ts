export type LanguageKey = 'uz' | 'en' | 'ru' | 'tr' | 'ko';

export type CategoryKey = 
  | 'all'
  | 'portrait'
  | 'nature'
  | 'architecture'
  | 'fashion'
  | 'cars'
  | 'anime'
  | '3d'
  | 'digital'
  | 'fantasy'
  | 'animals'
  | 'education'
  | 'technology'
  | 'uzbek_culture'
  | 'wallpapers'
  | 'cinematic';

export interface Author {
  name: string;
  handle: string;
  avatar?: string;
}

export interface ImageItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: CategoryKey;
  tags: string[];
  aspectRatio: 'tall' | 'square' | 'wide' | 'ultra-tall';
  author: Author;
  likes: number;
  downloads: number;
  createdAt: string; // ISO date string or formatted date
  isUserUploaded?: boolean;
  prompt?: string;
  aiModel?: string;
}

export type SortOption = 'trending' | 'latest' | 'popular';
