import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavigationProgressProps {
  activeSection: string;
}

export default function NavigationProgress({ activeSection }: NavigationProgressProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    { id: 'home', label: 'Home', color: 'from-cyan-400 to-blue-400' },
    { id: 'about', label: 'About', color: 'from-blue-400 to-purple-400' },
    { id: 'skills', label: 'Skills', color: 'from-purple-400 to-pink-400' },
    { id: 'projects', label: 'Projects', color: 'from-pink-400 to-red-400' },
    { id: 'contact', label: 'Contact', color: 'from-red-400 to-orange-400' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min((scrollTop / docHeight) * 100, 100);
      
      setScrollProgress(progress);
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentSectionIndex = sections.findIndex(section => section.id === activeSection);
  const currentSection = sections[currentSectionIndex] || sections[0];

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className={`h-full bg-gradient-to-r ${currentSection.color}`}
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </motion.div>

      {/* Side navigation progress */}
      <motion.div
        className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-4">
          {sections.map((section, index) => {
            const isActive = section.id === activeSection;
            const isPassed = index < currentSectionIndex;
            
            return (
              <motion.div
                key={section.id}
                className="relative group"
                whileHover={{ scale: 1.1 }}
              >
                {/* Line connector */}
                {index < sections.length - 1 && (
                  <motion.div
                    className={`absolute top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-8 ${
                      isPassed || isActive ? 'bg-gradient-to-b from-cyan-400 to-blue-400' : 'bg-gray-300/30'
                    }`}
                    initial={{ height: 0 }}
                    animate={{ height: isPassed || isActive ? 32 : 32 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  />
                )}

                {/* Section dot */}
                <motion.div
                  className={`relative w-4 h-4 rounded-full border-2 cursor-pointer ${
                    isActive 
                      ? 'border-cyan-400 bg-cyan-400' 
                      : isPassed 
                        ? 'border-cyan-400 bg-cyan-400/50'
                        : 'border-gray-300/50 bg-transparent hover:border-cyan-400/70'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={isActive ? {
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      '0 0 0 0 rgba(6, 182, 212, 0.4)',
                      '0 0 0 8px rgba(6, 182, 212, 0)',
                      '0 0 0 0 rgba(6, 182, 212, 0)'
                    ]
                  } : {}}
                  transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
                >
                  {/* Inner glow for active state */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-cyan-400 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>

                {/* Tooltip */}
                <motion.div
                  className="absolute left-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -10, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                >
                  <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
                    {section.label}
                    <div className="absolute right-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-r-4 border-r-gray-900 border-y-4 border-y-transparent"></div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Progress percentage */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-xs text-muted-foreground mb-2">Progress</div>
          <motion.div
            className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5 }}
          >
            {Math.round(scrollProgress)}%
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Mobile progress indicator */}
      <motion.div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 lg:hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="glass px-4 py-2 rounded-full border border-white/20">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-1">
              {sections.map((section, index) => {
                const isActive = section.id === activeSection;
                const isPassed = index < currentSectionIndex;
                
                return (
                  <motion.div
                    key={section.id}
                    className={`w-2 h-2 rounded-full ${
                      isActive 
                        ? 'bg-cyan-400' 
                        : isPassed 
                          ? 'bg-cyan-400/50'
                          : 'bg-gray-300/30'
                    }`}
                    animate={isActive ? {
                      scale: [1, 1.3, 1],
                    } : {}}
                    transition={{ duration: 1, repeat: isActive ? Infinity : 0 }}
                  />
                );
              })}
            </div>
            <div className="text-xs text-muted-foreground">
              {currentSection.label} • {Math.round(scrollProgress)}%
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
