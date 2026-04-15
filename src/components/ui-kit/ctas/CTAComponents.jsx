import React from 'react';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

export const ctas = [
  {
    id: 'gradient-cta',
    title: 'Gradient CTA',
    component: (
      <div className="bg-gradient-to-r from-theme-primary to-theme-secondary rounded-theme p-8 text-center text-white max-w-2xl">
        <h3 className="text-2xl font-bold mb-3">Ready to get started?</h3>
        <p className="text-indigo-100 mb-6">Join thousands of users today.</p>
        <button className="px-6 py-3 bg-white text-theme-primary rounded-theme font-medium hover:bg-indigo-50">
          Get Started Free
        </button>
      </div>
    ),
    code: `<div class="bg-gradient-to-r from-theme-primary to-theme-secondary rounded-theme p-8 text-center text-white max-w-2xl">
  <h3 class="text-2xl font-bold mb-3">Ready to get started?</h3>
  <p class="text-indigo-100 mb-6">Join thousands of users today.</p>
  <button class="px-6 py-3 bg-white text-theme-primary rounded-theme font-medium hover:bg-indigo-50">Get Started Free</button>
</div>`
  },
  {
    id: 'two-column-cta',
    title: 'Two Column CTA',
    component: (
      <div className="bg-slate-900 rounded-theme p-8 flex items-center justify-between max-w-3xl">
        <div className="text-white">
          <h3 className="text-xl font-bold mb-2">Build faster with LiqUId</h3>
          <p className="text-slate-400">Over 100+ components ready to use</p>
        </div>
        <button className="px-6 py-3 bg-theme-primary text-white rounded-theme font-medium flex items-center gap-2 hover:opacity-90 transition-all">
          Get Started <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    ),
    code: `<div class="bg-slate-900 rounded-theme p-8 flex items-center justify-between max-w-3xl">
  <div class="text-white">
    <h3 class="text-xl font-bold mb-2">Build faster with LiqUId</h3>
    <p class="text-slate-400">Over 100+ components ready to use</p>
  </div>
  <button class="px-6 py-3 bg-theme-primary text-white rounded-theme font-medium hover:opacity-90 transition-all">Get Started →</button>
</div>`
  },
  {
    id: 'bordered-cta',
    title: 'Bordered CTA',
    component: (
      <div className="border-4 border-theme-primary rounded-theme p-8 text-center max-w-2xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-theme-primary/10 text-theme-primary rounded-full text-sm font-medium mb-4">
          <Sparkles className="w-4 h-4" /> Limited Offer
        </div>
        <h3 className="text-2xl font-bold mb-3">50% Off for Early Users</h3>
        <button className="px-6 py-3 bg-theme-primary text-white rounded-theme font-medium hover:opacity-90 transition-all">Claim Discount</button>
      </div>
    ),
    code: `<div class="border-4 border-theme-primary rounded-theme p-8 text-center max-w-2xl">
  <span class="inline-block px-4 py-2 bg-theme-primary/10 text-theme-primary rounded-full text-sm font-medium mb-4">⚡ Limited Offer</span>
  <h3 class="text-2xl font-bold mb-3">50% Off for Early Users</h3>
  <button class="px-6 py-3 bg-theme-primary text-white rounded-theme font-medium">Claim Discount</button>
</div>`
  },
  {
    id: 'minimal-cta',
    title: 'Minimal CTA',
    component: (
      <div className="bg-slate-50 rounded-2xl p-8 text-center max-w-xl">
        <h3 className="text-xl font-semibold mb-6">Start your free trial</h3>
        <div className="flex gap-3 justify-center">
          <input type="email" placeholder="Enter your email" className="px-4 py-3 border rounded-xl flex-1 max-w-xs" />
          <button className="px-6 py-3 bg-slate-900 text-white rounded-xl font-medium">Sign Up</button>
        </div>
      </div>
    ),
    code: `<div class="bg-slate-50 rounded-2xl p-8 text-center max-w-xl">
  <h3 class="text-xl font-semibold mb-6">Start your free trial</h3>
  <div class="flex gap-3 justify-center">
    <input type="email" placeholder="Enter your email" class="px-4 py-3 border rounded-xl flex-1 max-w-xs" />
    <button class="px-6 py-3 bg-slate-900 text-white rounded-xl font-medium">Sign Up</button>
  </div>
</div>`
  },
  {
    id: 'icon-cta',
    title: 'Icon CTA',
    component: (
      <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-8 text-center max-w-md">
        <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Zap className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-2">Supercharge Your Workflow</h3>
        <p className="text-slate-600 mb-6">Get access to premium features</p>
        <button className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-medium">Upgrade Now</button>
      </div>
    ),
    code: `<div class="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-8 text-center max-w-md">
  <div class="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
    <span class="text-3xl text-white">⚡</span>
  </div>
  <h3 class="text-xl font-bold mb-2">Supercharge Your Workflow</h3>
  <p class="text-slate-600 mb-6">Get access to premium features</p>
  <button class="px-6 py-3 bg-emerald-600 text-white rounded-xl font-medium">Upgrade Now</button>
</div>`
  },
  {
    id: 'split-cta',
    title: 'Split CTA',
    component: (
      <div className="grid grid-cols-2 gap-4 max-w-2xl">
        <div className="bg-slate-900 text-white rounded-xl p-6 text-center">
          <h4 className="font-bold mb-2">For Individuals</h4>
          <p className="text-sm text-slate-400 mb-4">$9/month</p>
          <button className="w-full py-2 bg-white text-slate-900 rounded-lg font-medium">Start Free</button>
        </div>
        <div className="bg-indigo-600 text-white rounded-xl p-6 text-center">
          <h4 className="font-bold mb-2">For Teams</h4>
          <p className="text-sm text-indigo-200 mb-4">$29/month</p>
          <button className="w-full py-2 bg-white text-indigo-600 rounded-lg font-medium">Get Started</button>
        </div>
      </div>
    ),
    code: `<div class="grid grid-cols-2 gap-4 max-w-2xl">
  <div class="bg-slate-900 text-white rounded-xl p-6 text-center">
    <h4 class="font-bold mb-2">For Individuals</h4>
    <p class="text-sm text-slate-400 mb-4">$9/month</p>
    <button class="w-full py-2 bg-white text-slate-900 rounded-lg font-medium">Start Free</button>
  </div>
  <div class="bg-indigo-600 text-white rounded-xl p-6 text-center">
    <h4 class="font-bold mb-2">For Teams</h4>
    <p class="text-sm text-indigo-200 mb-4">$29/month</p>
    <button class="w-full py-2 bg-white text-indigo-600 rounded-lg font-medium">Get Started</button>
  </div>
</div>`
  },
  {
    id: 'banner-cta',
    title: 'Banner CTA',
    component: (
      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 flex items-center justify-between max-w-3xl">
        <div className="flex items-center gap-4">
          <span className="text-3xl">🎉</span>
          <div>
            <h4 className="font-bold">New Features Available!</h4>
            <p className="text-sm text-slate-600">Check out what's new in v2.0</p>
          </div>
        </div>
        <button className="px-4 py-2 bg-amber-600 text-white rounded-lg font-medium">Learn More</button>
      </div>
    ),
    code: `<div class="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6 flex items-center justify-between max-w-3xl">
  <div class="flex items-center gap-4">
    <span class="text-3xl">🎉</span>
    <div>
      <h4 class="font-bold">New Features Available!</h4>
      <p class="text-sm text-slate-600">Check out what's new in v2.0</p>
    </div>
  </div>
  <button class="px-4 py-2 bg-amber-600 text-white rounded-lg font-medium">Learn More</button>
</div>`
  },
  {
    id: 'urgency-cta',
    title: 'Urgency CTA',
    component: (
      <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 text-center max-w-md">
        <div className="text-4xl mb-4">⏰</div>
        <h3 className="text-xl font-bold mb-2">Limited Time Offer</h3>
        <p className="text-slate-600 mb-4">Expires in 24 hours</p>
        <button className="px-6 py-3 bg-red-600 text-white rounded-xl font-medium w-full">Claim Now</button>
      </div>
    ),
    code: `<div class="bg-red-50 border-2 border-red-200 rounded-2xl p-8 text-center max-w-md">
  <div class="text-4xl mb-4">⏰</div>
  <h3 class="text-xl font-bold mb-2">Limited Time Offer</h3>
  <p class="text-slate-600 mb-4">Expires in 24 hours</p>
  <button class="px-6 py-3 bg-red-600 text-white rounded-xl font-medium w-full">Claim Now</button>
</div>`
  },
  {
    id: 'social-proof-cta',
    title: 'Social Proof CTA',
    component: (
      <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 text-center max-w-lg">
        <div className="flex -space-x-3 justify-center mb-4">
          {[1,2,3,4].map(i => (
            <img key={i} src={`https://i.pravatar.cc/60?img=${i}`} className="w-12 h-12 rounded-full border-4 border-white" alt="" />
          ))}
        </div>
        <h3 className="text-xl font-bold mb-2">Join 10,000+ Users</h3>
        <p className="text-slate-600 mb-6">Start building amazing products today</p>
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium">Get Started Free</button>
      </div>
    ),
    code: `<div class="bg-white border-2 border-slate-200 rounded-2xl p-8 text-center max-w-lg">
  <div class="flex -space-x-3 justify-center mb-4">
    <img src="https://i.pravatar.cc/60?img=1" class="w-12 h-12 rounded-full border-4 border-white" />
    <img src="https://i.pravatar.cc/60?img=2" class="w-12 h-12 rounded-full border-4 border-white" />
    <img src="https://i.pravatar.cc/60?img=3" class="w-12 h-12 rounded-full border-4 border-white" />
    <img src="https://i.pravatar.cc/60?img=4" class="w-12 h-12 rounded-full border-4 border-white" />
  </div>
  <h3 class="text-xl font-bold mb-2">Join 10,000+ Users</h3>
  <p class="text-slate-600 mb-6">Start building amazing products today</p>
  <button class="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium">Get Started Free</button>
</div>`
  },
  {
    id: 'video-cta',
    title: 'Video CTA',
    component: (
      <div className="bg-slate-900 rounded-2xl p-8 text-center text-white max-w-2xl">
        <h3 className="text-2xl font-bold mb-3">See LiqUId in Action</h3>
        <p className="text-slate-400 mb-6">Watch our 2-minute demo video</p>
        <button className="px-6 py-3 bg-white text-slate-900 rounded-xl font-medium flex items-center gap-2 mx-auto">
          <span className="text-xl">▶</span> Watch Demo
        </button>
      </div>
    ),
    code: `<div class="bg-slate-900 rounded-2xl p-8 text-center text-white max-w-2xl">
  <h3 class="text-2xl font-bold mb-3">See LiqUId in Action</h3>
  <p class="text-slate-400 mb-6">Watch our 2-minute demo video</p>
  <button class="px-6 py-3 bg-white text-slate-900 rounded-xl font-medium flex items-center gap-2 mx-auto">
    <span class="text-xl">▶</span> Watch Demo
  </button>
</div>`
  },
];