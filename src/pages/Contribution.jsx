import React from 'react';
import { motion } from 'framer-motion';
import {
  Github, Heart, Star, GitPullRequest, MessageSquare,
  Users, Sparkles, CheckCircle, Code, Terminal
} from 'lucide-react';
import PageShell, { useDarkMode } from '../components/ui-kit/PageShell';

// ── Glass card wrapper ──────────────────────────────────────
function GlassCard({ children, className = '' }) {
  const { dark } = useDarkMode();
  return (
    <div
      className={`rounded-3xl p-6 sm:p-8 ${className}`}
      style={{
        background: dark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.75)',
        border: dark ? '1px solid rgba(255,255,255,0.09)' : '1px solid rgba(0,0,0,0.07)',
        backdropFilter: 'blur(20px)',
        boxShadow: dark ? '0 8px 32px 0 rgba(0,0,0,0.3)' : '0 8px 32px 0 rgba(31,38,135,0.07)',
      }}
    >
      {children}
    </div>
  );
}

// ── Section heading ─────────────────────────────────────────
function SectionHeading({ icon: Icon, children }) {
  const { dark, fg } = useDarkMode();
  return (
    <h2 className="font-display font-black text-2xl sm:text-3xl tracking-tight mb-8 flex items-center gap-3" style={{ color: fg }}>
      <span className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(59,130,246,0.15)' }}>
        <Icon className="w-5 h-5 text-[#3b82f6]" />
      </span>
      {children}
    </h2>
  );
}

