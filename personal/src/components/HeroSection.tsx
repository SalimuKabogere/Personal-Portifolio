import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

// Replace this path with your actual profile image path
const profileImage = '/images/profile.png';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

interface Drop {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [drops, setDrops] = useState<Drop[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Generate bubbles on mount
  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles: Bubble[] = [];
      for (let i = 0; i < 15; i++) {
        newBubbles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 60 + 20,
          opacity: Math.random() * 0.3 + 0.1,
          duration: Math.random() * 10 + 15,
          delay: Math.random() * 5
        });
      }
      setBubbles(newBubbles);
    };

    generateBubbles();
  }, []);

  // Generate drops on mouse move
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setMousePosition({ x, y });

    // Create drops occasionally
    if (Math.random() < 0.1) {
      const newDrop: Drop = {
        id: Date.now() + Math.random(),
        x,
        y,
        size: Math.random() * 30 + 10,
        opacity: Math.random() * 0.6 + 0.3,
        duration: Math.random() * 3 + 2,
        delay: 0
      };

      setDrops(prev => [...prev.slice(-8), newDrop]); // Keep only last 8 drops
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const bubbleVariants = {
    float: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center px-6 pt-16 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className="absolute rounded-full bg-gradient-to-br from-cyan-200/30 to-blue-300/20 backdrop-blur-sm"
            style={{
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
              width: bubble.size,
              height: bubble.size,
              opacity: bubble.opacity,
            }}
            variants={bubbleVariants}
            animate="float"
            transition={{
              delay: bubble.delay,
              duration: bubble.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Interactive Drops */}
      <div className="absolute inset-0 pointer-events-none">
        {drops.map((drop) => (
          <motion.div
            key={drop.id}
            className="absolute rounded-full bg-gradient-to-br from-cyan-400/40 to-blue-500/30"
            style={{
              left: `${drop.x}%`,
              top: `${drop.y}%`,
              width: drop.size,
              height: drop.size,
            }}
            initial={{ 
              scale: 0, 
              opacity: drop.opacity,
              y: 0
            }}
            animate={{ 
              scale: [0, 1.2, 0], 
              opacity: [drop.opacity, drop.opacity * 0.5, 0],
              y: [0, 100]
            }}
            transition={{ 
              duration: drop.duration,
              ease: "easeOut"
            }}
            onAnimationComplete={() => {
              setDrops(prev => prev.filter(d => d.id !== drop.id));
            }}
          />
        ))}
      </div>

      {/* Mouse Ripple Effect */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
        }}
        animate={{
          scale: [0, 2, 0],
          opacity: [0.3, 0.1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut"
        }}
      >
        <div className="w-32 h-32 border border-cyan-400/20 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      <motion.div 
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-8" variants={itemVariants}>
          <motion.div 
            className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden glass profile-glow relative z-10 group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 50px rgba(6, 182, 212, 0.5)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.img 
              src={profileImage} 
              alt="Kabogere Salimu" 
              className="w-full h-full object-cover relative z-20"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            />
            
            {/* Multiple glow layers */}
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/30 to-transparent z-10"></div>
            
            {/* Animated ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-cyan-400/50"
              animate={{
                rotate: 360,
                scale: [1, 1.05, 1]
              }}
              transition={{
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            
            {/* Pulsing outer ring */}
            <motion.div
              className="absolute -inset-2 rounded-full border border-cyan-300/30"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Hover Bubble Effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={false}
              whileHover="hover"
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-cyan-400/60 rounded-full"
                  variants={{
                    hover: {
                      x: [0, Math.cos((i * 60 * Math.PI) / 180) * 60],
                      y: [0, Math.sin((i * 60 * Math.PI) / 180) * 60],
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeOut"
                  }}
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h1 className="mb-4 gradient-text">
              Hi, I'm Kabogere Salimu
            </h1>
          </motion.div>
          
          <motion.h2 
            className="text-2xl text-muted-foreground mb-6"
            variants={itemVariants}
          >
            Full Stack Developer & UI/UX Designer
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
            variants={itemVariants}
          >
            I create beautiful, functional web applications and user experiences. 
            With a passion for clean code and intuitive design, I bring ideas to life 
            through thoughtful development and creative problem-solving.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(6, 182, 212, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
          >
            <Button 
              onClick={() => onNavigate('projects')}
              className="px-8 py-4 text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 border-0 glow-hover text-white relative overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              
              {/* Button Bubble Effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={false}
                whileHover="hover"
              >
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/30 rounded-full"
                    variants={{
                      hover: {
                        x: [Math.random() * 100, Math.random() * 100],
                        y: [100, -20],
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeOut"
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      bottom: 0
                    }}
                  />
                ))}
              </motion.div>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
          >
            <Button 
              variant="outline" 
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 text-lg glass border-white/30 hover:bg-white/20 glow-hover relative overflow-hidden"
            >
              <span className="relative z-10">Get In Touch</span>
              
              {/* Button Drop Effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={false}
                whileHover="hover"
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 bg-cyan-400/20 rounded-full"
                    variants={{
                      hover: {
                        y: [-20, 100],
                        x: [Math.random() * 50, Math.random() * 50],
                        scale: [1, 0.5],
                        opacity: [0.7, 0],
                      }
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeIn"
                    }}
                    style={{
                      left: `${30 + Math.random() * 40}%`,
                      top: 0
                    }}
                  />
                ))}
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>

        {/* Enhanced Floating elements with bubble effects */}
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full blur-sm opacity-30 group"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{
            scale: 1.5,
            opacity: 0.6
          }}
        >
          {/* Micro bubbles on hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={false}
            whileHover="hover"
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
                variants={{
                  hover: {
                    x: [0, Math.cos((i * 45 * Math.PI) / 180) * 30],
                    y: [0, Math.sin((i * 45 * Math.PI) / 180) * 30],
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              />
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 right-10 w-12 h-12 bg-gradient-to-r from-teal-300 to-emerald-300 rounded-full blur-sm opacity-30 group"
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{
            scale: 1.8,
            opacity: 0.8
          }}
        >
          {/* Rain drops effect on hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={false}
            whileHover="hover"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-3 bg-emerald-400/60 rounded-full"
                variants={{
                  hover: {
                    y: [-10, 50],
                    opacity: [1, 0],
                  }
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeIn"
                }}
                style={{
                  left: `${20 + i * 15}%`,
                  top: '-10px'
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
