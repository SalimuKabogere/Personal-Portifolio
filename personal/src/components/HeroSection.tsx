import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import {
  Star,
  Code2,
  Palette,
  Globe,
  Users,
  Trophy,
  Calendar,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Coffee,
  Heart
} from 'lucide-react';

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
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

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
        staggerChildren: 0.15,
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

  // Statistics data
  const stats = [
    { 
      number: "25+", 
      label: "Projects Completed",
      icon: Trophy,
      color: "from-yellow-400 to-orange-400"
    },
    { 
      number: "3+", 
      label: "Years Experience",
      icon: Calendar,
      color: "from-cyan-400 to-blue-400"
    },
    { 
      number: "15+", 
      label: "Happy Clients",
      icon: Users,
      color: "from-emerald-400 to-teal-400"
    },
    { 
      number: "99%", 
      label: "Project Success",
      icon: Star,
      color: "from-purple-400 to-pink-400"
    }
  ];

  // Skills highlight
  const skills = [
    { name: "React", level: 95, icon: Code2 },
    { name: "TypeScript", level: 90, icon: Code2 },
    { name: "UI/UX Design", level: 88, icon: Palette },
    { name: "Node.js", level: 85, icon: Globe }
  ];

  // Recent work preview
  const recentWork = [
    {
      title: "E-Commerce Platform",
      type: "Web Application",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop",
      status: "Live"
    },
    {
      title: "Task Management App",
      type: "SaaS Platform",
      tech: ["Vue.js", "Firebase"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop",
      status: "Live"
    },
    {
      title: "Mobile Banking UI",
      type: "UI/UX Design",
      tech: ["Figma", "Prototyping"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop",
      status: "Design"
    }
  ];

  // Social links
  const socialLinks = [
    { icon: Github, href: "https://github.com/kabogere-salimu", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/kabogere-salimu", label: "LinkedIn" },
    { icon: Mail, href: "mailto:salimuloma@gmail.com", label: "Email" }
  ];

  const localTime = currentTime.toLocaleTimeString('en-US', {
    timeZone: 'Africa/Kampala',
    hour12: true,
    hour: 'numeric',
    minute: '2-digit'
  });

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
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

      {/* Main Hero Section */}
      <section className="flex items-center justify-center px-6 pt-16 pb-20 relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div 
            className="mb-8" 
            variants={itemVariants}
          >
            <motion.div
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full border border-emerald-500/30 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-sm text-emerald-400 font-medium">Available for work</span>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <MapPin className="w-3 h-3" />
                <span>Kampala, UG</span>
                <span>•</span>
                <span>{localTime}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile and Intro */}
          <motion.div className="mb-12" variants={itemVariants}>
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
              
              {/* Profile hover effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/30 to-transparent z-10"></div>
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
              className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
              variants={itemVariants}
            >
              I craft beautiful, functional web applications and user experiences with a passion for clean code and intuitive design. 
              From concept to deployment, I bring ideas to life through thoughtful development and creative problem-solving.
            </motion.p>

            {/* Social Links */}
            <motion.div 
              className="flex justify-center space-x-4 mb-8"
              variants={itemVariants}
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/20 transition-colors group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-cyan-400 transition-colors" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
          
          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
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
                <span className="relative z-10 flex items-center space-x-2">
                  <span>View My Work</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
                
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
                <span className="relative z-10 flex items-center space-x-2">
                  <Coffee className="w-4 h-4" />
                  <span>Let's Chat</span>
                </span>
                
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
        </motion.div>
      </section>

      {/* Statistics Section */}
      <section className="px-6 pb-20">
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">By the Numbers</h3>
            <p className="text-muted-foreground">A snapshot of my journey so far</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="glass border border-white/20 text-center group">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <motion.h4 
                        className="text-3xl font-bold gradient-text mb-2"
                        initial={{ scale: 1 }}
                        whileInView={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        {stat.number}
                      </motion.h4>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Skills Preview */}
      <section className="px-6 pb-20">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">Core Skills</h3>
            <p className="text-muted-foreground">Technologies I work with daily</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="glass p-6 rounded-2xl border border-white/20"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <h4 className="font-semibold">{skill.name}</h4>
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, delay: index * 0.2 }}
                          />
                        </div>
                        <span className="text-sm text-cyan-400 font-medium">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div variants={itemVariants}>
            <Button
              onClick={() => onNavigate('skills')}
              variant="outline"
              className="glass border-white/20 hover:bg-white/10"
            >
              View All Skills
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Recent Work Preview */}
      <section className="px-6 pb-20">
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">Recent Work</h3>
            <p className="text-muted-foreground">A glimpse of my latest projects</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {recentWork.map((work, index) => (
              <motion.div
                key={work.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="glass border border-white/20 overflow-hidden group">
                  <div className="relative">
                    <img 
                      src={work.image} 
                      alt={work.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge 
                        variant="outline" 
                        className={`${
                          work.status === 'Live' 
                            ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400' 
                            : 'bg-blue-500/20 border-blue-500/30 text-blue-400'
                        }`}
                      >
                        {work.status}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2 gradient-text">{work.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{work.type}</p>
                    <div className="flex flex-wrap gap-2">
                      {work.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center">
            <Button
              onClick={() => onNavigate('projects')}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="px-6 pb-20">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="glass p-12 rounded-3xl border border-white/20 relative overflow-hidden"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-3xl font-semibold mb-4 gradient-text">Ready to work together?</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                I'm always excited to take on new challenges and collaborate on innovative projects. 
                Let's create something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => onNavigate('contact')}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Let's Start a Project
                </Button>
                <Button
                  variant="outline"
                  className="glass border-white/20 hover:bg-white/10 px-8 py-4 text-lg"
                  onClick={() => window.open('mailto:salimuloma@gmail.com')}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send a Message
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

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
    </div>
  );
}
