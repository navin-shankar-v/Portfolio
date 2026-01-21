'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const commands = [
  { prompt: '~', command: 'whoami', output: 'navin.shankar' },
  { prompt: '~', command: 'cat skills.txt', output: 'TypeScript, Python, Go, React, Node.js...' },
  { prompt: '~', command: 'echo $CURRENT_ROLE', output: 'Senior Software Engineer @ TechCorp' },
  { prompt: '~', command: 'ls projects/', output: 'api-gateway/  cli-tools/  dashboard/  ...' },
];

export default function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (visibleLines < commands.length * 2) {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
      }, visibleLines % 2 === 0 ? 800 : 400);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [visibleLines]);

  return (
    <motion.div
      className="terminal-window max-w-lg mx-auto lg:mx-0"
      whileHover={{ scale: 1.02, rotateY: 2 }}
      transition={{ duration: 0.3 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Terminal Header */}
      <div className="terminal-header">
        <div className="terminal-dot bg-red-400" />
        <div className="terminal-dot bg-yellow-400" />
        <div className="terminal-dot bg-green-400" />
        <span className="ml-3 text-xs text-white/40 font-mono">terminal — zsh</span>
      </div>

      {/* Terminal Body */}
      <div className="terminal-body min-h-[280px]">
        {commands.map((cmd, index) => {
          const commandVisible = visibleLines > index * 2;
          const outputVisible = visibleLines > index * 2 + 1;

          return (
            <div key={index} className="mb-3">
              {/* Command line */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={commandVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2"
              >
                <span className="text-accent-mint">➜</span>
                <span className="text-accent-sky">{cmd.prompt}</span>
                <span className="text-white/90">{commandVisible ? cmd.command : ''}</span>
                {commandVisible && !outputVisible && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-2 h-4 bg-accent-amber ml-0.5"
                  />
                )}
              </motion.div>

              {/* Output line */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={outputVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.3 }}
                className="text-white/60 ml-6 mt-1"
              >
                {outputVisible && cmd.output}
              </motion.div>
            </div>
          );
        })}

        {/* Final cursor */}
        {!isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <span className="text-accent-mint">➜</span>
            <span className="text-accent-sky">~</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-2 h-4 bg-accent-amber"
            />
          </motion.div>
        )}
      </div>

      {/* Decorative corner accents */}
      <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none">
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/10 rounded-tr-lg" />
      </div>
      <div className="absolute bottom-0 left-0 w-20 h-20 pointer-events-none">
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/10 rounded-bl-lg" />
      </div>
    </motion.div>
  );
}

