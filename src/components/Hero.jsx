import React from 'react';
import { Sparkles, Layers, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="text-center py-16 px-4 max-w-4xl mx-auto">
      <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 px-4 py-1.5 rounded-full text-xs font-semibold mb-6">
        <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
        <span>70 Premium Visual Themes in One NPM Package</span>
      </div>

      <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6 bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
        Instant Zero-Config Visual Identity for Web Apps
      </h1>

      <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-normal mb-8 leading-relaxed">
        Switch complete design systems instantly with a single <code className="text-indigo-300 font-mono bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-800/50">data-theme="..."</code> attribute. Built for React, Tailwind, Next.js, and Vite.
      </p>

      <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-slate-300">
        <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-xl">
          <Zap className="w-4 h-4 text-amber-400" /> Zero JS Overhead
        </div>
        <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-xl">
          <Layers className="w-4 h-4 text-purple-400" /> 70 Handcrafted Themes
        </div>
        <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-xl">
          <Sparkles className="w-4 h-4 text-cyan-400" /> Tailwind Compatible
        </div>
      </div>
    </section>
  );
}
