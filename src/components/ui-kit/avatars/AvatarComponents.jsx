import React from 'react';
import { User, Check, Plus, Camera } from 'lucide-react';

export const avatars = [
  {
    id: 'basic',
    title: 'Basic Avatars',
    component: (
      <div className="flex items-center gap-4">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200" className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200" className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200" className="w-14 h-14 rounded-full object-cover" referrerPolicy="no-referrer" />
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200" className="w-16 h-16 rounded-full object-cover" referrerPolicy="no-referrer" />
      </div>
    ),
    code: `<img src="..." className="w-10 h-10 rounded-full object-cover" />
<img src="..." className="w-12 h-12 rounded-full object-cover" />
<img src="..." className="w-14 h-14 rounded-full object-cover" />`
  },
  {
    id: 'with-ring',
    title: 'With Ring',
    component: (
      <div className="flex items-center gap-4">
        <img src="https://i.pravatar.cc/100?img=1" className="w-12 h-12 rounded-full object-cover ring-2 ring-white ring-offset-2 ring-offset-theme-primary" referrerPolicy="no-referrer" />
        <img src="https://i.pravatar.cc/100?img=2" className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-500 ring-offset-2" referrerPolicy="no-referrer" />
        <img src="https://i.pravatar.cc/100?img=3" className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-500 ring-offset-2" referrerPolicy="no-referrer" />
        <img src="https://i.pravatar.cc/100?img=4" className="w-12 h-12 rounded-full object-cover ring-2 ring-theme-secondary ring-offset-2" referrerPolicy="no-referrer" />
      </div>
    ),
    code: `<img src="..." className="w-12 h-12 rounded-full object-cover ring-2 ring-white ring-offset-2 ring-offset-theme-primary" />
<img src="..." className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-500 ring-offset-2" />`
  },
  {
    id: 'status',
    title: 'With Status',
    component: (
      <div className="flex items-center gap-4">
        <div className="relative">
          <img src="https://i.pravatar.cc/100?img=5" className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
          <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" />
        </div>
        <div className="relative">
          <img src="https://i.pravatar.cc/100?img=6" className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
          <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-amber-500 border-2 border-white rounded-full" />
        </div>
        <div className="relative">
          <img src="https://i.pravatar.cc/100?img=7" className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
          <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full" />
        </div>
        <div className="relative">
          <img src="https://i.pravatar.cc/100?img=8" className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
          <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-slate-400 border-2 border-white rounded-full" />
        </div>
      </div>
    ),
    code: `<div className="relative">
  <img src="..." className="w-12 h-12 rounded-full object-cover" />
  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" />
</div>`
  },
  {
    id: 'initials',
    title: 'With Initials',
    component: (
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-theme-primary rounded-full flex items-center justify-center text-white font-semibold">JD</div>
        <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-semibold">AB</div>
        <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-semibold">MK</div>
        <div className="w-12 h-12 bg-theme-secondary rounded-full flex items-center justify-center text-white font-semibold">SC</div>
      </div>
    ),
    code: `<div className="w-12 h-12 bg-theme-primary rounded-full flex items-center justify-center text-white font-semibold">JD</div>
<div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-semibold">AB</div>`
  },
  {
    id: 'placeholder',
    title: 'Placeholder',
    component: (
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
          <User className="w-6 h-6 text-slate-500" />
        </div>
        <div className="w-12 h-12 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center">
          <User className="w-6 h-6 text-slate-500" />
        </div>
        <button className="w-12 h-12 bg-slate-100 border-2 border-dashed border-slate-300 rounded-full flex items-center justify-center hover:border-theme-primary transition-colors">
          <Plus className="w-5 h-5 text-slate-400" />
        </button>
      </div>
    ),
    code: `<div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
  <User className="w-6 h-6 text-slate-500" />
</div>`
  },
  {
    id: 'group',
    title: 'Avatar Group',
    component: (
      <div className="flex -space-x-3">
        <img src="https://i.pravatar.cc/100?img=10" className="w-10 h-10 rounded-full border-2 border-white object-cover" referrerPolicy="no-referrer" />
        <img src="https://i.pravatar.cc/100?img=11" className="w-10 h-10 rounded-full border-2 border-white object-cover" referrerPolicy="no-referrer" />
        <img src="https://i.pravatar.cc/100?img=12" className="w-10 h-10 rounded-full border-2 border-white object-cover" referrerPolicy="no-referrer" />
        <img src="https://i.pravatar.cc/100?img=13" className="w-10 h-10 rounded-full border-2 border-white object-cover" referrerPolicy="no-referrer" />
        <div className="w-10 h-10 bg-theme-primary/10 rounded-full border-2 border-white flex items-center justify-center text-xs font-medium text-theme-primary">+5</div>
      </div>
    ),
    code: `<div className="flex -space-x-3">
  <img src="..." className="w-10 h-10 rounded-full border-2 border-white object-cover" />
  <img src="..." className="w-10 h-10 rounded-full border-2 border-white object-cover" />
  <img src="..." className="w-10 h-10 rounded-full border-2 border-white object-cover" />
  <div className="w-10 h-10 bg-theme-primary/10 rounded-full border-2 border-white flex items-center justify-center text-xs font-medium text-theme-primary">+5</div>
</div>`
  },
  {
    id: 'verified',
    title: 'With Badge',
    component: (
      <div className="flex items-center gap-4">
        <div className="relative">
          <img src="https://i.pravatar.cc/100?img=15" className="w-14 h-14 rounded-full object-cover" referrerPolicy="no-referrer" />
          <span className="absolute -bottom-1 -right-1 w-6 h-6 bg-theme-primary rounded-full flex items-center justify-center border-2 border-white">
            <Check className="w-3 h-3 text-white" />
          </span>
        </div>
        <div className="relative">
          <img src="https://i.pravatar.cc/100?img=16" className="w-14 h-14 rounded-full object-cover" referrerPolicy="no-referrer" />
          <span className="absolute -bottom-1 -right-1 px-2 py-0.5 bg-emerald-500 rounded-full text-xs font-medium text-white border-2 border-white">Pro</span>
        </div>
      </div>
    ),
    code: `<div className="relative">
  <img src="..." className="w-14 h-14 rounded-full object-cover" />
  <span className="absolute -bottom-1 -right-1 w-6 h-6 bg-theme-primary rounded-full flex items-center justify-center border-2 border-white">
    <Check className="w-3 h-3 text-white" />
  </span>
</div>`
  },
  {
    id: 'editable',
    title: 'Editable Avatar',
    component: (
      <div className="relative group cursor-pointer">
        <img src="https://i.pravatar.cc/100?img=20" className="w-20 h-20 rounded-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Camera className="w-6 h-6 text-white" />
        </div>
      </div>
    ),
    code: `<div className="relative group cursor-pointer">
  <img src="..." className="w-20 h-20 rounded-full object-cover" />
  <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
    <Camera className="w-6 h-6 text-white" />
  </div>
</div>`
  },
  {
    id: 'squared',
    title: 'Squared Avatars',
    component: (
      <div className="flex items-center gap-4">
        <img src="https://i.pravatar.cc/100?img=21" className="w-12 h-12 rounded-theme object-cover" referrerPolicy="no-referrer" />
        <img src="https://i.pravatar.cc/100?img=22" className="w-12 h-12 rounded-theme object-cover" referrerPolicy="no-referrer" />
        <img src="https://i.pravatar.cc/100?img=23" className="w-12 h-12 rounded-theme object-cover" referrerPolicy="no-referrer" />
        <div className="w-12 h-12 bg-gradient-to-br from-theme-primary to-theme-secondary rounded-theme flex items-center justify-center text-white font-semibold">AB</div>
      </div>
    ),
    code: `<img src="..." className="w-12 h-12 rounded-theme object-cover" />
<div className="w-12 h-12 bg-gradient-to-br from-theme-primary to-theme-secondary rounded-theme flex items-center justify-center text-white font-semibold">AB</div>`
  },
  {
    id: 'with-text',
    title: 'With Text',
    component: (
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <img src="https://i.pravatar.cc/100?img=25" className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
          <div>
            <p className="font-medium text-slate-800">Sarah Johnson</p>
            <p className="text-sm text-slate-500">Designer</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <img src="https://i.pravatar.cc/100?img=26" className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
          <div>
            <p className="font-medium text-slate-800">Michael Chen</p>
            <p className="text-sm text-emerald-500">Online</p>
          </div>
        </div>
      </div>
    ),
    code: `<div className="flex items-center gap-3">
  <img src="..." className="w-10 h-10 rounded-full object-cover" />
  <div>
    <p className="font-medium text-slate-800">Sarah Johnson</p>
    <p className="text-sm text-slate-500">Designer</p>
  </div>
</div>`
  }
];