'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, MapPin } from 'lucide-react';
import { personalInfo } from '@/data/personal';
import TerminalCard from './TerminalCard';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      <div className="section-container w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div variants={itemVariants} className="space-y-2">
              <div className="flex items-center gap-2 text-surface-500">
                <MapPin size={16} />
                <span className="text-sm font-medium">{personalInfo.location}</span>
              </div>
              <p className="text-lg text-surface-600 font-medium">
                Hello, I&apos;m
              </p>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              <span className="gradient-text">{personalInfo.name.split(' ')[0]}</span>
              <br />
              <span className="text-surface-800">{personalInfo.name.split(' ').slice(1).join(' ')}</span>
            </motion.h1>

            {/* Role & Tagline */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-semibold text-surface-700">
                {personalInfo.role}
              </h2>
              <p className="text-lg text-surface-500 max-w-xl leading-relaxed">
                {personalInfo.tagline}
              </p>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-surface-600 max-w-xl leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact"
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={18} />
                Get in Touch
              </motion.a>
              <motion.a
                href="/Portfolio/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-4"
            >
              {personalInfo.socials.map((social) => {
                const IconComponent = socialIcons[social.icon as keyof typeof socialIcons];
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl glass-card text-surface-600 hover:text-surface-900 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <IconComponent />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Content - Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <TerminalCard />
            
            {/* Decorative elements */}
            <motion.div
              className="absolute -top-8 -right-8 w-24 h-24 rounded-full"
              style={{
                background: 'linear-gradient(135deg, rgba(244, 162, 97, 0.3), rgba(255, 107, 107, 0.2))',
                filter: 'blur(30px)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full"
              style={{
                background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.3), rgba(56, 189, 248, 0.2))',
                filter: 'blur(40px)',
              }}
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#skills"
            className="flex flex-col items-center gap-2 text-surface-400 hover:text-surface-600 transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

