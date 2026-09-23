import React, { useState } from 'react';
import { ArrowLeft, Globe, Code2, Sliders, Layout, Heart, Copy, Download, Sparkles, Check, Type, Layers, Eye, Menu, ChevronDown, CheckSquare, User, Bell, Search, Settings, HelpCircle, Package, Folder, Plus, X, UploadCloud, CreditCard, Shield, Zap, Info, AlertTriangle, AlertCircle, Clock, Star, MessageSquare } from 'lucide-react';

export default function ThemeDetailPage({ theme, onBack, onApplyGlobal, showToast, appMode, isFavorite, onToggleFavorite }) {
  const [activeTab, setActiveTab] = useState('all-gallery');
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
                {theme.name} Design System Studio
              </h1>
              <p className={`text-sm md:text-base max-w-3xl leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                {theme.desc} Live interactive showcase for all 40+ semantic website components.
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
                    onClick={() => setActiveTab('all-gallery')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeTab === 'all-gallery'
                        ? 'bg-indigo-600 text-white shadow'
                        : isLight ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : 'bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    🔥 All 40+ Components Gallery
                  </button>
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
                    Menus & Options
                  </button>
                </div>
              </div>

              {/* Live Sandbox Canvas */}
              <div
                data-theme={theme.id}
                style={customStyleObj}
                className="p-4 sm:p-6 rounded-2xl border border-slate-200/60 shadow-md transition-all min-h-[420px] overflow-hidden"
              >
                {/* 1. ALL 40+ COMPONENTS GALLERY DEMO TAB */}
                {activeTab === 'all-gallery' && (
                  <div className="space-y-8 p-2 text-left">
                    {/* SECTION A: HERO, NAVBAR & BANNERS */}
                    <div className="space-y-4">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider opacity-70">
                        1. Header, Hero & Banners
                      </div>

                      {/* Navbar */}
                      <nav className="theme-nav">
                        <div className="flex items-center gap-2 font-black text-sm">
                          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: theme.primary }} />
                          <span>AuraCSS Logo</span>
                        </div>
                        <div className="flex gap-2">
                          <button onClick={() => showToast('Primary Action clicked!')} className="theme-btn theme-btn-sm cursor-pointer">Primary Action</button>
                          <button onClick={() => showToast('Docs button clicked!')} className="theme-btn theme-btn-outline theme-btn-sm cursor-pointer">Docs</button>
                        </div>
                      </nav>

                      {/* Hero Section */}
                      <div className="theme-hero">
                        <span className="theme-badge mb-2">HERO COMPONENT</span>
                        <h2 className="theme-hero-title text-2xl md:text-4xl">
                          {theme.name} Design System
                        </h2>
                        <p className="theme-hero-desc text-xs md:text-sm">
                          Universal CSS variable themes for instant UI styling.
                        </p>
                        <div className="flex justify-center gap-2">
                          <button onClick={() => showToast('Get Started clicked!')} className="theme-btn text-xs py-2 px-4 cursor-pointer">Get Started</button>
                          <button onClick={() => showToast('Explore Components clicked!')} className="theme-btn theme-btn-secondary text-xs py-2 px-4 cursor-pointer">Explore Components</button>
                        </div>
                      </div>

                      {/* Banner */}
                      <div className="theme-banner">
                        <div className="flex items-center gap-2 text-xs font-bold">
                          <Sparkles className="w-4 h-4 text-amber-500" />
                          <span>Announcement: New 40+ Semantic Components Released!</span>
                        </div>
                        <span className="theme-pill text-[10px]">v1.0.0</span>
                      </div>
                    </div>

                    {/* SECTION B: CARDS, FEATURE CARDS & TESTIMONIALS */}
                    <div className="space-y-4">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider opacity-70">
                        2. Cards, Feature Tiles & Testimonials
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="theme-feature-card">
                          <Zap className="w-6 h-6 text-indigo-500 mb-2" />
                          <h4 className="text-sm font-bold mb-1">Instant Variable Switching</h4>
                          <p className="text-xs opacity-75 leading-relaxed">
                            Zero JS runtime overhead. Built directly with native CSS variables.
                          </p>
                        </div>

                        <div className="theme-testimonial-card">
                          <p className="text-xs italic opacity-85 mb-3 leading-relaxed">
                            "AuraCSS saved us weeks of UI development time with 70 handcrafted themes."
                          </p>
                          <div className="flex items-center gap-2">
                            <div className="theme-avatar theme-avatar-sm">AK</div>
                            <div>
                              <div className="text-xs font-bold">Ankush Craps</div>
                              <div className="text-[10px] opacity-60">Lead Developer</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SECTION C: SIDEBAR & DROPDOWN MENUS */}
                    <div className="space-y-4">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider opacity-70">
                        3. Sidebar & Dropdown Menu Options
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Sidebar */}
                        <aside className="theme-sidebar">
                          <div className="theme-sidebar-header">
                            <span className="font-extrabold text-xs">Sidebar Component</span>
                            <span className="theme-badge text-[9px]">Pro</span>
                          </div>
                          <div className="theme-sidebar-menu">
                            <a className="theme-sidebar-item theme-sidebar-item-active">
                              <span>Dashboard</span>
                              <span className="theme-badge text-[9px]">HOT</span>
                            </a>
                            <a className="theme-sidebar-item"><span>Analytics</span></a>
                            <a className="theme-sidebar-item"><span>Settings</span></a>
                          </div>
                        </aside>

                        {/* Dropdown Menu */}
                        <div className="space-y-2">
                          <label className="text-xs font-bold block">Dropdown Menu List</label>
                          <div className="theme-dropdown-menu w-full">
                            <div className="theme-dropdown-item">
                              <span>User Profile</span>
                              <User className="w-3.5 h-3.5" />
                            </div>
                            <div className="theme-dropdown-item">
                              <span>Workspace Options</span>
                              <ChevronDown className="w-3.5 h-3.5" />
                            </div>
                            <div className="theme-dropdown-item">
                              <span>Log Out</span>
                              <X className="w-3.5 h-3.5 text-rose-500" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SECTION D: FORMS, TOGGLES & AVATARS */}
                    <div className="space-y-4">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider opacity-70">
                        4. Form Inputs, Toggles & Avatars
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <label className="theme-label">Form Text Input</label>
                          <input className="theme-input text-xs" placeholder="Enter email address..." />
                          
                          <label className="theme-label">Select Options List</label>
                          <select className="theme-select text-xs">
                            <option>Option 1: React Framework</option>
                            <option>Option 2: Vue.js Framework</option>
                            <option>Option 3: Svelte Framework</option>
                          </select>
                        </div>

                        <div className="space-y-3">
                          <label className="theme-label">Toggle Switch</label>
                          <div
                            onClick={() => setSwitchActive(!switchActive)}
                            className={`theme-switch ${switchActive ? 'theme-switch-active' : ''}`}
                          >
                            <div className="theme-switch-slider" />
                            <span className="text-xs font-bold">{switchActive ? 'Active' : 'Disabled'}</span>
                          </div>

                          <label className="theme-label">Avatar Stack Group</label>
                          <div className="theme-avatar-group">
                            <div className="theme-avatar">AK</div>
                            <div className="theme-avatar bg-purple-600">JD</div>
                            <div className="theme-avatar bg-emerald-600">MR</div>
                            <div className="theme-avatar bg-amber-600">+5</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SECTION E: ALERTS, TOASTS, SPINNER & PROGRESS */}
                    <div className="space-y-4">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider opacity-70">
                        5. Alerts, Toasts, Spinner & Progress
                      </div>

                      <div className="space-y-3">
                        <div className="theme-alert theme-alert-success">
                          <CheckSquare className="w-4 h-4 text-emerald-600" />
                          <span>Success Alert: Operation completed with 100% accuracy.</span>
                        </div>

                        <div className="theme-alert theme-alert-warning">
                          <AlertTriangle className="w-4 h-4 text-amber-500" />
                          <span>Warning Alert: Please verify your domain DNS records.</span>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-4 p-3 theme-card">
                          <div className="flex items-center gap-3">
                            <span className="theme-spinner" />
                            <span className="text-xs font-bold">Processing request...</span>
                          </div>
                          <div className="w-36">
                            <div className="theme-progress">
                              <div className="theme-progress-bar" style={{ width: '75%' }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SECTION F: DATA TABLE, STEPPER & TIMELINE */}
                    <div className="space-y-4">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider opacity-70">
                        6. Data Table & Multi-step Stepper
                      </div>

                      {/* Stepper */}
                      <div className="theme-stepper py-2">
                        <div className="theme-step theme-step-active">
                          <div className="theme-step-icon">1</div>
                          <span className="text-[10px] font-bold">Account</span>
                        </div>
                        <div className="theme-step theme-step-active">
                          <div className="theme-step-icon">2</div>
                          <span className="text-[10px] font-bold">Billing</span>
                        </div>
                        <div className="theme-step">
                          <div className="theme-step-icon">3</div>
                          <span className="text-[10px] font-bold">Deploy</span>
                        </div>
                      </div>

                      {/* Data Table */}
                      <div className="overflow-x-auto rounded-xl border border-current/10">
                        <table className="theme-table">
                          <thead>
                            <tr>
                              <th>Theme ID</th>
                              <th>Category</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="font-bold">agentic</td>
                              <td>AI Assistant</td>
                              <td><span className="theme-badge text-[9px]">ACTIVE</span></td>
                            </tr>
                            <tr>
                              <td className="font-bold">cyberpunk</td>
                              <td>Retro Gaming</td>
                              <td><span className="theme-badge text-[9px]">ACTIVE</span></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* SECTION G: FOOTER */}
                    <div className="space-y-4 pt-2">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider opacity-70">
                        7. Multi-column Footer
                      </div>
                      <footer className="theme-footer">
                        <div className="flex flex-wrap justify-between items-center gap-4">
                          <div className="font-black text-sm">{theme.name} Footer Component</div>
                          <div className="flex gap-3 text-xs">
                            <a className="theme-footer-link">Privacy</a>
                            <a className="theme-footer-link">Terms</a>
                            <a className="theme-footer-link">Docs</a>
                          </div>
                        </div>
                      </footer>
                    </div>
                  </div>
                )}

                {/* 2. Full Landing Page Preview */}
                {activeTab === 'card' && (
                  <div className="theme-card space-y-5 p-5 md:p-7 text-left">
                    <div className="flex items-center justify-between border-b pb-3 border-current/10">
                      <div className="flex items-center gap-2 font-black text-sm tracking-tight">
                        <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: theme.primary }} />
                        <span>AuraPlatform</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="theme-badge text-[10px]">{theme.category} SYSTEM</span>
                        <button onClick={() => showToast('Launch App clicked!')} className="theme-btn text-xs py-1.5 px-3.5 cursor-pointer">Launch App</button>
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
                      <button onClick={() => showToast('Get Started Free clicked!')} className="theme-btn text-xs py-2 px-4 whitespace-nowrap cursor-pointer">Get Started Free</button>
                      <button onClick={() => showToast('Docs clicked!')} className="theme-btn theme-btn-secondary text-xs py-2 px-3 cursor-pointer">Docs</button>
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

                {/* 3. Sidebar Navigation Component Showcase */}
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

                {/* 4. Menus, Dropdown List & Select Showcase */}
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
                              onClick={() => { setSelectedOption('Option 1: Pro Subscription'); setDropdownOpen(false); showToast('Selected Pro Plan'); }}
                              className="theme-dropdown-item flex items-center justify-between"
                            >
                              <span>Option 1: Pro Subscription</span>
                              {selectedOption.includes('Pro') && <Check className="w-3.5 h-3.5 text-indigo-600" />}
                            </div>
                            <div
                              onClick={() => { setSelectedOption('Option 2: Enterprise Team'); setDropdownOpen(false); showToast('Selected Enterprise'); }}
                              className="theme-dropdown-item flex items-center justify-between"
                            >
                              <span>Option 2: Enterprise Team</span>
                              {selectedOption.includes('Enterprise') && <Check className="w-3.5 h-3.5 text-indigo-600" />}
                            </div>
                            <div
                              onClick={() => { setSelectedOption('Option 3: Developer Free Tier'); setDropdownOpen(false); showToast('Selected Free Tier'); }}
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
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Live Token Customizer Controls */}
              <div className={`mt-6 border rounded-xl p-5 ${
                isLight ? 'bg-slate-50 border-slate-200' : 'bg-black/30 border-white/10'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-indigo-600" />
                    <h4 className={`text-xs font-extrabold uppercase tracking-wider ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>
                      Live Token Customizer & Overrides
                    </h4>
                  </div>
                  {(customPrimary || customSecondary || customRadius) && (
                    <button
                      onClick={() => { setCustomPrimary(''); setCustomSecondary(''); setCustomRadius(''); showToast('Reset token overrides!'); }}
                      className="text-xs font-bold text-rose-500 hover:text-rose-600 cursor-pointer underline"
                    >
                      Reset Overrides
                    </button>
                  )}
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
