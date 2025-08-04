import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Separator } from './ui/separator';
import { 
  Rocket, 
  Briefcase, 
  Zap, 
  Code2, 
  Palette, 
  Database,
  Globe,
  Award,
  Clock,
  Users,
  Target,
  Lightbulb
} from 'lucide-react';

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

  const floatVariants = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const stats = [
    { 
      label: 'Years Experience', 
      value: '3+', 
      icon: Rocket,
      description: 'Building digital solutions'
    },
    { 
      label: 'Projects Completed', 
      value: '25+', 
      icon: Briefcase,
      description: 'Successful deliveries'
    },
    { 
      label: 'Technologies', 
      value: '15+', 
      icon: Zap,
      description: 'Modern tech stack'
    },
    { 
      label: 'Client Satisfaction', 
      value: '100%', 
      icon: Award,
      description: 'Happy clients'
    }
  ];

  const expertise = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Creating responsive, interactive user interfaces with React, TypeScript, and modern CSS frameworks.',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js']
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Building robust server-side applications with Node.js, Python, and database management.',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designing intuitive user experiences with attention to aesthetics and usability.',
      skills: ['Figma', 'Design Systems', 'Prototyping', 'User Research']
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'Delivering excellence in every line of code'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Meeting deadlines without compromising quality'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working seamlessly with teams and clients'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Bringing creative solutions to complex problems'
    }
  ];

  return (
    <section className="min-h-screen py-32 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-cyan-300/10 to-blue-300/10 rounded-full blur-3xl"
        variants={floatVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-40 left-10 w-24 h-24 bg-gradient-to-r from-emerald-300/10 to-cyan-300/10 rounded-full blur-2xl"
        variants={floatVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />

      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <motion.div
            className="inline-block mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full text-sm font-medium text-cyan-400 border border-cyan-500/30">
              Get to know me
            </span>
          </motion.div>
          <h1 className="mb-6 gradient-text">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate full-stack developer crafting digital experiences that blend 
            functionality with beautiful design, driven by innovation and attention to detail.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Story Section */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <motion.div 
              className="glass p-8 rounded-3xl border border-white/20 relative overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-semibold gradient-text">My Journey</h2>
                </div>
                
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-muted-foreground">
                    My journey into technology began with a simple curiosity about how digital products 
                    work behind the scenes. This curiosity evolved into a passion for creating 
                    meaningful solutions that bridge the gap between complex technology and 
                    intuitive user experiences.
                  </p>
                  <p className="text-muted-foreground">
                    Over the past few years, I've had the privilege of working on diverse projects, 
                    from sleek web applications to complex backend systems. Each project has taught 
                    me valuable lessons about code quality, user-centered design, and the importance 
                    of continuous learning in our ever-evolving field.
                  </p>
                  <p className="text-muted-foreground">
                    When I'm not immersed in code, you'll find me exploring emerging technologies, 
                    contributing to open-source communities, or mentoring aspiring developers. 
                    I believe that sharing knowledge is just as important as acquiring it.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Stats Section */}
          <motion.div className="space-y-4" variants={itemVariants}>
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Card className="glass border border-white/20 overflow-hidden group">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <motion.div 
                          className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300"
                          whileHover={{ rotate: 5 }}
                        >
                          <IconComponent className="w-6 h-6 text-cyan-400" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="font-medium text-sm text-muted-foreground mb-1">{stat.label}</h3>
                          <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                          <p className="text-xs text-muted-foreground/80">{stat.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Expertise Section */}
        <motion.div className="mb-20" variants={itemVariants}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold mb-4 gradient-text">Areas of Expertise</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialized skills and technologies I use to bring ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <motion.div
                  key={area.title}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="glass border border-white/20 h-full group">
                    <CardContent className="p-8 text-center">
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 5 }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <h4 className="text-xl font-semibold mb-4 gradient-text">{area.title}</h4>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {area.description}
                      </p>
                      
                      <div className="flex flex-wrap justify-center gap-2">
                        {area.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skill}
                            className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full text-xs font-medium text-cyan-400 border border-cyan-500/20"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: skillIndex * 0.1 + index * 0.2 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div variants={itemVariants}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold mb-4 gradient-text">Core Values</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide my work and professional relationships
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="glass border border-white/20 text-center group">
                    <CardContent className="p-6">
                      <motion.div 
                        className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300"
                        whileHover={{ rotate: 10 }}
                      >
                        <IconComponent className="w-6 h-6 text-cyan-400" />
                      </motion.div>
                      <h4 className="font-semibold mb-2 gradient-text">{value.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="mt-20 text-center"
          variants={itemVariants}
        >
          <div className="glass p-8 rounded-3xl border border-white/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">Let's Build Something Amazing</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Ready to turn your ideas into reality? I'm always excited to take on new challenges 
                and collaborate on innovative projects.
              </p>
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 glow-hover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
