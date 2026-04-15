import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Moon, Sun, Box, Code2, Layout, Zap, Copy, Palette, Droplets, Sparkles } from 'lucide-react';

const featureCards = [
  { icon: Box,    color: '#3b82f6', title: '3D Components', desc: 'Interactive 3D elements that bring your site to life with zero performance cost.' },
  { icon: Code2,  color: '#8b5cf6', title: 'React & HTML',  desc: 'Copy-paste ready code for both React (Motion) and pure HTML/CSS environments.' },
  { icon: Layout, color: '#06b6d4', title: 'Full Templates', desc: 'Production-ready landing pages designed for high conversion and premium feel.' },
];

const categories = [
  { id: 'buttons',    name: 'Buttons',       count: 10 },
  { id: 'cards',      name: 'Cards',         count: 10 },
  { id: 'inputs',     name: 'Inputs',        count: 10 },
  { id: 'forms',      name: 'Forms',         count: 10 },
  { id: 'navigation', name: 'Navigation',    count: 10 },
  { id: 'alerts',     name: 'Alerts',        count: 10 },
  { id: 'logins',     name: 'Login Pages',   count: 10 },
  { id: 'sections',   name: 'Sections',      count: 10 },
  { id: 'badges',     name: 'Badges',        count: 10 },
  { id: 'avatars',    name: 'Avatars',       count: 10 },
  { id: 'emails',     name: 'Emails',        count: 10 },
  { id: 'ctas',       name: 'CTAs',          count: 10 },
  { id: 'heroes',     name: 'Heroes',        count: 10 },
];

const navLinks = [
  { label: 'Components', to: 'KitsStandard' },
  { label: 'Templates',  to: 'Kits' },
  { label: 'Showcase',   to: '#' },
  { label: 'Docs',       to: 'Docs' },
];

