import { motion } from "motion/react";
import { ArrowRight, Box, Code, Layout } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold text-liquid-cyan mb-8 border-liquid-cyan/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-liquid-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-liquid-cyan"></span>
            </span>
            LiqUId v2.0 is now live
          </span>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            Build <span className="text-gradient">Professional</span> <br />
            Interfaces in Seconds.
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-400 mb-12 leading-relaxed">
            The open-source library of glossy, animated, and high-performance React & HTML components for your next big product.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-black font-bold flex items-center justify-center gap-2 shadow-xl shadow-white/10"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl glass font-bold flex items-center justify-center gap-2"
            >
              Browse Components
            </motion.button>
          </div>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
          {[
            {
              icon: <Box className="w-6 h-6 text-liquid-blue" />,
              title: "3D Components",
              desc: "Interactive 3D elements that bring your site to life with zero performance cost."
            },
            {
              icon: <Code className="w-6 h-6 text-liquid-cyan" />,
              title: "React & HTML",
              desc: "Copy-paste ready code for both React (Motion) and pure HTML/CSS environments."
            },
            {
              icon: <Layout className="w-6 h-6 text-liquid-purple" />,
              title: "Full Templates",
              desc: "Production-ready landing pages designed for high conversion and premium feel."
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="glossy-card p-8 text-left group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
