import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="text-xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            Kabogere Salimu
          </motion.div>
          
          <div className="hidden md:flex space-x-1">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={`relative px-4 py-2 rounded-lg transition-colors ${
                  activeSection === section.id 
                    ? 'text-white' 
                    : 'text-foreground/70 hover:text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeSection === section.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{section.label}</span>
              </motion.button>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2 rounded-lg glass"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={isMenuOpen ? { rotate: 45 } : { rotate: 0 }}
              className="w-6 h-6 flex flex-col justify-center items-center"
            >
              <motion.span
                animate={isMenuOpen ? { rotate: 90, y: 3 } : { rotate: 0, y: 0 }}
                className="block w-5 h-0.5 bg-foreground mb-1 transition-all"
              />
              <motion.span
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-5 h-0.5 bg-foreground mb-1 transition-all"
              />
              <motion.span
                animate={isMenuOpen ? { rotate: -90, y: -3 } : { rotate: 0, y: 0 }}
                className="block w-5 h-0.5 bg-foreground transition-all"
              />
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => {
                  onSectionChange(section.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === section.id 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' 
                    : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                }`}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                {section.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}