// Animated liquid blob
function Blob({ style, dark, color, delay = 0 }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        filter: 'blur(120px)',
        opacity: dark ? 0.18 : 0.22,
        background: color,
        ...style,
      }}
      animate={{
        scale: [1, 1.3, 1],
        x: [0, 30, -20, 0],
        y: [0, -40, 20, 0],
        rotate: [0, 15, -10, 0],
      }}
      transition={{
        duration: 14,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

export default function HomePage() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  const bg = dark
    ? 'radial-gradient(ellipse at 60% 0%, #16103a 0%, #0d0d1a 55%, #080810 100%)'
    : 'radial-gradient(ellipse at 65% -10%, #dbeafe 0%, #ede9fb 40%, #f5f0ff 70%, #fdf4ff 100%)';

  const fg      = dark ? '#f1f5f9' : '#0f172a';
  const muted   = dark ? '#94a3b8' : '#64748b';
  const cardBg  = dark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.75)';
  const cardBorder = dark ? '1px solid rgba(255,255,255,0.09)' : '1px solid rgba(0,0,0,0.07)';

  return (
    <div
      className="min-h-screen font-sans transition-colors duration-500"
      style={{ background: bg, color: fg }}
    >
      {/* ── ANIMATED LIQUID BLOBS ─────────────────────────────── */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <Blob dark={dark} delay={0}  color="#3b82f6" style={{ width: 800, height: 700, top: -300, right: -200 }} />
        <Blob dark={dark} delay={4}  color="#8b5cf6" style={{ width: 600, height: 600, top: '30%', left: -200 }} />
        <Blob dark={dark} delay={8}  color="#06b6d4" style={{ width: 700, height: 600, bottom: -200, right: '10%' }} />
        {/* Noise overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '256px 256px',
            opacity: dark ? 0.08 : 0.04,
            mixBlendMode: 'overlay',
          }}
        />
      </div>

      {/* ── NAVBAR ────────────────────────────────────────────── */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-50 w-full px-4 sm:px-6 pt-6"
      >
        <div
          className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between rounded-[2rem] glass"
          style={{
            border: dark ? '1px solid rgba(255,255,255,0.09)' : '1px solid rgba(255,255,255,0.3)',
            boxShadow: dark
              ? '0 8px 32px 0 rgba(0,0,0,0.3)'
              : '0 8px 32px 0 rgba(31,38,135,0.07)',
          }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 relative overflow-hidden group"
              style={{ background: 'linear-gradient(135deg,#3b82f6,#06b6d4)' }}
            >
              <Droplets className="w-5 h-5 text-white relative z-10" />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <span className="text-xl font-display font-bold tracking-tight">
              <span style={{ color: fg }}>Liq</span>
              <span style={{ background: 'linear-gradient(90deg,#3b82f6,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>UId</span>
            </span>
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(({ label, to }) => (
              <Link
                key={label}
                to={to === '#' ? '#' : createPageUrl(to)}
                className="text-sm font-medium transition-colors duration-200 hover:text-[#06b6d4]"
                style={{ color: muted }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setDark(!dark)}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                background: dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                color: dark ? '#fbbf24' : '#3b82f6',
                border: dark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.08)',
              }}
            >
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.06)',
                color: fg,
                border: dark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
              }}
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      </motion.header>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative z-10 pt-20 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">

          {/* Pill badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-10"
            style={{
              background: dark ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.85)',
              border: dark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.08)',
              color: muted,
              backdropFilter: 'blur(12px)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse" />
            LiqUId v2.0 is now live
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="font-display font-black leading-[1.04] tracking-tight mb-6"
            style={{ fontSize: 'clamp(44px, 8vw, 90px)', color: fg }}
          >
            Build{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 55%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Professional
            </span>
            <br />
            Interfaces in Seconds.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="text-lg font-light leading-relaxed mb-12 max-w-xl mx-auto"
            style={{ color: muted }}
          >
            The open-source library of glossy, animated, and high-performance
            React &amp; HTML components for your next big product.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35 }}
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            <Link
              to={createPageUrl('Kits')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                background: dark ? '#f8fafc' : '#0f172a',
                color: dark ? '#0f172a' : '#f8fafc',
                boxShadow: dark ? '0 0 30px rgba(248,250,252,0.15)' : '0 0 30px rgba(15,23,42,0.2)',
              }}
            >
              Get Started Free <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to={createPageUrl('Kits')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
              style={{
                background: dark ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.9)',
                border: dark ? '1px solid rgba(255,255,255,0.13)' : '1px solid rgba(0,0,0,0.1)',
                color: fg,
                backdropFilter: 'blur(12px)',
              }}
            >
              Browse Kits
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURE CARDS ─────────────────────────────────────── */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featureCards.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1"
              style={{
                background: cardBg,
                border: cardBorder,
                backdropFilter: 'blur(20px)',
                boxShadow: dark
                  ? '0 8px 32px 0 rgba(0,0,0,0.3)'
                  : '0 8px 32px 0 rgba(31,38,135,0.07)',
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${f.color}18` }}
              >
                <f.icon className="w-5 h-5" style={{ color: f.color }} />
              </div>
              <h3 className="font-display font-bold text-lg mb-2 tracking-tight" style={{ color: fg }}>
                {f.title}
              </h3>
              <p className="text-sm font-light leading-relaxed" style={{ color: muted }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── KITS SECTION ─────────────────────────────────────── */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight mb-4" style={{ color: fg }}>
            Component <span className="text-gradient">Kits</span>
          </h2>
          <p className="text-lg font-light max-w-2xl mx-auto" style={{ color: muted }}>
            Choose from our curated collection of component kits, designed for high-performance and visual delight.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Standard Kit */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <Link
              to={createPageUrl('KitsStandard')}
              className="block rounded-[2.5rem] p-8 group transition-all duration-500 hover:shadow-2xl glass relative overflow-hidden"
              style={{ border: cardBorder, boxShadow: dark ? '0 8px 32px 0 rgba(0,0,0,0.3)' : '0 8px 32px 0 rgba(31,38,135,0.07)' }}
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <Box className="w-8 h-8 text-white" />
                </div>
                <div className="flex items-center gap-2 text-sm text-emerald-500 font-medium px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  Available
                </div>
              </div>
              <h3 className="font-display font-black text-2xl tracking-tight mb-3" style={{ color: fg }}>Standard Kit</h3>
              <p className="font-light mb-8 text-base" style={{ color: muted }}>130+ production-ready components built with React & Tailwind CSS.</p>
              
              <div className="flex items-center gap-2 font-semibold text-[#3b82f6] group-hover:gap-3 transition-all duration-300">
                Browse Components <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </motion.div>

          {/* Icon Kit */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <Link
              to={createPageUrl('IconKit')}
              className="block rounded-[2.5rem] p-8 group transition-all duration-500 hover:shadow-2xl glass relative overflow-hidden"
              style={{ border: cardBorder, boxShadow: dark ? '0 8px 32px 0 rgba(0,0,0,0.3)' : '0 8px 32px 0 rgba(31,38,135,0.07)' }}
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#06b6d4] to-[#3b82f6] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div className="flex items-center gap-2 text-sm text-emerald-500 font-medium px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  Available
                </div>
              </div>
              <h3 className="font-display font-black text-2xl tracking-tight mb-3" style={{ color: fg }}>Icon Kit</h3>
              <p className="font-light mb-8 text-base" style={{ color: muted }}>Thousands of 3D Fluent UI icons and emojis with copy functionality.</p>
              
              <div className="flex items-center gap-2 font-semibold text-[#3b82f6] group-hover:gap-3 transition-all duration-300">
                Explore Icons <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── WHY LIQUIDID ──────────────────────────────────────── */}
      <section
        className="relative z-10 py-24"
        style={{ borderTop: dark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.06)' }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight mb-4" style={{ color: fg }}>
              Why{' '}
              <span style={{ background: 'linear-gradient(90deg,#3b82f6,#8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                LiqUId?
              </span>
            </h2>
            <p className="text-lg font-light" style={{ color: muted }}>Everything you need to build beautiful products faster</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: Copy,    title: 'Copy & Paste Ready', desc: 'Every component comes with clean, production-ready code. Just copy and use instantly.', color: '#3b82f6' },
              { icon: Palette, title: 'Fully Customizable',  desc: 'Built with Tailwind CSS. Easily adapt colors, spacing, and styles to match your brand.', color: '#8b5cf6' },
              { icon: Zap,     title: 'Production Ready',    desc: 'Professional quality components tested in real projects. Ship faster with confidence.',   color: '#06b6d4' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1"
                style={{
                  background: cardBg,
                  border: cardBorder,
                  backdropFilter: 'blur(20px)',
                  boxShadow: dark ? '0 8px 32px 0 rgba(0,0,0,0.3)' : '0 8px 32px 0 rgba(31,38,135,0.07)',
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: `${item.color}18` }}>
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <h3 className="font-display font-bold text-lg mb-2 tracking-tight" style={{ color: fg }}>{item.title}</h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: muted }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────── */}
      <section className="relative z-10 py-16">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '130+', label: 'Components' },
            { value: '13',   label: 'Categories'  },
            { value: '100%', label: 'Free'         },
            { value: '0kb',  label: 'Bundle Size'  },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div
                className="text-4xl font-display font-black mb-1 tracking-tight"
                style={{ background: 'linear-gradient(90deg,#3b82f6,#8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                {stat.value}
              </div>
              <div className="text-sm font-medium" style={{ color: muted }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────── */}
      <section className="relative z-10 py-24 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto rounded-3xl p-12 text-center"
          style={{
            background: dark
              ? 'linear-gradient(135deg,rgba(59,130,246,0.18) 0%,rgba(139,92,246,0.18) 100%)'
              : 'linear-gradient(135deg,rgba(219,234,254,0.85) 0%,rgba(237,233,254,0.85) 100%)',
            border: dark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.07)',
            backdropFilter: 'blur(24px)',
            boxShadow: dark ? '0 8px 32px 0 rgba(0,0,0,0.3)' : '0 8px 32px 0 rgba(31,38,135,0.07)',
          }}
        >
          <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tight mb-4" style={{ color: fg }}>
            Ready to build something{' '}
            <span style={{ background: 'linear-gradient(90deg,#3b82f6,#8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              beautiful?
            </span>
          </h2>
          <p className="text-lg font-light mb-8" style={{ color: muted }}>
            Start using LiqUId components in your next project.
          </p>
          <Link
            to={createPageUrl('Kits')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
            style={{
              background: dark ? '#f8fafc' : '#0f172a',
              color: dark ? '#0f172a' : '#f8fafc',
            }}
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer
        className="relative z-10 py-10"
        style={{ borderTop: dark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.06)' }}
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center shadow shadow-blue-500/20"
              style={{ background: 'linear-gradient(135deg,#3b82f6,#06b6d4)' }}
            >
              <Droplets className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-bold text-base tracking-tight">
              <span style={{ color: fg }}>Liq</span>
              <span style={{ background: 'linear-gradient(90deg,#3b82f6,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>UId</span>
            </span>
          </div>
          <p className="text-sm font-light" style={{ color: dark ? '#475569' : '#94a3b8' }}>
            © 2026 LiqUId. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}