import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Box,
  Layers,
  Type,
  Layout,
  Bell,
  CreditCard,
  Navigation,
  LogIn,
  Users,
  Award,
  Search,
  ArrowLeft,
  ChevronRight
} from 'lucide-react';

import ComponentCard from '../components/ui-kit/ComponentCard';
import { buttons } from '../components/ui-kit/buttons/ButtonComponents';
import { cards } from '../components/ui-kit/cards/CardComponents';
import { inputs } from '../components/ui-kit/inputs/InputComponents';
import { forms } from '../components/ui-kit/forms/FormComponents';
import { navigations } from '../components/ui-kit/navigation/NavigationComponents';
import { alerts } from '../components/ui-kit/alerts/AlertComponents';
import { logins } from '../components/ui-kit/logins/LoginComponents';
import { sections } from '../components/ui-kit/sections/SectionComponents';
import { badges } from '../components/ui-kit/badges/BadgeComponents';
import { avatars } from '../components/ui-kit/avatars/AvatarComponents';
import { emails } from '../components/ui-kit/emails/EmailComponents';
import { ctas } from '../components/ui-kit/ctas/CTAComponents';
import { heroes } from '../components/ui-kit/heroes/HeroComponents';

const categories = [
  { id: 'buttons', name: 'Buttons', icon: Box, components: buttons, color: 'from-indigo-500 to-violet-500' },
  { id: 'cards', name: 'Cards', icon: CreditCard, components: cards, color: 'from-pink-500 to-rose-500' },
  { id: 'inputs', name: 'Inputs', icon: Type, components: inputs, color: 'from-emerald-500 to-teal-500' },
  { id: 'forms', name: 'Forms', icon: Layout, components: forms, color: 'from-amber-500 to-orange-500' },
  { id: 'navigation', name: 'Navigation', icon: Navigation, components: navigations, color: 'from-cyan-500 to-blue-500' },
  { id: 'alerts', name: 'Alerts & Toasts', icon: Bell, components: alerts, color: 'from-red-500 to-pink-500' },
  { id: 'logins', name: 'Login Pages', icon: LogIn, components: logins, color: 'from-violet-500 to-purple-500' },
  { id: 'sections', name: 'Landing Sections', icon: Layers, components: sections, color: 'from-slate-600 to-slate-800' },
  { id: 'badges', name: 'Badges', icon: Award, components: badges, color: 'from-fuchsia-500 to-pink-500' },
  { id: 'avatars', name: 'Avatars', icon: Users, components: avatars, color: 'from-lime-500 to-green-500' },
  { id: 'emails', name: 'Email Templates', icon: Bell, components: emails, color: 'from-blue-500 to-cyan-500' },
  { id: 'ctas', name: 'CTA Sections', icon: Box, components: ctas, color: 'from-orange-500 to-red-500' },
  { id: 'heroes', name: 'Hero Sections', icon: Layers, components: heroes, color: 'from-teal-500 to-emerald-500' },
];

export default function ComponentsPage() {
  const [activeCategory, setActiveCategory] = useState('buttons');
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    if (category && categories.find(c => c.id === category)) {
      setActiveCategory(category);
    }
  }, []);

  const currentCategory = categories.find(c => c.id === activeCategory);
  const filteredComponents = currentCategory?.components.filter(comp =>
    comp.title.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to={createPageUrl('Home')} className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back</span>
            </Link>
            <div className="h-6 w-px bg-slate-200" />
            <h1 className="text-xl font-bold">
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Fluid</span>UI
            </h1>
          </div>
          
          <div className="relative w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-2.5 bg-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
            />
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 h-[calc(100vh-72px)] bg-white border-r border-slate-200 p-4 sticky top-[72px] self-start overflow-y-auto">
          <nav className="space-y-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                  activeCategory === category.id
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <category.icon className="w-5 h-5" />
                  <span className="font-medium">{category.name}</span>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-100 text-slate-500'
                }`}>
                  {category.components.length}
                </span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-6xl">
            {/* Category Header */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 sm:mb-8"
              >
              {/* Mobile Category Selector */}
              <div className="lg:hidden mb-6">
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-900 text-white rounded-xl font-medium"
                >
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${currentCategory?.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  {currentCategory && <currentCategory.icon className="w-6 h-6 text-white" />}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{currentCategory?.name}</h2>
                  <p className="text-slate-500">{filteredComponents.length} components available</p>
                </div>
              </div>
            </motion.div>

            {/* Components Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory + searchQuery}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`grid gap-4 sm:gap-6 ${
                  activeCategory === 'sections' || activeCategory === 'logins' || activeCategory === 'heroes'
                    ? 'grid-cols-1'
                    : 'grid-cols-1 xl:grid-cols-2'
                }`}
              >
                {filteredComponents.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <ComponentCard
                      title={item.title}
                      code={item.code}
                    >
                      <div className="w-full flex items-center justify-center">
                        {item.component}
                      </div>
                    </ComponentCard>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredComponents.length === 0 && (
              <div className="text-center py-20">
                <p className="text-slate-500">No components found matching "{searchQuery}"</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}