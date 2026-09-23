import React from 'react';
import { Copy, Sparkles, BookOpen, Settings, UploadCloud } from 'lucide-react';

export default function Navbar({ onCopyNpm, toastMessage }) {
  return (
    <header className="sticky top-0 z-50 bg-[#0b0f19]/90 backdrop-blur-md border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-black text-sm px-3 py-1 rounded-xl shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">
            AURA
          </span>
          <span className="text-xl font-extrabold text-white tracking-tight">
            AuraCSS
          </span>
          <span className="text-xs bg-white/10 text-slate-400 font-mono px-2 py-0.5 rounded-full">
            v1.0.0
          </span>
        </a>

        <div className="flex items-center gap-4">
          <button 
            onClick={onCopyNpm}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 px-4 py-2 rounded-full text-slate-300 hover:text-white font-mono text-xs transition-all cursor-pointer"
          >
            <Copy className="w-3.5 h-3.5 text-indigo-400" />
            <span>npm install auracss</span>
          </button>

          <a href="#quickstart" className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-slate-400 hover:text-white transition-colors">
            <BookOpen className="w-4 h-4" />
            Docs
          </a>
          <a href="#customization" className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-slate-400 hover:text-white transition-colors">
            <Settings className="w-4 h-4" />
            Customize
          </a>
          <a href="#publishing" className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-slate-400 hover:text-white transition-colors">
            <UploadCloud className="w-4 h-4" />
            Publish
          </a>
        </div>
      </div>
    </header>
  );
}
