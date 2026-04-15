import React from 'react';
import { ArrowRight, Check, Star, Zap, Shield, Sparkles, Play, Users, BarChart3, Clock, ChevronRight, Quote, Mail } from 'lucide-react';

export const sections = [
  {
    id: 'hero-centered',
    title: 'Hero Centered',
    component: (
      <div className="w-full bg-gradient-to-b from-slate-50 to-white rounded-theme p-12 text-center relative overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-theme-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-theme-secondary/10 rounded-full blur-3xl" />
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-theme-primary/10 text-theme-primary rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" /> New: AI-powered features
          </span>
          <h1 className="text-5xl font-bold text-slate-900 mb-6 max-w-3xl mx-auto leading-tight">Build beautiful products faster than ever before</h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">The all-in-one platform for modern teams. Design, prototype, and ship stunning products with ease.</p>
          <div className="flex items-center justify-center gap-4">
            <button className="px-8 py-4 bg-theme-primary text-white font-medium rounded-theme hover:opacity-90 transition-all shadow-lg shadow-theme-primary/30">Get Started Free</button>
            <button className="px-8 py-4 bg-white text-slate-700 font-medium rounded-theme hover:bg-slate-50 transition-all border border-slate-200 flex items-center gap-2">
              <Play className="w-5 h-5" /> Watch Demo
            </button>
          </div>
        </div>
      </div>
    ),
    code: `<section className="w-full bg-gradient-to-b from-slate-50 to-white rounded-theme p-12 text-center relative overflow-hidden">
  <div className="absolute top-20 left-20 w-64 h-64 bg-theme-primary/10 rounded-full blur-3xl" />
  <div className="absolute bottom-20 right-20 w-64 h-64 bg-theme-secondary/10 rounded-full blur-3xl" />
  <div className="relative z-10">
    <span className="inline-flex items-center gap-2 px-4 py-2 bg-theme-primary/10 text-theme-primary rounded-full text-sm font-medium mb-6">
      <Sparkles className="w-4 h-4" /> New: AI-powered features
    </span>
    <h1 className="text-5xl font-bold mb-6">Build beautiful products faster</h1>
    <p className="text-xl text-slate-600 mb-8">The all-in-one platform for modern teams...</p>
    <div className="flex items-center justify-center gap-4">
      <button className="px-8 py-4 bg-theme-primary text-white rounded-theme shadow-lg shadow-theme-primary/30">Get Started Free</button>
      <button className="px-8 py-4 bg-white border rounded-theme flex items-center gap-2">Watch Demo</button>
    </div>
  </div>
</section>`
  },
  {
    id: 'features-grid',
    title: 'Features Grid',
    component: (
      <div className="w-full bg-white rounded-theme p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything you need to succeed</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Powerful features designed to help you build better products, faster.</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {[
            { icon: Zap, title: 'Lightning Fast', desc: 'Build and deploy in seconds with our optimized workflow.' },
            { icon: Shield, title: 'Secure by Default', desc: 'Enterprise-grade security with end-to-end encryption.' },
            { icon: Users, title: 'Team Collaboration', desc: 'Work together seamlessly with real-time sync.' },
            { icon: BarChart3, title: 'Advanced Analytics', desc: 'Get insights that help you make better decisions.' },
            { icon: Clock, title: 'Save Time', desc: 'Automate repetitive tasks and focus on what matters.' },
            { icon: Sparkles, title: 'AI Powered', desc: 'Smart suggestions and automated workflows.' },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-theme border border-slate-200 hover:border-theme-primary hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-theme-primary/10 rounded-theme flex items-center justify-center mb-4 group-hover:bg-theme-primary transition-colors">
                <item.icon className="w-6 h-6 text-theme-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    code: `<section className="w-full bg-white rounded-theme p-12">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold mb-4">Everything you need to succeed</h2>
    <p className="text-lg text-slate-600">Powerful features designed to help you...</p>
  </div>
  <div className="grid grid-cols-3 gap-6">
    {features.map((item, i) => (
      <div key={i} className="p-6 rounded-theme border hover:border-theme-primary hover:shadow-lg transition-all group">
        <div className="w-12 h-12 bg-theme-primary/10 rounded-theme flex items-center justify-center mb-4 group-hover:bg-theme-primary transition-colors">
          <item.icon className="w-6 h-6 text-theme-primary group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
        <p className="text-slate-500 text-sm">{item.desc}</p>
      </div>
    ))}
  </div>
</section>`
  },
  {
    id: 'pricing',
    title: 'Pricing Section',
    component: (
      <div className="w-full bg-slate-50 rounded-theme p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Simple, transparent pricing</h2>
          <p className="text-lg text-slate-600">Choose the plan that's right for you</p>
        </div>
        <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { name: 'Starter', price: 9, features: ['5 projects', 'Basic analytics', 'Email support'], popular: false },
            { name: 'Pro', price: 29, features: ['Unlimited projects', 'Advanced analytics', 'Priority support', 'Custom integrations'], popular: true },
            { name: 'Enterprise', price: 99, features: ['Everything in Pro', 'Dedicated support', 'Custom contracts', 'SLA'], popular: false },
          ].map((plan, i) => (
            <div key={i} className={`bg-white rounded-theme p-8 ${plan.popular ? 'ring-2 ring-theme-primary scale-105' : 'border border-slate-200'}`}>
              {plan.popular && <span className="inline-block px-3 py-1 bg-theme-primary text-white text-xs font-medium rounded-full mb-4">Most Popular</span>}
              <h3 className="text-xl font-semibold text-slate-800">{plan.name}</h3>
              <div className="my-4">
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
              <button className={`w-full py-3 font-medium rounded-theme ${plan.popular ? 'bg-theme-primary text-white hover:opacity-90' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'} transition-all`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    ),
    code: `<section className="w-full bg-slate-50 rounded-theme p-12">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold mb-4">Simple, transparent pricing</h2>
    <p className="text-lg text-slate-600">Choose the plan that's right for you</p>
  </div>
  <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
    {plans.map((plan, i) => (
      <div key={i} className={\`bg-white rounded-theme p-8 \${plan.popular ? 'ring-2 ring-theme-primary scale-105' : 'border'}\`}>
        <h3 className="text-xl font-semibold">{plan.name}</h3>
        <div className="my-4">
          <span className="text-4xl font-bold">\${plan.price}</span>
          <span className="text-slate-500">/month</span>
        </div>
        <ul className="space-y-3 mb-8">...</ul>
        <button className="w-full py-3 bg-theme-primary text-white rounded-theme">Get Started</button>
      </div>
    ))}
  </div>
</section>`
  },
  {
    id: 'testimonials',
    title: 'Testimonials',
    component: (
      <div className="w-full bg-white rounded-theme p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Loved by thousands</h2>
          <p className="text-lg text-slate-600">Here's what our customers have to say</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {[
            { name: 'Sarah J.', role: 'CEO at TechFlow', text: 'This product has completely transformed how our team works. Highly recommended!' },
            { name: 'Michael C.', role: 'Designer at Figma', text: 'The best tool I\'ve ever used. It\'s intuitive, fast, and incredibly powerful.' },
            { name: 'Emma W.', role: 'Founder at Startup', text: 'We\'ve saved countless hours since switching. The ROI has been incredible.' },
          ].map((t, i) => (
            <div key={i} className="bg-slate-50 rounded-theme p-6">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-slate-600 mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img src={`https://i.pravatar.cc/60?img=${i+30}`} className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
                <div>
                  <p className="font-medium text-slate-800">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    code: `<section className="w-full bg-white rounded-theme p-12">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold mb-4">Loved by thousands</h2>
    <p className="text-lg text-slate-600">Here's what our customers have to say</p>
  </div>
  <div className="grid grid-cols-3 gap-6">
    {testimonials.map((t, i) => (
      <div key={i} className="bg-slate-50 rounded-theme p-6">
        <div className="flex items-center gap-1 mb-4">
          {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-amber-400" />)}
        </div>
        <p className="text-slate-600 mb-6">"{t.text}"</p>
        <div className="flex items-center gap-3">
          <img src={t.avatar} className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-medium">{t.name}</p>
            <p className="text-sm text-slate-500">{t.role}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>`
  },
  {
    id: 'cta',
    title: 'Call to Action',
    component: (
      <div className="w-full bg-gradient-to-r from-theme-primary to-theme-secondary rounded-theme p-12 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-xl mx-auto">Join thousands of teams already using FluidUI to build amazing products.</p>
          <div className="flex items-center justify-center gap-4">
            <button className="px-8 py-4 bg-white text-theme-primary font-medium rounded-theme hover:bg-indigo-50 transition-all">Start Free Trial</button>
            <button className="px-8 py-4 bg-theme-primary/20 text-white font-medium rounded-theme hover:bg-theme-primary/30 transition-all border border-white/20">Contact Sales</button>
          </div>
        </div>
      </div>
    ),
    code: `<section className="w-full bg-gradient-to-r from-theme-primary to-theme-secondary rounded-theme p-12 text-center text-white relative overflow-hidden">
  <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
  <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
  <div className="relative z-10">
    <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
    <p className="text-xl text-indigo-100 mb-8">Join thousands of teams...</p>
    <div className="flex items-center justify-center gap-4">
      <button className="px-8 py-4 bg-white text-theme-primary rounded-theme">Start Free Trial</button>
      <button className="px-8 py-4 bg-theme-primary/20 text-white border border-white/20 rounded-theme">Contact Sales</button>
    </div>
  </div>
</section>`
  },
  {
    id: 'stats',
    title: 'Stats Section',
    component: (
      <div className="w-full bg-white rounded-theme p-12">
        <div className="grid grid-cols-4 gap-8">
          {[
            { value: '10M+', label: 'Active Users' },
            { value: '99.9%', label: 'Uptime' },
            { value: '150+', label: 'Countries' },
            { value: '24/7', label: 'Support' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl font-bold bg-gradient-to-r from-theme-primary to-theme-secondary bg-clip-text text-transparent">{stat.value}</p>
              <p className="text-slate-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    code: `<section className="w-full bg-white rounded-theme p-12">
  <div className="grid grid-cols-4 gap-8">
    {stats.map((stat, i) => (
      <div key={i} className="text-center">
        <p className="text-4xl font-bold bg-gradient-to-r from-theme-primary to-theme-secondary bg-clip-text text-transparent">{stat.value}</p>
        <p className="text-slate-600 mt-2">{stat.label}</p>
      </div>
    ))}
  </div>
</section>`
  },
  {
    id: 'newsletter',
    title: 'Newsletter Section',
    component: (
      <div className="w-full bg-slate-900 rounded-theme p-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Stay in the loop</h2>
        <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">Get the latest updates, tips, and exclusive content delivered to your inbox.</p>
        <div className="flex items-center justify-center gap-4 max-w-md mx-auto">
          <div className="flex-1 relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input type="email" placeholder="Enter your email" className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-theme text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-theme-primary" />
          </div>
          <button className="px-6 py-3 bg-theme-primary text-white font-medium rounded-theme hover:opacity-90 transition-all">Subscribe</button>
        </div>
      </div>
    ),
    code: `<section className="w-full bg-slate-900 rounded-theme p-12 text-center">
  <h2 className="text-3xl font-bold text-white mb-4">Stay in the loop</h2>
  <p className="text-lg text-slate-400 mb-8">Get the latest updates...</p>
  <div className="flex items-center justify-center gap-4 max-w-md mx-auto">
    <div className="flex-1 relative">
      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
      <input type="email" placeholder="Enter your email" className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-theme text-white" />
    </div>
    <button className="px-6 py-3 bg-theme-primary text-white rounded-theme">Subscribe</button>
  </div>
</section>`
  },
  {
    id: 'faq',
    title: 'FAQ Section',
    component: (
      <div className="w-full bg-white rounded-theme p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently asked questions</h2>
          <p className="text-lg text-slate-600">Everything you need to know</p>
        </div>
        <div className="max-w-2xl mx-auto space-y-4">
          {[
            { q: 'How do I get started?', a: 'Simply sign up for a free account and you can start using FluidUI immediately. No credit card required.' },
            { q: 'Can I cancel anytime?', a: 'Yes, you can cancel your subscription at any time. No questions asked.' },
            { q: 'Do you offer refunds?', a: 'We offer a 30-day money-back guarantee if you\'re not satisfied with our product.' },
          ].map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-theme p-5">
              <button className="w-full flex items-center justify-between text-left">
                <span className="font-medium text-slate-800">{faq.q}</span>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </button>
              <p className="text-slate-600 text-sm mt-3">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    code: `<section className="w-full bg-white rounded-theme p-12">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold mb-4">Frequently asked questions</h2>
    <p className="text-lg text-slate-600">Everything you need to know</p>
  </div>
  <div className="max-w-2xl mx-auto space-y-4">
    {faqs.map((faq, i) => (
      <div key={i} className="border rounded-theme p-5">
        <button className="w-full flex items-center justify-between">
          <span className="font-medium">{faq.q}</span>
          <ChevronRight className="w-5 h-5" />
        </button>
        <p className="text-slate-600 text-sm mt-3">{faq.a}</p>
      </div>
    ))}
  </div>
</section>`
  },
  {
    id: 'footer',
    title: 'Footer Section',
    component: (
      <div className="w-full bg-slate-900 rounded-theme p-12 text-white">
        <div className="grid grid-cols-4 gap-8 mb-12">
          <div>
            <span className="text-xl font-bold">FluidUI</span>
            <p className="text-slate-400 mt-4 text-sm">Building beautiful products for the modern web.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-theme-primary">Features</a></li>
              <li><a href="#" className="hover:text-theme-primary">Pricing</a></li>
              <li><a href="#" className="hover:text-theme-primary">Documentation</a></li>
              <li><a href="#" className="hover:text-theme-primary">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-theme-primary">About</a></li>
              <li><a href="#" className="hover:text-theme-primary">Blog</a></li>
              <li><a href="#" className="hover:text-theme-primary">Careers</a></li>
              <li><a href="#" className="hover:text-theme-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-theme-primary">Privacy</a></li>
              <li><a href="#" className="hover:text-theme-primary">Terms</a></li>
              <li><a href="#" className="hover:text-theme-primary">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex items-center justify-between">
          <p className="text-sm text-slate-400">© 2024 FluidUI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-400 hover:text-theme-primary">Twitter</a>
            <a href="#" className="text-slate-400 hover:text-theme-primary">GitHub</a>
            <a href="#" className="text-slate-400 hover:text-theme-primary">LinkedIn</a>
          </div>
        </div>
      </div>
    ),
    code: `<footer className="w-full bg-slate-900 rounded-theme p-12 text-white">
  <div className="grid grid-cols-4 gap-8 mb-12">
    <div>
      <span className="text-xl font-bold">FluidUI</span>
      <p className="text-slate-400 mt-4 text-sm">Building beautiful products...</p>
    </div>
    <div>
      <h4 className="font-semibold mb-4">Product</h4>
      <ul className="space-y-2 text-sm text-slate-400">
        <li><a href="#" className="hover:text-theme-primary">Features</a></li>
        <li><a href="#" className="hover:text-theme-primary">Pricing</a></li>
      </ul>
    </div>
    ...
  </div>
  <div className="border-t border-slate-800 pt-8 flex items-center justify-between">
    <p className="text-sm text-slate-400">© 2024 FluidUI. All rights reserved.</p>
  </div>
</footer>`
  },
  {
    id: 'hero-split',
    title: 'Hero Split',
    component: (
      <div className="w-full bg-white rounded-theme overflow-hidden">
        <div className="flex">
          <div className="w-1/2 p-12 flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium w-fit mb-6">
              <Check className="w-4 h-4" /> Trusted by 10k+ teams
            </span>
            <h1 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">The modern way to build software products</h1>
            <p className="text-lg text-slate-600 mb-8">Streamline your workflow with our powerful tools designed for modern development teams.</p>
            <div className="flex items-center gap-4">
              <button className="px-6 py-3 bg-theme-primary text-white font-medium rounded-theme hover:opacity-90 transition-all flex items-center gap-2">
                Start Building <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3 text-slate-700 font-medium hover:text-theme-primary transition-all">Learn More</button>
            </div>
          </div>
          <div className="w-1/2 bg-gradient-to-br from-theme-primary to-theme-secondary p-8">
            <div className="w-full h-64 bg-white/20 backdrop-blur rounded-theme" />
          </div>
        </div>
      </div>
    ),
    code: `<section className="w-full bg-white rounded-theme overflow-hidden">
  <div className="flex">
    <div className="w-1/2 p-12 flex flex-col justify-center">
      <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm w-fit mb-6">
        <Check className="w-4 h-4" /> Trusted by 10k+ teams
      </span>
      <h1 className="text-4xl font-bold mb-6">The modern way to build software</h1>
      <p className="text-lg text-slate-600 mb-8">Streamline your workflow...</p>
      <div className="flex items-center gap-4">
        <button className="px-6 py-3 bg-theme-primary text-white rounded-theme flex items-center gap-2">
          Start Building <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
    <div className="w-1/2 bg-gradient-to-br from-theme-primary to-theme-secondary p-8">
      <div className="w-full h-64 bg-white/20 backdrop-blur rounded-theme" />
    </div>
  </div>
</section>`
  }
];