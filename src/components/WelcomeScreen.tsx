import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useGallery } from '../context/GalleryContext';
import { ArrowDown, Sparkles } from 'lucide-react';
import { LanguageKey } from '../types';

export const WelcomeScreen: React.FC = () => {
  const { showWelcome, setShowWelcome, t, language, setLanguage } = useGallery();

  const handleEnter = () => {
    setShowWelcome(false);
    // Smooth scroll down to main content if needed
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const languages: { key: LanguageKey; label: string; flag: string }[] = [
    { key: 'uz', label: 'O‘zbekcha', flag: '🇺🇿' },
    { key: 'en', label: 'English', flag: '🇬🇧' },
    { key: 'ru', label: 'Русский', flag: '🇷🇺' },
    { key: 'tr', label: 'Türkçe', flag: '🇹🇷' },
    { key: 'ko', label: '한국어', flag: '🇰🇷' },
  ];

  return (
    <AnimatePresence>
      {showWelcome && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#fafaf9] p-6 text-neutral-900"
        >
          {/* Subtle architectural ambient lines */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />

          {/* Quick language selection in top-right of welcome screen */}
          <div className="absolute top-6 right-6 flex items-center gap-1.5 p-1 bg-white border border-neutral-200/80 rounded-full shadow-xs">
            {languages.map((l) => (
              <button
                key={l.key}
                onClick={() => setLanguage(l.key)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                  language === l.key
                    ? 'bg-neutral-950 text-white shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
                }`}
              >
                <span className="mr-1.5">{l.flag}</span>
                {l.label}
              </button>
            ))}
          </div>

          {/* Central minimal content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center max-w-md w-full mx-auto relative z-10"
          >
            {/* 
              Pinterest-inspired black logo/icon per specification:
              "In the center, display a black Pinterest logo/icon as a visual inspiration for the brand identity.
               Use ONLY black for the logo/icon."
            */}
            <motion.div
              initial={{ scale: 0.8, rotate: -8 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-20 h-20 bg-black rounded-full flex items-center justify-center shadow-lg mb-8 hover:scale-105 transition-transform cursor-pointer"
              onClick={handleEnter}
              title="AI Gallery"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-11 h-11 fill-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.365-.053.225-.174.271-.401.165-1.495-.695-2.43-2.876-2.43-4.629 0-3.774 2.743-7.24 7.906-7.24 4.15 0 7.377 2.957 7.377 6.909 0 4.124-2.599 7.442-6.208 7.442-1.212 0-2.352-.63-2.743-1.377l-.746 2.846c-.27 1.04-.999 2.344-1.488 3.136 1.118.345 2.307.533 3.538.533 6.627 0 12-5.373 12-12S18.627 0 12 0z" />
              </svg>
            </motion.div>

            {/* Website name */}
            <h1
              className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-950 mb-3"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {t.appName}
            </h1>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-neutral-600 mb-8 max-w-sm leading-relaxed">
              {t.tagline}
            </p>

            {/* Prominent button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleEnter}
              className="w-full sm:w-auto px-8 py-3.5 bg-neutral-950 text-white font-medium text-sm sm:text-base rounded-full hover:bg-neutral-800 transition-all duration-200 shadow-md flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>{t.welcomeEnterButton}</span>
              <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
            </motion.button>

            {/* Subtle editorial trust footnote */}
            <div className="mt-12 flex items-center gap-2 text-xs text-neutral-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>15+ toifalar · Cheksiz tasavvur · Erkin platforma</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
