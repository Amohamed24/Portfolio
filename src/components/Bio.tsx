'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Bio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-20 items-center"
        >
          {/* Left side - Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 flex items-center gap-3">
              About Me <span className="text-3xl md:text-4xl">👋</span>
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-4">
              Full Stack Software Engineer who transitioned from clinical research
              at Gillette Children&apos;s Hospital into tech. I bring a methodical
              approach to building software shaped by years of coordinating studies
              and managing data.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Now I build products that connect people and solve real problems. From
              housing platforms serving vulnerable populations to productivity tools
              that help people build better habits, I&apos;m passionate about creating
              software that makes a meaningful impact.
            </p>
          </motion.div>

          {/* Right side - Icon card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center md:justify-center"
          >
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-12 py-16 flex flex-col items-center text-center w-80">
              <div className="w-52 h-52 rounded-full bg-accent/20 flex items-center justify-center mb-8">
                <span className="text-8xl">👨‍💻</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Driven by Impact
              </h3>
              <p className="text-sm text-foreground/60">
                Building software that connects people
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
