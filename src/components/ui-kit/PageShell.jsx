import React, { useState, createContext, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { Moon, Sun, Github, Droplets, ArrowLeft } from 'lucide-react';

// Theme context so children can read dark mode
export const ThemeCtx = createContext({ dark: false });
export const useDarkMode = () => useContext(ThemeCtx);

function Blob({ color, style, dark, delay = 0 }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ filter: 'blur(120px)', opacity: dark ? 0.18 : 0.22, background: color, ...style }}
      animate={{ scale: [1, 1.3, 1], x: [0, 30, -20, 0], y: [0, -40, 20, 0], rotate: [0, 15, -10, 0] }}
      transition={{ duration: 14, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

// Reusable logo wordmark — "Liq" in fg color, "UId" in cyan→blue gradient
export function LiqUIdWordmark({ dark, size = 'text-xl' }) {
  const fg = dark ? '#f1f5f9' : '#0f172a';
  return (
    <span className={`${size} font-display font-bold tracking-tight relative group`}>
      <span style={{ color: fg }}>Liq</span>
      <span className="relative">
        <span style={{ background: 'linear-gradient(90deg,#3b82f6,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>UId</span>
        <motion.span 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]"
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1 }}
        />
      </span>
    </span>
  );
}

const navLinks = [
  { label: 'Components', to: 'KitsStandard' },
  { label: 'Templates',  to: 'Kits' },
  { label: 'Docs',       to: 'Docs' },
];

export default function PageShell({ children, backTo, backLabel, stickyUntilFooter, hideFooter }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  const bg = dark
    ? 'radial-gradient(ellipse at 65% -10%,#16103a 0%,#0d0d1a 55%,#080810 100%)'
    : 'radial-gradient(ellipse at 65% -10%,#dbeafe 0%,#ede9fb 40%,#f5f0ff 70%,#fdf4ff 100%)';

  const fg      = dark ? '#f1f5f9' : '#0f172a';
  const muted   = dark ? '#94a3b8' : '#64748b';
  const navBg   = dark ? 'rgba(13,13,26,0.72)' : 'rgba(255,255,255,0.60)';
  const navBorder = dark ? '1px solid rgba(255,255,255,0.09)' : '1px solid rgba(0,0,0,0.07)';
  const shadow  = dark ? '0 8px 32px 0 rgba(0,0,0,0.3)' : '0 8px 32px 0 rgba(31,38,135,0.07)';

  return (
    <ThemeCtx.Provider value={{ dark, fg, muted }}>
      <div className="min-h-screen font-sans transition-colors duration-500 selection:bg-blue-500/30" style={{ background: bg, color: fg }}>

        {/* Animated blobs */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <Blob dark={dark} delay={0} color="#3b82f6" style={{ width: 800, height: 700, top: -300, right: -200 }} />
          <Blob dark={dark} delay={4} color="#8b5cf6" style={{ width: 600, height: 600, top: '20%', left: -200 }} />
          <Blob dark={dark} delay={8} color="#06b6d4" style={{ width: 700, height: 600, bottom: -200, right: '10%' }} />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat', backgroundSize: '256px 256px',
              opacity: dark ? 0.08 : 0.04, mixBlendMode: 'overlay',
            }}
          />
        </div>

        <div className={stickyUntilFooter ? "relative" : ""}>
          {/* Navbar */}
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="sticky top-0 z-50 w-full"
          >
            <div
              className="w-full px-6 py-4 flex items-center justify-between glass"
              style={{ borderBottom: navBorder, boxShadow: shadow }}
            >
              {/* Left: back link OR logo */}
              <div className="flex items-center gap-4">
                {backTo ? (
                  <>
                    <Link to={createPageUrl(backTo)} className="flex items-center gap-1.5 transition-colors hover:text-[#06b6d4]" style={{ color: muted }}>
                      <ArrowLeft className="w-4 h-4" />
                      <span className="text-sm font-medium hidden sm:inline">{backLabel || 'Back'}</span>
                    </Link>
                    <div className="w-px h-5" style={{ background: dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }} />
                  </>
                ) : null}
                <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30" style={{ background: 'linear-gradient(135deg,#3b82f6,#06b6d4)' }}>
                    <Droplets className="w-5 h-5 text-white" />
                  </div>
                  <LiqUIdWordmark dark={dark} />
                </Link>
              </div>

              {/* Center nav (desktop) */}
              {!backTo && (
                <nav className="hidden md:flex items-center gap-7">
                  {navLinks.map(({ label, to }) => (
                    <Link key={label} to={createPageUrl(to)} className="text-sm font-medium transition-colors duration-200 hover:text-[#06b6d4]" style={{ color: muted }}>
                      {label}
                    </Link>
                  ))}
                </nav>
              )}

              {/* Right */}
              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => setDark(!dark)}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{ background: dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)', color: dark ? '#fbbf24' : '#3b82f6', border: dark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.08)' }}
                >
                  {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
                <a
                  href="https://github.com" target="_blank" rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
                  style={{ background: dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.06)', color: fg, border: dark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)' }}
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </motion.header>

          {/* Page content */}
          <main>{children}</main>
        </div>

        {/* Footer */}
        {!hideFooter && (
          <footer className="relative z-10 py-10" style={{ borderTop: dark ? '1px solid rgba(255,255,255,0.07)' : '1px solid rgba(0,0,0,0.06)' }}>
            <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center shadow shadow-blue-500/20" style={{ background: 'linear-gradient(135deg,#3b82f6,#06b6d4)' }}>
                  <Droplets className="w-4 h-4 text-white" />
                </div>
                <LiqUIdWordmark dark={dark} size="text-base" />
              </div>
              <p className="text-sm font-light" style={{ color: dark ? '#475569' : '#94a3b8' }}>© 2026 LiqUId. All rights reserved.</p>
            </div>
          </footer>
        )}
      </div>
    </ThemeCtx.Provider>
  );
}