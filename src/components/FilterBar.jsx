import React from 'react';
import { Search, Grid, Bot, Briefcase, Gamepad2, Palette, Gem, Heart } from 'lucide-react';

export default function FilterBar({ searchQuery, setSearchQuery, activeFilter, setActiveFilter, themeCount, totalCount, favCount = 0, appMode }) {
  const isLight = appMode === 'light';

  const categories = [
    { id: 'all', label: 'All Themes', icon: Grid },
    { id: 'favorites', label: `Favorites (${favCount})`, icon: Heart },
    { id: 'ai', label: 'AI Assistants', icon: Bot },
    { id: 'saas', label: 'B2B SaaS', icon: Briefcase },
    { id: 'retro', label: 'Gaming & Retro', icon: Gamepad2 },
    { id: 'creative', label: 'Creative & Art', icon: Palette },
    { id: 'luxury', label: 'Premium & Luxury', icon: Gem },
  ];

  return (
    <section className={`border rounded-2xl p-4 md:p-6 mb-8 transition-colors duration-300 ${
      isLight ? 'bg-white border-slate-200 shadow-xl shadow-slate-200/50' : 'bg-[#131b2e] border-white/10 shadow-2xl'
    }`}>
      {/* Search Input */}
      <div className="relative mb-4 md:mb-6">
        <Search className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 pointer-events-none ${
          isLight ? 'text-slate-400' : 'text-slate-400'
        }`} />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search 70 themes by name or style (cyberpunk, retro, dark, serif, bento)..."
          className={`w-full border pl-10 md:pl-12 pr-4 py-3 rounded-xl text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all ${
            isLight
              ? 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-600'
              : 'bg-[#0b0f19]/80 border-white/10 text-white placeholder-slate-500 focus:border-indigo-500'
          }`}
        />
      </div>

      {/* Category Tabs (Horizontally Scrollable on Mobile) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none scroll-smooth">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-500'
                    : isLight
                    ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                    : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-transparent'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        <div className={`text-[11px] md:text-xs font-bold font-mono whitespace-nowrap ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
          Showing {themeCount} / {totalCount} Themes
        </div>
      </div>
    </section>
  );
}
