'use client';

import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-8">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-4"
      >
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-surface-300" />
        <div className="w-2 h-2 rounded-full bg-gradient-to-br from-accent-amber to-accent-coral" />
        <div className="w-16 h-px bg-gradient-to-r from-surface-300 to-transparent" />
      </motion.div>
    </div>
  );
}

