import React from 'react';
import { Check, X, Clock, Star, Zap, Bell, Shield, Award, Flame, Sparkles } from 'lucide-react';

export const badges = [
  {
    id: 'default',
    title: 'Default Badges',
    component: (
      <div className="flex items-center gap-3 flex-wrap">
        <span className="px-3 py-1 bg-theme-primary/10 text-theme-primary text-sm font-medium rounded-theme">Default</span>
        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-theme">Success</span>
        <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm font-medium rounded-theme">Warning</span>
        <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-theme">Error</span>
        <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-theme">Neutral</span>
      </div>
    ),
    code: `<span className="px-3 py-1 bg-theme-primary/10 text-theme-primary text-sm font-medium rounded-theme">Default</span>
<span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-theme">Success</span>
<span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm font-medium rounded-theme">Warning</span>
<span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-theme">Error</span>`
  },
  {
    id: 'with-icon',
    title: 'With Icon',
    component: (
      <div className="flex items-center gap-3 flex-wrap">
        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-theme inline-flex items-center gap-1.5">
          <Check className="w-3.5 h-3.5" /> Verified
        </span>
        <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm font-medium rounded-theme inline-flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" /> Pending
        </span>
        <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-theme inline-flex items-center gap-1.5">
          <X className="w-3.5 h-3.5" /> Declined
        </span>
        <span className="px-3 py-1 bg-theme-primary/10 text-theme-primary text-sm font-medium rounded-theme inline-flex items-center gap-1.5">
          <Star className="w-3.5 h-3.5" /> Featured
        </span>
      </div>
    ),
    code: `<span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-theme inline-flex items-center gap-1.5">
  <Check className="w-3.5 h-3.5" /> Verified
</span>`
  },
  {
    id: 'solid',
    title: 'Solid Badges',
    component: (
      <div className="flex items-center gap-3 flex-wrap">
        <span className="px-3 py-1 bg-theme-primary text-white text-sm font-medium rounded-theme">Primary</span>
        <span className="px-3 py-1 bg-emerald-600 text-white text-sm font-medium rounded-theme">Success</span>
        <span className="px-3 py-1 bg-amber-500 text-white text-sm font-medium rounded-theme">Warning</span>
        <span className="px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-theme">Error</span>
        <span className="px-3 py-1 bg-slate-900 text-white text-sm font-medium rounded-theme">Dark</span>
      </div>
    ),
    code: `<span className="px-3 py-1 bg-theme-primary text-white text-sm font-medium rounded-theme">Primary</span>
<span className="px-3 py-1 bg-emerald-600 text-white text-sm font-medium rounded-theme">Success</span>`
  },
  {
    id: 'outline',
    title: 'Outline Badges',
    component: (
      <div className="flex items-center gap-3 flex-wrap">
        <span className="px-3 py-1 border-2 border-theme-primary text-theme-primary text-sm font-medium rounded-theme">Primary</span>
        <span className="px-3 py-1 border-2 border-emerald-500 text-emerald-600 text-sm font-medium rounded-theme">Success</span>
        <span className="px-3 py-1 border-2 border-amber-500 text-amber-600 text-sm font-medium rounded-theme">Warning</span>
        <span className="px-3 py-1 border-2 border-red-500 text-red-600 text-sm font-medium rounded-theme">Error</span>
      </div>
    ),
    code: `<span className="px-3 py-1 border-2 border-theme-primary text-theme-primary text-sm font-medium rounded-theme">Primary</span>
<span className="px-3 py-1 border-2 border-emerald-500 text-emerald-600 text-sm font-medium rounded-theme">Success</span>`
  },
  {
    id: 'dot',
    title: 'With Dot',
    component: (
      <div className="flex items-center gap-3 flex-wrap">
        <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-theme inline-flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-500 rounded-full" /> Active
        </span>
        <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-theme inline-flex items-center gap-2">
          <span className="w-2 h-2 bg-amber-500 rounded-full" /> Away
        </span>
        <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-theme inline-flex items-center gap-2">
          <span className="w-2 h-2 bg-red-500 rounded-full" /> Offline
        </span>
        <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-theme inline-flex items-center gap-2">
          <span className="w-2 h-2 bg-theme-primary rounded-full animate-pulse" /> Live
        </span>
      </div>
    ),
    code: `<span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-theme inline-flex items-center gap-2">
  <span className="w-2 h-2 bg-emerald-500 rounded-full" /> Active
</span>`
  },
  {
    id: 'gradient',
    title: 'Gradient Badges',
    component: (
      <div className="flex items-center gap-3 flex-wrap">
        <span className="px-3 py-1 bg-gradient-to-r from-theme-primary to-theme-secondary text-white text-sm font-medium rounded-theme">Gradient</span>
        <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm font-medium rounded-theme">Hot</span>
        <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-medium rounded-theme">New</span>
        <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-medium rounded-theme">Pro</span>
      </div>
    ),
    code: `<span className="px-3 py-1 bg-gradient-to-r from-theme-primary to-theme-secondary text-white text-sm font-medium rounded-theme">Gradient</span>
<span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm font-medium rounded-theme">Hot</span>`
  },
  {
    id: 'premium',
    title: 'Premium Badges',
    component: (
      <div className="flex items-center gap-3 flex-wrap">
        <span className="px-3 py-1 bg-gradient-to-r from-amber-400 to-yellow-400 text-amber-900 text-sm font-bold rounded-theme inline-flex items-center gap-1.5 shadow-lg shadow-amber-500/30">
          <Award className="w-3.5 h-3.5" /> Premium
        </span>
        <span className="px-3 py-1 bg-gradient-to-r from-slate-700 to-slate-900 text-white text-sm font-bold rounded-theme inline-flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5" /> Verified
        </span>
        <span className="px-3 py-1 bg-gradient-to-r from-theme-primary to-theme-secondary text-white text-sm font-bold rounded-theme inline-flex items-center gap-1.5 shadow-lg shadow-theme-primary/30">
          <Sparkles className="w-3.5 h-3.5" /> VIP
        </span>
      </div>
    ),
    code: `<span className="px-3 py-1 bg-gradient-to-r from-amber-400 to-yellow-400 text-amber-900 text-sm font-bold rounded-theme inline-flex items-center gap-1.5 shadow-lg shadow-amber-500/30">
  <Award className="w-3.5 h-3.5" /> Premium
</span>`
  },
  {
    id: 'count',
    title: 'Count Badges',
    component: (
      <div className="flex items-center gap-6">
        <button className="relative p-2 bg-slate-100 rounded-full">
          <Bell className="w-5 h-5 text-slate-600" />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">5</span>
        </button>
        <button className="relative px-4 py-2 bg-theme-primary text-white rounded-theme">
          Messages
          <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-amber-500 text-white text-xs font-bold rounded-full">99+</span>
        </button>
        <div className="flex items-center gap-2">
          <span className="text-slate-700 font-medium">Inbox</span>
          <span className="w-6 h-6 bg-theme-primary text-white text-xs font-bold rounded-full flex items-center justify-center">12</span>
        </div>
      </div>
    ),
    code: `<button className="relative p-2 bg-slate-100 rounded-full">
  <Bell className="w-5 h-5 text-slate-600" />
  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">5</span>
</button>`
  },
  {
    id: 'removable',
    title: 'Removable Badges',
    component: (
      <div className="flex items-center gap-3 flex-wrap">
        <span className="px-3 py-1 bg-theme-primary/10 text-theme-primary text-sm font-medium rounded-theme inline-flex items-center gap-2">
          Design
          <button className="hover:bg-theme-primary/20 rounded-full p-0.5 transition-colors">
            <X className="w-3 h-3" />
          </button>
        </span>
        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-theme inline-flex items-center gap-2">
          Development
          <button className="hover:bg-emerald-200 rounded-full p-0.5 transition-colors">
            <X className="w-3 h-3" />
          </button>
        </span>
        <span className="px-3 py-1 bg-theme-secondary/10 text-theme-secondary text-sm font-medium rounded-theme inline-flex items-center gap-2">
          Marketing
          <button className="hover:bg-theme-secondary/20 rounded-full p-0.5 transition-colors">
            <X className="w-3 h-3" />
          </button>
        </span>
      </div>
    ),
    code: `<span className="px-3 py-1 bg-theme-primary/10 text-theme-primary text-sm font-medium rounded-theme inline-flex items-center gap-2">
  Design
  <button className="hover:bg-theme-primary/20 rounded-full p-0.5 transition-colors">
    <X className="w-3 h-3" />
  </button>
</span>`
  },
  {
    id: 'sizes',
    title: 'Size Variants',
    component: (
      <div className="flex items-center gap-3 flex-wrap">
        <span className="px-2 py-0.5 bg-theme-primary/10 text-theme-primary text-xs font-medium rounded-theme">Small</span>
        <span className="px-3 py-1 bg-theme-primary/10 text-theme-primary text-sm font-medium rounded-theme">Default</span>
        <span className="px-4 py-1.5 bg-theme-primary/10 text-theme-primary text-base font-medium rounded-theme">Large</span>
        <span className="px-5 py-2 bg-theme-primary/10 text-theme-primary text-lg font-medium rounded-theme">Extra Large</span>
      </div>
    ),
    code: `<span className="px-2 py-0.5 bg-theme-primary/10 text-theme-primary text-xs font-medium rounded-theme">Small</span>
<span className="px-3 py-1 bg-theme-primary/10 text-theme-primary text-sm font-medium rounded-theme">Default</span>
<span className="px-4 py-1.5 bg-theme-primary/10 text-theme-primary text-base font-medium rounded-theme">Large</span>`
  }
];