import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Heart, Sparkles, Zap, Send, Plus, Play, Loader2, Check } from 'lucide-react';

export const buttons = [
  {
    id: 'primary',
    title: 'Primary Button',
    component: (
      <button className="px-6 py-3 bg-theme-primary text-white font-medium rounded-theme hover:opacity-90 transition-all duration-200 shadow-lg shadow-theme-primary/25">
        Get Started
      </button>
    ),
    code: `<button className="px-6 py-3 bg-theme-primary text-white font-medium rounded-theme hover:opacity-90 transition-all duration-200 shadow-lg shadow-theme-primary/25">
  Get Started
</button>`
  },
  {
    id: 'gradient',
    title: 'Gradient Button',
    component: (
      <button className="px-6 py-3 bg-gradient-to-r from-theme-primary to-theme-secondary text-white font-medium rounded-theme hover:opacity-90 transition-all duration-200 shadow-lg shadow-theme-primary/25">
        <span className="flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          Magic Button
        </span>
      </button>
    ),
    code: `<button className="px-6 py-3 bg-gradient-to-r from-theme-primary to-theme-secondary text-white font-medium rounded-theme hover:opacity-90 transition-all duration-200 shadow-lg shadow-theme-primary/25">
  <span className="flex items-center gap-2">
    <Sparkles className="w-4 h-4" />
    Magic Button
  </span>
</button>`
  },
  {
    id: 'outline',
    title: 'Outline Button',
    component: (
      <button className="px-6 py-3 border-2 border-theme-primary text-theme-primary font-medium rounded-theme hover:bg-theme-primary hover:text-white transition-all duration-200">
        Learn More
      </button>
    ),
    code: `<button className="px-6 py-3 border-2 border-theme-primary text-theme-primary font-medium rounded-theme hover:bg-theme-primary hover:text-white transition-all duration-200">
  Learn More
</button>`
  },
  {
    id: 'glass',
    title: 'Glass Button',
    component: (
      <div className="bg-gradient-to-br from-theme-primary to-theme-secondary p-6 rounded-theme">
        <button className="px-6 py-3 bg-white/20 backdrop-blur-md text-white font-medium rounded-theme border border-white/30 hover:bg-white/30 transition-all duration-200">
          Glass Effect
        </button>
      </div>
    ),
    code: `<div className="bg-gradient-to-br from-theme-primary to-theme-secondary p-6 rounded-theme">
  <button className="px-6 py-3 bg-white/20 backdrop-blur-md text-white font-medium rounded-theme border border-white/30 hover:bg-white/30 transition-all duration-200">
    Glass Effect
  </button>
</div>`
  },
  {
    id: 'icon-right',
    title: 'With Icon Right',
    component: (
      <button className="px-6 py-3 bg-slate-900 text-white font-medium rounded-theme hover:bg-slate-800 transition-all duration-200 flex items-center gap-2 group">
        Continue
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    ),
    code: `<button className="px-6 py-3 bg-slate-900 text-white font-medium rounded-theme hover:bg-slate-800 transition-all duration-200 flex items-center gap-2 group">
  Continue
  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
</button>`
  },
  {
    id: 'icon-only',
    title: 'Icon Button',
    component: (
      <div className="flex gap-3">
        <button className="p-3 bg-rose-500 text-white rounded-theme hover:bg-rose-600 transition-all duration-200 shadow-lg shadow-rose-500/25">
          <Heart className="w-5 h-5" />
        </button>
        <button className="p-3 bg-amber-500 text-white rounded-theme hover:bg-amber-600 transition-all duration-200 shadow-lg shadow-amber-500/25">
          <Zap className="w-5 h-5" />
        </button>
        <button className="p-3 bg-emerald-500 text-white rounded-theme hover:bg-emerald-600 transition-all duration-200 shadow-lg shadow-emerald-500/25">
          <Play className="w-5 h-5" />
        </button>
      </div>
    ),
    code: `<div className="flex gap-3">
  <button className="p-3 bg-rose-500 text-white rounded-theme hover:bg-rose-600 transition-all duration-200 shadow-lg shadow-rose-500/25">
    <Heart className="w-5 h-5" />
  </button>
  <button className="p-3 bg-amber-500 text-white rounded-theme hover:bg-amber-600 transition-all duration-200 shadow-lg shadow-amber-500/25">
    <Zap className="w-5 h-5" />
  </button>
  <button className="p-3 bg-emerald-500 text-white rounded-theme hover:bg-emerald-600 transition-all duration-200 shadow-lg shadow-emerald-500/25">
    <Play className="w-5 h-5" />
  </button>
</div>`
  },
  {
    id: 'loading',
    title: 'Loading Button',
    component: (
      <button className="px-6 py-3 bg-theme-primary text-white font-medium rounded-theme flex items-center gap-2 opacity-80 cursor-wait">
        <Loader2 className="w-4 h-4 animate-spin" />
        Processing...
      </button>
    ),
    code: `<button className="px-6 py-3 bg-theme-primary text-white font-medium rounded-theme flex items-center gap-2 opacity-80 cursor-wait" disabled>
  <Loader2 className="w-4 h-4 animate-spin" />
  Processing...
</button>`
  },
  {
    id: 'success',
    title: 'Success Button',
    component: (
      <button className="px-6 py-3 bg-emerald-500 text-white font-medium rounded-theme flex items-center gap-2 shadow-lg shadow-emerald-500/25">
        <Check className="w-4 h-4" />
        Completed
      </button>
    ),
    code: `<button className="px-6 py-3 bg-emerald-500 text-white font-medium rounded-theme flex items-center gap-2 shadow-lg shadow-emerald-500/25">
  <Check className="w-4 h-4" />
  Completed
</button>`
  },
  {
    id: 'pill',
    title: 'Pill Button',
    component: (
      <button className="px-8 py-3 bg-gradient-to-r from-theme-primary to-theme-secondary text-white font-medium rounded-full hover:shadow-xl hover:shadow-theme-primary/25 transition-all duration-300 hover:-translate-y-0.5">
        Subscribe Now
      </button>
    ),
    code: `<button className="px-8 py-3 bg-gradient-to-r from-theme-primary to-theme-secondary text-white font-medium rounded-full hover:shadow-xl hover:shadow-theme-primary/25 transition-all duration-300 hover:-translate-y-0.5">
  Subscribe Now
</button>`
  },
  {
    id: 'floating',
    title: 'Floating Action',
    component: (
      <button className="p-4 bg-theme-primary text-white rounded-full shadow-2xl shadow-theme-primary/40 hover:shadow-theme-primary/60 hover:scale-110 transition-all duration-300">
        <Plus className="w-6 h-6" />
      </button>
    ),
    code: `<button className="p-4 bg-theme-primary text-white rounded-full shadow-2xl shadow-theme-primary/40 hover:shadow-theme-primary/60 hover:scale-110 transition-all duration-300">
  <Plus className="w-6 h-6" />
</button>`
  }
];