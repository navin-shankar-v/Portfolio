'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '@/data/personal';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-surface-200/50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <a href="#" className="text-xl font-bold tracking-tight">
              <span className="gradient-text">NS</span>
              <span className="text-surface-700">.</span>
            </a>
            <p className="text-sm text-surface-400">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </motion.div>

          {/* Center - Built with */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-1.5 text-sm text-surface-400"
          >
            <span>Built with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart size={14} className="text-accent-coral fill-accent-coral" />
            </motion.span>
            <span>using Next.js & Framer Motion</span>
          </motion.div>

          {/* Right - Back to top */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card text-surface-600 hover:text-surface-900 transition-colors group"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-sm font-medium">Back to top</span>
            <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        </div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-6 mt-8 text-sm"
        >
          {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-surface-400 hover:text-surface-700 transition-colors"
            >
              {link}
            </a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}

