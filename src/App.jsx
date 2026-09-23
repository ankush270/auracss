import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import ThemeCard from './components/ThemeCard';
import ThemeModal from './components/ThemeModal';
import DocsSection from './components/DocsSection';
import Toast from './components/Toast';
import { THEMES_DATA } from './data/themesData';

export default function App() {
  const [appMode, setAppMode] = useState('light');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('auracss_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleAppMode = () => {
    setAppMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleFavorite = (themeId, e) => {
    if (e) e.stopPropagation();
    setFavorites((prev) => {
      const isFav = prev.includes(themeId);
      const next = isFav ? prev.filter((id) => id !== themeId) : [...prev, themeId];
      try {
        localStorage.setItem('auracss_favorites', JSON.stringify(next));
      } catch (err) {}
      showToast(isFav ? `Removed from favorites` : `Added to favorites! ❤️`);
      return next;
    });
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleCopyNpm = () => {
    navigator.clipboard.writeText('npm install @ankush_crap/auracss');
    showToast('Copied to clipboard: npm install @ankush_crap/auracss');
  };

  const handleApplyGlobalTheme = (themeId) => {
    document.documentElement.setAttribute('data-theme', themeId);
    showToast(`Global theme set to "${themeId}"!`);
  };

  const filteredThemes = THEMES_DATA.filter((theme) => {
    const isFav = favorites.includes(theme.id);
    const matchesCategory =
      activeFilter === 'all'
        ? true
        : activeFilter === 'favorites'
        ? isFav
        : theme.category === activeFilter;

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      theme.name.toLowerCase().includes(query) ||
      theme.desc.toLowerCase().includes(query) ||
      theme.font.toLowerCase().includes(query) ||
      theme.id.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  const isLight = appMode === 'light';

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 pb-20 ${
      isLight ? 'bg-slate-50 text-slate-900 selection:bg-indigo-500 selection:text-white' : 'bg-[#0b0f19] text-slate-100 selection:bg-indigo-500 selection:text-white'
    }`}>
      {/* Navbar */}
      <Navbar onCopyNpm={handleCopyNpm} appMode={appMode} onToggleAppMode={toggleAppMode} />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Hero Banner */}
        <Hero appMode={appMode} />

        {/* Filter & Search Bar */}
        <FilterBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          themeCount={filteredThemes.length}
          totalCount={THEMES_DATA.length}
          favCount={favorites.length}
          appMode={appMode}
        />

        {/* Themes Grid */}
        {filteredThemes.length === 0 ? (
          <div className={`text-center py-16 border border-dashed rounded-2xl ${
            isLight ? 'bg-white border-slate-300 text-slate-700 shadow-sm' : 'bg-[#131b2e] border-white/10 text-slate-300'
          }`}>
            <h3 className={`text-xl font-bold mb-2 ${isLight ? 'text-slate-900' : 'text-white'}`}>No themes match your search</h3>
            <p className={isLight ? 'text-slate-500 text-sm' : 'text-slate-400 text-sm'}>
              {activeFilter === 'favorites' ? 'You haven\'t added any themes to favorites yet. Click the heart icon on any card to save!' : 'Try searching for keywords like "cyberpunk", "dark", "retro", "glass", or "bento".'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {filteredThemes.map((theme) => (
              <ThemeCard
                key={theme.id}
                theme={theme}
                onSelect={(t) => setSelectedTheme(t)}
                appMode={appMode}
                isFavorite={favorites.includes(theme.id)}
                onToggleFavorite={(e) => toggleFavorite(theme.id, e)}
              />
            ))}
          </div>
        )}

        {/* Documentation & Customization Section */}
        <DocsSection appMode={appMode} />
      </main>

      {/* Theme Detail Modal */}
      <ThemeModal
        theme={selectedTheme}
        onClose={() => setSelectedTheme(null)}
        onApplyGlobal={handleApplyGlobalTheme}
        showToast={showToast}
        appMode={appMode}
        isFavorite={selectedTheme ? favorites.includes(selectedTheme.id) : false}
        onToggleFavorite={(e) => selectedTheme && toggleFavorite(selectedTheme.id, e)}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} />
    </div>
  );
}
