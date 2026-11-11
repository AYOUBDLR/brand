import React from 'react';
import { Check, Play } from 'lucide-react';
import { MediaItem } from '../types';

interface HeroPortalCardProps {
  item: MediaItem;
  onPlayPreview: () => void;
  onStartDownload: () => void;
}

export const HeroPortalCard: React.FC<HeroPortalCardProps> = ({
  item,
  onPlayPreview,
  onStartDownload,
}) => {
  return (
    <div className="w-full flex flex-col items-center pt-8 pb-4 px-4 sm:px-8">
      {/* Verified Profile Avatar with glowing neon ring */}
      <div className="relative mb-5">
        <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-[#ff007f] to-[#ff4500] avatar-glow">
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#ff007f] bg-slate-900">
            <img
              src={item.avatarUrl}
              alt={item.displayTitle}
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop';
              }}
            />
          </div>
        </div>

        {/* Verified Badge Checkmark in bottom right */}
        <div
          className="absolute bottom-1 right-1 w-8 h-8 rounded-full bg-[#ff007f] border-2 border-[#0c0f18] flex items-center justify-center text-white shadow-[0_0_12px_#ff007f]"
          title="Verified Direct Master Release"
        >
          <Check className="w-4 h-4 stroke-[3]" />
        </div>
      </div>

      {/* Main Title */}
      <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight uppercase max-w-xl mx-auto mb-2 text-center drop-shadow-md">
        {item.displayTitle}
      </h1>

      {/* Monospace Subtitle */}
      <p className="font-mono text-xs sm:text-sm text-slate-400 text-center mb-5 tracking-wide max-w-lg">
        {item.subtitle}
      </p>

      {/* Fast Offline Mirror Status Pill */}
      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-950/50 border border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.25)] mb-7">
        <span className="w-2.5 h-2.5 rounded-full bg-[#00e676] pulse-green inline-block"></span>
        <span className="font-mono-custom text-xs font-bold text-emerald-400 tracking-wider uppercase">
          FAST OFFLINE MIRROR • AVAILABLE NOW
        </span>
      </div>

      {/* Video Preview Card with Badges and Play Button */}
      <div
        onClick={onPlayPreview}
        className="relative aspect-video w-full max-w-xl rounded-2xl overflow-hidden border border-slate-800/90 shadow-[0_15px_45px_rgba(0,0,0,0.8)] group cursor-pointer mb-6"
      >
        <img
          src={item.previewUrl}
          alt={`${item.displayTitle} Preview`}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop';
          }}
        />

        {/* Ambient Dark Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/35 pointer-events-none" />

        {/* Floating Center Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            type="button"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#ff007f] hover:bg-[#ff1a8c] text-white flex items-center justify-center shadow-[0_0_35px_rgba(255,0,127,0.85)] group-hover:scale-110 transition-transform duration-300"
            aria-label="Play Video Preview"
          >
            <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-white translate-x-0.5" />
          </button>
        </div>

        {/* Bottom Left Badge: S01-S03 Complete Boxset */}
        <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md border border-white/10 text-slate-200 text-[11px] sm:text-xs font-mono font-medium px-3 py-1.5 rounded-lg shadow-lg">
          {item.boxsetBadge}
        </div>

        {/* Bottom Right Badge: HEVC HDR10+ */}
        <div className="absolute bottom-3 right-3 bg-emerald-950/85 backdrop-blur-md border border-emerald-500/50 text-emerald-400 text-[11px] sm:text-xs font-mono font-bold px-2.5 py-1 rounded shadow-lg">
          {item.hdrBadge}
        </div>
      </div>

      {/* Big Watch / Stream Button */}
      <button
        type="button"
        onClick={onStartDownload}
        className="w-full max-w-xl bg-gradient-to-r from-[#ff007f] via-[#ff2b00] to-[#ff5e00] hover:from-[#ff1a8c] hover:to-[#ff6f1a] text-white font-extrabold py-4 px-6 rounded-2xl tracking-wider uppercase shadow-[0_0_35px_rgba(255,0,127,0.5)] hover:shadow-[0_0_50px_rgba(255,0,127,0.75)] flex items-center justify-center gap-3 cursor-pointer text-sm sm:text-base transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] border border-white/20 mb-2"
      >
        <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white translate-x-0.5" />
        <span>{item.watchButtonText}</span>
      </button>

      {/* Subtext info */}
      <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 font-mono">
        <span>Instant High-Speed CDN</span>
        <span>•</span>
        <span className="text-emerald-400 font-bold">100% Free &amp; Verified</span>
        <span>•</span>
        <span>Zero Wait</span>
      </div>
    </div>
  );
};
