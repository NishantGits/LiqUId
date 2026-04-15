import React from 'react';
import { Search, Mail, Lock, Eye, EyeOff, User, Calendar, DollarSign, Check, X } from 'lucide-react';

export const inputs = [
  {
    id: 'default',
    title: 'Default Input',
    component: (
      <input
        type="text"
        placeholder="Enter your name"
        className="w-64 px-4 py-3 border border-slate-200 rounded-theme focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent transition-all"
      />
    ),
    code: `<input
  type="text"
  placeholder="Enter your name"
  className="w-64 px-4 py-3 border border-slate-200 rounded-theme focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent transition-all"
/>`
  },
  {
    id: 'with-label',
    title: 'With Label',
    component: (
      <div className="w-64">
        <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full px-4 py-3 border border-slate-200 rounded-theme focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent transition-all"
        />
      </div>
    ),
    code: `<div className="w-64">
  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
  <input
    type="email"
    placeholder="you@example.com"
    className="w-full px-4 py-3 border border-slate-200 rounded-theme focus:outline-none focus:ring-2 focus:ring-theme-primary"
  />
</div>`
  },
  {
    id: 'icon-left',
    title: 'With Icon Left',
    component: (
      <div className="relative w-64">
        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="email"
          placeholder="Email address"
          className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-theme focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent transition-all"
        />
      </div>
    ),
    code: `<div className="relative w-64">
  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
  <input
    type="email"
    placeholder="Email address"
    className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-theme focus:outline-none focus:ring-2 focus:ring-theme-primary"
  />
</div>`
  },
  {
    id: 'search',
    title: 'Search Input',
    component: (
      <div className="relative w-72">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="text"
          placeholder="Search anything..."
          className="w-full pl-12 pr-4 py-3 bg-slate-100 border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-theme-primary focus:bg-white transition-all"
        />
      </div>
    ),
    code: `<div className="relative w-72">
  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
  <input
    type="text"
    placeholder="Search anything..."
    className="w-full pl-12 pr-4 py-3 bg-slate-100 border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-theme-primary focus:bg-white"
  />
</div>`
  },
  {
    id: 'password',
    title: 'Password Input',
    component: (
      <div className="relative w-64">
        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="password"
          placeholder="••••••••"
          className="w-full pl-12 pr-12 py-3 border border-slate-200 rounded-theme focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent transition-all"
        />
        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
          <Eye className="w-5 h-5" />
        </button>
      </div>
    ),
    code: `<div className="relative w-64">
  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
  <input
    type="password"
    placeholder="••••••••"
    className="w-full pl-12 pr-12 py-3 border border-slate-200 rounded-theme focus:outline-none focus:ring-2 focus:ring-theme-primary"
  />
  <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
    <Eye className="w-5 h-5" />
  </button>
</div>`
  },
  {
    id: 'floating-label',
    title: 'Floating Label',
    component: (
      <div className="relative w-64">
        <input
          type="text"
          id="floating"
          placeholder=" "
          className="peer w-full px-4 pt-6 pb-2 border border-slate-200 rounded-theme focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent transition-all"
        />
        <label
          htmlFor="floating"
          className="absolute left-4 top-4 text-slate-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-theme-primary"
        >
          Full Name
        </label>
      </div>
    ),
    code: `<div className="relative w-64">
  <input
    type="text"
    id="floating"
    placeholder=" "
    className="peer w-full px-4 pt-6 pb-2 border border-slate-200 rounded-theme focus:outline-none focus:ring-2 focus:ring-theme-primary"
  />
  <label
    htmlFor="floating"
    className="absolute left-4 top-4 text-slate-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-theme-primary"
  >
    Full Name
  </label>
</div>`
  },
  {
    id: 'error',
    title: 'Error State',
    component: (
      <div className="w-64">
        <div className="relative">
          <input
            type="email"
            defaultValue="invalid@"
            className="w-full px-4 py-3 border-2 border-red-300 rounded-theme focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-red-50 transition-all"
          />
          <X className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500" />
        </div>
        <p className="mt-2 text-sm text-red-500">Please enter a valid email address</p>
      </div>
    ),
    code: `<div className="w-64">
  <div className="relative">
    <input
      type="email"
      defaultValue="invalid@"
      className="w-full px-4 py-3 border-2 border-red-300 rounded-theme bg-red-50"
    />
    <X className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500" />
  </div>
  <p className="mt-2 text-sm text-red-500">Please enter a valid email address</p>
</div>`
  },
  {
    id: 'success',
    title: 'Success State',
    component: (
      <div className="w-64">
        <div className="relative">
          <input
            type="email"
            defaultValue="valid@email.com"
            className="w-full px-4 py-3 border-2 border-emerald-300 rounded-theme focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-emerald-50 transition-all"
          />
          <Check className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500" />
        </div>
        <p className="mt-2 text-sm text-emerald-500">Email is valid</p>
      </div>
    ),
    code: `<div className="w-64">
  <div className="relative">
    <input
      type="email"
      defaultValue="valid@email.com"
      className="w-full px-4 py-3 border-2 border-emerald-300 rounded-theme bg-emerald-50"
    />
    <Check className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500" />
  </div>
  <p className="mt-2 text-sm text-emerald-500">Email is valid</p>
</div>`
  },
  {
    id: 'textarea',
    title: 'Textarea',
    component: (
      <div className="w-72">
        <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
        <textarea
          rows={4}
          placeholder="Write your message..."
          className="w-full px-4 py-3 border border-slate-200 rounded-theme focus:outline-none focus:ring-2 focus:ring-theme-primary focus:border-transparent transition-all resize-none"
        />
      </div>
    ),
    code: `<div className="w-72">
  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
  <textarea
    rows={4}
    placeholder="Write your message..."
    className="w-full px-4 py-3 border border-slate-200 rounded-theme focus:outline-none focus:ring-2 focus:ring-theme-primary resize-none"
  />
</div>`
  },
  {
    id: 'underline',
    title: 'Underline Style',
    component: (
      <div className="w-64">
        <label className="block text-sm font-medium text-slate-700 mb-2">Username</label>
        <input
          type="text"
          placeholder="Enter username"
          className="w-full px-2 py-3 border-0 border-b-2 border-slate-200 focus:outline-none focus:border-theme-primary transition-all bg-transparent"
        />
      </div>
    ),
    code: `<div className="w-64">
  <label className="block text-sm font-medium text-slate-700 mb-2">Username</label>
  <input
    type="text"
    placeholder="Enter username"
    className="w-full px-2 py-3 border-0 border-b-2 border-slate-200 focus:outline-none focus:border-theme-primary bg-transparent"
  />
</div>`
  }
];