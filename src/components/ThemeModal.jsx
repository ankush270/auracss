import React, { useState } from 'react';
import { X, Check, Copy, Globe, Code2 } from 'lucide-react';

export default function ThemeModal({ theme, onClose, onApplyGlobal, showToast }) {
  const [copiedType, setCopiedType] = useState(null);

  if (!theme) return null;

  const htmlSnippet = `<html data-theme="${theme.id}">
  <body>
    <div className="theme-card">
      <span className="theme-badge">${theme.name} Active</span>
      <button className="theme-btn">Action Button</button>
      <input className="theme-input" placeholder="Type here..." />
    </div>
  </body>
</html>`;

  const reactSnippet = `import 'auracss';

export default function MyComponent() {
  return (
    <div data-theme="${theme.id}">
      <div className="theme-card">
        <span className="theme-badge">${theme.name}</span>
        <button className="theme-btn">Primary Action</button>
      </div>
    </div>
  );
}`;

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    showToast(`Copied ${type.toUpperCase()} snippet for ${theme.name}!`);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-[#131b2e] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl p-6 md:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-6 mb-6 gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/30 px-3 py-1 rounded-full">
              {theme.category} System
            </span>
            <h2 className="text-3xl font-black text-white mt-2 tracking-tight">
              {theme.name} Theme
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              {theme.desc}
            </p>
          </div>

          <button
            onClick={() => onApplyGlobal(theme.id)}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-indigo-600/30 transition-all cursor-pointer self-start md:self-auto"
          >
            <Globe className="w-4 h-4" />
            Apply to Entire App
          </button>
        </div>

        {/* Modal Grid: Sandbox & Specs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Live Component Sandbox */}
          <div className="bg-[#0b0f19]/60 border border-white/10 rounded-xl p-5">
            <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-indigo-400" />
              Live Component Sandbox
            </h4>

            <div data-theme={theme.id} className="p-4 rounded-xl border border-white/5">
              <div className="theme-card">
                <div className="flex justify-between items-center mb-3">
                  <span className="theme-badge">{theme.name} Theme Active</span>
                  <span className="text-[11px] font-mono opacity-70">data-theme="{theme.id}"</span>
                </div>

                <h3 className="text-lg font-bold mb-2">Interactive Preview Card</h3>
                <p className="text-sm opacity-80 mb-4 leading-relaxed">
                  This live preview highlights typography, surface textures, borders, and shadows tailored for {theme.name}.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <button className="theme-btn">Primary Action</button>
                  <button className="theme-btn theme-btn-secondary">Secondary</button>
                </div>

                <input className="theme-input" placeholder="Type here to test focus state..." />
              </div>
            </div>
          </div>

          {/* Tokens & Code Snippets */}
          <div className="bg-[#0b0f19]/60 border border-white/10 rounded-xl p-5 flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-bold text-white mb-4">Design Tokens</h4>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between items-center text-xs bg-white/5 px-3 py-2 rounded-lg">
                  <span className="text-slate-400">Primary Color</span>
                  <code className="text-white font-mono">{theme.primary}</code>
                </div>
                <div className="flex justify-between items-center text-xs bg-white/5 px-3 py-2 rounded-lg">
                  <span className="text-slate-400">Secondary Color</span>
                  <code className="text-white font-mono">{theme.secondary}</code>
                </div>
                <div className="flex justify-between items-center text-xs bg-white/5 px-3 py-2 rounded-lg">
                  <span className="text-slate-400">Surface Canvas</span>
                  <code className="text-white font-mono">{theme.surface}</code>
                </div>
                <div className="flex justify-between items-center text-xs bg-white/5 px-3 py-2 rounded-lg">
                  <span className="text-slate-400">Primary Font</span>
                  <code className="text-white font-mono">{theme.font}</code>
                </div>
              </div>
            </div>

            {/* Snippet Tabs */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-slate-300">Integration Snippets</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => copyToClipboard(reactSnippet, 'react')}
                    className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold cursor-pointer"
                  >
                    {copiedType === 'react' ? 'Copied React!' : 'Copy React'}
                  </button>
                  <button
                    onClick={() => copyToClipboard(htmlSnippet, 'html')}
                    className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold cursor-pointer"
                  >
                    {copiedType === 'html' ? 'Copied HTML!' : 'Copy HTML'}
                  </button>
                </div>
              </div>

              <div className="bg-[#05070e] border border-white/10 rounded-lg p-3 text-xs font-mono text-indigo-300 overflow-x-auto">
                <pre>{reactSnippet}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
