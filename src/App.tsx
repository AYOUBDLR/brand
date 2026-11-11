import React, { useState, useMemo } from 'react';
import { BannerHeader } from './components/BannerHeader';
import { HeroPortalCard } from './components/HeroPortalCard';
import { DownloadSection } from './components/DownloadSection';
import { SyncingModal } from './components/SyncingModal';
import { SearchBarAndTabs } from './components/SearchBarAndTabs';
import { MediaItem } from './types';
import campusDriversAvatar from './assets/images/campus_drivers_avatar_1794416690899.jpg';
import campusDriversCarPreview from './assets/images/campus_drivers_car_preview_1794416705280.jpg';
import southParkAvatar from './assets/images/southpark_avatar_1790121336681.jpg';
import southParkBanner from './assets/images/southpark_banner_1790121348320.jpg';

const MEDIA_CATALOG: MediaItem[] = [
  {
    id: 'campus-drivers',
    title: 'Campus Drivers',
    displayTitle: 'CAMPUS DRIVERS',
    emoji: '🚙',
    badge: '4K UHD',
    bannerPortalText: '✨ EXCLUSIVE CAMPUS DRIVERS DOWNLOAD PORTAL ✨',
    subtitle: 'Campus Drivers (2024) · Dir. C.S. Quill · 4K UHD Master',
    avatarUrl: 'https://i.postimg.cc/5NJrwm06/logo.webp',
    previewUrl: 'https://i.postimg.cc/85hH5qL4/Capture-d-ecran-2026-11-07-194217.png',
    boxsetBadge: 'S01-S03 Complete Boxset',
    hdrBadge: 'HEVC HDR10+',
    downloadButtonText: 'DOWNLOAD SERIES (4K / 1080P)',
    fileSize: '~ 4.8 GB Complete Pack',
    rating: '4.9 / 5',
    year: '2024',
    directorOrStudio: 'Dir. C.S. Quill',
    resolution: '4K UHD',
    description: 'Get high-speed offline mirror access to the complete Campus Drivers series and exclusive specials.',
    redirectUrl: 'https://trckapp.org/cl/i/d23gr7',
  },
  {
    id: 'south-park',
    title: 'South Park',
    displayTitle: 'SOUTH PARK',
    emoji: '🏔️',
    badge: 'FULL HD',
    bannerPortalText: '✨ EXCLUSIVE SOUTH PARK DOWNLOAD PORTAL ✨',
    subtitle: 'South Park: Special Events (2024) · Comedy Central · FULL HD Master',
    avatarUrl: southParkAvatar,
    previewUrl: southParkBanner,
    boxsetBadge: 'S01-S26 Complete Library',
    hdrBadge: '1080P REMASTERED',
    downloadButtonText: 'DOWNLOAD SERIES (FULL HD)',
    fileSize: '~ 12.4 GB Archive',
    rating: '4.9 / 5',
    year: '2024',
    directorOrStudio: 'Comedy Central',
    resolution: 'FULL HD',
    description: 'Get high-speed offline mirror access to the complete South Park specials and episodes.',
    redirectUrl: 'https://saveapp.store/cl/i/5nlp41',
  },
];

export default function App() {
  const [selectedItemId, setSelectedItemId] = useState<string>('campus-drivers');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSyncModalOpen, setIsSyncModalOpen] = useState(false);

  // Filter media based on search query or fallback to selected
  const activeItem = useMemo(() => {
    if (searchQuery.trim()) {
      const match = MEDIA_CATALOG.find((m) =>
        m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.displayTitle.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (match) return match;
    }
    return MEDIA_CATALOG.find((m) => m.id === selectedItemId) || MEDIA_CATALOG[0];
  }, [selectedItemId, searchQuery]);

  const handleOpenSync = () => {
    setIsSyncModalOpen(true);
  };

  return (
    <div className="min-h-screen w-full bg-[#07090e] text-slate-100 flex flex-col items-center justify-start p-2 sm:p-6 md:p-10 font-sans-custom relative overflow-x-hidden selection:bg-[#ff007f] selection:text-white">
      {/* Background ambient lighting glows */}
      <div className="fixed -top-40 -left-40 w-96 h-96 bg-[#ff007f]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed top-1/2 -right-40 w-96 h-96 bg-[#ff4500]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed -bottom-40 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Search Bar & Movie Switcher Tabs */}
      <SearchBarAndTabs
        mediaItems={MEDIA_CATALOG}
        selectedItem={activeItem}
        onSelectItem={(item) => {
          setSelectedItemId(item.id);
          setSearchQuery('');
        }}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Central App Card Container */}
      <main className="w-full max-w-xl bg-[#0c0f18] rounded-2xl sm:rounded-3xl border border-slate-800/80 shadow-[0_20px_60px_rgba(0,0,0,0.95)] overflow-hidden relative z-10 transition-all duration-300">
        {/* Top Hazard/Candy Striped Banner */}
        <BannerHeader portalText={activeItem.bannerPortalText} />

        {/* Hero Section */}
        <HeroPortalCard
          item={activeItem}
          onPlayPreview={handleOpenSync}
          onStartDownload={handleOpenSync}
        />

        {/* Download Section */}
        <DownloadSection
          item={activeItem}
          onStartDownload={handleOpenSync}
        />
      </main>

      {/* File Syncing Progress Modal */}
      <SyncingModal
        isOpen={isSyncModalOpen}
        redirectUrl={activeItem.redirectUrl}
      />
    </div>
  );
}
