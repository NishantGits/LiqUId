import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Box, Layers, Type, Layout, Bell, CreditCard,
  Navigation, LogIn, Users, Award, Search
} from 'lucide-react';

import ComponentCard from '../components/ui-kit/ComponentCard';
import ThemeProvider from '../components/theme/ThemeProvider';
import ThemeCustomizer from '../components/theme/ThemeCustomizer';
import PageShell, { useDarkMode } from '../components/ui-kit/PageShell';

import { buttons }    from '../components/ui-kit/buttons/ButtonComponents';
import { cards }      from '../components/ui-kit/cards/CardComponents';
import { inputs }     from '../components/ui-kit/inputs/InputComponents';
import { forms }      from '../components/ui-kit/forms/FormComponents';
import { navigations } from '../components/ui-kit/navigation/NavigationComponents';
import { alerts }     from '../components/ui-kit/alerts/AlertComponents';
import { logins }     from '../components/ui-kit/logins/LoginComponents';
import { sections }   from '../components/ui-kit/sections/SectionComponents';
import { badges }     from '../components/ui-kit/badges/BadgeComponents';
import { avatars }    from '../components/ui-kit/avatars/AvatarComponents';
import { emails }     from '../components/ui-kit/emails/EmailComponents';
import { ctas }       from '../components/ui-kit/ctas/CTAComponents';
import { heroes }     from '../components/ui-kit/heroes/HeroComponents';

const categories = [
  { id: 'buttons',    name: 'Buttons',          icon: Box,        components: buttons,     color: 'from-indigo-500 to-violet-500' },
  { id: 'cards',      name: 'Cards',            icon: CreditCard, components: cards,       color: 'from-pink-500 to-rose-500' },
  { id: 'inputs',     name: 'Inputs',           icon: Type,       components: inputs,      color: 'from-emerald-500 to-teal-500' },
  { id: 'forms',      name: 'Forms',            icon: Layout,     components: forms,       color: 'from-amber-500 to-orange-500' },
  { id: 'navigation', name: 'Navigation',       icon: Navigation, components: navigations, color: 'from-cyan-500 to-blue-500' },
  { id: 'alerts',     name: 'Alerts & Toasts',  icon: Bell,       components: alerts,      color: 'from-red-500 to-pink-500' },
  { id: 'logins',     name: 'Login Pages',      icon: LogIn,      components: logins,      color: 'from-violet-500 to-purple-500' },
  { id: 'sections',   name: 'Landing Sections', icon: Layers,     components: sections,    color: 'from-slate-600 to-slate-800' },
  { id: 'badges',     name: 'Badges',           icon: Award,      components: badges,      color: 'from-fuchsia-500 to-pink-500' },
  { id: 'avatars',    name: 'Avatars',          icon: Users,      components: avatars,     color: 'from-lime-500 to-green-500' },
  { id: 'emails',     name: 'Email Templates',  icon: Bell,       components: emails,      color: 'from-blue-500 to-cyan-500' },
  { id: 'ctas',       name: 'CTA Sections',     icon: Box,        components: ctas,        color: 'from-orange-500 to-red-500' },
  { id: 'heroes',     name: 'Hero Sections',    icon: Layers,     components: heroes,      color: 'from-teal-500 to-emerald-500' },
];

