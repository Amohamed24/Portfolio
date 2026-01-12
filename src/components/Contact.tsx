'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Mail, Send, Clock } from 'lucide-react';

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/Amohamed24',
    icon: <Github className="w-6 h-6" />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohamed-ahmed-0998041b3/',
    icon: <Linkedin className="w-6 h-6" />,
  },
  {
    name: 'Email',
    href: 'mailto:mmohameda97@gmail.com',
    icon: <Mail className="w-6 h-6" />,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or just having a chat about technology.
          </p>
        </motion.div>

        {/* Quick Response Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-white rounded-xl px-6 py-4 shadow-sm border border-gray-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#DBEAFE] flex items-center justify-center">
              <Clock className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="font-bold text-foreground">Quick Response</p>
              <p className="text-sm text-foreground/60">I typically respond within 24 hours</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 mb-12"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Send a Message
          </h3>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground/80 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-200 text-foreground placeholder:text-foreground/40"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground/80 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-200 text-foreground placeholder:text-foreground/40"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground/80 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Your message..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-200 text-foreground placeholder:text-foreground/40 resize-none"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-accent hover:bg-accent-dark text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200"
            >
              Send Message
              <Send className="w-4 h-4" />
            </motion.button>
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-8"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.name !== 'Email' ? '_blank' : undefined}
              rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-white hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
            >
              <div className="text-foreground/70 group-hover:text-accent-dark transition-colors duration-200">
                {link.icon}
              </div>
              <span className="text-sm font-medium text-foreground/60 group-hover:text-foreground/80 transition-colors duration-200">
                {link.name}
              </span>
            </motion.a>
          ))}
        </motion.div>

      </div>

      {/* Footer - full width */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16"
      >
        <div className="border-t border-gray-200 w-full" />
        <p className="text-sm text-foreground/40 text-center pt-8 pb-1">
          © 2025 Mohamed Ahmed. Built with Next.js, TypeScript, and Tailwind CSS
        </p>
      </motion.div>
    </section>
  );
}
