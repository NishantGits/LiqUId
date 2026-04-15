import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Code, Eye } from 'lucide-react';
import { toast } from 'sonner';

export default function ComponentCard({ title, children, code, className = '' }) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [codeType, setCodeType] = useState('html');

  const convertToHtml = (jsxCode) => {
    if (!jsxCode) return '';
    
    return jsxCode
      .replace(/className=/g, 'class=')
      .replace(/htmlFor=/g, 'for');
  };

  const displayCode = codeType === 'html' ? convertToHtml(code) : code;

  const handleCopy = () => {
    navigator.clipboard.writeText(displayCode);
    setCopied(true);
    toast.success('Code copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-white dark:bg-white/5 rounded-theme border border-slate-200 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 backdrop-blur-sm ${className}`}
    >
      <div className="p-4 border-b border-slate-100 dark:border-white/5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium text-slate-800 dark:text-slate-100">{title}</h3>
          <div className="flex gap-2">
            <button
              onClick={() => setShowCode(!showCode)}
              className="h-8 px-3 text-slate-500 hover:text-theme-primary dark:text-slate-400 dark:hover:text-theme-primary rounded-theme hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            >
              {showCode ? <Eye className="w-4 h-4" /> : <Code className="w-4 h-4" />}
            </button>
            <button
              onClick={handleCopy}
              className="h-8 px-3 text-slate-500 hover:text-theme-primary dark:text-slate-400 dark:hover:text-theme-primary rounded-theme hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
        {showCode && (
          <div className="flex gap-2 text-xs">
            <button
              onClick={() => setCodeType('html')}
              className={`px-3 py-1.5 rounded-theme font-medium transition-colors ${
                codeType === 'html' 
                  ? 'bg-theme-primary text-white' 
                  : 'bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/20'
              }`}
            >
              HTML
            </button>
            <button
              onClick={() => setCodeType('react')}
              className={`px-3 py-1.5 rounded-theme font-medium transition-colors ${
                codeType === 'react' 
                  ? 'bg-theme-primary text-white' 
                  : 'bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/20'
              }`}
            >
              React/JSX
            </button>
          </div>
        )}
      </div>
      
      {showCode ? (
        <div className="p-4 bg-slate-900 dark:bg-black/40 overflow-x-auto">
          <pre className="text-sm text-slate-300 font-mono whitespace-pre-wrap">
            <code>{displayCode}</code>
          </pre>
        </div>
      ) : (
        <div className="p-4 sm:p-8 flex items-center justify-center min-h-[350px] bg-gradient-to-br from-slate-50 to-white dark:from-white/5 dark:to-transparent overflow-hidden relative">
          {/* Virtual Viewport for large components */}
          <div className="w-full h-full flex items-center justify-center overflow-auto scrollbar-hide">
            <div className="w-full max-w-full flex items-center justify-center">
              <div 
                className="origin-center transition-transform duration-500 ease-out"
                style={{ 
                  width: '100%',
                  minWidth: ['sections', 'heroes', 'ctas', 'emails', 'navigation'].some(k => title.toLowerCase().includes(k.slice(0, -1))) ? '1000px' : 'auto',
                  transform: ['sections', 'heroes', 'ctas', 'emails', 'navigation'].some(k => title.toLowerCase().includes(k.slice(0, -1))) ? 'scale(0.65)' : 'scale(1)',
                }}
              >
                <div className="flex items-center justify-center">
                  {children}
                </div>
              </div>
            </div>
          </div>
          
          {/* Size Indicator */}
          <div className="absolute bottom-3 right-3 px-2 py-1 bg-slate-100/80 dark:bg-white/10 backdrop-blur-md rounded-md text-[10px] uppercase tracking-widest text-slate-400 font-bold pointer-events-none">
            Preview Mode
          </div>
        </div>
      )}
    </motion.div>
  );
}