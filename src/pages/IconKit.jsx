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
  const [iconVersion, setIconVersion]       = useState('mono'); // mono, d3

  const filteredIcons = useMemo(() =>
    fluentIcons.filter(icon => {
      const matchesSearch   = icon.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || icon.category === selectedCategory;
      return matchesSearch && matchesCategory;
    }),
    [searchQuery, selectedCategory]
  );

  const getIconUrl = (icon) => icon[iconVersion] || icon.mono;

  const handleCopy = (icon) => {
    const url = getIconUrl(icon);
    navigator.clipboard.writeText(url);
    setCopiedId(icon.id);
    toast.success(`${icon.name} (${iconVersion}) URL copied!`);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDownload = (icon) => {
    const url = getIconUrl(icon);
    const a = document.createElement('a');
    a.href = url;
    const ext = url.includes('.png') ? '.png' : '.svg';
    a.download = `${icon.name.toLowerCase().replace(/ /g, '-')}-${iconVersion}${ext}`;
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
          LiqUId{' '}
          <span style={{ background: 'linear-gradient(90deg,#3b82f6,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Icons</span>
        </h1>
        <p className="text-lg font-light mb-8" style={{ color: muted }}>
          Premium SVG system icons + 3D emoji assets for your next project
        </p>

        {/* Version Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-xl">
            {[
              { id: 'mono', label: 'Mono', desc: 'Minimal Style' },
              { id: 'd3', label: 'Color 3D', desc: 'Premium 3D' }
            ].map((v) => (
              <button
                key={v.id}
                onClick={() => setIconVersion(v.id)}
                className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex flex-col items-center ${
                  iconVersion === v.id 
                    ? 'bg-white dark:bg-white/10 shadow-lg text-theme-primary' 
                    : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                <span>{v.label}</span>
                <span className="text-[10px] opacity-60 font-medium">{v.desc}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="relative max-w-3xl mx-auto mb-8">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: muted }} />
          <input
            type="text"
            placeholder="Search 200+ icons… (e.g., folder, heart, game)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-14 pr-12 py-5 text-lg rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#3b82f6] transition-all duration-300 shadow-xl"
            style={{
              background: cardBg, border: cardBorder, backdropFilter: 'blur(20px)',
              color: fg,
            }}
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="absolute right-6 top-1/2 -translate-y-1/2 transition-colors hover:text-[#3b82f6]" style={{ color: muted }}>
              <X className="w-6 h-6" />
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
              className="px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300"
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
      <p className="text-center mb-8 text-sm" style={{ color: muted }}>
        Showing <span className="font-bold" style={{ color: fg }}>{filteredIcons.length}</span> icons in <span className="text-theme-primary font-bold">{iconVersion}</span> style
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {filteredIcons.map((icon, index) => (
          <motion.div
            key={icon.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: Math.min(index * 0.01, 0.3) }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="rounded-[2.5rem] overflow-hidden group transition-all duration-500"
            style={{
              background: cardBg, border: cardBorder, backdropFilter: 'blur(20px)',
              boxShadow: dark ? '0 8px 32px rgba(0,0,0,0.4)' : '0 8px 32px rgba(31,38,135,0.08)',
            }}
          >
            <div className="aspect-square p-8 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-theme-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={getIconUrl(icon)} alt={icon.name}
                className={`object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${icon.category === 'Emoji' ? 'w-20 h-20' : 'w-14 h-14'}`}
                loading="lazy"
                onError={(e) => { e.target.style.opacity = '0.2'; }}
              />
            </div>
            <div className="p-5" style={{ borderTop: dark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.05)' }}>
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-bold truncate" style={{ color: fg }}>{icon.name}</p>
                <span className="text-[10px] px-2 py-1 rounded-lg ml-1 flex-shrink-0 font-black uppercase tracking-wider" style={{ background: dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)', color: muted }}>{icon.category}</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleCopy(icon)}
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold transition-all duration-300"
                  style={{ background: dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.05)', color: muted, border: cardBorder }}
                >
                  {copiedId === icon.id ? <Check className="w-3.5 h-3.5 text-[#06b6d4]" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedId === icon.id ? 'Copied' : 'Copy'}
                </button>
                <button
                  onClick={() => handleDownload(icon)}
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-theme-primary/25 active:scale-95"
                  style={{ background: 'linear-gradient(135deg,#3b82f6,#06b6d4)' }}
                >
                  <Download className="w-3.5 h-3.5" />
                  {getIconUrl(icon).includes('.png') ? 'PNG' : 'SVG'}
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
    <PageShell backTo="kits" backLabel="Back to Kits">
      <IconKitContent />
    </PageShell>
  );
}