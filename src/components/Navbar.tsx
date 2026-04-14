import { motion } from "motion/react";
import { Droplets, Github, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-2xl px-6 py-3 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-liquid-blue to-liquid-cyan flex items-center justify-center shadow-lg shadow-liquid-blue/20">
              <Droplets className="text-white w-6 h-6" />
            </div>
            <span className="font-display text-2xl font-bold tracking-tight">
              Liq<span className="text-liquid-cyan">UId</span>
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Components", "Templates", "Showcase", "Docs"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span className="text-sm font-medium">Star on GitHub</span>
            </motion.a>
            
            <button 
              className="md:hidden p-2 text-neutral-400 hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-24 left-6 right-6 glass rounded-2xl p-6 flex flex-col gap-4"
        >
          {["Components", "Templates", "Showcase", "Docs"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium text-neutral-400 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <hr className="border-white/10" />
          <a
            href="https://github.com"
            className="flex items-center gap-2 text-lg font-medium text-neutral-400 hover:text-white"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
        </motion.div>
      )}
    </nav>
  );
}
