'use client';

import { motion } from 'framer-motion';
import { Code, Server, Layout, Database, Cloud, Wrench } from 'lucide-react';
import { skillCategories } from '@/data/skills';

const iconMap = {
  code: Code,
  server: Server,
  layout: Layout,
  database: Database,
  cloud: Cloud,
  wrench: Wrench,
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

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
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
            Technical Expertise
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-surface-800">Skills &</span>{' '}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-surface-500 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit built through years of building scalable systems, 
            APIs, and user-facing applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={category.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="glass-card rounded-2xl p-6 group relative overflow-hidden"
              >
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-accent-amber/20 to-accent-coral/10 group-hover:from-accent-amber/30 group-hover:to-accent-coral/20 transition-colors">
                    <IconComponent className="w-5 h-5 text-accent-coral" />
                  </div>
                  <h3 className="text-lg font-semibold text-surface-800">
                    {category.name}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.03 }}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium bg-surface-100/80 text-surface-700 border border-surface-200/50 hover:border-accent-amber/30 hover:bg-accent-amber/5 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Decorative gradient */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-amber/5 to-accent-violet/5" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
