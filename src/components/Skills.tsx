'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Monitor, Server, Database, Cloud, Wrench, FlaskConical, LucideIcon } from 'lucide-react';

interface SkillCategory {
  name: string;
  skills: string[];
  icon: LucideIcon;
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend Development',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js', 'Redux Toolkit'],
    icon: Monitor,
  },
  {
    name: 'Backend Development',
    skills: ['Node.js', 'Python', 'Java', 'Express.js', 'Spring Boot', 'REST APIs', 'WebSockets', 'JWT/Auth'],
    icon: Server,
  },
  {
    name: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'SQL', 'Firebase', 'Supabase'],
    icon: Database,
  },
  {
    name: 'Cloud & DevOps',
    skills: ['AWS (EC2, RDS)', 'Google Cloud', 'Docker', 'CI/CD', 'Git', 'GitHub Actions'],
    icon: Cloud,
  },
  {
    name: 'Tools & Workflow',
    skills: ['VS Code', 'IntelliJ', 'Postman', 'Figma', 'Vercel', 'Railway'],
    icon: Wrench,
  },
  {
    name: 'Testing',
    skills: ['Jest', 'Vitest', 'React Testing Library', 'Cypress', 'JUnit 5', 'Mockito'],
    icon: FlaskConical,
  },
];

function SkillPill({ skill, index }: { skill: string; index: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, backgroundColor: 'rgba(96, 165, 250, 0.3)' }}
      className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-foreground/80 shadow-sm hover:border-accent transition-all duration-200 cursor-default"
    >
      {skill}
    </motion.span>
  );
}

function SkillCategoryCard({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = category.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300"
    >
      <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-[#DBEAFE] flex items-center justify-center">
          <Icon className="w-5 h-5 text-accent" />
        </div>
        {category.name}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, skillIndex) => (
          <SkillPill key={skill} skill={skill} index={skillIndex} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard
              key={category.name}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
