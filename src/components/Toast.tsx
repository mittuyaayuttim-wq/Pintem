import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useGallery } from '../context/GalleryContext';
import { CheckCircle2 } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toast } = useGallery();

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 bg-neutral-950 text-white text-xs sm:text-sm font-medium rounded-full shadow-2xl border border-white/10"
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toast}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
