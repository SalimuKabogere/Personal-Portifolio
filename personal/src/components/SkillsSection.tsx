import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'HTML/CSS']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs']
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Figma', 'Jest', 'Vercel']
    }
  ];

  const experience = [
    {
      role: 'Full Stack Developer',
      company: 'Freelance',
      period: '2023 - Present',
      description: 'Building modern web applications for clients using React, TypeScript, and Node.js.'
    },
    {
      role: 'Frontend Developer',
      company: 'Tech Startup',
      period: '2022 - 2023',
      description: 'Developed responsive user interfaces and collaborated on product features.'
    },
    {
      role: 'Web Developer',
      company: 'Digital Agency',
      period: '2021 - 2022',
      description: 'Created websites and web applications while learning modern development practices.'
    }
  ];

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="mb-4">Skills & Experience</h3>
          <p className="text-muted-foreground">
            Technologies I work with and my professional journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="mb-6">Technical Skills</h2>
            <div className="space-y-6">
              {skillCategories.map((category) => (
                <Card key={category.title} className="p-6">
                  <h3 className="mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-6">Experience</h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card key={index} className="p-6">
                  <h3 className="mb-1">{exp.role}</h3>
                  <h4 className="text-primary mb-2">{exp.company}</h4>
                  <p className="text-muted-foreground mb-3">{exp.period}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}