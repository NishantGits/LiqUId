import React from 'react';
import { Mail, ArrowRight, Lock, User, Github, Chrome } from 'lucide-react';

export const logins = [
  {
    id: 'magic-link',
    title: 'Magic Link Login',
    component: (
      <div className="w-80 bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Sign in with email</h2>
        <p className="text-slate-500 text-sm mb-6">We'll send you a magic link to sign in instantly</p>
        <div className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input type="email" placeholder="Enter your email" className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-theme focus:outline-none focus:ring-2 focus:ring-theme-primary" />
          </div>
          <button className="w-full py-3 bg-theme-primary text-white font-medium rounded-theme hover:opacity-90 transition-all flex items-center justify-center gap-2">
            Send Magic Link <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="mt-6 p-4 bg-theme-primary/10 rounded-theme">
          <p className="text-sm text-theme-primary">
            <span className="font-medium">No password required!</span> We'll email you a link that signs you in automatically.
          </p>
        </div>
      </div>
    ),
    code: `<div className="w-80 bg-white rounded-2xl shadow-xl p-8">
  <h2 className="text-2xl font-bold mb-2">Sign in with email</h2>
  <p className="text-slate-500 text-sm mb-6">We'll send you a magic link...</p>
  <div className="space-y-4">
    <input type="email" placeholder="Enter your email" className="..." />
    <button className="w-full py-3 bg-theme-primary text-white rounded-theme flex items-center justify-center gap-2">
      Send Magic Link <ArrowRight className="w-4 h-4" />
    </button>
  </div>
</div>`
  },
  {
    id: 'social-login',
    title: 'Social Login',
    component: (
      <div className="w-80 bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Welcome back</h2>
        <div className="space-y-3">
          <button className="w-full py-3 border border-slate-200 rounded-theme flex items-center justify-center gap-3 hover:bg-slate-50 transition-all">
            <Chrome className="w-5 h-5 text-red-500" />
            <span className="text-sm font-medium text-slate-700">Continue with Google</span>
          </button>
          <button className="w-full py-3 bg-[#24292F] text-white rounded-theme flex items-center justify-center gap-3 hover:opacity-90 transition-all">
            <Github className="w-5 h-5" />
            <span className="text-sm font-medium">Continue with GitHub</span>
          </button>
        </div>
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-slate-500">Or continue with</span>
          </div>
        </div>
        <div className="space-y-4">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input type="text" placeholder="Username" className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-theme focus:outline-none focus:ring-2 focus:ring-theme-primary" />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input type="password" placeholder="Password" className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-theme focus:outline-none focus:ring-2 focus:ring-theme-primary" />
          </div>
          <button className="w-full py-3 bg-theme-primary text-white font-medium rounded-theme hover:opacity-90 transition-all">
            Sign In
          </button>
        </div>
      </div>
    ),
    code: `<div className="w-80 bg-white rounded-2xl shadow-xl p-8">
  <h2 className="text-2xl font-bold mb-6 text-center">Welcome back</h2>
  <div className="space-y-3">
    <button className="...">Continue with Google</button>
    <button className="...">Continue with GitHub</button>
  </div>
  {/* ... form fields ... */}
</div>`
  }
];
