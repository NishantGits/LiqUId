import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Box, Droplets, Sparkles, ArrowRight, Lock } from 'lucide-react';
import PageShell, { useDarkMode } from '../components/ui-kit/PageShell';

const kits = [
  {
    id: 'standard', name: 'Standard Kit',
    description: '130+ production-ready components built with React & Tailwind CSS',
    icon: Box, color: 'from-[#3b82f6] to-[#8b5cf6]', available: true, components: 130,
    categories: ['Buttons', 'Cards', 'Inputs', 'Forms', 'Navigation', 'Alerts', 'Login Pages', 'Landing Sections', 'Badges', 'Avatars', 'Email Templates', 'CTAs', 'Heroes'],
  },
  {
    id: 'icons', name: 'Icon Kit',
    description: 'Thousands of 3D Fluent UI icons and emojis with download and copy functionality',
    icon: Sparkles, color: 'from-[#06b6d4] to-[#3b82f6]', available: true, components: '1000+',
    categories: ['Files', 'Communication', 'Media', 'Emoji'],
  },
  {
    id: 'liquid-glass', name: 'Liquid Glass',
    description: 'Stunning glassmorphism components with liquid animations and blur effects',
    icon: Droplets, color: 'from-[#06b6d4] to-[#8b5cf6]', available: false, components: '50+',
    categories: ['Glass Cards', 'Blur Overlays', 'Liquid Buttons', 'Animated Backgrounds'],
  },
  {
    id: 'enterprise', name: 'Enterprise Suite',
    description: 'Advanced dashboard components and data visualization tools',
    icon: Box, color: 'from-slate-700 to-slate-900', available: false, components: '80+',
    categories: ['Dashboards', 'Charts', 'Tables', 'Analytics'],
  },
];

function KitsContent() {
  const { dark, fg, muted } = useDarkMode();
  const cardBg     = dark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.78)';
  const cardBorder = dark ? '1px solid rgba(255,255,255,0.09)' : '1px solid rgba(0,0,0,0.07)';
  const shadow     = dark ? '0 8px 32px 0 rgba(0,0,0,0.3)' : '0 8px 32px 0 rgba(31,38,135,0.07)';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <h1 className="font-display font-black text-5xl sm:text-6xl tracking-tight mb-6" style={{ color: fg }}>
          Component{' '}
          <span style={{ background: 'linear-gradient(90deg,#3b82f6,#8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Kits</span>
        </h1>
        <p className="text-lg sm:text-xl font-light max-w-3xl mx-auto" style={{ color: muted }}>
          Choose from our curated collection of component kits, each designed for specific use cases and design styles
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {kits.map((kit, index) => (
          <motion.div
            key={kit.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            {kit.available ? (
              <Link
                to={createPageUrl(kit.id === 'icons' ? 'kits/icon' : 'kits/standard')}
                className="block rounded-3xl p-8 group transition-all duration-500 hover:shadow-2xl"
                style={{ background: cardBg, border: cardBorder, backdropFilter: 'blur(20px)', boxShadow: shadow }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${kit.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <kit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-emerald-500 font-medium px-3 py-1.5 rounded-full" style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}>
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    Available
                  </div>
                </div>
                <h2 className="font-display font-black text-2xl tracking-tight mb-3" style={{ color: fg }}>{kit.name}</h2>
                <p className="font-light mb-6" style={{ color: muted }}>{kit.description}</p>
                <div className="flex items-center gap-2 mb-6 text-sm" style={{ color: muted }}>
                  <Box className="w-4 h-4" />
                  <span className="font-medium">{kit.components} components</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {kit.categories.slice(0, 4).map((cat, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)', color: muted }}>
                      {cat}
                    </span>
                  ))}
                  {kit.categories.length > 4 && (
                    <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)', color: muted }}>
                      +{kit.categories.length - 4} more
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 font-semibold text-[#3b82f6] group-hover:gap-3 transition-all duration-300">
                  Browse Components <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            ) : (
              <div className="rounded-3xl p-8 opacity-60 relative transition-all duration-500" style={{ background: cardBg, border: cardBorder, backdropFilter: 'blur(20px)' }}>
                <div className="absolute top-6 right-6">
                  <div className="flex items-center gap-2 text-sm text-amber-500 font-medium px-3 py-1.5 rounded-full" style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)' }}>
                    <Lock className="w-3.5 h-3.5" /> Coming Soon
                  </div>
                </div>
                <div className={`w-16 h-16 bg-gradient-to-br ${kit.color} rounded-2xl flex items-center justify-center shadow-lg mb-6 opacity-50`}>
                  <kit.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="font-display font-black text-2xl tracking-tight mb-3" style={{ color: fg }}>{kit.name}</h2>
                <p className="font-light mb-6" style={{ color: muted }}>{kit.description}</p>
                <div className="flex items-center gap-2 mb-6 text-sm" style={{ color: muted }}>
                  <Box className="w-4 h-4" />
                  <span className="font-medium">{kit.components} components</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {kit.categories.slice(0, 4).map((cat, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)', color: muted }}>
                      {cat}
                    </span>
                  ))}
                </div>
                <div className="font-medium" style={{ color: muted }}>Coming Soon</div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 text-center">
        <div
          className="rounded-3xl p-8 sm:p-12"
          style={{
            background: dark ? 'linear-gradient(135deg,rgba(59,130,246,0.18) 0%,rgba(139,92,246,0.18) 100%)' : 'linear-gradient(135deg,rgba(219,234,254,0.85) 0%,rgba(237,233,254,0.85) 100%)',
            border: dark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.07)',
            backdropFilter: 'blur(24px)',
          }}
        >
          <h2 className="font-display font-black text-2xl sm:text-3xl tracking-tight mb-4" style={{ color: fg }}>Want to suggest a new kit?</h2>
          <p className="font-light mb-8 max-w-xl mx-auto" style={{ color: muted }}>
            We're always looking to add new component kits. Let us know what you'd like to see!
          </p>
          <button
            className="px-8 py-4 text-white font-semibold rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)' }}
          >
            Share Your Ideas
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default function KitsPage() {
  return (
    <PageShell backTo="home" backLabel="Home">
      <KitsContent />
    </PageShell>
  );
}