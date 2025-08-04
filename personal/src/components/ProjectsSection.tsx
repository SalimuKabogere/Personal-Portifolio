import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  ExternalLink, 
  Github, 
  Calendar, 
  Users, 
  Award,
  Filter,
  Eye,
  Star,
  Clock,
  Code2,
  Palette,
  Globe,
  Smartphone
} from 'lucide-react';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const categories = [
    { id: 'all', label: 'All Projects', count: 8 },
    { id: 'web', label: 'Web Apps', count: 5 },
    { id: 'mobile', label: 'Mobile', count: 2 },
    { id: 'design', label: 'UI/UX', count: 3 }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A comprehensive e-commerce solution with advanced features including multi-vendor support, real-time inventory management, and integrated payment processing.',
      longDescription: 'Built for a growing retail business, this platform handles thousands of products and serves hundreds of daily customers. Features include dynamic pricing, automated inventory alerts, customer segmentation, and detailed analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'AWS'],
      category: 'web',
      liveUrl: 'https://ecommerce-demo.example.com',
      githubUrl: 'https://github.com/salimu/ecommerce-platform',
      gradient: 'from-cyan-400 to-blue-400',
      status: 'Live',
      duration: '4 months',
      teamSize: '3 developers',
      role: 'Full Stack Lead',
      features: [
        'Multi-vendor marketplace',
        'Real-time inventory tracking',
        'Advanced search & filtering',
        'Payment gateway integration',
        'Admin analytics dashboard',
        'Mobile-responsive design'
      ],
      metrics: {
        users: '2,500+',
        transactions: '$50K+',
        performance: '98% uptime'
      }
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, kanban boards, and team collaboration features.',
      longDescription: 'Designed for remote teams, this application streamlines project workflows with intuitive drag-and-drop interfaces, automated notifications, and comprehensive reporting tools.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS', 'Chart.js'],
      category: 'web',
      liveUrl: 'https://taskflow-demo.example.com',
      githubUrl: 'https://github.com/salimu/task-management',
      gradient: 'from-blue-400 to-cyan-400',
      status: 'Live',
      duration: '3 months',
      teamSize: '2 developers',
      role: 'Frontend Lead',
      features: [
        'Kanban board interface',
        'Real-time collaboration',
        'Time tracking',
        'File attachments',
        'Team chat integration',
        'Progress analytics'
      ],
      metrics: {
        users: '500+',
        projects: '1,200+',
        performance: '99.5% uptime'
      }
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A comprehensive weather application with detailed forecasts, interactive maps, and beautiful data visualizations.',
      longDescription: 'Features advanced weather data visualization, location-based forecasts, severe weather alerts, and historical weather data analysis with intuitive charts and graphs.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      technologies: ['React', 'TypeScript', 'Chart.js', 'OpenWeather API', 'Mapbox'],
      category: 'web',
      liveUrl: 'https://weather-dashboard.example.com',
      githubUrl: 'https://github.com/salimu/weather-dashboard',
      gradient: 'from-emerald-400 to-teal-400',
      status: 'Live',
      duration: '2 months',
      teamSize: '1 developer',
      role: 'Solo Developer',
      features: [
        'Interactive weather maps',
        'Hourly & weekly forecasts',
        'Severe weather alerts',
        'Historical data charts',
        'Location-based services',
        'Offline data caching'
      ],
      metrics: {
        users: '1,000+',
        apiCalls: '50K+ daily',
        performance: '< 2s load time'
      }
    },
    {
      id: 4,
      title: 'Healthcare Mobile App',
      description: 'A patient management mobile application for healthcare providers with appointment scheduling and medical records.',
      longDescription: 'Streamlines patient care with secure medical record storage, appointment management, prescription tracking, and telemedicine capabilities.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
      category: 'mobile',
      liveUrl: 'https://apps.apple.com/healthapp',
      githubUrl: '#',
      gradient: 'from-purple-400 to-pink-400',
      status: 'Live',
      duration: '6 months',
      teamSize: '4 developers',
      role: 'Mobile Lead',
      features: [
        'Secure patient records',
        'Appointment scheduling',
        'Prescription management',
        'Telemedicine video calls',
        'Health data tracking',
        'HIPAA compliant'
      ],
      metrics: {
        downloads: '5K+',
        rating: '4.8/5',
        retention: '85%'
      }
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with smooth animations and optimized performance.',
      longDescription: 'Built with performance and accessibility in mind, featuring advanced animations, dark mode support, and SEO optimization.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      category: 'web',
      liveUrl: 'https://portfolio.example.com',
      githubUrl: 'https://github.com/salimu/portfolio',
      gradient: 'from-teal-400 to-cyan-400',
      status: 'Live',
      duration: '1 month',
      teamSize: '1 developer',
      role: 'Solo Developer',
      features: [
        'Responsive design',
        'Smooth animations',
        'Dark mode support',
        'SEO optimized',
        'Performance focused',
        'Accessibility compliant'
      ],
      metrics: {
        performance: '100/100 Lighthouse',
        loadTime: '< 1s',
        accessibility: 'WCAG 2.1 AA'
      }
    },
    {
      id: 6,
      title: 'Fitness Tracker Design',
      description: 'Complete UI/UX design for a fitness tracking mobile application with comprehensive user research.',
      longDescription: 'Conducted extensive user research and created a comprehensive design system for a fitness tracking app, including user personas, journey maps, and interactive prototypes.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      technologies: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
      category: 'design',
      liveUrl: 'https://figma.com/fitness-design',
      githubUrl: '#',
      gradient: 'from-orange-400 to-red-400',
      status: 'Completed',
      duration: '2 months',
      teamSize: '2 designers',
      role: 'UX Lead',
      features: [
        'User research & personas',
        'Interactive prototypes',
        'Design system creation',
        'Usability testing',
        'Accessibility guidelines',
        'Cross-platform design'
      ],
      metrics: {
        screens: '50+ designs',
        prototypes: '15 interactive',
        testUsers: '25 participants'
      }
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const stats = [
    { icon: Award, label: 'Completed Projects', value: '25+' },
    { icon: Users, label: 'Happy Clients', value: '15+' },
    { icon: Star, label: 'Average Rating', value: '4.9/5' },
    { icon: Clock, label: 'Years Experience', value: '3+' }
  ];

  return (
    <section className="min-h-screen py-32 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-cyan-300/10 to-blue-300/10 rounded-full blur-3xl"
        animate={{
          y: [-15, 15, -15],
          rotate: [0, 90, 180, 270, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-emerald-300/10 to-cyan-300/10 rounded-full blur-2xl"
        animate={{
          y: [15, -15, 15],
          x: [0, 20, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
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
              Portfolio
            </span>
          </motion.div>
          <h1 className="mb-6 gradient-text">Featured Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work and creative solutions to complex problems. 
            Each project represents a unique challenge and learning opportunity.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16" variants={itemVariants}>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="glass border border-white/20 text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold gradient-text mb-1">{stat.value}</h3>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Filter Categories */}
        <motion.div className="flex justify-center mb-12" variants={itemVariants}>
          <div className="flex flex-wrap gap-3 p-2 glass rounded-2xl border border-white/20">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    : 'text-muted-foreground hover:text-foreground hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-2">
                  <span>{category.label}</span>
                  <span className="text-xs opacity-75">({category.count})</span>
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCategory}
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => setSelectedProject(project.id)}
                className="cursor-pointer"
              >
                <Card className="glass border border-white/20 overflow-hidden group h-full">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Live' 
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Category Icon */}
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center">
                        {project.category === 'web' && <Globe className="w-4 h-4 text-white" />}
                        {project.category === 'mobile' && <Smartphone className="w-4 h-4 text-white" />}
                        {project.category === 'design' && <Palette className="w-4 h-4 text-white" />}
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-3">
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-5 h-5 text-white" />
                        </motion.a>
                        <motion.button
                          className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Eye className="w-5 h-5 text-white" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold gradient-text">{project.title}</h3>
                      <span className="text-xs text-muted-foreground">{project.duration}</span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{project.teamSize}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Code2 className="w-3 h-3" />
                        <span>{project.role}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge 
                          key={tech}
                          variant="outline" 
                          className="glass border-white/20 hover:bg-white/10 transition-colors text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge 
                          variant="outline" 
                          className="glass border-white/20 text-xs"
                        >
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <div className="glass p-8 rounded-3xl border border-white/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's collaborate to bring your ideas to life. I'm always excited to work on 
                innovative projects and help businesses achieve their digital goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 glow-hover"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start a Project
                </motion.button>
                <motion.button
                  className="px-8 py-3 glass border border-white/20 rounded-full font-medium hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Projects
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
