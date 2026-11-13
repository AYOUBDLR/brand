import React from 'react';
import { Search, X } from 'lucide-react';
import { MediaItem } from '../types';

interface SearchBarAndTabsProps {
  mediaItems: MediaItem[];
  selectedItem: MediaItem;
  onSelectItem: (item: MediaItem) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const SearchBarAndTabs: React.FC<SearchBarAndTabsProps> = ({
  mediaItems,
  selectedItem,
  onSelectItem,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <div className="w-full max-w-xl mx-auto mb-4 space-y-3">
      {/* Search Input Bar */}
      <div className="relative flex items-center">
        <Search className="absolute left-4 w-5 h-5 text-[#ff007f] pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search movie..."
          className="w-full bg-[#0d101b] border border-slate-800/90 hover:border-slate-700 focus:border-[#ff007f] rounded-2xl py-3.5 pl-12 pr-10 text-sm text-white placeholder-slate-500 focus:outline-none transition-all shadow-inner"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => onSearchChange('')}
            className="absolute right-3.5 text-slate-500 hover:text-white transition-colors"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Tabs Row */}
      <div className="w-full rounded-2xl border border-slate-800/90 bg-[#0c0f18]/90 p-1.5 flex items-center gap-2 overflow-x-auto scrollbar-none">
        {mediaItems.map((item) => {
          const isActive = selectedItem.id === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectItem(item)}
              className={`flex-1 min-w-fit shrink-0 py-2 px-3 sm:px-3.5 rounded-xl flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                isActive
                  ? 'bg-gradient-to-r from-[#ff007f] to-[#ff5500] text-white shadow-[0_0_20px_rgba(255,0,127,0.4)]'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <span>{item.emoji}</span>
              <span>{item.title}</span>
              <span
                className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded tracking-wide ${
                  isActive
                    ? 'bg-black/30 text-white shadow-sm'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                {item.badge}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
