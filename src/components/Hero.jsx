import React from 'react';
import { Sparkles, Layers, Zap } from 'lucide-react';

export default function Hero({ appMode }) {
  const isLight = appMode === 'light';

  return (
    <section className="text-center py-16 px-4 max-w-4xl mx-auto">
      <div className={`inline-flex items-center gap-2 border px-4 py-1.5 rounded-full text-xs font-semibold mb-6 ${
        isLight
          ? 'bg-indigo-50 border-indigo-200 text-indigo-700'
          : 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300'
      }`}>
        <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
        <span>70 Premium Visual Themes in One NPM Package</span>
      </div>

      <h1 className={`text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6 ${
        isLight
          ? 'text-slate-900 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 bg-clip-text text-transparent'
          : 'text-white bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent'
      }`}>
        Instant Zero-Config Visual Identity for Web Apps
      </h1>

      <p className={`text-lg md:text-xl max-w-2xl mx-auto font-normal mb-8 leading-relaxed ${
        isLight ? 'text-slate-600' : 'text-slate-400'
      }`}>
        Switch complete design systems instantly with a single <code className={`font-mono px-2 py-0.5 rounded border ${
          isLight
            ? 'text-indigo-700 bg-indigo-50 border-indigo-200'
            : 'text-indigo-300 bg-indigo-950/60 border-indigo-800/50'
        }`}>data-theme="..."</code> attribute. Built for React, Tailwind, Next.js, and Vite.
      </p>

      <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold">
        <div className={`flex items-center gap-2 border px-4 py-2 rounded-xl ${
          isLight ? 'bg-white border-slate-200 text-slate-700 shadow-sm' : 'bg-slate-900/80 border-slate-800 text-slate-300'
        }`}>
          <Zap className="w-4 h-4 text-amber-500" /> Zero JS Overhead
        </div>
        <div className={`flex items-center gap-2 border px-4 py-2 rounded-xl ${
          isLight ? 'bg-white border-slate-200 text-slate-700 shadow-sm' : 'bg-slate-900/80 border-slate-800 text-slate-300'
        }`}>
          <Layers className="w-4 h-4 text-purple-600" /> 70 Handcrafted Themes
        </div>
        <div className={`flex items-center gap-2 border px-4 py-2 rounded-xl ${
          isLight ? 'bg-white border-slate-200 text-slate-700 shadow-sm' : 'bg-slate-900/80 border-slate-800 text-slate-300'
        }`}>
          <Sparkles className="w-4 h-4 text-cyan-600" /> Tailwind Compatible
        </div>
      </div>
    </section>
  );
}
