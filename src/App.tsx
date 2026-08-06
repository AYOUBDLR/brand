import React, { useState } from 'react';
import { BannerHeader } from './components/BannerHeader';
import { HeroPortalCard } from './components/HeroPortalCard';
import { DownloadSection } from './components/DownloadSection';
import { SyncingModal } from './components/SyncingModal';

export default function App() {
  const [isSyncModalOpen, setIsSyncModalOpen] = useState(false);

  const handleOpenSync = () => {
    setIsSyncModalOpen(true);
  };

  return (
    <div className="min-h-screen w-full bg-[#07090e] text-slate-100 flex items-center justify-center p-2 sm:p-6 md:p-10 font-sans-custom relative overflow-x-hidden selection:bg-[#ff007f] selection:text-white">
      {/* Background ambient lighting glows */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff007f]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#ff4500]/10 rounded-full blur-[160px] pointer-events-none"></div>

      {/* Main Container Portal Card */}
      <main className="relative z-10 w-full max-w-[540px] bg-[#0b0e17] border border-slate-800/90 rounded-2xl sm:rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.8)] overflow-hidden transition-all">
        {/* Top Banner */}
        <BannerHeader />

        {/* Hero Section */}
        <HeroPortalCard onPlayPreview={handleOpenSync} />

        {/* Download Section */}
        <DownloadSection onStartDownload={handleOpenSync} />
      </main>

      {/* File Syncing Progress Modal */}
      <SyncingModal
        isOpen={isSyncModalOpen}
      />
    </div>
  );
}
