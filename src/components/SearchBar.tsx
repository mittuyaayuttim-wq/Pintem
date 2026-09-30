import React, { useRef, useEffect } from 'react';
import { useGallery } from '../context/GalleryContext';
import { Search, X } from 'lucide-react';

export const SearchBar: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { searchQuery, setSearchQuery, t } = useGallery();
  const inputRef = useRef<HTMLInputElement>(null);

  // Global hotkey '/' to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === '/' &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`relative flex items-center w-full max-w-2xl ${className}`}>
      <div className="absolute left-3.5 text-neutral-400 pointer-events-none flex items-center">
        <Search className="w-4 h-4" />
      </div>

      <input
        ref={inputRef}
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={t.searchPlaceholder}
        aria-label={t.searchAria}
        className="w-full pl-10 pr-10 py-2.5 bg-neutral-100/90 hover:bg-neutral-100 focus:bg-white text-neutral-900 placeholder:text-neutral-400 text-sm rounded-full border border-transparent focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-200/60 transition-all duration-200"
      />

      {searchQuery && (
        <button
          onClick={() => {
            setSearchQuery('');
            inputRef.current?.focus();
          }}
          aria-label="Qidiruvni tozalash"
          className="absolute right-3.5 p-1 rounded-full text-neutral-400 hover:text-neutral-800 hover:bg-neutral-200/60 transition-colors cursor-pointer"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
};
