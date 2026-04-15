import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const defaultThemes = {
  default: {
    name: 'Default',
    primary: '#4f46e5',
    secondary: '#8b5cf6',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    borderRadius: '1.25rem'
  },
  ocean: {
    name: 'Ocean',
    primary: '#0ea5e9',
    secondary: '#06b6d4',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    borderRadius: '0.5rem'
  },
  sunset: {
    name: 'Sunset',
    primary: '#f97316',
    secondary: '#ef4444',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    borderRadius: '1rem'
  },
  forest: {
    name: 'Forest',
    primary: '#10b981',
    secondary: '#059669',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    borderRadius: '0.75rem'
  },
  minimal: {
    name: 'Minimal',
    primary: '#18181b',
    secondary: '#3f3f46',
    fontFamily: 'Inter, system-ui, sans-serif',
    borderRadius: '0.25rem'
  }
};

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('liquid-theme');
    return saved ? JSON.parse(saved) : defaultThemes.default;
  });

  useEffect(() => {
    // Apply theme to CSS variables
    const root = document.documentElement;
    root.style.setProperty('--theme-primary', theme.primary);
    root.style.setProperty('--theme-secondary', theme.secondary);
    root.style.setProperty('--theme-font-family', theme.fontFamily);
    root.style.setProperty('--theme-border-radius', theme.borderRadius);
  }, [theme]);

  const applyTheme = (newTheme) => {
    setTheme(newTheme);
  };

  const updateTheme = (updates) => {
    setTheme(prev => ({ ...prev, ...updates }));
  };

  const saveTheme = () => {
    localStorage.setItem('liquid-theme', JSON.stringify(theme));
  };

  return (
    <ThemeContext.Provider value={{ theme, applyTheme, updateTheme, saveTheme, defaultThemes }}>
      {children}
    </ThemeContext.Provider>
  );
}