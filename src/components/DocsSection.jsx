import React from 'react';
import { Terminal, Code, Sliders, CheckCircle, Layers } from 'lucide-react';

export default function DocsSection({ appMode }) {
  const isLight = appMode === 'light';

  const componentList = [
    { class: '.theme-sidebar', desc: 'Navigation sidebar layout with headers, menu items, active states & profile footer', tag: 'Navigation' },
    { class: '.theme-footer', desc: 'Multi-column website footer with logo, navigation column grids & copyright row', tag: 'Layout' },
    { class: '.theme-hero', desc: 'Hero section container with prominent display headline, subtitle & CTA buttons', tag: 'Layout' },
    { class: '.theme-pricing-card', desc: 'Product pricing card with popular highlight border, price display & features list', tag: 'E-Commerce' },
    { class: '.theme-card', desc: 'Main surface card box with adaptive background, border & corner radius', tag: 'Surfaces' },
    { class: '.theme-feature-card', desc: 'Feature highlight box with icon container, title & hover animation', tag: 'Marketing' },
    { class: '.theme-testimonial-card', desc: 'Customer review card with left color accent border & quote block', tag: 'Marketing' },
    { class: '.theme-btn', desc: 'Primary action button with hover glow, transition & shadow states', tag: 'Actions' },
    { class: '.theme-btn-secondary', desc: 'Secondary action button styled in theme secondary accent', tag: 'Actions' },
    { class: '.theme-btn-outline', desc: 'Transparent outline button with themed border line', tag: 'Actions' },
    { class: '.theme-input', desc: 'Form text input field with theme focus glow ring & adaptive border', tag: 'Forms' },
    { class: '.theme-select', desc: 'Native custom select dropdown box for active design system', tag: 'Forms' },
    { class: '.theme-switch', desc: 'Interactive toggle switch control with animated slider indicator', tag: 'Forms' },
    { class: '.theme-dropzone', desc: 'File drag-and-drop area with dashed themed borders & upload icon', tag: 'Forms' },
    { class: '.theme-badge', desc: 'Pill badge tag for categories, status indicators & notification badges', tag: 'Data' },
    { class: '.theme-avatar', desc: 'User profile avatar circle with sm/lg sizes & stacked avatar groups', tag: 'Data' },
    { class: '.theme-stat', desc: 'Analytics stat card widget container with metric label & large value display', tag: 'Data' },
    { class: '.theme-alert', desc: 'Notification alert banner with success, warning, and error border styling', tag: 'Feedback' },
    { class: '.theme-toast', desc: 'Floating notification toast popup with shadow & dismiss icon', tag: 'Feedback' },
    { class: '.theme-modal-content', desc: 'Dialog modal window card with header title, body text & action buttons', tag: 'Overlays' },
    { class: '.theme-dropdown-menu', desc: 'Floating dropdown menu with hover option items & dividers', tag: 'Overlays' },
    { class: '.theme-table', desc: 'Data table with themed header border, zebra rows & hover highlights', tag: 'Data' },
    { class: '.theme-accordion', desc: 'Collapsible accordion component with expandable body text', tag: 'Navigation' },
    { class: '.theme-breadcrumb', desc: 'Breadcrumb trail navigation with separators & links', tag: 'Navigation' },
    { class: '.theme-pagination', desc: 'Pagination button controls with active page indicator', tag: 'Navigation' },
    { class: '.theme-stepper', desc: 'Multi-step process indicator with active & completed step icons', tag: 'Navigation' },
    { class: '.theme-timeline', desc: 'Vertical event timeline list with themed status indicator dots', tag: 'Data' },
    { class: '.theme-progress', desc: 'Progress bar container with theme primary colored fill indicator', tag: 'Feedback' },
    { class: '.theme-spinner', desc: 'Loading spinner indicator circle with smooth infinite spin animation', tag: 'Feedback' },
    { class: '.theme-banner', desc: 'Top announcements banner bar with left color stripe & close action', tag: 'Marketing' },
  ];

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

      {/* Extended Available Semantic Components Section */}
      <section id="components">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 text-indigo-700 px-3.5 py-1 rounded-full text-xs font-bold mb-3">
            <Layers className="w-3.5 h-3.5 text-indigo-600" />
            <span>30+ Ready-to-Use Website Component Classes</span>
          </div>
          <h2 className={`text-3xl font-black tracking-tight mb-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>
            Available Semantic Components
          </h2>
          <p className={`text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
            Every theme automatically styles these 30+ universal website CSS component classes out of the box.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {componentList.map((comp) => (
            <div
              key={comp.class}
              className={`border rounded-xl p-4 transition-all hover:-translate-y-0.5 ${
                isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#131b2e] border-white/10'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <code className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded-md inline-block">
                  {comp.class}
                </code>
                <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-full uppercase">
                  {comp.tag}
                </span>
              </div>
              <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {comp.desc}
              </p>
            </div>
          ))}
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
    </div>
  );
}
