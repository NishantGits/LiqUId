import React from 'react';
import { Mail, Lock, User, Phone, MapPin, CreditCard, Calendar, ChevronDown, Check, Upload, Globe } from 'lucide-react';

export const forms = [
  {
    id: 'login',
    title: 'Login Form',
    component: (
      <div className="w-80 bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Welcome back</h2>
        <p className="text-slate-500 text-sm mb-6">Sign in to your account</p>
        <div className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input type="email" placeholder="Email" className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-theme focus:outline-none focus:ring-2 focus:ring-theme-primary" />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input type="password" placeholder="Password" className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-theme focus:outline-none focus:ring-2 focus:ring-theme-primary" />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-theme-primary focus:ring-theme-primary" />
              <span className="text-slate-600">Remember me</span>
            </label>
            <a href="#" className="text-theme-primary hover:underline">Forgot password?</a>
          </div>
          <button className="w-full py-3 bg-theme-primary text-white font-medium rounded-theme hover:opacity-90 transition-all">Sign In</button>
        </div>
        <p className="text-center text-sm text-slate-500 mt-6">Don't have an account? <a href="#" className="text-theme-primary hover:underline">Sign up</a></p>
      </div>
    ),
    code: `<div className="w-80 bg-white rounded-2xl shadow-xl p-8">
  <h2 className="text-2xl font-bold mb-2">Welcome back</h2>
  <p className="text-slate-500 text-sm mb-6">Sign in to your account</p>
  <div className="space-y-4">
    <div className="relative">
      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
      <input type="email" placeholder="Email" className="w-full pl-12 pr-4 py-3 border rounded-xl" />
    </div>
    <div className="relative">
      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
      <input type="password" placeholder="Password" className="w-full pl-12 pr-4 py-3 border rounded-xl" />
    </div>
    <button className="w-full py-3 bg-indigo-600 text-white rounded-xl">Sign In</button>
  </div>
</div>`
  },
  {
    id: 'signup',
    title: 'Sign Up Form',
    component: (
      <div className="w-80 bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Create account</h2>
        <p className="text-slate-500 text-sm mb-6">Start your journey with us</p>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First name" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <input type="text" placeholder="Last name" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <input type="email" placeholder="Email address" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <input type="password" placeholder="Create password" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300 text-indigo-600" />
            <span className="text-sm text-slate-600">I agree to the <a href="#" className="text-indigo-600">Terms</a> and <a href="#" className="text-indigo-600">Privacy Policy</a></span>
          </label>
          <button className="w-full py-3 bg-theme-primary text-white font-medium rounded-theme hover:opacity-90 transition-all">Create Account</button>
        </div>
      </div>
    ),
    code: `<div className="w-80 bg-white rounded-2xl shadow-xl p-8">
  <h2 className="text-2xl font-bold mb-2">Create account</h2>
  <div className="space-y-4">
    <div className="grid grid-cols-2 gap-4">
      <input placeholder="First name" className="..." />
      <input placeholder="Last name" className="..." />
    </div>
    <input placeholder="Email address" className="..." />
    <input type="password" placeholder="Create password" className="..." />
    <button className="w-full py-3 bg-indigo-600 text-white rounded-xl">Create Account</button>
  </div>
</div>`
  },
  {
    id: 'contact',
    title: 'Contact Form',
    component: (
      <div className="w-96 bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Get in touch</h2>
        <p className="text-slate-500 text-sm mb-6">We'd love to hear from you</p>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
              <input type="text" placeholder="John" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
            <input type="text" placeholder="How can we help?" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
            <textarea rows={4} placeholder="Your message..." className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none" />
          </div>
          <button className="w-full py-3 bg-theme-primary text-white font-medium rounded-theme hover:opacity-90 transition-all">Send Message</button>
        </div>
      </div>
    ),
    code: `<div className="w-96 bg-white rounded-2xl shadow-xl p-8">
  <h2 className="text-2xl font-bold mb-2">Get in touch</h2>
  <div className="space-y-4">
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input placeholder="John" className="..." />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input type="email" placeholder="john@example.com" className="..." />
      </div>
    </div>
    <div>
      <label className="block text-sm font-medium mb-1">Message</label>
      <textarea rows={4} placeholder="Your message..." className="..." />
    </div>
    <button className="w-full py-3 bg-indigo-600 text-white rounded-xl">Send Message</button>
  </div>
</div>`
  },
  {
    id: 'checkout',
    title: 'Checkout Form',
    component: (
      <div className="w-96 bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-xl font-bold text-slate-800 mb-6">Payment Details</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Card Number</label>
            <div className="relative">
              <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input type="text" placeholder="1234 5678 9012 3456" className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Expiry</label>
              <input type="text" placeholder="MM/YY" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">CVC</label>
              <input type="text" placeholder="123" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
          <div className="border-t border-slate-200 pt-4 mt-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-500">Subtotal</span>
              <span className="font-medium">$99.00</span>
            </div>
            <div className="flex justify-between text-sm mb-4">
              <span className="text-slate-500">Tax</span>
              <span className="font-medium">$9.90</span>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>$108.90</span>
            </div>
          </div>
          <button className="w-full py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-all">Pay Now</button>
        </div>
      </div>
    ),
    code: `<div className="w-96 bg-white rounded-2xl shadow-xl p-8">
  <h2 className="text-xl font-bold mb-6">Payment Details</h2>
  <div className="space-y-4">
    <div>
      <label className="block text-sm font-medium mb-1">Card Number</label>
      <div className="relative">
        <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input placeholder="1234 5678 9012 3456" className="w-full pl-12 pr-4 py-3 border rounded-xl" />
      </div>
    </div>
    <button className="w-full py-3 bg-indigo-600 text-white rounded-xl">Pay Now</button>
  </div>
</div>`
  },
  {
    id: 'newsletter',
    title: 'Newsletter Form',
    component: (
      <div className="w-96 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
        <p className="text-indigo-100 text-sm mb-6">Get the latest news and updates delivered to your inbox.</p>
        <div className="flex gap-3">
          <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-xl placeholder:text-white/60 text-white focus:outline-none focus:ring-2 focus:ring-white/50" />
          <button className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-xl hover:bg-indigo-50 transition-all">Subscribe</button>
        </div>
        <p className="text-xs text-indigo-200 mt-4">We respect your privacy. Unsubscribe at any time.</p>
      </div>
    ),
    code: `<div className="w-96 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl p-8 text-white">
  <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
  <p className="text-indigo-100 text-sm mb-6">Get the latest news...</p>
  <div className="flex gap-3">
    <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-xl" />
    <button className="px-6 py-3 bg-white text-indigo-600 rounded-xl">Subscribe</button>
  </div>
</div>`
  },
  {
    id: 'profile',
    title: 'Profile Form',
    component: (
      <div className="w-96 bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-white" />
          </div>
          <button className="px-4 py-2 border border-slate-200 rounded-xl text-sm text-slate-600 hover:bg-slate-50">Change Photo</button>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
              <input type="text" defaultValue="Sarah" className="w-full px-4 py-3 border border-slate-200 rounded-xl" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
              <input type="text" defaultValue="Johnson" className="w-full px-4 py-3 border border-slate-200 rounded-xl" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Bio</label>
            <textarea rows={3} defaultValue="Product designer passionate about creating beautiful experiences." className="w-full px-4 py-3 border border-slate-200 rounded-xl resize-none" />
          </div>
          <button className="w-full py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700">Save Changes</button>
        </div>
      </div>
    ),
    code: `<div className="w-96 bg-white rounded-2xl shadow-xl p-8">
  <div className="flex items-center gap-4 mb-6">
    <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-full flex items-center justify-center">
      <User className="w-8 h-8 text-white" />
    </div>
    <button className="px-4 py-2 border rounded-xl text-sm">Change Photo</button>
  </div>
  <div className="space-y-4">
    ...
    <button className="w-full py-3 bg-indigo-600 text-white rounded-xl">Save Changes</button>
  </div>
</div>`
  },
  {
    id: 'search-form',
    title: 'Search Form',
    component: (
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-4">
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input type="text" placeholder="Location" className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input type="text" placeholder="Date" className="w-40 pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-all">Search</button>
        </div>
      </div>
    ),
    code: `<div className="bg-white rounded-2xl shadow-xl p-4">
  <div className="flex gap-3">
    <div className="flex-1 relative">
      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
      <input placeholder="Location" className="w-full pl-12 pr-4 py-3 border rounded-xl" />
    </div>
    <div className="relative">
      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
      <input placeholder="Date" className="w-40 pl-12 pr-4 py-3 border rounded-xl" />
    </div>
    <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl">Search</button>
  </div>
</div>`
  },
  {
    id: 'file-upload',
    title: 'File Upload',
    component: (
      <div className="w-80 bg-white rounded-2xl shadow-xl p-6">
        <h3 className="font-semibold text-slate-800 mb-4">Upload Files</h3>
        <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center hover:border-indigo-400 transition-colors cursor-pointer">
          <Upload className="w-10 h-10 text-slate-400 mx-auto mb-3" />
          <p className="text-sm text-slate-600 mb-1">Drag and drop files here</p>
          <p className="text-xs text-slate-400">or click to browse</p>
        </div>
        <div className="mt-4 p-3 bg-slate-50 rounded-xl flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
            <Globe className="w-5 h-5 text-indigo-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-800 truncate">document.pdf</p>
            <p className="text-xs text-slate-500">2.4 MB</p>
          </div>
          <Check className="w-5 h-5 text-emerald-500" />
        </div>
      </div>
    ),
    code: `<div className="w-80 bg-white rounded-2xl shadow-xl p-6">
  <h3 className="font-semibold mb-4">Upload Files</h3>
  <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center hover:border-indigo-400 cursor-pointer">
    <Upload className="w-10 h-10 text-slate-400 mx-auto mb-3" />
    <p className="text-sm text-slate-600 mb-1">Drag and drop files here</p>
    <p className="text-xs text-slate-400">or click to browse</p>
  </div>
</div>`
  },
  {
    id: 'select',
    title: 'Select Form',
    component: (
      <div className="w-72 bg-white rounded-2xl shadow-xl p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Country</label>
          <div className="relative">
            <select className="w-full px-4 py-3 border border-slate-200 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Canada</option>
              <option>Australia</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
          <div className="relative">
            <select className="w-full px-4 py-3 border border-slate-200 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Technology</option>
              <option>Design</option>
              <option>Marketing</option>
              <option>Business</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
          </div>
        </div>
      </div>
    ),
    code: `<div className="w-72 bg-white rounded-2xl shadow-xl p-6 space-y-4">
  <div>
    <label className="block text-sm font-medium mb-1">Country</label>
    <div className="relative">
      <select className="w-full px-4 py-3 border rounded-xl appearance-none">
        <option>United States</option>
        <option>United Kingdom</option>
      </select>
      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
    </div>
  </div>
</div>`
  },
  {
    id: 'otp',
    title: 'OTP Form',
    component: (
      <div className="w-80 bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Lock className="w-8 h-8 text-indigo-600" />
        </div>
        <h2 className="text-xl font-bold text-slate-800 mb-2">Verify Your Email</h2>
        <p className="text-slate-500 text-sm mb-6">We sent a code to john@example.com</p>
        <div className="flex gap-3 justify-center mb-6">
          {[1,2,3,4].map(i => (
            <input key={i} type="text" maxLength={1} className="w-12 h-14 text-center text-xl font-bold border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
          ))}
        </div>
        <button className="w-full py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-all">Verify</button>
        <p className="text-sm text-slate-500 mt-4">Didn't receive code? <a href="#" className="text-indigo-600 hover:underline">Resend</a></p>
      </div>
    ),
    code: `<div className="w-80 bg-white rounded-2xl shadow-xl p-8 text-center">
  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
    <Lock className="w-8 h-8 text-indigo-600" />
  </div>
  <h2 className="text-xl font-bold mb-2">Verify Your Email</h2>
  <p className="text-slate-500 text-sm mb-6">We sent a code to...</p>
  <div className="flex gap-3 justify-center mb-6">
    {[1,2,3,4].map(i => (
      <input key={i} type="text" maxLength={1} className="w-12 h-14 text-center text-xl font-bold border rounded-xl" />
    ))}
  </div>
  <button className="w-full py-3 bg-indigo-600 text-white rounded-xl">Verify</button>
</div>`
  }
];