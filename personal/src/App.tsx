import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ScrollToTop from './components/ScrollToTop';
import ThemeToggle from './components/ThemeToggle';
import CustomCursor from './components/CustomCursor';
import NavigationProgress from './components/NavigationProgress';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [previousSection, setPreviousSection] = useState('');

  const handleNavigate = (section: string) => {
    if (section === activeSection) return;
    
    setIsTransitioning(true);
    setPreviousSection(activeSection);
    
    // Add a slight delay for smooth transition
    setTimeout(() => {
      setActiveSection(section);
      setIsTransitioning(false);
    }, 200);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Enhanced page transitions with direction-based animations
  const getTransitionDirection = (from: string, to: string) => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const fromIndex = sections.indexOf(from);
    const toIndex = sections.indexOf(to);
    return toIndex > fromIndex ? 1 : -1;
  };

  const pageTransition = {
    initial: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
      y: 20,
      scale: 0.95,
      rotateY: direction > 0 ? 10 : -10,
    }),
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.8,
        staggerChildren: 0.1
      }
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -100 : 100,
      y: -20,
      scale: 0.95,
      rotateY: direction > 0 ? -10 : 10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.6
      }
    })
  };

  const renderSection = () => {
    const sections: Record<string, React.ReactElement> = {
      home: <HeroSection onNavigate={handleNavigate} />,
      about: <AboutSection />,
      skills: <SkillsSection />,
      projects: <ProjectsSection />,
      contact: <ContactSection />
    };

    return sections[activeSection] || sections.home;
  };

  // Particle animation for background
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    opacity: Math.random() * 0.5 + 0.1,
    duration: Math.random() * 20 + 10
  }));

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          {/* Custom Cursor */}
          <CustomCursor />

          {/* Enhanced Animated Background */}
          <div className="fixed inset-0 -z-10">
            {/* Base gradient */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-cyan-100/30 via-blue-50/40 to-emerald-50/30"
              animate={{
                background: [
                  "linear-gradient(135deg, rgba(224, 242, 254, 0.3) 0%, rgba(240, 249, 255, 0.4) 50%, rgba(236, 253, 245, 0.3) 100%)",
                  "linear-gradient(135deg, rgba(236, 253, 245, 0.3) 0%, rgba(224, 242, 254, 0.4) 50%, rgba(240, 249, 255, 0.3) 100%)",
                  "linear-gradient(135deg, rgba(240, 249, 255, 0.3) 0%, rgba(236, 253, 245, 0.4) 50%, rgba(224, 242, 254, 0.3) 100%)"
                ]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Dot pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20width%3d%2260%22%20height%3d%2260%22%20viewBox%3d%220%200%2060%2060%22%20xmlns%3d%22http%3a//www.w3.org/2000/svg%22%3e%3cg%20fill%3d%22none%22%20fill-rule%3d%22evenodd%22%3e%3cg%20fill%3d%22%2306b6d4%22%20fill-opacity%3d%220.05%22%3e%3ccircle%20cx%3d%2230%22%20cy%3d%2230%22%20r%3d%221%22/%3e%3c/g%3e%3c/g%3e%3c/svg%3e')] opacity-30"></div>

            {/* Animated particles */}
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  width: particle.size,
                  height: particle.size,
                  opacity: particle.opacity,
                }}
                animate={{
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                  opacity: [particle.opacity, particle.opacity * 0.3, particle.opacity],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Enhanced Floating Orbs */}
          <div className="fixed inset-0 -z-5 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-cyan-200/40 to-blue-200/40 rounded-full blur-3xl"
              animate={{
                x: [0, 120, -20, 0],
                y: [0, -60, 40, 0],
                scale: [1, 1.2, 0.8, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-blue-200/40 to-cyan-300/40 rounded-full blur-2xl"
              animate={{
                x: [0, -100, 20, 0],
                y: [0, 80, -30, 0],
                scale: [1, 0.7, 1.3, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            <motion.div
              className="absolute bottom-20 left-1/3 w-28 h-28 bg-gradient-to-r from-emerald-200/40 to-cyan-200/40 rounded-full blur-xl"
              animate={{
                x: [0, 80, -40, 0],
                y: [0, -50, 20, 0],
                scale: [1, 1.1, 0.9, 1],
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4
              }}
            />
            <motion.div
              className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-r from-teal-200/40 to-emerald-200/40 rounded-full blur-xl"
              animate={{
                x: [0, 60, -20, 0],
                y: [0, -40, 60, 0],
                scale: [1, 1.4, 0.6, 1],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 6
              }}
            />
          </div>

          {/* Navigation */}
          <Navigation 
            activeSection={activeSection} 
            onSectionChange={handleNavigate} 
          />

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Navigation Progress */}
          <NavigationProgress activeSection={activeSection} />

          {/* Main Content with Enhanced Transitions */}
          <main className="relative z-10">
            <AnimatePresence 
              mode="wait"
              custom={getTransitionDirection(previousSection, activeSection)}
            >
              <motion.div
                key={activeSection}
                custom={getTransitionDirection(previousSection, activeSection)}
                variants={pageTransition}
                initial="initial"
                animate="animate"
                exit="exit"
                className="relative"
                style={{ perspective: 1000 }}
              >
                {/* Page transition overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 pointer-events-none z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{ duration: 0.8 }}
                />
                
                {renderSection()}
              </motion.div>
            </AnimatePresence>
            
            {/* Footer */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Footer 
                activeSection={activeSection}
                onSectionChange={handleNavigate}
              />
            </motion.div>
          </main>

          {/* Scroll to Top */}
          <ScrollToTop />

          {/* Transition Loading Indicator */}
          <AnimatePresence>
            {isTransitioning && (
              <motion.div
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[60]"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-16 h-16 glass rounded-full flex items-center justify-center border border-white/20">
                  <motion.div
                    className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mouse trail effect */}
          <motion.div
            className="fixed inset-0 pointer-events-none z-0"
            style={{
              background: "radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(6, 182, 212, 0.05), transparent 40%)"
            }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              document.documentElement.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
              document.documentElement.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
            }}
          />
        </>
      )}
    </div>
  );
}
