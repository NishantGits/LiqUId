import React from 'react';
import { Heart, Share2, MessageCircle, Star, ArrowRight, Clock, User, MapPin, Bookmark, MoreHorizontal } from 'lucide-react';

export const cards = [
  {
    id: 'product',
    title: 'Product Card',
    component: (
      <div className="w-72 bg-white rounded-2xl shadow-lg overflow-hidden group">
        <div className="relative h-48 bg-gradient-to-br from-theme-primary/10 to-theme-secondary/10 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500" />
          <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow-sm hover:bg-white">
            <Heart className="w-4 h-4 text-slate-600" />
          </button>
        </div>
        <div className="p-5">
          <p className="text-xs text-theme-primary font-medium mb-1">New Arrival</p>
          <h3 className="font-semibold text-slate-800 mb-2">Premium Watch</h3>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-slate-900">$299</span>
            <button className="px-4 py-2 bg-theme-primary text-white text-sm font-medium rounded-theme hover:opacity-90 transition-all">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    ),
    code: `<div className="w-72 bg-white rounded-2xl shadow-lg overflow-hidden group">
  <div className="relative h-48 bg-gradient-to-br from-theme-primary/10 to-theme-secondary/10 overflow-hidden">
    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
    <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow-sm hover:bg-white">
      <Heart className="w-4 h-4 text-slate-600" />
    </button>
  </div>
  <div className="p-5">
    <p className="text-xs text-theme-primary font-medium mb-1">New Arrival</p>
    <h3 className="font-semibold text-slate-800 mb-2">Premium Watch</h3>
    <div className="flex items-center justify-between">
      <span className="text-xl font-bold text-slate-900">$299</span>
      <button className="px-4 py-2 bg-theme-primary text-white text-sm font-medium rounded-theme hover:opacity-90">Add to Cart</button>
    </div>
  </div>
</div>`
  },
  {
    id: 'profile',
    title: 'Profile Card',
    component: (
      <div className="w-72 bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="h-24 bg-gradient-to-r from-theme-primary to-theme-secondary" />
        <div className="px-5 pb-5">
          <div className="relative -mt-12 mb-4">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200" className="w-24 h-24 rounded-full border-4 border-white object-cover" />
          </div>
          <h3 className="font-semibold text-slate-800 text-lg">Sarah Johnson</h3>
          <p className="text-slate-500 text-sm mb-4">Product Designer at Figma</p>
          <div className="flex gap-4 mb-4">
            <div className="text-center">
              <p className="font-bold text-slate-800">2.4k</p>
              <p className="text-xs text-slate-500">Followers</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-slate-800">186</p>
              <p className="text-xs text-slate-500">Following</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-slate-800">94</p>
              <p className="text-xs text-slate-500">Projects</p>
            </div>
          </div>
          <button className="w-full py-2 bg-theme-primary text-white font-medium rounded-theme hover:opacity-90 transition-all">
            Follow
          </button>
        </div>
      </div>
    ),
    code: `<div className="w-72 bg-white rounded-2xl shadow-lg overflow-hidden">
  <div className="h-24 bg-gradient-to-r from-theme-primary to-theme-secondary"></div>
  <div className="px-5 pb-5">
    <div className="relative -mt-12 mb-4">
      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200" className="w-24 h-24 rounded-full border-4 border-white object-cover" />
    </div>
    <h3 className="font-semibold text-slate-800 text-lg">Sarah Johnson</h3>
    <p className="text-slate-500 text-sm mb-4">Product Designer at Figma</p>
    <div className="flex gap-4 mb-4">
      <div className="text-center">
        <p className="font-bold text-slate-800">2.4k</p>
        <p className="text-xs text-slate-500">Followers</p>
      </div>
      <div className="text-center">
        <p className="font-bold text-slate-800">186</p>
        <p className="text-xs text-slate-500">Following</p>
      </div>
      <div className="text-center">
        <p className="font-bold text-slate-800">94</p>
        <p className="text-xs text-slate-500">Projects</p>
      </div>
    </div>
    <button className="w-full py-2 bg-theme-primary text-white font-medium rounded-theme hover:opacity-90">Follow</button>
  </div>
</div>`
  },
  {
    id: 'blog',
    title: 'Blog Card',
    component: (
      <div className="w-80 bg-white rounded-2xl shadow-lg overflow-hidden group">
        <div className="relative h-44 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-1 bg-theme-primary/10 text-theme-primary text-xs font-medium rounded-full">Design</span>
            <span className="text-slate-400 text-xs flex items-center gap-1">
              <Clock className="w-3 h-3" /> 5 min read
            </span>
          </div>
          <h3 className="font-semibold text-slate-800 text-lg mb-2 line-clamp-2">The Future of UI Design: Trends to Watch in 2024</h3>
          <p className="text-slate-500 text-sm mb-4 line-clamp-2">Explore the cutting-edge trends shaping the future of user interface design...</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" className="w-8 h-8 rounded-full object-cover" />
              <span className="text-sm text-slate-600">John Doe</span>
            </div>
            <span className="text-xs text-slate-400">Mar 15</span>
          </div>
        </div>
      </div>
    ),
    code: `<div className="w-80 bg-white rounded-2xl shadow-lg overflow-hidden group">
  <div className="relative h-44 overflow-hidden">
    <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
  </div>
  <div className="p-5">
    <div className="flex items-center gap-2 mb-3">
      <span className="px-2 py-1 bg-theme-primary/10 text-theme-primary text-xs font-medium rounded-full">Design</span>
      <span className="text-slate-400 text-xs flex items-center gap-1">
        <Clock className="w-3 h-3" /> 5 min read
      </span>
    </div>
    <h3 className="font-semibold text-slate-800 text-lg mb-2 line-clamp-2">The Future of UI Design: Trends to Watch in 2024</h3>
    <p className="text-slate-500 text-sm mb-4 line-clamp-2">Explore the cutting-edge trends shaping the future of user interface design...</p>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" className="w-8 h-8 rounded-full object-cover" />
        <span className="text-sm text-slate-600">John Doe</span>
      </div>
      <span className="text-xs text-slate-400">Mar 15</span>
    </div>
  </div>
</div>`
  },
  {
    id: 'pricing',
    title: 'Pricing Card',
    component: (
      <div className="w-72 bg-white rounded-theme shadow-lg p-6 border-2 border-theme-primary relative">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-theme-primary text-white text-xs font-medium rounded-full">
          Popular
        </div>
        <h3 className="font-semibold text-slate-800 text-lg mb-1">Pro Plan</h3>
        <p className="text-slate-500 text-sm mb-4">Best for growing teams</p>
        <div className="mb-6">
          <span className="text-4xl font-bold text-slate-900">$49</span>
          <span className="text-slate-500">/month</span>
        </div>
        <ul className="space-y-3 mb-6">
          {['Unlimited projects', 'Advanced analytics', 'Priority support', 'Custom integrations'].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
              <div className="w-5 h-5 bg-theme-primary/10 rounded-full flex items-center justify-center">
                <Star className="w-3 h-3 text-theme-primary" />
              </div>
              {item}
            </li>
          ))}
        </ul>
        <button className="w-full py-3 bg-theme-primary text-white font-medium rounded-theme hover:opacity-90 transition-all">
          Get Started
        </button>
      </div>
    ),
    code: `<div className="w-72 bg-white rounded-theme shadow-lg p-6 border-2 border-theme-primary relative">
  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-theme-primary text-white text-xs font-medium rounded-full">Popular</div>
  <h3 className="font-semibold text-slate-800 text-lg mb-1">Pro Plan</h3>
  <p className="text-slate-500 text-sm mb-4">Best for growing teams</p>
  <div className="mb-6">
    <span className="text-4xl font-bold text-slate-900">$49</span>
    <span className="text-slate-500">/month</span>
  </div>
  <ul className="space-y-3 mb-6">
    <li className="flex items-center gap-2 text-sm text-slate-600">
      <div className="w-5 h-5 bg-theme-primary/10 rounded-full flex items-center justify-center">
        <Star className="w-3 h-3 text-theme-primary" />
      </div>
      Unlimited projects
    </li>
  </ul>
  <button className="w-full py-3 bg-theme-primary text-white font-medium rounded-theme hover:opacity-90">Get Started</button>
</div>`
  },
  {
    id: 'testimonial',
    title: 'Testimonial Card',
    component: (
      <div className="w-80 bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center gap-1 mb-4">
          {[1,2,3,4,5].map(i => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <p className="text-slate-600 mb-6 italic">"This product completely transformed how our team works. The interface is intuitive and the results speak for themselves."</p>
        <div className="flex items-center gap-3">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" className="w-12 h-12 rounded-full object-cover" />
          <div>
            <p className="font-semibold text-slate-800">Michael Chen</p>
            <p className="text-sm text-slate-500">CEO at TechFlow</p>
          </div>
        </div>
      </div>
    ),
    code: `<div className="w-80 bg-white rounded-2xl shadow-lg p-6">
  <div className="flex items-center gap-1 mb-4">
    <svg className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
    <svg className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
    <svg className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
    <svg className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
    <svg className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
  </div>
  <p className="text-slate-600 mb-6 italic">"This product completely transformed how our team works. The interface is intuitive and the results speak for themselves."</p>
  <div className="flex items-center gap-3">
    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" className="w-12 h-12 rounded-full object-cover" />
    <div>
      <p className="font-semibold text-slate-800">Michael Chen</p>
      <p className="text-sm text-slate-500">CEO at TechFlow</p>
    </div>
  </div>
</div>`
  },
  {
    id: 'stats',
    title: 'Stats Card',
    component: (
      <div className="w-64 bg-gradient-to-br from-theme-primary to-theme-secondary rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <span className="text-white/70 text-sm">Total Revenue</span>
          <span className="px-2 py-1 bg-white/20 rounded-full text-xs">+12.5%</span>
        </div>
        <p className="text-3xl font-bold mb-1">$84,254</p>
        <p className="text-white/70 text-sm">vs $74,982 last month</p>
        <div className="mt-4 h-16 flex items-end gap-1">
          {[40, 65, 45, 80, 55, 70, 90].map((h, i) => (
            <div key={i} className="flex-1 bg-white/30 rounded-t" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    ),
    code: `<div className="w-64 bg-gradient-to-br from-theme-primary to-theme-secondary rounded-2xl p-6 text-white">
  <div className="flex items-center justify-between mb-4">
    <span className="text-white/70 text-sm">Total Revenue</span>
    <span className="px-2 py-1 bg-white/20 rounded-full text-xs">+12.5%</span>
  </div>
  <p className="text-3xl font-bold mb-1">$84,254</p>
  <p className="text-white/70 text-sm">vs $74,982 last month</p>
  <div className="mt-4 h-16 flex items-end gap-1">
    <div className="flex-1 bg-white/30 rounded-t" style="height: 40%"></div>
    <div className="flex-1 bg-white/30 rounded-t" style="height: 65%"></div>
    <div className="flex-1 bg-white/30 rounded-t" style="height: 45%"></div>
    <div className="flex-1 bg-white/30 rounded-t" style="height: 80%"></div>
    <div className="flex-1 bg-white/30 rounded-t" style="height: 55%"></div>
    <div className="flex-1 bg-white/30 rounded-t" style="height: 70%"></div>
    <div className="flex-1 bg-white/30 rounded-t" style="height: 90%"></div>
  </div>
</div>`
  },
  {
    id: 'feature',
    title: 'Feature Card',
    component: (
      <div className="w-72 bg-white rounded-2xl shadow-lg p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="w-12 h-12 bg-gradient-to-br from-theme-primary to-theme-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Bookmark className="w-6 h-6 text-white" />
        </div>
        <h3 className="font-semibold text-slate-800 text-lg mb-2">Smart Bookmarks</h3>
        <p className="text-slate-500 text-sm mb-4">Organize and access your favorite content with intelligent categorization.</p>
        <a href="#" className="text-theme-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
          Learn more <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    ),
    code: `<div className="w-72 bg-white rounded-2xl shadow-lg p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
  <div className="w-12 h-12 bg-gradient-to-br from-theme-primary to-theme-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
    <Bookmark className="w-6 h-6 text-white" />
  </div>
  <h3 className="font-semibold text-slate-800 text-lg mb-2">Smart Bookmarks</h3>
  <p className="text-slate-500 text-sm mb-4">Organize and access your favorite content with intelligent categorization.</p>
  <a href="#" className="text-theme-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
    Learn more <ArrowRight className="w-4 h-4" />
  </a>
</div>`
  },
  {
    id: 'event',
    title: 'Event Card',
    component: (
      <div className="w-80 bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="relative h-40">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-2xl font-bold">15</p>
            <p className="text-sm opacity-80">March</p>
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-semibold text-slate-800 text-lg mb-2">Design Conference 2024</h3>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 9:00 AM</span>
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> San Francisco</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex -space-x-2">
              {[1,2,3].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-8 h-8 rounded-full border-2 border-white object-cover" />
              ))}
              <div className="w-8 h-8 rounded-full bg-theme-primary/10 border-2 border-white flex items-center justify-center text-xs text-theme-primary font-medium">+42</div>
            </div>
            <button className="px-4 py-2 bg-theme-primary text-white text-sm font-medium rounded-theme">Join</button>
          </div>
        </div>
      </div>
    ),
    code: `<div className="w-80 bg-white rounded-2xl shadow-lg overflow-hidden">
  <div className="relative h-40">
    <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400" className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
    <div className="absolute bottom-4 left-4 text-white">
      <p className="text-2xl font-bold">15</p>
      <p className="text-sm opacity-80">March</p>
    </div>
  </div>
  <div className="p-5">
    <h3 className="font-semibold text-slate-800 text-lg mb-2">Design Conference 2024</h3>
    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
      <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 9:00 AM</span>
      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> San Francisco</span>
    </div>
    <div className="flex items-center justify-between">
      <div className="flex -space-x-2">
        <img src="https://i.pravatar.cc/100?img=11" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
        <img src="https://i.pravatar.cc/100?img=12" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
        <img src="https://i.pravatar.cc/100?img=13" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
        <div className="w-8 h-8 rounded-full bg-theme-primary/10 border-2 border-white flex items-center justify-center text-xs text-theme-primary font-medium">+42</div>
      </div>
      <button className="px-4 py-2 bg-theme-primary text-white text-sm font-medium rounded-theme">Join</button>
    </div>
  </div>
</div>`
  },
  {
    id: 'notification',
    title: 'Notification Card',
    component: (
      <div className="w-80 bg-white rounded-2xl shadow-lg p-4 border-l-4 border-theme-primary">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-theme-primary/10 rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-theme-primary" />
            </div>
            <div>
              <p className="font-medium text-slate-800">New Message</p>
              <p className="text-xs text-slate-500">2 minutes ago</p>
            </div>
          </div>
          <button className="text-slate-400 hover:text-slate-600">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
        <p className="text-sm text-slate-600 pl-13">Sarah sent you a message about the upcoming project deadline.</p>
      </div>
    ),
    code: `<div className="w-80 bg-white rounded-2xl shadow-lg p-4 border-l-4 border-theme-primary">
  <div className="flex items-start justify-between mb-2">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-theme-primary/10 rounded-full flex items-center justify-center">
        <MessageCircle className="w-5 h-5 text-theme-primary" />
      </div>
      <div>
        <p className="font-medium text-slate-800">New Message</p>
        <p className="text-xs text-slate-500">2 minutes ago</p>
      </div>
    </div>
    <button className="text-slate-400 hover:text-slate-600">
      <MoreHorizontal className="w-5 h-5" />
    </button>
  </div>
  <p className="text-sm text-slate-600 pl-13">Sarah sent you a message about the upcoming project deadline.</p>
</div>`
  },
  {
    id: 'glass',
    title: 'Glass Card',
    component: (
      <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-8 rounded-2xl">
        <div className="w-72 bg-white/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30 text-white">
          <h3 className="font-semibold text-xl mb-2">Glassmorphism</h3>
          <p className="text-white/80 text-sm mb-4">A beautiful frosted glass effect that adds depth and elegance to your design.</p>
          <button className="px-4 py-2 bg-white/30 rounded-lg text-sm font-medium hover:bg-white/40 transition-all">
            Explore
          </button>
        </div>
      </div>
    ),
    code: `<div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-8 rounded-2xl">
  <div className="w-72 bg-white/20 backdrop-blur-xl rounded-2xl p-6 border border-white/30 text-white">
    <h3 className="font-semibold text-xl mb-2">Glassmorphism</h3>
    <p className="text-white/80 text-sm mb-4">A beautiful frosted glass effect that adds depth and elegance to your design.</p>
    <button className="px-4 py-2 bg-white/30 rounded-lg text-sm font-medium hover:bg-white/40 transition-all">Explore</button>
  </div>
</div>`
  }
];