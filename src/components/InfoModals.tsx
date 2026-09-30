import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useGallery } from '../context/GalleryContext';
import { X, Sparkles, ShieldCheck } from 'lucide-react';

export const InfoModals: React.FC = () => {
  const {
    isAboutModalOpen,
    setIsAboutModalOpen,
    isPrivacyModalOpen,
    setIsPrivacyModalOpen,
    t,
  } = useGallery();

  return (
    <>
      {/* About Modal */}
      <AnimatePresence>
        {isAboutModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-neutral-200"
            >
              <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h3
                    className="text-xl font-bold text-neutral-950"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {t.aboutTitle}
                  </h3>
                </div>
                <button
                  onClick={() => setIsAboutModalOpen(false)}
                  className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-500 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="py-5 space-y-3.5 text-sm text-neutral-600 leading-relaxed">
                {t.aboutContent.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-neutral-100 flex justify-end">
                <button
                  onClick={() => setIsAboutModalOpen(false)}
                  className="px-5 py-2 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold rounded-full transition-colors cursor-pointer"
                >
                  {t.closeBtn}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Privacy Modal */}
      <AnimatePresence>
        {isPrivacyModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-neutral-200"
            >
              <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h3
                    className="text-xl font-bold text-neutral-950"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {t.privacyTitle}
                  </h3>
                </div>
                <button
                  onClick={() => setIsPrivacyModalOpen(false)}
                  className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-500 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="py-5 space-y-3.5 text-sm text-neutral-600 leading-relaxed">
                {t.privacyContent.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-neutral-100 flex justify-end">
                <button
                  onClick={() => setIsPrivacyModalOpen(false)}
                  className="px-5 py-2 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold rounded-full transition-colors cursor-pointer"
                >
                  {t.closeBtn}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
