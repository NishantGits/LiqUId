import React from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';

export const heroes = [
  {
    id: 'centered-hero',
    title: 'Centered Hero',
    component: (
      <div className="bg-gradient-to-b from-slate-50 to-white py-20 px-6 text-center max-w-4xl">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">Build products faster with LiqUId</h1>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">The most beautiful UI component library for React and Tailwind CSS</p>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-theme-primary text-white rounded-theme font-medium hover:opacity-90 transition-all">Get Started</button>
          <button className="px-6 py-3 border border-slate-300 rounded-theme font-medium">View Demo</button>
        </div>
      </div>
    ),
    code: `<div class="bg-gradient-to-b from-slate-50 to-white py-20 px-6 text-center">
  <h1 class="text-5xl font-bold text-slate-900 mb-6">Build products faster with LiqUId</h1>
  <p class="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">The most beautiful UI component library</p>
  <div class="flex gap-4 justify-center">
    <button class="px-6 py-3 bg-theme-primary text-white rounded-theme font-medium">Get Started</button>
    <button class="px-6 py-3 border border-slate-300 rounded-theme font-medium">View Demo</button>
  </div>
</div>`
  },
  {
    id: 'split-hero',
    title: 'Split Hero',
    component: (
      <div className="grid md:grid-cols-2 gap-12 items-center py-16 px-6 max-w-6xl">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Ship products 10x faster</h1>
          <p className="text-lg text-slate-600 mb-6">Pre-built components that help you launch faster</p>
          <button className="px-6 py-3 bg-theme-primary text-white rounded-theme font-medium flex items-center gap-2 hover:opacity-90 transition-all">
            Get Started <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="h-64 bg-gradient-to-br from-theme-primary/10 to-theme-secondary/10 rounded-theme"></div>
      </div>
    ),
    code: `<div class="grid md:grid-cols-2 gap-12 items-center py-16 px-6">
  <div>
    <h1 class="text-4xl font-bold text-slate-900 mb-4">Ship products 10x faster</h1>
    <p class="text-lg text-slate-600 mb-6">Pre-built components that help you launch faster</p>
    <button class="px-6 py-3 bg-theme-primary text-white rounded-theme font-medium">Get Started →</button>
  </div>
  <div class="h-64 bg-gradient-to-br from-theme-primary/10 to-theme-secondary/10 rounded-theme"></div>
</div>`
  },
  {
    id: 'minimal-hero',
    title: 'Minimal Hero',
    component: (
      <div className="py-20 px-6 text-center max-w-3xl">
        <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
          ✨ Now with 100+ components
        </div>
        <h1 className="text-6xl font-bold text-slate-900 mb-6">LiqUId</h1>
        <p className="text-xl text-slate-600 mb-8">Beautiful components for modern web</p>
        <button className="px-8 py-4 bg-slate-900 text-white rounded-xl font-medium">Explore Components</button>
      </div>
    ),
    code: `<div class="py-20 px-6 text-center">
  <span class="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">✨ Now with 100+ components</span>
  <h1 class="text-6xl font-bold text-slate-900 mb-6">LiqUId</h1>
  <p class="text-xl text-slate-600 mb-8">Beautiful components for modern web</p>
  <button class="px-8 py-4 bg-slate-900 text-white rounded-xl font-medium">Explore Components</button>
</div>`
  },
  {
    id: 'gradient-hero',
    title: 'Gradient Hero',
    component: (
      <div className="bg-gradient-to-r from-indigo-600 to-violet-600 py-20 px-6 text-center text-white max-w-full">
        <h1 className="text-5xl font-bold mb-6">The future of web design is here</h1>
        <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">Transform your ideas into reality with our powerful toolkit</p>
        <button className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-medium">Start Building</button>
      </div>
    ),
    code: `<div class="bg-gradient-to-r from-indigo-600 to-violet-600 py-20 px-6 text-center text-white">
  <h1 class="text-5xl font-bold mb-6">The future of web design is here</h1>
  <p class="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">Transform your ideas into reality</p>
  <button class="px-8 py-4 bg-white text-indigo-600 rounded-xl font-medium">Start Building</button>
</div>`
  },
  {
    id: 'stats-hero',
    title: 'Hero with Stats',
    component: (
      <div className="py-20 px-6 text-center max-w-4xl">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">Trusted by thousands</h1>
        <p className="text-xl text-slate-600 mb-12">Join the community building amazing products</p>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <div className="text-4xl font-bold text-indigo-600 mb-2">10K+</div>
            <div className="text-slate-600">Active Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-indigo-600 mb-2">100+</div>
            <div className="text-slate-600">Components</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-indigo-600 mb-2">5K+</div>
            <div className="text-slate-600">GitHub Stars</div>
          </div>
        </div>
      </div>
    ),
    code: `<div class="py-20 px-6 text-center">
  <h1 class="text-5xl font-bold text-slate-900 mb-6">Trusted by thousands</h1>
  <p class="text-xl text-slate-600 mb-12">Join the community building amazing products</p>
  <div class="grid grid-cols-3 gap-8">
    <div>
      <div class="text-4xl font-bold text-indigo-600 mb-2">10K+</div>
      <div class="text-slate-600">Active Users</div>
    </div>
    <div>
      <div class="text-4xl font-bold text-indigo-600 mb-2">100+</div>
      <div class="text-slate-600">Components</div>
    </div>
    <div>
      <div class="text-4xl font-bold text-indigo-600 mb-2">5K+</div>
      <div class="text-slate-600">GitHub Stars</div>
    </div>
  </div>
</div>`
  },
  {
    id: 'video-hero',
    title: 'Video Hero',
    component: (
      <div className="py-20 px-6 text-center max-w-4xl">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">See it in action</h1>
        <p className="text-xl text-slate-600 mb-8">Watch how LiqUId can transform your workflow</p>
        <button className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-xl font-medium">
          <Play className="w-5 h-5" /> Watch Demo
        </button>
      </div>
    ),
    code: `<div class="py-20 px-6 text-center">
  <h1 class="text-5xl font-bold text-slate-900 mb-6">See it in action</h1>
  <p class="text-xl text-slate-600 mb-8">Watch how LiqUId can transform your workflow</p>
  <button class="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-xl font-medium">
    ▶ Watch Demo
  </button>
</div>`
  },
  {
    id: 'feature-hero',
    title: 'Feature Hero',
    component: (
      <div className="py-20 px-6 text-center max-w-4xl">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">Everything you need in one place</h1>
        <p className="text-xl text-slate-600 mb-12">Powerful features for modern development</p>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="p-6 bg-slate-50 rounded-xl">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-bold mb-2">Fast</h3>
            <p className="text-sm text-slate-600">Lightning-fast performance</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-xl">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="font-bold mb-2">Beautiful</h3>
            <p className="text-sm text-slate-600">Stunning designs out of the box</p>
          </div>
          <div className="p-6 bg-slate-50 rounded-xl">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-bold mb-2">Secure</h3>
            <p className="text-sm text-slate-600">Enterprise-grade security</p>
          </div>
        </div>
      </div>
    ),
    code: `<div class="py-20 px-6 text-center">
  <h1 class="text-5xl font-bold text-slate-900 mb-6">Everything you need in one place</h1>
  <p class="text-xl text-slate-600 mb-12">Powerful features for modern development</p>
  <div class="grid md:grid-cols-3 gap-6 text-left">
    <div class="p-6 bg-slate-50 rounded-xl">
      <div class="text-3xl mb-3">⚡</div>
      <h3 class="font-bold mb-2">Fast</h3>
      <p class="text-sm text-slate-600">Lightning-fast performance</p>
    </div>
    <!-- Repeat for other features -->
  </div>
</div>`
  },
  {
    id: 'testimonial-hero',
    title: 'Testimonial Hero',
    component: (
      <div className="py-20 px-6 text-center max-w-3xl">
        <div className="flex items-center gap-1 justify-center mb-4">
          {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">"The best UI kit I've ever used"</h1>
        <p className="text-lg text-slate-600 mb-6">LiqUId has saved us countless hours of development time</p>
        <div className="flex items-center gap-3 justify-center">
          <img src="https://i.pravatar.cc/60?img=10" className="w-12 h-12 rounded-full" alt="" />
          <div className="text-left">
            <div className="font-semibold">Sarah Johnson</div>
            <div className="text-sm text-slate-500">CEO at TechCorp</div>
          </div>
        </div>
      </div>
    ),
    code: `<div class="py-20 px-6 text-center">
  <div class="flex items-center gap-1 justify-center mb-4">
    <span class="text-amber-400">⭐⭐⭐⭐⭐</span>
  </div>
  <h1 class="text-4xl font-bold text-slate-900 mb-4">"The best UI kit I've ever used"</h1>
  <p class="text-lg text-slate-600 mb-6">LiqUId has saved us countless hours</p>
  <div class="flex items-center gap-3 justify-center">
    <img src="https://i.pravatar.cc/60?img=10" class="w-12 h-12 rounded-full" />
    <div class="text-left">
      <div class="font-semibold">Sarah Johnson</div>
      <div class="text-sm text-slate-500">CEO at TechCorp</div>
    </div>
  </div>
</div>`
  },
  {
    id: 'form-hero',
    title: 'Hero with Form',
    component: (
      <div className="bg-slate-50 py-20 px-6 text-center max-w-2xl rounded-2xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Start your free trial</h1>
        <p className="text-lg text-slate-600 mb-8">No credit card required. Cancel anytime.</p>
        <div className="flex gap-3 max-w-md mx-auto">
          <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 border rounded-xl" />
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium">Start Free</button>
        </div>
        <p className="text-sm text-slate-500 mt-4">14-day free trial • No credit card needed</p>
      </div>
    ),
    code: `<div class="bg-slate-50 py-20 px-6 text-center rounded-2xl">
  <h1 class="text-4xl font-bold text-slate-900 mb-4">Start your free trial</h1>
  <p class="text-lg text-slate-600 mb-8">No credit card required. Cancel anytime.</p>
  <div class="flex gap-3 max-w-md mx-auto">
    <input type="email" placeholder="Enter your email" class="flex-1 px-4 py-3 border rounded-xl" />
    <button class="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium">Start Free</button>
  </div>
  <p class="text-sm text-slate-500 mt-4">14-day free trial • No credit card needed</p>
</div>`
  },
  {
    id: 'animated-hero',
    title: 'Animated Hero',
    component: (
      <div className="py-20 px-6 text-center max-w-4xl">
        <div className="inline-block animate-pulse px-4 py-2 bg-theme-primary/10 text-theme-primary rounded-full text-sm font-medium mb-6">
          🚀 New Release v2.0
        </div>
        <h1 className="text-6xl font-bold bg-gradient-to-r from-theme-primary to-theme-secondary bg-clip-text text-transparent mb-6">
          Next-Gen UI Components
        </h1>
        <p className="text-xl text-slate-600 mb-8">Built for developers who care about design</p>
        <button className="px-8 py-4 bg-gradient-to-r from-theme-primary to-theme-secondary text-white rounded-theme font-medium hover:opacity-90 transition-all">
          Get Started Now
        </button>
      </div>
    ),
    code: `<div class="py-20 px-6 text-center">
  <span class="inline-block animate-pulse px-4 py-2 bg-theme-primary/10 text-theme-primary rounded-full text-sm font-medium mb-6">🚀 New Release v2.0</span>
  <h1 class="text-6xl font-bold bg-gradient-to-r from-theme-primary to-theme-secondary bg-clip-text text-transparent mb-6">Next-Gen UI Components</h1>
  <p class="text-xl text-slate-600 mb-8">Built for developers who care about design</p>
  <button class="px-8 py-4 bg-gradient-to-r from-theme-primary to-theme-secondary text-white rounded-theme font-medium">Get Started Now</button>
</div>`
  },
];