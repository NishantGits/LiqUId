import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import {
  BookOpen, Copy, Check, Code, Palette, Zap, Download,
  FileCode, Terminal, Package, Sparkles, CheckCircle, ArrowRight
} from 'lucide-react';
import { toast } from 'sonner';
import PageShell, { useDarkMode } from '../components/ui-kit/PageShell';

// ── Code block with copy button ────────────────────────────
function CodeBlock({ code, id, copied, onCopy, label }) {
  const { dark } = useDarkMode();
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium" style={{ color: dark ? '#cbd5e1' : '#475569' }}>{label}</span>
        <button
          onClick={() => onCopy(code, id)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
          style={{
            background: dark ? 'rgba(59,130,246,0.15)' : 'rgba(59,130,246,0.1)',
            color: '#3b82f6',
            border: '1px solid rgba(59,130,246,0.3)',
          }}
        >
          {copied === id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          {copied === id ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className="rounded-2xl p-5 overflow-x-auto" style={{ background: dark ? 'rgba(0,0,0,0.5)' : 'rgba(15,23,42,0.95)', border: dark ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
        <pre className="text-xs sm:text-sm text-slate-300 whitespace-pre font-mono leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

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

// ── Main component ──────────────────────────────────────────
function DocsContent() {
  const [copied, setCopied] = useState('');
  const { dark, fg, muted } = useDarkMode();

  const handleCopy = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopied(id);
    toast.success('Copied to clipboard!');
    setTimeout(() => setCopied(''), 2000);
  };

  const htmlExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LiqUId Component</title>
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 p-8">
  <!-- Paste your LiqUId component code here -->
  <button class="px-6 py-3 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition-all shadow-lg">
    Click Me
  </button>
</body>
</html>`;

  const reactSetup = `# Step 1: Create a new React project with Vite
npm create vite@latest my-app -- --template react
cd my-app

# Step 2: Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Step 3: Install required dependencies
npm install lucide-react framer-motion

# Step 4: Configure Tailwind (tailwind.config.js)
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]

# Step 5: Add Tailwind directives to src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

# Step 6: Start your dev server
npm run dev`;

  const tailwindConfig = `/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'liquid-blue':   '#3b82f6',
        'liquid-cyan':   '#06b6d4',
        'liquid-purple': '#8b5cf6',
      },
    },
  },
  plugins: [],
}`;

  const componentUsage = `// Copy any component from LiqUId
// Example: Using a glass button

import { Sparkles } from 'lucide-react';

function MyPage() {
  return (
    <div className="p-8">
      <button className="px-6 py-3 bg-blue-500 text-white font-medium
        rounded-full hover:scale-105 transition-all shadow-lg
        backdrop-blur-xl flex items-center gap-2">
        <Sparkles className="w-5 h-5" />
        Get Started
      </button>
    </div>
  );
}

export default MyPage;`;

  const glassUtility = `/* index.css */
@layer utilities {
  .glass {
    @apply bg-white/40 backdrop-blur-xl border border-black/5
           shadow-[0_8px_32px_0_rgba(31,38,135,0.07)];
  }
  .dark .glass {
    @apply bg-white/5 border-white/10
           shadow-[0_8px_32px_0_rgba(0,0,0,0.3)];
  }
  .text-gradient {
    @apply bg-clip-text text-transparent
           bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#8b5cf6];
  }
}`;

  const cardBorder = dark ? '1px solid rgba(255,255,255,0.09)' : '1px solid rgba(0,0,0,0.07)';
  const cardBg = dark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.75)';
  const accentBg = dark ? 'rgba(59,130,246,0.12)' : 'rgba(219,234,254,0.7)';
  const accentBorder = dark ? '1px solid rgba(59,130,246,0.25)' : '1px solid rgba(147,197,253,0.6)';
  const successBg = dark ? 'rgba(16,185,129,0.1)' : 'rgba(209,250,229,0.8)';
  const successBorder = dark ? '1px solid rgba(16,185,129,0.25)' : '1px solid rgba(110,231,183,0.6)';
  const warnBg = dark ? 'rgba(245,158,11,0.1)' : 'rgba(254,243,199,0.8)';
  const dangerBg = dark ? 'rgba(239,68,68,0.1)' : 'rgba(254,226,226,0.8)';
  const dangerBorder = dark ? '1px solid rgba(239,68,68,0.25)' : '1px solid rgba(252,165,165,0.6)';

  const faqs = [
    { 
      q: 'Do I need to install anything?', 
      a: 'For HTML projects, just include the Tailwind CDN. For React projects, you\'ll need Tailwind CSS, lucide-react for icons, and framer-motion for animations. No complex library installation is required — just copy the code you need.' 
    },
    { 
      q: 'Can I use these in commercial projects?', 
      a: 'Absolutely. LiqUId is released under the MIT license, meaning you can use it for personal, client, or commercial projects without any attribution required (though we always appreciate a shoutout!).' 
    },
    { 
      q: 'How do I change the colors and branding?', 
      a: 'Since everything is built with Tailwind CSS, you can simply swap utility classes (e.g., change "bg-blue-500" to "bg-indigo-600"). For global changes, we recommend defining your brand colors in your tailwind.config.js file.' 
    },
    { 
      q: 'Are the components accessible?', 
      a: 'We strive to make components accessible by using semantic HTML and basic ARIA attributes. However, since you own the code once you paste it, we recommend performing an accessibility audit to ensure it meets your specific project requirements.' 
    },
    { 
      q: 'Do you support TypeScript?', 
      a: 'Yes! While the examples are shown in JSX for simplicity, they are easily convertible to TSX. Most components use standard HTML element props which are well-supported in TypeScript environments.' 
    },
    { 
      q: 'How do I handle dark mode?', 
      a: 'All components are designed with dark mode in mind using Tailwind\'s "dark:" prefix. Ensure your project is configured for dark mode (usually by adding "darkMode: \'class\'" to your config) to see the effects.' 
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">

      {/* ── Hero ──────────────────────────────────────────── */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="text-center mb-16 sm:mb-20">
        <div className="w-20 h-20 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-xl shadow-blue-500/20" style={{ background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)' }}>
          <BookOpen className="w-10 h-10 text-white" />
        </div>
        <h1 className="font-display font-black text-5xl sm:text-6xl tracking-tight mb-4" style={{ color: fg }}>
          Documentation
        </h1>
        <p className="text-lg sm:text-xl font-light max-w-2xl mx-auto" style={{ color: muted }}>
          Complete guide to using <span className="font-semibold" style={{ color: '#3b82f6' }}>LiqUId</span> components in your projects
        </p>
      </motion.div>

      {/* ── What is LiqUId ────────────────────────────────── */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 sm:mb-20">
        <div className="rounded-3xl p-6 sm:p-8" style={{ background: accentBg, border: accentBorder, backdropFilter: 'blur(20px)' }}>
          <h2 className="font-display font-black text-2xl sm:text-3xl tracking-tight mb-4 flex items-center gap-3" style={{ color: fg }}>
            <Sparkles className="w-7 h-7 text-[#3b82f6]" />
            What is LiqUId?
          </h2>
          <p className="text-base sm:text-lg leading-relaxed font-light mb-6" style={{ color: dark ? '#cbd5e1' : '#334155' }}>
            LiqUId is a comprehensive UI component library with <strong className="font-bold" style={{ color: fg }}>130+ production-ready components</strong> built with React and Tailwind CSS. Every component features a glossy, liquid glassmorphism aesthetic with smooth Framer Motion animations.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              ['Copy & Paste Ready', 'No install needed, just copy the code'],
              ['Fully Customizable', 'Built with Tailwind, easy to modify'],
              ['Production Ready',   'Professional quality for real projects'],
              ['Free Forever',       '100% free and open source'],
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

      {/* ── Installation ──────────────────────────────────── */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 sm:mb-20">
        <SectionHeading icon={Package}>Installation & Setup</SectionHeading>
        <div className="space-y-6">

          {/* HTML */}
          <GlassCard>
            <div className="flex items-center gap-2 mb-4">
              <FileCode className="w-5 h-5 text-[#3b82f6]" />
              <h3 className="font-display font-bold text-lg tracking-tight" style={{ color: fg }}>Option 1 — HTML (Quickest)</h3>
            </div>
            <p className="text-sm font-light mb-5" style={{ color: muted }}>
              Perfect for static sites, prototypes, or quick demos. Include Tailwind CDN and paste component code directly.
            </p>
            <CodeBlock code={htmlExample} id="html" copied={copied} onCopy={handleCopy} label="HTML Template" />
            <div className="mt-4 rounded-xl px-4 py-3 text-sm" style={{ background: successBg, border: successBorder, color: dark ? '#6ee7b7' : '#065f46' }}>
              <strong>How to use:</strong> Copy any LiqUId component and paste it between the <code className="px-1 rounded font-mono text-xs" style={{ background: dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}>&lt;body&gt;</code> tags. Open the HTML file in your browser.
            </div>
          </GlassCard>

          {/* React */}
          <GlassCard>
            <div className="flex items-center gap-2 mb-4">
              <Code className="w-5 h-5 text-[#8b5cf6]" />
              <h3 className="font-display font-bold text-lg tracking-tight" style={{ color: fg }}>Option 2 — React (Recommended)</h3>
            </div>
            <p className="text-sm font-light mb-5" style={{ color: muted }}>
              Best for full applications. Includes proper Tailwind setup, hot reload, and optimized builds.
            </p>
            <div className="space-y-5">
              <CodeBlock code={reactSetup}    id="react"   copied={copied} onCopy={handleCopy} label="Setup Commands" />
              <CodeBlock code={tailwindConfig} id="tailwind" copied={copied} onCopy={handleCopy} label="tailwind.config.js" />
            </div>
          </GlassCard>
        </div>
      </motion.section>

      {/* ── The Glass Design System ───────────────────────── */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 sm:mb-20">
        <SectionHeading icon={Palette}>The Glass Design System</SectionHeading>
        <GlassCard>
          <p className="text-sm font-light leading-relaxed mb-5" style={{ color: muted }}>
            LiqUId uses a <strong style={{ color: fg }}>glassmorphism</strong> design language — frosted glass surfaces, liquid animated blobs, and subtle noise overlays. The <code className="font-mono text-xs px-1.5 py-0.5 rounded" style={{ background: dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.07)', color: '#06b6d4' }}>.glass</code> utility class is the foundation.
          </p>
          <CodeBlock code={glassUtility} id="glass" copied={copied} onCopy={handleCopy} label="Glass Utility CSS" />
          <div className="mt-4 rounded-xl px-4 py-3 text-sm" style={{ background: warnBg, border: dark ? '1px solid rgba(245,158,11,0.25)' : '1px solid rgba(252,211,77,0.6)', color: dark ? '#fcd34d' : '#92400e' }}>
            <strong>Tip:</strong> The three liquid palette tokens are <code className="font-mono text-xs px-1 rounded" style={{ background: dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)' }}>liquid-blue</code>, <code className="font-mono text-xs px-1 rounded" style={{ background: dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)' }}>liquid-cyan</code>, and <code className="font-mono text-xs px-1 rounded" style={{ background: dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)' }}>liquid-purple</code>.
          </div>
        </GlassCard>
      </motion.section>

      {/* ── How to Use ────────────────────────────────────── */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 sm:mb-20">
        <SectionHeading icon={Terminal}>How to Use Components</SectionHeading>
        <GlassCard>
          <ol className="space-y-5 mb-6">
            {[
              ['Browse Components', <>Go to the <Link to={createPageUrl('KitsStandard')} className="text-[#3b82f6] hover:underline">Component Kit</Link> and find what you need.</>],
              ['Click "View Code"', 'Expand the code panel below the component preview.'],
              ['Copy the Code',     'Hit the Copy button to grab the full source.'],
              ['Paste & Customize', 'Paste into your project and tweak colors, text, and spacing.'],
            ].map(([title, desc], i) => (
              <li key={i} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm text-white" style={{ background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)' }}>{i + 1}</span>
                <div>
                  <strong className="block mb-0.5 font-semibold" style={{ color: fg }}>{title}</strong>
                  <p className="text-sm font-light" style={{ color: muted }}>{desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <CodeBlock code={componentUsage} id="usage" copied={copied} onCopy={handleCopy} label="Example React Usage" />
        </GlassCard>
      </motion.section>

      {/* ── Best Practices ────────────────────────────────── */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 sm:mb-20">
        <SectionHeading icon={CheckCircle}>Best Practices</SectionHeading>
        <div className="space-y-6">
          <div className="rounded-3xl p-8" style={{ background: successBg, border: successBorder, backdropFilter: 'blur(16px)' }}>
            <h3 className="font-display font-bold text-xl mb-6 flex items-center gap-2" style={{ color: dark ? '#6ee7b7' : '#065f46' }}>
              <CheckCircle className="w-6 h-6" /> The "Do\'s" for Success
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                ['Brand Integration', 'Customize the Tailwind colors to match your brand identity. Don\'t just stick with the defaults.'],
                ['Responsive Testing', 'Test every component on actual mobile devices. Hover effects should have touch-friendly fallbacks.'],
                ['Semantic Markup', 'Use proper HTML tags (button for actions, a for links) to ensure screen readers work correctly.'],
                ['Performance First', 'Only copy the components you actually use to keep your bundle size small and efficient.'],
                ['Consistent Spacing', 'Use Tailwind\'s spacing scale (p-4, m-8, etc.) to maintain visual rhythm across your app.'],
                ['Layering & Depth', 'Use the .glass utility sparingly to create hierarchy. Not everything needs to be a glass card.'],
              ].map(([t, d]) => (
                <div key={t} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span style={{ color: dark ? '#34d399' : '#059669' }} className="font-bold">✓</span>
                    <strong style={{ color: dark ? '#a7f3d0' : '#065f46' }} className="text-sm uppercase tracking-wider">{t}</strong>
                  </div>
                  <p style={{ color: dark ? '#a7f3d0' : '#065f46', opacity: 0.8 }} className="text-sm font-light leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl p-8" style={{ background: dangerBg, border: dangerBorder, backdropFilter: 'blur(16px)' }}>
            <h3 className="font-display font-bold text-xl mb-6 flex items-center gap-2" style={{ color: dark ? '#fca5a5' : '#991b1b' }}>
              ⚠️ Common Pitfalls to Avoid
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                ['CDN in Production', 'Avoid using the Tailwind CDN for live sites. It lacks optimization and has a larger footprint.'],
                ['Over-Blurring', 'Too much backdrop-blur can impact performance on older mobile devices. Use it intentionally.'],
                ['Color Contrast', 'Ensure text remains readable over glass backgrounds. Use dark overlays or high-contrast text colors.'],
                ['Mixing Systems', 'Try not to mix LiqUId with other heavy UI frameworks to avoid CSS conflicts and bloat.'],
                ['Ignoring States', 'Don\'t forget to style focus, active, and disabled states for a truly professional feel.'],
                ['Fixed Widths', 'Avoid hardcoded pixel widths. Use percentages or Tailwind\'s max-width classes for fluidity.'],
              ].map(([t, d]) => (
                <div key={t} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span style={{ color: dark ? '#f87171' : '#dc2626' }} className="font-bold">✗</span>
                    <strong style={{ color: dark ? '#fecaca' : '#991b1b' }} className="text-sm uppercase tracking-wider">{t}</strong>
                  </div>
                  <p style={{ color: dark ? '#fecaca' : '#991b1b', opacity: 0.8 }} className="text-sm font-light leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 sm:mb-20">
        <SectionHeading icon={BookOpen}>Frequently Asked Questions</SectionHeading>
        <div className="grid gap-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
              style={{ 
                background: cardBg, 
                border: cardBorder, 
                backdropFilter: 'blur(16px)',
                boxShadow: dark ? '0 4px 20px rgba(0,0,0,0.2)' : '0 4px 20px rgba(0,0,0,0.03)'
              }}
            >
              <h3 className="font-display font-bold mb-3 text-lg tracking-tight" style={{ color: fg }}>{faq.q}</h3>
              <p className="text-base font-light leading-relaxed" style={{ color: muted }}>{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>


      {/* ── CTA ───────────────────────────────────────────── */}
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
          <Download className="w-12 h-12 mx-auto mb-5 text-[#3b82f6]" />
          <h2 className="font-display font-black text-2xl sm:text-3xl tracking-tight mb-3" style={{ color: fg }}>Ready to Start Building?</h2>
          <p className="text-base font-light mb-8" style={{ color: muted }}>
            Browse 130+ components and start shipping beautiful products today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={createPageUrl('Kits')}
              className="px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:scale-105"
              style={{ background: dark ? '#f8fafc' : '#0f172a', color: dark ? '#0f172a' : '#f8fafc' }}
            >
              Browse Kits
            </Link>
            <Link
              to={createPageUrl('KitsStandard')}
              className="px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:scale-105"
              style={{
                background: dark ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.9)',
                border: dark ? '1px solid rgba(255,255,255,0.13)' : '1px solid rgba(0,0,0,0.1)',
                color: fg,
              }}
            >
              View Components
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default function DocsPage() {
  return (
    <PageShell backTo="Home" backLabel="Home">
      <DocsContent />
    </PageShell>
  );
}