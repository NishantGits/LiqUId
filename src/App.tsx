import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LiquidBackground from "./components/LiquidBackground";
import ComponentShowcase from "./components/ComponentShowcase";
import { motion } from "motion/react";
import { ArrowRight, Layers, Zap, Shield, Droplets } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen">
      <LiquidBackground />
      <Navbar />
      
      <main>
        <Hero />
        
        <ComponentShowcase />

        {/* Templates Section */}
        <section id="templates" className="py-24 px-6 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Premium Templates</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Full landing pages and dashboards built with LiqUId components. Perfect for SaaS, Portfolios, and E-commerce.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Aura SaaS",
                  category: "Landing Page",
                  image: "https://picsum.photos/seed/aura/800/600",
                  features: ["Dark Mode", "Framer Motion", "Tailwind v4"]
                },
                {
                  title: "Prism Dashboard",
                  category: "Admin Panel",
                  image: "https://picsum.photos/seed/prism/800/600",
                  features: ["Data Viz", "Glassmorphism", "Responsive"]
                }
              ].map((template, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="glossy-card group cursor-pointer"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={template.image} 
                      alt={template.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-liquid-cyan uppercase tracking-widest">{template.category}</span>
                      <div className="flex gap-2">
                        {template.features.map(f => (
                          <span key={f} className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-400">{f}</span>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{template.title}</h3>
                    <button className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-liquid-cyan transition-colors">
                      Live Preview <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why LiqUId Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  Why developers <br /> choose <span className="text-gradient">LiqUId</span>.
                </h2>
                <div className="space-y-8">
                  {[
                    {
                      icon: <Zap className="w-6 h-6 text-yellow-400" />,
                      title: "Blazing Fast Performance",
                      desc: "Optimized for Core Web Vitals. No heavy libraries, just pure CSS and lightweight motion."
                    },
                    {
                      icon: <Layers className="w-6 h-6 text-blue-400" />,
                      title: "Fully Customizable",
                      desc: "Built with Tailwind CSS. Change colors, spacing, and typography in seconds."
                    },
                    {
                      icon: <Shield className="w-6 h-6 text-green-400" />,
                      title: "Production Ready",
                      desc: "Tested across all modern browsers. Accessible, responsive, and secure by default."
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                        <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-liquid-blue to-liquid-purple rounded-[3rem] blur-2xl opacity-20"></div>
                <div className="relative glossy-card p-2">
                  <img 
                    src="https://picsum.photos/seed/code/800/1000" 
                    alt="Code Preview" 
                    className="rounded-[2rem] w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto glass rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-liquid-blue/10 to-liquid-purple/10 -z-10"></div>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">Ready to build something <span className="text-gradient">beautiful</span>?</h2>
            <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
              Join 10,000+ developers building the future of the web with LiqUId.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white text-black font-bold text-lg shadow-2xl shadow-white/20 hover:scale-105 transition-transform">
                Start Building Now
              </button>
              <button className="w-full sm:w-auto px-10 py-5 rounded-2xl glass font-bold text-lg hover:bg-white/10 transition-colors">
                Join Discord
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-liquid-blue to-liquid-cyan flex items-center justify-center">
              <Droplets className="text-white w-5 h-5" />
            </div>
            <span className="font-display text-xl font-bold">LiqUId</span>
          </div>
          <p className="text-neutral-500 text-sm">
            © 2026 LiqUId Design System. Open source under MIT License.
          </p>
          <div className="flex gap-6">
            {["Twitter", "GitHub", "Discord", "Dribbble"].map(item => (
              <a key={item} href="#" className="text-neutral-500 hover:text-white transition-colors text-sm font-medium">{item}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
