import React from 'react';
import { GalleryProvider } from './context/GalleryContext';
import { WelcomeScreen } from './components/WelcomeScreen';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TrendingSection } from './components/TrendingSection';
import { CategoriesShowcase } from './components/CategoriesShowcase';
import { LatestUploadsSection } from './components/LatestUploadsSection';
import { CategoryChips } from './components/CategoryChips';
import { MasonryGallery } from './components/MasonryGallery';
import { ImageViewer } from './components/ImageViewer';
import { UploadModal } from './components/UploadModal';
import { InfoModals } from './components/InfoModals';
import { Toast } from './components/Toast';
import { Footer } from './components/Footer';

function GalleryApp() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-neutral-900 font-sans">
      {/* 
        Brand Welcome Screen Overlay:
        Displays on initial site open with black Pinterest-inspired logo,
        tagline, and prominent "Rasmlarni ko‘rish" button.
      */}
      <WelcomeScreen />

      {/* Sticky Header with Search, Upload, Language Selector, and User Profile */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Trending AI Images */}
        <TrendingSection />

        {/* 3. Categories Showcase */}
        <CategoriesShowcase />

        {/* 4. Latest Uploads */}
        <LatestUploadsSection />

        {/* 5. Explore / Main Masonry Gallery */}
        <div className="pt-4">
          <CategoryChips />
          <MasonryGallery />
        </div>
      </main>

      {/* Final Footer */}
      <Footer />

      {/* Modals, Lightbox & Notifications */}
      <ImageViewer />
      <UploadModal />
      <InfoModals />
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <GalleryProvider>
      <GalleryApp />
    </GalleryProvider>
  );
}
