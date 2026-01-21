'use client';

import { motion } from 'framer-motion';
import { Github, Folder } from 'lucide-react';
import { projects } from '@/data/projects';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const categoryColors = {
  fullstack: 'from-accent-violet/20 to-accent-sky/10',
  backend: 'from-accent-amber/20 to-accent-coral/10',
  frontend: 'from-accent-mint/20 to-accent-sky/10',
  devops: 'from-accent-coral/20 to-accent-amber/10',
  api: 'from-accent-sky/20 to-accent-violet/10',
};

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 glass-card-accent"
          >
            My Work
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-surface-800">Selected</span>{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-surface-500 max-w-2xl mx-auto text-lg">
            A collection of engineering projects showcasing system design, 
            API development, and full-stack capabilities.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-2xl overflow-hidden group flex flex-col"
            >
              {/* Project Image */}
              <div className={`relative h-48 bg-gradient-to-br ${categoryColors[project.category]}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="glass-card-dark rounded-xl p-6 text-center"
                  >
                    <Folder className="w-10 h-10 text-accent-amber mx-auto mb-2" />
                    <p className="text-white/60 text-xs capitalize">
                      {project.category}
                    </p>
                  </motion.div>
                </div>
                
                {/* GitHub Link Overlay */}
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-surface-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
                    >
                      <Github size={28} />
                    </motion.div>
                  </motion.a>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Title with GitHub link */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-xl font-bold text-surface-800 group-hover:text-accent-coral transition-colors">
                    {project.title}
                  </h3>
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="text-surface-400 hover:text-surface-700 transition-colors flex-shrink-0"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={20} />
                    </motion.a>
                  )}
                </div>

                {/* Description */}
                <p className="text-surface-500 text-sm mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="tech-badge text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
