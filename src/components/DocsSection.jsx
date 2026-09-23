import React from 'react';
import { Terminal, Code, Sliders, Package, CheckCircle } from 'lucide-react';

export default function DocsSection() {
  return (
    <div className="mt-20 border-t border-white/10 pt-16 space-y-16">
      {/* Quick Start Section */}
      <section id="quickstart">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-black text-white tracking-tight mb-2">How to Use AuraCSS in React & Tailwind</h2>
          <p className="text-slate-400 text-sm">
            Integration takes less than 60 seconds with zero runtime overhead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#131b2e] border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">1. Install Package</h3>
            </div>
            <p className="text-xs text-slate-400 mb-4">Add auracss to your React project:</p>
            <div className="bg-[#0b0f19] border border-white/10 rounded-xl p-3 font-mono text-xs text-indigo-300">
              <code>npm install auracss</code>
            </div>
          </div>

          <div className="bg-[#131b2e] border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">2. Import in Entry File</h3>
            </div>
            <p className="text-xs text-slate-400 mb-4">Import in main.jsx or index.css:</p>
            <div className="bg-[#0b0f19] border border-white/10 rounded-xl p-3 font-mono text-xs text-indigo-300">
              <code>import 'auracss';</code>
            </div>
          </div>

          <div className="bg-[#131b2e] border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">3. Set data-theme</h3>
            </div>
            <p className="text-xs text-slate-400 mb-4">Set data-theme attribute on root or container:</p>
            <div className="bg-[#0b0f19] border border-white/10 rounded-xl p-3 font-mono text-xs text-indigo-300">
              <code>&lt;html data-theme="agentic"&gt;</code>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section id="customization">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-black text-white tracking-tight mb-2">Customizing Themes & Tailwind</h2>
          <p className="text-slate-400 text-sm">
            Seamlessly combine Tailwind CSS utility classes with AuraCSS design token variables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#131b2e] border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Sliders className="w-5 h-5 text-indigo-400" />
              <h3 className="text-lg font-bold text-white">Override CSS Variables</h3>
            </div>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Override primary colors or radii directly in your index.css or Tailwind stylesheet:
            </p>
            <div className="bg-[#0b0f19] border border-white/10 rounded-xl p-4 font-mono text-xs text-indigo-300 overflow-x-auto">
              <pre>{`[data-theme="cyberpunk"] {
  --color-primary: #ff007f; /* Custom Neon Pink */
  --bg-main: #05050a;      /* Deep Dark */
  --radius: 6px;           /* Sharper Corners */
}`}</pre>
            </div>
          </div>

          <div className="bg-[#131b2e] border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg font-bold text-white">Tailwind CSS Variable Binding</h3>
            </div>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Use Tailwind arbitrary values with AuraCSS CSS variables in React JSX:
            </p>
            <div className="bg-[#0b0f19] border border-white/10 rounded-xl p-4 font-mono text-xs text-indigo-300 overflow-x-auto">
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
          <h2 className="text-3xl font-black text-white tracking-tight mb-2">Publishing `auracss` to NPM</h2>
          <p className="text-slate-400 text-sm">
            Publish your 70-theme package so the global developer community can install it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#131b2e] border border-white/10 rounded-2xl p-6">
            <div className="text-xs font-mono text-indigo-400 font-bold mb-2">STEP 1</div>
            <h3 className="text-lg font-bold text-white mb-2">NPM Signup</h3>
            <p className="text-xs text-slate-400">Create a free account on <a href="https://npmjs.com" target="_blank" className="text-indigo-400 underline">npmjs.com</a>.</p>
          </div>

          <div className="bg-[#131b2e] border border-white/10 rounded-2xl p-6">
            <div className="text-xs font-mono text-indigo-400 font-bold mb-2">STEP 2</div>
            <h3 className="text-lg font-bold text-white mb-2">Login Terminal</h3>
            <p className="text-xs text-slate-400 mb-3">Login to your NPM account via CLI:</p>
            <div className="bg-[#0b0f19] border border-white/10 rounded-xl p-2.5 font-mono text-xs text-indigo-300">
              <code>npm login</code>
            </div>
          </div>

          <div className="bg-[#131b2e] border border-white/10 rounded-2xl p-6">
            <div className="text-xs font-mono text-indigo-400 font-bold mb-2">STEP 3</div>
            <h3 className="text-lg font-bold text-white mb-2">Publish Publicly</h3>
            <p className="text-xs text-slate-400 mb-3">Publish to the global npm registry:</p>
            <div className="bg-[#0b0f19] border border-white/10 rounded-xl p-2.5 font-mono text-xs text-indigo-300">
              <code>npm publish --access public</code>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
