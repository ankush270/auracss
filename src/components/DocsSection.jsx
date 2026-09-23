import React from 'react';
import { Terminal, Code, Sliders, CheckCircle } from 'lucide-react';

export default function DocsSection({ appMode }) {
  const isLight = appMode === 'light';

  return (
    <div className={`mt-20 border-t pt-16 space-y-16 ${isLight ? 'border-slate-200' : 'border-white/10'}`}>
      {/* Quick Start Section */}
      <section id="quickstart">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className={`text-3xl font-black tracking-tight mb-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>How to Use AuraCSS in React & Tailwind</h2>
          <p className={`text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            Integration takes less than 60 seconds with zero runtime overhead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`border rounded-2xl p-6 ${isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#131b2e] border-white/10'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-500">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className={`text-lg font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>1. Install Package</h3>
            </div>
            <p className={`text-xs mb-4 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>Add auracss to your React project:</p>
            <div className={`border rounded-xl p-3 font-mono text-xs ${isLight ? 'bg-slate-100 border-slate-200 text-indigo-700' : 'bg-[#0b0f19] border-white/10 text-indigo-300'}`}>
              <code>npm install @ankush_crap/auracss</code>
            </div>
          </div>

          <div className={`border rounded-2xl p-6 ${isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#131b2e] border-white/10'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-500">
                <Code className="w-5 h-5" />
              </div>
              <h3 className={`text-lg font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>2. Import in Entry File</h3>
            </div>
            <p className={`text-xs mb-4 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>Import in main.jsx or index.css:</p>
            <div className={`border rounded-xl p-3 font-mono text-xs ${isLight ? 'bg-slate-100 border-slate-200 text-indigo-700' : 'bg-[#0b0f19] border-white/10 text-indigo-300'}`}>
              <code>import '@ankush_crap/auracss';</code>
            </div>
          </div>

          <div className={`border rounded-2xl p-6 ${isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#131b2e] border-white/10'}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-500">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h3 className={`text-lg font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>3. Set data-theme</h3>
            </div>
            <p className={`text-xs mb-4 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>Set data-theme attribute on root or container:</p>
            <div className={`border rounded-xl p-3 font-mono text-xs ${isLight ? 'bg-slate-100 border-slate-200 text-indigo-700' : 'bg-[#0b0f19] border-white/10 text-indigo-300'}`}>
              <code>&lt;html data-theme="agentic"&gt;</code>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section id="customization">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className={`text-3xl font-black tracking-tight mb-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>Customizing Themes & Tailwind</h2>
          <p className={`text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            Seamlessly combine Tailwind CSS utility classes with AuraCSS design token variables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`border rounded-2xl p-6 ${isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#131b2e] border-white/10'}`}>
            <div className="flex items-center gap-3 mb-4">
              <Sliders className="w-5 h-5 text-indigo-600" />
              <h3 className={`text-lg font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>Override CSS Variables</h3>
            </div>
            <p className={`text-xs mb-4 leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              Override primary colors or radii directly in your index.css or Tailwind stylesheet:
            </p>
            <div className={`border rounded-xl p-4 font-mono text-xs overflow-x-auto ${isLight ? 'bg-slate-900 border-slate-800 text-indigo-300' : 'bg-[#0b0f19] border-white/10 text-indigo-300'}`}>
              <pre>{`[data-theme="cyberpunk"] {
  --color-primary: #ff007f; /* Custom Neon Pink */
  --bg-main: #05050a;      /* Deep Dark */
  --radius: 6px;           /* Sharper Corners */
}`}</pre>
            </div>
          </div>

          <div className={`border rounded-2xl p-6 ${isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#131b2e] border-white/10'}`}>
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-5 h-5 text-purple-600" />
              <h3 className={`text-lg font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>Tailwind CSS Variable Binding</h3>
            </div>
            <p className={`text-xs mb-4 leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              Use Tailwind arbitrary values with AuraCSS CSS variables in React JSX:
            </p>
            <div className={`border rounded-xl p-4 font-mono text-xs overflow-x-auto ${isLight ? 'bg-slate-900 border-slate-800 text-indigo-300' : 'bg-[#0b0f19] border-white/10 text-indigo-300'}`}>
              <pre>{`<div className="bg-[var(--bg-card)] border border-[var(--border)] p-6">
  <button className="bg-[var(--color-primary)] text-white px-4 py-2">
    Tailwind + AuraCSS Button
  </button>
</div>`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Publishing Section */}
      <section id="publishing">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className={`text-3xl font-black tracking-tight mb-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>Publishing `auracss` to NPM</h2>
          <p className={`text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            Publish your 70-theme package so the global developer community can install it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`border rounded-2xl p-6 ${isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#131b2e] border-white/10'}`}>
            <div className="text-xs font-mono text-indigo-600 font-bold mb-2">STEP 1</div>
            <h3 className={`text-lg font-bold mb-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>NPM Signup</h3>
            <p className={`text-xs ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>Create a free account on <a href="https://npmjs.com" target="_blank" className="text-indigo-600 underline">npmjs.com</a>.</p>
          </div>

          <div className={`border rounded-2xl p-6 ${isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#131b2e] border-white/10'}`}>
            <div className="text-xs font-mono text-indigo-600 font-bold mb-2">STEP 2</div>
            <h3 className={`text-lg font-bold mb-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>Login Terminal</h3>
            <p className={`text-xs mb-3 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>Login to your NPM account via CLI:</p>
            <div className={`border rounded-xl p-2.5 font-mono text-xs ${isLight ? 'bg-slate-100 border-slate-200 text-indigo-700' : 'bg-[#0b0f19] border-white/10 text-indigo-300'}`}>
              <code>npm login</code>
            </div>
          </div>

          <div className={`border rounded-2xl p-6 ${isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#131b2e] border-white/10'}`}>
            <div className="text-xs font-mono text-indigo-600 font-bold mb-2">STEP 3</div>
            <h3 className={`text-lg font-bold mb-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>Publish Publicly</h3>
            <p className={`text-xs mb-3 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>Publish to the global npm registry:</p>
            <div className={`border rounded-xl p-2.5 font-mono text-xs ${isLight ? 'bg-slate-100 border-slate-200 text-indigo-700' : 'bg-[#0b0f19] border-white/10 text-indigo-300'}`}>
              <code>npm publish --access public</code>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
