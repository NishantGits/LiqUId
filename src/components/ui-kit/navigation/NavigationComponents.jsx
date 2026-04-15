import React from 'react';
import { Home, Search, Bell, User, Settings, Menu, X, ChevronDown, ArrowRight, ShoppingCart, Heart, LogOut, HelpCircle, LayoutDashboard, FileText, BarChart3, Users } from 'lucide-react';

export const navigations = [
  {
    id: 'navbar',
    title: 'Simple Navbar',
    component: (
      <div className="w-full bg-white rounded-xl shadow-lg px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="text-xl font-bold bg-gradient-to-r from-theme-primary to-theme-secondary bg-clip-text text-transparent">LiqUId</span>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-slate-600 hover:text-theme-primary font-medium">Home</a>
              <a href="#" className="text-slate-600 hover:text-theme-primary font-medium">Products</a>
              <a href="#" className="text-slate-600 hover:text-theme-primary font-medium">About</a>
              <a href="#" className="text-slate-600 hover:text-theme-primary font-medium">Contact</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-slate-600"><Search className="w-5 h-5" /></button>
            <button className="px-4 py-2 bg-theme-primary text-white text-sm font-medium rounded-theme hover:opacity-90 transition-all">Get Started</button>
          </div>
        </div>
      </div>
    ),
    code: `<nav className="w-full bg-white rounded-xl shadow-lg px-6 py-4">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-8">
      <span className="text-xl font-bold bg-gradient-to-r from-theme-primary to-theme-secondary bg-clip-text text-transparent">LiqUId</span>
      <nav className="hidden md:flex items-center gap-6">
        <a href="#" className="text-slate-600 hover:text-theme-primary">Home</a>
        <a href="#" className="text-slate-600 hover:text-theme-primary">Products</a>
        <a href="#" className="text-slate-600 hover:text-theme-primary">About</a>
      </nav>
    </div>
    <button className="px-4 py-2 bg-theme-primary text-white rounded-theme">Get Started</button>
  </div>
</nav>`
  },
  {
    id: 'navbar-centered',
    title: 'Centered Navbar',
    component: (
      <div className="w-full bg-white rounded-xl shadow-lg px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-theme-primary to-theme-secondary bg-clip-text text-transparent">LiqUId</span>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-theme-primary font-medium">Home</a>
            <a href="#" className="text-slate-600 hover:text-theme-primary font-medium">Features</a>
            <a href="#" className="text-slate-600 hover:text-theme-primary font-medium">Pricing</a>
            <a href="#" className="text-slate-600 hover:text-theme-primary font-medium">Blog</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-slate-600 hover:text-theme-primary font-medium">Log In</button>
            <button className="px-4 py-2 bg-theme-primary text-white text-sm font-medium rounded-theme hover:opacity-90 transition-all">Sign Up</button>
          </div>
        </div>
      </div>
    ),
    code: `<nav className="w-full bg-white rounded-xl shadow-lg px-6 py-4">
  <div className="flex items-center justify-between">
    <span className="text-xl font-bold bg-gradient-to-r from-theme-primary to-theme-secondary bg-clip-text text-transparent">LiqUId</span>
    <nav className="hidden md:flex items-center gap-8">
      <a href="#" className="text-theme-primary font-medium">Home</a>
      <a href="#" className="text-slate-600 hover:text-theme-primary font-medium">Features</a>
      <a href="#" className="text-slate-600 hover:text-theme-primary font-medium">Pricing</a>
    </nav>
    <div className="flex items-center gap-3">
      <button className="px-4 py-2 text-slate-600">Log In</button>
      <button className="px-4 py-2 bg-theme-primary text-white rounded-theme">Sign Up</button>
    </div>
  </div>
</nav>`
  },
  {
    id: 'sidebar',
    title: 'Sidebar Navigation',
    component: (
      <div className="w-64 bg-slate-900 rounded-xl shadow-lg p-4 h-96">
        <div className="flex items-center gap-3 px-3 mb-8">
          <div className="w-8 h-8 bg-theme-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">L</span>
          </div>
          <span className="text-white font-semibold">LiqUId</span>
        </div>
        <nav className="space-y-1">
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 bg-theme-primary/20 text-theme-primary rounded-lg">
            <LayoutDashboard className="w-5 h-5" />
            <span className="font-medium">Dashboard</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-all">
            <BarChart3 className="w-5 h-5" />
            <span>Analytics</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-all">
            <Users className="w-5 h-5" />
            <span>Customers</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-all">
            <FileText className="w-5 h-5" />
            <span>Reports</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-all">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </a>
        </nav>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-3 px-3 py-2 bg-white/10 rounded-lg">
            <div className="w-8 h-8 bg-theme-primary rounded-full" />
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">John Doe</p>
              <p className="text-slate-400 text-xs truncate">john@example.com</p>
            </div>
          </div>
        </div>
      </div>
    ),
    code: `<div className="w-64 bg-slate-900 rounded-xl shadow-lg p-4">
  <div className="flex items-center gap-3 px-3 mb-8">
    <div className="w-8 h-8 bg-theme-primary rounded-lg flex items-center justify-center">
      <span className="text-white font-bold text-sm">L</span>
    </div>
    <span className="text-white font-semibold">LiqUId</span>
  </div>
  <nav className="space-y-1">
    <a className="flex items-center gap-3 px-3 py-2.5 bg-theme-primary/20 text-theme-primary rounded-lg">
      <LayoutDashboard className="w-5 h-5" />
      <span className="font-medium">Dashboard</span>
    </a>
    <a className="flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg">
      <BarChart3 className="w-5 h-5" />
      <span>Analytics</span>
    </a>
  </nav>
</div>`
  },
  {
    id: 'tabs',
    title: 'Tab Navigation',
    component: (
      <div className="w-full bg-white rounded-xl shadow-lg p-2">
        <div className="flex gap-1">
          <button className="flex-1 px-4 py-2.5 bg-theme-primary text-white font-medium rounded-theme">Overview</button>
          <button className="flex-1 px-4 py-2.5 text-slate-600 hover:bg-slate-100 font-medium rounded-theme transition-all">Analytics</button>
          <button className="flex-1 px-4 py-2.5 text-slate-600 hover:bg-slate-100 font-medium rounded-theme transition-all">Reports</button>
          <button className="flex-1 px-4 py-2.5 text-slate-600 hover:bg-slate-100 font-medium rounded-theme transition-all">Settings</button>
        </div>
      </div>
    ),
    code: `<div className="w-full bg-white rounded-xl shadow-lg p-2">
  <div className="flex gap-1">
    <button className="flex-1 px-4 py-2.5 bg-theme-primary text-white font-medium rounded-theme">Overview</button>
    <button className="flex-1 px-4 py-2.5 text-slate-600 hover:bg-slate-100 font-medium rounded-theme">Analytics</button>
    <button className="flex-1 px-4 py-2.5 text-slate-600 hover:bg-slate-100 font-medium rounded-theme">Reports</button>
    <button className="flex-1 px-4 py-2.5 text-slate-600 hover:bg-slate-100 font-medium rounded-theme">Settings</button>
  </div>
</div>`
  },
  {
    id: 'breadcrumb',
    title: 'Breadcrumb',
    component: (
      <div className="bg-white rounded-xl shadow-lg p-4">
        <nav className="flex items-center gap-2 text-sm">
          <a href="#" className="text-slate-500 hover:text-theme-primary">Home</a>
          <span className="text-slate-300">/</span>
          <a href="#" className="text-slate-500 hover:text-theme-primary">Products</a>
          <span className="text-slate-300">/</span>
          <a href="#" className="text-slate-500 hover:text-theme-primary">Category</a>
          <span className="text-slate-300">/</span>
          <span className="text-slate-800 font-medium">Current Page</span>
        </nav>
      </div>
    ),
    code: `<nav className="flex items-center gap-2 text-sm">
  <a href="#" className="text-slate-500 hover:text-theme-primary">Home</a>
  <span className="text-slate-300">/</span>
  <a href="#" className="text-slate-500 hover:text-theme-primary">Products</a>
  <span className="text-slate-300">/</span>
  <span className="text-slate-800 font-medium">Current Page</span>
</nav>`
  },
  {
    id: 'bottom-nav',
    title: 'Bottom Navigation',
    component: (
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg px-4 py-3">
        <div className="flex items-center justify-around">
          <button className="flex flex-col items-center gap-1 text-theme-primary">
            <Home className="w-5 h-5" />
            <span className="text-xs font-medium">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-theme-primary transition-colors">
            <Search className="w-5 h-5" />
            <span className="text-xs">Search</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-theme-primary transition-colors relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
            <span className="text-xs">Cart</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-theme-primary transition-colors">
            <Heart className="w-5 h-5" />
            <span className="text-xs">Wishlist</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-theme-primary transition-colors">
            <User className="w-5 h-5" />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    ),
    code: `<div className="w-full max-w-md bg-white rounded-xl shadow-lg px-4 py-3">
  <div className="flex items-center justify-around">
    <button className="flex flex-col items-center gap-1 text-theme-primary">
      <Home className="w-5 h-5" />
      <span className="text-xs font-medium">Home</span>
    </button>
    <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-theme-primary relative">
      <ShoppingCart className="w-5 h-5" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full">3</span>
      <span className="text-xs">Cart</span>
    </button>
    ...
  </div>
</div>`
  },
  {
    id: 'dropdown',
    title: 'Dropdown Menu',
    component: (
      <div className="relative">
        <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-lg border border-slate-200 hover:bg-slate-50">
          <span className="font-medium text-slate-700">Options</span>
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </button>
        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-10">
          <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-slate-600 hover:bg-slate-50">
            <User className="w-4 h-4" /> Profile
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-slate-600 hover:bg-slate-50">
            <Settings className="w-4 h-4" /> Settings
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-slate-600 hover:bg-slate-50">
            <HelpCircle className="w-4 h-4" /> Help
          </a>
          <div className="border-t border-slate-100 my-2" />
          <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-red-600 hover:bg-red-50">
            <LogOut className="w-4 h-4" /> Log Out
          </a>
        </div>
      </div>
    ),
    code: `<div className="relative">
  <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-lg border">
    <span className="font-medium">Options</span>
    <ChevronDown className="w-4 h-4" />
  </button>
  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border py-2">
    <a className="flex items-center gap-3 px-4 py-2.5 text-slate-600 hover:bg-slate-50">
      <User className="w-4 h-4" /> Profile
    </a>
    <a className="flex items-center gap-3 px-4 py-2.5 text-slate-600 hover:bg-slate-50">
      <Settings className="w-4 h-4" /> Settings
    </a>
    <div className="border-t border-slate-100 my-2" />
    <a className="flex items-center gap-3 px-4 py-2.5 text-red-600 hover:bg-red-50">
      <LogOut className="w-4 h-4" /> Log Out
    </a>
  </div>
</div>`
  },
  {
    id: 'pagination',
    title: 'Pagination',
    component: (
      <div className="flex items-center gap-2">
        <button className="w-10 h-10 flex items-center justify-center rounded-theme border border-slate-200 text-slate-400 hover:bg-slate-50">
          <ArrowRight className="w-4 h-4 rotate-180" />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-theme bg-theme-primary text-white font-medium">1</button>
        <button className="w-10 h-10 flex items-center justify-center rounded-theme border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium">2</button>
        <button className="w-10 h-10 flex items-center justify-center rounded-theme border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium">3</button>
        <span className="w-10 h-10 flex items-center justify-center text-slate-400">...</span>
        <button className="w-10 h-10 flex items-center justify-center rounded-theme border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium">10</button>
        <button className="w-10 h-10 flex items-center justify-center rounded-theme border border-slate-200 text-slate-600 hover:bg-slate-50">
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    ),
    code: `<div className="flex items-center gap-2">
  <button className="w-10 h-10 flex items-center justify-center rounded-theme border text-slate-400 hover:bg-slate-50">
    <ArrowRight className="w-4 h-4 rotate-180" />
  </button>
  <button className="w-10 h-10 flex items-center justify-center rounded-theme bg-theme-primary text-white font-medium">1</button>
  <button className="w-10 h-10 flex items-center justify-center rounded-theme border text-slate-600 hover:bg-slate-50">2</button>
  <button className="w-10 h-10 flex items-center justify-center rounded-theme border text-slate-600 hover:bg-slate-50">3</button>
  <span className="w-10 h-10 flex items-center justify-center text-slate-400">...</span>
  <button className="w-10 h-10 flex items-center justify-center rounded-theme border text-slate-600 hover:bg-slate-50">
    <ArrowRight className="w-4 h-4" />
  </button>
</div>`
  },
  {
    id: 'steps',
    title: 'Step Navigation',
    component: (
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-theme-primary text-white rounded-full flex items-center justify-center text-sm font-medium">✓</div>
          <span className="text-sm font-medium text-theme-primary">Cart</span>
        </div>
        <div className="flex-1 h-0.5 bg-theme-primary" />
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-theme-primary text-white rounded-full flex items-center justify-center text-sm font-medium">2</div>
          <span className="text-sm font-medium text-theme-primary">Shipping</span>
        </div>
        <div className="flex-1 h-0.5 bg-slate-200" />
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-200 text-slate-500 rounded-full flex items-center justify-center text-sm font-medium">3</div>
          <span className="text-sm text-slate-500">Payment</span>
        </div>
        <div className="flex-1 h-0.5 bg-slate-200" />
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-200 text-slate-500 rounded-full flex items-center justify-center text-sm font-medium">4</div>
          <span className="text-sm text-slate-500">Done</span>
        </div>
      </div>
    ),
    code: `<div className="flex items-center gap-4">
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 bg-theme-primary text-white rounded-full flex items-center justify-center text-sm font-medium">✓</div>
    <span className="text-sm font-medium text-theme-primary">Cart</span>
  </div>
  <div className="flex-1 h-0.5 bg-theme-primary" />
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 bg-theme-primary text-white rounded-full flex items-center justify-center text-sm font-medium">2</div>
    <span className="text-sm font-medium text-theme-primary">Shipping</span>
  </div>
  <div className="flex-1 h-0.5 bg-slate-200" />
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 bg-slate-200 text-slate-500 rounded-full flex items-center justify-center text-sm font-medium">3</div>
    <span className="text-sm text-slate-500">Payment</span>
  </div>
</div>`
  },
  {
    id: 'header-search',
    title: 'Header with Search',
    component: (
      <div className="w-full bg-white rounded-xl shadow-lg px-6 py-4">
        <div className="flex items-center gap-6">
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">LiqUId</span>
          <div className="flex-1 relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input type="text" placeholder="Search..." className="w-full pl-12 pr-4 py-2.5 bg-slate-100 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white" />
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-400 hover:text-slate-600">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500" />
          </div>
        </div>
      </div>
    ),
    code: `<header className="w-full bg-white rounded-xl shadow-lg px-6 py-4">
  <div className="flex items-center gap-6">
    <span className="text-xl font-bold">LiqUId</span>
    <div className="flex-1 relative max-w-md">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
      <input placeholder="Search..." className="w-full pl-12 pr-4 py-2.5 bg-slate-100 rounded-full" />
    </div>
    <div className="flex items-center gap-4">
      <button className="relative p-2 text-slate-400">
        <Bell className="w-5 h-5" />
        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
      </button>
      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500" />
    </div>
  </div>
</header>`
  }
];