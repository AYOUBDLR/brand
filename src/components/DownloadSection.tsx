import React, { useState, useEffect } from 'react';
import { Download, Server, Star, ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';
import { MediaItem } from '../types';

interface DownloadSectionProps {
  item: MediaItem;
  onStartDownload: () => void;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({ item, onStartDownload }) => {
  const [connectionsCount, setConnectionsCount] = useState(14820);
  const [selectedQuality, setSelectedQuality] = useState<'4K' | '1080p' | '720p'>('4K');

  // Live counter effect to make the portal feel active
  useEffect(() => {
    const interval = setInterval(() => {
      setConnectionsCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full px-4 pb-12 flex flex-col items-center">
      {/* Quality Picker Pills */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <span className="text-xs font-mono text-slate-400 uppercase mr-1">Quality:</span>
        {(['4K', '1080p', '720p'] as const).map((q) => (
          <button
            key={q}
            type="button"
            onClick={() => setSelectedQuality(q)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold uppercase transition-all ${
              selectedQuality === q
                ? 'bg-[#ff007f] text-white shadow-[0_0_15px_rgba(255,0,127,0.5)]'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {q === '4K' ? `${q} UHD` : `${q} HD`}
          </button>
        ))}
      </div>

      {/* Title */}
      <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white text-center mb-2 tracking-wide">
        Download {item.title} ({selectedQuality})
      </h2>

      {/* Description */}
      <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mb-6 text-center leading-relaxed">
        {item.description}{' '}
        <span className="text-[#ff007f] font-bold">100% Free &amp; Fast</span>. Starts instantly.
      </p>

      {/* Large Gradient CTA Download Button */}
      <button
        type="button"
        onClick={onStartDownload}
        className="w-full max-w-md bg-gradient-to-r from-[#ff007f] via-[#ff3b00] to-[#ff6b00] hover:from-[#ff1a8c] hover:to-[#ff7b1a] text-white font-extrabold py-4 px-6 rounded-2xl tracking-wider uppercase shadow-[0_0_35px_rgba(255,0,127,0.45)] hover:shadow-[0_0_45px_rgba(255,0,127,0.65)] flex items-center justify-center gap-3 cursor-pointer text-sm sm:text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-white/20 mb-3"
      >
        <Download className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
        <span>START DIRECT DOWNLOAD ({selectedQuality})</span>
      </button>

      {/* Start High-Speed Download Sub-Label */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <span className="w-2 h-2 rounded-full bg-[#ff007f] animate-pulse"></span>
        <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase font-mono">
          TLS 1.3 ENCRYPTED • {item.fileSize}
        </span>
      </div>

      {/* Two Stats Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md mb-8">
        {/* Connections Card */}
        <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 flex flex-col items-center justify-center shadow-lg hover:border-slate-700 transition-colors">
          <div className="w-10 h-10 rounded-2xl bg-[#2a0e20] border border-[#ff007f]/30 text-[#ff007f] flex items-center justify-center mb-3">
            <Server className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div className="font-mono font-extrabold text-2xl sm:text-3xl text-white tracking-tight tabular-nums">
            {connectionsCount.toLocaleString()}+
          </div>
          <div className="text-[10px] sm:text-[11px] font-bold tracking-wider text-slate-400 uppercase mt-1">
            CONNECTIONS TODAY
          </div>
        </div>

        {/* Satisfaction Rating Card */}
        <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 flex flex-col items-center justify-center shadow-lg hover:border-slate-700 transition-colors">
          <div className="flex items-center gap-1 text-amber-400 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
            ))}
          </div>
          <div className="font-mono font-extrabold text-2xl sm:text-3xl text-white tracking-tight tabular-nums">
            {item.rating}
          </div>
          <div className="text-[10px] sm:text-[11px] font-bold tracking-wider text-slate-400 uppercase mt-1">
            SATISFACTION INDEX
          </div>
        </div>
      </div>

      {/* Security Badges Row */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 w-full max-w-md mb-8">
        <div className="border border-emerald-500/40 bg-emerald-950/25 text-[#00e676] px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-extrabold tracking-wider uppercase flex items-center gap-1.5 shadow-sm">
          <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
          <span>SSL SECURE</span>
        </div>

        <div className="border border-pink-500/40 bg-pink-950/25 text-[#ff007f] px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-extrabold tracking-wider uppercase flex items-center gap-1.5 shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>MIRROR VERIFIED</span>
        </div>

        <div className="border border-cyan-500/40 bg-cyan-950/25 text-cyan-400 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-extrabold tracking-wider uppercase flex items-center gap-1.5 shadow-sm">
          <Lock className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>ZERO VIRUS</span>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full max-w-md border-t border-slate-800/80 my-4"></div>

      {/* Footer Disclaimer */}
      <p className="text-[11px] text-slate-400/80 text-center leading-relaxed max-w-md mx-auto font-sans-custom">
        This fast stream channel operates high-efficiency caching mirrors. Content matches fan sharing network protocols. Strictly not affiliated with commercial broadcasters. All rights protected. © 2026 {item.title} Offline Stream Portal.
      </p>
    </div>
  );
};
