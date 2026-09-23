import React from 'react';
import { Copy, BookOpen, Settings, UploadCloud, Sun, Moon } from 'lucide-react';

export default function Navbar({ onCopyNpm, appMode, onToggleAppMode }) {
  const isLight = appMode === 'light';

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md border-b px-6 py-4 transition-colors duration-300 ${
      isLight ? 'bg-white/80 border-slate-200 text-slate-900 shadow-sm' : 'bg-[#0b0f19]/90 border-white/10 text-white'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-black text-sm px-3 py-1 rounded-xl shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            AURA
          </span>
          <span className={`text-xl font-extrabold tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>
            AuraCSS
          </span>
          <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${isLight ? 'bg-slate-100 text-slate-600 border border-slate-200' : 'bg-white/10 text-slate-400'}`}>
            v1.0.0
          </span>
        </a>

        <div className="flex items-center gap-3 md:gap-4">
          {/* Theme Mode Toggle Button */}
          <button
            onClick={onToggleAppMode}
            className={`flex items-center gap-2 px-3 py-2 rounded-full border text-xs font-bold transition-all cursor-pointer ${
              isLight
                ? 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800'
                : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-200'
            }`}
            title="Toggle Light / Dark Showcase Mode"
          >
            {isLight ? (
              <>
                <Sun className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="hidden sm:inline">Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-indigo-400 fill-indigo-400" />
                <span className="hidden sm:inline">Dark Mode</span>
              </>
            )}
          </button>

          <button 
            onClick={onCopyNpm}
            className={`flex items-center gap-2 border px-3.5 py-2 rounded-full font-mono text-xs transition-all cursor-pointer ${
              isLight
                ? 'bg-indigo-50 hover:bg-indigo-100 border-indigo-200 text-indigo-900'
                : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-300 hover:text-white'
            }`}
          >
            <Copy className="w-3.5 h-3.5 text-indigo-600" />
            <span className="hidden sm:inline">npm install @ankush_crap/auracss</span>
            <span className="sm:hidden">npm i auracss</span>
          </button>

          <a href="#quickstart" className={`hidden md:flex items-center gap-1.5 text-sm font-semibold transition-colors ${
            isLight ? 'text-slate-600 hover:text-indigo-600' : 'text-slate-400 hover:text-white'
          }`}>
            <BookOpen className="w-4 h-4" />
            Docs
          </a>
          <a href="#customization" className={`hidden md:flex items-center gap-1.5 text-sm font-semibold transition-colors ${
            isLight ? 'text-slate-600 hover:text-indigo-600' : 'text-slate-400 hover:text-white'
          }`}>
            <Settings className="w-4 h-4" />
            Customize
          </a>
        </div>
      </div>
    </header>
  );
}
