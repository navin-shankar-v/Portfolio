'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';
import { personalInfo } from '@/data/personal';

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
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 glass-card-accent"
            >
              Get in Touch
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-surface-800">Let&apos;s</span>{' '}
              <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-surface-500 max-w-xl mx-auto text-lg">
              I&apos;m always open to discussing new opportunities, interesting projects,
              or just having a good conversation about technology.
            </p>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="glass-card rounded-3xl p-8 lg:p-12"
          >
            <div className="grid md:grid-cols-2 gap-10">
              {/* Left - Contact Info */}
              <div className="space-y-8">
                <motion.div variants={itemVariants}>
                  <h3 className="text-2xl font-bold text-surface-800 mb-4">
                    Contact Information
                  </h3>
                  <p className="text-surface-500 leading-relaxed">
                    Feel free to reach out via email or connect with me on social media.
                    I typically respond within 24-48 hours.
                  </p>
                </motion.div>

                {/* Email */}
                <motion.a
                  variants={itemVariants}
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 4 }}
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent-amber/20 to-accent-coral/10 group-hover:from-accent-amber/30 group-hover:to-accent-coral/20 transition-colors">
                    <Mail className="w-6 h-6 text-accent-coral" />
                  </div>
                  <div>
                    <p className="text-sm text-surface-400 mb-0.5">Email</p>
                    <p className="font-medium text-surface-700 group-hover:text-accent-coral transition-colors">
                      {personalInfo.email}
                    </p>
                  </div>
                </motion.a>

                {/* Location */}
                <motion.div
                  variants={itemVariants}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent-violet/20 to-accent-sky/10">
                    <MapPin className="w-6 h-6 text-accent-violet" />
                  </div>
                  <div>
                    <p className="text-sm text-surface-400 mb-0.5">Location</p>
                    <p className="font-medium text-surface-700">
                      {personalInfo.location}
                    </p>
                  </div>
                </motion.div>

                {/* Social Links */}
                <motion.div variants={itemVariants} className="pt-4">
                  <p className="text-sm text-surface-400 mb-4">Connect with me</p>
                  <div className="flex items-center gap-3">
                    {personalInfo.socials.map((social) => {
                      const IconComponent = socialIcons[social.icon as keyof typeof socialIcons];
                      return (
                        <motion.a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-xl glass-card text-surface-600 hover:text-surface-900 hover:shadow-lg transition-all duration-300"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={social.name}
                        >
                          <IconComponent />
                        </motion.a>
                      );
                    })}
                  </div>
                </motion.div>
              </div>

              {/* Right - CTA */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col justify-center"
              >
                <div className="glass-card-dark rounded-2xl p-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                    className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent-amber to-accent-coral flex items-center justify-center"
                  >
                    <Send className="w-7 h-7 text-white" />
                  </motion.div>

                  <h4 className="text-xl font-bold text-white mb-3">
                    Ready to work together?
                  </h4>
                  <p className="text-white/60 mb-6 text-sm leading-relaxed">
                    Whether you have a project in mind, a question, or just want to say hello,
                    I&apos;d love to hear from you.
                  </p>

                  <motion.a
                    href={`mailto:${personalInfo.email}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-surface-900 bg-white hover:bg-white/90 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Mail size={18} />
                    Send an Email
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

