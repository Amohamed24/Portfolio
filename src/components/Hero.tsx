'use client';

import { motion } from 'framer-motion';
import { Code, Hammer, Lightbulb } from 'lucide-react';

const tags = [
  { label: 'Engineering', icon: Code },
  { label: 'Building', icon: Hammer },
  { label: 'Problem Solving', icon: Lightbulb },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-name"
        >
          Mohamed Ahmed
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-foreground/80 font-medium mb-8"
        >
          Full Stack Software Engineer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {tags.map((tag, index) => {
            const Icon = tag.icon;
            return (
              <motion.span
                key={tag.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="flex items-center gap-2 px-5 py-2 bg-[#DBEAFE] text-foreground/80 rounded-full text-sm font-medium"
              >
                <Icon className="w-4 h-4 text-accent" />
                {tag.label}
              </motion.span>
            );
          })}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-foreground/30 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
