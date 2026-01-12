'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  impact: string;
  github: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: 'ProviderConnect',
    description:
      'Housing technology platform connecting case managers with housing providers. Features real-time messaging and streamlined communication workflows.',
    tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    impact: '50+ active users, presented to 100+ housing professionals',
    github: 'https://github.com/username/providerconnect',
  },
  {
    title: 'HabitFlow',
    description:
      'Full-stack habit tracking application with comprehensive analytics dashboard. Helps users build and maintain positive habits through data-driven insights.',
    tech: ['Spring Boot', 'React', 'PostgreSQL', 'GitHub Actions'],
    impact: 'Deployed on Railway (backend) and Vercel (frontend)',
    github: 'https://github.com/username/habitflow',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-2"
    >
      <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 mb-3">{project.title}</h3>

      <p className="text-foreground/70 mb-4 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-accent/20 text-foreground/80 rounded-full text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="text-sm text-foreground/60 mb-6 italic">
        {project.impact}
      </p>

      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-foreground/70 hover:text-accent-dark transition-colors duration-200"
        >
          <Github className="w-5 h-5" />
          <span className="text-sm font-medium">View Code</span>
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground/70 hover:text-accent-dark transition-colors duration-200"
          >
            <ExternalLink className="w-5 h-5" />
            <span className="text-sm font-medium">Live Demo</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            A selection of projects I&apos;ve built, focusing on solving real-world
            problems with modern technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
