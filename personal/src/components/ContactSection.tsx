import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  Linkedin, 
  Github, 
  Twitter,
  Globe,
  Calendar,
  MessageSquare,
  Coffee,
  Video,
  Download,
  Star
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    timeline: '',
    projectType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', company: '', budget: '', timeline: '', projectType: '', message: '' });
    setIsSubmitting(false);
    
    // Reset success state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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

  const contactInfo = [
    {
      label: 'Email',
      value: 'salimuloma@gmail.com',
      href: 'mailto:salimuloma@gmail.com',
      icon: Mail,
      description: 'Best way to reach me'
    },
    {
      label: 'Phone',
      value: '+256 (0) 772-043489',
      href: 'tel:+256772043489',
      icon: Phone,
      description: 'Available Mon-Fri 9AM-6PM'
    },
    {
      label: 'Location',
      value: 'Kampala, Uganda',
      href: '#',
      icon: MapPin,
      description: 'Available for remote work worldwide'
    },
    {
      label: 'Response Time',
      value: 'Within 24 hours',
      href: '#',
      icon: Clock,
      description: 'I respond to all messages promptly'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      username: '@salimu-kabogere',
      url: 'https://linkedin.com/in/kabogere-salimu',
      icon: Linkedin,
      color: 'from-blue-600 to-blue-400'
    },
    {
      name: 'GitHub',
      username: '@salimu-loma',
      url: 'https://github.com/kabogere-salimu',
      icon: Github,
      color: 'from-gray-600 to-gray-400'
    },
    {
      name: 'Twitter',
      username: '@salimu_dev',
      url: 'https://twitter.com/kabogere_salimu',
      icon: Twitter,
      color: 'from-sky-600 to-sky-400'
    },
    {
      name: 'Website',
      username: 'portfolio',
      url: 'https://salimukabogere.dev',
      icon: Globe,
      color: 'from-emerald-600 to-emerald-400'
    }
  ];

  const services = [
    {
      title: 'Web Development',
      description: 'Full-stack web applications',
      pricing: 'From $2,000',
      icon: Globe
    },
    {
      title: 'Mobile Apps',
      description: 'React Native & Progressive Web Apps',
      pricing: 'From $3,500',
      icon: Phone
    },
    {
      title: 'UI/UX Design',
      description: 'User interface & experience design',
      pricing: 'From $1,200',
      icon: Calendar
    },
    {
      title: 'Consultation',
      description: 'Technical advice & code review',
      pricing: '$100/hour',
      icon: MessageSquare
    }
  ];

  const projectTypes = [
    'Web Application',
    'Mobile App',
    'E-commerce Site',
    'Portfolio/Landing Page',
    'UI/UX Design',
    'Consultation',
    'Other'
  ];

  const budgetRanges = [
    'Under $1,000',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+',
    'Let\'s discuss'
  ];

  const timelines = [
    'ASAP',
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Flexible'
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Salimu delivered an exceptional e-commerce platform that exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager',
      content: 'Outstanding work on our mobile app. Professional, timely, and high-quality.',
      rating: 5
    }
  ];

  return (
    <section className="min-h-screen py-32 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-r from-cyan-300/10 to-blue-300/10 rounded-full blur-3xl"
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-emerald-300/10 to-cyan-300/10 rounded-full blur-2xl"
        animate={{
          y: [20, -20, 20],
          x: [0, 25, 0]
        }}
        transition={{
          duration: 20,
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
              Let's Connect
            </span>
          </motion.div>
          <h1 className="mb-6 gradient-text">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'd love to hear about your project and 
            discuss how we can work together to create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <Card className="glass border border-white/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-semibold gradient-text">Start Your Project</h2>
                </div>

                {isSubmitted ? (
                  <motion.div 
                    className="text-center py-16"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-semibold mb-4 gradient-text">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="glass border-white/20 focus:border-cyan-500 transition-colors h-12"
                          placeholder="John Doe"
                        />
                      </motion.div>
                      
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="glass border-white/20 focus:border-cyan-500 transition-colors h-12"
                          placeholder="john@example.com"
                        />
                      </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <Label htmlFor="company" className="text-sm font-medium mb-2 block">
                          Company (Optional)
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="glass border-white/20 focus:border-cyan-500 transition-colors h-12"
                          placeholder="Your Company"
                        />
                      </motion.div>

                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <Label htmlFor="projectType" className="text-sm font-medium mb-2 block">
                          Project Type *
                        </Label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          required
                          className="w-full h-12 glass border border-white/20 rounded-lg px-3 focus:border-cyan-500 transition-colors bg-transparent"
                        >
                          <option value="" className="bg-gray-800">Select project type</option>
                          {projectTypes.map(type => (
                            <option key={type} value={type} className="bg-gray-800">{type}</option>
                          ))}
                        </select>
                      </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <Label htmlFor="budget" className="text-sm font-medium mb-2 block">
                          Budget Range
                        </Label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full h-12 glass border border-white/20 rounded-lg px-3 focus:border-cyan-500 transition-colors bg-transparent"
                        >
                          <option value="" className="bg-gray-800">Select budget range</option>
                          {budgetRanges.map(budget => (
                            <option key={budget} value={budget} className="bg-gray-800">{budget}</option>
                          ))}
                        </select>
                      </motion.div>

                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <Label htmlFor="timeline" className="text-sm font-medium mb-2 block">
                          Timeline
                        </Label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full h-12 glass border border-white/20 rounded-lg px-3 focus:border-cyan-500 transition-colors bg-transparent"
                        >
                          <option value="" className="bg-gray-800">Select timeline</option>
                          {timelines.map(timeline => (
                            <option key={timeline} value={timeline} className="bg-gray-800">{timeline}</option>
                          ))}
                        </select>
                      </motion.div>
                    </div>
                    
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <Label htmlFor="message" className="text-sm font-medium mb-2 block">
                        Project Description *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="glass border-white/20 focus:border-cyan-500 transition-colors resize-none"
                        placeholder="Tell me about your project, goals, and any specific requirements..."
                      />
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full h-12 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 border-0 glow-hover text-lg"
                      >
                        {isSubmitting ? (
                          <motion.div className="flex items-center space-x-3">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            />
                            <span>Sending...</span>
                          </motion.div>
                        ) : (
                          <div className="flex items-center space-x-2">
                            <Send className="w-5 h-5" />
                            <span>Send Message</span>
                          </div>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information & Services */}
          <div className="space-y-8">
            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <Card className="glass border border-white/20">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mr-4">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold gradient-text">Contact Information</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const IconComponent = info.icon;
                      return (
                        <motion.div
                          key={info.label}
                          className="flex items-start space-x-4"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-5 h-5 text-cyan-400" />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">{info.label}</h4>
                            <a
                              href={info.href}
                              className="text-muted-foreground hover:text-cyan-400 transition-colors"
                            >
                              {info.value}
                            </a>
                            <p className="text-xs text-muted-foreground/80 mt-1">{info.description}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <Card className="glass border border-white/20">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                      <Coffee className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold gradient-text">Services & Pricing</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {services.map((service, index) => {
                      const IconComponent = service.icon;
                      return (
                        <motion.div
                          key={service.title}
                          className="p-4 glass rounded-xl border border-white/10"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-3">
                              <IconComponent className="w-5 h-5 text-cyan-400" />
                              <h4 className="font-medium">{service.title}</h4>
                            </div>
                            <Badge variant="outline" className="text-emerald-400 border-emerald-400/30">
                              {service.pricing}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </motion.div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Social Links & Testimonials */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Social Media */}
          <motion.div variants={itemVariants}>
            <Card className="glass border border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold gradient-text">Connect With Me</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => {
                    const IconComponent = link.icon;
                    return (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 glass rounded-xl border border-white/10 group"
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 bg-gradient-to-r ${link.color} rounded-lg flex items-center justify-center`}>
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-medium group-hover:text-cyan-400 transition-colors">{link.name}</h4>
                            <p className="text-xs text-muted-foreground">{link.username}</p>
                          </div>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Testimonials */}
          <motion.div variants={itemVariants}>
            <Card className="glass border border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center mr-4">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold gradient-text">Client Testimonials</h3>
                </div>
                
                <div className="space-y-6">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.name}
                      className="p-4 glass rounded-xl border border-white/10"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex items-center mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
