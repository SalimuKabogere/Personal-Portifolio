import React from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const logoVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -180 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    },
    exit: {
      scale: 0,
      opacity: 0,
      rotate: 180,
      transition: {
        duration: 0.8,
        ease: "easeIn"
      }
    }
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.8,
        ease: "easeOut"
      }
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const progressVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        delay: 1.5,
        duration: 1.8,
        ease: "easeInOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        delay: 0.5
      }
    }
  };

  // Auto-complete loading after animations
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4000); // Total loading time: 4 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-cyan-50 via-blue-50 to-emerald-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-cyan-200/30 to-blue-200/30 rounded-full blur-2xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-16 w-24 h-24 bg-gradient-to-r from-emerald-200/30 to-cyan-200/30 rounded-full blur-xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-r from-blue-200/30 to-teal-200/30 rounded-full blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -25, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Main loading content */}
      <div className="relative z-10 text-center">
        {/* Animated Logo */}
        <motion.div
          className="mb-8"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="w-32 h-32 mx-auto relative">
            {/* Outer rotating ring */}
            <motion.div
              className="absolute inset-0 border-4 border-transparent border-t-cyan-400 border-r-blue-400 rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Inner pulsing circle */}
            <motion.div
              className="absolute inset-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Initials */}
              <motion.span
                className="text-2xl font-bold text-white"
                animate={{
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                KS
              </motion.span>
            </motion.div>

            {/* Decorative dots */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transformOrigin: '0 0',
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.25,
                  ease: "easeInOut"
                }}
                initial={{
                  x: Math.cos((i * 45 * Math.PI) / 180) * 50,
                  y: Math.sin((i * 45 * Math.PI) / 180) * 50,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Loading text */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Kabogere Salimu
          </h1>
          <p className="text-muted-foreground">
            Full Stack Developer & UI/UX Designer
          </p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="w-64 h-1 bg-gray-200/50 rounded-full overflow-hidden mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
            variants={progressVariants}
            initial="hidden"
            animate="visible"
          />
        </motion.div>

        {/* Loading dots */}
        <motion.div
          className="flex justify-center space-x-2 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
