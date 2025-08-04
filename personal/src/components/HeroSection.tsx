import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
// Replace this path with your actual profile image path
// Example: '/images/profile.jpg' or '/assets/profile.png'
const profileImage = '/images/profile.png';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
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

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-8" variants={itemVariants}>
          <motion.div 
            className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden glass profile-glow relative z-10"
            whileHover={{ scale: 1.05 }}
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={() => onNavigate('projects')}
              className="px-8 py-4 text-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 border-0 glow-hover"
            >
              View My Work
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 text-lg glass border-white/30 hover:bg-white/20 glow-hover"
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating elements with light colors */}
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full blur-sm opacity-30"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 right-10 w-12 h-12 bg-gradient-to-r from-teal-300 to-emerald-300 rounded-full blur-sm opacity-30"
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </section>
  );
}
