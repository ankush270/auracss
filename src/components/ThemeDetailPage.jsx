import React, { useState } from 'react';
import { ArrowLeft, Globe, Code2, Sliders, Layout, Heart, Copy, Download, Sparkles, Check, Type, Layers, Eye, Menu, ChevronDown, CheckSquare, User, Bell, Search, Settings, HelpCircle, Package, Folder, Plus, X, UploadCloud, CreditCard, Shield, Zap } from 'lucide-react';

export default function ThemeDetailPage({ theme, onBack, onApplyGlobal, showToast, appMode, isFavorite, onToggleFavorite }) {
  const [activeTab, setActiveTab] = useState('card');
  const [snippetFormat, setSnippetFormat] = useState('react');
  const [copiedType, setCopiedType] = useState(null);
  const [fontSampleText, setFontSampleText] = useState('The quick brown fox jumps over the lazy dog.');
  
  // Interactive UI component state toggles inside playground
  const [switchActive, setSwitchActive] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState('Option 1: Pro Subscription');
  const [accordionOpen, setAccordionOpen] = useState(0);

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
    <!-- Sidebar Component -->
    <aside className="theme-sidebar">
      <div className="theme-sidebar-header">
        <strong>AuraApp</strong>
        <span className="theme-badge">Pro</span>
      </div>
      <nav className="theme-sidebar-menu">
        <a className="theme-sidebar-item theme-sidebar-item-active">Dashboard</a>
        <a className="theme-sidebar-item">Projects</a>
      </nav>
    </aside>

    <!-- Dropdown Menu Component -->
    <div className="theme-dropdown-menu">
      <div className="theme-dropdown-item">Account Settings</div>
      <div className="theme-dropdown-item">Billing & Plans</div>
      <div className="theme-dropdown-item">Log Out</div>
    </div>
  </body>
</html>`;

  const reactSnippet = `import '@ankush_crap/auracss';

export default function MyComponent() {
  return (
    <div data-theme="${theme.id}">
      {/* Sidebar Navigation */}
      <aside className="theme-sidebar">
        <div className="theme-sidebar-header">
          <span>${theme.name} App</span>
        </div>
        <a className="theme-sidebar-item theme-sidebar-item-active">Overview</a>
        <a className="theme-sidebar-item">Settings</a>
      </aside>

      {/* Dropdown Menu */}
      <div className="theme-dropdown-menu">
        <div className="theme-dropdown-item">Profile</div>
        <div className="theme-dropdown-item">Security</div>
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
                {theme.desc} Full suite of semantic UI components including Sidebars, Dropdowns, Menus, Footers, Pricing Tables, Forms, and Dialogs.
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
              {/* Studio Component Category Tabs */}
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
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeTab === 'card'
                        ? 'bg-indigo-600 text-white shadow'
                        : isLight ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    Landing Page
                  </button>
                  <button
                    onClick={() => setActiveTab('sidebar')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeTab === 'sidebar'
                        ? 'bg-indigo-600 text-white shadow'
                        : isLight ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    Sidebar Nav
                  </button>
                  <button
                    onClick={() => setActiveTab('dropdown')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeTab === 'dropdown'
                        ? 'bg-indigo-600 text-white shadow'
                        : isLight ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    Menus & Dropdowns
                  </button>
                  <button
                    onClick={() => setActiveTab('footer')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeTab === 'footer'
                        ? 'bg-indigo-600 text-white shadow'
                        : isLight ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    Footer Section
                  </button>
                  <button
                    onClick={() => setActiveTab('pricing')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeTab === 'pricing'
                        ? 'bg-indigo-600 text-white shadow'
                        : isLight ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    Pricing Cards
                  </button>
                  <button
                    onClick={() => setActiveTab('forms')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeTab === 'forms'
                        ? 'bg-indigo-600 text-white shadow'
                        : isLight ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    Inputs & Toggles
                  </button>
                </div>
              </div>

              {/* Live Sandbox Canvas */}
              <div
                data-theme={theme.id}
                style={customStyleObj}
                className="p-4 sm:p-6 rounded-2xl border border-slate-200/60 shadow-md transition-all min-h-[420px] overflow-hidden"
              >
                {/* 1. Full Landing Page Preview */}
                {activeTab === 'card' && (
                  <div className="theme-card space-y-5 p-5 md:p-7 text-left">
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

                    <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                      <input className="theme-input text-xs py-2 px-3 flex-1" placeholder="Enter work email for instant access..." />
                      <button className="theme-btn text-xs py-2 px-4 whitespace-nowrap">Get Started Free</button>
                      <button className="theme-btn theme-btn-secondary text-xs py-2 px-3">Docs</button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                      <div className="theme-stat">
                        <div className="theme-stat-lbl">Total Deployments</div>
                        <div className="theme-stat-val text-lg">142,900+</div>
                      </div>
                      <div className="theme-stat">
                        <div className="theme-stat-lbl">Uptime SLA</div>
                        <div className="theme-stat-val text-lg">99.99%</div>
                      </div>
                      <div className="theme-stat">
                        <div className="theme-stat-lbl">User Rating</div>
                        <div className="theme-stat-val text-lg">4.95 / 5.00 ⭐</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Sidebar Navigation Component Showcase */}
                {activeTab === 'sidebar' && (
                  <div className="flex flex-col md:flex-row gap-6 p-2">
                    <aside className="theme-sidebar shadow-lg">
                      <div className="theme-sidebar-header">
                        <div className="flex items-center gap-2">
                          <Package className="w-5 h-5 text-indigo-500" />
                          <span className="font-extrabold text-sm">{theme.name} Studio</span>
                        </div>
                        <span className="theme-pill">v2.4</span>
                      </div>

                      <div className="theme-sidebar-menu">
                        <a className="theme-sidebar-item theme-sidebar-item-active">
                          <div className="flex items-center gap-2.5">
                            <Layout className="w-4 h-4" />
                            <span>Dashboard</span>
                          </div>
                          <span className="theme-badge text-[10px]">NEW</span>
                        </a>

                        <a className="theme-sidebar-item">
                          <div className="flex items-center gap-2.5">
                            <Folder className="w-4 h-4" />
                            <span>Projects</span>
                          </div>
                          <span className="text-xs font-mono opacity-60">12</span>
                        </a>

                        <a className="theme-sidebar-item">
                          <div className="flex items-center gap-2.5">
                            <Bell className="w-4 h-4" />
                            <span>Notifications</span>
                          </div>
                          <span className="theme-pill text-[10px]">5</span>
                        </a>

                        <a className="theme-sidebar-item">
                          <div className="flex items-center gap-2.5">
                            <Settings className="w-4 h-4" />
                            <span>Settings</span>
                          </div>
                        </a>
                      </div>

                      <div className="theme-sidebar-footer">
                        <div className="theme-avatar">AK</div>
                        <div className="text-left overflow-hidden">
                          <div className="text-xs font-bold leading-tight truncate">Ankush Craps</div>
                          <div className="text-[10px] opacity-70 truncate">ankush@auracss.dev</div>
                        </div>
                      </div>
                    </aside>

                    {/* Sidebar Content Workspace */}
                    <div className="flex-1 theme-card p-5 space-y-4 text-left">
                      <div className="theme-breadcrumb">
                        <span className="theme-breadcrumb-item">Workspace</span>
                        <span>/</span>
                        <span className="theme-breadcrumb-item">Design Systems</span>
                        <span>/</span>
                        <span className="font-bold">{theme.name} Sidebar</span>
                      </div>

                      <h3 className="text-xl font-black">{theme.name} Dashboard</h3>
                      <p className="text-xs opacity-80 leading-relaxed">
                        The sidebar component adapts to your theme's primary color, border-radius, and text contrast rules automatically.
                      </p>

                      <div className="theme-alert theme-alert-success">
                        <CheckSquare className="w-4 h-4 text-emerald-600" />
                        <span>Sidebar navigation integrated smoothly with zero extra CSS.</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Menus, Dropdown List & Select Showcase */}
                {activeTab === 'dropdown' && (
                  <div className="space-y-6 p-2 text-left">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Dropdown Menu Container */}
                      <div className="theme-card p-5 space-y-3">
                        <div className="flex items-center justify-between">
                          <label className="text-xs font-extrabold uppercase tracking-wider opacity-70">
                            Dropdown Menu & Options
                          </label>
                          <span className="theme-badge text-[10px]">Interactive</span>
                        </div>

                        {/* Trigger Button */}
                        <button
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                          className="theme-btn theme-btn-outline w-full justify-between text-xs py-2 px-3"
                        >
                          <div className="flex items-center gap-2">
                            <User className="w-3.5 h-3.5" />
                            <span>{selectedOption}</span>
                          </div>
                          <ChevronDown className="w-3.5 h-3.5" />
                        </button>

                        {/* Options Dropdown List */}
                        {dropdownOpen && (
                          <div className="theme-dropdown-menu w-full mt-1">
                            <div
                              onClick={() => { setSelectedOption('Option 1: Pro Subscription'); showToast('Selected Pro Plan'); }}
                              className="theme-dropdown-item flex items-center justify-between"
                            >
                              <span>Option 1: Pro Subscription</span>
                              {selectedOption.includes('Pro') && <Check className="w-3.5 h-3.5 text-indigo-600" />}
                            </div>
                            <div
                              onClick={() => { setSelectedOption('Option 2: Enterprise Team'); showToast('Selected Enterprise'); }}
                              className="theme-dropdown-item flex items-center justify-between"
                            >
                              <span>Option 2: Enterprise Team</span>
                              {selectedOption.includes('Enterprise') && <Check className="w-3.5 h-3.5 text-indigo-600" />}
                            </div>
                            <div
                              onClick={() => { setSelectedOption('Option 3: Developer Free Tier'); showToast('Selected Free Tier'); }}
                              className="theme-dropdown-item flex items-center justify-between"
                            >
                              <span>Option 3: Developer Free Tier</span>
                              {selectedOption.includes('Developer') && <Check className="w-3.5 h-3.5 text-indigo-600" />}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Select Option Dropdown List */}
                      <div className="theme-card p-5 space-y-3">
                        <label className="text-xs font-extrabold uppercase tracking-wider opacity-70 block">
                          Native Select Options List
                        </label>
                        <select className="theme-select text-xs py-2 px-3">
                          <option>Select Workspace Category...</option>
                          <option>SaaS Landing Page</option>
                          <option>Developer Tools</option>
                          <option>Fintech Dashboard</option>
                          <option>AI Assistant Chat</option>
                        </select>

                        <label className="text-xs font-extrabold uppercase tracking-wider opacity-70 block pt-2">
                          Multi-Option Checklist
                        </label>
                        <div className="space-y-2">
                          {['Enable Dark Mode Auto Sync', 'Enable Real-time Webhooks', 'Receive Monthly Usage Reports'].map((opt, i) => (
                            <label key={i} className="flex items-center gap-2.5 text-xs font-semibold cursor-pointer">
                              <input type="checkbox" defaultChecked={i < 2} className="accent-indigo-600 w-4 h-4 rounded" />
                              <span>{opt}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. Footer Component Showcase */}
                {activeTab === 'footer' && (
                  <div className="space-y-4 p-2 text-left">
                    <footer className="theme-footer">
                      <div className="theme-footer-grid">
                        <div className="space-y-2">
                          <div className="font-black text-lg">{theme.name} UI</div>
                          <p className="text-xs opacity-75 leading-relaxed">
                            Crafted with high-contrast color palettes and zero-runtime CSS variables for web applications.
                          </p>
                        </div>

                        <div>
                          <div className="theme-footer-title">Products</div>
                          <ul className="theme-footer-links">
                            <li><a href="#" className="theme-footer-link">UI Component Vault</a></li>
                            <li><a href="#" className="theme-footer-link">Theme Studio</a></li>
                            <li><a href="#" className="theme-footer-link">Tailwind Converter</a></li>
                          </ul>
                        </div>

                        <div>
                          <div className="theme-footer-title">Resources</div>
                          <ul className="theme-footer-links">
                            <li><a href="#" className="theme-footer-link">Documentation</a></li>
                            <li><a href="#" className="theme-footer-link">GitHub Repo</a></li>
                            <li><a href="#" className="theme-footer-link">NPM Package</a></li>
                          </ul>
                        </div>
                      </div>

                      <div className="theme-footer-bottom">
                        <div>© 2026 AuraCSS Inc. All rights reserved.</div>
                        <div className="flex gap-4">
                          <a href="#" className="theme-footer-link">Privacy Policy</a>
                          <a href="#" className="theme-footer-link">Terms of Service</a>
                        </div>
                      </div>
                    </footer>
                  </div>
                )}

                {/* 5. Pricing Cards Showcase */}
                {activeTab === 'pricing' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 text-left">
                    <div className="theme-pricing-card">
                      <span className="theme-badge text-[10px] w-fit">STARTER PLAN</span>
                      <div className="theme-pricing-price">$19<span className="text-xs font-normal opacity-70"> / mo</span></div>
                      <p className="text-xs opacity-80 mb-4">Ideal for indie developers building fast prototypes.</p>
                      <button className="theme-btn theme-btn-outline text-xs py-2">Get Started</button>
                    </div>

                    <div className="theme-pricing-card theme-pricing-popular">
                      <span className="theme-badge text-[10px] w-fit">MOST POPULAR</span>
                      <div className="theme-pricing-price">$49<span className="text-xs font-normal opacity-70"> / mo</span></div>
                      <p className="text-xs opacity-80 mb-4">For growing production teams requiring unlimited themes.</p>
                      <button className="theme-btn text-xs py-2">Upgrade to Pro</button>
                    </div>
                  </div>
                )}

                {/* 6. Forms, Inputs & Toggles Showcase */}
                {activeTab === 'forms' && (
                  <div className="space-y-5 p-2 text-left">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="theme-card p-4 space-y-3">
                        <label className="text-xs font-bold block">Interactive Toggle Switch</label>
                        <div
                          onClick={() => setSwitchActive(!switchActive)}
                          className={`theme-switch ${switchActive ? 'theme-switch-active' : ''}`}
                        >
                          <div className="theme-switch-slider" />
                          <span className="text-xs font-bold">{switchActive ? 'Notifications Enabled' : 'Disabled'}</span>
                        </div>
                      </div>

                      <div className="theme-card p-4 space-y-3">
                        <label className="text-xs font-bold block">Avatar Stack & Badge</label>
                        <div className="theme-avatar-group">
                          <div className="theme-avatar">AK</div>
                          <div className="theme-avatar bg-indigo-600">JD</div>
                          <div className="theme-avatar bg-purple-600">MR</div>
                          <div className="theme-avatar bg-emerald-600">+8</div>
                        </div>
                      </div>
                    </div>

                    <div className="theme-dropzone">
                      <UploadCloud className="w-8 h-8 text-indigo-500 mx-auto mb-2" />
                      <div className="text-xs font-bold">Drag & drop files or click to upload assets</div>
                      <div className="text-[10px] opacity-60 mt-1">Supports PNG, SVG, JPG or JSON up to 10MB</div>
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
