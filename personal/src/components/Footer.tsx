import React from 'react';
import { motion } from 'framer-motion';
import { Separator } from './ui/separator';
import { Linkedin, Github, Twitter, Mail } from 'lucide-react';

interface FooterProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Footer({ activeSection, onSectionChange }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/kabogere-salimu',
      icon: <Linkedin className="w-6 h-6" />
    },
    {
      name: 'GitHub',
      url: 'https://github.com/kabogere-salimu',
      icon: <Github className="w-6 h-6" />
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/kabogere_salimu',
      icon: <Twitter className="w-6 h-6" />
    },
    {
      name: 'Email',
      url: 'mailto:kabogere.salimu@email.com',
      icon: <Mail className="w-6 h-6" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.footer 
      className="relative mt-32 glass border-t border-white/20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <motion.h3 
              className="text-2xl mb-4 gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              Kabogere Salimu
            </motion.h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Full Stack Developer & UI/UX Designer creating beautiful, 
              functional web applications and user experiences with passion 
              for clean code and intuitive design.
            </p>
            <motion.div 
              className="flex space-x-4"
              variants={itemVariants}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-full flex items-center justify-center glow-hover"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <span className="text-xl">{link.icon}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="mb-6 gradient-text">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  onClick={() => onSectionChange(link.id)}
                  className={`block text-left transition-colors ${
                    activeSection === link.id 
                      ? 'text-cyan-400 font-medium' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="mb-6 gradient-text">Get In Touch</h4>
            <div className="space-y-4">
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <span className="text-lg">📧</span>
                <a 
                  href="mailto:kabogere.salimu@email.com"
                  className="text-muted-foreground hover:text-cyan-400 transition-colors"
                >
                  kabogere.salimu@email.com
                </a>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <span className="text-lg">📱</span>
                <a 
                  href="tel:+256123456789"
                  className="text-muted-foreground hover:text-cyan-400 transition-colors"
                >
                  +256 (0) 123-456789
                </a>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
              >
                <span className="text-lg">🌍</span>
                <span className="text-muted-foreground">
                  Available Worldwide
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants}>
          <Separator className="mb-8 bg-white/20" />
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <motion.p 
            className="text-muted-foreground mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            © {currentYear} Kabogere Salimu. All rights reserved.
          </motion.p>
          
          <motion.div 
            className="flex space-x-6 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              onClick={() => onSectionChange('contact')}
              className="text-muted-foreground hover:text-cyan-400 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.button>
            <motion.button
              onClick={() => onSectionChange('contact')}
              className="text-muted-foreground hover:text-cyan-400 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-r from-cyan-300/20 to-blue-300/20 rounded-full blur-xl"
        animate={{
          x: [0, 20, 0],
          y: [0, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-emerald-300/20 to-cyan-300/20 rounded-full blur-xl"
        animate={{
          x: [0, -15, 0],
          y: [0, 10, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.footer>
  );
}