import React from 'react';
import { Sparkles } from 'lucide-react';

export const BannerHeader: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#ff0080] via-[#ff3b00] to-[#ff8c00] text-white py-2.5 px-4 text-center font-bold text-xs sm:text-sm tracking-wide shadow-md flex items-center justify-center gap-2 rounded-t-2xl sm:rounded-t-3xl border-b border-orange-400/20">
      <Sparkles className="w-4 h-4 text-yellow-200 fill-yellow-200 animate-pulse hidden sm:inline-block" />
      <span className="drop-shadow-sm uppercase font-extrabold tracking-wider">
        ✨ EXCLUSIVE SPIDER-MAN: BRAND NEW DAY PORTAL ✨
      </span>
      <Sparkles className="w-4 h-4 text-yellow-200 fill-yellow-200 animate-pulse hidden sm:inline-block" />
    </div>
  );
};
