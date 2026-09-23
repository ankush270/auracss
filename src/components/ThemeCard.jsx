import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';

export default function ThemeCard({ theme, onSelect, appMode, isFavorite, onToggleFavorite }) {
  const isLight = appMode === 'light';

  return (
    <div className={`border rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 group ${
      isLight
        ? 'bg-white border-slate-200 hover:border-slate-300 shadow-lg hover:shadow-xl shadow-slate-200/50'
        : 'bg-[#131b2e] border-white/10 hover:border-white/25 shadow-xl hover:shadow-2xl hover:shadow-black/50'
    }`}>
      {/* Header Info */}
      <div className={`flex items-center justify-between px-5 py-3.5 border-b ${
        isLight ? 'bg-slate-50 border-slate-200' : 'bg-black/20 border-white/10'
      }`}>
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded-full inline-block shadow" style={{ backgroundColor: theme.primary }} title={`Primary: ${theme.primary}`} />
          <span className="w-3.5 h-3.5 rounded-full inline-block shadow" style={{ backgroundColor: theme.secondary }} title={`Secondary: ${theme.secondary}`} />
          <span className="w-3.5 h-3.5 rounded-full inline-block border border-slate-300" style={{ backgroundColor: theme.surface }} title={`Surface: ${theme.surface}`} />
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleFavorite}
            className={`p-1.5 rounded-lg transition-transform hover:scale-110 cursor-pointer ${
              isFavorite
                ? 'text-rose-500 fill-rose-500'
                : isLight
                ? 'text-slate-400 hover:text-rose-500'
                : 'text-slate-500 hover:text-rose-400'
            }`}
            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-500 text-rose-500' : ''}`} />
          </button>
          <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md ${
            isLight ? 'bg-slate-200 text-slate-700' : 'bg-white/5 text-slate-400'
          }`}>
            {theme.category}
          </span>
        </div>
      </div>

      {/* Main Body */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className={`text-xl font-bold mb-1 tracking-tight transition-colors ${
          isLight
            ? 'text-slate-900 group-hover:text-indigo-600'
            : 'text-white group-hover:text-indigo-400'
        }`}>
          {theme.name}
        </h3>
        <p className={`text-xs mb-4 line-clamp-2 leading-relaxed h-9 ${
          isLight ? 'text-slate-600' : 'text-slate-400'
        }`}>
          {theme.desc}
        </p>

        {/* Live Theme Dummy Landing Page Preview Box */}
        <div className={`mt-auto rounded-xl overflow-hidden p-1.5 border transition-all ${
          isLight ? 'border-slate-200 bg-slate-100/80' : 'border-white/5 bg-black/40'
        }`}>
          <div data-theme={theme.id} className="p-2.5 rounded-lg transition-colors">
            <div className="theme-card space-y-2.5 p-3.5 shadow-sm text-left">
              {/* Mini Top Navbar */}
              <div className="flex items-center justify-between border-b pb-2 border-current/10">
                <div className="flex items-center gap-1.5 font-extrabold text-xs tracking-tight">
                  <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ backgroundColor: theme.primary }} />
                  <span>AuraApp</span>
                </div>
                <span className="theme-badge text-[9px] px-1.5 py-0.5">{theme.category}</span>
              </div>

              {/* Mini Hero Header & Subtitle */}
              <div>
                <span className="text-[9px] font-mono opacity-60 block uppercase tracking-wider mb-0.5">
                  data-theme="{theme.id}"
                </span>
                <h4 className="text-sm font-black leading-tight tracking-tight mb-1">
                  Next-Gen {theme.name} UI
                </h4>
                <p className="text-[11px] opacity-75 line-clamp-2 leading-tight">
                  Instant zero-config visual design system tailored for {theme.name}.
                </p>
              </div>

              {/* Mini Search & Action Bar */}
              <div className="flex items-center gap-1.5 pt-0.5">
                <input className="theme-input text-[10px] py-1 px-2.5 flex-1 pointer-events-none" placeholder="Search components..." readOnly />
                <button className="theme-btn text-[10px] py-1 px-2.5 whitespace-nowrap">Explore</button>
              </div>

              {/* Mini Stat Cards Row */}
              <div className="grid grid-cols-2 gap-1.5 pt-0.5">
                <div className="p-1.5 rounded border border-current/10 bg-current/5">
                  <div className="text-[8px] opacity-60 uppercase font-mono">Active Users</div>
                  <div className="text-xs font-extrabold">24.8K</div>
                </div>
                <div className="p-1.5 rounded border border-current/10 bg-current/5">
                  <div className="text-[8px] opacity-60 uppercase font-mono">Rating</div>
                  <div className="text-xs font-extrabold">4.9 / 5.0 ⭐</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className={`px-5 py-3 border-t flex items-center justify-between ${
        isLight ? 'bg-slate-50 border-slate-200' : 'bg-black/15 border-white/10'
      }`}>
        <span className={`text-xs font-mono ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
          Font: {theme.font.split('/')[0]}
        </span>
        <button
          onClick={() => onSelect(theme)}
          className={`flex items-center gap-1.5 text-xs font-bold transition-colors cursor-pointer ${
            isLight ? 'text-indigo-600 group-hover:text-indigo-800' : 'text-slate-300 group-hover:text-indigo-400'
          }`}
        >
          Explore & Copy <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
