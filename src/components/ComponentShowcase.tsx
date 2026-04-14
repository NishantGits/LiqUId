import { motion } from "motion/react";
import { useState, type ReactNode } from "react";
import { Copy, Check, Eye, Code as CodeIcon } from "lucide-react";

interface ComponentItem {
  id: string;
  name: string;
  description: string;
  preview: ReactNode;
  code: string;
}

export default function ComponentShowcase() {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const components: ComponentItem[] = [
    {
      id: "glossy-button",
      name: "Liquid Button",
      description: "A high-end button with a fluid hover effect and subtle glow.",
      preview: (
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-xl bg-gradient-to-r from-liquid-blue to-liquid-cyan text-white font-bold shadow-lg transition-shadow"
        >
          Liquid Action
        </motion.button>
      ),
      code: `<motion.button
  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)" }}
  whileTap={{ scale: 0.95 }}
  className="px-8 py-3 rounded-xl bg-gradient-to-r from-liquid-blue to-liquid-cyan text-white font-bold shadow-lg transition-shadow"
>
  Liquid Action
</motion.button>`
    },
    {
      id: "glass-card",
      name: "Glassmorphism Card",
      description: "A professional card with backdrop blur and animated border glow.",
      preview: (
        <div className="relative group w-64 h-40">
          <div className="absolute -inset-1 bg-gradient-to-r from-liquid-cyan to-liquid-purple rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative glass-dark rounded-2xl p-6 h-full flex flex-col justify-between">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-liquid-cyan"></div>
            </div>
            <div className="text-left">
              <p className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Premium</p>
              <h4 className="text-lg font-bold">Liquid Card</h4>
            </div>
          </div>
        </div>
      ),
      code: `<div className="relative group w-64 h-40">
  <div className="absolute -inset-1 bg-gradient-to-r from-liquid-cyan to-liquid-purple rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
  <div className="relative glass-dark rounded-2xl p-6 h-full flex flex-col justify-between">
    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
      <div className="w-4 h-4 rounded-full bg-liquid-cyan"></div>
    </div>
    <div className="text-left">
      <p className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Premium</p>
      <h4 className="text-lg font-bold">Liquid Card</h4>
    </div>
  </div>
</div>`
    },
    {
      id: "interactive-badge",
      name: "Pulse Badge",
      description: "A subtle badge with a continuous pulse animation for status indicators.",
      preview: (
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold text-liquid-cyan border-liquid-cyan/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-liquid-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-liquid-cyan"></span>
          </span>
          Live Status
        </span>
      ),
      code: `<span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold text-liquid-cyan border-liquid-cyan/20">
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-liquid-cyan opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-liquid-cyan"></span>
  </span>
  Live Status
</span>`
    }
  ];

  const handleCopy = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="components" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="text-left">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Component Library</h2>
            <p className="text-neutral-400 max-w-xl">
              A curated collection of professional UI elements. Designed for performance, accessibility, and pure visual delight.
            </p>
          </div>
          <div className="flex p-1 glass rounded-xl">
            <button
              onClick={() => setActiveTab("preview")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "preview" ? "bg-white text-black" : "text-neutral-400 hover:text-white"
              }`}
            >
              <Eye className="w-4 h-4" />
              Preview
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "code" ? "bg-white text-black" : "text-neutral-400 hover:text-white"
              }`}
            >
              <CodeIcon className="w-4 h-4" />
              Code
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {components.map((comp) => (
            <div key={comp.id} className="glossy-card group">
              <div className="p-6 border-b border-white/5 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg">{comp.name}</h3>
                  <p className="text-xs text-neutral-500 mt-1">{comp.description}</p>
                </div>
                <button
                  onClick={() => handleCopy(comp.id, comp.code)}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  {copiedId === comp.id ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              
              <div className="p-12 flex items-center justify-center min-h-[300px] bg-black/20">
                {activeTab === "preview" ? (
                  comp.preview
                ) : (
                  <div className="w-full h-full overflow-auto">
                    <pre className="text-left text-sm font-mono text-liquid-cyan p-4 rounded-xl bg-black/40 border border-white/5">
                      <code>{comp.code}</code>
                    </pre>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
