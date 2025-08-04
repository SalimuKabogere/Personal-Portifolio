import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Palette } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>('light');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'auto' || 'light';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme: 'light' | 'dark' | 'auto') => {
    const root = document.documentElement;
    
    if (newTheme === 'dark') {
      root.classList.add('dark');
    } else if (newTheme === 'light') {
      root.classList.remove('dark');
    } else {
      // Auto mode - detect system preference
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      if (mediaQuery.matches) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  };

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'auto') => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
    setIsOpen(false);
  };

  const themes = [
    { id: 'light', label: 'Light', icon: Sun, color: 'from-yellow-400 to-orange-400' },
    { id: 'dark', label: 'Dark', icon: Moon, color: 'from-blue-600 to-purple-600' },
    { id: 'auto', label: 'Auto', icon: Palette, color: 'from-cyan-400 to-blue-400' }
  ];

  const currentTheme = themes.find(t => t.id === theme);
  const CurrentIcon = currentTheme?.icon || Sun;

  return (
    <div className="fixed top-24 right-8 z-40">
      <motion.div className="relative">
        {/* Main toggle button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 glass rounded-full flex items-center justify-center border border-white/20 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <motion.div
            className="relative"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <CurrentIcon className="w-5 h-5 text-foreground/70 group-hover:text-foreground transition-colors" />
          </motion.div>

          {/* Glow effect */}
          <motion.div
            className={`absolute inset-0 rounded-full bg-gradient-to-r ${currentTheme?.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
          />
        </motion.button>

        {/* Theme options */}
        <motion.div
          className="absolute top-16 right-0 glass rounded-2xl border border-white/20 overflow-hidden"
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={isOpen ? 
            { opacity: 1, scale: 1, y: 0 } : 
            { opacity: 0, scale: 0.8, y: -10 }
          }
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 20,
            duration: 0.2 
          }}
          style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
        >
          <div className="p-2 space-y-1">
            {themes.map((themeOption, index) => {
              const Icon = themeOption.icon;
              const isActive = theme === themeOption.id;

              return (
                <motion.button
                  key={themeOption.id}
                  onClick={() => handleThemeChange(themeOption.id as 'light' | 'dark' | 'auto')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive 
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400' 
                      : 'text-foreground/70 hover:text-foreground hover:bg-white/10'
                  }`}
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isActive 
                        ? `bg-gradient-to-r ${themeOption.color}` 
                        : 'bg-white/10'
                    }`}
                    animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon 
                      className={`w-4 h-4 ${
                        isActive ? 'text-white' : 'text-foreground/70'
                      }`} 
                    />
                  </motion.div>
                  <span className="text-sm font-medium">{themeOption.label}</span>
                  
                  {isActive && (
                    <motion.div
                      className="ml-auto w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"
                      layoutId="activeTheme"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Tooltip */}
          <div className="px-4 py-2 border-t border-white/10">
            <p className="text-xs text-muted-foreground">
              Choose your preferred theme
            </p>
          </div>
        </motion.div>

        {/* Backdrop */}
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[-1]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </motion.div>

      {/* Theme transition overlay */}
      <motion.div
        className="fixed inset-0 bg-background z-[-2] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}
