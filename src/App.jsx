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
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleCopyNpm = () => {
    navigator.clipboard.writeText('npm install auracss');
    showToast('Copied to clipboard: npm install auracss');
  };

  const handleApplyGlobalTheme = (themeId) => {
    document.documentElement.setAttribute('data-theme', themeId);
    showToast(`Global theme set to "${themeId}"!`);
  };

  const filteredThemes = THEMES_DATA.filter((theme) => {
    const matchesCategory = activeFilter === 'all' || theme.category === activeFilter;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      theme.name.toLowerCase().includes(query) ||
      theme.desc.toLowerCase().includes(query) ||
      theme.font.toLowerCase().includes(query) ||
      theme.id.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white pb-20">
      {/* Navbar */}
      <Navbar onCopyNpm={handleCopyNpm} />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Hero Banner */}
        <Hero />

        {/* Filter & Search Bar */}
        <FilterBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          themeCount={filteredThemes.length}
          totalCount={THEMES_DATA.length}
        />

        {/* Themes Grid */}
        {filteredThemes.length === 0 ? (
          <div className="text-center py-16 bg-[#131b2e] border border-dashed border-white/10 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-2">No themes match your search</h3>
            <p className="text-slate-400 text-sm">
              Try searching for keywords like "cyberpunk", "dark", "retro", "glass", or "bento".
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {filteredThemes.map((theme) => (
              <ThemeCard
                key={theme.id}
                theme={theme}
                onSelect={(t) => setSelectedTheme(t)}
              />
            ))}
          </div>
        )}

        {/* Documentation & Customization Section */}
        <DocsSection />
      </main>

      {/* Theme Detail Modal */}
      <ThemeModal
        theme={selectedTheme}
        onClose={() => setSelectedTheme(null)}
        onApplyGlobal={handleApplyGlobalTheme}
        showToast={showToast}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} />
    </div>
  );
}
