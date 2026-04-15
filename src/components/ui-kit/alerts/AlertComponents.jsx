import React from 'react';
import { CheckCircle2, AlertCircle, XCircle, Info, X, AlertTriangle, Bell, Zap, ArrowRight } from 'lucide-react';

export const alerts = [
  {
    id: 'success',
    title: 'Success Alert',
    component: (
      <div className="w-96 bg-emerald-50 border border-emerald-200 rounded-theme p-4 flex items-start gap-3">
        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h4 className="font-medium text-emerald-800">Success!</h4>
          <p className="text-sm text-emerald-600 mt-1">Your changes have been saved successfully.</p>
        </div>
        <button className="text-emerald-400 hover:text-emerald-600"><X className="w-4 h-4" /></button>
      </div>
    ),
    code: `<div className="w-96 bg-emerald-50 border border-emerald-200 rounded-theme p-4 flex items-start gap-3">
  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
  <div className="flex-1">
    <h4 className="font-medium text-emerald-800">Success!</h4>
    <p className="text-sm text-emerald-600 mt-1">Your changes have been saved successfully.</p>
  </div>
  <button className="text-emerald-400 hover:text-emerald-600"><X className="w-4 h-4" /></button>
</div>`
  },
  {
    id: 'error',
    title: 'Error Alert',
    component: (
      <div className="w-96 bg-red-50 border border-red-200 rounded-theme p-4 flex items-start gap-3">
        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h4 className="font-medium text-red-800">Error</h4>
          <p className="text-sm text-red-600 mt-1">Something went wrong. Please try again later.</p>
        </div>
        <button className="text-red-400 hover:text-red-600"><X className="w-4 h-4" /></button>
      </div>
    ),
    code: `<div className="w-96 bg-red-50 border border-red-200 rounded-theme p-4 flex items-start gap-3">
  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
  <div className="flex-1">
    <h4 className="font-medium text-red-800">Error</h4>
    <p className="text-sm text-red-600 mt-1">Something went wrong. Please try again later.</p>
  </div>
  <button className="text-red-400 hover:text-red-600"><X className="w-4 h-4" /></button>
</div>`
  },
  {
    id: 'warning',
    title: 'Warning Alert',
    component: (
      <div className="w-96 bg-amber-50 border border-amber-200 rounded-theme p-4 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h4 className="font-medium text-amber-800">Warning</h4>
          <p className="text-sm text-amber-600 mt-1">Your session will expire in 5 minutes.</p>
        </div>
        <button className="text-amber-400 hover:text-amber-600"><X className="w-4 h-4" /></button>
      </div>
    ),
    code: `<div className="w-96 bg-amber-50 border border-amber-200 rounded-theme p-4 flex items-start gap-3">
  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
  <div className="flex-1">
    <h4 className="font-medium text-amber-800">Warning</h4>
    <p className="text-sm text-amber-600 mt-1">Your session will expire in 5 minutes.</p>
  </div>
</div>`
  },
  {
    id: 'info',
    title: 'Info Alert',
    component: (
      <div className="w-96 bg-blue-50 border border-blue-200 rounded-theme p-4 flex items-start gap-3">
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h4 className="font-medium text-blue-800">Information</h4>
          <p className="text-sm text-blue-600 mt-1">A new version is available. Refresh to update.</p>
        </div>
        <button className="text-blue-400 hover:text-blue-600"><X className="w-4 h-4" /></button>
      </div>
    ),
    code: `<div className="w-96 bg-blue-50 border border-blue-200 rounded-theme p-4 flex items-start gap-3">
  <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
  <div className="flex-1">
    <h4 className="font-medium text-blue-800">Information</h4>
    <p className="text-sm text-blue-600 mt-1">A new version is available. Refresh to update.</p>
  </div>
</div>`
  },
  {
    id: 'toast-success',
    title: 'Toast Success',
    component: (
      <div className="bg-white rounded-theme shadow-2xl p-4 flex items-center gap-3 border-l-4 border-emerald-500">
        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
        </div>
        <div>
          <p className="font-medium text-slate-800">Order Confirmed</p>
          <p className="text-sm text-slate-500">Your order #12345 has been placed.</p>
        </div>
      </div>
    ),
    code: `<div className="bg-white rounded-theme shadow-2xl p-4 flex items-center gap-3 border-l-4 border-emerald-500">
  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
  </div>
  <div>
    <p className="font-medium text-slate-800">Order Confirmed</p>
    <p className="text-sm text-slate-500">Your order #12345 has been placed.</p>
  </div>
</div>`
  },
  {
    id: 'banner',
    title: 'Banner Alert',
    component: (
      <div className="w-full bg-gradient-to-r from-theme-primary to-theme-secondary rounded-theme p-4 flex items-center justify-between text-white">
        <div className="flex items-center gap-3">
          <Zap className="w-5 h-5" />
          <span className="font-medium">New Feature: Dark mode is now available!</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium hover:underline flex items-center gap-1">
            Try it now <ArrowRight className="w-4 h-4" />
          </button>
          <button className="text-white/70 hover:text-white"><X className="w-4 h-4" /></button>
        </div>
      </div>
    ),
    code: `<div className="w-full bg-gradient-to-r from-theme-primary to-theme-secondary rounded-theme p-4 flex items-center justify-between text-white">
  <div className="flex items-center gap-3">
    <Zap className="w-5 h-5" />
    <span className="font-medium">New Feature: Dark mode is now available!</span>
  </div>
  <div className="flex items-center gap-4">
    <button className="text-sm font-medium hover:underline flex items-center gap-1">
      Try it now <ArrowRight className="w-4 h-4" />
    </button>
    <button className="text-white/70 hover:text-white"><X className="w-4 h-4" /></button>
  </div>
</div>`
  },
  {
    id: 'notification',
    title: 'Notification Alert',
    component: (
      <div className="w-80 bg-white rounded-theme shadow-2xl overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <span className="font-medium text-slate-800">Notifications</span>
          <span className="text-xs text-theme-primary font-medium cursor-pointer">Mark all as read</span>
        </div>
        <div className="divide-y divide-slate-100">
          <div className="p-4 flex gap-3 bg-theme-primary/5">
            <div className="w-10 h-10 bg-theme-primary/10 rounded-full flex items-center justify-center">
              <Bell className="w-5 h-5 text-theme-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-slate-800">New message from <span className="font-medium">Sarah</span></p>
              <p className="text-xs text-slate-500 mt-1">2 minutes ago</p>
            </div>
          </div>
          <div className="p-4 flex gap-3">
            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-slate-800">Your payment was successful</p>
              <p className="text-xs text-slate-500 mt-1">1 hour ago</p>
            </div>
          </div>
        </div>
      </div>
    ),
    code: `<div className="w-80 bg-white rounded-theme shadow-2xl overflow-hidden">
  <div className="p-4 border-b border-slate-100 flex items-center justify-between">
    <span className="font-medium text-slate-800">Notifications</span>
    <span className="text-xs text-theme-primary font-medium">Mark all as read</span>
  </div>
  <div className="divide-y divide-slate-100">
    <div className="p-4 flex gap-3 bg-theme-primary/5">
      <div className="w-10 h-10 bg-theme-primary/10 rounded-full flex items-center justify-center">
        <Bell className="w-5 h-5 text-theme-primary" />
      </div>
      <div className="flex-1">
        <p className="text-sm text-slate-800">New message from <span className="font-medium">Sarah</span></p>
        <p className="text-xs text-slate-500 mt-1">2 minutes ago</p>
      </div>
    </div>
  </div>
</div>`
  },
  {
    id: 'minimal',
    title: 'Minimal Alert',
    component: (
      <div className="flex items-center gap-2 text-sm text-emerald-600">
        <CheckCircle2 className="w-4 h-4" />
        <span>Changes saved successfully</span>
      </div>
    ),
    code: `<div className="flex items-center gap-2 text-sm text-emerald-600">
  <CheckCircle2 className="w-4 h-4" />
  <span>Changes saved successfully</span>
</div>`
  },
  {
    id: 'action',
    title: 'Alert with Action',
    component: (
      <div className="w-96 bg-slate-900 rounded-theme p-4 flex items-center gap-4">
        <div className="flex-1">
          <p className="text-white font-medium">Delete this item?</p>
          <p className="text-sm text-slate-400">This action cannot be undone.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 text-sm text-slate-300 hover:text-white">Cancel</button>
          <button className="px-3 py-1.5 text-sm bg-red-500 text-white rounded-theme hover:bg-red-600">Delete</button>
        </div>
      </div>
    ),
    code: `<div className="w-96 bg-slate-900 rounded-theme p-4 flex items-center gap-4">
  <div className="flex-1">
    <p className="text-white font-medium">Delete this item?</p>
    <p className="text-sm text-slate-400">This action cannot be undone.</p>
  </div>
  <div className="flex gap-2">
    <button className="px-3 py-1.5 text-sm text-slate-300 hover:text-white">Cancel</button>
    <button className="px-3 py-1.5 text-sm bg-red-500 text-white rounded-theme hover:bg-red-600">Delete</button>
  </div>
</div>`
  },
  {
    id: 'cookie',
    title: 'Cookie Banner',
    component: (
      <div className="w-full bg-white rounded-xl shadow-2xl p-6 flex items-center justify-between">
        <div className="flex-1 pr-6">
          <p className="font-medium text-slate-800">🍪 We use cookies</p>
          <p className="text-sm text-slate-500 mt-1">We use cookies to improve your experience. By continuing, you agree to our cookie policy.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-slate-600 hover:text-slate-800 text-sm font-medium">Decline</button>
          <button className="px-4 py-2 bg-theme-primary text-white text-sm font-medium rounded-theme hover:opacity-90 transition-all">Accept All</button>
        </div>
      </div>
    ),
    code: `<div className="w-full bg-white rounded-xl shadow-2xl p-6 flex items-center justify-between">
  <div className="flex-1 pr-6">
    <p className="font-medium text-slate-800">🍪 We use cookies</p>
    <p className="text-sm text-slate-500 mt-1">We use cookies to improve your experience...</p>
  </div>
  <div className="flex gap-3">
    <button className="px-4 py-2 text-slate-600 text-sm font-medium">Decline</button>
    <button className="px-4 py-2 bg-theme-primary text-white text-sm font-medium rounded-theme">Accept All</button>
  </div>
</div>`
  }
];