import React from 'react';
import { Check, Play, FileVideo } from 'lucide-react';
const AVATAR_IMAGE_URL = 'https://i.postimg.cc/MGSX3ZVh/images.jpg';
const PREVIEW_IMAGE_URL = 'https://i.postimg.cc/MGqKbP8p/images.jpg';

interface HeroPortalCardProps {
  onPlayPreview: () => void;
}

export const HeroPortalCard: React.FC<HeroPortalCardProps> = ({ onPlayPreview }) => {
  return (
    <div className="flex flex-col items-center pt-8 pb-6 px-4 text-center">
      {/* Avatar Container with glowing pink ring */}
      <div className="relative mb-6">
        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-[#ff007f] to-[#ff4500] avatar-glow">
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#ff007f] bg-slate-900">
            <img
              src={AVATAR_IMAGE_URL}
              alt="Spider-Man Brand New Day Logo"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1635863138275-d9b33299680b?q=80&w=400&auto=format&fit=crop';
              }}
            />
          </div>
        </div>

        {/* Pink Verified Check Badge */}
        <div className="absolute bottom-0 right-1 bg-[#ff007f] text-white p-1.5 rounded-full border-2 border-[#0b0e17] shadow-lg flex items-center justify-center">
          <Check className="w-4 h-4 stroke-[3]" />
        </div>
      </div>

      {/* Main Movie Title */}
      <h1 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight uppercase max-w-md mx-auto mb-4 drop-shadow-md">
        Spider-Man: Brand New Day
      </h1>

      {/* Fast Offline Mirror Status Pill */}
      <div className="inline-flex items-center gap-2.5 bg-[#051c14] border border-[#00e676]/50 text-[#00e676] px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(0,230,118,0.15)] mb-7">
        <span className="w-2.5 h-2.5 rounded-full bg-[#00e676] pulse-green shrink-0"></span>
        <span>FAST OFFLINE MIRROR • AVAILABLE NOW</span>
      </div>

      {/* Video Preview Container Card */}
      <div 
        onClick={onPlayPreview}
        className="w-full rounded-2xl sm:rounded-3xl border border-slate-800/80 bg-slate-900/60 overflow-hidden relative group cursor-pointer shadow-2xl transition-all duration-300 hover:border-[#ff007f]/50 hover:shadow-[0_0_30px_rgba(255,0,127,0.25)]"
      >
        {/* Poster Media Background */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
          <img
            src={PREVIEW_IMAGE_URL}
            alt="Movie Preview"
            className="w-full h-full object-cover opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://images.unsplash.com/photo-1635863138275-d9b33299680b?q=80&w=800&auto=format&fit=crop';
            }}
          />

          {/* Dark Overlay gradient for video controls emphasis */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>

          {/* Big Play Button in Center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              type="button"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#ff007f] hover:bg-[#ff1a8c] text-white flex items-center justify-center shadow-[0_0_30px_rgba(255,0,127,0.8)] group-hover:scale-110 transition-all duration-300"
              aria-label="Play Movie Preview"
            >
              <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-white translate-x-0.5" />
            </button>
          </div>

          {/* Bottom White Pill Button */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center px-4">
            <div className="bg-white hover:bg-slate-100 text-[#ff007f] px-5 py-2 sm:py-2.5 rounded-full font-extrabold text-xs sm:text-xs tracking-wider uppercase flex items-center gap-2 shadow-xl group-hover:scale-105 transition-transform">
              <FileVideo className="w-4 h-4 fill-[#ff007f]/20 stroke-[#ff007f] stroke-[2.5]" />
              <span>PLAY MOVIE PREVIEW</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
