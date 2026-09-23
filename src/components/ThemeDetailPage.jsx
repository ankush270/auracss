import React, { useState } from 'react';
import { ArrowLeft, Globe, Code2, Sliders, Layout, Heart, Copy, Download, Sparkles, Check, ChevronRight } from 'lucide-react';

export default function ThemeDetailPage({ theme, onBack, onApplyGlobal, showToast, appMode, isFavorite, onToggleFavorite }) {
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
    <div className={`min-h-screen transition-colors duration-300 ${
      isLight ? 'bg-slate-50 text-slate-900' : 'bg-[#0b0f19] text-white'
    }`}>
      {/* Detail Page Sticky Header */}
      <header className={`sticky top-0 z-40 backdrop-blur-md border-b px-6 py-4 transition-colors ${
        isLight ? 'bg-white/90 border-slate-200' : 'bg-[#0b0f19]/90 border-white/10'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className={`flex items-center gap-2 text-sm font-extrabold px-4 py-2 rounded-xl border transition-all cursor-pointer ${
              isLight
                ? 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800'
                : 'bg-white/5 hover:bg-white/10 border-white/10 text-white'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Theme Vault</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onToggleFavorite}
              className={`flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl border transition-all cursor-pointer ${
                isFavorite
                  ? 'bg-rose-500/10 border-rose-500/30 text-rose-500'
                  : isLight
                  ? 'bg-slate-100 border-slate-200 text-slate-700 hover:text-rose-500'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:text-rose-400'
              }`}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-500 text-rose-500' : ''}`} />
              <span className="hidden sm:inline">{isFavorite ? 'Saved to Favorites' : 'Save Favorite'}</span>
            </button>

            <button
              onClick={() => onApplyGlobal(theme.id)}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-4 py-2 rounded-xl shadow-lg shadow-indigo-600/30 transition-all text-xs cursor-pointer"
            >
              <Globe className="w-4 h-4" />
              <span>Apply Global</span>
            </button>
          </div>
        </div>
      </header>

      {/* Detail Page Hero Banner */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-8">
        <div className={`border rounded-2xl p-6 md:p-8 ${
          isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#131b2e] border-white/10'
        }`}>
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="text-xs font-black uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-200 px-3.5 py-1 rounded-full">
              {theme.category} SYSTEM
            </span>
            <span className={`text-xs font-mono px-3 py-1 rounded-full border ${
              isLight ? 'bg-slate-100 border-slate-200 text-slate-600' : 'bg-white/5 border-white/10 text-slate-400'
            }`}>
              data-theme="{theme.id}"
            </span>
          </div>

          <h1 className={`text-4xl md:text-5xl font-black tracking-tight mb-3 ${isLight ? 'text-slate-900' : 'text-white'}`}>
            {theme.name} Design System
          </h1>
          <p className={`text-base md:text-lg max-w-3xl leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            {theme.desc} Full standalone visual system with zero JS runtime dependencies.
          </p>
        </div>

        {/* Studio Workspace: 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Full Landing Page Studio & Live Playground (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className={`border rounded-2xl p-6 ${
              isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#131b2e] border-white/10'
            }`}>
              {/* Studio Header & Tabs */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4 mb-6 border-current/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-indigo-600" />
                  <h3 className={`text-lg font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    Live Interactive Studio
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveTab('card')}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeTab === 'card'
                        ? 'bg-indigo-600 text-white shadow'
                        : isLight ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Layout className="w-3.5 h-3.5" />
                    Full Landing Page
                  </button>
                  <button
                    onClick={() => setActiveTab('buttons')}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
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
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeTab === 'stats'
                        ? 'bg-indigo-600 text-white shadow'
                        : isLight ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Sliders className="w-3.5 h-3.5" />
                    Stats & Widgets
                  </button>
                </div>
              </div>

              {/* Full Live Sandbox */}
              <div
                data-theme={theme.id}
                style={customStyleObj}
                className="p-6 rounded-2xl border border-slate-200/50 shadow-md transition-all min-h-[350px]"
              >
                {activeTab === 'card' && (
                  <div className="theme-card space-y-6 p-6 md:p-8 text-left">
                    {/* Full Top Navbar */}
                    <div className="flex items-center justify-between border-b pb-4 border-current/10">
                      <div className="flex items-center gap-2.5 font-black text-base tracking-tight">
                        <span className="w-3.5 h-3.5 rounded-full inline-block" style={{ backgroundColor: theme.primary }} />
                        <span>AuraPlatform</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="theme-badge text-xs">{theme.category} SYSTEM</span>
                        <button className="theme-btn text-xs py-1.5 px-4">Launch App</button>
                      </div>
                    </div>

                    {/* Hero Headline & Subtitle */}
                    <div className="py-4 space-y-3">
                      <span className="text-xs font-mono opacity-60 block uppercase tracking-wider">
                        data-theme="{theme.id}"
                      </span>
                      <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight">
                        Build World-Class Web Applications with {theme.name}
                      </h2>
                      <p className="text-sm md:text-base opacity-85 leading-relaxed max-w-2xl">
                        Zero-config theme switching system with instant CSS variables, typography tokens, and responsive UI components.
                      </p>
                    </div>

                    {/* Search & Newsletter Form */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <input className="theme-input text-sm py-2.5 px-4 flex-1" placeholder="Enter work email for instant access..." />
                      <button className="theme-btn text-sm py-2.5 px-5 whitespace-nowrap">Get Started Free</button>
                      <button className="theme-btn theme-btn-secondary text-sm py-2.5 px-4">Docs</button>
                    </div>

                    {/* Mini Stats Bar */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                      <div className="p-3.5 rounded-xl border border-current/10 bg-current/5">
                        <div className="text-xs opacity-60 uppercase font-mono">Total Deployments</div>
                        <div className="text-xl font-black mt-1">142,900+</div>
                      </div>
                      <div className="p-3.5 rounded-xl border border-current/10 bg-current/5">
                        <div className="text-xs opacity-60 uppercase font-mono">Uptime SLA</div>
                        <div className="text-xl font-black mt-1">99.99%</div>
                      </div>
                      <div className="p-3.5 rounded-xl border border-current/10 bg-current/5">
                        <div className="text-xs opacity-60 uppercase font-mono">Satisfaction</div>
                        <div className="text-xl font-black mt-1">4.95 / 5.00 ⭐</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'buttons' && (
                  <div className="space-y-6 p-4">
                    <h4 className="text-lg font-bold opacity-90">Button Variants & Inputs</h4>
                    <div className="flex flex-wrap gap-4">
                      <button className="theme-btn">Primary Action Button</button>
                      <button className="theme-btn theme-btn-secondary">Secondary Action</button>
                      <button className="theme-badge">Status Badge</button>
                    </div>
                    <div className="space-y-3 max-w-md">
                      <label className="text-xs opacity-70 font-semibold block">Form Text Input</label>
                      <input className="theme-input text-sm" placeholder="Enter your email address..." />
                    </div>
                  </div>
                )}

                {activeTab === 'stats' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                    <div className="theme-card p-5">
                      <div className="text-xs opacity-70 mb-1 font-semibold">Total Revenue</div>
                      <div className="text-3xl font-black">$148,290.00</div>
                      <span className="theme-badge text-xs mt-3 inline-block">+24.2% growth</span>
                    </div>
                    <div className="theme-card p-5">
                      <div className="text-xs opacity-70 mb-1 font-semibold">Active Customers</div>
                      <div className="text-3xl font-black">18,450</div>
                      <span className="theme-badge text-xs mt-3 inline-block">+12.4% new users</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Live Color & Token Customizer Controls */}
              <div className={`mt-6 border rounded-xl p-5 ${
                isLight ? 'bg-slate-50 border-slate-200' : 'bg-black/30 border-white/10'
              }`}>
                <div className="flex items-center gap-2 mb-4">
                  <Sliders className="w-4 h-4 text-indigo-600" />
                  <h4 className={`text-xs font-extrabold uppercase tracking-wider ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                    Live Token Customizer & Overrides
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className={`text-xs font-semibold block mb-1.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>Primary Color</label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={currentPrimary}
                        onChange={(e) => setCustomPrimary(e.target.value)}
                        className="w-9 h-9 rounded cursor-pointer border-0 bg-transparent"
                      />
                      <span className="text-xs font-mono font-bold">{currentPrimary}</span>
                    </div>
                  </div>

                  <div>
                    <label className={`text-xs font-semibold block mb-1.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>Secondary Color</label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={currentSecondary}
                        onChange={(e) => setCustomSecondary(e.target.value)}
                        className="w-9 h-9 rounded cursor-pointer border-0 bg-transparent"
                      />
                      <span className="text-xs font-mono font-bold">{currentSecondary}</span>
                    </div>
                  </div>

                  <div>
                    <label className={`text-xs font-semibold block mb-1.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>Corner Radius</label>
                    <input
                      type="range"
                      min="0"
                      max="24"
                      value={customRadius || 8}
                      onChange={(e) => setCustomRadius(e.target.value)}
                      className="w-full accent-indigo-600 cursor-pointer mt-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Tokens & Integration Snippets (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className={`border rounded-2xl p-6 ${
              isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#131b2e] border-white/10'
            }`}>
              <h3 className={`text-lg font-bold mb-4 ${isLight ? 'text-slate-900' : 'text-white'}`}>Design Tokens</h3>
              <div className="space-y-3 mb-6">
                <div className={`flex justify-between items-center text-xs px-3.5 py-2.5 rounded-xl ${
                  isLight ? 'bg-slate-50 border border-slate-200' : 'bg-white/5'
                }`}>
                  <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>Primary Color</span>
                  <code className={`font-mono font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{currentPrimary}</code>
                </div>
                <div className={`flex justify-between items-center text-xs px-3.5 py-2.5 rounded-xl ${
                  isLight ? 'bg-slate-50 border border-slate-200' : 'bg-white/5'
                }`}>
                  <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>Secondary Color</span>
                  <code className={`font-mono font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{currentSecondary}</code>
                </div>
                <div className={`flex justify-between items-center text-xs px-3.5 py-2.5 rounded-xl ${
                  isLight ? 'bg-slate-50 border border-slate-200' : 'bg-white/5'
                }`}>
                  <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>Surface Canvas</span>
                  <code className={`font-mono font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{theme.surface}</code>
                </div>
                <div className={`flex justify-between items-center text-xs px-3.5 py-2.5 rounded-xl ${
                  isLight ? 'bg-slate-50 border border-slate-200' : 'bg-white/5'
                }`}>
                  <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>Primary Font</span>
                  <code className={`font-mono font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{theme.font}</code>
                </div>
              </div>

              {/* Code Snippets Selector */}
              <div className="border-t pt-4 border-current/10">
                <div className="flex items-center justify-between mb-3">
                  <h4 className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>Integration Code</h4>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => copyToClipboard(getSnippetContent(), snippetFormat)}
                      className="flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-800 font-bold cursor-pointer"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copiedType === snippetFormat ? 'Copied!' : 'Copy'}</span>
                    </button>
                    <button
                      onClick={downloadCssFile}
                      className="flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-800 font-bold cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>

                <div className="flex gap-1 bg-slate-200/50 p-1 rounded-lg mb-3">
                  {['react', 'html', 'tailwind', 'css'].map((fmt) => (
                    <button
                      key={fmt}
                      onClick={() => setSnippetFormat(fmt)}
                      className={`flex-1 py-1.5 text-[11px] font-bold rounded-md uppercase transition-all cursor-pointer ${
                        snippetFormat === fmt
                          ? 'bg-indigo-600 text-white shadow'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {fmt}
                    </button>
                  ))}
                </div>

                <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-4 text-xs font-mono text-indigo-300 overflow-x-auto max-h-60">
                  <pre>{getSnippetContent()}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
