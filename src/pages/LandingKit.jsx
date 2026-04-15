import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Eye,
  Code,
  Copy,
  Check,
  Sparkles,
  Zap,
  Shield,
  Users,
  BarChart3,
  Clock,
  Star,
  Play,
  Mail,
  Github
} from 'lucide-react';
import { toast } from 'sonner';
import FloatingShapes from '../components/ui-kit/FloatingShapes';

export default function LandingKitPage() {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const fullLandingCode = `// Full Landing Page Template
// Copy this code to create a complete landing page

import React from 'react';
import { Sparkles, ArrowRight, Zap, Shield, Users, BarChart3, Star, Play, ChevronRight, Mail, Github } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" /> Announcing our Series A
          </span>
          <h1 className="text-6xl font-bold text-slate-900 mb-6">
            Build products that users love
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            The all-in-one platform for modern teams. Design, prototype, and ship.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-4 bg-indigo-600 text-white font-medium rounded-xl">
              Get Started Free
            </button>
            <button className="px-8 py-4 bg-white border text-slate-700 font-medium rounded-xl flex items-center gap-2">
              <Play className="w-5 h-5" /> Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-slate-600">
              Powerful features designed for modern development
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'Lightning Fast' },
              { icon: Shield, title: 'Secure by Default' },
              { icon: Users, title: 'Team Collaboration' },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl border hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-500">Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Simple, transparent pricing
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {[
              { name: 'Starter', price: 9 },
              { name: 'Pro', price: 29, popular: true },
              { name: 'Enterprise', price: 99 },
            ].map((plan, i) => (
              <div key={i} className={\`bg-white rounded-2xl p-8 \${plan.popular ? 'ring-2 ring-indigo-600' : 'border'}\`}>
                {plan.popular && (
                  <span className="px-3 py-1 bg-indigo-600 text-white text-xs rounded-full">Popular</span>
                )}
                <h3 className="text-xl font-semibold mt-4">{plan.name}</h3>
                <div className="my-6">
                  <span className="text-4xl font-bold">\${plan.price}</span>
                  <span className="text-slate-500">/month</span>
                </div>
                <button className={\`w-full py-3 rounded-xl \${plan.popular ? 'bg-indigo-600 text-white' : 'bg-slate-100'}\`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-xl text-indigo-100 mb-8">Join thousands of teams already using our platform.</p>
            <button className="px-8 py-4 bg-white text-indigo-600 font-medium rounded-xl">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">FluidUI</h3>
              <p className="text-slate-400">Building beautiful products.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>© 2024 FluidUI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullLandingCode);
    setCopied(true);
    toast.success('Code copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="relative">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to={createPageUrl('Home')} className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back</span>
            </Link>
            <div className="h-6 w-px bg-slate-200" />
            <h1 className="text-xl font-bold">
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Fluid</span>UI
              <span className="text-slate-400 font-normal ml-2">/ Landing Kit</span>
            </h1>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowCode(!showCode)}
              className={`px-4 py-2 rounded-xl font-medium flex items-center gap-2 transition-all ${
                showCode ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {showCode ? <Eye className="w-4 h-4" /> : <Code className="w-4 h-4" />}
              {showCode ? 'Preview' : 'View Code'}
            </button>
            <button
              onClick={handleCopy}
              className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-medium flex items-center gap-2 hover:bg-indigo-700 transition-all"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              Copy All Code
            </button>
          </div>
        </div>
      </header>

      {showCode ? (
        <div className="p-8 bg-slate-900">
          <pre className="text-sm text-slate-300 overflow-x-auto">
            <code>{fullLandingCode}</code>
          </pre>
        </div>
      ) : (
        <>
          {/* Hero Section */}
          <section className="relative overflow-hidden py-12 sm:py-20 lg:py-24">
            <FloatingShapes variant="default" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-8">
                  <Sparkles className="w-4 h-4" /> Announcing our Series A
                </span>
                <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                  Build products that
                  <br />
                  <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">users love</span>
                </h1>
                <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                  The all-in-one platform for modern teams. Design, prototype, and ship stunning products with ease.
                </p>
                <div className="flex items-center justify-center gap-4">
                  <button className="px-8 py-4 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/30">
                    Get Started Free
                  </button>
                  <button className="px-8 py-4 bg-white text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-all border border-slate-200 flex items-center gap-2">
                    <Play className="w-5 h-5" /> Watch Demo
                  </button>
                </div>
                
                <div className="mt-16 flex items-center justify-center gap-8">
                  <div className="flex -space-x-3">
                    {[1,2,3,4,5].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/60?img=${i+20}`} className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                    ))}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                    </div>
                    <p className="text-sm text-slate-500">Loved by 10,000+ teams</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Logos */}
          <section className="py-16 border-y border-slate-200 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
              <p className="text-center text-sm text-slate-500 mb-8">Trusted by the world's most innovative teams</p>
              <div className="flex items-center justify-center gap-16 opacity-50">
                {['Google', 'Microsoft', 'Stripe', 'Airbnb', 'Netflix'].map(brand => (
                  <span key={brand} className="text-2xl font-bold text-slate-400">{brand}</span>
                ))}
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Everything you need to succeed</h2>
                <p className="text-xl text-slate-600">Powerful features designed for modern development teams</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: Zap, title: 'Lightning Fast', desc: 'Build and deploy in seconds with our optimized workflow.' },
                  { icon: Shield, title: 'Secure by Default', desc: 'Enterprise-grade security with end-to-end encryption.' },
                  { icon: Users, title: 'Team Collaboration', desc: 'Work together seamlessly with real-time sync.' },
                  { icon: BarChart3, title: 'Advanced Analytics', desc: 'Get insights that help you make better decisions.' },
                  { icon: Clock, title: 'Save Time', desc: 'Automate repetitive tasks and focus on what matters.' },
                  { icon: Sparkles, title: 'AI Powered', desc: 'Smart suggestions and automated workflows.' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-xl transition-all group"
                  >
                    <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                      <item.icon className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">{item.title}</h3>
                    <p className="text-slate-500">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="py-24 bg-slate-50">
            <div className="max-w-5xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Simple, transparent pricing</h2>
                <p className="text-xl text-slate-600">Choose the plan that's right for you</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { name: 'Starter', price: 9, features: ['5 projects', 'Basic analytics', 'Email support'], popular: false },
                  { name: 'Pro', price: 29, features: ['Unlimited projects', 'Advanced analytics', 'Priority support', 'Custom integrations'], popular: true },
                  { name: 'Enterprise', price: 99, features: ['Everything in Pro', 'Dedicated support', 'Custom contracts', 'SLA'], popular: false },
                ].map((plan, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`bg-white rounded-2xl p-8 ${plan.popular ? 'ring-2 ring-indigo-600 scale-105' : 'border border-slate-200'}`}
                  >
                    {plan.popular && <span className="inline-block px-3 py-1 bg-indigo-600 text-white text-xs font-medium rounded-full mb-4">Most Popular</span>}
                    <h3 className="text-xl font-semibold text-slate-800">{plan.name}</h3>
                    <div className="my-6">
                      <span className="text-4xl font-bold text-slate-900">${plan.price}</span>
                      <span className="text-slate-500">/month</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                          <Check className="w-4 h-4 text-emerald-500" /> {feature}
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-3 font-medium rounded-xl ${plan.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'} transition-all`}>
                      Get Started
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-24">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Loved by thousands</h2>
                <p className="text-xl text-slate-600">Here's what our customers have to say</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { name: 'Sarah J.', role: 'CEO at TechFlow', text: 'This product has completely transformed how our team works. Highly recommended!' },
                  { name: 'Michael C.', role: 'Designer at Figma', text: 'The best tool I\'ve ever used. It\'s intuitive, fast, and incredibly powerful.' },
                  { name: 'Emma W.', role: 'Founder at Startup', text: 'We\'ve saved countless hours since switching. The ROI has been incredible.' },
                ].map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-slate-50 rounded-2xl p-8"
                  >
                    <div className="flex items-center gap-1 mb-6">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
                    </div>
                    <p className="text-lg text-slate-600 mb-6">"{t.text}"</p>
                    <div className="flex items-center gap-3">
                      <img src={`https://i.pravatar.cc/60?img=${i+30}`} className="w-12 h-12 rounded-full object-cover" />
                      <div>
                        <p className="font-semibold text-slate-800">{t.name}</p>
                        <p className="text-sm text-slate-500">{t.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24">
            <div className="max-w-4xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-3xl p-12 text-center relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="relative z-10">
                  <h2 className="text-4xl font-bold text-white mb-4">Ready to get started?</h2>
                  <p className="text-xl text-indigo-100 mb-8 max-w-xl mx-auto">Join thousands of teams already using FluidUI to build amazing products.</p>
                  <div className="flex items-center justify-center gap-4">
                    <button className="px-8 py-4 bg-white text-indigo-600 font-medium rounded-xl hover:bg-indigo-50 transition-all">
                      Start Free Trial
                    </button>
                    <button className="px-8 py-4 bg-indigo-500 text-white font-medium rounded-xl hover:bg-indigo-400 transition-all border border-indigo-400">
                      Contact Sales
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
          {/* Newsletter */}
          <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-indigo-600/5 backdrop-blur-3xl" />
            <div className="max-w-xl mx-auto px-6 text-center relative z-10">
              <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-500/20">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Stay in the loop</h3>
              <p className="text-slate-600 mb-8 text-lg">Get the latest updates and design tips delivered to your inbox</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm" 
                  />
                </div>
                <button className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/25 hover:scale-[1.02] active:scale-[0.98]">
                  Subscribe
                </button>
              </div>
              <p className="mt-4 text-xs text-slate-400">Join 5,000+ subscribers. No spam, ever.</p>
            </div>
          </section>
          </>
        )}
      </div>

      {/* Footer */}
      {!showCode && (
        <footer className="py-24 bg-slate-900 text-white relative z-20 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
          
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-12 gap-12 mb-20">
              <div className="col-span-2 md:col-span-4">
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-xl shadow-indigo-500/20">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-3xl font-bold tracking-tight">FluidUI</span>
                </div>
                <p className="text-slate-400 mb-10 max-w-sm text-lg leading-relaxed">
                  The ultimate component library for modern web applications. Build faster, ship sooner, and delight your users.
                </p>
                <div className="flex items-center gap-5">
                  {[
                    { icon: Github, href: '#', label: 'GitHub' },
                    { icon: Mail, href: '#', label: 'Email' },
                    { icon: Star, href: '#', label: 'Star on GitHub' }
                  ].map((social, i) => (
                    <a 
                      key={i} 
                      href={social.href} 
                      aria-label={social.label}
                      className="w-12 h-12 rounded-2xl bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300"
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="md:col-span-2">
                <h4 className="font-bold text-white mb-8 uppercase text-xs tracking-[0.2em]">Product</h4>
                <ul className="space-y-5 text-slate-400">
                  <li><a href="#" className="hover:text-indigo-400 transition-colors">Components</a></li>
                  <li><a href="#" className="hover:text-indigo-400 transition-colors">Templates</a></li>
                  <li><a href="#" className="hover:text-indigo-400 transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-indigo-400 transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-indigo-400 transition-colors">Changelog</a></li>
                </ul>
              </div>

              <div className="md:col-span-2">
                <h4 className="font-bold text-white mb-8 uppercase text-xs tracking-[0.2em]">Resources</h4>
                <ul className="space-y-5 text-slate-400">
                  <li><a href="#" className="hover:text-indigo-400 transition-colors">Community</a></li>
                  <li><a href="#" className="hover:text-indigo-400 transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-indigo-400 transition-colors">API Reference</a></li>
                  <li><a href="#" className="hover:text-indigo-400 transition-colors">Status Page</a></li>
                  <li><a href="#" className="hover:text-indigo-400 transition-colors">Partners</a></li>
                </ul>
              </div>

              <div className="md:col-span-2">
                <h4 className="font-bold text-white mb-8 uppercase text-xs tracking-[0.2em]">Company</h4>
                <ul className="space-y-5 text-slate-400">
                  <li><a href="#" className="hover:text-indigo-400 transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-indigo-400 transition-colors">Our Story</a></li>
                  <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-indigo-400 transition-colors">Press Kit</a></li>
                  <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact</a></li>
                </ul>
              </div>

              <div className="md:col-span-2">
                <h4 className="font-bold text-white mb-8 uppercase text-xs tracking-[0.2em]">Legal</h4>
                <ul className="space-y-5 text-slate-400">
                  <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-indigo-400 transition-colors">Cookie Policy</a></li>
                  <li><a href="#" className="hover:text-indigo-400 transition-colors">Security</a></li>
                </ul>
              </div>
            </div>
            
            <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-indigo-500/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-indigo-400" />
                </div>
                <p className="text-sm text-slate-500 font-medium tracking-wide">© 2026 FluidUI. Designed for the future.</p>
              </div>
              <div className="flex items-center gap-10">
                {['Twitter', 'GitHub', 'LinkedIn', 'Discord', 'Dribbble'].map(social => (
                  <a key={social} href="#" className="text-sm text-slate-500 hover:text-white transition-colors duration-300">{social}</a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}