import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Download, Copy, Check, X } from 'lucide-react';
import { toast } from 'sonner';
import { fluentIcons } from '../components/data/fluentIcons';
import PageShell, { useDarkMode } from '../components/ui-kit/PageShell';

const CATEGORIES = ['All', 'Files', 'Communication', 'Productivity', 'System', 'Security', 'People', 'Media', 'Emoji', 'Food', 'Shopping', 'Transportation', 'Entertainment', 'Tools', 'Nature'];

function IconKitContent() {
  const { dark, fg, muted } = useDarkMode();
  const [searchQuery, setSearchQuery]       = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedId, setCopiedId]             = useState(null);

  const filteredIcons = useMemo(() =>
    fluentIcons.filter(icon => {
      const matchesSearch   = icon.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || icon.category === selectedCategory;
      return matchesSearch && matchesCategory;
    }),
    [searchQuery, selectedCategory]
  );

  const isEmoji = (icon) => icon.category === 'Emoji' || icon.url.includes('fluentui-emoji');

  const handleCopy = (icon) => {
    navigator.clipboard.writeText(icon.url);
    setCopiedId(icon.id);
    toast.success(`${icon.name} URL copied!`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDownload = (icon) => {
    const a = document.createElement('a');
    a.href = icon.url;
    a.download = `${icon.name.toLowerCase().replace(/ /g, '-')}-icon${isEmoji(icon) ? '.png' : '.svg'}`;
    a.target = '_blank';
    a.click();
    toast.success(`${icon.name} downloading!`);
  };

  const cardBg     = dark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.75)';
  const cardBorder = dark ? '1px solid rgba(255,255,255,0.09)' : '1px solid rgba(0,0,0,0.07)';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Hero */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h1 className="font-display font-black text-4xl sm:text-5xl tracking-tight mb-4" style={{ color: fg }}>
          Fluent UI{' '}
          <span style={{ background: 'linear-gradient(90deg,#3b82f6,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Icons</span>
        </h1>
        <p className="text-lg font-light mb-8" style={{ color: muted }}>
          Real Microsoft Fluent UI SVG system icons + 3D emoji PNGs
        </p>

        {/* Search */}
        <div className="relative max-w-3xl mx-auto mb-8">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: muted }} />
          <input
            type="text"
            placeholder="Search icons… (e.g., folder, heart, game)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-14 pr-12 py-4 text-base rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#3b82f6] transition-all duration-300"
            style={{
              background: cardBg, border: cardBorder, backdropFilter: 'blur(20px)',
              color: fg,
            }}
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="absolute right-5 top-1/2 -translate-y-1/2 transition-colors hover:text-[#3b82f6]" style={{ color: muted }}>
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={
                selectedCategory === cat
                  ? { background: 'linear-gradient(135deg,#3b82f6,#06b6d4)', color: '#fff', boxShadow: '0 4px 15px rgba(59,130,246,0.3)' }
                  : { background: cardBg, border: cardBorder, color: muted, backdropFilter: 'blur(12px)' }
              }
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Count */}
      <p className="text-center mb-6 text-sm" style={{ color: muted }}>
        Showing <span className="font-bold" style={{ color: fg }}>{filteredIcons.length}</span> icons
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {filteredIcons.map((icon, index) => (
          <motion.div
            key={icon.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: Math.min(index * 0.01, 0.3) }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="rounded-3xl overflow-hidden group transition-all duration-500"
            style={{
              background: cardBg, border: cardBorder, backdropFilter: 'blur(20px)',
              boxShadow: dark ? '0 4px 16px rgba(0,0,0,0.3)' : '0 4px 16px rgba(31,38,135,0.07)',
            }}
          >
            <div className="aspect-square p-6 flex items-center justify-center">
              <img
                src={icon.url} alt={icon.name}
                className={`object-contain transition-transform duration-500 group-hover:scale-110 ${isEmoji(icon) ? 'w-16 h-16' : 'w-12 h-12'}`}
                loading="lazy"
                onError={(e) => { e.target.style.opacity = '0.2'; }}
              />
            </div>
            <div className="p-4" style={{ borderTop: dark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.05)' }}>
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-semibold truncate" style={{ color: fg }}>{icon.name}</p>
                <span className="text-xs px-2 py-0.5 rounded-full ml-1 flex-shrink-0" style={{ background: dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)', color: muted }}>{icon.category}</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleCopy(icon)}
                  className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300"
                  style={{ background: dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.05)', color: muted, border: cardBorder }}
                >
                  {copiedId === icon.id ? <><Check className="w-3 h-3 text-[#06b6d4]" /> Copied</> : <><Copy className="w-3 h-3" /> Copy</>}
                </button>
                <button
                  onClick={() => handleDownload(icon)}
                  className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-medium text-white transition-all duration-300 hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg,#3b82f6,#06b6d4)' }}
                >
                  <Download className="w-3 h-3" />
                  {isEmoji(icon) ? 'PNG' : 'SVG'}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredIcons.length === 0 && (
        <div className="text-center py-20">
          <p className="text-lg" style={{ color: muted }}>No icons found matching "{searchQuery}"</p>
        </div>
      )}
    </div>
  );
}

export default function IconKitPage() {
  return (
    <PageShell backTo="Kits" backLabel="Back to Kits">
      <IconKitContent />
    </PageShell>
  );
}