function ContributionContent() {
  const { dark, fg, muted } = useDarkMode();

  const accentBg = dark ? 'rgba(59,130,246,0.12)' : 'rgba(219,234,254,0.7)';
  const accentBorder = dark ? '1px solid rgba(59,130,246,0.25)' : '1px solid rgba(147,197,253,0.6)';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">

      {/* ── Hero ──────────────────────────────────────────── */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="text-center mb-16 sm:mb-20">
        <div className="w-20 h-20 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-xl shadow-blue-500/20" style={{ background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)' }}>
          <Users className="w-10 h-10 text-white" />
        </div>
        <h1 className="font-display font-black text-5xl sm:text-6xl tracking-tight mb-4" style={{ color: fg }}>
          Contribution
        </h1>
        <p className="text-lg sm:text-xl font-light max-w-2xl mx-auto" style={{ color: muted }}>
          Help us build the future of <span className="font-semibold" style={{ color: '#3b82f6' }}>LiqUId</span>. Every contribution counts!
        </p>
      </motion.div>

      {/* ── Why Contribute ────────────────────────────────── */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 sm:mb-20">
        <div className="rounded-3xl p-6 sm:p-8" style={{ background: accentBg, border: accentBorder, backdropFilter: 'blur(20px)' }}>
          <h2 className="font-display font-black text-2xl sm:text-3xl tracking-tight mb-4 flex items-center gap-3" style={{ color: fg }}>
            <Sparkles className="w-7 h-7 text-[#3b82f6]" />
            Join the Community
          </h2>
          <p className="text-base sm:text-lg leading-relaxed font-light mb-6" style={{ color: dark ? '#cbd5e1' : '#334155' }}>
            LiqUId is an open-source project driven by the community. Whether you're a developer, designer, or just a fan, there are many ways to help us grow and improve.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              ['Open Source', 'Everything is free and transparent'],
              ['Community Driven', 'Your feedback shapes our roadmap'],
              ['Build Together', 'Collaborate with developers worldwide'],
              ['Recognition', 'Get featured as a contributor'],
            ].map(([title, desc]) => (
              <div key={title} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#06b6d4]" />
                <div>
                  <strong className="block text-sm font-semibold" style={{ color: fg }}>{title}</strong>
                  <p className="text-sm font-light" style={{ color: muted }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Ways to Contribute ────────────────────────────── */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 sm:mb-20">
        <SectionHeading icon={Github}>Ways to Contribute</SectionHeading>
        <div className="grid gap-6">
          
          {/* GitHub Starring */}
          <GlassCard>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-yellow-500/10 border border-yellow-500/20">
                <Star className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl tracking-tight" style={{ color: fg }}>Star the Repository</h3>
                <p className="text-sm font-light" style={{ color: muted }}>The simplest way to show your support.</p>
              </div>
            </div>
            <p className="text-sm font-light mb-6 leading-relaxed" style={{ color: muted }}>
              Starring the project on GitHub helps increase its visibility and attracts more contributors. It's a small gesture that makes a huge difference in our growth.
            </p>
            <a 
              href="https://github.com/NishantGits/LiqUId" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 text-white font-semibold text-sm transition-all hover:scale-105"
            >
              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              Star on GitHub
            </a>
          </GlassCard>

          {/* Pull Requests */}
          <GlassCard>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-blue-500/10 border border-blue-500/20">
                <GitPullRequest className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl tracking-tight" style={{ color: fg }}>Submit a Pull Request</h3>
                <p className="text-sm font-light" style={{ color: muted }}>Fix bugs or add new components.</p>
              </div>
            </div>
            <p className="text-sm font-light mb-6 leading-relaxed" style={{ color: muted }}>
              Found a bug? Have a cool component idea? Fork the repo, make your changes, and submit a PR. We review every submission and love seeing new ideas!
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm font-mono p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10">
                <Terminal className="w-4 h-4 text-[#3b82f6]" />
                <span style={{ color: muted }}>git clone https://github.com/NishantGits/LiqUId.git</span>
              </div>
              <a 
                href="https://github.com/NishantGits/LiqUId" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-500 text-white font-semibold text-sm transition-all hover:scale-105"
              >
                <Code className="w-4 h-4" />
                View Repository
              </a>
            </div>
          </GlassCard>

          {/* Sponsoring */}
          <GlassCard>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-pink-500/10 border border-pink-500/20">
                <Heart className="w-6 h-6 text-pink-500" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl tracking-tight" style={{ color: fg }}>Become a Sponsor</h3>
                <p className="text-sm font-light" style={{ color: muted }}>Support the long-term sustainability.</p>
              </div>
            </div>
            <p className="text-sm font-light mb-6 leading-relaxed" style={{ color: muted }}>
              Financial support helps us cover hosting costs, domain fees, and allows us to dedicate more time to building new features and components.
            </p>
            <a 
              href="https://github.com/sponsors/NishantGits" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-pink-500 text-white font-semibold text-sm transition-all hover:scale-105"
            >
              <Heart className="w-4 h-4 fill-white" />
              Sponsor Project
            </a>
          </GlassCard>

        </div>
      </motion.section>

      {/* ── Feedback ──────────────────────────────────────── */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 sm:mb-20">
        <SectionHeading icon={MessageSquare}>Feedback & Issues</SectionHeading>
        <GlassCard>
          <p className="text-sm font-light leading-relaxed mb-6" style={{ color: muted }}>
            Not a developer? You can still contribute by reporting bugs or suggesting new features through GitHub Issues. Your feedback is invaluable for making LiqUId better for everyone.
          </p>
          <div className="flex flex-wrap gap-3">
            <a 
              href="https://github.com/NishantGits/LiqUId/issues" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-xl text-sm font-medium border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              style={{ color: fg }}
            >
              Report a Bug
            </a>
            <a 
              href="https://github.com/NishantGits/LiqUId/issues" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-xl text-sm font-medium border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              style={{ color: fg }}
            >
              Request a Feature
            </a>
          </div>
        </GlassCard>
      </motion.section>

      {/* ── Final CTA ─────────────────────────────────────── */}
      <motion.section initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
        <div
          className="rounded-3xl p-8 sm:p-12 text-center"
          style={{
            background: dark
              ? 'linear-gradient(135deg,rgba(59,130,246,0.18) 0%,rgba(139,92,246,0.18) 100%)'
              : 'linear-gradient(135deg,rgba(219,234,254,0.85) 0%,rgba(237,233,254,0.85) 100%)',
            border: dark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.07)',
            backdropFilter: 'blur(24px)',
          }}
        >
          <Sparkles className="w-12 h-12 mx-auto mb-5 text-[#3b82f6]" />
          <h2 className="font-display font-black text-2xl sm:text-3xl tracking-tight mb-3" style={{ color: fg }}>Ready to Contribute?</h2>
          <p className="text-base font-light mb-8" style={{ color: muted }}>
            Join our growing community and help us build the best UI library.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/NishantGits/LiqUId"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:scale-105 flex items-center gap-2"
              style={{ background: dark ? '#f8fafc' : '#0f172a', color: dark ? '#0f172a' : '#f8fafc' }}
            >
              <Github className="w-4 h-4" />
              Go to GitHub
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default function ContributionPage() {
  return (
    <PageShell backTo="home" backLabel="Home">
      <ContributionContent />
    </PageShell>
  );
}
