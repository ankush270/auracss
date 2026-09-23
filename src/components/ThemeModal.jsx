import React, { useState } from 'react';
import { X, Globe, Code2, Sliders, Layout, Heart, Copy, Download } from 'lucide-react';

export default function ThemeModal({ theme, onClose, onApplyGlobal, showToast, appMode, isFavorite, onToggleFavorite }) {
  const [activeTab, setActiveTab] = useState('card');
  const [snippetFormat, setSnippetFormat] = useState('react');
  const [copiedType, setCopiedType] = useState(null);

  // Live Customizer States
  const [customPrimary, setCustomPrimary] = useState('');
  const [customSecondary, setCustomSecondary] = useState('');
  const [customRadius, setCustomRadius] = useState('');

  const isLight = appMode === 'light';

  if (!theme) return null;

  const currentPrimary = customPrimary || theme.primary;
  const currentSecondary = customSecondary || theme.secondary;

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

  const tailwindSnippet = `// tailwind.config.js extension for ${theme.name}
module.exports = {
  theme: {
    extend: {
      colors: {
        themePrimary: '${currentPrimary}',
        themeSecondary: '${currentSecondary}',
      }
    }
  }
};`;

  const cssSnippet = `/* Custom Overrides for ${theme.name} */
[data-theme="${theme.id}"] {
  --color-primary: ${currentPrimary};
  --color-secondary: ${currentSecondary};
  ${customRadius ? `--radius: ${customRadius}px;` : ''}
}`;

  const getSnippetContent = () => {
    switch (snippetFormat) {
      case 'react':
        return reactSnippet;
      case 'html':
        return htmlSnippet;
      case 'tailwind':
        return tailwindSnippet;
      case 'css':
        return cssSnippet;
      default:
        return reactSnippet;
    }
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    showToast(`Copied ${type.toUpperCase()} snippet!`);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const downloadCssFile = () => {
    const element = document.createElement("a");
    const file = new Blob([cssSnippet], {type: 'text/css'});
    element.href = URL.createObjectURL(file);
    element.download = `${theme.id}-custom.css`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    showToast(`Downloaded ${theme.id}-custom.css!`);
  };

  const customStyleObj = {
    ...(customPrimary && { '--color-primary': customPrimary }),
    ...(customSecondary && { '--color-secondary': customSecondary }),
    ...(customRadius && { '--radius': `${customRadius}px` }),
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-md animate-fade-in">
      <div className={`border rounded-2xl w-full max-w-5xl max-h-[92vh] overflow-y-auto relative shadow-2xl p-6 md:p-8 ${
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
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-black uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">
                {theme.category} System
              </span>
              <button
                onClick={onToggleFavorite}
                className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border transition-all cursor-pointer ${
                  isFavorite
                    ? 'bg-rose-500/10 border-rose-500/30 text-rose-500'
                    : isLight
                    ? 'bg-slate-100 border-slate-200 text-slate-600 hover:text-rose-500'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-rose-400'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-rose-500 text-rose-500' : ''}`} />
                <span>{isFavorite ? 'Saved to Favorites' : 'Save Favorite'}</span>
              </button>
            </div>
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

        {/* Modal Grid: Live Interactive Sandbox & Customizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Component Playground & Live Sandbox (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Sandbox Tabs */}
            <div className={`flex flex-wrap gap-2 border-b pb-3 ${isLight ? 'border-slate-200' : 'border-white/10'}`}>
              <button
                onClick={() => setActiveTab('card')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'card'
                    ? 'bg-indigo-600 text-white shadow'
                    : isLight ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                <Layout className="w-3.5 h-3.5" />
                Cards & Badges
              </button>
              <button
                onClick={() => setActiveTab('buttons')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'buttons'
                    ? 'bg-indigo-600 text-white shadow'
                    : isLight ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                Buttons & Inputs
              </button>
              <button
                onClick={() => setActiveTab('stats')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'stats'
                    ? 'bg-indigo-600 text-white shadow'
                    : isLight ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                Stats & Metrics
              </button>
            </div>

            {/* Sandbox Container */}
            <div className={`border rounded-xl p-5 ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0b0f19]/60 border-white/10'
            }`}>
              <div
                data-theme={theme.id}
                style={customStyleObj}
                className="p-4 rounded-xl border border-slate-200/50 shadow-sm transition-all"
              >
                {activeTab === 'card' && (
                  <div className="theme-card space-y-4 p-5 text-left">
                    {/* Full Top Navbar */}
                    <div className="flex items-center justify-between border-b pb-3 border-current/10">
                      <div className="flex items-center gap-2 font-black text-sm tracking-tight">
                        <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: theme.primary }} />
                        <span>AuraPlatform</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="theme-badge text-[10px]">{theme.category}</span>
                        <button className="theme-btn text-xs py-1 px-3">Launch App</button>
                      </div>
                    </div>

                    {/* Hero Headline & Subtitle */}
                    <div className="py-2">
                      <span className="text-xs font-mono opacity-60 block uppercase tracking-wider mb-1">
                        data-theme="{theme.id}"
                      </span>
                      <h3 className="text-2xl font-black leading-tight tracking-tight mb-2">
                        Build World-Class Web Applications with {theme.name}
                      </h3>
                      <p className="text-xs opacity-80 leading-relaxed max-w-lg">
                        Zero-config theme switching system with instant CSS variables, typography tokens, and responsive UI components.
                      </p>
                    </div>

                    {/* Search & Newsletter Form */}
                    <div className="flex flex-col sm:flex-row gap-2 pt-1">
                      <input className="theme-input text-xs py-2 px-3 flex-1" placeholder="Enter work email for instant access..." />
                      <button className="theme-btn text-xs py-2 px-4 whitespace-nowrap">Get Started Free</button>
                      <button className="theme-btn theme-btn-secondary text-xs py-2 px-3">Docs</button>
                    </div>

                    {/* Mini Stats Bar */}
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      <div className="p-2.5 rounded border border-current/10 bg-current/5">
                        <div className="text-[10px] opacity-60 uppercase font-mono">Total Deployments</div>
                        <div className="text-base font-black mt-0.5">142,900+</div>
                      </div>
                      <div className="p-2.5 rounded border border-current/10 bg-current/5">
                        <div className="text-[10px] opacity-60 uppercase font-mono">Uptime</div>
                        <div className="text-base font-black mt-0.5">99.99%</div>
                      </div>
                      <div className="p-2.5 rounded border border-current/10 bg-current/5">
                        <div className="text-[10px] opacity-60 uppercase font-mono">Satisfaction</div>
                        <div className="text-base font-black mt-0.5">4.95 / 5 ⭐</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'buttons' && (
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold opacity-90">Button Variants & Inputs</h4>
                    <div className="flex flex-wrap gap-3">
                      <button className="theme-btn">Primary Action</button>
                      <button className="theme-btn theme-btn-secondary">Secondary Action</button>
                      <button className="theme-badge">Status Badge</button>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs opacity-70 font-semibold block">Form Input</label>
                      <input className="theme-input text-sm" placeholder="Enter your email address..." />
                    </div>
                  </div>
                )}

                {activeTab === 'stats' && (
                  <div className="grid grid-cols-2 gap-3">
                    <div className="theme-card p-3">
                      <div className="text-xs opacity-70 mb-1 font-semibold">Total Revenue</div>
                      <div className="text-2xl font-black">$48,290</div>
                      <span className="theme-badge text-[10px] mt-2 inline-block">+14.2% this month</span>
                    </div>
                    <div className="theme-card p-3">
                      <div className="text-xs opacity-70 mb-1 font-semibold">Active Users</div>
                      <div className="text-2xl font-black">12,450</div>
                      <span className="theme-badge text-[10px] mt-2 inline-block">+8.4% growth</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Live Color & Spec Customizer Controls */}
            <div className={`border rounded-xl p-4 ${
              isLight ? 'bg-slate-100 border-slate-200' : 'bg-black/30 border-white/10'
            }`}>
              <div className="flex items-center gap-2 mb-3">
                <Sliders className="w-4 h-4 text-indigo-600" />
                <h4 className={`text-xs font-extrabold uppercase tracking-wider ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                  Live Token Customizer
                </h4>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className={`text-[11px] font-semibold block mb-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>Primary</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={currentPrimary}
                      onChange={(e) => setCustomPrimary(e.target.value)}
                      className="w-7 h-7 rounded cursor-pointer border-0 bg-transparent"
                    />
                    <span className="text-xs font-mono">{currentPrimary}</span>
                  </div>
                </div>

                <div>
                  <label className={`text-[11px] font-semibold block mb-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>Secondary</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={currentSecondary}
                      onChange={(e) => setCustomSecondary(e.target.value)}
                      className="w-7 h-7 rounded cursor-pointer border-0 bg-transparent"
                    />
                    <span className="text-xs font-mono">{currentSecondary}</span>
                  </div>
                </div>

                <div>
                  <label className={`text-[11px] font-semibold block mb-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>Corner Radius</label>
                  <input
                    type="range"
                    min="0"
                    max="24"
                    value={customRadius || 8}
                    onChange={(e) => setCustomRadius(e.target.value)}
                    className="w-full accent-indigo-600 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Code Snippets & Exporters (5 Cols) */}
          <div className={`lg:col-span-5 border rounded-xl p-5 flex flex-col justify-between ${
            isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0b0f19]/60 border-white/10'
          }`}>
            <div>
              <h4 className={`text-sm font-bold mb-4 ${isLight ? 'text-slate-900' : 'text-white'}`}>Design Tokens</h4>
              <div className="space-y-2 mb-6">
                <div className={`flex justify-between items-center text-xs px-3 py-2 rounded-lg ${
                  isLight ? 'bg-white border border-slate-200' : 'bg-white/5'
                }`}>
                  <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>Primary Color</span>
                  <code className={`font-mono font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{currentPrimary}</code>
                </div>
                <div className={`flex justify-between items-center text-xs px-3 py-2 rounded-lg ${
                  isLight ? 'bg-white border border-slate-200' : 'bg-white/5'
                }`}>
                  <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>Secondary Color</span>
                  <code className={`font-mono font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{currentSecondary}</code>
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

            {/* Snippet Format Selector */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <div className="flex gap-1 bg-slate-200/50 p-1 rounded-lg">
                  {['react', 'html', 'tailwind', 'css'].map((fmt) => (
                    <button
                      key={fmt}
                      onClick={() => setSnippetFormat(fmt)}
                      className={`px-2.5 py-1 text-[11px] font-bold rounded-md uppercase transition-all cursor-pointer ${
                        snippetFormat === fmt
                          ? 'bg-indigo-600 text-white shadow'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {fmt}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyToClipboard(getSnippetContent(), snippetFormat)}
                    className="flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-800 font-semibold cursor-pointer"
                  >
                    <Copy className="w-3 h-3" />
                    <span>{copiedType === snippetFormat ? 'Copied!' : 'Copy'}</span>
                  </button>
                  <button
                    onClick={downloadCssFile}
                    className="flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-800 font-semibold cursor-pointer"
                    title="Download Theme CSS File"
                  >
                    <Download className="w-3 h-3" />
                    <span>Download</span>
                  </button>
                </div>
              </div>

              <div className="bg-[#0f172a] border border-slate-800 rounded-lg p-3 text-xs font-mono text-indigo-300 overflow-x-auto max-h-40">
                <pre>{getSnippetContent()}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
