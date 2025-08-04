import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import {
  Code2,
  Database,
  Globe,
  Palette,
  Wrench,
  Zap,
  Award,
  Calendar,
  MapPin,
  ExternalLink
} from 'lucide-react';

export default function SkillsSection() {
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

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'React', level: 95, years: '3+' },
        { name: 'TypeScript', level: 90, years: '2+' },
        { name: 'Next.js', level: 88, years: '2+' },
        { name: 'Tailwind CSS', level: 92, years: '3+' },
        { name: 'Vue.js', level: 75, years: '1+' },
        { name: 'JavaScript (ES6+)', level: 95, years: '3+' }
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'from-emerald-500 to-teal-500',
      skills: [
        { name: 'Node.js', level: 90, years: '3+' },
        { name: 'Python', level: 85, years: '2+' },
        { name: 'PostgreSQL', level: 88, years: '2+' },
        { name: 'MongoDB', level: 82, years: '2+' },
        { name: 'GraphQL', level: 78, years: '1+' },
        { name: 'REST APIs', level: 92, years: '3+' }
      ]
    },
    {
      title: 'Design & UI/UX',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Figma', level: 88, years: '2+' },
        { name: 'UI Design', level: 85, years: '2+' },
        { name: 'Prototyping', level: 80, years: '2+' },
        { name: 'User Research', level: 75, years: '1+' },
        { name: 'Design Systems', level: 82, years: '2+' },
        { name: 'Responsive Design', level: 95, years: '3+' }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git/GitHub', level: 92, years: '3+' },
        { name: 'Docker', level: 78, years: '1+' },
        { name: 'AWS', level: 75, years: '1+' },
        { name: 'Vercel', level: 90, years: '2+' },
        { name: 'Jest/Testing', level: 80, years: '2+' },
        { name: 'Webpack/Vite', level: 85, years: '2+' }
      ]
    }
  ];

  const experience = [
    {
      role: 'Senior Full Stack Developer',
      company: 'Freelance',
      period: '2023 - Present',
      location: 'Remote',
      type: 'Contract',
      description: 'Building modern web applications for clients across various industries using React, TypeScript, Node.js, and cloud technologies. Leading end-to-end development projects from conception to deployment.',
      achievements: [
        'Delivered 10+ successful web applications',
        'Improved client conversion rates by 40% on average',
        'Mentored 3 junior developers',
        'Maintained 100% client satisfaction rating'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker']
    },
    {
      role: 'Frontend Developer',
      company: 'TechFlow Solutions',
      period: '2022 - 2023',
      location: 'Kampala, Uganda',
      type: 'Full-time',
      description: 'Developed responsive user interfaces and collaborated on product features for a fintech startup. Worked closely with design teams to implement pixel-perfect UI components.',
      achievements: [
        'Reduced page load times by 60%',
        'Implemented design system used across 5+ products',
        'Led frontend team of 4 developers',
        'Increased user engagement by 35%'
      ],
      technologies: ['Vue.js', 'JavaScript', 'Sass', 'Node.js', 'MongoDB']
    },
    {
      role: 'Web Developer',
      company: 'Digital Dreams Agency',
      period: '2021 - 2022',
      location: 'Kampala, Uganda',
      type: 'Full-time',
      description: 'Created websites and web applications while learning modern development practices. Collaborated with senior developers and gained experience in full-stack development.',
      achievements: [
        'Delivered 25+ client websites',
        'Learned React and modern JavaScript',
        'Contributed to agency\'s first SPA project',
        'Improved development workflow efficiency by 25%'
      ],
      technologies: ['HTML/CSS', 'JavaScript', 'WordPress', 'PHP', 'MySQL']
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2023',
      verifyUrl: '#'
    },
    {
      title: 'Meta Frontend Developer Certificate',
      issuer: 'Meta (Facebook)',
      date: '2022',
      verifyUrl: '#'
    },
    {
      title: 'Google UX Design Certificate',
      issuer: 'Google',
      date: '2022',
      verifyUrl: '#'
    }
  ];

  const languages = [
    { name: 'English', level: 'Native' },
    { name: 'Luganda', level: 'Native' },
    { name: 'Swahili', level: 'Conversational' }
  ];

  return (
    <section className="min-h-screen py-32 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-40 right-10 w-40 h-40 bg-gradient-to-r from-cyan-300/10 to-blue-300/10 rounded-full blur-3xl"
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-32 h-32 bg-gradient-to-r from-emerald-300/10 to-cyan-300/10 rounded-full blur-2xl"
        animate={{
          y: [10, -10, 10],
          x: [0, 15, 0]
        }}
        transition={{
          duration: 12,
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
              Skills & Experience
            </span>
          </motion.div>
          <h1 className="mb-6 gradient-text">Technical Expertise</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills, professional experience, 
            and continuous learning journey in software development.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div className="mb-20" variants={itemVariants}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4 gradient-text">Technical Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Proficiency levels in various technologies and frameworks
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="glass border border-white/20 h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mr-4`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold gradient-text">{category.title}</h3>
                      </div>
                      
                      <div className="space-y-4">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill.name}
                            className="space-y-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                          >
                            <div className="flex justify-between items-center">
                              <span className="font-medium">{skill.name}</span>
                              <div className="flex items-center space-x-2">
                                <span className="text-xs text-muted-foreground">{skill.years}</span>
                                <span className="text-sm font-semibold text-cyan-400">{skill.level}%</span>
                              </div>
                            </div>
                            <div className="relative">
                              <Progress 
                                value={skill.level} 
                                className="h-2 bg-white/10"
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div className="mb-20" variants={itemVariants}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4 gradient-text">Professional Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My journey through different roles and companies
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="glass border border-white/20 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold gradient-text mb-1">{exp.role}</h3>
                            <h4 className="text-lg text-cyan-400 mb-2">{exp.company}</h4>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            exp.type === 'Contract' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/20 text-blue-400'
                          }`}>
                            {exp.type}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                        
                        <div className="mb-4">
                          <h5 className="font-medium mb-2">Key Achievements:</h5>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                                <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-medium mb-3">Technologies Used:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: techIndex * 0.1 }}
                            >
                              <Badge 
                                variant="outline" 
                                className="glass border-white/20 hover:bg-white/10 transition-colors text-xs"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section - Certifications and Languages */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <Card className="glass border border-white/20 h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold gradient-text">Certifications</h3>
                </div>
                
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.title}
                      className="flex items-center justify-between p-4 glass rounded-xl border border-white/10"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div>
                        <h4 className="font-medium mb-1">{cert.title}</h4>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        <p className="text-xs text-cyan-400">{cert.date}</p>
                      </div>
                      <motion.a
                        href={cert.verifyUrl}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Languages & Soft Skills */}
          <motion.div variants={itemVariants} className="space-y-8">
            <Card className="glass border border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold gradient-text">Languages</h3>
                </div>
                
                <div className="space-y-3">
                  {languages.map((lang, index) => (
                    <div key={lang.name} className="flex justify-between items-center">
                      <span className="font-medium">{lang.name}</span>
                      <span className="text-sm text-cyan-400">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass border border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold gradient-text">Soft Skills</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {['Problem Solving', 'Team Leadership', 'Communication', 'Project Management', 'Mentoring', 'Agile/Scrum'].map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="text-sm text-center py-2 px-3 glass rounded-lg border border-white/10"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {skill}
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
