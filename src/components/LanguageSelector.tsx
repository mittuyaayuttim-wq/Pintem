import React, { useState, useRef, useEffect } from 'react';
import { useGallery } from '../context/GalleryContext';
import { LanguageKey } from '../types';
import { ChevronDown, Check } from 'lucide-react';

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useGallery();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const languages: { key: LanguageKey; label: string; flag: string; native: string }[] = [
    { key: 'uz', label: 'O‘zbekcha', flag: '🇺🇿', native: 'O‘zbekcha' },
    { key: 'en', label: 'English', flag: '🇬🇧', native: 'English' },
    { key: 'ru', label: 'Русский', flag: '🇷🇺', native: 'Русский' },
    { key: 'tr', label: 'Türkçe', flag: '🇹🇷', native: 'Türkçe' },
    { key: 'ko', label: '한국어', flag: '🇰🇷', native: '한국어' },
  ];

  const current = languages.find((l) => l.key === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Tilni tanlash"
        aria-expanded={isOpen}
        className="flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium text-neutral-800 bg-neutral-100 hover:bg-neutral-200/70 rounded-full transition-colors cursor-pointer border border-transparent focus-visible:border-neutral-400 focus-visible:outline-none"
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="hidden sm:inline font-medium">{current.label}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-neutral-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-neutral-200 rounded-2xl shadow-xl py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase text-neutral-400 border-b border-neutral-100">
            Til / Language
          </div>
          {languages.map((l) => {
            const isSelected = language === l.key;
            return (
              <button
                key={l.key}
                onClick={() => {
                  setLanguage(l.key);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2 text-xs sm:text-sm text-left transition-colors cursor-pointer ${
                  isSelected ? 'bg-neutral-100 text-neutral-950 font-semibold' : 'text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-base">{l.flag}</span>
                  <span>{l.label}</span>
                </div>
                {isSelected && <Check className="w-4 h-4 text-neutral-900" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
