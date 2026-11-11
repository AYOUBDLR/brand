import React from 'react';
import { Sparkles } from 'lucide-react';

interface BannerHeaderProps {
  portalText?: string;
}

export const BannerHeader: React.FC<BannerHeaderProps> = ({
  portalText = 'EXCLUSIVE CAMPUS DRIVERS DOWNLOAD PORTAL',
}) => {
  return (
    <div className="w-full hazard-stripes text-white py-3 px-4 text-center font-bold text-xs sm:text-sm tracking-wider shadow-lg flex items-center justify-center gap-2 rounded-t-2xl sm:rounded-t-3xl border-b border-orange-500/30 overflow-hidden relative">
      <div className="flex items-center justify-center gap-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
        <Sparkles className="w-4 h-4 text-yellow-200 fill-yellow-200 animate-pulse shrink-0" />
        <span className="font-mono-custom font-extrabold uppercase tracking-[0.14em] sm:tracking-[0.2em] text-white">
          {portalText}
        </span>
        <Sparkles className="w-4 h-4 text-yellow-200 fill-yellow-200 animate-pulse shrink-0" />
      </div>
    </div>
  );
};
