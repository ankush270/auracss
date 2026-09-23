import React, { useState } from 'react';
import { ArrowLeft, Globe, Code2, Sliders, Layout, Heart, Copy, Download, Sparkles, Check, Type, Layers, Eye } from 'lucide-react';

export default function ThemeDetailPage({ theme, onBack, onApplyGlobal, showToast, appMode, isFavorite, onToggleFavorite }) {
  const [activeTab, setActiveTab] = useState('card');
  const [snippetFormat, setSnippetFormat] = useState('react');
  const [copiedType, setCopiedType] = useState(null);
  const [fontSampleText, setFontSampleText] = useState('The quick brown fox jumps over the lazy dog.');

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
    <div className={`min-h-screen transition-colors duration-300 pb-20 ${
      isLight ? 'bg-slate-100 text-slate-900' : 'bg-[#0b0f19] text-white'
    }`}>
      {/* Studio Top Navigation Bar */}
      <header className={`sticky top-0 z-50 backdrop-blur-md border-b px-6 py-3.5 transition-colors shadow-sm ${
        isLight ? 'bg-white/95 border-slate-200' : 'bg-[#0b0f19]/95 border-white/10'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className={`flex items-center gap-2 text-xs font-bold px-3.5 py-2 rounded-xl border transition-all cursor-pointer ${
                isLight
                  ? 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800'
                  : 'bg-white/5 hover:bg-white/10 border-white/10 text-white'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Theme Vault</span>
            </button>

            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-500">
              <span>Vault</span>
              <span>/</span>
              <span className={`font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{theme.name} Studio</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onToggleFavorite}
              className={`flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-xl border transition-all cursor-pointer ${
                isFavorite
                  ? 'bg-rose-500/10 border-rose-500/30 text-rose-500'
                  : isLight
                  ? 'bg-slate-100 border-slate-200 text-slate-700 hover:text-rose-500'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:text-rose-400'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-rose-500 text-rose-500' : ''}`} />
              <span className="hidden sm:inline">{isFavorite ? 'Saved Favorite' : 'Save Favorite'}</span>
            </button>

            <button
              onClick={() => onApplyGlobal(theme.id)}
              className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-4 py-2 rounded-xl shadow-lg shadow-indigo-600/20 transition-all text-xs cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Apply Global Theme</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Studio Container */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-6 space-y-6">
        {/* Top Hero Banner Header */}
        <div className={`border rounded-2xl p-6 md:p-8 ${
          isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#131b2e] border-white/10'
        }`}>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="text-xs font-black uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">
                  {theme.category} SYSTEM
                </span>
                <span className={`text-xs font-mono px-3 py-1 rounded-full border ${
                  isLight ? 'bg-slate-100 border-slate-200 text-slate-600' : 'bg-white/5 border-white/10 text-slate-400'
                }`}>
                  data-theme="{theme.id}"
                </span>
              </div>

              <h1 className={`text-3xl md:text-5xl font-black tracking-tight mb-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>
                {theme.name} Design System
              </h1>
              <p className={`text-sm md:text-base max-w-3xl leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                {theme.desc} Comprehensive design tokens, CSS variables, typography specs, and live interactive UI components.
              </p>
            </div>

            {/* Quick Color Swatches Badge */}
            <div className={`p-4 rounded-xl border flex items-center gap-4 ${
              isLight ? 'bg-slate-50 border-slate-200' : 'bg-black/30 border-white/10'
            }`}>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full inline-block shadow-md" style={{ backgroundColor: currentPrimary }} title={`Primary: ${currentPrimary}`} />
                <span className="w-5 h-5 rounded-full inline-block shadow-md" style={{ backgroundColor: currentSecondary }} title={`Secondary: ${currentSecondary}`} />
                <span className="w-5 h-5 rounded-full inline-block border border-slate-300" style={{ backgroundColor: theme.surface }} title={`Surface: ${theme.surface}`} />
              </div>
              <div className="text-xs font-mono border-l pl-3 border-slate-300 text-slate-500">
                Font: {theme.font.split('/')[0]}
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Studio Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Live Interactive Workbench & Playground (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className={`border rounded-2xl p-6 ${
              isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#131b2e] border-white/10'
            }`}>
              {/* Studio Tabs Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-4 mb-6 border-current/10">
                <div className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-indigo-600" />
                  <h3 className={`text-base font-extrabold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                    Live Component Workbench
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => setActiveTab('card')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
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
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
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
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
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

              {/* Live Sandbox Canvas */}
              <div
                data-theme={theme.id}
                style={customStyleObj}
                className="p-4 sm:p-6 rounded-2xl border border-slate-200/60 shadow-md transition-all min-h-[360px]"
              >
                {activeTab === 'card' && (
                  <div className="theme-card space-y-5 p-5 md:p-7 text-left">
                    {/* Full Top Navbar */}
                    <div className="flex items-center justify-between border-b pb-3 border-current/10">
                      <div className="flex items-center gap-2 font-black text-sm tracking-tight">
                        <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: theme.primary }} />
                        <span>AuraPlatform</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="theme-badge text-[10px]">{theme.category} SYSTEM</span>
                        <button className="theme-btn text-xs py-1.5 px-3.5">Launch App</button>
                      </div>
                    </div>

                    {/* Hero Headline & Subtitle */}
                    <div className="py-2 space-y-2">
                      <span className="text-xs font-mono opacity-60 block uppercase tracking-wider">
                        data-theme="{theme.id}"
                      </span>
                      <h2 className="text-2xl md:text-3xl font-black leading-tight tracking-tight">
                        Build World-Class Web Applications with {theme.name}
                      </h2>
                      <p className="text-xs md:text-sm opacity-80 leading-relaxed max-w-xl">
                        Zero-config theme switching system with instant CSS variables, typography tokens, and responsive UI components.
                      </p>
                    </div>

                    {/* Search & Newsletter Form */}
                    <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                      <input className="theme-input text-xs py-2 px-3 flex-1" placeholder="Enter work email for instant access..." />
                      <button className="theme-btn text-xs py-2 px-4 whitespace-nowrap">Get Started Free</button>
                      <button className="theme-btn theme-btn-secondary text-xs py-2 px-3">Docs</button>
                    </div>

                    {/* Mini Stats Bar */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                      <div className="p-3 rounded-xl border border-current/10 bg-current/5">
                        <div className="text-[10px] opacity-60 uppercase font-mono">Total Deployments</div>
                        <div className="text-lg font-black mt-0.5">142,900+</div>
                      </div>
                      <div className="p-3 rounded-xl border border-current/10 bg-current/5">
                        <div className="text-[10px] opacity-60 uppercase font-mono">Uptime SLA</div>
                        <div className="text-lg font-black mt-0.5">99.99%</div>
                      </div>
                      <div className="p-3 rounded-xl border border-current/10 bg-current/5">
                        <div className="text-[10px] opacity-60 uppercase font-mono">Satisfaction</div>
                        <div className="text-lg font-black mt-0.5">4.95 / 5.00 ⭐</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'buttons' && (
                  <div className="space-y-6 p-4">
                    <h4 className="text-base font-bold opacity-90">Button Variants & Form Inputs</h4>
                    <div className="flex flex-wrap gap-3">
                      <button className="theme-btn">Primary Action Button</button>
                      <button className="theme-btn theme-btn-secondary">Secondary Action</button>
                      <button className="theme-badge">Status Badge</button>
                    </div>
                    <div className="space-y-3 max-w-md">
                      <label className="text-xs opacity-70 font-semibold block">Form Text Input Field</label>
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

              {/* Live Token Customizer Controls */}
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

          {/* Right Column: Tokens, Code Snippets & Utility Ref (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Tokens Spec Card */}
            <div className={`border rounded-2xl p-6 ${
              isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#131b2e] border-white/10'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-base font-extrabold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                  Design Tokens Spec
                </h3>
                <span className="text-xs font-mono opacity-60">CSS Variables</span>
              </div>

              <div className="space-y-2.5 mb-6">
                <div className={`flex justify-between items-center text-xs px-3.5 py-2.5 rounded-xl ${
                  isLight ? 'bg-slate-50 border border-slate-200' : 'bg-white/5'
                }`}>
                  <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>Primary Color</span>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: currentPrimary }} />
                    <code className={`font-mono font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{currentPrimary}</code>
                  </div>
                </div>

                <div className={`flex justify-between items-center text-xs px-3.5 py-2.5 rounded-xl ${
                  isLight ? 'bg-slate-50 border border-slate-200' : 'bg-white/5'
                }`}>
                  <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>Secondary Color</span>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: currentSecondary }} />
                    <code className={`font-mono font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{currentSecondary}</code>
                  </div>
                </div>

                <div className={`flex justify-between items-center text-xs px-3.5 py-2.5 rounded-xl ${
                  isLight ? 'bg-slate-50 border border-slate-200' : 'bg-white/5'
                }`}>
                  <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>Surface Canvas</span>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full border border-slate-300" style={{ backgroundColor: theme.surface }} />
                    <code className={`font-mono font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{theme.surface}</code>
                  </div>
                </div>

                <div className={`flex justify-between items-center text-xs px-3.5 py-2.5 rounded-xl ${
                  isLight ? 'bg-slate-50 border border-slate-200' : 'bg-white/5'
                }`}>
                  <span className={isLight ? 'text-slate-600' : 'text-slate-400'}>Typography Font</span>
                  <code className={`font-mono font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>{theme.font}</code>
                </div>
              </div>

              {/* Code Snippets Section */}
              <div className="border-t pt-4 border-current/10">
                <div className="flex items-center justify-between mb-3">
                  <h4 className={`text-xs font-bold uppercase tracking-wider ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>Integration Snippets</h4>
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

                <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-4 text-xs font-mono text-indigo-300 overflow-x-auto max-h-56">
                  <pre>{getSnippetContent()}</pre>
                </div>
              </div>
            </div>

            {/* Font Specimen Interactive Tester */}
            <div className={`border rounded-2xl p-6 ${
              isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#131b2e] border-white/10'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Type className="w-4 h-4 text-indigo-600" />
                  <h4 className={`text-sm font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>Font Specimen Tester</h4>
                </div>
                <span className="text-xs font-mono text-slate-500">{theme.font.split('/')[0]}</span>
              </div>

              <input
                type="text"
                value={fontSampleText}
                onChange={(e) => setFontSampleText(e.target.value)}
                placeholder="Type sample text..."
                className={`w-full border px-3 py-2 rounded-xl text-xs mb-3 focus:outline-none ${
                  isLight ? 'bg-slate-50 border-slate-200 text-slate-900' : 'bg-black/30 border-white/10 text-white'
                }`}
              />

              <div data-theme={theme.id} className="p-3 rounded-xl border border-slate-200/50 bg-current/5">
                <p className="text-lg font-bold leading-snug tracking-tight">
                  {fontSampleText || 'The quick brown fox jumps over the lazy dog.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
