import React, { useState } from 'react';
import { X, Globe, Code2 } from 'lucide-react';

export default function ThemeModal({ theme, onClose, onApplyGlobal, showToast, appMode }) {
  const [copiedType, setCopiedType] = useState(null);
  const isLight = appMode === 'light';

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

  const reactSnippet = `import '@ankush_crap/auracss';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-md animate-fade-in">
      <div className={`border rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl p-6 md:p-8 ${
        isLight ? 'bg-white border-slate-200 text-slate-900' : 'bg-[#131b2e] border-white/10 text-white'
      }`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-5 right-5 p-2 rounded-full transition-colors cursor-pointer ${
            isLight ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' : 'bg-white/10 hover:bg-white/20 text-white'
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className={`flex flex-col md:flex-row md:items-center justify-between border-b pb-6 mb-6 gap-4 ${
          isLight ? 'border-slate-200' : 'border-white/10'
        }`}>
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">
              {theme.category} System
            </span>
            <h2 className={`text-3xl font-black mt-2 tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>
              {theme.name} Theme
            </h2>
            <p className={`text-sm mt-1 max-w-xl ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {theme.desc}
            </p>
          </div>

          <button
            onClick={() => onApplyGlobal(theme.id)}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-indigo-600/30 transition-all cursor-pointer self-start md:self-auto"
          >
            <Globe className="w-4 h-4" />
            Apply to Entire App
          </button>
        </div>

        {/* Modal Grid: Sandbox & Specs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Live Component Sandbox */}
          <div className={`border rounded-xl p-5 ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0b0f19]/60 border-white/10'
          }`}>
            <h4 className={`text-sm font-bold mb-4 flex items-center gap-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>
              <Code2 className="w-4 h-4 text-indigo-600" />
              Live Component Sandbox
            </h4>

            <div data-theme={theme.id} className="p-4 rounded-xl border border-slate-200/50 shadow-sm">
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
          <div className={`border rounded-xl p-5 flex flex-col justify-between ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0b0f19]/60 border-white/10'
          }`}>
            <div>
              <h4 className={`text-sm font-bold mb-4 ${isLight ? 'text-slate-900' : 'text-white'}`}>Design Tokens</h4>
              <div className="space-y-2 mb-6">
                <div className={`flex justify-between items-center text-xs px-3 py-2 rounded-lg ${
                  isLight ? 'bg-white border border-slate-200' : 'bg-white/5'
                }`}>
                  <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>Primary Color</span>
                  <code className={`font-mono font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{theme.primary}</code>
                </div>
                <div className={`flex justify-between items-center text-xs px-3 py-2 rounded-lg ${
                  isLight ? 'bg-white border border-slate-200' : 'bg-white/5'
                }`}>
                  <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>Secondary Color</span>
                  <code className={`font-mono font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{theme.secondary}</code>
                </div>
                <div className={`flex justify-between items-center text-xs px-3 py-2 rounded-lg ${
                  isLight ? 'bg-white border border-slate-200' : 'bg-white/5'
                }`}>
                  <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>Surface Canvas</span>
                  <code className={`font-mono font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{theme.surface}</code>
                </div>
                <div className={`flex justify-between items-center text-xs px-3 py-2 rounded-lg ${
                  isLight ? 'bg-white border border-slate-200' : 'bg-white/5'
                }`}>
                  <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>Primary Font</span>
                  <code className={`font-mono font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{theme.font}</code>
                </div>
              </div>
            </div>

            {/* Snippet Tabs */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className={`text-xs font-bold ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>Integration Snippets</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => copyToClipboard(reactSnippet, 'react')}
                    className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold cursor-pointer"
                  >
                    {copiedType === 'react' ? 'Copied React!' : 'Copy React'}
                  </button>
                  <button
                    onClick={() => copyToClipboard(htmlSnippet, 'html')}
                    className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold cursor-pointer"
                  >
                    {copiedType === 'html' ? 'Copied HTML!' : 'Copy HTML'}
                  </button>
                </div>
              </div>

              <div className="bg-[#0f172a] border border-slate-800 rounded-lg p-3 text-xs font-mono text-indigo-300 overflow-x-auto">
                <pre>{reactSnippet}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
