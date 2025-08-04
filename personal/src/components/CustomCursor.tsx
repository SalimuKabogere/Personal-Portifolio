import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrameId: number;

    const updateMousePosition = (e: MouseEvent) => {
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        setIsVisible(true);
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Add event listeners for interactive elements
    const addCursorListeners = () => {
      const interactiveElements = document.querySelectorAll('button, a, [role="button"], input, textarea, select');
      
      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => setCursorVariant('hover'));
        element.addEventListener('mouseleave', () => setCursorVariant('default'));
      });

      // Special elements with different cursor styles
      const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span');
      textElements.forEach(element => {
        element.addEventListener('mouseenter', () => setCursorVariant('text'));
        element.addEventListener('mouseleave', () => setCursorVariant('default'));
      });

      const imageElements = document.querySelectorAll('img, [role="img"]');
      imageElements.forEach(element => {
        element.addEventListener('mouseenter', () => setCursorVariant('image'));
        element.addEventListener('mouseleave', () => setCursorVariant('default'));
      });
    };

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Setup cursor listeners after a brief delay to ensure DOM is ready
    setTimeout(addCursorListeners, 1000);

    // Re-add listeners when content changes
    const observer = new MutationObserver(addCursorListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      backgroundColor: 'rgba(6, 182, 212, 0.8)',
      border: '2px solid rgba(6, 182, 212, 0.4)',
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      scale: 2,
      backgroundColor: 'rgba(6, 182, 212, 0.1)',
      border: '2px solid rgba(6, 182, 212, 0.8)',
    },
    text: {
      x: mousePosition.x - 2,
      y: mousePosition.y - 16,
      scale: 1,
      width: 4,
      height: 32,
      backgroundColor: 'rgba(6, 182, 212, 0.8)',
      border: 'none',
      borderRadius: '2px',
    },
    image: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.5,
      backgroundColor: 'rgba(6, 182, 212, 0.2)',
      border: '3px solid rgba(6, 182, 212, 0.6)',
    }
  };

  // Hide default cursor on body
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={variants[cursorVariant as keyof typeof variants]}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
        style={{
          width: cursorVariant === 'text' ? 4 : 32,
          height: cursorVariant === 'text' ? 32 : 32,
          borderRadius: cursorVariant === 'text' ? '2px' : '50%',
        }}
      />

      {/* Trailing cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1
        }}
        style={{
          width: 8,
          height: 8,
          backgroundColor: 'rgba(34, 211, 238, 0.6)',
          borderRadius: '50%',
        }}
      />

      {/* Cursor particles */}
      {cursorVariant === 'hover' && (
        <div className="fixed top-0 left-0 pointer-events-none z-[9997]">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              animate={{
                x: mousePosition.x + Math.cos((i * 60 * Math.PI) / 180) * 40,
                y: mousePosition.y + Math.sin((i * 60 * Math.PI) / 180) * 40,
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}

      {/* Click ripple effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9996]"
        initial={false}
        animate={{
          x: mousePosition.x - 50,
          y: mousePosition.y - 50,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 20
        }}
      >
        <div className="w-24 h-24 border border-cyan-400/30 rounded-full" />
      </motion.div>
    </>
  );
}
