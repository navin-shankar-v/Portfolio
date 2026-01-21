'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experiences } from '@/data/experience';

const typeLabels = {
  fulltime: 'Full-time',
  contract: 'Contract',
  internship: 'Internship',
};

const typeColors = {
  fulltime: 'bg-accent-mint/10 text-teal-700 border-accent-mint/20',
  contract: 'bg-accent-amber/10 text-amber-700 border-accent-amber/20',
  internship: 'bg-accent-violet/10 text-violet-700 border-accent-violet/20',
};

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" className="section-padding bg-surface-50/50">
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
            Career Journey
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-surface-800">Work</span>{' '}
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-surface-500 max-w-2xl mx-auto text-lg">
            A timeline of my professional journey, building impactful software 
            and growing as an engineer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Timeline Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div className="absolute inset-0 bg-surface-200" />
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-accent-amber via-accent-coral to-accent-violet"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline Line - Mobile */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-px">
            <div className="absolute inset-0 bg-surface-200" />
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-accent-amber via-accent-coral to-accent-violet"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-0">
            {experiences.map((exp, index) => (
              <TimelineItem
                key={exp.id}
                experience={exp}
                index={index}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TimelineItemProps {
  experience: typeof experiences[0];
  index: number;
  isEven: boolean;
}

function TimelineItem({ experience, index, isEven }: TimelineItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1] 
      }}
      className={`relative md:grid md:grid-cols-2 md:gap-8 ${
        index > 0 ? 'md:mt-12' : ''
      }`}
    >
      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
        className={`absolute z-10 ${
          // Mobile positioning
          'left-6 -translate-x-1/2 ' +
          // Desktop positioning
          'md:left-1/2'
        }`}
      >
        <div className="timeline-dot" />
      </motion.div>

      {/* Content Card */}
      <div
        className={`ml-12 md:ml-0 ${
          isEven ? 'md:pr-12' : 'md:col-start-2 md:pl-12'
        }`}
      >
        <motion.div
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="glass-card rounded-2xl p-6 lg:p-8 group relative overflow-hidden"
        >
          {/* Background gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-amber/5 to-accent-coral/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Header */}
          <div className="relative space-y-3 mb-5">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                  typeColors[experience.type]
                }`}
              >
                {typeLabels[experience.type]}
              </span>
              <div className="flex items-center gap-1.5 text-surface-400 text-sm">
                <Calendar size={14} />
                <span>
                  {experience.startDate} — {experience.endDate}
                </span>
              </div>
            </div>

            <h3 className="text-xl lg:text-2xl font-bold text-surface-800 group-hover:text-accent-coral transition-colors">
              {experience.role}
            </h3>

            <div className="flex flex-wrap items-center gap-4 text-surface-500">
              <div className="flex items-center gap-1.5">
                <Briefcase size={16} className="text-accent-amber" />
                <span className="font-medium">{experience.company}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin size={16} />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <ul className="relative space-y-3 mb-6">
            {experience.description.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + i * 0.05 + 0.2 }}
                className="flex items-start gap-3 text-surface-600 text-sm lg:text-base"
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent-amber to-accent-coral flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>

          {/* Tech Stack */}
          <div className="relative flex flex-wrap gap-2">
            {experience.techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + i * 0.03 + 0.4 }}
                className="tech-badge"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden">
            <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-accent-amber/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </motion.div>
      </div>

      {/* Date indicator for desktop - opposite side */}
      <div
        className={`hidden md:flex items-center ${
          isEven ? 'md:col-start-2 md:pl-12' : 'md:pr-12 md:justify-end'
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.2 }}
          className="text-surface-400 font-medium"
        >
          {experience.startDate}
        </motion.div>
      </div>
    </motion.div>
  );
}

