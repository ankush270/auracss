import React from 'react';
import { Search, Grid, Bot, Briefcase, Gamepad2, Palette, Gem } from 'lucide-react';

export default function FilterBar({ searchQuery, setSearchQuery, activeFilter, setActiveFilter, themeCount, totalCount }) {
  const categories = [
    { id: 'all', label: 'All Themes', icon: Grid },
    { id: 'ai', label: 'AI Assistants', icon: Bot },
    { id: 'saas', label: 'B2B SaaS', icon: Briefcase },
    { id: 'retro', label: 'Gaming & Retro', icon: Gamepad2 },
    { id: 'creative', label: 'Creative & Art', icon: Palette },
    { id: 'luxury', label: 'Premium & Luxury', icon: Gem },
  ];

  return (
    <section className="bg-[#131b2e] border border-white/10 rounded-2xl p-6 mb-10 shadow-2xl">
      {/* Search Input */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search 70 themes by name, typography, or style (e.g. 'cyberpunk', 'retro', 'dark', 'serif', 'bento')..."
          className="w-full bg-[#0b0f19]/80 border border-white/10 focus:border-indigo-500 pl-12 pr-4 py-3.5 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
        />
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-500'
                    : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-transparent'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        <div className="text-xs font-bold text-slate-400 font-mono">
          Showing {themeCount} / {totalCount} Themes
        </div>
      </div>
    </section>
  );
}
