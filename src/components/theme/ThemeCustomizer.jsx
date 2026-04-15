import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, X, Check, Save, Copy } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { toast } from 'sonner';

const fontOptions = [
  { name: 'System', value: 'system-ui, -apple-system, sans-serif' },
  { name: 'Inter', value: 'Inter, system-ui, sans-serif' },
  { name: 'Roboto', value: 'Roboto, system-ui, sans-serif' },
  { name: 'Poppins', value: 'Poppins, system-ui, sans-serif' },
  { name: 'Montserrat', value: 'Montserrat, system-ui, sans-serif' }
];

const radiusOptions = [
  { name: 'None', value: '0' },
  { name: 'Small', value: '0.25rem' },
  { name: 'Medium', value: '0.5rem' },
  { name: 'Large', value: '0.75rem' },
  { name: 'XL', value: '1rem' },
  { name: '2XL', value: '1.5rem' }
];

export default function ThemeCustomizer() {
  const { theme, updateTheme, defaultThemes, applyTheme, saveTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleCopyCSS = () => {
    const css = `:root {
  --theme-primary: ${theme.primary};
  --theme-secondary: ${theme.secondary};
  --theme-font-family: ${theme.fontFamily};
  --theme-border-radius: ${theme.borderRadius};
}`;
    navigator.clipboard.writeText(css);
    toast.success('Theme CSS copied to clipboard');
  };

  const handleSave = () => {
    saveTheme();
    toast.success('Theme saved successfully');
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-full shadow-2xl shadow-indigo-500/40 hover:shadow-indigo-500/60 hover:scale-110 transition-all duration-300"
      >
        <Palette className="w-6 h-6" />
      </motion.button>

      {/* Customizer Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full sm:w-96 bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-6 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-2xl font-bold text-foreground tracking-tight">Theme Customizer</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-slate-500" />
                  </button>
                </div>

                {/* Preset Themes */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-700 mb-3">Preset Themes</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(defaultThemes).map(([key, preset]) => (
                      <button
                        key={key}
                        onClick={() => applyTheme(preset)}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          theme.name === preset.name
                            ? 'border-indigo-500 bg-indigo-50'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div
                            className="w-6 h-6 rounded-full"
                            style={{ backgroundColor: preset.primary }}
                          />
                          <div
                            className="w-6 h-6 rounded-full"
                            style={{ backgroundColor: preset.secondary }}
                          />
                        </div>
                        <p className="text-sm font-medium text-slate-900">{preset.name}</p>
                        {theme.name === preset.name && (
                          <Check className="w-4 h-4 text-indigo-600 mt-1" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Colors */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-700 mb-3">Colors</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-slate-600 mb-2">Primary Color</label>
                      <div className="flex items-center gap-3">
                        <input
                          type="color"
                          value={theme.primary}
                          onChange={(e) => updateTheme({ primary: e.target.value })}
                          className="w-16 h-16 rounded-xl cursor-pointer border-2 border-slate-200"
                        />
                        <input
                          type="text"
                          value={theme.primary}
                          onChange={(e) => updateTheme({ primary: e.target.value })}
                          className="flex-1 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-slate-600 mb-2">Secondary Color</label>
                      <div className="flex items-center gap-3">
                        <input
                          type="color"
                          value={theme.secondary}
                          onChange={(e) => updateTheme({ secondary: e.target.value })}
                          className="w-16 h-16 rounded-xl cursor-pointer border-2 border-slate-200"
                        />
                        <input
                          type="text"
                          value={theme.secondary}
                          onChange={(e) => updateTheme({ secondary: e.target.value })}
                          className="flex-1 px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Font Family */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-700 mb-3">Font Family</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {fontOptions.map((font) => (
                      <button
                        key={font.value}
                        onClick={() => updateTheme({ fontFamily: font.value })}
                        className={`px-4 py-3 rounded-lg border-2 transition-all text-sm font-medium ${
                          theme.fontFamily === font.value
                            ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                        style={{ fontFamily: font.value }}
                      >
                        {font.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Border Radius */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-700 mb-3">Border Radius</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {radiusOptions.map((radius) => (
                      <button
                        key={radius.value}
                        onClick={() => updateTheme({ borderRadius: radius.value })}
                        className={`px-3 py-3 border-2 transition-all text-sm font-medium ${
                          theme.borderRadius === radius.value
                            ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                        style={{ borderRadius: radius.value }}
                      >
                        {radius.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Preview */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-700 mb-3">Preview</h3>
                  <div className="p-4 bg-slate-50 rounded-xl space-y-3">
                    <button
                      className="w-full px-6 py-3 text-white font-medium shadow-lg transition-all hover:opacity-90"
                      style={{
                        backgroundColor: theme.primary,
                        borderRadius: theme.borderRadius,
                        fontFamily: theme.fontFamily
                      }}
                    >
                      Primary Button
                    </button>
                    <button
                      className="w-full px-6 py-3 text-white font-medium shadow-lg transition-all hover:opacity-90"
                      style={{
                        backgroundColor: theme.secondary,
                        borderRadius: theme.borderRadius,
                        fontFamily: theme.fontFamily
                      }}
                    >
                      Secondary Button
                    </button>
                    <div
                      className="p-4 bg-white border-2"
                      style={{
                        borderColor: theme.primary,
                        borderRadius: theme.borderRadius,
                        fontFamily: theme.fontFamily
                      }}
                    >
                      <p className="text-sm text-slate-600">Card with themed styling</p>
                    </div>
                  </div>
                </div>

                {/* Save */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={handleCopyCSS}
                    className="px-4 py-3 bg-slate-100 text-slate-900 font-medium rounded-xl hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
                  >
                    <Copy className="w-4 h-4" />
                    Copy CSS
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-4 py-3 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    Save
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}