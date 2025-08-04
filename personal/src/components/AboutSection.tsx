import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const stats = [
    { label: 'Experience', value: '3+ years', icon: '🚀' },
    { label: 'Projects', value: '25+', icon: '💼' },
    { label: 'Focus', value: 'Full-stack', icon: '⚡' }
  ];

  return (
    <section className="min-h-screen py-32 px-6">
      <motion.div 
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h1 className="mb-6 gradient-text">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey and experience in the world of technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div variants={itemVariants}>
            <motion.div 
              className="glass p-8 rounded-2xl glow"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className="mb-6 gradient-text">My Story</h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-muted-foreground">
                  I'm a passionate full-stack developer with experience creating 
                  digital solutions that make a difference. My journey started with 
                  a curiosity about how technology can solve real-world problems, 
                  which led me to dive deep into both frontend and backend development.
                </p>
                <p className="text-muted-foreground">
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or brainstorming innovative 
                  solutions to everyday challenges.
                </p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div className="space-y-6" variants={itemVariants}>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Card className="glass p-6 glow-hover">
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className="text-3xl"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: index * 0.5 
                      }}
                    >
                      {stat.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-xl mb-1">{stat.label}</h3>
                      <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills preview */}
        <motion.div variants={itemVariants}>
          <div className="glass p-8 rounded-2xl glow text-center">
            <h3 className="text-2xl mb-6 gradient-text">Core Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Tailwind CSS'].map((tech, index) => (
                <motion.div
                  key={tech}
                  className="px-4 py-2 glass rounded-full text-sm font-medium"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}