function KitsStandardContent() {
  const { dark, fg, muted } = useDarkMode();
  const [activeCategory, setActiveCategory] = useState('buttons');
  const [searchQuery, setSearchQuery]       = useState('');

  useEffect(() => {
    const params   = new URLSearchParams(window.location.search);
    const category = params.get('category');
    if (category && categories.find(c => c.id === category)) setActiveCategory(category);
  }, []);

  const currentCategory    = categories.find(c => c.id === activeCategory);
  const filteredComponents = currentCategory?.components.filter(comp =>
    comp.title.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  const sidebarBg     = dark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.65)';
  const sidebarBorder = dark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.07)';

  return (
    <div style={{ minHeight: 'calc(100vh - 80px)' }}>
      {/* Search bar on top (mobile) */}
      <div
        className="sticky z-40 px-4 sm:px-6 py-3 md:hidden"
        style={{ top: 72, background: dark ? 'rgba(10,10,20,0.8)' : 'rgba(255,255,255,0.8)', backdropFilter: 'blur(20px)', borderBottom: sidebarBorder }}
      >
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: muted }} />
          <input
            type="text" placeholder="Search components..." value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-none text-sm focus:outline-none focus:ring-2 focus:ring-[#3b82f6] transition-all"
            style={{ background: dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.05)', border: sidebarBorder, color: fg }}
          />
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className="hidden lg:block w-64 sticky top-[72px] self-start h-[calc(100vh-72px)] overflow-y-auto"
          style={{ background: sidebarBg, borderRight: sidebarBorder, backdropFilter: 'blur(20px)' }}
        >
          <nav className="divide-y divide-white/5">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="w-full flex items-center justify-between px-6 py-4 transition-colors relative group"
                style={
                  activeCategory === cat.id
                    ? { background: 'linear-gradient(135deg,#3b82f6,#06b6d4)', color: '#fff' }
                    : { color: muted, borderLeft: '3px solid transparent' }
                }
                whileHover={activeCategory !== cat.id ? { 
                  scale: 1.02, 
                  backgroundColor: dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)',
                  borderLeftColor: '#3b82f6'
                } : {}}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <div className="flex items-center gap-3">
                  <cat.icon className={`w-4 h-4 transition-transform duration-300 ${activeCategory !== cat.id ? 'group-hover:scale-110' : ''}`} />
                  <span className="font-medium text-sm">{cat.name}</span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full transition-colors" style={{ background: activeCategory === cat.id ? 'rgba(255,255,255,0.2)' : dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.07)' }}>
                  {cat.components.length}
                </span>
              </motion.button>
            ))}
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {/* Search (desktop, in content area) */}
          <div className="hidden md:flex items-center justify-between mb-6">
            <motion.div key={activeCategory} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3">
              <div className={`w-10 h-10 bg-gradient-to-br ${currentCategory?.color} rounded-xl flex items-center justify-center shadow-md`}>
                {currentCategory && <currentCategory.icon className="w-5 h-5 text-white" />}
              </div>
              <div>
                <h2 className="font-display font-black text-xl tracking-tight" style={{ color: fg }}>{currentCategory?.name}</h2>
                <p className="text-sm font-light" style={{ color: muted }}>{filteredComponents.length} components</p>
              </div>
            </motion.div>
            <div className="relative w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: muted }} />
              <input
                type="text" placeholder="Search components..." value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-none text-sm focus:outline-none focus:ring-2 focus:ring-[#3b82f6] transition-all"
                style={{ background: dark ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.9)', border: sidebarBorder, color: fg, backdropFilter: 'blur(12px)' }}
              />
            </div>
          </div>

          {/* Mobile category picker */}
          <div className="lg:hidden mb-5">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-xl text-sm font-medium focus:outline-none transition-all"
              style={{ background: dark ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.9)', border: sidebarBorder, color: fg }}
            >
              {categories.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
            </select>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className={`grid gap-12 sm:gap-16 ${
                ['sections', 'logins', 'heroes', 'ctas', 'emails', 'forms', 'navigation', 'cards'].includes(activeCategory) 
                  ? 'grid-cols-1' 
                  : 'grid-cols-1 md:grid-cols-2'
              }`}
            >
              {filteredComponents.map((item, index) => (
                <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.04 }}>
                  <ComponentCard title={item.title} code={item.code}>
                    <div className="w-full flex items-center justify-center">{item.component}</div>
                  </ComponentCard>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredComponents.length === 0 && (
            <div className="text-center py-20">
              <p style={{ color: muted }}>No components found matching "{searchQuery}"</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default function KitsStandardPage() {
  return (
    <ThemeProvider>
      <PageShell backTo="Kits" backLabel="Back to Kits" stickyUntilFooter={true} hideFooter={true}>
        <KitsStandardContent />
        <ThemeCustomizer />
      </PageShell>
    </ThemeProvider>
  );
}