import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ThemeCard({ theme, onSelect }) {
  return (
    <div className="bg-[#131b2e] border border-white/10 hover:border-white/25 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-black/50 group">
      {/* Header Info */}
      <div className="flex items-center justify-between px-5 py-3.5 bg-black/20 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded-full inline-block shadow" style={{ backgroundColor: theme.primary }} title={`Primary: ${theme.primary}`} />
          <span className="w-3.5 h-3.5 rounded-full inline-block shadow" style={{ backgroundColor: theme.secondary }} title={`Secondary: ${theme.secondary}`} />
          <span className="w-3.5 h-3.5 rounded-full inline-block border border-white/20" style={{ backgroundColor: theme.surface }} title={`Surface: ${theme.surface}`} />
        </div>
        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 bg-white/5 px-2.5 py-1 rounded-md">
          {theme.category}
        </span>
      </div>

      {/* Main Body */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-1 tracking-tight group-hover:text-indigo-400 transition-colors">
          {theme.name}
        </h3>
        <p className="text-xs text-slate-400 mb-4 line-clamp-2 leading-relaxed h-9">
          {theme.desc}
        </p>

        {/* Live Theme Preview Box */}
        <div className="mt-auto rounded-xl overflow-hidden p-1 border border-white/5 bg-black/40">
          <div data-theme={theme.id} className="p-3 rounded-lg transition-colors">
            <div className="theme-card">
              <div className="flex items-center justify-between mb-2">
                <span className="theme-badge">{theme.name}</span>
                <span className="text-[10px] font-mono opacity-60">data-theme="{theme.id}"</span>
              </div>
              <div className="flex gap-2">
                <button className="theme-btn text-xs py-1 px-3">Button</button>
                <input className="theme-input text-xs py-1 px-2 pointer-events-none" placeholder="Input..." readOnly />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-5 py-3 bg-black/15 border-t border-white/10 flex items-center justify-between">
        <span className="text-xs font-mono text-slate-400">
          Font: {theme.font.split('/')[0]}
        </span>
        <button
          onClick={() => onSelect(theme)}
          className="flex items-center gap-1.5 text-xs font-bold text-slate-300 group-hover:text-indigo-400 transition-colors cursor-pointer"
        >
          Explore & Copy <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
